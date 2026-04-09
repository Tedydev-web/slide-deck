import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { SlideSectionLabel } from '../components/slide-section-label'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'
import { fadeUp, staggerContainer } from '../lib/animations'
import { ArrowRight } from 'lucide-react'

const PHASES = [
  {
    week: 'Tuần 1-2',
    weekKr: '1-2주차',
    title: 'Chỉ Autocomplete',
    titleKr: '자동완성만',
    items: ['Cài Cursor/Copilot cho các dev tình nguyện', 'Không đổi process'],
    kpi: 'KPI: tỉ lệ dùng, cảm nhận',
    accent: false,
  },
  {
    week: 'Tuần 3-4',
    weekKr: '3-4주차',
    title: 'Chat hỗ trợ',
    titleKr: '채팅 기반',
    items: ['Claude Max cho 3 dev tình nguyện', 'Xác định list task chat-safe'],
    kpi: 'KPI: task xong, thời gian review',
    accent: false,
  },
  {
    week: 'Tháng 2',
    weekKr: '2개월차',
    title: 'Giới thiệu Agentic',
    titleKr: '에이전틱 도입',
    items: ['Claude Code cho 1-2 senior devs', 'CLAUDE.md + custom skills'],
    kpi: 'KPI: chất lượng PR, tỉ lệ bug',
    accent: false,
  },
  {
    week: 'Tháng 3',
    weekKr: '3개월차',
    title: 'Đánh giá & Quyết định',
    titleKr: '평가 및 결정',
    items: ['Team retro', 'ROI = giờ tiết kiệm ÷ giờ đầu tư'],
    kpi: 'Dừng nếu ROI < 1.0 sau 90 ngày',
    accent: true,
  },
]

export default function Slide42() {
  return (
    <SlideLayout background={gradients.deep}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '52px 100px',
          gap: 0,
        }}
      >
        <SlideSectionLabel label="KẾ HOẠCH HÀNH ĐỘNG" labelKr="액션 플랜" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 18, marginBottom: 32 }}
        >
          <BiText
            vi="Pilot Rollout — 90 ngày đầu"
            kr="파일럿 롤아웃 — 첫 90일"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 40,
              fontWeight: 800,
              color: theme.colors.text,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
            krStyle={{ fontSize: '0.5em', marginTop: '0.35em' }}
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', gap: 16, alignItems: 'stretch', flex: 1 }}
        >
          {PHASES.map((phase, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <motion.div
                variants={fadeUp}
                custom={i + 2}
                style={{
                  flex: 1,
                  background: phase.accent ? theme.colors.accentDim : theme.colors.surface,
                  border: `1px solid ${phase.accent ? theme.colors.accent : theme.colors.border}`,
                  borderRadius: 10,
                  padding: '20px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  height: '100%',
                  boxShadow: phase.accent ? `0 0 24px ${theme.colors.accentGlow}` : 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: 11,
                    color: phase.accent ? theme.colors.accent : theme.colors.textMuted,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  {phase.week}
                  <span lang="ko" style={{ fontFamily: theme.fonts.korean, marginLeft: 6, fontSize: 10 }}>
                    {phase.weekKr}
                  </span>
                </div>
                <BiText
                  vi={phase.title}
                  kr={phase.titleKr}
                  viStyle={{
                    fontFamily: theme.fonts.display,
                    fontSize: 17,
                    fontWeight: 700,
                    color: phase.accent ? theme.colors.accent : theme.colors.text,
                    lineHeight: 1.2,
                  }}
                  krStyle={{ fontSize: '0.7em', marginTop: '0.3em' }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
                  {phase.items.map((item, j) => (
                    <div
                      key={j}
                      style={{
                        fontFamily: theme.fonts.body,
                        fontSize: 13,
                        color: theme.colors.textSecondary,
                        lineHeight: 1.4,
                        paddingLeft: 12,
                        borderLeft: `2px solid ${theme.colors.border}`,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: 11,
                    color: phase.accent ? theme.colors.red : theme.colors.textMuted,
                    borderTop: `1px solid ${theme.colors.border}`,
                    paddingTop: 8,
                    lineHeight: 1.4,
                  }}
                >
                  {phase.kpi}
                </div>
              </motion.div>
              {i < PHASES.length - 1 && (
                <ArrowRight size={16} color={theme.colors.textMuted} style={{ flexShrink: 0, margin: '0 4px' }} />
              )}
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={7}
          style={{ marginTop: 20 }}
        >
          <BiText
            vi="Không phải 'dùng AI everywhere'. Là 'học cách dùng AI đúng chỗ'."
            kr="'모든 곳에 AI 사용'이 아니라, 'AI를 올바른 곳에 사용하는 법을 배우기'."
            viStyle={{
              fontFamily: theme.fonts.body,
              fontSize: 15,
              color: theme.colors.textSecondary,
              fontStyle: 'italic',
            }}
            krStyle={{ fontSize: '0.8em', marginTop: '0.2em' }}
          />
        </motion.div>
      </div>
    </SlideLayout>
  )
}
