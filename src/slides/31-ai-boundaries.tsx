import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { SlideSectionLabel } from '../components/slide-section-label'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'
import { fadeUp, staggerContainer } from '../lib/animations'
import { AlertTriangle } from 'lucide-react'

const BOUNDARIES = [
  {
    vi: 'Truy cập dữ liệu nhạy cảm',
    kr: '민감한 데이터 접근',
    desc_vi: 'API keys, PII, credentials — chỉ người được truy cập',
    desc_kr: 'API 키, PII, 자격 증명 — 사람만 접근 가능',
  },
  {
    vi: 'Giao tiếp ra ngoài hệ thống',
    kr: '외부 커뮤니케이션',
    desc_vi: 'Email, message, API calls ra ngoài — cần người xác nhận',
    desc_kr: '이메일, 메시지, 외부 API 호출 — 사람이 확인 필요',
  },
  {
    vi: 'Xử lý input không tin được',
    kr: '신뢰할 수 없는 입력 처리',
    desc_vi: 'Data từ user, rủi ro prompt injection — phải validate trước',
    desc_kr: '사용자 제공 데이터, 프롬프트 인젝션 위험 — 먼저 검증',
  },
]

export default function Slide31() {
  return (
    <SlideLayout background={gradients.deep}>
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
          style={{ marginTop: 24, marginBottom: 44 }}
        >
          <BiText
            vi="3 điều AI không được tự làm"
            kr="AI가 절대 스스로 해서는 안 되는 3가지"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 42,
              fontWeight: 800,
              color: theme.colors.text,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
            krStyle={{ fontSize: '0.52em', marginTop: '0.4em' }}
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', gap: 24, flex: 1 }}
        >
          {BOUNDARIES.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 2}
              style={{
                flex: 1,
                background: theme.colors.redDim,
                border: `1px solid ${theme.colors.red}`,
                borderRadius: 12,
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <AlertTriangle size={28} color={theme.colors.red} />
              <BiText
                vi={item.vi}
                kr={item.kr}
                viStyle={{
                  fontFamily: theme.fonts.display,
                  fontSize: 22,
                  fontWeight: 700,
                  color: theme.colors.text,
                }}
                krStyle={{ fontSize: '0.7em', marginTop: '0.3em' }}
              />
              <BiText
                vi={item.desc_vi}
                kr={item.desc_kr}
                viStyle={{
                  fontFamily: theme.fonts.body,
                  fontSize: 15,
                  color: theme.colors.textSecondary,
                  lineHeight: 1.5,
                }}
                krStyle={{ fontSize: '0.82em', marginTop: '0.3em' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  )
}
