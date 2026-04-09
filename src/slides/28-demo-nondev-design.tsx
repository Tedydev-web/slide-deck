import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { SlideSectionLabel } from '../components/slide-section-label'
import { theme, gradients } from '../lib/theme'
import { fadeUp, staggerContainer } from '../lib/animations'

const workflowSteps = [
  { vi: 'File Figma', kr: '피그마 파일' },
  { vi: 'AI đọc design', kr: 'AI가 디자인 읽기' },
  { vi: 'Xuất: tokens.json + tailwind.config', kr: '출력: 토큰 + 설정' },
  { vi: 'Dev tích hợp', kr: '개발자 통합' },
]

export default function Slide28DemoNondevDesign() {
  return (
    <SlideLayout background={gradients.subtle}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '52px 80px 48px',
        }}
      >
        <SlideSectionLabel label="DEMO 2 · NON-DEV" labelKr="데모 2 · 비개발" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 14, marginBottom: 6 }}
        >
          <BiText
            vi="Trích Xuất Design Token"
            kr="디자인 토큰 추출"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 44,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: theme.colors.text,
            }}
            krStyle={{ fontSize: '0.52em', marginTop: '0.3em' }}
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{ marginBottom: 32 }}
        >
          <BiText
            vi="Figma → Tailwind config trong 15 phút"
            kr="피그마 → 테일윈드 설정 15분"
            viStyle={{
              fontFamily: theme.fonts.body,
              fontSize: 15,
              color: theme.colors.textSecondary,
            }}
            krStyle={{ fontSize: '0.78em', marginTop: '0.2em' }}
          />
        </motion.div>

        {/* Workflow steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            marginBottom: 32,
          }}
        >
          {workflowSteps.map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <motion.div
                variants={fadeUp}
                custom={i + 3}
                style={{
                  flex: 1,
                  background: theme.colors.surface,
                  border: `1px solid ${theme.colors.border}`,
                  borderRadius: 10,
                  padding: '18px 16px',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: 11,
                    color: theme.colors.accent,
                    letterSpacing: '0.1em',
                    display: 'block',
                    marginBottom: 6,
                  }}
                >
                  0{i + 1}
                </span>
                <BiText
                  vi={step.vi}
                  kr={step.kr}
                  viStyle={{
                    fontFamily: theme.fonts.body,
                    fontSize: 13,
                    fontWeight: 600,
                    color: theme.colors.text,
                    lineHeight: 1.4,
                  }}
                  krStyle={{ fontSize: '0.78em', marginTop: '0.2em' }}
                />
              </motion.div>
              {i < workflowSteps.length - 1 && (
                <div style={{ padding: '0 8px', flexShrink: 0 }}>
                  <ArrowRight size={16} color={theme.colors.textMuted} />
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Comparison before/after */}
        <div style={{ display: 'flex', gap: 20 }}>
          {/* Before */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={8}
            style={{
              flex: 1,
              background: theme.colors.redDim,
              border: `1px solid ${theme.colors.red}`,
              borderRadius: 10,
              padding: '20px 24px',
            }}
          >
            <div
              style={{
                fontFamily: theme.fonts.mono,
                fontSize: 11,
                fontWeight: 700,
                color: theme.colors.red,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: 10,
              }}
            >
              BEFORE
            </div>
            <BiText
              vi="2–3 ngày designer document + dev implement"
              kr="2–3일 디자이너 문서화 + 개발자 구현"
              viStyle={{
                fontFamily: theme.fonts.body,
                fontSize: 15,
                fontWeight: 600,
                color: theme.colors.text,
                lineHeight: 1.5,
              }}
              krStyle={{ fontSize: '0.78em', marginTop: '0.25em' }}
            />
          </motion.div>

          {/* After */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={9}
            style={{
              flex: 1,
              background: theme.colors.greenDim,
              border: `1px solid ${theme.colors.green}`,
              borderRadius: 10,
              padding: '20px 24px',
            }}
          >
            <div
              style={{
                fontFamily: theme.fonts.mono,
                fontSize: 11,
                fontWeight: 700,
                color: theme.colors.green,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: 10,
              }}
            >
              AFTER
            </div>
            <BiText
              vi="15 phút, consistent, no drift"
              kr="15분, 일관성, 드리프트 없음"
              viStyle={{
                fontFamily: theme.fonts.body,
                fontSize: 15,
                fontWeight: 600,
                color: theme.colors.text,
                lineHeight: 1.5,
              }}
              krStyle={{ fontSize: '0.78em', marginTop: '0.25em' }}
            />
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  )
}
