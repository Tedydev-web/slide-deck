import { createContext, useContext, type ReactNode } from 'react'
import { theme } from '../lib/theme'
import { AutoFitFrame } from './slide-overflow-guard'

/**
 * Provides the current slide index + total to every SlideLayout so it can
 * render the corner page-number watermark automatically. App.tsx sets this.
 */
export const SlideIndexContext = createContext<{ index: number; total: number } | null>(null)

interface Props {
  children: ReactNode
  background?: string
  /**
   * Deprecated: grid is now always rendered to match ai-code-vs-profit.
   * Prop kept for backward compat — has no effect.
   */
  showGrid?: boolean
  /**
   * Override the auto page number (e.g. hide it on the cover slide).
   * Pass `null` to hide entirely, or a string like '08' to override.
   */
  pageNumber?: string | null
}

export default function SlideLayout({ children, background, pageNumber }: Props) {
  const ctx = useContext(SlideIndexContext)

  // Auto page number from context → zero-padded 2-digit like original
  const autoNumber =
    ctx != null ? String(ctx.index + 1).padStart(2, '0') : null
  const displayNumber =
    pageNumber === null ? null : pageNumber ?? autoNumber

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
      {/* Grid pattern — exact match to ai-code-vs-profit: 60px squares, 0.02 white */}
      <GridOverlay />

      {/* Corner watermark number — pixel-perfect match to original PH component */}
      {displayNumber != null && <PageNumberWatermark number={displayNumber} />}

      {/*
        AutoFitFrame is the safety net — no-op when content fits 720px,
        scales down uniformly when it overflows. Dev-mode badge flags any
        scaled slide so you can hand-tune it.
      */}
      <AutoFitFrame width={theme.slide.width} height={theme.slide.height}>
        {children}
      </AutoFitFrame>
    </div>
  )
}

/**
 * Huge subtle page number in top-right corner. Exact copy of the original
 * `ai-code-vs-profit` PH component — same font, size, color, position.
 * Decorative only: no pointer events, not selectable.
 */
function PageNumberWatermark({ number }: { number: string }) {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        top: 40,
        right: 60,
        fontFamily: theme.fonts.display,
        fontWeight: 800,
        fontSize: 'clamp(6rem, 15vw, 12rem)',
        color: 'rgba(255, 255, 255, 0.03)',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      {number}
    </div>
  )
}

/**
 * 60px grid overlay — pixel-perfect match to ai-code-vs-profit texture.
 * Default opacity 0.02 matches the original's `rgba(255,255,255,0.02)` value.
 */
export function GridOverlay({ opacity = 0.02 }: { opacity?: number }) {
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
