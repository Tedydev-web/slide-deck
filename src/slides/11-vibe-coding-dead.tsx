import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { SlideSectionLabel } from '../components/slide-section-label'
import { QuoteBlock } from '../components/quote-block'
import { theme, gradients } from '../lib/theme'
import { fadeUp, staggerContainer } from '../lib/animations'

const timelineItems = [
  {
    year: 'Feb 2025',
    vi: 'Karpathy đặt tên "vibe coding" — cho prototype low-stakes, "accept all"',
    kr: 'Karpathy "바이브 코딩" 명명 — 저위험 프로토타입용, "accept all"',
    highlight: false,
  },
  {
    year: 'Mar 2025',
    vi: 'Willison đính chính: AI-assisted coding ≠ vibe coding',
    kr: 'Willison 정정: AI-assisted ≠ 바이브 코딩',
    highlight: false,
  },
  {
    year: 'Late 2025',
    vi: 'Production: fail ở architectural decisions + scale',
    kr: '프로덕션: 아키텍처 결정과 스케일에서 실패',
    highlight: false,
  },
  {
    year: '2026',
    vi: 'Agentic: Plan → Execute → Verify → Ship (Anthropic 2026)',
    kr: '에이전틱: 계획 → 실행 → 검증 → 배포',
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
            vi="Vibe Coding: Định nghĩa đã bị hiểu sai"
            kr="바이브 코딩: 오해된 정의"
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
            quote="Not all AI coding is vibe coding. Review, test, understand — it's still engineering."
            quoteKr="모든 AI 코딩이 바이브 코딩은 아닙니다. 검토, 테스트, 이해 — 여전히 엔지니어링입니다."
            source="Simon Willison, 2025"
            size="small"
          />
        </motion.div>
      </div>
    </SlideLayout>
  )
}
