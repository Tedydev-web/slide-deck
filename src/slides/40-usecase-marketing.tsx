import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { SlideSectionLabel } from '../components/slide-section-label'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'
import { fadeUp } from '../lib/animations'
import { ArrowRight } from 'lucide-react'

const STEPS = [
  { cmd: '/video:script:create', desc: '30-sec launch\nVN professionals' },
  { cmd: '/video:storyboard:create', desc: 'frame-by-frame' },
  { cmd: 'AI → Veo 3.1\nprompts', desc: 'generate prompts' },
  { cmd: '/video:create', desc: 'assemble draft' },
]

export default function Slide40() {
  return (
    <SlideLayout background={gradients.subtle}>
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
        <SlideSectionLabel label="ÁP DỤNG · MARKETING" labelKr="활용 · 마케팅" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 18, marginBottom: 6 }}
        >
          <BiText
            vi="Marketing: Script → Storyboard → Video Draft"
            kr="마케팅: 스크립트 → 스토리보드 → 영상 초안"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 36,
              fontWeight: 800,
              color: theme.colors.text,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
            krStyle={{ fontSize: '0.5em', marginTop: '0.3em' }}
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
            vi="Ý tưởng → video draft trong 1 session (~4h)"
            kr="아이디어 → 영상 초안까지 1세션 (~4시간)"
            viStyle={{ fontFamily: theme.fonts.body, fontSize: 16, color: theme.colors.textSecondary }}
            krStyle={{ fontSize: '0.8em', marginTop: '0.2em' }}
          />
        </motion.div>

        {/* Pipeline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          style={{
            display: 'flex',
            alignItems: 'stretch',
            gap: 0,
            marginBottom: 24,
            background: theme.colors.surface,
            borderRadius: 10,
            padding: '14px 16px',
            border: `1px solid ${theme.colors.border}`,
          }}
        >
          {STEPS.map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <div
                style={{
                  flex: 1,
                  background: i % 2 === 0 ? theme.colors.accentDim : theme.colors.surfaceElev,
                  border: `1px solid ${i % 2 === 0 ? theme.colors.accent : theme.colors.border}`,
                  borderRadius: 8,
                  padding: '10px 10px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                }}
              >
                <span
                  style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: 11,
                    color: i % 2 === 0 ? theme.colors.accent : theme.colors.text,
                    fontWeight: 700,
                    whiteSpace: 'pre-line',
                    lineHeight: 1.3,
                  }}
                >
                  {step.cmd}
                </span>
                <span
                  style={{
                    fontFamily: theme.fonts.body,
                    fontSize: 11,
                    color: theme.colors.textMuted,
                    whiteSpace: 'pre-line',
                    lineHeight: 1.3,
                  }}
                >
                  {step.desc}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <ArrowRight size={14} color={theme.colors.textMuted} style={{ flexShrink: 0, margin: '0 6px' }} />
              )}
            </div>
          ))}
        </motion.div>

        {/* Comparison */}
        <div style={{ display: 'flex', gap: 20, marginBottom: 20, flex: 1 }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            style={{
              flex: 1,
              background: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: 10,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            <div style={{ fontFamily: theme.fonts.mono, fontSize: 11, color: theme.colors.textMuted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Traditional</div>
            <div style={{ fontFamily: theme.fonts.display, fontSize: 40, fontWeight: 800, color: theme.colors.textMuted, lineHeight: 1 }}>1-2 tuần</div>
            <div lang="ko" style={{ fontFamily: theme.fonts.korean, fontSize: 13, color: theme.colors.textMuted }}>1-2주</div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            style={{
              flex: 1,
              background: theme.colors.accentDim,
              border: `1px solid ${theme.colors.accent}`,
              borderRadius: 10,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            <div style={{ fontFamily: theme.fonts.mono, fontSize: 11, color: theme.colors.accent, letterSpacing: '0.1em', textTransform: 'uppercase' }}>AI Workflow</div>
            <div style={{ fontFamily: theme.fonts.display, fontSize: 38, fontWeight: 800, color: theme.colors.accent, lineHeight: 1 }}>~4h draft</div>
            <div lang="ko" style={{ fontFamily: theme.fonts.korean, fontSize: 13, color: theme.colors.textMuted }}>~4시간 초안</div>
          </motion.div>

          {/* Caveat */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={6}
            style={{
              flex: 1.4,
              background: theme.colors.surface,
              border: `1px solid ${theme.colors.borderStrong}`,
              borderRadius: 10,
              padding: '16px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
            }}
          >
            <div style={{ fontFamily: theme.fonts.mono, fontSize: 10, color: theme.colors.textMuted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>⚠ Caveat</div>
            <BiText
              vi="Draft, không phải final. Marketing team vẫn review, duyệt, lặp lại — creative ownership thuộc về người."
              kr="초안, 최종본 아님. 마케팅팀이 검토·승인·반복 — 크리에이티브 결정권은 사람."
              viStyle={{ fontFamily: theme.fonts.body, fontSize: 14, color: theme.colors.textSecondary, lineHeight: 1.5 }}
              krStyle={{ fontSize: '0.85em', marginTop: '0.3em' }}
            />
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  )
}
