import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { SlideSectionLabel } from '../components/slide-section-label'
import { theme, gradients } from '../lib/theme'
import { fadeUp, staggerContainer, terminalLine } from '../lib/animations'

const steps = [
  { code: 'R', label: 'Research', vi: 'Đọc error log, trace code path', kr: '에러 로그 읽기' },
  { code: 'P', label: 'Plan', vi: 'Xác định root cause + fix strategy', kr: '근본 원인 + 수정 전략' },
  { code: 'I', label: 'Implement', vi: 'Fix + test + verify', kr: '수정 + 테스트 + 검증' },
]

const terminalLines = [
  { prefix: '$', text: 'claude fix "NullPointerException in auth.ts:45"', accent: false },
  { prefix: '→', text: 'Reading auth.ts...', accent: false },
  { prefix: '→', text: 'Tracing call chain...', accent: false },
  { prefix: '→', text: 'Root cause: missing null check', accent: false },
  { prefix: '→', text: 'Applied fix', accent: true },
  { prefix: '→', text: 'Tests pass (12/12) ✓', accent: true },
]

export default function Slide27DemoDevBugFix() {
  return (
    <SlideLayout background={gradients.deep}>
      {/* LIVE badge */}
      <div
        style={{
          position: 'absolute',
          top: 36,
          right: 48,
          background: theme.colors.accent,
          color: theme.colors.text,
          fontFamily: theme.fonts.mono,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.16em',
          padding: '5px 12px',
          borderRadius: 4,
          textTransform: 'uppercase',
        }}
      >
        LIVE
      </div>

      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '52px 80px 48px',
        }}
      >
        <SlideSectionLabel label="DEMO 1 · DEV" labelKr="데모 1 · 개발" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 14, marginBottom: 6 }}
        >
          <BiText
            vi="Sửa Bug Lúc Nửa Đêm"
            kr="심야 버그 수정"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 44,
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
          style={{ marginBottom: 28 }}
        >
          <BiText
            vi="Bug report → Root cause → Fix → Test — 15 phút"
            kr="버그 리포트 → 근본 원인 → 수정 → 테스트 — 15분"
            viStyle={{
              fontFamily: theme.fonts.body,
              fontSize: 15,
              color: theme.colors.textSecondary,
            }}
            krStyle={{ fontSize: '0.78em', marginTop: '0.2em' }}
          />
        </motion.div>

        {/* 3-step flow */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', gap: 16, marginBottom: 24 }}
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.code}
              variants={fadeUp}
              custom={i + 3}
              style={{
                flex: 1,
                background: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: 10,
                padding: '18px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span
                  style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: 20,
                    fontWeight: 900,
                    color: theme.colors.accent,
                  }}
                >
                  {s.code}
                </span>
                <span
                  style={{
                    fontFamily: theme.fonts.display,
                    fontSize: 14,
                    fontWeight: 700,
                    color: theme.colors.text,
                    letterSpacing: '0.04em',
                  }}
                >
                  {s.label}
                </span>
              </div>
              <BiText
                vi={s.vi}
                kr={s.kr}
                viStyle={{
                  fontFamily: theme.fonts.body,
                  fontSize: 13,
                  color: theme.colors.textSecondary,
                  lineHeight: 1.45,
                }}
                krStyle={{ fontSize: '0.78em', marginTop: '0.15em' }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row: terminal + clock */}
        <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
          {/* Terminal */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={7}
            style={{
              flex: 1,
              background: theme.colors.bgDeep,
              border: `1px solid ${theme.colors.borderStrong}`,
              borderRadius: 10,
              padding: '18px 22px',
              fontFamily: theme.fonts.mono,
              fontSize: 13,
              lineHeight: 1.7,
            }}
          >
            {terminalLines.map((l, i) => (
              <motion.div
                key={i}
                variants={terminalLine}
                initial="hidden"
                animate="visible"
                style={{ display: 'flex', gap: 8 }}
              >
                <span style={{ color: theme.colors.textMuted, flexShrink: 0 }}>{l.prefix}</span>
                <span style={{ color: l.accent ? theme.colors.accent : theme.colors.textSecondary }}>
                  {l.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Clock */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={8}
            style={{
              width: 140,
              background: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: 10,
              padding: '18px 16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <Clock size={28} color={theme.colors.accent} />
            <div
              style={{
                fontFamily: theme.fonts.display,
                fontSize: 32,
                fontWeight: 900,
                color: theme.colors.accent,
                lineHeight: 1,
              }}
            >
              15
            </div>
            <div
              style={{
                fontFamily: theme.fonts.mono,
                fontSize: 11,
                color: theme.colors.textMuted,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              min
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  )
}
