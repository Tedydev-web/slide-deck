import { motion } from 'framer-motion'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Cell, LabelList, ResponsiveContainer,
} from 'recharts'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { SlideSectionLabel } from '../components/slide-section-label'
import { theme } from '../lib/theme'
import { fadeUp, staggerContainer } from '../lib/animations'

/* Revert rate before/after AI — from Jellyfish data as cited in
 * ai-code-vs-profit Sự thật #4. Values rounded to the ~0.5% band
 * because the whole point of this slide is that revert rate is flat.
 */
const chartData = [
  { period: 'Trước AI', periodKr: 'AI 이전', rate: 0.5, label: '~0.5%' },
  { period: 'Sau AI', periodKr: 'AI 이후', rate: 0.5, label: '~0.5%' },
]

const CHART = {
  gridColor: 'rgba(255, 255, 255, 0.06)',
  tickColor: 'rgba(255, 255, 255, 0.5)',
  barColor: 'rgba(255, 255, 255, 0.28)',
  barHighlight: 'rgba(255, 255, 255, 0.35)',
}

interface Card {
  tone: 'red' | 'neutral' | 'accent'
  vi: { headline: string; detail: string }
  kr: { headline: string; detail: string }
}

const cards: Card[] = [
  {
    tone: 'red',
    vi: {
      headline: 'Nhiều bug hơn ở tầng code: +9%/dev',
      detail: 'Faros — bug per developer tăng 9% sau khi áp AI',
    },
    kr: {
      headline: '코드 레벨 버그 증가: 개발자당 +9%',
      detail: 'Faros — AI 도입 후 개발자당 버그 9% 증가',
    },
  },
  {
    tone: 'neutral',
    vi: {
      headline: 'Chất lượng production không đổi',
      detail: 'Tỷ lệ revert trên main branch gần như giữ nguyên',
    },
    kr: {
      headline: '프로덕션 품질 변화 없음',
      detail: '메인 브랜치 되돌림 비율 거의 유지',
    },
  },
  {
    tone: 'accent',
    vi: {
      headline: 'Team đang gánh bug bằng review nhiều hơn',
      detail: 'Chi phí ẩn dịch chuyển từ ship sang review',
    },
    kr: {
      headline: '팀이 더 많은 리뷰로 버그를 감당 중',
      detail: '비용이 배포에서 리뷰로 이동',
    },
  },
]

function cardStyle(tone: Card['tone']) {
  switch (tone) {
    case 'red':
      return {
        border: `1px solid ${theme.colors.red}`,
        background: 'rgba(244, 67, 54, 0.08)',
        headlineColor: theme.colors.red,
      }
    case 'accent':
      return {
        border: `1px solid ${theme.colors.accent}`,
        background: `${theme.colors.accent}14`,
        headlineColor: theme.colors.accent,
      }
    default:
      return {
        border: `1px solid ${theme.colors.border}`,
        background: theme.colors.surface,
        headlineColor: theme.colors.text,
      }
  }
}

/**
 * Sự thật #4 — Hidden quality costs.
 * Layout matches ai-code-vs-profit style:
 *   - Top: label + one-line bilingual title
 *   - Middle: horizontal bar chart (Trước AI / Sau AI → ~0.5%)
 *   - Bottom: 3-card row explaining the hidden cost
 */
export default function Slide36HiddenQualityCosts() {
  return (
    <SlideLayout pageNumber="04">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: '56px 88px 48px',
          gap: 0,
        }}
      >
        <SlideSectionLabel label="SỰ THẬT #4" labelKr="사실 #4" />

        {/* Title — one-line sentence, bilingual */}
        <motion.div variants={fadeUp} custom={1} style={{ marginTop: 12, marginBottom: 26 }}>
          <BiText
            vi="Chất lượng trông ổn định. Nhưng có chi phí ẩn."
            kr="품질은 안정적으로 보인다. 하지만 숨겨진 비용이 있다."
            viStyle={{
              fontFamily: theme.fonts.display,
              fontWeight: 800,
              fontSize: 'clamp(30px, 3.4vw, 44px)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: theme.colors.text,
            }}
            krStyle={{
              fontSize: '0.48em',
              marginTop: '0.35em',
              color: theme.colors.textMuted,
              fontWeight: 500,
            }}
          />
        </motion.div>

        {/* Revert rate section label */}
        <motion.div variants={fadeUp} custom={2} style={{ marginBottom: 10 }}>
          <span
            style={{
              fontFamily: theme.fonts.mono,
              fontSize: 12,
              fontWeight: 700,
              color: theme.colors.textMuted,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}
          >
            REVERT RATE
          </span>
          <span
            lang="ko"
            style={{
              fontFamily: theme.fonts.korean,
              fontSize: 11,
              color: theme.colors.textMuted,
              marginLeft: 10,
              letterSpacing: '0.04em',
            }}
          >
            / 되돌리기 비율
          </span>
        </motion.div>

        {/* Horizontal bar chart — 2 bars, rate on X, period on Y */}
        <motion.div
          variants={fadeUp}
          custom={3}
          style={{ width: '100%', height: 150, marginBottom: 28 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              barSize={40}
              margin={{ top: 10, right: 80, left: 100, bottom: 10 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={CHART.gridColor}
                vertical={true}
                horizontal={false}
              />
              <XAxis
                type="number"
                domain={[0, 1]}
                tick={{ fill: CHART.tickColor, fontSize: 11, fontFamily: theme.fonts.body }}
                axisLine={{ stroke: CHART.gridColor }}
                tickLine={false}
                tickFormatter={(v: number) => `${v}%`}
                hide
              />
              <YAxis
                type="category"
                dataKey="period"
                // Custom tick renders both VI period and KR subscript as a
                // single <g>. Recharts typing for tick props is loose, so
                // we accept `any` to unwrap the x/y/payload we actually need.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                tick={(props: any) => {
                  const x = Number(props.x) || 0
                  const y = Number(props.y) || 0
                  const index = props?.payload?.index ?? 0
                  const row = chartData[index]
                  return (
                    <g transform={`translate(${x - 14},${y})`}>
                      <text
                        textAnchor="end"
                        fill={theme.colors.text}
                        fontSize={15}
                        fontFamily={theme.fonts.body}
                        fontWeight={600}
                        dy={-2}
                      >
                        {props?.payload?.value}
                      </text>
                      <text
                        textAnchor="end"
                        fill={CHART.tickColor}
                        fontSize={11}
                        fontFamily={theme.fonts.korean}
                        dy={14}
                      >
                        {row?.periodKr ?? ''}
                      </text>
                    </g>
                  )
                }}
                axisLine={false}
                tickLine={false}
                width={100}
              />
              <Bar dataKey="rate" radius={[0, 4, 4, 0]} animationDuration={1200}>
                {chartData.map((_, i) => (
                  <Cell key={i} fill={i === 0 ? CHART.barColor : CHART.barHighlight} />
                ))}
                <LabelList
                  dataKey="label"
                  position="right"
                  style={{
                    fill: theme.colors.text,
                    fontSize: 13,
                    fontFamily: theme.fonts.mono,
                    fontWeight: 700,
                  }}
                  offset={12}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* 3-card row — bottom explanation */}
        <motion.div
          variants={fadeUp}
          custom={4}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 18,
          }}
        >
          {cards.map((card, i) => {
            const s = cardStyle(card.tone)
            return (
              <div
                key={i}
                style={{
                  border: s.border,
                  background: s.background,
                  borderRadius: 10,
                  padding: '18px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                }}
              >
                <BiText
                  vi={card.vi.headline}
                  kr={card.kr.headline}
                  viStyle={{
                    fontFamily: theme.fonts.display,
                    fontSize: 'clamp(13px, 1.3vw, 16px)',
                    fontWeight: 700,
                    color: s.headlineColor,
                    lineHeight: 1.35,
                  }}
                  krStyle={{
                    fontSize: '0.78em',
                    marginTop: '0.15em',
                    color: theme.colors.textMuted,
                  }}
                />
                <BiText
                  vi={card.vi.detail}
                  kr={card.kr.detail}
                  viStyle={{
                    fontFamily: theme.fonts.body,
                    fontSize: 'clamp(11px, 1.1vw, 13px)',
                    color: theme.colors.textMuted,
                    lineHeight: 1.4,
                  }}
                  krStyle={{
                    fontSize: '0.82em',
                    marginTop: '0.1em',
                    color: theme.colors.textMuted,
                    opacity: 0.8,
                  }}
                />
              </div>
            )
          })}
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
}
