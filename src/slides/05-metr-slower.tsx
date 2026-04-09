import { motion } from 'framer-motion'
import SlideLayout, { Attribution } from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { SlideSectionLabel } from '../components/slide-section-label'
import { StatBox } from '../components/stat-box'
import { theme, gradients } from '../lib/theme'
import { fadeUp, scaleIn } from '../lib/animations'

const evidencePoints = [
  { vi: 'Thử nghiệm ngẫu nhiên có đối chứng (METR)', kr: '무작위 대조 시험 (METR)' },
  { vi: 'Công việc thực trên OSS', kr: '실제 OSS 작업' },
  { vi: 'Dev có kinh nghiệm (avg 5yr)', kr: '숙련 개발자 (평균 5년)' },
]

export default function Slide05MetrSlower() {
  return (
    <SlideLayout background={gradients.deep}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '60px 100px',
        }}
      >
        <SlideSectionLabel label="SỰ THẬT #2" labelKr="사실 #2" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 24, marginBottom: 48 }}
        >
          <BiText
            vi="Nhiều code hơn ≠ bàn giao nhanh hơn"
            kr="더 많은 코드 ≠ 더 빠른 인도"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 46,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: theme.colors.text,
            }}
            krStyle={{ fontSize: '0.6em', marginTop: '0.4em' }}
          />
        </motion.div>

        {/* Two-column body */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 80,
            flex: 1,
          }}
        >
          {/* Left: hero stat */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            custom={0}
            style={{ minWidth: 220 }}
          >
            <StatBox
              value="19%"
              label="chậm hơn"
              labelKr="더 느림"
              size="hero"
              color={theme.colors.accent}
              animated={false}
            />
          </motion.div>

          {/* Right: evidence box */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            style={{
              flex: 1,
              background: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: 12,
              padding: '36px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            {evidencePoints.map((pt, i) => (
              <BiText
                key={i}
                vi={`· ${pt.vi}`}
                kr={pt.kr}
                viStyle={{
                  fontFamily: theme.fonts.body,
                  fontSize: 18,
                  fontWeight: 500,
                  lineHeight: 1.45,
                  color: theme.colors.text,
                }}
                krStyle={{ fontSize: '0.78em', marginTop: '0.25em' }}
              />
            ))}

            {/* Causal note */}
            <div style={{ marginTop: 12, borderTop: `1px solid ${theme.colors.border}`, paddingTop: 20 }}>
              <BiText
                vi="Đây là bằng chứng nhân quả, không phải tương quan."
                kr="이것은 인과적 증거이며, 상관관계가 아닙니다."
                viStyle={{
                  fontFamily: theme.fonts.body,
                  fontSize: 15,
                  fontStyle: 'italic',
                  color: theme.colors.accent,
                  lineHeight: 1.5,
                }}
                krStyle={{ fontSize: '0.78em', marginTop: '0.3em', color: theme.colors.accentDim }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <Attribution>SOURCE: METR (2025)</Attribution>
    </SlideLayout>
  )
}
