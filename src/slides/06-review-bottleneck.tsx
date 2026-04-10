import { motion } from 'framer-motion'
import SlideLayout, { Attribution } from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { SlideSectionLabel } from '../components/slide-section-label'
import { DataBar } from '../components/data-bar'
import { QuoteBlock } from '../components/quote-block'
import { theme, gradients } from '../lib/theme'
import { fadeUp } from '../lib/animations'

const barData = [
  { label: 'Thời gian review', labelKr: '리뷰 시간', value: 90, display: '+90%' },
  { label: 'Kích thước PR', labelKr: 'PR 크기', value: 154, display: '+154%' },
  { label: 'Bug/người', labelKr: '개발자당 버그', value: 9, display: '+9%' },
]

export default function Slide06ReviewBottleneck() {
  return (
    <SlideLayout background={gradients.deep}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '56px 100px',
        }}
      >
        <SlideSectionLabel label="SỰ THẬT #3" labelKr="사실 #3" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 20, marginBottom: 44 }}
        >
          <BiText
            vi="Điểm nghẽn dịch chuyển sang review"
            kr="병목이 리뷰로 이동했습니다"
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

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{ marginBottom: 40 }}
        >
          <DataBar
            data={barData}
            maxValue={160}
            barHeight={44}
            labelWidth={240}
          />
        </motion.div>

        <QuoteBlock
          quote="AI không xóa bottleneck. AI dịch chuyển nó — từ viết code sang review code."
          quoteKr="AI는 병목을 없애지 않는다. 옮길 뿐 — 작성에서 리뷰로."
          size="medium"
          delay={3}
        />
      </div>

      <Attribution>SOURCE: FAROS AI (2025)</Attribution>
    </SlideLayout>
  )
}
