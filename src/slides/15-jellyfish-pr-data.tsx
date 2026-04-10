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

/* Exact data from ai-code-vs-profit original — 1× vs ~2× */
const chartData = [
  { group: 'Ít áp dụng AI', prs: 1, label: '1×' },
  { group: 'Áp dụng AI nhiều', prs: 2, label: '~2×' },
]

const CHART = {
  accent: '#FF5722',
  accentDim: 'rgba(255, 87, 34, 0.35)',
  gridColor: 'rgba(255, 255, 255, 0.06)',
  tickColor: 'rgba(255, 255, 255, 0.5)',
}

export default function Slide15JellyfishPrData() {
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
        <SlideSectionLabel label="SỰ THẬT #1 — XÁC NHẬN THÊM" labelKr="사실 #1 — 추가 확인" />

        <motion.div variants={fadeUp} custom={1} style={{ marginTop: 12 }}>
          <BiText
            vi="Gấp đôi PR mỗi người khi áp dụng AI nhiều"
            kr="AI를 많이 도입하면 PR이 2배"
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
            marginBottom: 32,
          }}
        >
          Jellyfish — hơn 700 công ty, 200.000 kỹ sư, 20 triệu pull request
        </motion.p>

        {/* Recharts vertical bar chart — exact match to original */}
        <motion.div
          variants={fadeUp}
          custom={3}
          style={{ flex: 1, display: 'flex', alignItems: 'center' }}
        >
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData} barSize={100}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={CHART.gridColor}
                vertical={false}
              />
              <XAxis
                dataKey="group"
                tick={{
                  fill: CHART.tickColor,
                  fontSize: 16,
                  fontFamily: theme.fonts.body,
                }}
                axisLine={{ stroke: CHART.gridColor }}
                tickLine={false}
              />
              <YAxis
                domain={[0, 2.5]}
                tick={{ fill: CHART.tickColor, fontSize: 14 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v: number) => `${v}×`}
              />
              <Bar dataKey="prs" radius={[4, 4, 0, 0]} animationDuration={1200}>
                <Cell fill={CHART.accentDim} />
                <Cell fill={CHART.accent} />
                <LabelList
                  dataKey="label"
                  position="top"
                  style={{
                    fill: '#fff',
                    fontSize: 28,
                    fontWeight: 800,
                    fontFamily: theme.fonts.display,
                  }}
                  offset={12}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div variants={fadeUp} custom={4}>
          <SourceLink
            href="https://www.businessinsider.com/ai-coding-boom-more-software-shipped-no-hit-quality-2026-3"
            label="Jellyfish via Business Insider (2026)"
          />
        </motion.div>
      </motion.div>

      <Attribution>SOURCE: JELLYFISH VIA BUSINESS INSIDER (2026)</Attribution>
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
