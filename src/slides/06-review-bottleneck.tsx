import { motion } from 'framer-motion'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Cell, LabelList, ResponsiveContainer,
} from 'recharts'
import SlideLayout, { Attribution } from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { SlideSectionLabel } from '../components/slide-section-label'
import { theme } from '../lib/theme'
import { fadeUp, staggerContainer } from '../lib/animations'

/* Exact data from ai-code-vs-profit original — note 91% not 90% */
const chartData = [
  { metric: 'Thời gian review', value: 91, label: '+91%', color: '#f44336' },
  { metric: 'Kích thước PR', value: 154, label: '+154%', color: '#FF5722' },
  { metric: 'Bug / người', value: 9, label: '+9%', color: '#FFC107' },
]

const CHART = {
  gridColor: 'rgba(255, 255, 255, 0.06)',
  tickColor: 'rgba(255, 255, 255, 0.5)',
}

export default function Slide06ReviewBottleneck() {
  return (
    <SlideLayout>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: '60px 80px',
        }}
      >
        <SlideSectionLabel label="SỰ THẬT #3" labelKr="사실 #3" />

        <motion.div variants={fadeUp} custom={1} style={{ marginTop: 12 }}>
          <BiText
            vi="Điểm nghẽn dịch chuyển sang review"
            kr="병목이 리뷰로 이동했습니다"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontWeight: 800,
              fontSize: 40,
              lineHeight: 1.2,
              textAlign: 'left' as const,
              marginBottom: 8,
            }}
            krStyle={{ fontSize: '0.55em', marginTop: '0.3em' }}
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          custom={2}
          style={{
            fontSize: 14,
            color: theme.colors.textMuted,
            textAlign: 'left',
            marginBottom: 28,
          }}
        >
          AI đẩy công việc từ viết code → review code — Faros AI, 10k developer
        </motion.p>

        {/* Recharts horizontal bar chart — exact match to original */}
        <motion.div
          variants={fadeUp}
          custom={3}
          style={{ flex: 1, display: 'flex', alignItems: 'center' }}
        >
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData} layout="vertical" barSize={50}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={CHART.gridColor}
                horizontal={false}
              />
              <XAxis
                type="number"
                domain={[0, 180]}
                tick={{ fill: CHART.tickColor, fontSize: 14 }}
                axisLine={{ stroke: CHART.gridColor }}
                tickFormatter={(v: number) => `+${v}%`}
              />
              <YAxis
                type="category"
                dataKey="metric"
                width={160}
                tick={{
                  fill: CHART.tickColor,
                  fontSize: 15,
                  fontFamily: theme.fonts.body,
                }}
                axisLine={false}
                tickLine={false}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]} animationDuration={1200}>
                {chartData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
                <LabelList
                  dataKey="label"
                  position="right"
                  style={{
                    fill: '#fff',
                    fontSize: 20,
                    fontWeight: 700,
                    fontFamily: theme.fonts.body,
                  }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div variants={fadeUp} custom={4}>
          <SourceLink
            href="https://www.faros.ai/blog/ai-software-engineering"
            label="Faros AI (2025)"
          />
        </motion.div>
      </motion.div>

      <Attribution>SOURCE: FAROS AI (2025)</Attribution>
    </SlideLayout>
  )
}

function SourceLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-interactive="true"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 14,
        color: theme.colors.textMuted,
        textDecoration: 'underline',
        textUnderlineOffset: 3,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={12}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </svg>
      {label}
    </a>
  )
}
