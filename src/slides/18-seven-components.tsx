import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';
import { Settings, User, BookOpen, Database, Wrench, MessageCircle, Lock } from 'lucide-react';
import { theme, gradients } from '../lib/theme';

export default function Slide18SevenComponents() {
  const components = [
    { icon: Settings, label: 'System Prompt', labelKr: '시스템 프롬프트', desc: 'Định nghĩa hành vi & persona', descKr: '행동 및 페르소나 설정' },
    { icon: User, label: 'Tin nhắn user', labelKr: '사용자 메시지', desc: 'Câu hỏi thực tế', descKr: '실제 질문' },
    { icon: BookOpen, label: 'Ví dụ (Few-shot)', labelKr: '예시', desc: 'Minh hoạ mẫu input/output', descKr: '퓨샷 시연' },
    { icon: Database, label: 'Tài liệu fetch', labelKr: '검색 문서', desc: 'Kiến thức từ RAG', descKr: 'RAG 기반 지식' },
    { icon: Wrench, label: 'Kết quả tool', labelKr: '도구 결과', desc: 'Output của function call', descKr: '함수 호출 출력' },
    { icon: MessageCircle, label: 'Lịch sử chat', labelKr: '대화 기록', desc: 'Trí nhớ hội thoại', descKr: '대화 메모리' },
    { icon: Lock, label: 'Ràng buộc output', labelKr: '출력 제약', desc: 'Định dạng & guardrails', descKr: '형식 및 가드레일' },
  ];

  return (
    <SlideLayout background={gradients.editorial}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '50px 70px' }}>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(70px, 9vw, 100px)', color: theme.colors.accentDim, lineHeight: 1, marginBottom: -8 }}
        >
          06
        </motion.div>

        <motion.h2
          variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
          style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(24px, 2.8vw, 36px)', color: theme.colors.text, lineHeight: 1.2, marginBottom: 8 }}
        >
<span style={{ color: theme.colors.accent }}>7</span> thành phần của Context
        </motion.h2>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.7}
          style={{ marginBottom: 24 }}
        >
          <span lang="ko" style={{ fontFamily: theme.fonts.korean, fontSize: 'clamp(13px, 1.3vw, 16px)', color: theme.colors.textMuted }}>
            컨텍스트의 7가지 구성요소
          </span>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {components.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" animate="visible" custom={1 + i * 0.15}
                style={{
                  border: `1px solid ${theme.colors.border}`,
                  borderRadius: 10,
                  background: theme.colors.surface,
                }}
              >
                <div style={{ padding: '20px 16px' }}>
                  <Icon size={22} color={theme.colors.accent} strokeWidth={1.5} />
                  <div style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(13px, 1.3vw, 16px)', color: theme.colors.text, fontWeight: 600, marginTop: 10 }}>
                    {c.label}
                  </div>
                  <div lang="ko" style={{ fontFamily: theme.fonts.korean, fontSize: 'clamp(10px, 0.9vw, 12px)', color: theme.colors.textMuted, marginTop: 2 }}>
                    {c.labelKr}
                  </div>
                  <div style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(11px, 1vw, 13px)', color: theme.colors.textSecondary, marginTop: 6 }}>
                    {c.desc}
                  </div>
                  <div lang="ko" style={{ fontFamily: theme.fonts.korean, fontSize: 'clamp(10px, 0.85vw, 11px)', color: theme.colors.textMuted, marginTop: 2 }}>
                    {c.descKr}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
}
