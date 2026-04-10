import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, slideUp, terminalLine } from '../lib/animations'
import { ArrowRight, Check, Play } from 'lucide-react'
import SlideLayout, { DotPattern } from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'

const steps = [
  { vi: 'Kích hoạt', kr: '활성화', desc: { vi: 'Tin nhắn khớp từ khóa', kr: '키워드 매칭' } },
  { vi: 'Đọc', kr: '읽기', desc: { vi: 'Claude đọc SKILL.md', kr: 'SKILL.md 읽기' } },
  { vi: 'Thực thi', kr: '실행', desc: { vi: 'Làm theo hướng dẫn', kr: '지침에 따라 실행' } },
  { vi: 'Kết quả', kr: '결과', desc: { vi: 'Output nhất quán', kr: '일관된 출력' } },
]

// Time (ms) each step stays as the "current" highlighted one before advancing.
const STEP_DURATION_MS = 700

export default function Slide24SkillHowWorks() {
  // Sequential highlight state machine — matches prod deployment behavior:
  //  -1    : idle, all steps dim, before first click
  //   0..3 : step i is the current one (glow + bright), previous steps completed
  //   4    : done, all 4 steps lit, completion message visible, button → "Chạy lại"
  const [runningStep, setRunningStep] = useState<number>(-1)
  const timeoutsRef = useRef<number[]>([])

  const isRunning = runningStep >= 0 && runningStep < 4
  const isDone = runningStep === 4

  // Clean up any pending timers on unmount so a late fire doesn't
  // setState on an unmounted component.
  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((id) => clearTimeout(id))
      timeoutsRef.current = []
    }
  }, [])

  // Kick off the sequential highlight chain. Cancels any in-flight run first
  // so repeated clicks always restart cleanly.
  const handleRun = () => {
    timeoutsRef.current.forEach((id) => clearTimeout(id))
    timeoutsRef.current = []
    setRunningStep(0)
    for (let i = 1; i <= 4; i++) {
      const id = window.setTimeout(() => {
        setRunningStep(i)
      }, STEP_DURATION_MS * i)
      timeoutsRef.current.push(id)
    }
  }

  // Per-step visual classification.
  //  idle      : initial dim look, or after reset before run
  //  current   : actively highlighted with accent glow
  //  completed : step has already fired, bright but no glow
  // Final done state: keep step 4 in 'current' so the glow persists as visual
  // anchor for the completion moment (matches prod screenshot).
  const stepVisual = (i: number): 'idle' | 'current' | 'completed' => {
    if (runningStep === -1) return 'idle'
    if (isDone) return i === 3 ? 'current' : 'completed'
    if (runningStep === i) return 'current'
    if (runningStep > i) return 'completed'
    return 'idle'
  }

  // Button label reflects the state machine — bilingual VI + KR.
  const buttonLabel = {
    vi: isRunning ? 'Đang chạy...' : isDone ? 'Chạy lại' : 'Chạy',
    kr: isRunning ? '실행 중...' : isDone ? '다시 실행' : '실행',
  }

  return (
    <SlideLayout background={gradients.subtle}>
      <DotPattern rows={4} cols={6} bottom={40} right={60} opacity={0.1} />

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
            {'>'}_&nbsp;skill-flow.sh
          </motion.div>

          <motion.h2
            variants={slideUp}
            style={{
              fontSize: 'clamp(26px, 3.2vw, 40px)',
              color: theme.colors.text,
              fontWeight: 800,
              fontFamily: theme.fonts.display,
              letterSpacing: '-0.02em',
              marginBottom: 48,
            }}
          >
            <BiText
              vi="Cách Skill hoạt động"
              kr="스킬의 작동 방식"
              krStyle={{ fontSize: '0.55em', marginTop: '0.35em', color: theme.colors.textMuted }}
            />
          </motion.h2>

          {/* 4-step flow row — visual state driven by runningStep */}
          <motion.div variants={staggerContainer} className="flex items-start justify-between">
            {steps.map((step, i) => {
              const visual = stepVisual(i)
              const isDim = visual === 'idle'
              const isGlow = visual === 'current'
              const arrowActive = runningStep > i

              const numberBorder = isDim
                ? `1px solid ${theme.colors.border}`
                : `1.5px solid ${theme.colors.accent}`
              const numberBg = isDim ? 'transparent' : theme.colors.accentDim
              const numberShadow = isGlow
                ? `0 0 24px ${theme.colors.accent}66, 0 0 48px ${theme.colors.accent}33`
                : 'none'
              const numberColor = isDim ? theme.colors.textMuted : theme.colors.accent
              const labelColor = isDim ? theme.colors.textMuted : theme.colors.text
              const descColor = isDim ? theme.colors.textMuted : theme.colors.textSecondary

              return (
                <motion.div
                  key={i}
                  variants={terminalLine}
                  className="flex items-center gap-4"
                >
                  <div
                    className="flex flex-col items-center text-center"
                    style={{ width: 190 }}
                  >
                    {/* Step number badge — animates between idle/current/completed states */}
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: 56,
                        height: 56,
                        border: numberBorder,
                        borderRadius: 10,
                        background: numberBg,
                        color: numberColor,
                        boxShadow: numberShadow,
                        fontSize: 'clamp(18px, 2vw, 24px)',
                        fontWeight: 800,
                        fontFamily: theme.fonts.mono,
                        marginBottom: 14,
                        transition:
                          'border-color 350ms ease-out, background 350ms ease-out, color 350ms ease-out, box-shadow 350ms ease-out',
                      }}
                    >
                      {i + 1}
                    </div>

                    {/* Step label bilingual */}
                    <BiText
                      vi={step.vi}
                      kr={step.kr}
                      viStyle={{
                        color: labelColor,
                        fontSize: 'clamp(13px, 1.4vw, 17px)',
                        fontWeight: 700,
                        fontFamily: theme.fonts.display,
                        marginBottom: 6,
                        transition: 'color 350ms ease-out',
                      }}
                      krStyle={{
                        fontSize: '0.78em',
                        color: theme.colors.textMuted,
                        marginTop: '0.2em',
                      }}
                    />

                    {/* Step desc bilingual */}
                    <BiText
                      vi={step.desc.vi}
                      kr={step.desc.kr}
                      viStyle={{
                        color: descColor,
                        fontSize: 'clamp(11px, 1.1vw, 14px)',
                        fontFamily: theme.fonts.body,
                        marginTop: 4,
                        transition: 'color 350ms ease-out',
                      }}
                      krStyle={{
                        fontSize: '0.78em',
                        color: theme.colors.textMuted,
                        marginTop: '0.2em',
                      }}
                    />
                  </div>

                  {i < steps.length - 1 && (
                    <ArrowRight
                      style={{
                        color: arrowActive ? theme.colors.accent : theme.colors.textMuted,
                        opacity: arrowActive ? 0.85 : 0.35,
                        flexShrink: 0,
                        transition: 'color 350ms ease-out, opacity 350ms ease-out',
                      }}
                      size={20}
                    />
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Completion message — fades in when all 4 steps are done */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isDone ? 1 : 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{
            marginTop: 36,
            textAlign: 'center',
            minHeight: 28,
          }}
          aria-hidden={!isDone}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: theme.fonts.mono,
              fontSize: 18,
              fontWeight: 700,
              color: theme.colors.accent,
              textShadow: isDone ? `0 0 16px ${theme.colors.accent}99` : 'none',
            }}
          >
            <Check size={18} strokeWidth={3} />
            <BiText
              vi="Skill đã thực thi"
              kr="스킬이 실행되었습니다"
              viStyle={{
                color: theme.colors.accent,
                fontWeight: 700,
              }}
              krStyle={{
                fontSize: '0.78em',
                color: theme.colors.accent,
                opacity: 0.85,
                marginLeft: '0.5em',
              }}
            />
          </div>
        </motion.div>

        {/* Run button — persistent, state-aware label (Chạy → Đang chạy → Chạy lại) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5, ease: 'easeOut' }}
          style={{
            marginTop: 20,
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
      </div>
    </SlideLayout>
  )
}
