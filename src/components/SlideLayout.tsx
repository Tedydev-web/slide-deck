import type { ReactNode } from 'react'
import { theme } from '../lib/theme'

interface Props {
  children: ReactNode
  background?: string
  showGrid?: boolean
}

export default function SlideLayout({ children, background, showGrid = false }: Props) {
  return (
    <div
      style={{
        width: theme.slide.width,
        height: theme.slide.height,
        background: background ?? theme.colors.bg,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: theme.fonts.body,
        color: theme.colors.text,
      }}
    >
      {showGrid && <GridOverlay />}
      {children}
    </div>
  )
}

/**
 * Subtle 60px grid overlay — matches ai-code-vs-profit texture.
 */
export function GridOverlay({ opacity = 0.03 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,${opacity}) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,${opacity}) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }}
    />
  )
}

/* Reusable geometric decorations */
export function Circle({
  size,
  color,
  top,
  left,
  right,
  bottom,
  opacity = 0.15,
}: {
  size: number
  color?: string
  top?: number | string
  left?: number | string
  right?: number | string
  bottom?: number | string
  opacity?: number
}) {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        border: `2px solid ${color ?? theme.colors.accent}`,
        top,
        left,
        right,
        bottom,
        opacity,
        pointerEvents: 'none',
      }}
    />
  )
}

export function DotPattern({
  rows = 4,
  cols = 6,
  gap = 14,
  dotSize = 4,
  color,
  top,
  left,
  right,
  bottom,
  opacity = 0.18,
}: {
  rows?: number
  cols?: number
  gap?: number
  dotSize?: number
  color?: string
  top?: number | string
  left?: number | string
  right?: number | string
  bottom?: number | string
  opacity?: number
}) {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        top,
        left,
        right,
        bottom,
        opacity,
        pointerEvents: 'none',
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, ${gap}px)`,
        gridTemplateRows: `repeat(${rows}, ${gap}px)`,
      }}
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div
          key={i}
          style={{
            width: dotSize,
            height: dotSize,
            borderRadius: '50%',
            background: color ?? theme.colors.accent,
          }}
        />
      ))}
    </div>
  )
}

export function HLine({
  width,
  thickness = 2,
  color,
  top,
  left,
  right,
  bottom,
  opacity = 0.2,
}: {
  width: number | string
  thickness?: number
  color?: string
  top?: number | string
  left?: number | string
  right?: number | string
  bottom?: number | string
  opacity?: number
}) {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        width,
        height: thickness,
        background: color ?? theme.colors.accent,
        top,
        left,
        right,
        bottom,
        opacity,
        pointerEvents: 'none',
      }}
    />
  )
}

/**
 * Attribution footer — small mono text at bottom-right.
 */
export function Attribution({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 24,
        right: 48,
        fontFamily: theme.fonts.mono,
        fontSize: 11,
        color: theme.colors.textMuted,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}
    >
      {children}
    </div>
  )
}
