import { motion } from 'framer-motion'
import { ArrowUp, ArrowRight, X } from 'lucide-react'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { SlideSectionLabel } from '../components/slide-section-label'
import { theme, gradients } from '../lib/theme'
import { fadeUp, slideFromLeft } from '../lib/animations'

const summaryRows = [
  { vi: 'Năng suất', kr: '생산성', arrow: 'up', color: theme.colors.green },
  { vi: 'Chi phí review', kr: '리뷰 비용', arrow: 'up', color: theme.colors.red },
  { vi: 'Bug ở tầng code', kr: '코드 버그', arrow: 'up', color: theme.colors.red },
  { vi: 'Chất lượng đầu ra', kr: '출력 품질', arrow: 'right', color: theme.colors.textMuted },
  { vi: 'Hiệu suất công ty', kr: '회사 성과', arrow: 'right', color: theme.colors.textMuted },
  { vi: 'Áp lực chi phí', kr: '비용 압력', arrow: 'up', color: theme.colors.red },
]

export default function Slide07SummaryWrongGoal() {
  return (
    <SlideLayout background={gradients.subtle}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '56px 80px',
        }}
      >
        <SlideSectionLabel label="TÓM TẮT" labelKr="요약" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 20, marginBottom: 36 }}
        >
          <BiText
            vi="Chuyện gì thật sự đang xảy ra?"
            kr="실제로 무슨 일이 일어나고 있나?"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 42,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: theme.colors.text,
            }}
            krStyle={{ fontSize: '0.6em', marginTop: '0.35em' }}
          />
        </motion.div>

        {/* Two-column body */}
        <div style={{ display: 'flex', gap: 48, flex: 1 }}>
          {/* LEFT: summary grid */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            {summaryRows.map((row, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 20px',
                  background: theme.colors.surface,
                  border: `1px solid ${theme.colors.border}`,
                  borderRadius: 8,
                }}
              >
                <BiText
                  vi={row.vi}
                  kr={row.kr}
                  viStyle={{
                    fontFamily: theme.fonts.body,
                    fontSize: 15,
                    fontWeight: 500,
                    color: theme.colors.text,
                  }}
                  krStyle={{ fontSize: '0.78em', marginTop: '0.2em' }}
                />
                <div style={{ marginLeft: 16, flexShrink: 0 }}>
                  {row.arrow === 'up' ? (
                    <ArrowUp size={20} color={row.color} />
                  ) : (
                    <ArrowRight size={20} color={row.color} />
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* RIGHT: wrong strategy box */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            animate="visible"
            custom={3}
            style={{
              width: 380,
              background: theme.colors.redDim,
              border: `1px solid ${theme.colors.red}`,
              borderRadius: 12,
              padding: '36px 36px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: 20,
            }}
          >
            <X size={56} color={theme.colors.red} strokeWidth={2.5} />

            <BiText
              vi="CHIẾN LƯỢC SAI"
              kr="잘못된 전략"
              viStyle={{
                fontFamily: theme.fonts.display,
                fontSize: 26,
                fontWeight: 800,
                letterSpacing: '-0.01em',
                color: theme.colors.red,
              }}
              krStyle={{ fontSize: '0.78em', marginTop: '0.3em', color: theme.colors.red }}
            />

            <BiText
              vi="Viết nhiều code hơn đối thủ"
              kr="경쟁사보다 더 많은 코드를 작성하라"
              viStyle={{
                fontFamily: theme.fonts.body,
                fontSize: 17,
                fontWeight: 500,
                lineHeight: 1.5,
                color: theme.colors.textSecondary,
              }}
              krStyle={{ fontSize: '0.78em', marginTop: '0.4em' }}
            />

            {/*
              Inline tagline replaces the old standalone QuoteBlock footer,
              which overflowed the 720px slide box. Keeps the core message
              inside the right panel where it belongs visually.
            */}
            <BiText
              vi="Nhiều code ≠ Nhiều value"
              kr="많은 코드 ≠ 많은 가치"
              viStyle={{
                fontFamily: theme.fonts.display,
                fontSize: 14,
                fontStyle: 'italic',
                color: theme.colors.textMuted,
                marginTop: 4,
                letterSpacing: '0.02em',
              }}
              krStyle={{ fontSize: '0.85em', marginTop: '0.25em' }}
            />
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  )
}
