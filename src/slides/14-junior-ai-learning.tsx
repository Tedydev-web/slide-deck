import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { SlideSectionLabel } from '../components/slide-section-label'
import { QuoteBlock } from '../components/quote-block'
import { theme, gradients } from '../lib/theme'
import { fadeUp } from '../lib/animations'

const traditionalBullets = [
  { vi: 'Học cú pháp qua gõ code', kr: '타이핑으로 문법 학습' },
  { vi: 'Debug bằng thử-sai', kr: '시행착오 디버깅' },
  { vi: 'Đọc docs tuần tự từ đầu', kr: '문서 순차 읽기' },
  { vi: 'Hỏi senior → chờ → nhận đáp án', kr: '시니어에 질문 → 대기 → 답변' },
]

const aiBullets = [
  { vi: "Hỏi AI 'tại sao fail?' → giải thích ngay", kr: "AI에 '왜 실패?' → 즉시 설명" },
  { vi: "Yêu cầu '3 cách giải' → so sánh", kr: "'3가지 방법' → 비교" },
  { vi: "'Giải thích legacy code' → hiểu kiến trúc", kr: "'레거시 설명' → 아키텍처 이해" },
  { vi: 'Senior review KIẾN TRÚC, không phải syntax', kr: '시니어는 구조를 리뷰' },
]

export default function Slide14JuniorAiLearning() {
  return (
    <SlideLayout background={gradients.subtle}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '48px 80px 36px',
        }}
      >
        <SlideSectionLabel label="KIỂM CHỨNG THỰC TẾ #3" labelKr="현실 점검 #3" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 14, marginBottom: 24 }}
        >
          <BiText
            vi="Junior dev dùng AI = mất việc? KHÔNG. Học nhanh hơn."
            kr="주니어가 AI를 쓰면 일자리 잃을까? 아니오. 더 빨리 배웁니다."
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 34,
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: theme.colors.text,
            }}
            krStyle={{ fontSize: '0.55em', marginTop: '0.3em' }}
          />
        </motion.div>

        {/* Two-column comparison */}
        <div style={{ display: 'flex', gap: 24, flex: 1, minHeight: 0 }}>
          {/* LEFT — traditional, muted */}
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
              padding: '18px 22px',
              opacity: 0.55,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              minHeight: 0,
              overflow: 'hidden',
            }}
          >
            <BiText
              vi="Junior truyền thống"
              kr="전통적 주니어"
              viStyle={{
                fontFamily: theme.fonts.mono,
                fontSize: 11,
                fontWeight: 700,
                color: theme.colors.textMuted,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
              krStyle={{ fontSize: '0.85em', marginTop: '0.2em' }}
            />

            {/* Big time label */}
            <div
              style={{
                fontFamily: theme.fonts.display,
                fontSize: 44,
                fontWeight: 900,
                color: theme.colors.textMuted,
                lineHeight: 1,
                textDecoration: 'line-through',
              }}
            >
              12 tháng
              <span
                lang="ko"
                style={{
                  display: 'block',
                  fontFamily: theme.fonts.korean,
                  fontSize: '0.4em',
                  fontWeight: 500,
                  letterSpacing: 0,
                  textDecoration: 'none',
                  marginTop: '0.25em',
                }}
              >
                12개월
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {traditionalBullets.map((b, i) => (
                <BiText
                  key={i}
                  vi={`· ${b.vi}`}
                  kr={b.kr}
                  viStyle={{
                    fontFamily: theme.fonts.body,
                    fontSize: 12,
                    color: theme.colors.textMuted,
                    lineHeight: 1.35,
                  }}
                  krStyle={{ fontSize: '0.78em', marginTop: '0.05em' }}
                />
              ))}
            </div>
          </motion.div>

          {/* RIGHT — AI, highlighted */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            style={{
              flex: 1,
              background: theme.colors.accentDim,
              border: `2px solid ${theme.colors.accent}`,
              borderRadius: 12,
              padding: '18px 22px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              minHeight: 0,
              overflow: 'hidden',
            }}
          >
            <BiText
              vi="Junior + AI"
              kr="주니어 + AI"
              viStyle={{
                fontFamily: theme.fonts.mono,
                fontSize: 11,
                fontWeight: 700,
                color: theme.colors.accent,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
              krStyle={{ fontSize: '0.85em', marginTop: '0.2em' }}
            />

            {/* Big time label */}
            <div
              style={{
                fontFamily: theme.fonts.display,
                fontSize: 44,
                fontWeight: 900,
                color: theme.colors.accent,
                lineHeight: 1,
              }}
            >
              3 tháng
              <span
                lang="ko"
                style={{
                  display: 'block',
                  fontFamily: theme.fonts.korean,
                  fontSize: '0.4em',
                  fontWeight: 500,
                  color: theme.colors.accent,
                  letterSpacing: 0,
                  marginTop: '0.25em',
                }}
              >
                3개월
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {aiBullets.map((b, i) => (
                <BiText
                  key={i}
                  vi={`· ${b.vi}`}
                  kr={b.kr}
                  viStyle={{
                    fontFamily: theme.fonts.body,
                    fontSize: 12,
                    color: theme.colors.textSecondary,
                    lineHeight: 1.35,
                  }}
                  krStyle={{ fontSize: '0.78em', marginTop: '0.05em' }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Condition note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          style={{ marginTop: 14 }}
        >
          <BiText
            vi="Điều kiện: junior phải HỎI 'tại sao', không chỉ copy-paste."
            kr="조건: 주니어는 '왜'를 물어야 합니다. 단순 복붙 금지."
            viStyle={{
              fontFamily: theme.fonts.body,
              fontSize: 13,
              color: theme.colors.textMuted,
              fontStyle: 'italic',
            }}
            krStyle={{ fontSize: '0.78em', marginTop: '0.15em' }}
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          style={{ marginTop: 12 }}
        >
          <QuoteBlock
            quote="Có thách thức thì sẽ có cơ hội."
            quoteKr="도전이 있으면 기회도 있다."
            size="small"
          />
        </motion.div>
      </div>
    </SlideLayout>
  )
}
