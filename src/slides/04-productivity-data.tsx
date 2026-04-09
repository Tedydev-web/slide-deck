import { motion } from 'framer-motion'
import SlideLayout, { Attribution } from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { SlideSectionLabel } from '../components/slide-section-label'
import { StatBox } from '../components/stat-box'
import { DataBar } from '../components/data-bar'
import { theme, gradients } from '../lib/theme'
import { fadeUp } from '../lib/animations'

const barData = [
  { label: 'Pull Request', labelKr: 'PR', value: 110, display: '+110%' },
  { label: 'Công việc hoàn thành', labelKr: '작업 완료', value: 60, display: '+60%' },
]

export default function Slide04ProductivityData() {
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
        <SlideSectionLabel label="SỰ THẬT #1" labelKr="사실 #1" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 24, marginBottom: 8 }}
        >
          <BiText
            vi="AI tăng năng suất rõ rệt"
            kr="AI는 생산성을 눈에 띄게 향상시킵니다"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 48,
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
          style={{ marginBottom: 52 }}
        >
          <span
            style={{
              fontFamily: theme.fonts.mono,
              fontSize: 13,
              color: theme.colors.textMuted,
              letterSpacing: '0.1em',
            }}
          >
            FAROS AI — 10,000+ DEVELOPER, 1,255 TEAMS
          </span>
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 80,
            flex: 1,
          }}
        >
          {/* Left: hero stat */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            style={{ minWidth: 240 }}
          >
            <StatBox
              value="+110%"
              label="Pull Request"
              labelKr="풀 리퀘스트"
              size="hero"
              animated={false}
            />
          </motion.div>

          {/* Right: data bars */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            style={{ flex: 1 }}
          >
            <DataBar
              data={barData}
              maxValue={120}
              barHeight={48}
              labelWidth={240}
            />
          </motion.div>
        </div>
      </div>

      <Attribution>SOURCE: FAROS AI (2025)</Attribution>
    </SlideLayout>
  )
}
