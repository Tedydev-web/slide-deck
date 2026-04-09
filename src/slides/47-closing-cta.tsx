import { motion } from 'framer-motion'
import SlideLayout, { HLine } from '../components/SlideLayout'
import { theme, gradients } from '../lib/theme'
import { fadeUp } from '../lib/animations'

export default function Slide47() {
  return (
    <SlideLayout background={gradients.editorial}>
      <HLine width="100%" thickness={3} color={theme.colors.accent} top={0} left={0} opacity={1} />

      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '80px 120px',
          gap: 0,
          textAlign: 'center',
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          style={{ marginBottom: 32 }}
        >
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 72,
              fontWeight: 900,
              color: theme.colors.text,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            Xây harness.
          </div>
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 72,
              fontWeight: 900,
              color: theme.colors.accent,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            Đừng chỉ prompt.
          </div>
          <div
            lang="ko"
            style={{
              fontFamily: theme.fonts.korean,
              fontSize: 26,
              color: theme.colors.textMuted,
              marginTop: 16,
              fontWeight: 400,
              letterSpacing: '-0.01em',
            }}
          >
            하네스를 구축하세요. 단순히 프롬프트하지 마세요.
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{ marginBottom: 48, maxWidth: 820 }}
        >
          <div
            style={{
              fontFamily: theme.fonts.body,
              fontSize: 20,
              color: theme.colors.textSecondary,
              lineHeight: 1.6,
              marginBottom: 10,
            }}
          >
            Lợi thế không nằm ở tốc độ viết code — mà ở tốc độ biến code thành giá trị.
          </div>
          <div
            lang="ko"
            style={{
              fontFamily: theme.fonts.korean,
              fontSize: 16,
              color: theme.colors.textMuted,
              lineHeight: 1.6,
            }}
          >
            이점은 코드 작성 속도가 아니라 — 코드를 가치로 변환하는 속도에 있습니다.
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          style={{
            background: theme.colors.accentDim,
            border: `2px solid ${theme.colors.accent}`,
            borderRadius: 12,
            padding: '24px 56px',
            boxShadow: `0 0 48px ${theme.colors.accentGlow}`,
          }}
        >
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 54,
              fontWeight: 900,
              color: theme.colors.accent,
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
          >
            Giá trị &gt; Số lượng
          </div>
          <div
            lang="ko"
            style={{
              fontFamily: theme.fonts.korean,
              fontSize: 20,
              color: theme.colors.textMuted,
              marginTop: 10,
              textAlign: 'center',
            }}
          >
            가치 &gt; 수량
          </div>
        </motion.div>
      </div>

      <HLine width="100%" thickness={3} color={theme.colors.accent} bottom={0} left={0} opacity={1} />
    </SlideLayout>
  )
}
