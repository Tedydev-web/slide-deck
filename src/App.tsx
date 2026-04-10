import { useState, useEffect, useMemo, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { slideSlugs, slides } from './slides'
import { useSlideScale } from './lib/useSlideScale'
import { theme } from './lib/theme'
import { SlideIndexContext } from './components/SlideLayout'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/slide/1" replace />} />
      <Route path="/slide/:index" element={<SlideDeck />} />
      <Route path="*" element={<Navigate to="/slide/1" replace />} />
    </Routes>
  )
}

function SlideDeck() {
  const { index } = useParams<{ index: string }>()
  const navigate = useNavigate()
  const scale = useSlideScale()
  const [isTocOpen, setIsTocOpen] = useState(false)
  const total = slides.length

  const parsed = Number.parseInt(index ?? '', 10)
  const routeIndex = Number.isNaN(parsed) ? 1 : parsed
  const current = Math.max(0, Math.min(total - 1, routeIndex - 1))

  useEffect(() => {
    const expected = `/slide/${current + 1}`
    if (window.location.pathname !== expected) {
      navigate(expected, { replace: true })
    }
  }, [current, navigate])

  const labels = useMemo(
    () => slideSlugs.map((slug) => getBilingualTitle(slug)),
    [],
  )

  const goTo = useCallback((n: number) => {
    const next = Math.max(0, Math.min(total - 1, n))
    navigate(`/slide/${next + 1}`)
  }, [navigate, total])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsTocOpen(false)
        return
      }

      if (isTocOpen) return

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault()
        goTo(current + 1)
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        goTo(current - 1)
      } else if (e.key === 'Home') {
        goTo(0)
      } else if (e.key === 'End') {
        goTo(total - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, goTo, isTocOpen, total])

  const SlideComponent = slides[current]

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: theme.colors.bgDeep,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: theme.fonts.body,
      color: theme.colors.text,
    }}>
      <button
        type="button"
        aria-label="Open slide table of contents"
        onClick={() => setIsTocOpen((prev) => !prev)}
        style={{
          position: 'fixed',
          top: 50,
          right: 18,
          zIndex: 130,
          width: 46,
          height: 40,
          borderRadius: 10,
          border: `1px solid ${theme.colors.accentGlow}`,
          background: 'rgba(14,14,14,0.72)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 5,
          padding: '0 10px',
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
        }}
      >
        <span style={{ height: 2, background: theme.colors.accent, borderRadius: 999 }} />
        <span style={{ height: 2, background: theme.colors.accent, borderRadius: 999 }} />
        <span style={{ height: 2, background: theme.colors.accent, borderRadius: 999 }} />
      </button>

      <AnimatePresence>
        {isTocOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsTocOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.4)',
                zIndex: 118,
              }}
            />
            <motion.aside
              initial={{ x: 320, opacity: 0.7 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 320, opacity: 0.7 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: 360,
                height: '100%',
                zIndex: 120,
                background: 'linear-gradient(180deg, rgba(20,20,20,0.96) 0%, rgba(15,15,15,0.94) 100%)',
                borderLeft: `1px solid ${theme.colors.borderStrong}`,
                padding: '62px 16px 16px',
                overflow: 'auto',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div style={{
                fontFamily: theme.fonts.display,
                fontSize: 16,
                fontWeight: 700,
                color: theme.colors.text,
                marginBottom: 14,
                letterSpacing: '0.02em',
              }}>
                Mục lục
              </div>
              {labels.map((label, i) => {
                const active = i === current
                return (
                  <button
                    key={slideSlugs[i]}
                    type="button"
                    onClick={() => {
                      goTo(i)
                      setIsTocOpen(false)
                    }}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '10px 12px',
                      marginBottom: 6,
                      borderRadius: 10,
                      border: active ? `1px solid ${theme.colors.accentGlow}` : `1px solid ${theme.colors.border}`,
                      background: active ? 'rgba(255,87,34,0.14)' : 'rgba(255,255,255,0.02)',
                      color: active ? theme.colors.text : theme.colors.textSecondary,
                      fontFamily: theme.fonts.body,
                      fontSize: 13,
                      lineHeight: 1.35,
                      cursor: 'pointer',
                    }}
                  >
                    <span style={{
                      fontFamily: theme.fonts.mono,
                      color: active ? theme.colors.accent : theme.colors.textMuted,
                      marginRight: 8,
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ display: 'inline-flex', flexDirection: 'column', verticalAlign: 'top' }}>
                      <span>{label.vi}</span>
                      <span
                        lang="ko"
                        style={{
                          marginTop: 2,
                          fontFamily: theme.fonts.korean,
                          fontSize: 11,
                          color: active ? theme.colors.textSecondary : theme.colors.textMuted,
                          lineHeight: 1.2,
                        }}
                      >
                        {label.kr}
                      </span>
                    </span>
                  </button>
                )
              })}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Slide container */}
      <div style={{
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/*
              Provide slide index + total so every SlideLayout can render the
              corner page-number watermark automatically — no per-slide wiring.
            */}
            <SlideIndexContext.Provider value={{ index: current, total }}>
              <SlideComponent />
            </SlideIndexContext.Provider>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 3,
        background: theme.colors.border,
        zIndex: 100,
      }}>
        <motion.div
          style={{
            height: '100%',
            background: theme.colors.accent,
            boxShadow: `0 0 12px ${theme.colors.accentGlow}`,
          }}
          animate={{ width: `${((current + 1) / total) * 100}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>

      {/* Slide counter */}
      <div style={{
        position: 'fixed',
        bottom: 14,
        right: 24,
        fontFamily: theme.fonts.mono,
        fontSize: 12,
        color: theme.colors.textMuted,
        zIndex: 100,
        letterSpacing: '0.12em',
        fontVariantNumeric: 'tabular-nums',
      }}>
        {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>

      {/* Click areas for navigation */}
      <div
        aria-label="Previous slide"
        role="button"
        onClick={() => goTo(current - 1)}
        style={{
          position: 'fixed',
          left: 0, top: 0, width: '15%', height: '100%',
          cursor: current > 0 ? 'w-resize' : 'default',
          zIndex: 50,
        }}
      />
      <div
        aria-label="Next slide"
        role="button"
        onClick={() => goTo(current + 1)}
        style={{
          position: 'fixed',
          right: 0, top: 0, width: '15%', height: '100%',
          cursor: current < total - 1 ? 'e-resize' : 'default',
          zIndex: 50,
        }}
      />
    </div>
  )
}

type BilingualTitle = { vi: string; kr: string }

const tocTitles: Record<string, BilingualTitle> = {
  '01-cold-open': { vi: 'Mở đầu lạnh', kr: '콜드 오프닝' },
  '02-survey-warmup': { vi: 'Khảo sát khởi động', kr: '워밍업 설문' },
  '03-eight-objections': { vi: 'Tám phản đối', kr: '여덟 가지 반대 의견' },
  '04-productivity-data': { vi: 'Dữ liệu năng suất', kr: '생산성 데이터' },
  '05-metr-slower': { vi: 'METR chậm hơn', kr: 'METR 더 느림' },
  '06-review-bottleneck': { vi: 'Nút thắt review', kr: '리뷰 병목' },
  '07-summary-wrong-goal': { vi: 'Tóm tắt mục tiêu sai', kr: '잘못된 목표 요약' },
  '08-core-thesis': { vi: 'Luận điểm cốt lõi', kr: '핵심 논지' },
  '09-amplifier': { vi: 'Bộ khuếch đại', kr: '증폭기' },
  '10-three-level-spectrum': { vi: 'Phổ ba cấp độ', kr: '3단계 스펙트럼' },
  '11-vibe-coding-dead': { vi: 'Vibe coding đã chết', kr: '바이브 코딩은 끝났다' },
  '12-roi-cost-value': { vi: 'ROI chi phí giá trị', kr: 'ROI 비용 가치' },
  '13-data-bias-disclosure': { vi: 'Công bố thiên lệch dữ liệu', kr: '데이터 편향 공개' },
  '14-junior-ai-learning': { vi: 'Junior học với AI', kr: '주니어의 AI 학습' },
  '14a-context-bridge': { vi: 'Cầu nối ngữ cảnh', kr: '컨텍스트 브리지' },
  '15-jellyfish-pr-data': { vi: 'Dữ liệu PR kiểu Jellyfish', kr: '젤리피시 PR 데이터' },
  '16-context-concept': { vi: 'Khái niệm ngữ cảnh', kr: '컨텍스트 개념' },
  '17-context-window': { vi: 'Cửa sổ ngữ cảnh', kr: '컨텍스트 윈도우' },
  '18-seven-components': { vi: 'Bảy thành phần', kr: '일곱 구성요소' },
  '19-quality-equation': { vi: 'Phương trình chất lượng', kr: '품질 방정식' },
  '20-few-shot': { vi: 'Few-shot', kr: '퓨샷' },
  '21-rag': { vi: 'RAG', kr: 'RAG' },
  '22-harness-evolution': { vi: 'Tiến hóa Harness', kr: '하니스 진화' },
  '23-skill-definition': { vi: 'Định nghĩa Skill', kr: '스킬 정의' },
  '24-skill-how-works': { vi: 'Skill hoạt động thế nào', kr: '스킬 작동 방식' },
  '25-skill-anatomy': { vi: 'Cấu trúc Skill', kr: '스킬 구조' },
  '26-skill-trigger': { vi: 'Kích hoạt Skill', kr: '스킬 트리거' },
  '27-demo-dev-bug-fix': { vi: 'Demo dev sửa bug', kr: '개발 버그 수정 데모' },
  '28-demo-nondev-design': { vi: 'Demo thiết kế non-dev', kr: '비개발 디자인 데모' },
  '29-demo-mixed-claude-md': { vi: 'Demo trộn Claude.md', kr: 'Claude.md 혼합 데모' },
  '30-bad-vs-good': { vi: 'Xấu vs tốt', kr: '나쁨 vs 좋음' },
  '31-ai-boundaries': { vi: 'Ranh giới AI', kr: 'AI 경계' },
  '32-skill-atrophy': { vi: 'Teo kỹ năng', kr: '스킬 위축' },
  '33-when-not-to-use-ai': { vi: 'Khi không nên dùng AI', kr: 'AI를 쓰지 말아야 할 때' },
  '34-data-sandbox-security': { vi: 'Bảo mật dữ liệu sandbox', kr: '샌드박스 데이터 보안' },
  '35-guardrails': { vi: 'Hàng rào an toàn', kr: '가드레일' },
  '36-hidden-quality-costs': { vi: 'Chi phí chất lượng ẩn', kr: '숨겨진 품질 비용' },
  '37-usecase-dev': { vi: 'Use case dev', kr: '개발 유스케이스' },
  '38-usecase-qa': { vi: 'Use case QA', kr: 'QA 유스케이스' },
  '39-usecase-design': { vi: 'Use case thiết kế', kr: '디자인 유스케이스' },
  '40-usecase-marketing': { vi: 'Use case marketing', kr: '마케팅 유스케이스' },
  '41-usecase-hr': { vi: 'Use case HR', kr: 'HR 유스케이스' },
  '42-pilot-rollout-90-day': { vi: 'Rollout pilot 90 ngày', kr: '90일 파일럿 롤아웃' },
  '43-right-strategy': { vi: 'Chiến lược đúng', kr: '올바른 전략' },
  '44-best-practices': { vi: 'Thực hành tốt nhất', kr: '베스트 프랙티스' },
  '45-builtin-vs-custom': { vi: 'Built-in vs custom', kr: '빌트인 vs 커스텀' },
  '46-takeaway-metrics': { vi: 'Chỉ số trọng tâm', kr: '핵심 지표' },
  '47-closing-cta': { vi: 'Kết thúc & CTA', kr: '마무리 및 CTA' },
}

function getBilingualTitle(slug: string): BilingualTitle {
  const mapped = tocTitles[slug]
  if (mapped) return mapped
  return { vi: formatFallbackTitle(slug), kr: '-' }
}

function formatFallbackTitle(slug: string): string {
  return slug
    .replace(/^\d+[a-z]?-/, '')
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}
