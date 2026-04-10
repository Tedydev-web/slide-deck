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
// null = structural lines (yaml delimiters, empty lines) — always visible
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
  title: { vi: string; kr: string }
  sub: { vi: string; kr: string }
}

const cards: AnatomyCard[] = [
  {
    section: 0,
    title: { vi: 'Tên skill', kr: '스킬 이름' },
    sub: { vi: 'Định danh duy nhất', kr: '고유 식별자' },
  },
  {
    section: 1,
    title: { vi: 'Mô tả / Từ khóa', kr: '설명 · 키워드' },
    sub: { vi: 'Kích hoạt tự động', kr: '자동 트리거' },
  },
  {
    section: 2,
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
  // Click-to-highlight state. null = no card selected, all code lines at full opacity.
  // When a card is clicked, its section becomes active: matching lines stay bright,
  // other section lines fade. Clicking the same card again toggles back to null.
  const [activeSection, setActiveSection] = useState<Section | null>(null)

  const handleCardClick = (section: Section) => {
    setActiveSection((current) => (current === section ? null : section))
  }

  // Per-line opacity driven by activeSection:
  //  - nothing active: full brightness for all lines
  //  - structural (null section): keep at 0.6 so frame stays readable
  //  - in-section line: full 1
  //  - out-of-section line: dim 0.25
  const getLineOpacity = (line: CodeLine): number => {
    if (activeSection === null) return 1
    if (line.section === null) return 0.6
    return line.section === activeSection ? 1 : 0.25
  }

  return (
    <SlideLayout background={gradients.subtle}>
      <div
        className="w-full h-full flex flex-col justify-center"
        style={{ padding: '60px 80px' }}
      >
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          {/* Terminal prompt — design element */}
          <motion.div
            variants={terminalLine}
            style={{
              color: theme.colors.accent,
              fontSize: 'clamp(12px, 1.2vw, 15px)',
              fontFamily: theme.fonts.mono,
              marginBottom: 16,
              opacity: 0.8,
            }}
          >
            {'>'}_&nbsp;skill-anatomy.md
          </motion.div>

          <motion.h2
            variants={slideUp}
            style={{
              fontSize: 'clamp(26px, 3.2vw, 40px)',
              color: theme.colors.text,
              fontWeight: 800,
              fontFamily: theme.fonts.display,
              letterSpacing: '-0.02em',
              marginBottom: 8,
            }}
          >
            <BiText
              vi="Cấu trúc Skill"
              kr="SKILL.md 구조"
              krStyle={{ fontSize: '0.55em', marginTop: '0.35em', color: theme.colors.textMuted }}
            />
          </motion.h2>

          <motion.p
            variants={slideUp}
            style={{
              color: theme.colors.textSecondary,
              fontSize: 'clamp(13px, 1.4vw, 17px)',
              fontFamily: theme.fonts.body,
              marginBottom: 28,
            }}
          >
            <BiText
              vi="name, description (từ khóa kích hoạt), và phần hướng dẫn — chỉ là markdown thôi"
              kr="이름, 설명(트리거 키워드), 지침 섹션 — 단순한 마크다운"
              krStyle={{ fontSize: '0.78em', marginTop: '0.3em', color: theme.colors.textMuted }}
            />
          </motion.p>

          {/* Two-column row: code on the left, clickable anatomy cards on the right */}
          <div style={{ display: 'flex', gap: 20, alignItems: 'stretch' }}>
            {/* LEFT: code block */}
            <motion.div
              variants={slideUp}
              style={{
                flex: '1 1 62%',
                minWidth: 0,
                border: `1px solid ${theme.colors.accentGlow}`,
                borderRadius: 10,
                padding: '18px 24px',
                background: theme.colors.bgElev,
              }}
            >
              <div
                style={{
                  color: theme.colors.textMuted,
                  fontSize: 'clamp(10px, 1vw, 12px)',
                  fontFamily: theme.fonts.mono,
                  marginBottom: 10,
                  letterSpacing: '0.04em',
                }}
              >
                skills/cook/SKILL.md
              </div>
              {codeLines.map((line, i) => (
                <div
                  key={i}
                  style={{
                    color: lineColor(line.type),
                    fontSize: 'clamp(11px, 1.2vw, 14px)',
                    lineHeight: 1.75,
                    minHeight: line.text === '' ? 10 : undefined,
                    fontFamily: theme.fonts.mono,
                    opacity: getLineOpacity(line),
                    transition: 'opacity 280ms ease-out',
                  }}
                >
                  {line.text || '\u00A0'}
                </div>
              ))}
            </motion.div>

            {/* RIGHT: clickable anatomy cards — click to highlight corresponding code section */}
            <motion.div
              variants={slideUp}
              style={{
                flex: '1 1 38%',
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                justifyContent: 'center',
              }}
            >
              {cards.map((card) => {
                const isActive = activeSection === card.section
                return (
                  <button
                    key={card.section}
                    type="button"
                    onClick={() => handleCardClick(card.section)}
                    aria-pressed={isActive}
                    aria-label={`Highlight section: ${card.title.vi}`}
                    style={{
                      textAlign: 'left',
                      padding: '14px 18px',
                      borderRadius: 10,
                      border: isActive
                        ? `1.5px solid ${theme.colors.accent}`
                        : `1px solid ${theme.colors.border}`,
                      background: isActive ? theme.colors.accentDim : 'transparent',
                      boxShadow: isActive
                        ? `0 0 18px ${theme.colors.accent}55, 0 0 36px ${theme.colors.accent}22`
                        : 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                      transition:
                        'border-color 280ms ease-out, background 280ms ease-out, box-shadow 280ms ease-out',
                      fontFamily: theme.fonts.body,
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = theme.colors.accentGlow
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = theme.colors.border
                      }
                    }}
                  >
                    {/* Bullet dot — signals "item in a list" */}
                    <span
                      aria-hidden
                      style={{
                        display: 'inline-block',
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: isActive ? theme.colors.accent : theme.colors.textMuted,
                        flexShrink: 0,
                        marginTop: 8,
                        boxShadow: isActive ? `0 0 8px ${theme.colors.accent}` : 'none',
                        transition: 'background 280ms ease-out, box-shadow 280ms ease-out',
                      }}
                    />

                    <div style={{ flex: 1, minWidth: 0 }}>
                      {/* Title bilingual */}
                      <BiText
                        vi={card.title.vi}
                        kr={card.title.kr}
                        viStyle={{
                          fontFamily: theme.fonts.display,
                          fontSize: 'clamp(14px, 1.4vw, 17px)',
                          fontWeight: 700,
                          color: isActive ? theme.colors.text : theme.colors.textSecondary,
                          letterSpacing: '-0.005em',
                          transition: 'color 280ms ease-out',
                        }}
                        krStyle={{
                          fontSize: '0.72em',
                          color: theme.colors.textMuted,
                          marginTop: '0.15em',
                        }}
                      />

                      {/* Subtitle bilingual */}
                      <div style={{ marginTop: 4 }}>
                        <BiText
                          vi={card.sub.vi}
                          kr={card.sub.kr}
                          viStyle={{
                            fontFamily: theme.fonts.mono,
                            fontSize: 'clamp(11px, 1.1vw, 13px)',
                            color: theme.colors.textMuted,
                          }}
                          krStyle={{
                            fontSize: '0.82em',
                            color: theme.colors.textMuted,
                            opacity: 0.75,
                            marginTop: '0.15em',
                          }}
                        />
                      </div>
                    </div>
                  </button>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
