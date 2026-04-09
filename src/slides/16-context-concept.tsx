import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';
import { Layers } from 'lucide-react';
import { theme, gradients } from '../lib/theme';

export default function Slide16ContextConcept() {
  return (
    <SlideLayout background={gradients.editorial}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 80px' }}>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(80px, 10vw, 120px)', color: theme.colors.accentDim, lineHeight: 1, marginBottom: -10 }}
        >
          04
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}
        >
          <Layers size={24} color={theme.colors.accent} />
          <span style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(12px, 1.2vw, 16px)', color: theme.colors.accent, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2 }}>
            Core Concept
            <span lang="ko" style={{ display: 'inline-block', fontFamily: theme.fonts.korean, fontSize: '0.78em', color: theme.colors.textMuted, marginLeft: '0.6em' }}>핵심 개념</span>
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(30px, 3.5vw, 46px)', color: theme.colors.text, lineHeight: 1.15, marginBottom: 28 }}
        >
          Context Engineering
          <span lang="ko" style={{ display: 'block', fontFamily: theme.fonts.korean, fontSize: '0.62em', color: theme.colors.textMuted, marginTop: '0.25em', fontWeight: 400 }}>컨텍스트 엔지니어링</span>
        </motion.h2>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
          style={{
            background: `linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.accentHover} 100%)`,
            borderRadius: 12,
            maxWidth: 700,
          }}
        >
          <div style={{ padding: '32px 36px' }}>
            <p style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(18px, 2vw, 24px)', color: theme.colors.text, lineHeight: 1.6, fontWeight: 500 }}>
              The art and science of <strong>curating the right information</strong> that goes into a model's context window to get the best possible output.
            </p>
            <p lang="ko" style={{ fontFamily: theme.fonts.korean, fontSize: 'clamp(13px, 1.4vw, 17px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginTop: '0.75em', fontWeight: 400 }}>
              모델의 컨텍스트 윈도우에 들어갈 적절한 정보를 큐레이팅하여 최상의 결과를 얻는 기술과 과학.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{ marginTop: 28, maxWidth: 600 }}
        >
          <p style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(14px, 1.4vw, 18px)', color: theme.colors.textSecondary, lineHeight: 1.6 }}>
            It's not just about what you say — it's about <em>everything</em> the model can see when it generates a response.
          </p>
          <p lang="ko" style={{ fontFamily: theme.fonts.korean, fontSize: 'clamp(11px, 1.1vw, 14px)', color: theme.colors.textMuted, lineHeight: 1.6, marginTop: '0.35em' }}>
            단순히 무엇을 말하느냐가 아닙니다 — 응답 생성 시 모델이 볼 수 있는 모든 것에 관한 것입니다.
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
