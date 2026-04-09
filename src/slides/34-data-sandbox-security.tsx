import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { SlideSectionLabel } from '../components/slide-section-label'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'
import { fadeUp, staggerContainer } from '../lib/animations'
import { Lock, Shield, Eye, CheckCircle2, ArrowRight } from 'lucide-react'

const FACTS = [
  {
    icon: <Lock size={20} color={theme.colors.accent} />,
    vi: 'Anthropic KHÔNG train trên data doanh nghiệp (mặc định tắt)',
    kr: 'Anthropic은 비즈니스 데이터로 학습하지 않음',
  },
  {
    icon: <Shield size={20} color={theme.colors.accent} />,
    vi: 'Claude Code sandbox — cần xin phép khi ghi file',
    kr: '쓰기 권한 필요',
  },
  {
    icon: <Eye size={20} color={theme.colors.accent} />,
    vi: 'Có sẵn NDA cho team doanh nghiệp',
    kr: '기업팀용 NDA 제공',
  },
]

const CHECKLIST = [
  '.env trong .gitignore',
  'Sandbox: workspace-write',
  'Review permission settings',
  'Ký NDA (nếu có data nhạy cảm)',
]

const FLOW = ['Code của bạn', 'Claude Code\n(local)', 'Anthropic\nAPI', 'Kết quả']

export default function Slide34() {
  return (
    <SlideLayout background={gradients.deep}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '52px 100px',
          gap: 0,
        }}
      >
        <SlideSectionLabel label="SỰ THẬT THẲNG THẮN" labelKr="솔직한 진실" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 18, marginBottom: 24 }}
        >
          <BiText
            vi="Code của bạn đi đâu?"
            kr="당신의 코드는 어디로 갑니까?"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 38,
              fontWeight: 800,
              color: theme.colors.text,
              letterSpacing: '-0.02em',
            }}
            krStyle={{ fontSize: '0.5em', marginTop: '0.35em' }}
          />
        </motion.div>

        {/* Data flow diagram */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            marginBottom: 12,
            background: theme.colors.surface,
            borderRadius: 10,
            padding: '16px 24px',
            border: `1px solid ${theme.colors.border}`,
          }}
        >
          {FLOW.map((label, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <div
                style={{
                  flex: 1,
                  background: i === 1 ? theme.colors.accentDim : theme.colors.surfaceElev,
                  border: `1px solid ${i === 1 ? theme.colors.accent : theme.colors.borderStrong}`,
                  borderRadius: 8,
                  padding: '10px 12px',
                  textAlign: 'center',
                  fontFamily: theme.fonts.mono,
                  fontSize: 13,
                  color: i === 1 ? theme.colors.accent : theme.colors.text,
                  fontWeight: 600,
                  whiteSpace: 'pre-line',
                  lineHeight: 1.3,
                }}
              >
                {label}
              </div>
              {i < FLOW.length - 1 && (
                <ArrowRight size={18} color={theme.colors.textMuted} style={{ flexShrink: 0, margin: '0 6px' }} />
              )}
            </div>
          ))}
        </motion.div>

        {/* Sandbox note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          style={{
            fontFamily: theme.fonts.mono,
            fontSize: 12,
            color: theme.colors.textMuted,
            marginBottom: 24,
            paddingLeft: 8,
            borderLeft: `2px solid ${theme.colors.border}`,
          }}
        >
          Sandbox: workspace-write · .env BLOCKED · Network: ask permission · File system: cwd only
        </motion.div>

        <div style={{ display: 'flex', gap: 32, flex: 1 }}>
          {/* Facts */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            {FACTS.map((fact, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 4}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  background: theme.colors.surface,
                  border: `1px solid ${theme.colors.border}`,
                  borderRadius: 8,
                  padding: '14px 18px',
                }}
              >
                <div style={{ flexShrink: 0, marginTop: 2 }}>{fact.icon}</div>
                <BiText
                  vi={fact.vi}
                  kr={fact.kr}
                  viStyle={{
                    fontFamily: theme.fonts.body,
                    fontSize: 15,
                    color: theme.colors.text,
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                  krStyle={{ fontSize: '0.78em', marginTop: '0.3em' }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Checklist */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={7}
            style={{
              flex: 1,
              background: theme.colors.accentDim,
              border: `1px solid ${theme.colors.accent}`,
              borderRadius: 10,
              padding: '20px 22px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <div
              style={{
                fontFamily: theme.fonts.mono,
                fontSize: 11,
                color: theme.colors.accent,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: 4,
              }}
            >
              CHECKLIST
            </div>
            {CHECKLIST.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <CheckCircle2 size={16} color={theme.colors.accent} />
                <span
                  style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: 13,
                    color: theme.colors.text,
                    fontWeight: 500,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  )
}
