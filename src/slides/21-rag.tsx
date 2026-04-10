import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';
import { Search, FileText, Cpu, ArrowRight } from 'lucide-react';
import { theme, gradients } from '../lib/theme';

export default function Slide21Rag() {
  const steps = [
    { icon: Search, label: 'Câu hỏi', labelKr: '쿼리', desc: 'User đặt câu hỏi', descKr: '사용자가 질문' },
    { icon: FileText, label: 'Tìm kiếm', labelKr: '검색', desc: 'Tìm tài liệu liên quan', descKr: '관련 문서 탐색' },
    { icon: Cpu, label: 'Bổ sung', labelKr: '증강', desc: 'Inject vào context', descKr: '컨텍스트에 주입' },
  ];

  return (
    <SlideLayout background={gradients.subtle}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '50px 80px' }}>
        {/* Corner page-number watermark now comes from SlideLayout globally */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.3}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}
        >
          <Search size={20} color={theme.colors.accent} />
          <span style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(12px, 1.2vw, 16px)', color: theme.colors.accent, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2 }}>
Đi sâu
            <span lang="ko" style={{ display: 'inline-block', fontFamily: theme.fonts.korean, fontSize: '0.78em', color: theme.colors.textMuted, marginLeft: '0.6em', textTransform: 'none' }}>심층 분석</span>
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp} initial="hidden" animate="visible" custom={0.6}
          style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(26px, 3vw, 38px)', color: theme.colors.text, lineHeight: 1.2, marginBottom: 4 }}
        >
          RAG — Retrieval Augmented Generation
        </motion.h2>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.8}
          style={{ marginBottom: 12 }}
        >
          <span lang="ko" style={{ fontFamily: theme.fonts.korean, fontSize: 'clamp(14px, 1.4vw, 18px)', color: theme.colors.textMuted }}>RAG — 검색 증강 생성</span>
        </motion.div>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(14px, 1.4vw, 18px)', color: theme.colors.textSecondary, marginBottom: 40, maxWidth: 600 }}
        >
Tự động lấy các tài liệu liên quan → model có kiến thức cập nhật, đúng domain của bạn.
          <span lang="ko" style={{ display: 'block', fontFamily: theme.fonts.korean, fontSize: '0.78em', color: theme.colors.textMuted, marginTop: '0.35em' }}>
            관련 문서를 자동으로 불러와 모델이 최신의 도메인별 지식을 갖출 수 있게 합니다.
          </span>
        </motion.p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={i} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <motion.div
                  variants={fadeUp} initial="hidden" animate="visible" custom={1.5 + i * 0.3}
                  style={{
                    border: i === 2 ? 'none' : `1px solid ${theme.colors.border}`,
                    borderRadius: 12,
                    background: i === 2
                      ? `linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.accentHover} 100%)`
                      : theme.colors.surface,
                    textAlign: 'center',
                  }}
                >
                  <div style={{ padding: '28px 32px' }}>
                    <Icon size={32} color={i === 2 ? theme.colors.text : theme.colors.accent} strokeWidth={1.5} />
                    <div style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(14px, 1.4vw, 18px)', color: theme.colors.text, marginTop: 12 }}>
                      {step.label}
                    </div>
                    <div lang="ko" style={{ fontFamily: theme.fonts.korean, fontSize: 'clamp(10px, 0.9vw, 12px)', color: i === 2 ? 'rgba(255,255,255,0.7)' : theme.colors.textMuted, marginTop: 2 }}>
                      {step.labelKr}
                    </div>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(11px, 1.1vw, 14px)', color: i === 2 ? 'rgba(255,255,255,0.8)' : theme.colors.textSecondary, marginTop: 6 }}>
                      {step.desc}
                    </div>
                    <div lang="ko" style={{ fontFamily: theme.fonts.korean, fontSize: 'clamp(9px, 0.85vw, 11px)', color: i === 2 ? 'rgba(255,255,255,0.6)' : theme.colors.textMuted, marginTop: 2 }}>
                      {step.descKr}
                    </div>
                  </div>
                </motion.div>
                {i < steps.length - 1 && (
                  <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1.8 + i * 0.3}>
                    <ArrowRight size={24} color={theme.colors.accent} />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(13px, 1.3vw, 16px)', color: theme.colors.textSecondary, marginTop: 36, textAlign: 'center' }}
        >
RAG giúp model trả lời câu hỏi về data <strong style={{ color: theme.colors.text }}>của bạn</strong>, không chỉ training data.
          <span lang="ko" style={{ display: 'block', fontFamily: theme.fonts.korean, fontSize: '0.78em', color: theme.colors.textMuted, marginTop: '0.35em' }}>
            RAG를 통해 모델은 학습 데이터뿐 아니라 여러분의 데이터에 대한 질문에도 답할 수 있습니다.
          </span>
        </motion.p>
      </div>
    </SlideLayout>
  );
}
