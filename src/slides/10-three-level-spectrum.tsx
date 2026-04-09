import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { SlideSectionLabel } from '../components/slide-section-label'
import { theme, gradients } from '../lib/theme'
import { fadeUp, staggerContainer } from '../lib/animations'

interface LevelCard {
  level: string
  title: string
  titleKr: string
  tools: string
  bullets: { icon: '✓' | '✗'; vi: string; kr: string }[]
  opacity: number
  border?: string
  boxShadow?: string
  bg?: string
}

const levels: LevelCard[] = [
  {
    level: 'L1',
    title: 'CHAT HỖ TRỢ',
    titleKr: '채팅 보조',
    tools: 'ChatGPT, Claude chat, Gemini',
    opacity: 0.6,
    bg: theme.colors.surface,
    bullets: [
      { icon: '✓', vi: 'Prototype nhanh', kr: '빠른 프로토타입' },
      { icon: '✗', vi: 'Không scale được', kr: '확장 불가' },
    ],
  },
  {
    level: 'L2',
    title: 'TÍCH HỢP IDE',
    titleKr: 'IDE 통합',
    tools: 'Cursor, Copilot, Continue',
    opacity: 0.8,
    bullets: [
      { icon: '✓', vi: 'Nhận biết ngữ cảnh', kr: '컨텍스트 인식' },
      { icon: '✗', vi: 'Chỉ là autocomplete thông minh', kr: '스마트 자동완성일 뿐' },
    ],
  },
  {
    level: 'L3',
    title: 'AGENT WORKFLOW',
    titleKr: '에이전틱 워크플로우',
    tools: 'Claude Code, Codex CLI, Antigravity',
    opacity: 1,
    border: `2px solid ${theme.colors.accent}`,
    boxShadow: `0 0 24px ${theme.colors.accentGlow}`,
    bullets: [
      { icon: '✓', vi: 'Nghiên cứu → Kế hoạch → Thực thi → Test', kr: '조사→계획→구현→테스트' },
      { icon: '✗', vi: 'Chi phí setup cao', kr: '초기 설정 비용 높음' },
    ],
  },
]

export default function Slide10ThreeLevelSpectrum() {
  return (
    <SlideLayout background={gradients.deep}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '52px 80px 40px',
        }}
      >
        <SlideSectionLabel label="PHỔ 3 MỨC" labelKr="스펙트럼" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 16, marginBottom: 8 }}
        >
          <BiText
            vi="Không phải Chat vs Workflow. Là một spectrum."
            kr="채팅 vs 워크플로우가 아닙니다. 스펙트럼입니다."
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 36,
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: theme.colors.text,
            }}
            krStyle={{ fontSize: '0.6em', marginTop: '0.3em' }}
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{ marginBottom: 24 }}
        >
          <BiText
            vi="Mỗi cấp độ có chỗ đứng riêng — bạn đang ở đâu?"
            kr="각 레벨마다 자리가 있습니다 — 당신은 어디에?"
            viStyle={{
              fontFamily: theme.fonts.body,
              fontSize: 15,
              color: theme.colors.textSecondary,
            }}
            krStyle={{ fontSize: '0.78em', marginTop: '0.2em' }}
          />
        </motion.div>

        {/* 3-column grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 18,
            flex: 1,
          }}
        >
          {levels.map((card, i) => (
            <motion.div
              key={card.level}
              variants={fadeUp}
              custom={i + 3}
              style={{
                background: card.bg ?? theme.colors.surfaceElev,
                border: card.border ?? `1px solid ${theme.colors.border}`,
                boxShadow: card.boxShadow,
                borderRadius: 12,
                padding: '24px 24px',
                opacity: card.opacity,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              {/* Level badge */}
              <span
                style={{
                  fontFamily: theme.fonts.mono,
                  fontSize: 12,
                  fontWeight: 700,
                  color: theme.colors.accent,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                {card.level}
              </span>

              {/* Title — bilingual */}
              <div>
                <div
                  style={{
                    fontFamily: theme.fonts.display,
                    fontSize: 18,
                    fontWeight: 800,
                    color: theme.colors.text,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.15,
                  }}
                >
                  {card.title}
                </div>
                <div
                  lang="ko"
                  style={{
                    fontFamily: theme.fonts.korean,
                    fontSize: 11,
                    fontWeight: 500,
                    color: theme.colors.textMuted,
                    marginTop: 3,
                  }}
                >
                  {card.titleKr}
                </div>
              </div>

              {/* Tools */}
              <div
                style={{
                  fontFamily: theme.fonts.mono,
                  fontSize: 12,
                  color: theme.colors.textMuted,
                  borderBottom: `1px solid ${theme.colors.border}`,
                  paddingBottom: 12,
                }}
              >
                {card.tools}
              </div>

              {/* Bullets */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {card.bullets.map((b, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <span
                      style={{
                        fontFamily: theme.fonts.mono,
                        fontSize: 13,
                        fontWeight: 700,
                        color: b.icon === '✓' ? theme.colors.green : theme.colors.red,
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      {b.icon}
                    </span>
                    <BiText
                      vi={b.vi}
                      kr={b.kr}
                      viStyle={{
                        fontFamily: theme.fonts.body,
                        fontSize: 13,
                        color: theme.colors.textSecondary,
                        lineHeight: 1.4,
                      }}
                      krStyle={{ fontSize: '0.78em', marginTop: '0.15em' }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={7}
          style={{ marginTop: 16 }}
        >
          <BiText
            vi="Tất cả đều hợp lệ. Câu hỏi: bạn có đang DÙNG sai level cho task sai?"
            kr="모두 유효합니다. 질문: 잘못된 레벨을 잘못된 작업에 사용하고 있지 않나요?"
            viStyle={{
              fontFamily: theme.fonts.body,
              fontSize: 13,
              color: theme.colors.textMuted,
              fontStyle: 'italic',
            }}
            krStyle={{ fontSize: '0.78em', marginTop: '0.15em' }}
          />
        </motion.div>
      </div>
    </SlideLayout>
  )
}
