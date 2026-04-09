import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'
import { fadeUp } from '../lib/animations'

export default function Slide09Amplifier() {
  return (
    <SlideLayout background={gradients.subtle}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 100px',
          gap: 0,
        }}
      >
        {/* Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginBottom: 48 }}
        >
          <BiText
            vi="AI không thay bạn. AI khuếch đại bạn."
            kr="AI는 당신을 대체하지 않습니다. AI는 당신을 증폭합니다."
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 52,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: theme.colors.text,
            }}
            krStyle={{ fontSize: '0.52em', marginTop: '0.4em' }}
          />
        </motion.div>

        {/* Top card — green */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{
            background: theme.colors.greenDim,
            border: `1px solid ${theme.colors.green}`,
            borderRadius: 12,
            padding: '28px 36px',
            marginBottom: 16,
          }}
        >
          <BiText
            vi="Hệ thống tốt + AI → kết quả tốt hơn"
            kr="좋은 시스템 + AI → 더 나은 결과"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 28,
              fontWeight: 700,
              color: theme.colors.green,
              letterSpacing: '-0.01em',
            }}
            krStyle={{ fontSize: '0.78em', marginTop: '0.35em', color: theme.colors.green }}
          />
        </motion.div>

        {/* Bottom card — red */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          style={{
            background: theme.colors.redDim,
            border: `1px solid ${theme.colors.red}`,
            borderRadius: 12,
            padding: '28px 36px',
          }}
        >
          <BiText
            vi="Hệ thống tệ + AI → thảm họa nhanh hơn"
            kr="나쁜 시스템 + AI → 더 빠른 재앙"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 28,
              fontWeight: 700,
              color: theme.colors.red,
              letterSpacing: '-0.01em',
            }}
            krStyle={{ fontSize: '0.78em', marginTop: '0.35em', color: theme.colors.red }}
          />
        </motion.div>
      </div>
    </SlideLayout>
  )
}
