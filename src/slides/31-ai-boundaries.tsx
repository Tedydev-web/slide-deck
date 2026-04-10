import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { SlideSectionLabel } from '../components/slide-section-label'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'
import { fadeUp, staggerContainer } from '../lib/animations'
import { AlertTriangle, ShieldCheck } from 'lucide-react'

const BOUNDARIES = [
  {
    num: '01',
    vi: 'Truy cập dữ liệu nhạy cảm',
    kr: '민감한 데이터 접근',
    desc_vi: 'API keys, PII, credentials — chỉ con người được phép đọc',
    desc_kr: 'API 키, PII, 자격 증명 — 사람만 접근 가능',
    examples: ['.env', '~/.ssh/id_rsa', 'secrets.json', 'prod DB creds'],
    guard_vi: 'Privacy hook + path allowlist, bắt AI hỏi trước khi đọc',
    guard_kr: '프라이버시 훅 + 경로 허용 목록, 읽기 전 확인',
  },
  {
    num: '02',
    vi: 'Hành động không đảo ngược',
    kr: '되돌릴 수 없는 작업',
    desc_vi: 'Git push, deploy, delete, gửi mail — cần người xác nhận',
    desc_kr: 'git push, 배포, 삭제, 메일 발송 — 사람의 확인 필요',
    examples: [
      'git push --force',
      'rm -rf',
      'gh pr merge',
      'npm publish',
      'aws s3 rm',
    ],
    guard_vi: 'Human-in-the-loop confirm + dry-run mode mặc định',
    guard_kr: '사람이 확인 + 드라이런 기본값',
  },
  {
    num: '03',
    vi: 'Xử lý input không tin được',
    kr: '신뢰할 수 없는 입력 처리',
    desc_vi: 'Data từ user, webhook, URL fetch — rủi ro prompt injection',
    desc_kr: '사용자 데이터, 웹훅, URL — 프롬프트 인젝션 위험',
    examples: ['user prompt', 'webhook body', 'fetched HTML', 'uploaded file'],
    guard_vi: 'Validate schema + sandbox exec + strip instruction tokens',
    guard_kr: '스키마 검증 + 샌드박스 + 지시 토큰 제거',
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
          padding: '56px 80px 52px',
          gap: 0,
        }}
      >
        <SlideSectionLabel label="SỰ THẬT THẲNG THẮN" labelKr="솔직한 진실" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 18, marginBottom: 32 }}
        >
          <BiText
            vi="3 điều AI không được tự làm"
            kr="AI가 절대 스스로 해서는 안 되는 3가지"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 40,
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
          style={{ display: 'flex', gap: 20, flex: 1 }}
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
                padding: '22px 22px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              {/* Top row: number badge + warning icon */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: 11,
                    fontWeight: 700,
                    color: theme.colors.red,
                    letterSpacing: '0.16em',
                  }}
                >
                  {item.num}
                </span>
                <AlertTriangle size={22} color={theme.colors.red} />
              </div>

              {/* Title */}
              <BiText
                vi={item.vi}
                kr={item.kr}
                viStyle={{
                  fontFamily: theme.fonts.display,
                  fontSize: 19,
                  fontWeight: 700,
                  color: theme.colors.text,
                  lineHeight: 1.25,
                }}
                krStyle={{ fontSize: '0.7em', marginTop: '0.3em' }}
              />

              {/* Short description */}
              <BiText
                vi={item.desc_vi}
                kr={item.desc_kr}
                viStyle={{
                  fontFamily: theme.fonts.body,
                  fontSize: 12.5,
                  color: theme.colors.textSecondary,
                  lineHeight: 1.5,
                }}
                krStyle={{ fontSize: '0.85em', marginTop: '0.25em' }}
              />

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  background: theme.colors.border,
                  marginTop: 2,
                }}
              />

              {/* Examples section (mono chips) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span
                  style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: 9.5,
                    fontWeight: 700,
                    color: theme.colors.textMuted,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                  }}
                >
                  Ví dụ dev gặp
                </span>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 6,
                  }}
                >
                  {item.examples.map((ex) => (
                    <code
                      key={ex}
                      style={{
                        fontFamily: theme.fonts.mono,
                        fontSize: 11,
                        color: theme.colors.text,
                        background: 'rgba(0, 0, 0, 0.35)',
                        border: `1px solid ${theme.colors.border}`,
                        padding: '4px 8px',
                        borderRadius: 4,
                        lineHeight: 1,
                      }}
                    >
                      {ex}
                    </code>
                  ))}
                </div>
              </div>

              {/* Spacer pushes guardrail to bottom */}
              <div style={{ flex: 1 }} />

              {/* Guardrail section */}
              <div
                style={{
                  background: 'rgba(255, 87, 34, 0.08)',
                  border: `1px solid ${theme.colors.accent}`,
                  borderRadius: 8,
                  padding: '10px 12px',
                  display: 'flex',
                  gap: 10,
                  alignItems: 'flex-start',
                }}
              >
                <ShieldCheck
                  size={16}
                  color={theme.colors.accent}
                  style={{ flexShrink: 0, marginTop: 2 }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <span
                    style={{
                      fontFamily: theme.fonts.mono,
                      fontSize: 9,
                      fontWeight: 700,
                      color: theme.colors.accent,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Guardrail
                  </span>
                  <BiText
                    vi={item.guard_vi}
                    kr={item.guard_kr}
                    viStyle={{
                      fontFamily: theme.fonts.body,
                      fontSize: 11.5,
                      color: theme.colors.text,
                      lineHeight: 1.45,
                    }}
                    krStyle={{ fontSize: '0.85em', marginTop: '0.2em' }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  )
}
