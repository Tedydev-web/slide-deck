import { motion } from 'framer-motion'
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
    highlight: true,
    opacity: 1,
  },
]

export default function Slide22HarnessEvolution() {
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
          {columns.map((col, i) => (
            <div
              key={col.title}
              style={{ display: 'flex', alignItems: 'center', flex: 1 }}
            >
              <motion.div
                variants={fadeUp}
                custom={i + 2}
                style={{
                  flex: 1,
                  background: col.highlight ? theme.colors.accentDim : theme.colors.surface,
                  border: col.highlight
                    ? `2px solid ${theme.colors.accent}`
                    : `1px solid ${theme.colors.border}`,
                  boxShadow: col.highlight
                    ? `0 0 28px ${theme.colors.accentGlow}`
                    : undefined,
                  borderRadius: 14,
                  padding: '28px 28px',
                  opacity: col.opacity,
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
                      color: col.highlight ? theme.colors.accent : theme.colors.textMuted,
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
                    color: col.highlight ? theme.colors.accent : theme.colors.text,
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
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  )
}
