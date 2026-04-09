import { motion } from 'framer-motion'
import { staggerContainer, slideUp, terminalLine } from '../lib/animations'
import { CheckCircle } from 'lucide-react'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'

const practices = [
  {
    vi: 'Hướng dẫn cụ thể',
    kr: '구체적인 지침',
    desc: { vi: 'Không mơ hồ — chỉ rõ từng bước', kr: '모호하지 않게 — 각 단계를 명시' },
  },
  {
    vi: 'Bao gồm ví dụ',
    kr: '예시 포함',
    desc: { vi: 'Cho Claude thấy output mong muốn', kr: '원하는 출력을 클로드에게 보여주기' },
  },
  {
    vi: 'Định nghĩa format đầu ra',
    kr: '출력 형식 정의',
    desc: { vi: 'Cấu trúc file, naming convention', kr: '파일 구조, 네이밍 규칙' },
  },
  {
    vi: 'Thêm checklist chất lượng',
    kr: '품질 체크리스트 추가',
    desc: { vi: 'Tự kiểm tra trước khi hoàn thành', kr: '완료 전 자체 검토' },
  },
]

export default function Slide44BestPractices() {
  return (
    <SlideLayout background={gradients.subtle}>
      <div
        className="w-full h-full flex flex-col justify-center"
        style={{ padding: '60px 80px' }}
      >
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          {/* Terminal prompt — design element */}
          <motion.div
            variants={terminalLine}
            style={{
              color: theme.colors.accent,
              fontSize: 'clamp(12px, 1.2vw, 15px)',
              fontFamily: theme.fonts.mono,
              marginBottom: 16,
              opacity: 0.8,
            }}
          >
            {'>'}_&nbsp;best-practices.md
          </motion.div>

          <motion.h2
            variants={slideUp}
            style={{
              fontSize: 'clamp(26px, 3.2vw, 40px)',
              color: theme.colors.text,
              fontWeight: 800,
              fontFamily: theme.fonts.display,
              letterSpacing: '-0.02em',
              marginBottom: 40,
            }}
          >
            <BiText
              vi="Thực hành tốt nhất"
              kr="모범 사례"
              krStyle={{ fontSize: '0.55em', marginTop: '0.35em', color: theme.colors.textMuted }}
            />
          </motion.h2>

          <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-6">
            {practices.map((p, i) => (
              <motion.div
                key={i}
                variants={terminalLine}
                className="flex gap-4"
                style={{
                  border: `1px solid ${theme.colors.accentGlow}`,
                  borderRadius: 10,
                  padding: '20px 24px',
                  background: theme.colors.surface,
                }}
              >
                <CheckCircle
                  size={20}
                  style={{ color: theme.colors.accent, flexShrink: 0, marginTop: 3 }}
                />
                <div>
                  <BiText
                    vi={p.vi}
                    kr={p.kr}
                    viStyle={{
                      color: theme.colors.text,
                      fontSize: 'clamp(14px, 1.5vw, 18px)',
                      fontWeight: 700,
                      fontFamily: theme.fonts.display,
                      marginBottom: 4,
                    }}
                    krStyle={{ fontSize: '0.72em', marginTop: '0.2em', color: theme.colors.textMuted }}
                  />
                  <BiText
                    vi={p.desc.vi}
                    kr={p.desc.kr}
                    viStyle={{
                      color: theme.colors.textSecondary,
                      fontSize: 'clamp(12px, 1.2vw, 15px)',
                      fontFamily: theme.fonts.body,
                      marginTop: 6,
                      display: 'block',
                    }}
                    krStyle={{ fontSize: '0.78em', marginTop: '0.2em', color: theme.colors.textMuted }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
