import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { SlideSectionLabel } from '../components/slide-section-label'
import { BiText } from '../components/bi-text'
import { QuoteBlock } from '../components/quote-block'
import { theme, gradients } from '../lib/theme'
import { fadeUp } from '../lib/animations'
import { X, Check } from 'lucide-react'

export default function Slide38() {
  return (
    <SlideLayout background={gradients.subtle}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '60px 100px',
          gap: 0,
        }}
      >
        <SlideSectionLabel label="ÁP DỤNG · QA" labelKr="활용 · QA" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 20, marginBottom: 12 }}
        >
          <BiText
            vi="QA: PRD → ~50 Test Cases trong 2 phút"
            kr="QA: PRD → ~50개 테스트 케이스 2분 안에"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 38,
              fontWeight: 800,
              color: theme.colors.text,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
            krStyle={{ fontSize: '0.5em', marginTop: '0.35em' }}
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.5}
          style={{ marginBottom: 24 }}
        >
          <BiText
            vi="Ví dụ điển hình — AI tạo ứng viên, QA review + duyệt + ship. Con số minh hoạ, phụ thuộc framework & PRD chất lượng."
            kr="대표 예시 — AI가 후보 생성, QA가 검토 + 승인 + 배포. 수치는 예시, 프레임워크와 PRD 품질에 따라 다름."
            viStyle={{
              fontFamily: theme.fonts.body,
              fontSize: 13,
              color: theme.colors.textMuted,
              fontStyle: 'italic',
              lineHeight: 1.5,
            }}
            krStyle={{ fontSize: '0.82em', marginTop: '0.25em' }}
          />
        </motion.div>

        <div style={{ display: 'flex', gap: 28, marginBottom: 28 }}>
          {/* Manual */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            style={{
              flex: 1,
              background: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: 12,
              padding: '28px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <X size={18} color={theme.colors.red} />
              <span style={{ fontFamily: theme.fonts.mono, fontSize: 12, color: theme.colors.textMuted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
Thủ công
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { val: '5', label: 'test cases', labelKr: '테스트 케이스' },
                { val: '0', label: 'edge cases', labelKr: '엣지 케이스' },
                { val: '2h', label: 'thời gian', labelKr: '소요 시간' },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                  <span style={{ fontFamily: theme.fonts.display, fontSize: 36, fontWeight: 800, color: theme.colors.textMuted }}>
                    {s.val}
                  </span>
                  <BiText
                    vi={s.label}
                    kr={s.labelKr}
                    viStyle={{ fontFamily: theme.fonts.body, fontSize: 15, color: theme.colors.textMuted }}
                    krStyle={{ fontSize: '0.8em' }}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            style={{
              flex: 1,
              background: theme.colors.accentDim,
              border: `1px solid ${theme.colors.accent}`,
              borderRadius: 12,
              padding: '28px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Check size={18} color={theme.colors.accent} />
              <span style={{ fontFamily: theme.fonts.mono, fontSize: 12, color: theme.colors.accent, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
AI hỗ trợ
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { val: '47', label: 'test cases', labelKr: '테스트 케이스', color: theme.colors.accent },
                { val: '12', label: 'edge cases', labelKr: '엣지 케이스', color: theme.colors.accent },
                { val: '2 phút', label: 'thời gian', labelKr: '소요 시간', color: theme.colors.green },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                  <span style={{ fontFamily: theme.fonts.display, fontSize: 36, fontWeight: 800, color: s.color }}>
                    {s.val}
                  </span>
                  <BiText
                    vi={s.label}
                    kr={s.labelKr}
                    viStyle={{ fontFamily: theme.fonts.body, fontSize: 15, color: theme.colors.textSecondary }}
                    krStyle={{ fontSize: '0.8em' }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <QuoteBlock
          quote="Same time. Same AI. Different results. The diff is the human."
          quoteKr="같은 시간. 같은 AI. 다른 결과. 차이는 사람."
          source="brainstorm 2026"
          size="small"
          delay={4}
        />
      </div>
    </SlideLayout>
  )
}
