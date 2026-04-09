import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { SlideSectionLabel } from '../components/slide-section-label'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'
import { fadeUp } from '../lib/animations'
import { ArrowRight, X, Check } from 'lucide-react'

const STEPS = [
  { label: 'Figma file', mono: true },
  { label: 'AI extract', mono: false },
  { label: 'tokens.json +\nTailwind config', mono: true },
  { label: 'Match naming\nconventions', mono: false },
]

export default function Slide39() {
  return (
    <SlideLayout background={gradients.subtle}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '56px 100px',
          gap: 0,
        }}
      >
        <SlideSectionLabel label="ÁP DỤNG · DESIGN" labelKr="활용 · 디자인" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 18, marginBottom: 8 }}
        >
          <BiText
            vi="Design: Token Extraction → Code"
            kr="디자인: 토큰 추출 → 코드"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 38,
              fontWeight: 800,
              color: theme.colors.text,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
            krStyle={{ fontSize: '0.5em', marginTop: '0.3em' }}
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
            vi="Không còn 'dev dùng sai màu xanh'"
            kr="더 이상 '개발자가 잘못된 파란색을 사용'하지 않음"
            viStyle={{ fontFamily: theme.fonts.body, fontSize: 16, color: theme.colors.textSecondary }}
            krStyle={{ fontSize: '0.8em', marginTop: '0.2em' }}
          />
        </motion.div>

        {/* Workflow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            marginBottom: 28,
            background: theme.colors.surface,
            borderRadius: 10,
            padding: '16px 20px',
            border: `1px solid ${theme.colors.border}`,
          }}
        >
          {STEPS.map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <div
                style={{
                  flex: 1,
                  background: i === 0 || i === 2 ? theme.colors.accentDim : theme.colors.surfaceElev,
                  border: `1px solid ${i === 0 || i === 2 ? theme.colors.accent : theme.colors.border}`,
                  borderRadius: 8,
                  padding: '12px 14px',
                  textAlign: 'center',
                  fontFamily: step.mono ? theme.fonts.mono : theme.fonts.body,
                  fontSize: step.mono ? 12 : 13,
                  color: i === 0 || i === 2 ? theme.colors.accent : theme.colors.text,
                  fontWeight: 600,
                  whiteSpace: 'pre-line',
                  lineHeight: 1.35,
                }}
              >
                {step.label}
              </div>
              {i < STEPS.length - 1 && (
                <ArrowRight size={16} color={theme.colors.textMuted} style={{ flexShrink: 0, margin: '0 8px' }} />
              )}
            </div>
          ))}
        </motion.div>

        <div style={{ display: 'flex', gap: 24, flex: 1 }}>
          {/* Before */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            style={{
              flex: 1,
              background: theme.colors.redDim,
              border: `1px solid ${theme.colors.red}`,
              borderRadius: 10,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <X size={16} color={theme.colors.red} />
              <span style={{ fontFamily: theme.fonts.mono, fontSize: 11, color: theme.colors.red, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Trước</span>
            </div>
            <BiText
              vi="Dev dùng #3B82F6, designer muốn #3A86F1 → tranh luận 20 phút"
              kr="개발자 vs 디자이너 색상 불일치 → 20분 논의"
              viStyle={{ fontFamily: theme.fonts.body, fontSize: 15, color: theme.colors.textSecondary, lineHeight: 1.5 }}
              krStyle={{ fontSize: '0.8em', marginTop: '0.3em' }}
            />
          </motion.div>

          {/* After */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            style={{
              flex: 1,
              background: theme.colors.accentDim,
              border: `1px solid ${theme.colors.accent}`,
              borderRadius: 10,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Check size={16} color={theme.colors.accent} />
              <span style={{ fontFamily: theme.fonts.mono, fontSize: 11, color: theme.colors.accent, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Sau</span>
            </div>
            <BiText
              vi="Token đã extract, enforce trong code → 0 tranh luận"
              kr="토큰 추출, 코드 강제 적용 → 0분 논의"
              viStyle={{ fontFamily: theme.fonts.body, fontSize: 15, color: theme.colors.text, lineHeight: 1.5 }}
              krStyle={{ fontSize: '0.8em', marginTop: '0.3em' }}
            />
          </motion.div>

          {/* Stat */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={6}
            style={{
              width: 200,
              background: theme.colors.surface,
              border: `1px solid ${theme.colors.borderStrong}`,
              borderRadius: 10,
              padding: '20px 16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <div style={{ fontFamily: theme.fonts.display, fontSize: 28, fontWeight: 800, color: theme.colors.accent, textAlign: 'center', lineHeight: 1.1 }}>2-3 ngày</div>
            <div style={{ fontFamily: theme.fonts.mono, fontSize: 18, color: theme.colors.textMuted }}>→</div>
            <div style={{ fontFamily: theme.fonts.display, fontSize: 28, fontWeight: 800, color: theme.colors.green, textAlign: 'center', lineHeight: 1.1 }}>15 phút</div>
            <div lang="ko" style={{ fontFamily: theme.fonts.korean, fontSize: 12, color: theme.colors.textMuted, textAlign: 'center', marginTop: 4 }}>2-3일 → 15분</div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  )
}
