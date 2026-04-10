import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { SlideSectionLabel } from '../components/slide-section-label'
import { BiText } from '../components/bi-text'
import { QuoteBlock } from '../components/quote-block'
import { theme, gradients } from '../lib/theme'
import { fadeUp } from '../lib/animations'

export default function Slide32() {
  return (
    <SlideLayout background={gradients.subtle}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '64px 100px',
          gap: 0,
        }}
      >
        <SlideSectionLabel label="SỰ THẬT THẲNG THẮN" labelKr="솔직한 진실" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 24, marginBottom: 36 }}
        >
          <BiText
            vi="Dùng AI đúng cách vs Dùng AI sai cách"
            kr="AI를 올바르게 vs 잘못 사용하기"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 38,
              fontWeight: 800,
              color: theme.colors.text,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
            krStyle={{ fontSize: '0.5em', marginTop: '0.4em' }}
          />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
          {/* Bad block */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            style={{
              background: theme.colors.redDim,
              border: `1px solid ${theme.colors.red}`,
              borderRadius: 10,
              padding: '24px 32px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <span
                style={{
                  fontFamily: theme.fonts.mono,
                  fontSize: 11,
                  color: theme.colors.red,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                ✗ HẠI / 해로움
              </span>
            </div>
            <BiText
              vi="Outsource tư duy → HẠI"
              kr="사고를 외주화 → 해로움"
              viStyle={{
                fontFamily: theme.fonts.display,
                fontSize: 24,
                fontWeight: 700,
                color: theme.colors.text,
              }}
              krStyle={{ fontSize: '0.65em', marginTop: '0.2em' }}
            />
            <BiText
              vi="Copy-paste mọi lúc, không hiểu code"
              kr="항상 복붙, 코드 이해 안 함"
              viStyle={{
                fontFamily: theme.fonts.body,
                fontSize: 16,
                color: theme.colors.textSecondary,
                marginTop: 10,
              }}
              krStyle={{ fontSize: '0.8em', marginTop: '0.2em' }}
            />
          </motion.div>

          {/* Good block */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            style={{
              background: theme.colors.accentDim,
              border: `1px solid ${theme.colors.accent}`,
              borderRadius: 10,
              padding: '24px 32px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <span
                style={{
                  fontFamily: theme.fonts.mono,
                  fontSize: 11,
                  color: theme.colors.accent,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                ✓ TỐT / 유익함
              </span>
            </div>
            <BiText
              vi="AI as mentor, reviewer → TỐT"
              kr="AI를 멘토, 리뷰어로 → 유익함"
              viStyle={{
                fontFamily: theme.fonts.display,
                fontSize: 24,
                fontWeight: 700,
                color: theme.colors.text,
              }}
              krStyle={{ fontSize: '0.65em', marginTop: '0.2em' }}
            />
            <BiText
              vi="Hỏi 'tại sao', học từ AI"
              kr="'왜'를 묻고 AI에서 배움"
              viStyle={{
                fontFamily: theme.fonts.body,
                fontSize: 16,
                color: theme.colors.textSecondary,
                marginTop: 10,
              }}
              krStyle={{ fontSize: '0.8em', marginTop: '0.2em' }}
            />
          </motion.div>
        </div>

        <QuoteBlock
          quote="Khi AI làm hết việc vặt, junior không còn chỗ tập nghề. Thang nghề rỗng ruột."
          quoteKr="AI가 잡일 다 하면, 주니어는 배울 자리가 없다. 커리어 사다리가 비어간다."
          size="small"
          delay={4}
        />
      </div>
    </SlideLayout>
  )
}
