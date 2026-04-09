import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { SlideSectionLabel } from '../components/slide-section-label'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'
import { fadeUp, staggerContainer } from '../lib/animations'
import { AlertTriangle } from 'lucide-react'

const SITUATIONS = [
  {
    vi: 'Code bảo mật quan trọng',
    kr: '보안 중요 코드',
    desc_vi: 'auth, crypto, payment → chỉ người review',
    desc_kr: '인증, 암호화, 결제 → 사람이 직접 리뷰',
  },
  {
    vi: 'Logic domain mới lạ',
    kr: '새로운 도메인 로직',
    desc_vi: 'Rule không có trên internet → AI sẽ bịa ra',
    desc_kr: '인터넷에 없는 규칙 → AI가 지어냄',
  },
  {
    vi: 'Migration database trên production data',
    kr: '프로덕션 DB 마이그레이션',
    desc_vi: 'AI không hiểu data lineage',
    desc_kr: 'AI는 데이터 계보를 모름',
  },
  {
    vi: 'Code có yêu cầu compliance',
    kr: '컴플라이언스 요구 코드',
    desc_vi: 'GDPR, HIPAA → audit trail cần người ký',
    desc_kr: 'GDPR, HIPAA → 감사 증적 필요',
  },
  {
    vi: 'Không review nổi output',
    kr: '출력 리뷰 불가',
    desc_vi: 'Không hiểu thì không dùng',
    desc_kr: '이해 못 하면 사용 금지',
  },
]

export default function Slide33() {
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
          style={{ marginTop: 18, marginBottom: 28 }}
        >
          <BiText
            vi="5 tình huống KHÔNG nên dùng AI"
            kr="AI를 쓰면 안 되는 5가지 상황"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 36,
              fontWeight: 800,
              color: theme.colors.text,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
            krStyle={{ fontSize: '0.52em', marginTop: '0.35em' }}
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}
        >
          {SITUATIONS.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 2}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                background: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: 8,
                padding: '14px 20px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  flexShrink: 0,
                  width: 52,
                }}
              >
                <AlertTriangle size={16} color={theme.colors.red} />
                <span
                  style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: 18,
                    fontWeight: 700,
                    color: theme.colors.accent,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div style={{ flex: 1 }}>
                <BiText
                  vi={item.vi}
                  kr={item.kr}
                  inline
                  viStyle={{
                    fontFamily: theme.fonts.display,
                    fontSize: 17,
                    fontWeight: 700,
                    color: theme.colors.text,
                  }}
                  krStyle={{ fontSize: '0.75em' }}
                />
              </div>
              <div style={{ flex: 2 }}>
                <BiText
                  vi={item.desc_vi}
                  kr={item.desc_kr}
                  viStyle={{
                    fontFamily: theme.fonts.body,
                    fontSize: 14,
                    color: theme.colors.textSecondary,
                    lineHeight: 1.4,
                  }}
                  krStyle={{ fontSize: '0.82em', marginTop: '0.2em' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={8}
          style={{
            marginTop: 20,
            background: theme.colors.accentDim,
            border: `1px solid ${theme.colors.accent}`,
            borderRadius: 8,
            padding: '14px 24px',
          }}
        >
          <BiText
            vi="Dùng AI đúng chỗ = quyết định khôn ngoan. Dùng mọi nơi = liều lĩnh."
            kr="AI를 적절한 곳에 사용 = 현명. 모든 곳에 사용 = 무모."
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 16,
              fontWeight: 600,
              color: theme.colors.accent,
            }}
            krStyle={{ fontSize: '0.78em', marginTop: '0.3em', color: theme.colors.textSecondary }}
          />
        </motion.div>
      </div>
    </SlideLayout>
  )
}
