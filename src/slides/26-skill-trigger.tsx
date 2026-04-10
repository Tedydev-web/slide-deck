import { motion } from 'framer-motion'
import { staggerContainer, slideUp, terminalLine } from '../lib/animations'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'

export default function Slide26SkillTrigger() {
  return (
    <SlideLayout background={gradients.subtle}>
      <div
        className="w-full h-full flex flex-col justify-center"
        style={{ padding: '60px 80px' }}
      >
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          {/* Terminal prompt — design element for trigger/terminal-aesthetic slide */}
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
            {'>'}_&nbsp;trigger-system.sh
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
              vi="Hệ thống kích hoạt"
              kr="트리거 시스템"
              krStyle={{ fontSize: '0.55em', marginTop: '0.35em', color: theme.colors.textMuted }}
            />
          </motion.h2>

          <motion.div variants={staggerContainer} className="flex flex-col gap-6">
            <motion.div
              variants={terminalLine}
              style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', fontFamily: theme.fonts.body }}
            >
              <BiText
                vi={
                  <>
                    Skill được kích hoạt khi tin nhắn của bạn khớp với từ khóa trong{' '}
                    <span style={{ color: theme.colors.accent, fontFamily: theme.fonts.mono }}>
                      description
                    </span>
                  </>
                }
                kr="메시지가 description의 키워드와 일치할 때 스킬이 활성화됩니다"
                viStyle={{ color: theme.colors.textSecondary }}
                krStyle={{ fontSize: '0.75em', marginTop: '0.3em', color: theme.colors.textMuted }}
              />
            </motion.div>

            {/* Description box — code context, keep mono */}
            <motion.div
              variants={slideUp}
              style={{
                border: `1px solid ${theme.colors.accentGlow}`,
                borderRadius: 10,
                padding: '20px 28px',
                background: theme.colors.accentDim,
              }}
            >
              <div
                style={{
                  color: theme.colors.textMuted,
                  fontSize: 'clamp(10px, 1vw, 12px)',
                  fontFamily: theme.fonts.mono,
                  marginBottom: 8,
                }}
              >
                description trong SKILL.md:
              </div>
              <div
                style={{
                  color: theme.colors.accent,
                  fontSize: 'clamp(13px, 1.4vw, 17px)',
                  fontFamily: theme.fonts.mono,
                }}
              >
                "Tạo slide deck khi người dùng yêu cầu tạo presentation"
              </div>
            </motion.div>

            <motion.div
              variants={terminalLine}
              className="flex items-center gap-3"
              style={{ fontSize: 'clamp(13px, 1.4vw, 17px)', fontFamily: theme.fonts.body }}
            >
              <span style={{ color: theme.colors.textMuted, minWidth: 72 }}>Bạn nói:</span>
              <span style={{ color: theme.colors.text }}>
                "Tạo cho tôi một slide deck về React"
              </span>
            </motion.div>

            <motion.div
              variants={terminalLine}
              className="flex items-center gap-3"
              style={{ fontSize: 'clamp(13px, 1.4vw, 17px)', fontFamily: theme.fonts.body }}
            >
              <span style={{ color: theme.colors.textMuted, minWidth: 72 }}>Claude:</span>
              <span style={{ color: theme.colors.accent, fontWeight: 600 }}>
                ✓ Skill "slide-deck" được kích hoạt!
              </span>
            </motion.div>

            {/* Second trigger example — compact inline card */}
            <motion.div
              variants={slideUp}
              style={{
                marginTop: 4,
                padding: '14px 20px',
                border: `1px solid ${theme.colors.border}`,
                borderRadius: 8,
                background: theme.colors.surface,
              }}
            >
              <div
                style={{
                  fontFamily: theme.fonts.mono,
                  fontSize: 'clamp(10px, 1vw, 12px)',
                  color: theme.colors.textMuted,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: 8,
                }}
              >
                <BiText
                  vi="Ví dụ khác"
                  kr="다른 예시"
                  viStyle={{ color: theme.colors.textMuted }}
                  krStyle={{ fontSize: '0.85em', marginLeft: '0.6em', color: theme.colors.textMuted }}
                />
              </div>
              <div
                style={{
                  fontFamily: theme.fonts.mono,
                  fontSize: 'clamp(11px, 1.2vw, 14px)',
                  color: theme.colors.accent,
                  marginBottom: 8,
                  lineHeight: 1.5,
                }}
              >
                "ALWAYS activate before implementing EVERY feature, plan, or fix"
              </div>
              <div
                style={{
                  fontFamily: theme.fonts.body,
                  fontSize: 'clamp(12px, 1.3vw, 15px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  flexWrap: 'wrap',
                }}
              >
                <span style={{ color: theme.colors.text }}>
                  "Thêm API endpoint cho payment"
                </span>
                <span style={{ color: theme.colors.textMuted }}>→</span>
                <span style={{ color: theme.colors.accent, fontWeight: 600, fontFamily: theme.fonts.mono }}>
                  ✓ /ck:cook
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={terminalLine}
              style={{
                fontSize: 'clamp(12px, 1.2vw, 15px)',
                color: theme.colors.textMuted,
                fontFamily: theme.fonts.mono,
                opacity: 0.7,
                marginTop: 4,
              }}
            >
              {/* KR inline explanation */}
              // Hoặc gọi trực tiếp: /slide-deck, /ck:cook, /ck:fix, /ck:plan...
              <span
                lang="ko"
                style={{
                  display: 'block',
                  fontFamily: theme.fonts.korean,
                  fontSize: '0.85em',
                  marginTop: '0.3em',
                  color: theme.colors.textMuted,
                  opacity: 0.8,
                }}
              >
                또는 직접 호출: /slide-deck, /ck:cook, /ck:fix, /ck:plan...
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
