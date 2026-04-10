import { motion } from 'framer-motion'
import SlideLayout, { Attribution } from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { theme } from '../lib/theme'
import { fadeUp, staggerContainer } from '../lib/animations'

export default function Slide05MetrSlower() {
  return (
    <SlideLayout
      background={`
        radial-gradient(ellipse at 50% 50%, rgba(244, 67, 54, 0.08) 0%, transparent 60%),
        ${theme.colors.bg}
      `}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          padding: '0 80px',
          gap: 80,
        }}
      >
        {/* Left: hero stat — exact original layout */}
        <motion.div
          variants={fadeUp}
          custom={0}
          style={{
            flex: '0 0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontWeight: 800,
              fontSize: 'clamp(4rem, 10vw, 8rem)',
              color: theme.colors.red,
              lineHeight: 1,
            }}
          >
            19%
          </div>
          <div
            style={{
              fontSize: 24,
              color: theme.colors.textSecondary,
              marginTop: 8,
            }}
          >
            <BiText
              vi="chậm hơn"
              kr="더 느림"
              viStyle={{ fontSize: 24, color: theme.colors.textSecondary }}
              krStyle={{ fontSize: '0.6em', marginTop: '0.3em' }}
            />
          </div>
        </motion.div>

        {/* Right: evidence text — matching original structure */}
        <div style={{ flex: 1 }}>
          <motion.div variants={fadeUp} custom={1}>
            <BiText
              vi="Sự thật #2"
              kr="사실 #2"
              viStyle={{
                fontFamily: theme.fonts.body,
                fontSize: 14,
                color: theme.colors.accent,
                textTransform: 'uppercase' as const,
                letterSpacing: 3,
                marginBottom: 12,
              }}
              krStyle={{ fontSize: '0.78em', marginTop: '0.2em' }}
            />
          </motion.div>

          <motion.div variants={fadeUp} custom={2}>
            <BiText
              vi="Nhiều code hơn ≠ bàn giao nhanh hơn"
              kr="더 많은 코드 ≠ 더 빠른 인도"
              viStyle={{
                fontFamily: theme.fonts.display,
                fontWeight: 800,
                fontSize: 40,
                lineHeight: 1.2,
                textAlign: 'left' as const,
                marginBottom: 24,
              }}
              krStyle={{ fontSize: '0.55em', marginTop: '0.3em' }}
            />
          </motion.div>

          {/* Evidence box with border-left — matches original exactly */}
          <motion.div
            variants={fadeUp}
            custom={3}
            style={{
              borderLeft: `2px solid ${theme.colors.accent}`,
              paddingLeft: 20,
              marginBottom: 24,
            }}
          >
            <BiText
              vi="Thử nghiệm ngẫu nhiên có đối chứng (METR)"
              kr="무작위 대조 시험 (METR)"
              viStyle={{
                fontSize: 16,
                color: theme.colors.textSecondary,
                lineHeight: 1.6,
              }}
              krStyle={{ fontSize: '0.78em', marginTop: '0.2em' }}
            />
            <BiText
              vi="Công việc thực trên OSS · Dev có kinh nghiệm · So sánh nhóm dùng AI vs không dùng"
              kr="실제 OSS 작업 · 경험 있는 개발자 · AI 사용 vs 미사용 그룹 비교"
              viStyle={{
                fontSize: 14,
                color: theme.colors.textMuted,
                lineHeight: 1.6,
                marginTop: 8,
              }}
              krStyle={{ fontSize: '0.78em', marginTop: '0.2em' }}
            />
          </motion.div>

          {/* Causal note callout — exact original style */}
          <motion.div
            variants={fadeUp}
            custom={4}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 20px',
              background: 'rgba(255, 87, 34, 0.1)',
              border: '1px solid rgba(255, 87, 34, 0.2)',
              fontSize: 16,
              color: theme.colors.accent,
            }}
          >
            <BiText
              vi="Đây là bằng chứng nhân quả, không phải tương quan"
              kr="이것은 인과적 증거이며, 상관관계가 아닙니다"
              viStyle={{ fontSize: 16, color: theme.colors.accent }}
              krStyle={{ fontSize: '0.78em', marginTop: '0.2em', color: theme.colors.accent }}
            />
          </motion.div>

          <motion.div variants={fadeUp} custom={5} style={{ marginTop: 24 }}>
            <SourceLink
              href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study"
              label="METR (2025)"
            />
          </motion.div>
        </div>
      </motion.div>

      <Attribution>SOURCE: METR (2025)</Attribution>
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
