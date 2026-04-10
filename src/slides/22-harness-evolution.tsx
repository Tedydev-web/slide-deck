import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { SlideSectionLabel } from '../components/slide-section-label'
import { theme, gradients } from '../lib/theme'
import { fadeUp, staggerContainer } from '../lib/animations'

const columns = [
  {
    era: '2023',
    eraKr: '한 번 질문',
    title: 'Prompt Engineering',
    titleKr: '프롬프트 엔지니어링',
    desc: 'Viết prompt thủ công, context làm tay',
    descKr: '수작업 컨텍스트',
    tooltip:
      'Bạn viết tay mọi thứ mỗi lần: prompt, ví dụ, context. AI thụ động, không nhớ gì giữa các phiên. Không scale được.',
    tooltipKr:
      '매번 프롬프트·예시·컨텍스트를 수동 입력. AI는 수동적이며 세션 간 기억 없음. 확장 불가.',
    highlight: false,
    opacity: 0.55,
  },
  {
    era: '2024',
    eraKr: '구조화된 컨텍스트',
    title: 'Context Engineering',
    titleKr: '컨텍스트 엔지니어링',
    desc: 'CLAUDE.md, RAG, context có cấu trúc',
    descKr: 'CLAUDE.md, RAG, 구조화된 컨텍스트',
    tooltip:
      'Context được cấu trúc hoá: CLAUDE.md, RAG, embeddings tự nạp tài liệu đúng lúc. Nhưng AI vẫn chỉ đọc — chưa tự hành động.',
    tooltipKr:
      '컨텍스트를 구조화: CLAUDE.md, RAG, 임베딩이 적시에 문서 로드. 그러나 AI는 읽기만 하고 행동은 못함.',
    highlight: false,
    opacity: 0.75,
  },
  {
    era: '2025–2026',
    eraKr: '에이전트 하네스',
    title: 'Harness Engineering',
    titleKr: '하네스 엔지니어링',
    desc: 'Skills, rules, agents, guardrails',
    descKr: '스킬, 규칙, 에이전트, 가드레일',
    tooltip:
      'Runtime đầy đủ: skills, rules, sub-agents, tools, guardrails. Agent tự chạy được nhiều bước — nhưng trong khuôn khổ có giám sát.',
    tooltipKr:
      '완전한 런타임: 스킬·규칙·서브에이전트·도구·가드레일. 에이전트가 자율 실행하되 통제된 범위 내에서.',
    highlight: true,
    opacity: 1,
  },
]

export default function Slide22HarnessEvolution() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <SlideLayout background={gradients.deep}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '56px 80px 52px',
        }}
      >
        <SlideSectionLabel label="TIẾN HOÁ" labelKr="진화" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 18, marginBottom: 48 }}
        >
          <BiText
            vi="Prompt → Context → Harness"
            kr="프롬프트 → 컨텍스트 → 하네스"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 52,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: theme.colors.text,
            }}
            krStyle={{ fontSize: '0.5em', marginTop: '0.4em' }}
          />
        </motion.div>

        {/* 3-column flow */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            flex: 1,
          }}
        >
          {columns.map((col, i) => {
            const isHovered = hoveredIndex === i
            const isDimmed = hoveredIndex !== null && hoveredIndex !== i

            return (
              <div
                key={col.title}
                style={{ display: 'flex', alignItems: 'center', flex: 1 }}
              >
                <motion.div
                  variants={fadeUp}
                  custom={i + 2}
                  style={{ flex: 1, minWidth: 0 }}
                >
                  <div
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      position: 'relative',
                      cursor: 'pointer',
                      background: col.highlight
                        ? theme.colors.accentDim
                        : theme.colors.surface,
                      border: col.highlight
                        ? `2px solid ${theme.colors.accent}`
                        : `1px solid ${isHovered ? theme.colors.borderStrong : theme.colors.border}`,
                      boxShadow:
                        col.highlight || isHovered
                          ? `0 0 28px ${theme.colors.accentGlow}`
                          : undefined,
                      borderRadius: 14,
                      padding: '28px 28px',
                      opacity: isDimmed ? 0.25 : col.opacity,
                      transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                      transformOrigin: 'center',
                      transition:
                        'opacity 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 12,
                    }}
                  >
                    {/* Era badge */}
                    <div>
                      <span
                        style={{
                          fontFamily: theme.fonts.mono,
                          fontSize: 11,
                          fontWeight: 700,
                          color: col.highlight
                            ? theme.colors.accent
                            : theme.colors.textMuted,
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {col.era}
                      </span>
                      <span
                        lang="ko"
                        style={{
                          display: 'block',
                          fontFamily: theme.fonts.korean,
                          fontSize: 11,
                          color: theme.colors.textMuted,
                          marginTop: 3,
                        }}
                      >
                        {col.eraKr}
                      </span>
                    </div>

                    {/* Title */}
                    <div
                      style={{
                        fontFamily: theme.fonts.display,
                        fontSize: 20,
                        fontWeight: 800,
                        color: col.highlight
                          ? theme.colors.accent
                          : theme.colors.text,
                        lineHeight: 1.2,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {col.title}
                      <span
                        lang="ko"
                        style={{
                          display: 'block',
                          fontFamily: theme.fonts.korean,
                          fontSize: 13,
                          fontWeight: 500,
                          color: theme.colors.textMuted,
                          marginTop: 4,
                          letterSpacing: 0,
                        }}
                      >
                        {col.titleKr}
                      </span>
                    </div>

                    {/* Desc */}
                    <BiText
                      vi={col.desc}
                      kr={col.descKr}
                      viStyle={{
                        fontFamily: theme.fonts.body,
                        fontSize: 13,
                        color: theme.colors.textSecondary,
                        lineHeight: 1.5,
                      }}
                      krStyle={{ fontSize: '0.78em', marginTop: '0.2em' }}
                    />

                    {/* Hint pill when idle */}
                    <div
                      aria-hidden
                      style={{
                        marginTop: 2,
                        fontFamily: theme.fonts.mono,
                        fontSize: 9,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: theme.colors.textMuted,
                        opacity: isHovered ? 0 : 0.7,
                        transition: 'opacity 0.2s ease',
                      }}
                    >
                      Hover để xem chi tiết
                    </div>

                    {/* Hover tooltip */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          style={{
                            position: 'absolute',
                            top: 'calc(100% + 14px)',
                            left: 0,
                            right: 0,
                            background: theme.colors.bgElev,
                            border: `1px solid ${
                              col.highlight
                                ? theme.colors.accent
                                : theme.colors.borderStrong
                            }`,
                            borderRadius: 10,
                            padding: '14px 16px',
                            boxShadow: '0 12px 32px rgba(0,0,0,0.6)',
                            zIndex: 20,
                            pointerEvents: 'none',
                          }}
                        >
                          {/* Arrow indicator pointing up */}
                          <div
                            aria-hidden
                            style={{
                              position: 'absolute',
                              top: -6,
                              left: 28,
                              width: 10,
                              height: 10,
                              background: theme.colors.bgElev,
                              borderLeft: `1px solid ${
                                col.highlight
                                  ? theme.colors.accent
                                  : theme.colors.borderStrong
                              }`,
                              borderTop: `1px solid ${
                                col.highlight
                                  ? theme.colors.accent
                                  : theme.colors.borderStrong
                              }`,
                              transform: 'rotate(45deg)',
                            }}
                          />
                          <BiText
                            vi={col.tooltip}
                            kr={col.tooltipKr}
                            viStyle={{
                              fontFamily: theme.fonts.body,
                              fontSize: 12,
                              color: theme.colors.textSecondary,
                              lineHeight: 1.55,
                            }}
                            krStyle={{
                              fontSize: '0.85em',
                              marginTop: '0.35em',
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Arrow connector */}
                {i < columns.length - 1 && (
                  <motion.div
                    variants={fadeUp}
                    custom={i + 2}
                    style={{
                      padding: '0 12px',
                      flexShrink: 0,
                      color: theme.colors.textMuted,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <ArrowRight size={20} color={theme.colors.textMuted} />
                  </motion.div>
                )}
              </div>
            )
          })}
        </motion.div>
      </div>
    </SlideLayout>
  )
}
