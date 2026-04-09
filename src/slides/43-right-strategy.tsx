import { motion } from 'framer-motion'
import SlideLayout, { Attribution } from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'
import { fadeUp, staggerContainer } from '../lib/animations'
import { Check } from 'lucide-react'

const STRATEGIES = [
  {
    num: '01',
    vi: 'Giảm chi phí review',
    kr: '리뷰 비용 절감',
    desc_vi: 'Tự động hóa review, AI tóm tắt PR',
    desc_kr: '리뷰 자동화, PR 요약',
  },
  {
    num: '02',
    vi: 'Tăng cường kiểm thử',
    kr: '테스트 강화',
    desc_vi: 'Bắt bug trước khi review',
    desc_kr: '리뷰 전 버그 포착',
  },
  {
    num: '03',
    vi: 'Rút ngắn vòng phản hồi',
    kr: '피드백 루프 단축',
    desc_vi: 'Ship → đo → học → lặp',
    desc_kr: '배포 → 측정 → 학습 → 반복',
  },
  {
    num: '04',
    vi: 'Ra quyết định sản phẩm tốt hơn',
    kr: '더 나은 제품 결정',
    desc_vi: 'Xây đúng thứ cần',
    desc_kr: '필요한 것을 만들기',
  },
]

export default function Slide43() {
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
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}
        >
          <Check size={20} color={theme.colors.green} />
          <span
            style={{
              fontFamily: theme.fonts.mono,
              fontSize: 13,
              color: theme.colors.green,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              fontWeight: 700,
            }}
          >
            CHIẾN LƯỢC ĐÚNG
          </span>
          <span
            lang="ko"
            style={{
              fontFamily: theme.fonts.korean,
              fontSize: 12,
              color: theme.colors.textMuted,
              marginLeft: 4,
            }}
          >
            올바른 전략
          </span>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginBottom: 32 }}
        >
          <BiText
            vi="Dùng AI để giải toả điểm nghẽn giá trị"
            kr="AI를 사용하여 가치 병목을 해소하라"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 38,
              fontWeight: 800,
              color: theme.colors.text,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
            krStyle={{ fontSize: '0.5em', marginTop: '0.35em' }}
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 20,
            flex: 1,
          }}
        >
          {STRATEGIES.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 2}
              style={{
                background: theme.colors.surface,
                border: `1px solid ${theme.colors.accent}`,
                borderRadius: 10,
                padding: '22px 24px',
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  fontFamily: theme.fonts.mono,
                  fontSize: 28,
                  fontWeight: 800,
                  color: theme.colors.accent,
                  lineHeight: 1,
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                {s.num}
              </span>
              <div style={{ flex: 1 }}>
                <BiText
                  vi={s.vi}
                  kr={s.kr}
                  viStyle={{
                    fontFamily: theme.fonts.display,
                    fontSize: 19,
                    fontWeight: 700,
                    color: theme.colors.text,
                    lineHeight: 1.2,
                  }}
                  krStyle={{ fontSize: '0.68em', marginTop: '0.3em' }}
                />
                <BiText
                  vi={s.desc_vi}
                  kr={s.desc_kr}
                  viStyle={{
                    fontFamily: theme.fonts.body,
                    fontSize: 14,
                    color: theme.colors.textSecondary,
                    marginTop: 8,
                    lineHeight: 1.4,
                  }}
                  krStyle={{ fontSize: '0.82em', marginTop: '0.2em' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Attribution>BASED ON FAROS + DELOITTE ANALYSIS</Attribution>
    </SlideLayout>
  )
}
