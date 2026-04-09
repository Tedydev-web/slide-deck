import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';
import { Copy } from 'lucide-react';
import { theme, gradients } from '../lib/theme';

export default function Slide20FewShot() {
  const examples = [
    { input: '"Bộ phim hay tuyệt"', output: 'Tích cực', outputKr: '긍정' },
    { input: '"Trải nghiệm tệ hại"', output: 'Tiêu cực', outputKr: '부정' },
    { input: '"Cũng tạm ổn thôi"', output: 'Trung lập', outputKr: '중립' },
  ];

  return (
    <SlideLayout background={gradients.editorial}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '50px 80px' }}>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(70px, 9vw, 100px)', color: theme.colors.accentDim, lineHeight: 1, marginBottom: -8 }}
        >
          08
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.3}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}
        >
          <Copy size={20} color={theme.colors.accent} />
          <span style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(12px, 1.2vw, 16px)', color: theme.colors.accent, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2 }}>
Đi sâu
            <span lang="ko" style={{ display: 'inline-block', fontFamily: theme.fonts.korean, fontSize: '0.78em', color: theme.colors.textMuted, marginLeft: '0.6em', textTransform: 'none' }}>심층 분석</span>
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp} initial="hidden" animate="visible" custom={0.6}
          style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(26px, 3vw, 38px)', color: theme.colors.text, lineHeight: 1.2, marginBottom: 4 }}
        >
Học qua ví dụ (Few-Shot)
        </motion.h2>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.8}
          style={{ marginBottom: 12 }}
        >
          <span lang="ko" style={{ fontFamily: theme.fonts.korean, fontSize: 'clamp(14px, 1.4vw, 18px)', color: theme.colors.textMuted }}>퓨샷 예제</span>
        </motion.div>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(14px, 1.4vw, 18px)', color: theme.colors.textSecondary, marginBottom: 32, maxWidth: 600 }}
        >
Hãy SHOW cho model bằng ví dụ — đừng chỉ TELL bằng lời.
          <span lang="ko" style={{ display: 'block', fontFamily: theme.fonts.korean, fontSize: '0.78em', color: theme.colors.textMuted, marginTop: '0.35em' }}>
            말로만 하지 말고 시연으로 원하는 것을 모델에게 보여주세요.
          </span>
        </motion.p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 700 }}>
          {examples.map((ex, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" animate="visible" custom={1.5 + i * 0.2}
              style={{ display: 'flex', alignItems: 'center', gap: 16, border: `1px solid ${theme.colors.border}`, borderRadius: 10, background: theme.colors.surface }}
            >
              <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 16, flex: 1 }}>
<span style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(12px, 1.2vw, 15px)', color: theme.colors.textSecondary, fontWeight: 500, minWidth: 50 }}>Đầu vào:</span>
                <span style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(14px, 1.4vw, 18px)', color: theme.colors.text, flex: 1 }}>{ex.input}</span>
                <span style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(12px, 1.2vw, 15px)', color: theme.colors.textSecondary, fontWeight: 500 }}>→</span>
                <span style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(13px, 1.3vw, 16px)', color: theme.colors.accent, fontWeight: 600 }}>
                  {ex.output}
                  <span lang="ko" style={{ display: 'block', fontFamily: theme.fonts.korean, fontSize: '0.78em', color: theme.colors.textMuted, fontWeight: 400 }}>{ex.outputKr}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: theme.colors.accent }} />
          <span style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(13px, 1.3vw, 16px)', color: theme.colors.textSecondary }}>
Model học được <strong style={{ color: theme.colors.text }}>pattern</strong> và <strong style={{ color: theme.colors.text }}>định dạng</strong> từ các ví dụ của bạn.
            <span lang="ko" style={{ display: 'block', fontFamily: theme.fonts.korean, fontSize: '0.78em', color: theme.colors.textMuted, marginTop: '0.2em' }}>
              모델은 예제로부터 패턴과 형식을 학습합니다.
            </span>
          </span>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
