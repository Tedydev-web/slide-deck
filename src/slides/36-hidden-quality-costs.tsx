import { motion } from 'framer-motion'
import SlideLayout, { Attribution } from '../components/SlideLayout'
import { SlideSectionLabel } from '../components/slide-section-label'
import { BiText } from '../components/bi-text'
import { DataBar } from '../components/data-bar'
import { theme, gradients } from '../lib/theme'
import { fadeUp } from '../lib/animations'

const BAR_DATA = [
  { label: 'Trước AI', labelKr: 'AI 이전', value: 0.5, display: '~0.5%', muted: true },
  { label: 'Sau AI', labelKr: 'AI 이후', value: 0.52, display: '~0.5%', muted: true },
]

const CALLOUTS = [
  {
    vi: 'Nhiều bug hơn ở tầng code: +9%/dev',
    kr: '코드 레벨 버그 증가: 개발자당 +9%',
    bg: theme.colors.redDim,
    border: theme.colors.red,
    textColor: theme.colors.red,
  },
  {
    vi: 'Chất lượng production không đổi',
    kr: '프로덕션 품질 변화 없음',
    bg: theme.colors.surface,
    border: theme.colors.border,
    textColor: theme.colors.textSecondary,
  },
  {
    vi: 'Team đang gánh bug bằng review nhiều hơn',
    kr: '팀이 더 많은 리뷰로 버그를 감당 중',
    bg: 'rgba(255,152,0,0.12)',
    border: 'rgba(255,152,0,0.5)',
    textColor: '#ff9800',
  },
]

export default function Slide36() {
  return (
    <SlideLayout background={gradients.deep}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '60px 100px',
          gap: 0,
        }}
      >
        <SlideSectionLabel label="SỰ THẬT #4" labelKr="사실 #4" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 20, marginBottom: 32 }}
        >
          <BiText
            vi="Chất lượng trông ổn định. Nhưng có chi phí ẩn."
            kr="품질은 안정적으로 보인다. 하지만 숨겨진 비용이 있다."
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 36,
              fontWeight: 800,
              color: theme.colors.text,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
            krStyle={{ fontSize: '0.5em', marginTop: '0.35em' }}
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{ marginBottom: 8 }}
        >
          <div
            style={{
              fontFamily: theme.fonts.mono,
              fontSize: 12,
              color: theme.colors.textMuted,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Revert rate / 되돌리기 비율
          </div>
          <DataBar
            data={BAR_DATA}
            maxValue={1}
            barHeight={32}
            labelWidth={180}
            style={{ marginBottom: 32 }}
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          style={{ display: 'flex', gap: 20, flex: 1 }}
        >
          {CALLOUTS.map((c, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                background: c.bg,
                border: `1px solid ${c.border}`,
                borderRadius: 10,
                padding: '20px 22px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <BiText
                vi={c.vi}
                kr={c.kr}
                viStyle={{
                  fontFamily: theme.fonts.display,
                  fontSize: 16,
                  fontWeight: 600,
                  color: c.textColor,
                  lineHeight: 1.4,
                }}
                krStyle={{ fontSize: '0.78em', marginTop: '0.3em' }}
              />
            </div>
          ))}
        </motion.div>
      </div>
      <Attribution>SOURCE: BUSINESS INSIDER (2026)</Attribution>
    </SlideLayout>
  )
}
