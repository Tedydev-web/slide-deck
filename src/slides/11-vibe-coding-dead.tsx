import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { SlideSectionLabel } from '../components/slide-section-label'
import { QuoteBlock } from '../components/quote-block'
import { theme, gradients } from '../lib/theme'
import { fadeUp, staggerContainer } from '../lib/animations'

const timelineItems = [
  {
    year: '2023',
    vi: 'Tự động hoàn thành (Copilot)',
    kr: '자동완성',
    highlight: false,
  },
  {
    year: '2024',
    vi: 'Chat-based (Cursor, ChatGPT)',
    kr: '채팅 기반',
    highlight: false,
  },
  {
    year: '2025',
    vi: 'Vibe Coding (Karpathy) — thất bại ở scale',
    kr: '바이브 코딩 → 규모에서 실패',
    highlight: false,
  },
  {
    year: '2026',
    vi: 'Agentic Coding — Kế hoạch → Thực thi → Review → Test → Ship',
    kr: '에이전틱 코딩',
    highlight: true,
  },
]

export default function Slide11VibeCodingDead() {
  return (
    <SlideLayout background={gradients.deep}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '52px 80px 40px',
        }}
      >
        <SlideSectionLabel label="DÒNG THỜI GIAN" labelKr="타임라인" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 16, marginBottom: 36 }}
        >
          <BiText
            vi="Vibe Coding đã chết. Agentic Coding lên ngôi."
            kr="바이브 코딩은 끝났다. 에이전틱 코딩의 시대."
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 44,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: theme.colors.text,
            }}
            krStyle={{ fontSize: '0.55em', marginTop: '0.35em' }}
          />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            alignItems: 'stretch',
            gap: 0,
            marginBottom: 28,
            flex: '0 0 auto',
          }}
        >
          {timelineItems.map((item, i) => (
            <motion.div
              key={item.year}
              variants={fadeUp}
              custom={i + 2}
              style={{ display: 'flex', alignItems: 'stretch', flex: 1 }}
            >
              {/* Card */}
              <div
                style={{
                  flex: 1,
                  background: item.highlight ? theme.colors.accentDim : theme.colors.surface,
                  border: item.highlight
                    ? `2px solid ${theme.colors.accent}`
                    : `1px solid ${theme.colors.border}`,
                  boxShadow: item.highlight ? `0 0 20px ${theme.colors.accentGlow}` : undefined,
                  borderRadius: 10,
                  padding: '20px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                {/* Year */}
                <span
                  style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: 13,
                    fontWeight: 700,
                    color: item.highlight ? theme.colors.accent : theme.colors.textMuted,
                    letterSpacing: '0.12em',
                  }}
                >
                  {item.year}
                </span>

                {/* Content */}
                <BiText
                  vi={item.vi}
                  kr={item.kr}
                  viStyle={{
                    fontFamily: theme.fonts.body,
                    fontSize: 13,
                    fontWeight: item.highlight ? 700 : 500,
                    color: item.highlight ? theme.colors.text : theme.colors.textSecondary,
                    lineHeight: 1.45,
                  }}
                  krStyle={{ fontSize: '0.78em', marginTop: '0.25em' }}
                />
              </div>

              {/* Connector arrow — not after last item */}
              {i < timelineItems.length - 1 && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 8px',
                    color: theme.colors.textMuted,
                    fontSize: 16,
                    flexShrink: 0,
                  }}
                >
                  →
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={7}
        >
          <QuoteBlock
            quote="Vibe coding works until architectural decisions matter."
            quoteKr="아키텍처 결정이 중요해질 때 바이브 코딩은 작동하지 않습니다."
            source="Hacker News, 2025"
            size="small"
          />
        </motion.div>
      </div>
    </SlideLayout>
  )
}
