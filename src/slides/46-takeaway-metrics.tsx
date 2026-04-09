import { motion } from 'framer-motion'
import { staggerContainer, slideUp, terminalLine } from '../lib/animations'
import SlideLayout, { Circle, DotPattern } from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'

const metrics = [
  { num: '1×', vi: 'Viết skill', kr: '1× 작성' },
  { num: '∞', vi: 'Tái sử dụng', kr: '∞ 재사용' },
  { num: '0', vi: 'Copy-paste', kr: '0 반복' },
]

export default function Slide46TakeawayMetrics() {
  return (
    <SlideLayout background={gradients.deep}>
      <Circle size={500} top={-150} right={-150} opacity={0.05} />
      <DotPattern rows={5} cols={7} bottom={40} left={60} opacity={0.1} />

      <div
        className="w-full h-full flex flex-col items-center justify-center"
        style={{ padding: '60px 80px' }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Terminal prompt — design element */}
          <motion.div
            variants={terminalLine}
            style={{
              color: theme.colors.accent,
              fontSize: 'clamp(12px, 1.2vw, 15px)',
              fontFamily: theme.fonts.mono,
              marginBottom: 24,
              opacity: 0.8,
            }}
          >
            {'>'}_&nbsp;takeaway.sh
          </motion.div>

          <motion.h2
            variants={slideUp}
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              color: theme.colors.text,
              fontWeight: 800,
              fontFamily: theme.fonts.display,
              lineHeight: 1.3,
              letterSpacing: '-0.02em',
              marginBottom: 24,
            }}
          >
            <BiText
              vi={
                <>
                  Skill biến prompt một lần
                  <br />
                  thành{' '}
                  <span style={{ color: theme.colors.accent }}>chuyên môn tái sử dụng</span>
                </>
              }
              kr="1× 작성, ∞ 재사용, 0 반복"
              krStyle={{ fontSize: '0.5em', marginTop: '0.5em', color: theme.colors.textMuted }}
            />
          </motion.h2>

          <motion.div
            variants={slideUp}
            style={{
              fontSize: 'clamp(16px, 1.8vw, 22px)',
              color: theme.colors.textSecondary,
              fontFamily: theme.fonts.body,
              marginBottom: 52,
            }}
          >
            <BiText
              vi="Tích lũy kiến thức AI của bạn theo thời gian"
              kr="시간이 지남에 따라 AI 지식을 축적하세요"
              krStyle={{ fontSize: '0.75em', marginTop: '0.35em', color: theme.colors.textMuted }}
            />
          </motion.div>

          {/* Metric trio */}
          <motion.div variants={staggerContainer} className="flex justify-center gap-14">
            {metrics.map((item, i) => (
              <motion.div key={i} variants={terminalLine} className="text-center">
                <div
                  style={{
                    color: theme.colors.accent,
                    fontSize: 'clamp(28px, 3vw, 40px)',
                    fontWeight: 800,
                    fontFamily: theme.fonts.display,
                    lineHeight: 1,
                  }}
                >
                  {item.num}
                </div>
                <BiText
                  vi={item.vi}
                  kr={item.kr}
                  viStyle={{
                    color: theme.colors.textSecondary,
                    fontSize: 'clamp(12px, 1.2vw, 15px)',
                    fontFamily: theme.fonts.body,
                    marginTop: 8,
                    display: 'block',
                  }}
                  krStyle={{ fontSize: '0.78em', marginTop: '0.3em', color: theme.colors.textMuted }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
