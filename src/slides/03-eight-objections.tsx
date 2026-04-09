import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { SlideSectionLabel } from '../components/slide-section-label'
import { theme, gradients } from '../lib/theme'
import { fadeUp, staggerContainer } from '../lib/animations'

const objections = [
  { vi: 'Code AI ẩu, không maintain được', kr: 'AI 코드는 엉망, 유지보수 불가' },
  { vi: 'Leak secret, security yếu', kr: '비밀 유출, 보안 취약' },
  { vi: 'Review không kịp, AI ship quá nhanh', kr: '리뷰가 못 따라감' },
  { vi: 'Junior lười học, senior mất tay nghề', kr: '주니어는 학습 안해, 시니어는 실력 잃어' },
  { vi: 'AI fail ở codebase lớn', kr: '대규모 코드베이스에서 AI 실패' },
  { vi: 'AI rồi thay dev, việc làm đâu?', kr: 'AI가 개발자를 대체하면?' },
  { vi: 'AI bịa import, bịa API', kr: 'AI가 import, API를 지어냄' },
  { vi: 'Token đắt, không đáng với lương VN', kr: '토큰 비용이 베트남 급여 대비 비쌈' },
]

export default function Slide03EightObjections() {
  return (
    <SlideLayout background={gradients.subtle}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '52px 80px',
        }}
      >
        <SlideSectionLabel label="THỰC TẾ" labelKr="현실" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 20, marginBottom: 8 }}
        >
          <BiText
            vi="Những nỗi sợ này đều hợp lý."
            kr="이 두려움들은 모두 타당합니다."
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 42,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: theme.colors.text,
            }}
            krStyle={{ fontSize: '0.6em', marginTop: '0.35em' }}
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{ marginBottom: 28 }}
        >
          <BiText
            vi="Tôi sẽ không phủ nhận."
            kr="부정하지 않겠습니다."
            viStyle={{
              fontFamily: theme.fonts.body,
              fontSize: 18,
              fontWeight: 400,
              color: theme.colors.textSecondary,
            }}
            krStyle={{ fontSize: '0.78em', marginTop: '0.3em' }}
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 20,
            flex: 1,
          }}
        >
          {objections.map((obj, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 3}
              style={{
                background: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: 8,
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 16,
              }}
            >
              <span
                style={{
                  fontFamily: theme.fonts.mono,
                  fontSize: 13,
                  fontWeight: 700,
                  color: theme.colors.accent,
                  letterSpacing: '0.05em',
                  minWidth: 28,
                  paddingTop: 2,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <BiText
                vi={obj.vi}
                kr={obj.kr}
                viStyle={{
                  fontFamily: theme.fonts.body,
                  fontSize: 15,
                  fontWeight: 500,
                  lineHeight: 1.4,
                  color: theme.colors.text,
                }}
                krStyle={{ fontSize: '0.78em', marginTop: '0.3em' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  )
}
