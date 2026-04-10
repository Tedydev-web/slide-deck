import { motion } from 'framer-motion'
import SlideLayout, { Attribution } from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { SlideSectionLabel } from '../components/slide-section-label'
import { DataBar } from '../components/data-bar'
import { theme, gradients } from '../lib/theme'
import { fadeUp } from '../lib/animations'

const barData = [
  { label: 'Ít áp dụng AI', labelKr: 'AI 도입 낮음', value: 0.65, display: '0.65x', muted: true },
  { label: 'Áp dụng AI nhiều', labelKr: 'AI 도입 높음', value: 2.5, display: '2.5x' },
]

export default function Slide15JellyfishPrData() {
  return (
    <SlideLayout background={gradients.deep}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '60px 100px',
        }}
      >
        <SlideSectionLabel label="SỰ THẬT #1 — XÁC NHẬN THÊM" labelKr="사실 #1 — 추가 확인" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 24, marginBottom: 12 }}
        >
          <BiText
            vi="Gấp đôi PR mỗi người khi áp dụng AI nhiều"
            kr="AI를 많이 도입하면 PR이 2배"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 46,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: theme.colors.text,
            }}
            krStyle={{ fontSize: '0.6em', marginTop: '0.4em' }}
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{ marginBottom: 56 }}
        >
          <BiText
            vi="Jellyfish — hơn 700 công ty, 200,000 kỹ sư, 20 triệu pull request"
            kr="제리피시 — 700여 개 회사, 20만 명의 엔지니어, 2천만 PR"
            viStyle={{
              fontFamily: theme.fonts.mono,
              fontSize: 13,
              color: theme.colors.textMuted,
              letterSpacing: '0.06em',
            }}
            krStyle={{ fontSize: '0.85em', marginTop: '0.35em' }}
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          style={{ flex: 1, display: 'flex', alignItems: 'center' }}
        >
          <DataBar
            data={barData}
            maxValue={3}
            barHeight={56}
            labelWidth={200}
            labelGap={10}
            labelAlign="left"
            style={{ width: '92%', maxWidth: 930 }}
          />
        </motion.div>
      </div>

      <Attribution>SOURCE: JELLYFISH VIA BUSINESS INSIDER (2026)</Attribution>
    </SlideLayout>
  )
}
