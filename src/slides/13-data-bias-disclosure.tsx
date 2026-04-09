import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { SlideSectionLabel } from '../components/slide-section-label'
import { theme, gradients } from '../lib/theme'
import { fadeUp, staggerContainer } from '../lib/animations'

const warnings = [
  {
    source: 'Faros AI / Jellyfish',
    vi: 'Bán tool AI developer productivity → có incentive show data tốt',
    kr: 'AI 개발자 생산성 도구 판매 → 좋은 데이터를 보여줄 인센티브가 있음',
  },
  {
    source: 'METR RCT',
    vi: 'Dataset nhỏ nhất, nhưng là bằng chứng nhân quả duy nhất',
    kr: '가장 작은 데이터셋이지만 유일한 인과적 증거',
  },
  {
    source: 'Community quotes',
    vi: 'Reddit/HN là vocal minority, không phải số đông',
    kr: 'Reddit/HN은 목소리 큰 소수, 다수가 아님',
  },
]

export default function Slide13DataBiasDisclosure() {
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
        <SlideSectionLabel label="KIỂM CHỨNG THỰC TẾ #2" labelKr="현실 점검 #2" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 16, marginBottom: 28 }}
        >
          <BiText
            vi="Data trong buổi này có bias. Tôi nói trước."
            kr="이 자료는 편향이 있습니다. 미리 말씀드립니다."
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 38,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: theme.colors.text,
            }}
            krStyle={{ fontSize: '0.55em', marginTop: '0.35em' }}
          />
        </motion.div>

        {/* Warning cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 20 }}
        >
          {warnings.map((w, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 2}
              style={{
                background: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: 10,
                padding: '20px 24px',
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
              }}
            >
              <AlertTriangle
                size={20}
                color={theme.colors.accent}
                style={{ flexShrink: 0, marginTop: 2 }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span
                  style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: 11,
                    fontWeight: 700,
                    color: theme.colors.accent,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  {w.source}
                </span>
                <BiText
                  vi={w.vi}
                  kr={w.kr}
                  viStyle={{
                    fontFamily: theme.fonts.body,
                    fontSize: 14,
                    color: theme.colors.textSecondary,
                    lineHeight: 1.5,
                  }}
                  krStyle={{ fontSize: '0.78em', marginTop: '0.2em' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Conclusion box */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={6}
          style={{
            padding: '20px 24px',
            border: `1px solid ${theme.colors.accent}`,
            borderRadius: 10,
            background: theme.colors.accentDim,
          }}
        >
          <BiText
            vi="Nhưng đây vẫn là data lớn nhất hiện có. Không dùng data này = dùng linh cảm."
            kr="하지만 이것이 현재 가장 큰 데이터입니다. 이 데이터를 안 쓰면 = 감에 의존하는 것."
            viStyle={{
              fontFamily: theme.fonts.body,
              fontSize: 15,
              fontWeight: 600,
              color: theme.colors.text,
              lineHeight: 1.5,
            }}
            krStyle={{ fontSize: '0.78em', marginTop: '0.3em' }}
          />
        </motion.div>
      </div>
    </SlideLayout>
  )
}
