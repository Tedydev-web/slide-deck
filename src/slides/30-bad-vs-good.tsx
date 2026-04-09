import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';
import { X, Check } from 'lucide-react';
import { theme, gradients } from '../lib/theme';

export default function Slide30BadVsGood() {
  return (
    <SlideLayout background={gradients.editorial}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '50px 80px' }}>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(70px, 9vw, 100px)', color: theme.colors.accentDim, lineHeight: 1, marginBottom: -8 }}
        >
          12
        </motion.div>

        <motion.h2
          variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
          style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(24px, 2.8vw, 36px)', color: theme.colors.text, lineHeight: 1.2, marginBottom: 4 }}
        >
          Same Question, <span style={{ color: theme.colors.accent }}>Different Context</span>
        </motion.h2>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.7}
          style={{ marginBottom: 12 }}
        >
          <span lang="ko" style={{ fontFamily: theme.fonts.korean, fontSize: 'clamp(13px, 1.3vw, 16px)', color: theme.colors.textMuted }}>나쁜 컨텍스트 vs 좋은 컨텍스트</span>
        </motion.div>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={0.8}
          style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(14px, 1.4vw, 18px)', color: theme.colors.textSecondary, marginBottom: 24 }}
        >
          "How do I fix this bug in my app?"
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* Bad context */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            style={{ border: `1px solid ${theme.colors.border}`, borderRadius: 12, background: theme.colors.surface }}
          >
            <div style={{ padding: '24px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                <X size={20} color={theme.colors.red} />
                <span style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(14px, 1.4vw, 18px)', color: theme.colors.red }}>Bad Context</span>
              </div>
              <div lang="ko" style={{ fontFamily: theme.fonts.korean, fontSize: 'clamp(10px, 0.9vw, 12px)', color: theme.colors.textMuted, marginBottom: 14 }}>나쁜 컨텍스트</div>
              <ul style={{ listStyle: 'none', fontFamily: theme.fonts.body, fontSize: 'clamp(12px, 1.2vw, 15px)', color: theme.colors.textSecondary, lineHeight: 2 }}>
                <li>No error message provided</li>
                <li>No code snippet</li>
                <li>No tech stack mentioned</li>
                <li>No expected behavior</li>
              </ul>
              <div style={{ marginTop: 16, borderTop: `1px solid ${theme.colors.border}` }}>
                <div style={{ padding: '14px 0 0 0' }}>
                  <span style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(11px, 1.1vw, 13px)', color: theme.colors.textMuted, fontStyle: 'italic' }}>
                    Result: Generic, unhelpful suggestions
                  </span>
                  <span lang="ko" style={{ display: 'block', fontFamily: theme.fonts.korean, fontSize: '0.85em', color: theme.colors.textMuted, marginTop: '0.2em' }}>결과: 일반적이고 도움 안 되는 제안</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Good context */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={1.5}
            style={{ background: `linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.accentHover} 100%)`, borderRadius: 12 }}
          >
            <div style={{ padding: '24px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                <Check size={20} color={theme.colors.text} />
                <span style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(14px, 1.4vw, 18px)', color: theme.colors.text }}>Great Context</span>
              </div>
              <div lang="ko" style={{ fontFamily: theme.fonts.korean, fontSize: 'clamp(10px, 0.9vw, 12px)', color: 'rgba(255,255,255,0.6)', marginBottom: 14 }}>좋은 컨텍스트</div>
              <ul style={{ listStyle: 'none', fontFamily: theme.fonts.body, fontSize: 'clamp(12px, 1.2vw, 15px)', color: 'rgba(255,255,255,0.9)', lineHeight: 2 }}>
                <li>Exact error + stack trace</li>
                <li>Relevant code snippet</li>
                <li>React 18 + TypeScript + Vite</li>
                <li>Expected vs actual behavior</li>
              </ul>
              <div style={{ marginTop: 16, borderTop: '1px solid rgba(255,255,255,0.3)' }}>
                <div style={{ padding: '14px 0 0 0' }}>
                  <span style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(11px, 1.1vw, 13px)', color: 'rgba(255,255,255,0.8)', fontStyle: 'italic' }}>
                    Result: Precise, actionable fix
                  </span>
                  <span lang="ko" style={{ display: 'block', fontFamily: theme.fonts.korean, fontSize: '0.85em', color: 'rgba(255,255,255,0.6)', marginTop: '0.2em' }}>결과: 정확하고 실행 가능한 수정</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
}
