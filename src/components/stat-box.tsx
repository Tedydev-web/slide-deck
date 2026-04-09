import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { scaleIn } from '../lib/animations'

interface StatBoxProps {
  /** Big stat value e.g. "19%", "+110%", "2x" */
  value: string
  /** VI label */
  label: string
  /** KR label */
  labelKr?: string
  /** Small helper text under label */
  sublabel?: string
  sublabelKr?: string
  color?: string
  size?: 'hero' | 'large' | 'medium' | 'small'
  align?: 'left' | 'center' | 'right'
  style?: CSSProperties
  animated?: boolean
  delay?: number
}

const sizeMap = {
  hero: { value: 180, label: 22, sublabel: 14 },
  large: { value: 140, label: 20, sublabel: 13 },
  medium: { value: 96, label: 17, sublabel: 12 },
  small: { value: 64, label: 14, sublabel: 11 },
} as const

export function StatBox({
  value,
  label,
  labelKr,
  sublabel,
  sublabelKr,
  color,
  size = 'large',
  align = 'left',
  style,
  animated = true,
  delay = 0,
}: StatBoxProps) {
  const dims = sizeMap[size]
  const accent = color ?? theme.colors.accent

  const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
    textAlign: align,
    ...style,
  }

  const Wrapper = animated ? motion.div : 'div'
  const wrapperProps = animated
    ? { variants: scaleIn, initial: 'hidden', animate: 'visible', custom: delay }
    : {}

  return (
    <Wrapper style={container} {...wrapperProps}>
      <div
        style={{
          fontFamily: theme.fonts.display,
          fontSize: dims.value,
          fontWeight: 800,
          lineHeight: 0.95,
          color: accent,
          letterSpacing: '-0.03em',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: theme.fonts.display,
          fontSize: dims.label,
          color: theme.colors.text,
          fontWeight: 600,
          marginTop: 12,
          letterSpacing: '-0.01em',
        }}
      >
        {label}
        {labelKr && (
          <span
            lang="ko"
            style={{
              display: 'block',
              fontFamily: theme.fonts.korean,
              fontSize: dims.sublabel,
              color: theme.colors.textMuted,
              marginTop: 4,
              fontWeight: 400,
            }}
          >
            {labelKr}
          </span>
        )}
      </div>
      {sublabel && (
        <div
          style={{
            fontFamily: theme.fonts.body,
            fontSize: dims.sublabel,
            color: theme.colors.textMuted,
            marginTop: 8,
            maxWidth: 320,
            lineHeight: 1.5,
          }}
        >
          {sublabel}
          {sublabelKr && (
            <span
              lang="ko"
              style={{
                display: 'block',
                fontFamily: theme.fonts.korean,
                marginTop: 2,
              }}
            >
              {sublabelKr}
            </span>
          )}
        </div>
      )}
    </Wrapper>
  )
}
