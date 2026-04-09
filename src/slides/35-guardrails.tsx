import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { SlideSectionLabel } from '../components/slide-section-label'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'
import { fadeUp, staggerContainer } from '../lib/animations'
import { Lock, Eye, Shield } from 'lucide-react'

const PRINCIPLES = [
  {
    icon: <Lock size={32} color={theme.colors.accent} />,
    name: 'QUYỀN TỐI THIỂU',
    nameKr: '최소 권한',
    vi: 'Giới hạn quyền tự động — AI chỉ làm việc cần thiết',
    kr: '자동 권한 제한, AI가 필요한 작업만 수행',
  },
  {
    icon: <Eye size={32} color={theme.colors.accent} />,
    name: 'QUAN SÁT ĐẦY ĐỦ',
    nameKr: '강력한 관찰성',
    vi: 'Log mọi hành động — trace mọi quyết định',
    kr: '모든 행동 기록, 모든 결정 추적',
  },
  {
    icon: <Shield size={32} color={theme.colors.accent} />,
    name: 'DUAL-LLM PATTERN',
    nameKr: '이중 LLM 패턴',
    vi: 'LLM có quyền + LLM bị cô lập — tách bạch trách nhiệm',
    kr: '권한 분리 + 격리, 관심사 분리',
  },
]

export default function Slide35() {
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
        <SlideSectionLabel label="NGUYÊN TẮC" labelKr="프레임워크" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 24, marginBottom: 48 }}
        >
          <BiText
            vi="Guardrails — 3 nguyên tắc an toàn"
            kr="가드레일 — 3가지 안전 원칙"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 42,
              fontWeight: 800,
              color: theme.colors.text,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
            krStyle={{ fontSize: '0.5em', marginTop: '0.4em' }}
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', gap: 28, flex: 1 }}
        >
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 2}
              style={{
                flex: 1,
                background: theme.colors.surface,
                border: `1px solid ${theme.colors.borderStrong}`,
                borderRadius: 12,
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                borderTop: `3px solid ${theme.colors.accent}`,
              }}
            >
              {p.icon}
              <div>
                <div
                  style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: 13,
                    fontWeight: 700,
                    color: theme.colors.accent,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: 4,
                  }}
                >
                  {p.name}
                </div>
                <div
                  lang="ko"
                  style={{
                    fontFamily: theme.fonts.korean,
                    fontSize: 13,
                    color: theme.colors.textMuted,
                    letterSpacing: '0.04em',
                  }}
                >
                  {p.nameKr}
                </div>
              </div>
              <BiText
                vi={p.vi}
                kr={p.kr}
                viStyle={{
                  fontFamily: theme.fonts.body,
                  fontSize: 16,
                  color: theme.colors.textSecondary,
                  lineHeight: 1.55,
                  fontWeight: 400,
                }}
                krStyle={{ fontSize: '0.8em', marginTop: '0.4em' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  )
}
