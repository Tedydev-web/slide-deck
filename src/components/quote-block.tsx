import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { theme } from '../lib/theme'
import { fadeUp } from '../lib/animations'

interface QuoteBlockProps {
  quote: string
  quoteKr?: string
  source: string
  size?: 'large' | 'medium' | 'small'
  style?: CSSProperties
  delay?: number
}

const sizeMap = {
  large: { font: 28, iconSize: 48, padding: '40px 44px' },
  medium: { font: 22, iconSize: 36, padding: '32px 36px' },
  small: { font: 17, iconSize: 28, padding: '24px 28px' },
} as const

export function QuoteBlock({
  quote,
  quoteKr,
  source,
  size = 'medium',
  style,
  delay = 0,
}: QuoteBlockProps) {
  const dims = sizeMap[size]

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={delay}
      style={{
        position: 'relative',
        background: theme.colors.surface,
        borderLeft: `3px solid ${theme.colors.accent}`,
        borderRadius: 6,
        padding: dims.padding,
        maxWidth: 820,
        ...style,
      }}
    >
      <Quote
        size={dims.iconSize}
        color={theme.colors.accent}
        style={{
          position: 'absolute',
          top: -dims.iconSize / 2,
          left: 20,
          background: theme.colors.bg,
          padding: 6,
          opacity: 0.85,
        }}
      />
      <blockquote
        style={{
          fontFamily: theme.fonts.display,
          fontSize: dims.font,
          fontStyle: 'italic',
          color: theme.colors.text,
          lineHeight: 1.4,
          fontWeight: 500,
          marginBottom: quoteKr ? 14 : 18,
        }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      {quoteKr && (
        <div
          lang="ko"
          style={{
            fontFamily: theme.fonts.korean,
            fontSize: dims.font * 0.78,
            fontStyle: 'italic',
            color: theme.colors.textSecondary,
            lineHeight: 1.45,
            marginBottom: 18,
          }}
        >
          &ldquo;{quoteKr}&rdquo;
        </div>
      )}
      <div
        style={{
          fontFamily: theme.fonts.mono,
          fontSize: 12,
          color: theme.colors.textMuted,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
        }}
      >
        — {source}
      </div>
    </motion.div>
  )
}
