import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, slideUp, terminalLine } from '../lib/animations'
import { Play } from 'lucide-react'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'

// ---- Content constants (CK Marketing example: /ckm:write:blog) ----------
const USER_PHRASE_VI = 'Viết blog post launch tính năng AI mới'
const USER_PHRASE_KR = '새 AI 기능 출시 블로그 포스트 작성'

// Description split into parts so we can apply per-segment highlight glow.
// `highlight: true` segments glow with text-shadow when step >= 1, signaling
// the keyword match that triggered the skill.
const DESC_PARTS: { text: string; highlight: boolean }[] = [
  { text: '"Tạo ', highlight: false },
  { text: 'blog', highlight: true },
  { text: ' SEO khi user cần viết bài ', highlight: false },
  { text: 'launch', highlight: true },
  { text: ' sản phẩm hoặc ', highlight: false },
  { text: 'tính năng', highlight: true },
  { text: ' mới"', highlight: false },
]

// ---- Timing (milliseconds) ---------------------------------------------
const CHAR_DELAY_MS = 45 // per-character typewriter cadence
const TYPEWRITER_TOTAL_MS = USER_PHRASE_VI.length * CHAR_DELAY_MS + 100 // ~1810ms
const HIGHLIGHT_DONE_MS = TYPEWRITER_TOTAL_MS + 600
const CLAUDE_DONE_MS = HIGHLIGHT_DONE_MS + 800

// ---- State machine -----------------------------------------------------
// -1 = idle (user phrase + Claude hidden)
//  0 = typewriter active (user phrase typing char-by-char)
//  1 = typewriter done, description border + keyword glow active, user KR fades in
//  2 = Claude response revealing (slide up + fade + stroke anim on check)
//  3 = done (button → "Chạy lại")

export default function Slide26SkillTrigger() {
  const [step, setStep] = useState<number>(-1)
  const [typedChars, setTypedChars] = useState<number>(0)
  const timeoutsRef = useRef<number[]>([])
  const intervalRef = useRef<number | null>(null)

  const isRunning = step >= 0 && step < 3
  const isDone = step === 3
  const userPhraseDone = step >= 1
  const highlightActive = step >= 1
  const claudeVisible = step >= 2

  // Cleanup on unmount: prevent setState warnings if presenter navigates away
  // mid-animation.
  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((id) => clearTimeout(id))
      timeoutsRef.current = []
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [])

  // Typewriter + state sync: reacts to every `step` change.
  //  step === 0  → start the interval, advance typedChars by elapsed time
  //  step >= 1   → ensure full phrase is visible (no half-typed state on restart)
  //  step === -1 → reset to empty
  useEffect(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    if (step === -1) {
      setTypedChars(0)
      return
    }

    if (step >= 1) {
      setTypedChars(USER_PHRASE_VI.length)
      return
    }

    // step === 0 → run typewriter
    setTypedChars(0)
    const startedAt = Date.now()
    intervalRef.current = window.setInterval(() => {
      const elapsed = Date.now() - startedAt
      const n = Math.min(USER_PHRASE_VI.length, Math.floor(elapsed / CHAR_DELAY_MS))
      setTypedChars(n)
      if (n >= USER_PHRASE_VI.length && intervalRef.current !== null) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }, 25)

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [step])

  // Start the reveal sequence. Cancels any in-flight run so repeat clicks
  // always restart cleanly from step 0.
  const handleRun = () => {
    timeoutsRef.current.forEach((id) => clearTimeout(id))
    timeoutsRef.current = []
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setStep(0)
    timeoutsRef.current.push(
      window.setTimeout(() => setStep(1), TYPEWRITER_TOTAL_MS),
      window.setTimeout(() => setStep(2), HIGHLIGHT_DONE_MS),
      window.setTimeout(() => setStep(3), CLAUDE_DONE_MS),
    )
  }

  const buttonLabel = {
    vi: isRunning ? 'Đang chạy...' : isDone ? 'Chạy lại' : 'Chạy',
    kr: isRunning ? '실행 중...' : isDone ? '다시 실행' : '실행',
  }

  const typedText = USER_PHRASE_VI.slice(0, typedChars)

  return (
    <SlideLayout background={gradients.subtle}>
      <div
        className="w-full h-full flex flex-col justify-center"
        style={{ padding: '56px 88px' }}
      >
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          {/* Terminal prompt — design element */}
          <motion.div
            variants={terminalLine}
            style={{
              color: theme.colors.accent,
              fontSize: 'clamp(12px, 1.2vw, 15px)',
              fontFamily: theme.fonts.mono,
              marginBottom: 14,
              opacity: 0.85,
              letterSpacing: '0.02em',
            }}
          >
            {'>'}_&nbsp;trigger-system.sh
          </motion.div>

          {/* Title bilingual */}
          <motion.h2
            variants={slideUp}
            style={{
              fontSize: 'clamp(30px, 3.6vw, 46px)',
              color: theme.colors.text,
              fontWeight: 800,
              fontFamily: theme.fonts.display,
              letterSpacing: '-0.025em',
              marginBottom: 22,
              lineHeight: 1.08,
            }}
          >
            <BiText
              vi="Hệ thống kích hoạt"
              kr="트리거 시스템"
              krStyle={{
                fontSize: '0.48em',
                marginTop: '0.4em',
                color: theme.colors.textMuted,
                fontWeight: 500,
              }}
            />
          </motion.h2>

          {/* Intro line explaining trigger mechanism */}
          <motion.div
            variants={terminalLine}
            style={{ fontSize: 'clamp(14px, 1.4vw, 17px)', fontFamily: theme.fonts.body, marginBottom: 18 }}
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
              krStyle={{ fontSize: '0.75em', marginTop: '0.25em', color: theme.colors.textMuted }}
            />
          </motion.div>

          {/* Description box — border glow pulses when highlightActive = step >= 1.
              Matching keywords glow via text-shadow to visualize the "match" moment. */}
          <motion.div
            variants={slideUp}
            style={{
              border: `1px solid ${
                highlightActive ? theme.colors.accent : theme.colors.accentGlow
              }`,
              borderRadius: 12,
              padding: '18px 26px',
              background: `linear-gradient(135deg, ${theme.colors.accentDim} 0%, rgba(255,107,53,0.04) 100%)`,
              marginBottom: 20,
              boxShadow: highlightActive
                ? `0 0 24px ${theme.colors.accent}55, 0 0 48px ${theme.colors.accent}22`
                : 'none',
              transition: 'border-color 450ms ease-out, box-shadow 450ms ease-out',
            }}
          >
            <div
              style={{
                color: theme.colors.textMuted,
                fontSize: 'clamp(10px, 1vw, 12px)',
                fontFamily: theme.fonts.mono,
                marginBottom: 8,
                letterSpacing: '0.04em',
              }}
            >
              description trong skills/write-blog/SKILL.md
            </div>
            <div
              style={{
                fontSize: 'clamp(13px, 1.4vw, 17px)',
                fontFamily: theme.fonts.mono,
                lineHeight: 1.55,
              }}
            >
              {DESC_PARTS.map((part, i) => {
                const glowing = highlightActive && part.highlight
                return (
                  <span
                    key={i}
                    style={{
                      color: theme.colors.accent,
                      fontWeight: glowing ? 700 : 400,
                      textShadow: glowing
                        ? `0 0 8px ${theme.colors.accent}, 0 0 16px ${theme.colors.accent}cc, 0 0 28px ${theme.colors.accent}66`
                        : 'none',
                      transition: 'text-shadow 500ms ease-out, font-weight 200ms ease',
                    }}
                  >
                    {part.text}
                  </span>
                )
              })}
            </div>
          </motion.div>

          {/* User phrase row — typewriter on step 0, KR fades in after */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 14,
              marginBottom: 12,
              fontFamily: theme.fonts.body,
              minHeight: 52,
            }}
          >
            <span
              style={{
                color: theme.colors.textMuted,
                minWidth: 84,
                fontSize: 'clamp(13px, 1.35vw, 16px)',
                fontFamily: theme.fonts.mono,
                paddingTop: 2,
              }}
            >
              Bạn nói:
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              {/* VI: typewriter slice of USER_PHRASE_VI, with blinking caret while typing */}
              <div
                style={{
                  color: theme.colors.text,
                  fontSize: 'clamp(14px, 1.45vw, 18px)',
                  lineHeight: 1.45,
                  minHeight: '1.45em',
                }}
              >
                {step === -1 ? (
                  <span style={{ opacity: 0.2 }}>&nbsp;</span>
                ) : (
                  <>
                    <span>&ldquo;{typedText}</span>
                    {step === 0 && typedChars < USER_PHRASE_VI.length && (
                      <motion.span
                        aria-hidden
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
                        style={{
                          display: 'inline-block',
                          marginLeft: 1,
                          color: theme.colors.accent,
                          fontWeight: 700,
                        }}
                      >
                        ▎
                      </motion.span>
                    )}
                    {typedChars >= USER_PHRASE_VI.length && <span>&rdquo;</span>}
                  </>
                )}
              </div>

              {/* KR: fades in after VI typewriter finishes (step >= 1) */}
              <motion.div
                lang="ko"
                animate={{ opacity: userPhraseDone ? 0.75 : 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                style={{
                  fontFamily: theme.fonts.korean,
                  fontSize: 'clamp(11px, 1.1vw, 13px)',
                  color: theme.colors.textMuted,
                  marginTop: 3,
                  minHeight: '1.2em',
                }}
              >
                &ldquo;{USER_PHRASE_KR}&rdquo;
              </motion.div>
            </div>
          </div>

          {/* Claude response row — hidden until step >= 2, then slides up + fades in
              with check mark stroke animation and accent text-shadow glow */}
          <motion.div
            animate={{
              opacity: claudeVisible ? 1 : 0,
              y: claudeVisible ? 0 : 10,
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 14,
              marginBottom: 14,
              fontFamily: theme.fonts.body,
            }}
          >
            <span
              style={{
                color: theme.colors.textMuted,
                minWidth: 84,
                fontSize: 'clamp(13px, 1.35vw, 16px)',
                fontFamily: theme.fonts.mono,
                paddingTop: 2,
              }}
            >
              Claude:
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  color: theme.colors.accent,
                  fontWeight: 600,
                  fontSize: 'clamp(14px, 1.45vw, 18px)',
                  lineHeight: 1.45,
                  textShadow: claudeVisible
                    ? `0 0 10px ${theme.colors.accent}88, 0 0 20px ${theme.colors.accent}44`
                    : 'none',
                  transition: 'text-shadow 500ms ease-out',
                }}
              >
                {/* SVG check mark with stroke-draw animation via framer-motion */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ flexShrink: 0, filter: claudeVisible ? `drop-shadow(0 0 6px ${theme.colors.accent})` : 'none' }}
                  aria-hidden
                >
                  <motion.path
                    d="M5 12.5l4.5 4.5 9.5-10"
                    stroke={theme.colors.accent}
                    strokeWidth={2.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: claudeVisible ? 1 : 0 }}
                    transition={{ duration: 0.55, ease: 'easeOut', delay: claudeVisible ? 0.05 : 0 }}
                  />
                </svg>
                <span>
                  Skill{' '}
                  <span style={{ fontFamily: theme.fonts.mono }}>'write-blog'</span> được kích hoạt!
                </span>
              </div>
              <div
                lang="ko"
                style={{
                  fontFamily: theme.fonts.korean,
                  fontSize: 'clamp(11px, 1.1vw, 13px)',
                  color: theme.colors.accent,
                  marginTop: 3,
                  opacity: 0.82,
                  paddingLeft: 30,
                }}
              >
                ✓ 스킬 'write-blog' 활성화!
              </div>
            </div>
          </motion.div>

          {/* Direct-call footnote */}
          <motion.div
            variants={terminalLine}
            style={{
              fontSize: 'clamp(11px, 1.1vw, 13px)',
              color: theme.colors.textMuted,
              fontFamily: theme.fonts.mono,
              opacity: 0.7,
              marginBottom: 22,
            }}
          >
            // Hoặc gọi trực tiếp:{' '}
            <span style={{ color: theme.colors.accent }}>/ckm:write:blog</span>
            <span
              lang="ko"
              style={{
                display: 'block',
                fontFamily: theme.fonts.korean,
                fontSize: '0.85em',
                marginTop: '0.25em',
              }}
            >
              또는 직접 호출: /ckm:write:blog
            </span>
          </motion.div>

          {/* Run button — persistent, state-aware label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5, ease: 'easeOut' }}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button
              type="button"
              onClick={handleRun}
              disabled={isRunning}
              aria-label={buttonLabel.vi}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                padding: '14px 28px',
                background: 'transparent',
                border: `1.5px solid ${theme.colors.accent}`,
                borderRadius: 10,
                color: theme.colors.accent,
                cursor: isRunning ? 'wait' : 'pointer',
                fontFamily: theme.fonts.mono,
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: '0.04em',
                opacity: isRunning ? 0.6 : 1,
                transition: 'background 180ms ease, transform 120ms ease, opacity 180ms ease',
              }}
              onMouseEnter={(e) => {
                if (!isRunning) e.currentTarget.style.background = theme.colors.accentDim
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
              }}
              onMouseDown={(e) => {
                if (!isRunning) e.currentTarget.style.transform = 'scale(0.97)'
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              <span>{buttonLabel.vi}</span>
              <span
                lang="ko"
                style={{
                  fontFamily: theme.fonts.korean,
                  fontSize: '0.78em',
                  opacity: 0.8,
                }}
              >
                {buttonLabel.kr}
              </span>
              <Play size={16} fill={theme.colors.accent} strokeWidth={0} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
