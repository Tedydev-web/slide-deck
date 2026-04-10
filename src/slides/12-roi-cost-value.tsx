import { motion } from 'framer-motion'
import SlideLayout, { Attribution } from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { SlideSectionLabel } from '../components/slide-section-label'
import { theme, gradients } from '../lib/theme'
import { fadeUp } from '../lib/animations'

const costs = [
  { label: 'Claude Max', value: '~$200/tháng' },
  { label: 'Codex / Cursor', value: '~$20–40/tháng' },
  { label: 'Token trung bình', value: '~$50–100/tháng' },
]

const values = [
  {
    vi: 'Tiết kiệm thời gian: 10–30% thực tế (KHÔNG phải 10x hype)',
    kr: '실제 10–30% 시간 절약 (10배 과장 아님)',
  },
  {
    vi: 'Review overhead tăng: +30% thời gian senior',
    kr: '시니어 리뷰 부하 +30%',
  },
]

const rowGap = 12
const leftCardHeight = 58
const leftCardCount = 3
const rightCardCount = 2
const rightCardHeight = Math.round(
  ((leftCardHeight * leftCardCount) + (rowGap * (leftCardCount - 1)) - rowGap) / rightCardCount,
)
const summaryCardHeight = 92

export default function Slide12RoiCostValue() {
  return (
    <SlideLayout background={gradients.subtle}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '52px 80px 60px',
        }}
      >
        <SlideSectionLabel label="KIỂM CHỨNG THỰC TẾ #1" labelKr="현실 점검 #1" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 16, marginBottom: 32 }}
        >
          <BiText
            vi="Bao nhiêu tiền để có 1 dev 'AI-powered'?"
            kr="AI 기반 개발자 1명당 비용은?"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 40,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: theme.colors.text,
            }}
            krStyle={{ fontSize: '0.55em', marginTop: '0.35em' }}
          />
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: 40,
            flex: 1,
            minHeight: 0,
          }}
        >
          {/* LEFT: cost column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12, height: '100%' }}
          >
            <BiText
              vi="Chi phí / tháng"
              kr="월 비용"
              viStyle={{
                fontFamily: theme.fonts.mono,
                fontSize: 12,
                fontWeight: 700,
                color: theme.colors.accent,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
              krStyle={{ fontSize: '0.85em', marginTop: '0.2em' }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: rowGap, flex: 1 }}>
              {costs.map((c, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '14px 18px',
                    background: theme.colors.surface,
                    border: `1px solid ${theme.colors.border}`,
                    borderRadius: 8,
                    minHeight: leftCardHeight,
                  }}
                >
                  <span
                    style={{
                      fontFamily: theme.fonts.body,
                      fontSize: 15,
                      color: theme.colors.textSecondary,
                    }}
                  >
                    {c.label}
                  </span>
                  <span
                    style={{
                      fontFamily: theme.fonts.mono,
                      fontSize: 14,
                      fontWeight: 600,
                      color: theme.colors.text,
                    }}
                  >
                    {c.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div
              style={{
                padding: '14px 18px',
                background: theme.colors.accentDim,
                border: `1px solid ${theme.colors.accent}`,
                borderRadius: 8,
                marginTop: 4,
                minHeight: summaryCardHeight,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <BiText
                vi="Tổng: ~$250–350/dev/tháng"
                kr="총: ~$250–350/개발자/월"
                viStyle={{
                  fontFamily: theme.fonts.display,
                  fontSize: 17,
                  fontWeight: 800,
                  color: theme.colors.accent,
                }}
                krStyle={{ fontSize: '0.78em', marginTop: '0.25em', color: theme.colors.accent }}
              />
            </div>
          </motion.div>

          {/* RIGHT: value column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12, height: '100%' }}
          >
            <BiText
              vi="Giá trị trả lại"
              kr="돌려받는 가치"
              viStyle={{
                fontFamily: theme.fonts.mono,
                fontSize: 12,
                fontWeight: 700,
                color: theme.colors.green,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
              krStyle={{ fontSize: '0.85em', marginTop: '0.2em' }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: rowGap, flex: 1 }}>
              {values.map((v, i) => (
                <div
                  key={i}
                  style={{
                    padding: '16px 18px',
                    background: theme.colors.surface,
                    border: `1px solid ${theme.colors.border}`,
                    borderRadius: 8,
                    minHeight: rightCardHeight,
                  }}
                >
                  <BiText
                    vi={v.vi}
                    kr={v.kr}
                    viStyle={{
                      fontFamily: theme.fonts.body,
                      fontSize: 14,
                      color: theme.colors.textSecondary,
                      lineHeight: 1.5,
                    }}
                    krStyle={{ fontSize: '0.78em', marginTop: '0.25em' }}
                  />
                </div>
              ))}
            </div>

            {/* Net value */}
            <div
              style={{
                padding: '14px 18px',
                background: theme.colors.greenDim,
                border: `1px solid ${theme.colors.green}`,
                borderRadius: 8,
                marginTop: 4,
                minHeight: summaryCardHeight,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <BiText
                vi="Giá trị ròng = thời gian tiết kiệm − chi phí review"
                kr="순 가치 = 절약 시간 − 리뷰 부하"
                viStyle={{
                  fontFamily: theme.fonts.display,
                  fontSize: 17,
                  fontWeight: 800,
                  color: theme.colors.green,
                }}
                krStyle={{ fontSize: '0.78em', marginTop: '0.25em', color: theme.colors.green }}
              />
            </div>
          </motion.div>
        </div>

        {/* ROI formula */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          style={{
            marginTop: 20,
            padding: '16px 24px',
            background: theme.colors.bgDeep,
            border: `1px solid ${theme.colors.accent}`,
            borderRadius: 8,
          }}
        >
          <span
            style={{
              fontFamily: theme.fonts.mono,
              fontSize: 13,
              color: theme.colors.accent,
              letterSpacing: '0.04em',
            }}
          >
ROI = (Thời gian tiết kiệm × Lương/giờ) − (Chi phí token + Review overhead)
          </span>
        </motion.div>
      </div>

      <Attribution>SOURCE: INTERNAL ESTIMATE + FAROS AI 2025 + CODERABBIT 2025</Attribution>
    </SlideLayout>
  )
}
