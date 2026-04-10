import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import SlideLayout from '../components/SlideLayout'
import { QuoteBlock } from '../components/quote-block'
import { BiText } from '../components/bi-text'
import { X, Check } from 'lucide-react'
import { theme, gradients } from '../lib/theme'

const badItems = [
  { vi: 'Không kèm error message', kr: '에러 메시지 없음' },
  { vi: 'Không có code snippet', kr: '코드 스니펫 없음' },
  { vi: 'Không nói tech stack', kr: '기술 스택 언급 없음' },
  { vi: 'Không mô tả expected behavior', kr: '기대 동작 없음' },
]

const goodItems = [
  { vi: 'Error + stack trace đầy đủ', kr: '정확한 에러 + 스택 트레이스' },
  { vi: 'Code snippet liên quan', kr: '관련 코드 스니펫' },
  { vi: 'React 18 + TypeScript + Vite', kr: 'React 18 + TypeScript + Vite' },
  { vi: 'Expected vs actual behavior', kr: '기대 vs 실제 동작' },
]

export default function Slide30BadVsGood() {
  return (
    <SlideLayout background={gradients.editorial}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '50px 80px',
        }}
      >
        {/* Corner page-number watermark now comes from SlideLayout globally */}

        {/* Title bilingual — VN primary, KR secondary */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          style={{
            fontFamily: theme.fonts.display,
            fontSize: 'clamp(26px, 3vw, 40px)',
            color: theme.colors.text,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: 6,
          }}
        >
          <BiText
            vi={
              <>
                Cùng câu hỏi,{' '}
                <span style={{ color: theme.colors.accent }}>khác ngữ cảnh</span>
              </>
            }
            kr="같은 질문, 다른 컨텍스트"
            krStyle={{
              fontSize: '0.52em',
              marginTop: '0.35em',
              color: theme.colors.textMuted,
              fontWeight: 500,
            }}
          />
        </motion.h2>

        {/* The original question bilingual */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
          style={{ marginBottom: 24 }}
        >
          <BiText
            vi={'"Làm sao fix bug trong app của tôi?"'}
            kr={'"내 앱의 버그 어떻게 고치죠?"'}
            viStyle={{
              fontFamily: theme.fonts.body,
              fontSize: 'clamp(14px, 1.4vw, 18px)',
              color: theme.colors.textSecondary,
              fontStyle: 'italic',
            }}
            krStyle={{
              fontSize: '0.78em',
              marginTop: '0.25em',
              color: theme.colors.textMuted,
            }}
          />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* ---- BAD CONTEXT CARD ---- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            style={{
              border: `1px solid ${theme.colors.border}`,
              borderRadius: 12,
              background: theme.colors.surface,
            }}
          >
            <div style={{ padding: '24px 22px' }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <X size={20} color={theme.colors.red} />
                <span
                  style={{
                    fontFamily: theme.fonts.display,
                    fontSize: 'clamp(15px, 1.5vw, 19px)',
                    color: theme.colors.red,
                    fontWeight: 700,
                  }}
                >
                  Ngữ cảnh tệ
                </span>
              </div>
              <div
                lang="ko"
                style={{
                  fontFamily: theme.fonts.korean,
                  fontSize: 'clamp(10px, 0.9vw, 12px)',
                  color: theme.colors.textMuted,
                  marginBottom: 14,
                }}
              >
                나쁜 컨텍스트
              </div>

              {/* Bullet list bilingual */}
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                {badItems.map((item, i) => (
                  <li key={i}>
                    <BiText
                      vi={item.vi}
                      kr={item.kr}
                      viStyle={{
                        fontFamily: theme.fonts.body,
                        fontSize: 'clamp(12px, 1.2vw, 15px)',
                        color: theme.colors.textSecondary,
                        lineHeight: 1.4,
                      }}
                      krStyle={{
                        fontSize: '0.78em',
                        marginTop: '0.1em',
                        color: theme.colors.textMuted,
                      }}
                    />
                  </li>
                ))}
              </ul>

              {/* Result footer bilingual */}
              <div
                style={{
                  marginTop: 18,
                  paddingTop: 14,
                  borderTop: `1px solid ${theme.colors.border}`,
                }}
              >
                <BiText
                  vi="Kết quả: Gợi ý chung chung, vô dụng"
                  kr="결과: 일반적이고 도움 안 되는 제안"
                  viStyle={{
                    fontFamily: theme.fonts.body,
                    fontSize: 'clamp(11px, 1.1vw, 13px)',
                    color: theme.colors.textMuted,
                    fontStyle: 'italic',
                  }}
                  krStyle={{
                    fontSize: '0.85em',
                    marginTop: '0.2em',
                    color: theme.colors.textMuted,
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* ---- GREAT CONTEXT CARD ---- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.5}
            style={{
              background: `linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.accentHover} 100%)`,
              borderRadius: 12,
            }}
          >
            <div style={{ padding: '24px 22px' }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <Check size={20} color={theme.colors.text} />
                <span
                  style={{
                    fontFamily: theme.fonts.display,
                    fontSize: 'clamp(15px, 1.5vw, 19px)',
                    color: theme.colors.text,
                    fontWeight: 700,
                  }}
                >
                  Ngữ cảnh tốt
                </span>
              </div>
              <div
                lang="ko"
                style={{
                  fontFamily: theme.fonts.korean,
                  fontSize: 'clamp(10px, 0.9vw, 12px)',
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: 14,
                }}
              >
                좋은 컨텍스트
              </div>

              {/* Bullet list bilingual */}
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                {goodItems.map((item, i) => (
                  <li key={i}>
                    <BiText
                      vi={item.vi}
                      kr={item.kr}
                      viStyle={{
                        fontFamily: theme.fonts.body,
                        fontSize: 'clamp(12px, 1.2vw, 15px)',
                        color: 'rgba(255,255,255,0.92)',
                        lineHeight: 1.4,
                      }}
                      krStyle={{
                        fontSize: '0.78em',
                        marginTop: '0.1em',
                        color: 'rgba(255,255,255,0.6)',
                      }}
                    />
                  </li>
                ))}
              </ul>

              {/* Result footer bilingual */}
              <div
                style={{
                  marginTop: 18,
                  paddingTop: 14,
                  borderTop: '1px solid rgba(255,255,255,0.3)',
                }}
              >
                <BiText
                  vi="Kết quả: Fix chính xác, dùng được ngay"
                  kr="결과: 정확하고 실행 가능한 수정"
                  viStyle={{
                    fontFamily: theme.fonts.body,
                    fontSize: 'clamp(11px, 1.1vw, 13px)',
                    color: 'rgba(255,255,255,0.88)',
                    fontStyle: 'italic',
                  }}
                  krStyle={{
                    fontSize: '0.85em',
                    marginTop: '0.2em',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{ marginTop: 20 }}
        >
          <QuoteBlock
            quote="Đừng có mặc định chê nữa, tìm cái hay mà học."
            quoteKr="기본적으로 비판하지 말고, 배울 점을 찾자."
            size="small"
          />
        </motion.div>
      </div>
    </SlideLayout>
  )
}
