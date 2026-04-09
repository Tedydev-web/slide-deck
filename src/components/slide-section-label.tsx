import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { fadeUp } from '../lib/animations'

interface Props {
  /** VI label, e.g. "SỰ THẬT #1" */
  label: string
  /** KR label, e.g. "사실 #1" */
  labelKr?: string
  color?: string
  style?: CSSProperties
  delay?: number
  icon?: React.ReactNode
}

/**
 * Small mono-font section tag used at the top of each slide.
 * Matches ai-code-vs-profit "REALITY CHECK #N" pattern.
 */
export function SlideSectionLabel({
  label,
  labelKr,
  color,
  style,
  delay = 0,
  icon,
}: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={delay}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        ...style,
      }}
    >
      {icon}
      <span
        style={{
          fontFamily: theme.fonts.mono,
          fontSize: 13,
          color: color ?? theme.colors.accent,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.18em',
        }}
      >
        {label}
      </span>
      {labelKr && (
        <span
          lang="ko"
          style={{
            fontFamily: theme.fonts.korean,
            fontSize: 12,
            color: theme.colors.textMuted,
            fontWeight: 500,
            letterSpacing: '0.08em',
          }}
        >
          {labelKr}
        </span>
      )}
    </motion.div>
  )
}
