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
              fontSize: 22,
              color: theme.colors.textSecondary,
              lineHeight: 1.55,
              marginBottom: 10,
              fontStyle: 'italic',
            }}
          >
            Hãy để AI trở thành bạn đồng hành — không phải sự thay thế.
          </div>
          <div
            lang="ko"
            style={{
              fontFamily: theme.fonts.korean,
              fontSize: 16,
              color: theme.colors.textMuted,
              lineHeight: 1.55,
            }}
          >
            AI를 동반자로 — 대체가 아닌.
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

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={6}
          style={{
            marginTop: 28,
            fontFamily: theme.fonts.mono,
            fontSize: 16,
            letterSpacing: '0.08em',
            textAlign: 'center',
          }}
        >
          <span style={{ color: theme.colors.accent, fontWeight: 700 }}>Community</span>
          <span style={{ color: theme.colors.textMuted, margin: '0 10px' }}>&gt;</span>
          <span style={{ color: theme.colors.textSecondary }}>Competition</span>
          <div
            lang="ko"
            style={{
              fontFamily: theme.fonts.korean,
              fontSize: 13,
              color: theme.colors.textMuted,
              marginTop: 6,
              letterSpacing: '0.04em',
            }}
          >
            커뮤니티 &gt; 경쟁
          </div>
        </motion.div>
      </div>

      <HLine width="100%" thickness={3} color={theme.colors.accent} bottom={0} left={0} opacity={1} />
    </SlideLayout>
  )
}
