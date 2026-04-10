import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, slideUp, terminalLine } from '../lib/animations'
import { Play } from 'lucide-react'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'

// Sequential reveal state machine — matches prod interactive pedagogy.
//  -1 : idle, user phrase + Claude response hidden (dim)
//   0 : user phrase revealing (fade + slide in from left)
//   1 : Claude response revealing (fade + slide + accent glow)
//   2 : done, all visible, button → "Chạy lại"
const REVEAL_CLAUDE_MS = 1100
const DONE_MS = 2000

export default function Slide26SkillTrigger() {
  const [step, setStep] = useState<number>(-1)
  const timeoutsRef = useRef<number[]>([])

  const isRunning = step >= 0 && step < 2
  const isDone = step === 2

  const userVisible = step >= 0
  const claudeVisible = step >= 1

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((id) => clearTimeout(id))
      timeoutsRef.current = []
    }
  }, [])

  // Kick off the reveal sequence. Cancels any in-flight run so repeat clicks
  // restart cleanly without queuing.
  const handleRun = () => {
    timeoutsRef.current.forEach((id) => clearTimeout(id))
    timeoutsRef.current = []
    setStep(0)
    timeoutsRef.current.push(
      window.setTimeout(() => setStep(1), REVEAL_CLAUDE_MS),
    )
    timeoutsRef.current.push(
      window.setTimeout(() => setStep(2), DONE_MS),
    )
  }

  const buttonLabel = {
    vi: isRunning ? 'Đang chạy...' : isDone ? 'Chạy lại' : 'Chạy',
    kr: isRunning ? '실행 중...' : isDone ? '다시 실행' : '실행',
  }

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
              marginBottom: 28,
              lineHeight: 1.08,
            }}
          >
            <BiText
              vi="Hệ thống kích hoạt"
              kr="트리거 시스템"
              krStyle={{ fontSize: '0.48em', marginTop: '0.4em', color: theme.colors.textMuted, fontWeight: 500 }}
            />
          </motion.h2>

          {/* Intro line — explains how trigger works */}
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

          {/* Description box — the SKILL.md trigger definition (marketing kit example) */}
          <motion.div
            variants={slideUp}
            style={{
              border: `1px solid ${theme.colors.accentGlow}`,
              borderRadius: 12,
              padding: '18px 26px',
              background: `linear-gradient(135deg, ${theme.colors.accentDim} 0%, rgba(255,107,53,0.04) 100%)`,
              marginBottom: 20,
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
                color: theme.colors.accent,
                fontSize: 'clamp(13px, 1.4vw, 17px)',
                fontFamily: theme.fonts.mono,
                lineHeight: 1.5,
              }}
            >
              "Create SEO blog posts for product launches and feature announcements"
            </div>
          </motion.div>

          {/* User phrase row — animated in when step >= 0 */}
          <motion.div
            animate={{
              opacity: userVisible ? 1 : 0.18,
              x: userVisible ? 0 : -16,
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 14,
              marginBottom: 10,
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
              Bạn nói:
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  color: theme.colors.text,
                  fontSize: 'clamp(14px, 1.45vw, 18px)',
                  lineHeight: 1.45,
                }}
              >
                "Viết blog post launch tính năng AI mới"
              </div>
              <div
                lang="ko"
                style={{
                  fontFamily: theme.fonts.korean,
                  fontSize: 'clamp(11px, 1.1vw, 13px)',
                  color: theme.colors.textMuted,
                  marginTop: 3,
                }}
              >
                "새 AI 기능 출시 블로그 포스트 작성"
              </div>
            </div>
          </motion.div>

          {/* Claude response row — animated in when step >= 1 with glow */}
          <motion.div
            animate={{
              opacity: claudeVisible ? 1 : 0.18,
              x: claudeVisible ? 0 : -16,
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
            <div
              style={{
                flex: 1,
                minWidth: 0,
                color: theme.colors.accent,
                fontWeight: 600,
                textShadow: claudeVisible ? `0 0 14px ${theme.colors.accent}55` : 'none',
                transition: 'text-shadow 400ms ease-out',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(14px, 1.45vw, 18px)',
                  lineHeight: 1.45,
                }}
              >
                ✓ Skill <span style={{ fontFamily: theme.fonts.mono }}>'write-blog'</span> được kích hoạt!
              </div>
              <div
                lang="ko"
                style={{
                  fontFamily: theme.fonts.korean,
                  fontSize: 'clamp(11px, 1.1vw, 13px)',
                  marginTop: 3,
                  opacity: 0.82,
                }}
              >
                ✓ 스킬 'write-blog' 활성화!
              </div>
            </div>
          </motion.div>

          {/* Direct-call footnote — short, mono */}
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
            // Hoặc gọi trực tiếp: <span style={{ color: theme.colors.accent }}>/ckm:write:blog</span>
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

          {/* Run button — persistent, state-aware label (Chạy → Đang chạy → Chạy lại) */}
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
