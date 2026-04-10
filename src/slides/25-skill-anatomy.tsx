import { motion } from 'framer-motion'
import { staggerContainer, slideUp, terminalLine } from '../lib/animations'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'

const codeLines = [
  { text: '---', type: 'muted' },
  { text: 'name: cook', type: 'accent' },
  { text: 'description: "ALWAYS activate before', type: 'accent' },
  { text: '  implementing EVERY feature, plan, or fix"', type: 'accent' },
  { text: '---', type: 'muted' },
  { text: '', type: 'muted' },
  { text: '# Cook — Implementation Workflow', type: 'text' },
  { text: '', type: 'muted' },
  { text: 'Khi user yêu cầu implement/fix:', type: 'secondary' },
  { text: '1. Research: đọc code + context', type: 'secondary' },
  { text: '2. Plan: xác định approach + steps', type: 'secondary' },
  { text: '3. Implement + verify: tests pass', type: 'secondary' },
]

function lineColor(type: string): string {
  switch (type) {
    case 'accent': return theme.colors.accent
    case 'text': return theme.colors.text
    case 'secondary': return theme.colors.textSecondary
    default: return theme.colors.textMuted
  }
}

export default function Slide25SkillAnatomy() {
  return (
    <SlideLayout background={gradients.subtle}>
      <div
        className="w-full h-full flex flex-col justify-center"
        style={{ padding: '60px 80px' }}
      >
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          {/* Terminal prompt — design element, keep for terminal-aesthetic slide */}
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
              marginBottom: 32,
            }}
          >
            <BiText
              vi="name, description (từ khóa kích hoạt), và phần hướng dẫn — chỉ là markdown thôi"
              kr="이름, 설명(트리거 키워드), 지침 섹션 — 단순한 마크다운"
              krStyle={{ fontSize: '0.78em', marginTop: '0.3em', color: theme.colors.textMuted }}
            />
          </motion.p>

          {/* Code block — keep mono font, it's a code context */}
          <motion.div
            variants={slideUp}
            style={{
              border: `1px solid ${theme.colors.accentGlow}`,
              borderRadius: 10,
              padding: '20px 28px',
              background: theme.colors.bgElev,
            }}
          >
            <div
              style={{
                color: theme.colors.textMuted,
                fontSize: 'clamp(10px, 1vw, 12px)',
                fontFamily: theme.fonts.mono,
                marginBottom: 12,
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
                  fontSize: 'clamp(12px, 1.3vw, 16px)',
                  lineHeight: 1.8,
                  minHeight: line.text === '' ? 12 : undefined,
                  fontFamily: theme.fonts.mono,
                }}
              >
                {line.text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
