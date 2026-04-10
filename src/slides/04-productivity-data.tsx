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

/* Exact data from ai-code-vs-profit original */
const chartData = [
  { metric: 'Pull Request', value: 98, label: '+98%' },
  { metric: 'Công việc hoàn thành', value: 21, label: '+21%' },
]

const CHART = {
  accent: '#FF5722',
  accentDim: 'rgba(255, 87, 34, 0.6)',
  gridColor: 'rgba(255, 255, 255, 0.06)',
  tickColor: 'rgba(255, 255, 255, 0.5)',
}

export default function Slide04ProductivityData() {
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
        <SlideSectionLabel label="SỰ THẬT #1" labelKr="사실 #1" />

        <motion.h1
          variants={fadeUp}
          custom={1}
          style={{
            fontFamily: theme.fonts.display,
            fontWeight: 800,
            fontSize: 40,
            lineHeight: 1.2,
            textAlign: 'left',
            marginBottom: 8,
            marginTop: 12,
            color: theme.colors.text,
          }}
        >
          <BiText
            vi="AI tăng năng suất rõ rệt"
            kr="AI는 생산성을 눈에 띄게 향상시킵니다"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontWeight: 800,
              fontSize: 40,
              lineHeight: 1.2,
            }}
            krStyle={{ fontSize: '0.55em', marginTop: '0.3em' }}
          />
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          style={{
            fontSize: 14,
            color: theme.colors.textMuted,
            textAlign: 'left',
            marginBottom: 32,
          }}
        >
          Faros AI — 10.000+ developer, 1.255 team — Dữ liệu Git + Jira (không phải khảo sát)
        </motion.p>

        {/* Recharts horizontal bar chart — exact match to original */}
        <motion.div
          variants={fadeUp}
          custom={3}
          style={{ flex: 1, display: 'flex', alignItems: 'center' }}
        >
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={chartData} layout="vertical" barSize={60}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={CHART.gridColor}
                horizontal={false}
              />
              <XAxis
                type="number"
                domain={[0, 110]}
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
                  fontSize: 16,
                  fontFamily: theme.fonts.body,
                }}
                axisLine={false}
                tickLine={false}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]} animationDuration={1200}>
                <Cell fill={CHART.accent} />
                <Cell fill={CHART.accentDim} />
                <LabelList
                  dataKey="label"
                  position="right"
                  style={{
                    fill: '#fff',
                    fontSize: 22,
                    fontWeight: 700,
                    fontFamily: theme.fonts.body,
                  }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={4}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
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

/* Inline source link matching original's external-link style */
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
