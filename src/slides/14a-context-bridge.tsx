import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { SlideSectionLabel } from '../components/slide-section-label'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'
import { fadeUp, staggerContainer } from '../lib/animations'
import { Code2, Megaphone, Users, Palette } from 'lucide-react'

/**
 * Slide 14a — Non-dev bridge slide (post-audit insert).
 *
 * Addresses C-10 finding: non-dev walk-out zone before Ch3 Context Engineering.
 * Placed between slide 14 (junior learning) and slide 15 (jellyfish PR data)
 * to make Ch3 feel relevant to Marketing/Design/HR/QA personas before diving
 * into technical concepts (context window, RAG, few-shot).
 *
 * Message: "Context engineering principles apply to every role, not just devs."
 */

const ROLES = [
  {
    Icon: Code2,
    role: 'Dev',
    roleKr: '개발',
    ctx: 'CLAUDE.md · skills · codebase',
    ctxKr: 'CLAUDE.md · 스킬 · 코드베이스',
  },
  {
    Icon: Megaphone,
    role: 'Marketing',
    roleKr: '마케팅',
    ctx: 'Brand guide · personas · tone',
    ctxKr: '브랜드 가이드 · 페르소나 · 톤',
  },
  {
    Icon: Users,
    role: 'HR',
    roleKr: '인사',
    ctx: 'Job specs · culture docs · policies',
    ctxKr: '직무 명세 · 문화 문서 · 정책',
  },
  {
    Icon: Palette,
    role: 'Design',
    roleKr: '디자인',
    ctx: 'Design system · tokens · references',
    ctxKr: '디자인 시스템 · 토큰 · 레퍼런스',
  },
]

export default function Slide14aContextBridge() {
  return (
    <SlideLayout background={gradients.warm}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '56px 100px',
          gap: 0,
        }}
      >
        <SlideSectionLabel label="CẦU NỐI · CHO TẤT CẢ" labelKr="모두를 위한 다리" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 18, marginBottom: 10 }}
        >
          <BiText
            vi="Context không chỉ dành cho dev"
            kr="컨텍스트는 개발자만의 것이 아님"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 44,
              fontWeight: 800,
              color: theme.colors.text,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
            krStyle={{ fontSize: '0.5em', marginTop: '0.3em' }}
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.5}
          style={{ marginBottom: 28 }}
        >
          <BiText
            vi="Ch3 sắp nói về 'context engineering' nghe có vẻ kỹ thuật — nhưng nguyên lý áp dụng cho mọi vai trò."
            kr="다음 장은 '컨텍스트 엔지니어링' — 기술적으로 들리지만, 원리는 모든 역할에 적용됨."
            viStyle={{
              fontFamily: theme.fonts.body,
              fontSize: 16,
              color: theme.colors.textSecondary,
              lineHeight: 1.5,
              maxWidth: 880,
            }}
            krStyle={{ fontSize: '0.85em', marginTop: '0.25em' }}
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
            flex: 1,
          }}
        >
          {ROLES.map((r, i) => (
            <motion.div
              key={r.role}
              variants={fadeUp}
              custom={i + 2}
              style={{
                background: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: 12,
                padding: '22px 26px',
                display: 'flex',
                alignItems: 'center',
                gap: 20,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 10,
                  background: theme.colors.accentDim,
                  border: `1px solid ${theme.colors.accent}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <r.Icon size={24} color={theme.colors.accent} />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <BiText
                  vi={r.role}
                  kr={r.roleKr}
                  viStyle={{
                    fontFamily: theme.fonts.display,
                    fontSize: 20,
                    fontWeight: 800,
                    color: theme.colors.text,
                    lineHeight: 1.1,
                    letterSpacing: '-0.01em',
                  }}
                  krStyle={{ fontSize: '0.65em', marginTop: '0.2em' }}
                />
                <BiText
                  vi={r.ctx}
                  kr={r.ctxKr}
                  viStyle={{
                    fontFamily: theme.fonts.mono,
                    fontSize: 12,
                    color: theme.colors.textMuted,
                    lineHeight: 1.4,
                    marginTop: 6,
                    letterSpacing: '0.02em',
                  }}
                  krStyle={{ fontSize: '0.9em', marginTop: '0.2em' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={7}
          style={{ marginTop: 24 }}
        >
          <BiText
            vi="Cùng nguyên lý. Khác công cụ. AI + con người đều làm tốt hơn khi có context rõ ràng."
            kr="같은 원리. 다른 도구. 명확한 컨텍스트가 있을 때 AI와 사람 모두 더 잘 작동함."
            viStyle={{
              fontFamily: theme.fonts.body,
              fontSize: 14,
              color: theme.colors.textSecondary,
              fontStyle: 'italic',
              lineHeight: 1.5,
            }}
            krStyle={{ fontSize: '0.85em', marginTop: '0.25em' }}
          />
        </motion.div>
      </div>
    </SlideLayout>
  )
}
