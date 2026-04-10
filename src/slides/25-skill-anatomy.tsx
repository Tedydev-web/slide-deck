import { useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, slideUp, terminalLine } from '../lib/animations'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'

// Anatomy sections:
//  0 = name
//  1 = description
//  2 = instructions
// null = structural lines (yaml delimiters, blanks) — always visible
type Section = 0 | 1 | 2

interface CodeLine {
  text: string
  type: 'muted' | 'accent' | 'text' | 'secondary'
  section: Section | null
}

const codeLines: CodeLine[] = [
  { text: '---', type: 'muted', section: null },
  { text: 'name: cook', type: 'accent', section: 0 },
  { text: 'description: "ALWAYS activate before', type: 'accent', section: 1 },
  { text: '  implementing EVERY feature, plan, or fix"', type: 'accent', section: 1 },
  { text: '---', type: 'muted', section: null },
  { text: '', type: 'muted', section: null },
  { text: '# Cook — Implementation Workflow', type: 'text', section: 2 },
  { text: '', type: 'muted', section: null },
  { text: 'Khi user yêu cầu implement/fix:', type: 'secondary', section: 2 },
  { text: '1. Research: đọc code + context', type: 'secondary', section: 2 },
  { text: '2. Plan: xác định approach + steps', type: 'secondary', section: 2 },
  { text: '3. Implement + verify: tests pass', type: 'secondary', section: 2 },
]

interface AnatomyCard {
  section: Section
  index: string
  title: { vi: string; kr: string }
  sub: { vi: string; kr: string }
}

const cards: AnatomyCard[] = [
  {
    section: 0,
    index: '01',
    title: { vi: 'Tên skill', kr: '스킬 이름' },
    sub: { vi: 'Định danh duy nhất', kr: '고유 식별자' },
  },
  {
    section: 1,
    index: '02',
    title: { vi: 'Mô tả · Từ khóa', kr: '설명 · 키워드' },
    sub: { vi: 'Kích hoạt tự động', kr: '자동 트리거' },
  },
  {
    section: 2,
    index: '03',
    title: { vi: 'Hướng dẫn', kr: '지침' },
    sub: { vi: 'Markdown tự do', kr: '자유 마크다운' },
  },
]

function lineColor(type: CodeLine['type']): string {
  switch (type) {
    case 'accent':
      return theme.colors.accent
    case 'text':
      return theme.colors.text
    case 'secondary':
      return theme.colors.textSecondary
    default:
      return theme.colors.textMuted
  }
}

export default function Slide25SkillAnatomy() {
  // Click-to-highlight state machine:
  //  null       → no card selected, all code lines at full opacity
  //  0 | 1 | 2  → corresponding section lit, other sections dim
  // Clicking the same card again toggles back to null.
  const [activeSection, setActiveSection] = useState<Section | null>(null)

  const handleCardClick = (section: Section) => {
    setActiveSection((current) => (current === section ? null : section))
  }

  // Per-line opacity driven by activeSection.
  //  - nothing active           → all lines at 1
  //  - structural (null)        → held at 0.55 so frame stays legible
  //  - in-section line          → 1
  //  - out-of-section line      → 0.22 (dim but not invisible)
  const getLineOpacity = (line: CodeLine): number => {
    if (activeSection === null) return 1
    if (line.section === null) return 0.55
    return line.section === activeSection ? 1 : 0.22
  }

  return (
    <SlideLayout background={gradients.subtle}>
      <div
        className="w-full h-full flex flex-col justify-center"
        style={{ padding: '56px 88px' }}
      >
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          {/* Terminal prompt — design element, mono accent */}
          <motion.div
            variants={terminalLine}
            style={{
              color: theme.colors.accent,
              fontSize: 'clamp(12px, 1.2vw, 15px)',
              fontFamily: theme.fonts.mono,
              marginBottom: 14,
              opacity: 0.85,
              letterSpacing: '0.02em',
            }}
          >
            {'>'}_&nbsp;skill-anatomy.md
          </motion.div>

          {/* Title bilingual — main heading */}
          <motion.h2
            variants={slideUp}
            style={{
              fontSize: 'clamp(30px, 3.6vw, 46px)',
              color: theme.colors.text,
              fontWeight: 800,
              fontFamily: theme.fonts.display,
              letterSpacing: '-0.025em',
              lineHeight: 1.08,
              marginBottom: 10,
            }}
          >
            <BiText
              vi="Cấu trúc Skill"
              kr="SKILL.md 구조"
              krStyle={{
                fontSize: '0.48em',
                marginTop: '0.4em',
                color: theme.colors.textMuted,
                fontWeight: 500,
              }}
            />
          </motion.h2>

          {/* Subtitle bilingual — short descriptor */}
          <motion.p
            variants={slideUp}
            style={{
              color: theme.colors.textSecondary,
              fontSize: 'clamp(13px, 1.35vw, 16px)',
              fontFamily: theme.fonts.body,
              marginBottom: 32,
              maxWidth: 760,
            }}
          >
            <BiText
              vi="name, description (từ khóa kích hoạt), và phần hướng dẫn — chỉ là markdown thôi"
              kr="이름, 설명(트리거 키워드), 지침 섹션 — 단순한 마크다운"
              krStyle={{ fontSize: '0.78em', marginTop: '0.25em', color: theme.colors.textMuted }}
            />
          </motion.p>

          {/* Two-column row: code block (LEFT, ~60%) + clickable cards (RIGHT, ~40%) */}
          <div style={{ display: 'flex', gap: 28, alignItems: 'stretch' }}>
            {/* LEFT — code block */}
            <motion.div
              variants={slideUp}
              style={{
                flex: '1 1 60%',
                minWidth: 0,
                border: `1px solid ${theme.colors.accentGlow}`,
                borderRadius: 12,
                padding: '22px 28px',
                background: `linear-gradient(180deg, ${theme.colors.bgElev} 0%, ${theme.colors.bgDeep} 100%)`,
                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.03)`,
              }}
            >
              <div
                style={{
                  color: theme.colors.textMuted,
                  fontSize: 'clamp(10px, 0.95vw, 12px)',
                  fontFamily: theme.fonts.mono,
                  marginBottom: 12,
                  letterSpacing: '0.06em',
                  textTransform: 'none',
                  opacity: 0.8,
                }}
              >
                skills/cook/SKILL.md
              </div>
              {codeLines.map((line, i) => (
                <div
                  key={i}
                  style={{
                    color: lineColor(line.type),
                    fontSize: 'clamp(11px, 1.15vw, 14px)',
                    lineHeight: 1.68,
                    minHeight: line.text === '' ? 10 : undefined,
                    fontFamily: theme.fonts.mono,
                    opacity: getLineOpacity(line),
                    transition: 'opacity 260ms ease-out',
                    letterSpacing: '-0.005em',
                  }}
                >
                  {line.text || '\u00A0'}
                </div>
              ))}
            </motion.div>

            {/* RIGHT — clickable anatomy cards stacked vertically with stagger */}
            <motion.div
              variants={staggerContainer}
              style={{
                flex: '1 1 40%',
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                justifyContent: 'center',
              }}
            >
              {cards.map((card) => {
                const isActive = activeSection === card.section
                return (
                  <motion.button
                    key={card.section}
                    type="button"
                    variants={slideUp}
                    onClick={() => handleCardClick(card.section)}
                    aria-pressed={isActive}
                    aria-label={`Highlight section: ${card.title.vi}`}
                    style={{
                      position: 'relative',
                      textAlign: 'left',
                      padding: '16px 20px 16px 22px',
                      borderRadius: 12,
                      border: isActive
                        ? `1.5px solid ${theme.colors.accent}`
                        : `1px solid ${theme.colors.border}`,
                      background: isActive
                        ? `linear-gradient(135deg, ${theme.colors.accentDim} 0%, rgba(255,107,53,0.04) 100%)`
                        : 'rgba(255,255,255,0.01)',
                      boxShadow: isActive
                        ? `0 0 24px ${theme.colors.accent}44, 0 0 48px ${theme.colors.accent}22, inset 0 1px 0 rgba(255,255,255,0.04)`
                        : `inset 0 1px 0 rgba(255,255,255,0.02)`,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 14,
                      transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                      transition:
                        'border-color 280ms ease-out, background 280ms ease-out, box-shadow 280ms ease-out, transform 280ms ease-out',
                      fontFamily: theme.fonts.body,
                      overflow: 'hidden',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = theme.colors.accentGlow
                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = theme.colors.border
                        e.currentTarget.style.background = 'rgba(255,255,255,0.01)'
                      }
                    }}
                  >
                    {/* Active-state accent stripe on the left edge */}
                    <span
                      aria-hidden
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 10,
                        bottom: 10,
                        width: 3,
                        borderRadius: '0 3px 3px 0',
                        background: isActive ? theme.colors.accent : 'transparent',
                        boxShadow: isActive ? `0 0 12px ${theme.colors.accent}` : 'none',
                        transition: 'background 280ms ease-out, box-shadow 280ms ease-out',
                      }}
                    />

                    {/* Index number prefix — mono, muted when idle, accent when active */}
                    <span
                      style={{
                        fontFamily: theme.fonts.mono,
                        fontSize: 'clamp(13px, 1.3vw, 16px)',
                        fontWeight: 700,
                        color: isActive ? theme.colors.accent : theme.colors.textMuted,
                        letterSpacing: '0.04em',
                        flexShrink: 0,
                        paddingTop: 2,
                        transition: 'color 280ms ease-out',
                      }}
                    >
                      {card.index}
                    </span>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      {/* Title row: VI main + KR tiny inline beside */}
                      <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '0 10px' }}>
                        <span
                          style={{
                            fontFamily: theme.fonts.display,
                            fontSize: 'clamp(15px, 1.5vw, 18px)',
                            fontWeight: 700,
                            color: isActive ? theme.colors.text : theme.colors.textSecondary,
                            letterSpacing: '-0.005em',
                            transition: 'color 280ms ease-out',
                          }}
                        >
                          {card.title.vi}
                        </span>
                        <span
                          lang="ko"
                          style={{
                            fontFamily: theme.fonts.korean,
                            fontSize: 'clamp(10px, 1vw, 12px)',
                            color: theme.colors.textMuted,
                            opacity: isActive ? 0.75 : 0.5,
                            fontWeight: 500,
                            transition: 'opacity 280ms ease-out',
                          }}
                        >
                          {card.title.kr}
                        </span>
                      </div>

                      {/* Subtitle row: VI + KR tiny inline */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          flexWrap: 'wrap',
                          gap: '0 8px',
                          marginTop: 4,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: theme.fonts.mono,
                            fontSize: 'clamp(11px, 1.1vw, 13px)',
                            color: isActive ? theme.colors.textSecondary : theme.colors.textMuted,
                            letterSpacing: '0.01em',
                            transition: 'color 280ms ease-out',
                          }}
                        >
                          {card.sub.vi}
                        </span>
                        <span
                          lang="ko"
                          style={{
                            fontFamily: theme.fonts.korean,
                            fontSize: 'clamp(9px, 0.9vw, 11px)',
                            color: theme.colors.textMuted,
                            opacity: isActive ? 0.65 : 0.45,
                            transition: 'opacity 280ms ease-out',
                          }}
                        >
                          {card.sub.kr}
                        </span>
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
