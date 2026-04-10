import { useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, slideUp, terminalLine } from '../lib/animations'
import { ArrowRight, Play } from 'lucide-react'
import SlideLayout, { DotPattern } from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'

const steps = [
  { vi: 'Kích hoạt', kr: '활성화', desc: { vi: 'Tin nhắn khớp từ khóa', kr: '키워드 매칭' } },
  { vi: 'Đọc', kr: '읽기', desc: { vi: 'Claude đọc SKILL.md', kr: 'SKILL.md 읽기' } },
  { vi: 'Thực thi', kr: '실행', desc: { vi: 'Làm theo hướng dẫn', kr: '지침에 따라 실행' } },
  { vi: 'Kết quả', kr: '결과', desc: { vi: 'Output nhất quán', kr: '일관된 출력' } },
]

export default function Slide24SkillHowWorks() {
  // Replay state — increments on "Chạy" button click to force re-mount
  // of the stagger animation, letting presenter re-trigger the 4-step flow
  // during live demo without navigating away from the slide.
  const [replayKey, setReplayKey] = useState(0)
  const handleReplay = () => setReplayKey((k) => k + 1)

  return (
    <SlideLayout background={gradients.subtle}>
      <DotPattern rows={4} cols={6} bottom={40} right={60} opacity={0.1} />

      <div
        className="w-full h-full flex flex-col justify-center"
        style={{ padding: '60px 80px' }}
      >
        <motion.div key={replayKey} variants={staggerContainer} initial="hidden" animate="visible">
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
            {'>'}_&nbsp;skill-flow.sh
          </motion.div>

          <motion.h2
            variants={slideUp}
            style={{
              fontSize: 'clamp(26px, 3.2vw, 40px)',
              color: theme.colors.text,
              fontWeight: 800,
              fontFamily: theme.fonts.display,
              letterSpacing: '-0.02em',
              marginBottom: 48,
            }}
          >
            <BiText
              vi="Cách Skill hoạt động"
              kr="스킬의 작동 방식"
              krStyle={{ fontSize: '0.55em', marginTop: '0.35em', color: theme.colors.textMuted }}
            />
          </motion.h2>

          <motion.div variants={staggerContainer} className="flex items-start justify-between">
            {steps.map((step, i) => (
              <motion.div key={i} variants={terminalLine} className="flex items-center gap-4">
                <div className="flex flex-col items-center text-center" style={{ width: 190 }}>
                  {/* Step number badge */}
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 56,
                      height: 56,
                      border: `1px solid ${theme.colors.accentGlow}`,
                      borderRadius: 10,
                      background: theme.colors.accentDim,
                      color: theme.colors.accent,
                      fontSize: 'clamp(18px, 2vw, 24px)',
                      fontWeight: 800,
                      fontFamily: theme.fonts.mono,
                      marginBottom: 14,
                    }}
                  >
                    {i + 1}
                  </div>

                  {/* Step label bilingual */}
                  <BiText
                    vi={step.vi}
                    kr={step.kr}
                    viStyle={{
                      color: theme.colors.text,
                      fontSize: 'clamp(13px, 1.4vw, 17px)',
                      fontWeight: 700,
                      fontFamily: theme.fonts.display,
                      marginBottom: 6,
                    }}
                    krStyle={{ fontSize: '0.78em', color: theme.colors.textMuted, marginTop: '0.2em' }}
                  />

                  {/* Step desc bilingual */}
                  <BiText
                    vi={step.desc.vi}
                    kr={step.desc.kr}
                    viStyle={{
                      color: theme.colors.textSecondary,
                      fontSize: 'clamp(11px, 1.1vw, 14px)',
                      fontFamily: theme.fonts.body,
                      marginTop: 4,
                    }}
                    krStyle={{ fontSize: '0.78em', color: theme.colors.textMuted, marginTop: '0.2em' }}
                  />
                </div>

                {i < steps.length - 1 && (
                  <ArrowRight
                    style={{ color: theme.colors.accent, opacity: 0.5, flexShrink: 0 }}
                    size={20}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Replay button — OUTSIDE the keyed container so it stays visible */}
        {/* during replay. Click triggers a fresh re-mount of the animated    */}
        {/* block above via replayKey, without the button itself flickering.  */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5, ease: 'easeOut' }}
          style={{
            marginTop: 48,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <button
            type="button"
            onClick={handleReplay}
            aria-label="Chạy lại animation"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              padding: '14px 28px',
              background: 'transparent',
              border: `1.5px solid ${theme.colors.accent}`,
              borderRadius: 10,
              color: theme.colors.accent,
              cursor: 'pointer',
              fontFamily: theme.fonts.mono,
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: '0.04em',
              transition: 'background 180ms ease, transform 120ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = theme.colors.accentDim
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'scale(0.97)'
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            <span>Chạy</span>
            <span
              lang="ko"
              style={{
                fontFamily: theme.fonts.korean,
                fontSize: '0.78em',
                opacity: 0.8,
              }}
            >
              실행
            </span>
            <Play size={16} fill={theme.colors.accent} strokeWidth={0} />
          </button>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
