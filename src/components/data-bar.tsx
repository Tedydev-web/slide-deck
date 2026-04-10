import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { theme } from '../lib/theme'

export interface DataBarItem {
  label: string
  labelKr?: string
  value: number
  /** Optional formatted display value (e.g. "+110%", "2.5x"). Falls back to `${value}` */
  display?: string
  color?: string
  /** Tint color for muted/comparison bars */
  muted?: boolean
}

interface DataBarProps {
  data: DataBarItem[]
  /** Max value for scaling bars. Default: max(data.value) */
  maxValue?: number
  /** Show numeric value at the end of each bar */
  showValues?: boolean
  /** Height per bar in px */
  barHeight?: number
  /** Horizontal gap between label and bar */
  labelWidth?: number
  /** Gap between label column and bar area */
  labelGap?: number
  /** Label alignment in label column */
  labelAlign?: 'left' | 'right'
  /** Animate bars in on mount */
  animated?: boolean
  style?: CSSProperties
}

/**
 * Reusable horizontal bar chart for data visualizations.
 * Minimal, theme-aware, with bilingual label support.
 */
export function DataBar({
  data,
  maxValue,
  showValues = true,
  barHeight = 38,
  labelWidth = 280,
  labelGap = 18,
  labelAlign = 'right',
  animated = true,
  style,
}: DataBarProps) {
  const scaleMax = maxValue ?? Math.max(...data.map((d) => d.value))

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        ...style,
      }}
    >
      {data.map((item, i) => {
        const widthPct = (item.value / scaleMax) * 100
        const barColor = item.muted
          ? theme.colors.textMuted
          : item.color ?? theme.colors.accent

        return (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: labelGap,
            }}
          >
            <div
              style={{
                width: labelWidth,
                flexShrink: 0,
                fontFamily: theme.fonts.body,
                fontSize: 15,
                color: theme.colors.text,
                fontWeight: 500,
                textAlign: labelAlign,
              }}
            >
              {item.label}
              {item.labelKr && (
                <span
                  lang="ko"
                  style={{
                    display: 'block',
                    fontFamily: theme.fonts.korean,
                    fontSize: 12,
                    color: theme.colors.textMuted,
                    marginTop: 2,
                  }}
                >
                  {item.labelKr}
                </span>
              )}
            </div>
            <div
              style={{
                flex: 1,
                height: barHeight,
                background: theme.colors.surface,
                borderRadius: 4,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <motion.div
                initial={animated ? { width: 0 } : undefined}
                animate={{ width: `${widthPct}%` }}
                transition={{ duration: 0.9, delay: 0.25 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  height: '100%',
                  background: barColor,
                  borderRadius: 4,
                  boxShadow: item.muted ? 'none' : `0 0 24px ${theme.colors.accentGlow}`,
                }}
              />
              {showValues && (
                <motion.div
                  initial={animated ? { opacity: 0 } : undefined}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + i * 0.12, duration: 0.4 }}
                  style={{
                    position: 'absolute',
                    right: 14,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontFamily: theme.fonts.mono,
                    fontSize: 14,
                    color: theme.colors.text,
                    fontWeight: 600,
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {item.display ?? item.value}
                </motion.div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
