import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { SlideSectionLabel } from '../components/slide-section-label'
import { fadeUp, staggerContainer } from '../lib/animations'
import { gradients, theme } from '../lib/theme'

// ---- 3-step RPI workflow cards ----------------------------------------
type PhaseCode = 'R' | 'P' | 'I'

interface PhaseStep {
  code: PhaseCode
  label: string
  vi: string
  kr: string
}

const steps: PhaseStep[] = [
  { code: 'R', label: 'Research', vi: 'Đọc error log, trace code path', kr: '에러 로그 읽기' },
  { code: 'P', label: 'Plan', vi: 'Xác định root cause + fix strategy', kr: '근본 원인 + 수정 전략' },
  { code: 'I', label: 'Implement', vi: 'Fix + test + verify', kr: '수정 + 테스트 + 검증' }
]

// ---- Terminal lines for the typewriter demo ---------------------------
interface TerminalLine {
  prefix: string
  text: string
  accent: boolean
  /** Which RPI phase this line belongs to (activates the card with glow). */
  phase: PhaseCode | null
}

const terminalLines: TerminalLine[] = [
  { prefix: '$', text: '/ck:fix "NullPointerException in auth.ts:45"', accent: false, phase: null },
  { prefix: '→', text: 'Reading auth.ts...', accent: false, phase: 'R' },
  { prefix: '→', text: 'Tracing call chain...', accent: false, phase: 'R' },
  { prefix: '→', text: 'Root cause: missing null check', accent: false, phase: 'P' },
  { prefix: '→', text: 'Applied fix', accent: true, phase: 'I' },
  { prefix: '→', text: 'Tests pass (12/12) ✓', accent: true, phase: 'I' }
]

// ---- Timing -----------------------------------------------------------
const CHAR_DELAY_MS = 24 // per-character cadence (faster than S26 for snappier demo)
const INTER_LINE_PAUSE_MS = 180 // pause between lines
const AUTO_START_DELAY_MS = 650 // wait for entrance stagger before typewriter kicks in
const LOOP_PAUSE_MS = 2500 // how long to hold the done state before looping back

export default function Slide27DemoDevBugFix() {
  // -1 = not started, 0..5 = currently typing that line, 6 = done
  const [lineIndex, setLineIndex] = useState<number>(-1)
  const [currentChars, setCurrentChars] = useState<number>(0)

  const intervalRef = useRef<number | null>(null)
  const pauseRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)
  const loopRef = useRef<number | null>(null)

  const isDone = lineIndex >= terminalLines.length
  const isRunning = lineIndex >= 0 && !isDone

  // RPI phase active flags — each phase stays lit once its first line fires
  const rActive = lineIndex >= 1
  const pActive = lineIndex >= 3
  const iActive = lineIndex >= 4
  const phaseFlags: Record<PhaseCode, boolean> = { R: rActive, P: pActive, I: iActive }

  // Clear all timers (used in cleanup)
  const clearTimers = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    if (pauseRef.current !== null) {
      clearTimeout(pauseRef.current)
      pauseRef.current = null
    }
    if (startRef.current !== null) {
      clearTimeout(startRef.current)
      startRef.current = null
    }
    if (loopRef.current !== null) {
      clearTimeout(loopRef.current)
      loopRef.current = null
    }
  }

  // Cleanup on unmount — prevents setState on unmounted component if
  // presenter navigates away mid-animation.
  useEffect(() => {
    return clearTimers
  }, [])

  // Auto-start OR loop-restart: whenever lineIndex === -1 (initial or post-loop
  // reset), schedule a delayed start at line 0. The typewriter effect takes
  // over from there.
  useEffect(() => {
    if (lineIndex !== -1) return
    startRef.current = window.setTimeout(() => {
      setLineIndex(0)
    }, AUTO_START_DELAY_MS)
    return () => {
      if (startRef.current !== null) {
        clearTimeout(startRef.current)
        startRef.current = null
      }
    }
  }, [lineIndex])

  // Loop: once the final line is done, hold the "done" state for a moment so
  // audience can absorb the glowing clock + all-bright cards, then reset to
  // lineIndex = -1 which re-triggers the auto-start effect above.
  useEffect(() => {
    if (lineIndex < terminalLines.length) return
    loopRef.current = window.setTimeout(() => {
      setLineIndex(-1)
    }, LOOP_PAUSE_MS)
    return () => {
      if (loopRef.current !== null) {
        clearTimeout(loopRef.current)
        loopRef.current = null
      }
    }
  }, [lineIndex])

  // Per-line typewriter effect — fires whenever `lineIndex` changes.
  // For each line: reset char counter, interval-advance until full text shown,
  // then schedule a pause before advancing to the next line.
  useEffect(() => {
    if (lineIndex < 0 || lineIndex >= terminalLines.length) return

    setCurrentChars(0)
    const lineLength = terminalLines[lineIndex].text.length
    let chars = 0

    intervalRef.current = window.setInterval(() => {
      chars += 1
      setCurrentChars(chars)
      if (chars >= lineLength) {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
        // Schedule advance to next line after a pause
        pauseRef.current = window.setTimeout(() => {
          setLineIndex((prev) => prev + 1)
        }, INTER_LINE_PAUSE_MS)
      }
    }, CHAR_DELAY_MS)

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      if (pauseRef.current !== null) {
        clearTimeout(pauseRef.current)
        pauseRef.current = null
      }
    }
  }, [lineIndex])

  return (
    <SlideLayout background={gradients.deep}>
      {/* LIVE badge */}
      {/* <div
        style={{
          position: 'absolute',
          top: 36,
          right: 48,
          background: theme.colors.accent,
          color: theme.colors.text,
          fontFamily: theme.fonts.mono,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.16em',
          padding: '5px 12px',
          borderRadius: 4,
          textTransform: 'uppercase',
        }}
      >
        LIVE
      </div> */}

      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '52px 80px 48px'
        }}
      >
        <SlideSectionLabel label='DEMO 1 · DEV' labelKr='데모 1 · 개발' />

        <motion.div
          variants={fadeUp}
          initial='hidden'
          animate='visible'
          custom={1}
          style={{ marginTop: 14, marginBottom: 6 }}
        >
          <BiText
            vi='Sửa Bug Lúc Nửa Đêm'
            kr='심야 버그 수정'
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 44,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: theme.colors.text
            }}
            krStyle={{ fontSize: '0.52em', marginTop: '0.3em' }}
          />
        </motion.div>

        <motion.div variants={fadeUp} initial='hidden' animate='visible' custom={2} style={{ marginBottom: 28 }}>
          <BiText
            vi='Bug report → Root cause → Fix → Test — 15 phút'
            kr='버그 리포트 → 근본 원인 → 수정 → 테스트 — 15분'
            viStyle={{
              fontFamily: theme.fonts.body,
              fontSize: 15,
              color: theme.colors.textSecondary
            }}
            krStyle={{ fontSize: '0.78em', marginTop: '0.2em' }}
          />
        </motion.div>

        {/* 3-step RPI workflow cards — sync with terminal phase */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          animate='visible'
          style={{ display: 'flex', gap: 16, marginBottom: 24 }}
        >
          {steps.map((s, i) => {
            const isPhaseActive = phaseFlags[s.code]
            return (
              <motion.div
                key={s.code}
                variants={fadeUp}
                custom={i + 3}
                style={{
                  flex: 1,
                  background: isPhaseActive ? theme.colors.accentDim : theme.colors.surface,
                  border: `1px solid ${isPhaseActive ? theme.colors.accent : theme.colors.border}`,
                  borderRadius: 10,
                  padding: '18px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  boxShadow: isPhaseActive
                    ? `0 0 22px ${theme.colors.accent}44, 0 0 44px ${theme.colors.accent}22`
                    : 'none',
                  transform: isPhaseActive ? 'translateY(-2px)' : 'translateY(0)',
                  transition:
                    'background 400ms ease-out, border-color 400ms ease-out, box-shadow 400ms ease-out, transform 400ms ease-out'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span
                    style={{
                      fontFamily: theme.fonts.mono,
                      fontSize: 20,
                      fontWeight: 900,
                      color: theme.colors.accent,
                      textShadow: isPhaseActive ? `0 0 10px ${theme.colors.accent}` : 'none',
                      transition: 'text-shadow 400ms ease-out'
                    }}
                  >
                    {s.code}
                  </span>
                  <span
                    style={{
                      fontFamily: theme.fonts.display,
                      fontSize: 14,
                      fontWeight: 700,
                      color: theme.colors.text,
                      letterSpacing: '0.04em'
                    }}
                  >
                    {s.label}
                  </span>
                </div>
                <BiText
                  vi={s.vi}
                  kr={s.kr}
                  viStyle={{
                    fontFamily: theme.fonts.body,
                    fontSize: 13,
                    color: theme.colors.textSecondary,
                    lineHeight: 1.45
                  }}
                  krStyle={{ fontSize: '0.78em', marginTop: '0.15em' }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom row: typewriter terminal + animated clock */}
        <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
          {/* Terminal — auto-typewriter on mount */}
          <motion.div
            variants={fadeUp}
            initial='hidden'
            animate='visible'
            custom={7}
            style={{
              flex: 1,
              background: theme.colors.bgDeep,
              border: `1px solid ${isRunning ? theme.colors.accent : theme.colors.borderStrong}`,
              borderRadius: 10,
              padding: '18px 22px',
              fontFamily: theme.fonts.mono,
              fontSize: 13,
              lineHeight: 1.7,
              minHeight: 180,
              boxShadow: isRunning ? `0 0 24px ${theme.colors.accent}33, 0 0 48px ${theme.colors.accent}11` : 'none',
              transition: 'border-color 400ms ease-out, box-shadow 400ms ease-out'
            }}
            aria-live='polite'
          >
            {terminalLines.map((line, i) => {
              const isLineCurrent = lineIndex === i
              const isLineDone = lineIndex > i
              const isLineVisible = isLineCurrent || isLineDone
              const charsShown = isLineDone ? line.text.length : isLineCurrent ? currentChars : 0
              const visibleText = line.text.slice(0, charsShown)
              const isFinalLineDone = isLineDone && i === terminalLines.length - 1
              const accentColor = line.accent ? theme.colors.accent : theme.colors.textSecondary

              return (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 8,
                    minHeight: '1.7em'
                  }}
                >
                  {isLineVisible ? (
                    <>
                      <span style={{ color: theme.colors.textMuted, flexShrink: 0 }}>{line.prefix}</span>
                      <span
                        style={{
                          color: accentColor,
                          textShadow: isFinalLineDone
                            ? `0 0 10px ${theme.colors.accent}88, 0 0 20px ${theme.colors.accent}44`
                            : 'none',
                          transition: 'text-shadow 450ms ease-out'
                        }}
                      >
                        {visibleText}
                        {isLineCurrent && currentChars < line.text.length && (
                          <motion.span
                            aria-hidden
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.85, repeat: Infinity, ease: 'easeInOut' }}
                            style={{
                              display: 'inline-block',
                              marginLeft: 1,
                              color: theme.colors.accent,
                              fontWeight: 700
                            }}
                          >
                            ▎
                          </motion.span>
                        )}
                      </span>
                    </>
                  ) : (
                    // Reserve vertical space so the terminal box doesn't resize as lines fill in
                    <span>&nbsp;</span>
                  )}
                </div>
              )
            })}
          </motion.div>

          {/* Clock — pulses when all lines done to emphasize the "15 min" payoff */}
          <motion.div
            variants={fadeUp}
            initial='hidden'
            animate='visible'
            custom={8}
            style={{
              width: 140,
              background: isDone ? theme.colors.accentDim : theme.colors.surface,
              border: `1px solid ${isDone ? theme.colors.accent : theme.colors.border}`,
              borderRadius: 10,
              padding: '18px 16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              boxShadow: isDone ? `0 0 32px ${theme.colors.accent}66, 0 0 64px ${theme.colors.accent}33` : 'none',
              transition: 'background 500ms ease-out, border-color 500ms ease-out, box-shadow 500ms ease-out'
            }}
          >
            <motion.div
              animate={
                isDone
                  ? {
                      scale: [1, 1.1, 1],
                      filter: [
                        `drop-shadow(0 0 0 ${theme.colors.accent}00)`,
                        `drop-shadow(0 0 10px ${theme.colors.accent})`,
                        `drop-shadow(0 0 0 ${theme.colors.accent}00)`
                      ]
                    }
                  : {}
              }
              transition={{
                duration: 1.6,
                repeat: isDone ? Infinity : 0,
                ease: 'easeInOut'
              }}
            >
              <Clock size={28} color={theme.colors.accent} />
            </motion.div>
            <div
              style={{
                fontFamily: theme.fonts.display,
                fontSize: 32,
                fontWeight: 900,
                color: theme.colors.accent,
                lineHeight: 1,
                textShadow: isDone ? `0 0 14px ${theme.colors.accent}88` : 'none',
                transition: 'text-shadow 500ms ease-out'
              }}
            >
              15
            </div>
            <div
              style={{
                fontFamily: theme.fonts.mono,
                fontSize: 11,
                color: theme.colors.textMuted,
                letterSpacing: '0.12em',
                textTransform: 'uppercase'
              }}
            >
              min
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  )
}
