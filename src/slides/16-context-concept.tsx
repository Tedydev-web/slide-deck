import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';
import { Layers } from 'lucide-react';
import { theme, gradients } from '../lib/theme';

export default function Slide16ContextConcept() {
  return (
    <SlideLayout background={gradients.editorial}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '56px 82px' }}>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(74px, 9vw, 108px)', color: theme.colors.accentDim, lineHeight: 1, marginBottom: -4 }}
        >
          04
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}
        >
          <Layers size={24} color={theme.colors.accent} />
          <span style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(12px, 1.2vw, 16px)', color: theme.colors.accent, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2 }}>
            Khái niệm cốt lõi
            <span lang="ko" style={{ display: 'inline-block', fontFamily: theme.fonts.korean, fontSize: '0.78em', color: theme.colors.textMuted, marginLeft: '0.6em' }}>핵심 개념</span>
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(42px, 4.8vw, 62px)', color: theme.colors.text, lineHeight: 1.12, marginBottom: 34, maxWidth: 920 }}
        >
          Kỹ thuật ngữ cảnh
          <span lang="ko" style={{ display: 'block', fontFamily: theme.fonts.korean, fontSize: '0.62em', color: theme.colors.textMuted, marginTop: '0.25em', fontWeight: 400 }}>컨텍스트 엔지니어링</span>
        </motion.h2>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
          style={{
            borderLeft: `4px solid ${theme.colors.accent}`,
            paddingLeft: 24,
            maxWidth: 980,
          }}
        >
          <p style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(31px, 3.2vw, 41px)', color: theme.colors.text, lineHeight: 1.34, fontWeight: 600, letterSpacing: '-0.01em' }}>
            Chọn đúng thông tin đưa vào ngữ cảnh
            <br />
            để mô hình tạo ra kết quả tốt nhất.
          </p>
          <p lang="ko" style={{ fontFamily: theme.fonts.korean, fontSize: 'clamp(16px, 1.5vw, 21px)', color: theme.colors.textSecondary, lineHeight: 1.55, marginTop: '0.8em', fontWeight: 400 }}>
            컨텍스트에 맞는 정보를 선별해 넣을 때 모델의 결과 품질이 가장 높아집니다.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{ marginTop: 30, maxWidth: 900 }}
        >
          <p style={{ fontFamily: theme.fonts.body, fontSize: 'clamp(18px, 1.7vw, 23px)', color: theme.colors.textSecondary, lineHeight: 1.55 }}>
            Không chỉ là câu lệnh bạn viết — mà là <em>toàn bộ ngữ cảnh</em> mô hình nhìn thấy khi trả lời.
          </p>
          <p lang="ko" style={{ fontFamily: theme.fonts.korean, fontSize: 'clamp(13px, 1.2vw, 16px)', color: theme.colors.textMuted, lineHeight: 1.6, marginTop: '0.45em' }}>
            프롬프트 문장 자체보다, 응답 시점에 모델이 볼 수 있는 전체 맥락이 중요합니다.
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
