/**
 * Unified theme for AI Agent Workshop Deck.
 * Based on ai-code-vs-profit visual language.
 * Dark bg + orange accent + Be Vietnam Pro + Pretendard (KR).
 */
export const theme = {
  colors: {
    bg: '#1a1a1a',
    bgDeep: '#111111',
    bgElev: '#1f1f1f',
    accent: '#ff5722',
    accentHover: '#e64a19',
    accentDim: 'rgba(255, 87, 34, 0.15)',
    accentGlow: 'rgba(255, 87, 34, 0.3)',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    textMuted: 'rgba(255, 255, 255, 0.4)',
    border: 'rgba(255, 255, 255, 0.08)',
    borderStrong: 'rgba(255, 255, 255, 0.16)',
    surface: 'rgba(255, 255, 255, 0.05)',
    surfaceElev: 'rgba(255, 255, 255, 0.08)',
    green: '#4caf50',
    greenDim: 'rgba(76, 175, 80, 0.15)',
    red: '#f44336',
    redDim: 'rgba(244, 67, 54, 0.15)',
    // Legacy tokens preserved for transitional re-skin compatibility
    cream: '#f5f3ee',
    charcoal: '#1a1a1a',
    warm: '#e8d4c0',
    orange: '#ff5722',
  },
  fonts: {
    display: "'Be Vietnam Pro', 'Inter', sans-serif",
    body: "'Manrope', 'Be Vietnam Pro', sans-serif",
    korean: "'Pretendard Variable', Pretendard, 'Noto Sans KR', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  slide: {
    width: 1280,
    height: 720,
  },
} as const

export const gradients = {
  subtle:
    'radial-gradient(at 70% 60%, rgba(255,87,34,0.12) 0%, transparent 50%), radial-gradient(at 30% 40%, rgba(255,87,34,0.06) 0%, transparent 50%), #1a1a1a',
  warm:
    'radial-gradient(at 50% 50%, rgba(255,87,34,0.10) 0%, transparent 60%), #1a1a1a',
  deep:
    'radial-gradient(at 60% 50%, rgba(255,87,34,0.15) 0%, transparent 50%), #111111',
  topRight:
    'radial-gradient(ellipse at 85% 15%, rgba(255,87,34,0.18) 0%, transparent 55%), #1a1a1a',
  editorial:
    'linear-gradient(160deg, #1a1a1a 0%, #1e1a18 50%, #1a1a1a 100%)',
  center:
    'radial-gradient(ellipse at 50% 50%, rgba(255,87,34,0.10) 0%, transparent 70%), #1a1a1a',
} as const
