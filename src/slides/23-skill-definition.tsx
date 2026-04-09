import { motion } from 'framer-motion'
import { staggerContainer, slideUp, terminalLine } from '../lib/animations'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'

export default function Slide23SkillDefinition() {
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
            {'>'}_&nbsp;cat SKILL.md
          </motion.div>

          <motion.h2
            variants={slideUp}
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              color: theme.colors.text,
              fontWeight: 800,
              fontFamily: theme.fonts.display,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: 32,
            }}
          >
            <BiText
              vi="Skill là gì?"
              kr="스킬이란?"
              krStyle={{ fontSize: '0.55em', marginTop: '0.4em', color: theme.colors.textMuted }}
            />
          </motion.h2>

          <motion.div
            variants={slideUp}
            style={{
              fontSize: 'clamp(16px, 2vw, 24px)',
              color: theme.colors.textSecondary,
              fontFamily: theme.fonts.body,
              lineHeight: 1.6,
              marginBottom: 40,
            }}
          >
            <BiText
              vi={
                <>
                  Một file markdown{' '}
                  <span style={{ color: theme.colors.accent, fontFamily: theme.fonts.mono }}>
                    SKILL.md
                  </span>{' '}
                  cung cấp cho Claude Code kiến thức chuyên biệt cho một task cụ thể
                </>
              }
              kr="SKILL.md 마크다운 파일이 클로드 코드에게 특정 작업에 대한 전문 지식을 제공합니다"
              krStyle={{ fontSize: '0.72em', marginTop: '0.4em', color: theme.colors.textMuted }}
            />
          </motion.div>

          <motion.div
            variants={slideUp}
            style={{
              border: `1px solid ${theme.colors.accentGlow}`,
              borderRadius: 12,
              padding: '24px 32px',
              background: theme.colors.accentDim,
            }}
          >
            <div
              style={{
                color: theme.colors.textMuted,
                fontSize: 'clamp(11px, 1.1vw, 13px)',
                fontFamily: theme.fonts.mono,
                marginBottom: 12,
              }}
            >
              // Về cơ bản:
            </div>
            <BiText
              vi="Skill = Prompt có cấu trúc + Tái sử dụng được"
              kr="스킬 = 구조화된 프롬프트 + 재사용 가능"
              viStyle={{
                color: theme.colors.accent,
                fontSize: 'clamp(14px, 1.6vw, 20px)',
                fontFamily: theme.fonts.mono,
                fontWeight: 700,
              }}
              krStyle={{ fontSize: '0.78em', marginTop: '0.4em', color: theme.colors.textMuted }}
            />
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
