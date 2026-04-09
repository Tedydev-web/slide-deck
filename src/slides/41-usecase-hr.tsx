import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { SlideSectionLabel } from '../components/slide-section-label'
import { BiText } from '../components/bi-text'
import { StatBox } from '../components/stat-box'
import { theme, gradients } from '../lib/theme'
import { fadeUp, staggerContainer } from '../lib/animations'

const EXAMPLES = [
  { vi: 'Sinh chương trình onboarding', kr: '온보딩 프로그램 생성' },
  { vi: 'Benchmark lương theo thị trường', kr: '급여 벤치마킹' },
  { vi: 'Phân tích survey + rút ra themes', kr: '설문 분석 + 주제' },
]

export default function Slide41() {
  return (
    <SlideLayout background={gradients.warm}>
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
        <SlideSectionLabel label="ÁP DỤNG · HR" labelKr="활용 · HR" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 20, marginBottom: 40 }}
        >
          <BiText
            vi="HR: Từ hành chính → Đối tác chiến lược"
            kr="HR: 행정에서 전략적 파트너로"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 42,
              fontWeight: 800,
              color: theme.colors.text,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
            krStyle={{ fontSize: '0.5em', marginTop: '0.35em' }}
          />
        </motion.div>

        <div style={{ display: 'flex', gap: 48, flex: 1, alignItems: 'center' }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <StatBox
              value="80%"
              label="Thời gian admin"
              labelKr="행정 시간"
              sublabel="AI làm trong 5 phút"
              sublabelKr="AI가 5분에"
              size="hero"
              align="center"
              delay={2}
            />
          </motion.div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              style={{
                fontFamily: theme.fonts.mono,
                fontSize: 11,
                color: theme.colors.textMuted,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              Examples / 예시
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              {EXAMPLES.map((ex, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i + 4}
                  style={{
                    background: theme.colors.surface,
                    border: `1px solid ${theme.colors.borderStrong}`,
                    borderRadius: 10,
                    padding: '18px 24px',
                    borderLeft: `3px solid ${theme.colors.accent}`,
                  }}
                >
                  <BiText
                    vi={ex.vi}
                    kr={ex.kr}
                    viStyle={{
                      fontFamily: theme.fonts.display,
                      fontSize: 20,
                      fontWeight: 600,
                      color: theme.colors.text,
                    }}
                    krStyle={{ fontSize: '0.72em', marginTop: '0.3em' }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
