import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'
import { fadeUp } from '../lib/animations'

export default function Slide01ColdOpen() {
  return (
    <SlideLayout background={gradients.editorial}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 120px',
        }}
      >
        {/* Main title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <BiText
            vi="Tôi không đến để bán AI."
            kr="AI를 팔려고 온 게 아닙니다."
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: theme.colors.text,
            }}
            krStyle={{
              fontSize: '0.52em',
              marginTop: '0.5em',
              color: theme.colors.textMuted,
            }}
          />
        </motion.div>

        {/* Orange accent bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{
            width: 60,
            height: 4,
            background: theme.colors.accent,
            marginTop: 36,
            marginBottom: 36,
            borderRadius: 2,
          }}
        />

        {/* Subtitle */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <BiText
            vi="Tôi đến để nói: chúng ta đã dùng AI sai ở đâu, và workflow nào mới đáng để tin."
            kr="AI를 어디서 잘못 사용했는지, 어떤 워크플로우를 신뢰할 수 있는지 이야기하러 왔습니다."
            viStyle={{
              fontFamily: theme.fonts.body,
              fontSize: 24,
              fontWeight: 400,
              lineHeight: 1.55,
              color: theme.colors.textSecondary,
              maxWidth: 800,
            }}
            krStyle={{
              fontSize: '0.78em',
              marginTop: '0.6em',
              color: theme.colors.textMuted,
            }}
          />
        </motion.div>
      </div>
    </SlideLayout>
  )
}
