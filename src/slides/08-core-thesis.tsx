import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'
import { fadeUp } from '../lib/animations'

export default function Slide08CoreThesis() {
  return (
    <SlideLayout background={gradients.editorial}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '80px 120px',
          textAlign: 'center',
        }}
      >
        {/* Main title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <BiText
            vi="Trình mình ở đâu, trình AI ở đó."
            kr="당신의 실력이 AI의 실력입니다."
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 80,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: theme.colors.text,
            }}
            krStyle={{ fontSize: '0.42em', marginTop: '0.5em', color: theme.colors.textMuted }}
          />
        </motion.div>

        {/* Accent bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{
            width: 80,
            height: 4,
            background: theme.colors.accent,
            borderRadius: 2,
            margin: '36px auto',
          }}
        />

        {/* Subtitle */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <BiText
            vi="Cùng một tool. Cùng một model. Hai người — hai kết quả hoàn toàn khác."
            kr="같은 도구. 같은 모델. 두 사람 — 완전히 다른 결과."
            viStyle={{
              fontFamily: theme.fonts.body,
              fontSize: 22,
              fontWeight: 400,
              lineHeight: 1.55,
              color: theme.colors.textSecondary,
              letterSpacing: '-0.01em',
            }}
            krStyle={{ fontSize: '0.78em', marginTop: '0.5em' }}
          />
        </motion.div>
      </div>
    </SlideLayout>
  )
}
