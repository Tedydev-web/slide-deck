import { motion } from 'framer-motion';
import { fadeUp, scaleIn } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';
import { Box } from 'lucide-react';
import { theme, gradients } from '../lib/theme';

export default function Slide17ContextWindow() {
  const segments = [
    { label: 'System Prompt', labelKr: '시스템 프롬프트', pct: 10, color: theme.colors.accent },
    { label: 'Tin nhắn user', labelKr: '사용자 메시지', pct: 8, color: '#FF7043' },
    { label: 'Ví dụ', labelKr: '예시', pct: 12, color: '#FF8A65' },
    { label: 'Tài liệu đã fetch', labelKr: '검색 문서', pct: 30, color: '#FFAB91' },
    { label: 'Lịch sử chat', labelKr: '대화', pct: 25, color: '#FFCCBC' },
    { label: 'Kết quả tool', labelKr: '도구 결과', pct: 10, color: '#FBE9E7' },
    { label: 'Còn trống', labelKr: '여유 공간', pct: 5, color: '#2f2f2f' },
  ];

  return (
    <SlideLayout background={gradients.subtle}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '50px 80px' }}>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(80px, 10vw, 120px)', color: theme.colors.accentDim, lineHeight: 1, marginBottom: -10 }}
        >
          05
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}
        >
          <Box size={22} color={theme.colors.accent} />
          <span style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(12px, 1.2vw, 16px)', color: theme.colors.accent, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2 }}>
Trực quan hóa
            <span lang="ko" style={{ display: 'inline-block', fontFamily: theme.fonts.korean, fontSize: '0.78em', color: theme.colors.textMuted, marginLeft: '0.6em' }}>시각화</span>
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(26px, 3vw, 38px)', color: theme.colors.text, lineHeight: 1.2, marginBottom: 8 }}
        >
Cửa sổ Context
          <span lang="ko" style={{ display: 'block', fontFamily: theme.fonts.korean, fontSize: '0.62em', color: theme.colors.textMuted, marginTop: '0.2em', fontWeight: 400 }}>컨텍스트 윈도우</span>
        </motion.h2>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={1.5}
          style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(14px, 1.4vw, 18px)', color: theme.colors.textSecondary, marginBottom: 28 }}
        >
Một "container" có kích thước cố định, chứa tất cả thứ model có thể "nhìn thấy"
          <span lang="ko" style={{ display: 'block', fontFamily: theme.fonts.korean, fontSize: '0.78em', color: theme.colors.textMuted, marginTop: '0.2em' }}>모델이 "볼 수 있는" 모든 것을 담는 고정 크기 컨테이너</span>
        </motion.p>

        {/* Stacked bar */}
        <motion.div
          variants={scaleIn} initial="hidden" animate="visible" custom={2}
          style={{ display: 'flex', borderRadius: 8, overflow: 'hidden', height: 52, marginBottom: 24, border: `1px solid ${theme.colors.border}` }}
        >
          {segments.map((s, i) => (
            <div key={i} style={{ width: `${s.pct}%`, background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {s.pct >= 10 && (
                <span style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(9px, 0.8vw, 12px)', color: s.color === '#2f2f2f' ? '#666' : theme.colors.bg, fontWeight: 600, whiteSpace: 'nowrap' }}>
                  {s.pct}%
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Legend */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {segments.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" animate="visible" custom={2.5 + i * 0.1}
              style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <div style={{ width: 12, height: 12, borderRadius: 3, background: s.color }} />
              <span style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(11px, 1.1vw, 14px)', color: s.color === '#2f2f2f' ? '#666' : '#ccc' }}>
                {s.label}
                <span lang="ko" style={{ fontFamily: theme.fonts.korean, fontSize: '0.8em', color: theme.colors.textMuted, marginLeft: '0.4em' }}>{s.labelKr}</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
