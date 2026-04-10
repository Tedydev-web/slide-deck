import { motion } from 'framer-motion';
import { fadeUp, scaleIn } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { theme, gradients } from '../lib/theme';

const data = [
  { name: 'Model yếu\nContext tốt', value: 75 },
  { name: 'Model mạnh\nKhông context', value: 40 },
  { name: 'Model mạnh\nContext tốt', value: 95 },
];

export default function Slide19QualityEquation() {
  return (
    <SlideLayout background={gradients.subtle}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '50px 80px' }}>
        {/* Corner page-number watermark now comes from SlideLayout globally */}
        <motion.h2
          variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
          style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(24px, 2.8vw, 36px)', color: theme.colors.text, lineHeight: 1.2, marginBottom: 4 }}
        >
Công thức chất lượng
        </motion.h2>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.7}
          style={{ marginBottom: 20 }}
        >
          <span lang="ko" style={{ fontFamily: theme.fonts.korean, fontSize: 'clamp(13px, 1.3vw, 16px)', color: theme.colors.textMuted }}>품질 방정식</span>
        </motion.div>

        <motion.div
          variants={scaleIn} initial="hidden" animate="visible" custom={1}
          style={{
            background: `linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.accentHover} 100%)`,
            borderRadius: 12,
            width: '100%',
            maxWidth: 960,
            alignSelf: 'center',
            marginBottom: 32,
            textAlign: 'center',
            boxShadow: `0 0 48px ${theme.colors.accent}33`,
          }}
        >
          <div style={{ padding: '24px 36px' }}>
            <span style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(20px, 2.2vw, 30px)', color: theme.colors.text, fontWeight: 700 }}>
              Chất lượng output = f(Năng lực model × Chất lượng context)
            </span>
            <span lang="ko" style={{ display: 'block', fontFamily: theme.fonts.korean, fontSize: 'clamp(12px, 1.2vw, 15px)', color: 'rgba(255,255,255,0.75)', marginTop: '0.5em' }}>
              출력 품질 = f(모델 역량 × 컨텍스트 품질)
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={1.5}
          style={{ width: '100%', maxWidth: 960, alignSelf: 'center', height: 260 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barCategoryGap="22%" margin={{ top: 16, right: 24, left: 8, bottom: 8 }}>
              <XAxis
                dataKey="name"
                tick={{ fill: theme.colors.textSecondary, fontSize: 13, fontFamily: theme.fonts.body }}
                axisLine={{ stroke: theme.colors.border }}
                tickLine={false}
                interval={0}
              />
              <YAxis
                tick={{ fill: '#666', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
                width={36}
              />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                <Cell fill="#FF8A65" />
                <Cell fill="#666" />
                <Cell fill={theme.colors.accent} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={2.5}
          style={{
            fontFamily: theme.fonts.body,
            fontSize: 'clamp(14px, 1.4vw, 17px)',
            color: theme.colors.textSecondary,
            marginTop: 14,
            textAlign: 'center',
            alignSelf: 'center',
            width: '100%',
            maxWidth: 960,
          }}
        >
Chất lượng context thường <strong style={{ color: theme.colors.text }}>quan trọng hơn</strong> việc chọn model.
          <span lang="ko" style={{ display: 'block', fontFamily: theme.fonts.korean, fontSize: '0.78em', color: theme.colors.textMuted, marginTop: '0.35em' }}>
            컨텍스트 품질이 모델 선택보다 더 중요한 경우가 많습니다.
          </span>
        </motion.p>
      </div>
    </SlideLayout>
  );
}
