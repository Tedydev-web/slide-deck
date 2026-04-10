import type { CSSProperties, ReactNode } from 'react'
import { theme } from '../lib/theme'

/**
 * Bilingual VI-KR text component.
 * Renders Vietnamese primary text with Korean subtitle beneath.
 * KR text uses Pretendard font via lang="ko" attribute.
 */
interface BiTextProps {
  vi: ReactNode
  kr: ReactNode
  viStyle?: CSSProperties
  krStyle?: CSSProperties
  /** Inline mode puts VI+KR on same baseline (VI bigger, KR smaller inline) */
  inline?: boolean
  /** Ratio of KR font-size relative to VI (default 0.78) */
  krScale?: number
  className?: string
  as?: 'div' | 'span' | 'p'
}

export function BiText({
  vi,
  kr,
  viStyle,
  krStyle,
  inline = false,
  krScale = 0.78,
  className,
  as: Tag = 'div',
}: BiTextProps) {
  const viBaseStyle: CSSProperties = {
    display: 'block',
    lineBreak: 'auto',
    overflowWrap: 'normal',
    wordBreak: 'normal',
    textWrap: 'pretty',
  }

  const krBaseStyle: CSSProperties = {
    display: inline ? 'inline-block' : 'block',
    fontFamily: theme.fonts.korean,
    fontSize: `${krScale}em`,
    color: theme.colors.textMuted,
    marginTop: inline ? 0 : '0.35em',
    marginLeft: inline ? '0.6em' : 0,
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 1.4,
    ...krStyle,
  }

  return (
    <Tag className={className} style={viStyle}>
      <span className="vi" style={viBaseStyle}>{vi}</span>
      <span className="kr" lang="ko" style={krBaseStyle}>
        {kr}
      </span>
    </Tag>
  )
}
