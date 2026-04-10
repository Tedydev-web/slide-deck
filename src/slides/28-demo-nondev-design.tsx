import { motion } from 'framer-motion'
import { ArrowRight, Figma, Terminal, Sparkles, Zap } from 'lucide-react'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { SlideSectionLabel } from '../components/slide-section-label'
import { theme, gradients } from '../lib/theme'
import { fadeUp, staggerContainer } from '../lib/animations'

/*
 * Concrete demo — ClaudeKit stack extracting design tokens from Figma:
 *   Claude Code + figma-remote-mcp + design-system skill → tokens.ts
 *
 * Each step names the actual tool so dev audience can replicate.
 */
const workflowSteps = [
  {
    icon: Figma,
    title: 'Paste Figma URL',
    titleKr: '피그마 URL 붙여넣기',
    hint: 'figma.com/design/...',
  },
  {
    icon: Terminal,
    title: 'figma-remote-mcp',
    titleKr: 'Figma MCP 서버',
    hint: 'get_design_context()\nget_variable_defs()',
  },
  {
    icon: Sparkles,
    title: 'design-system skill',
    titleKr: 'ClaudeKit 스킬',
    hint: 'normalize → tokens',
  },
  {
    icon: Zap,
    title: 'Vite HMR',
    titleKr: '라이브 프리뷰',
    hint: 'tokens.ts\ntailwind.config.ts',
  },
]

export default function Slide28DemoNondevDesign() {
  return (
    <SlideLayout background={gradients.subtle}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '52px 80px 48px',
        }}
      >
        <SlideSectionLabel label="DEMO 2 · NON-DEV" labelKr="데모 2 · 비개발" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 14, marginBottom: 6 }}
        >
          <BiText
            vi="Trích Xuất Design Token"
            kr="디자인 토큰 추출"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 42,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: theme.colors.text,
            }}
            krStyle={{ fontSize: '0.52em', marginTop: '0.3em' }}
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{ marginBottom: 18 }}
        >
          <BiText
            vi="Claude Code + figma-remote-mcp + design-system skill → 15 phút"
            kr="Claude Code + Figma MCP + 디자인 시스템 스킬 → 15분"
            viStyle={{
              fontFamily: theme.fonts.body,
              fontSize: 15,
              color: theme.colors.textSecondary,
            }}
            krStyle={{ fontSize: '0.78em', marginTop: '0.2em' }}
          />
        </motion.div>

        {/* Live prompt example — concrete command, feels real */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          style={{
            background: theme.colors.bgDeep,
            border: `1px solid ${theme.colors.border}`,
            borderLeft: `3px solid ${theme.colors.accent}`,
            borderRadius: 8,
            padding: '12px 18px',
            marginBottom: 22,
            fontFamily: theme.fonts.mono,
            fontSize: 13,
            color: theme.colors.textSecondary,
            lineHeight: 1.55,
          }}
        >
          <span style={{ color: theme.colors.accent, marginRight: 8 }}>{'>'}</span>
          Claude, trích design tokens từ{' '}
          <span style={{ color: theme.colors.text }}>
            figma.com/design/ABC123?node-id=1-2
          </span>
          , xuất ra <span style={{ color: theme.colors.accent }}>tokens.ts</span> + tailwind config
        </motion.div>

        {/* Workflow steps — now with real tool names + icons */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            alignItems: 'stretch',
            gap: 0,
            marginBottom: 20,
          }}
        >
          {workflowSteps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={i}
                style={{ display: 'flex', alignItems: 'center', flex: 1 }}
              >
                <motion.div
                  variants={fadeUp}
                  custom={i + 4}
                  style={{
                    flex: 1,
                    background: theme.colors.surface,
                    border: `1px solid ${theme.colors.border}`,
                    borderRadius: 10,
                    padding: '14px 14px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                    minHeight: 108,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Icon size={18} color={theme.colors.accent} strokeWidth={2} />
                    <span
                      style={{
                        fontFamily: theme.fonts.mono,
                        fontSize: 10,
                        color: theme.colors.textMuted,
                        letterSpacing: '0.12em',
                      }}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  <div
                    style={{
                      fontFamily: theme.fonts.body,
                      fontSize: 13,
                      fontWeight: 700,
                      color: theme.colors.text,
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </div>

                  <div
                    lang="ko"
                    style={{
                      fontFamily: theme.fonts.korean,
                      fontSize: 10,
                      color: theme.colors.textMuted,
                      lineHeight: 1.3,
                    }}
                  >
                    {step.titleKr}
                  </div>

                  <div
                    style={{
                      fontFamily: theme.fonts.mono,
                      fontSize: 10,
                      color: theme.colors.accent,
                      lineHeight: 1.4,
                      marginTop: 'auto',
                      whiteSpace: 'pre-line',
                      opacity: 0.85,
                    }}
                  >
                    {step.hint}
                  </div>
                </motion.div>

                {i < workflowSteps.length - 1 && (
                  <div style={{ padding: '0 6px', flexShrink: 0 }}>
                    <ArrowRight size={14} color={theme.colors.textMuted} />
                  </div>
                )}
              </div>
            )
          })}
        </motion.div>

        {/* Before / After */}
        <div style={{ display: 'flex', gap: 20 }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={9}
            style={{
              flex: 1,
              background: theme.colors.redDim,
              border: `1px solid ${theme.colors.red}`,
              borderRadius: 10,
              padding: '16px 22px',
            }}
          >
            <div
              style={{
                fontFamily: theme.fonts.mono,
                fontSize: 11,
                fontWeight: 700,
                color: theme.colors.red,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}
            >
              BEFORE
            </div>
            <BiText
              vi="2–3 ngày designer document + dev implement"
              kr="2–3일 디자이너 문서화 + 개발자 구현"
              viStyle={{
                fontFamily: theme.fonts.body,
                fontSize: 14,
                fontWeight: 600,
                color: theme.colors.text,
                lineHeight: 1.45,
              }}
              krStyle={{ fontSize: '0.78em', marginTop: '0.25em' }}
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={10}
            style={{
              flex: 1,
              background: theme.colors.greenDim,
              border: `1px solid ${theme.colors.green}`,
              borderRadius: 10,
              padding: '16px 22px',
            }}
          >
            <div
              style={{
                fontFamily: theme.fonts.mono,
                fontSize: 11,
                fontWeight: 700,
                color: theme.colors.green,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}
            >
              AFTER
            </div>
            <BiText
              vi="15 phút · consistent · zero drift"
              kr="15분 · 일관성 · 드리프트 없음"
              viStyle={{
                fontFamily: theme.fonts.body,
                fontSize: 14,
                fontWeight: 600,
                color: theme.colors.text,
                lineHeight: 1.45,
              }}
              krStyle={{ fontSize: '0.78em', marginTop: '0.25em' }}
            />
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  )
}
