import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { SlideSectionLabel } from '../components/slide-section-label'
import { theme, gradients } from '../lib/theme'
import { fadeUp } from '../lib/animations'

const withoutPoints = [
  { vi: 'Boilerplate Express chung chung', kr: '일반 Express 보일러플레이트' },
  { vi: 'Naming conventions sai', kr: '잘못된 네이밍 규칙' },
  { vi: 'Không khớp style của project', kr: '프로젝트 스타일 불일치' },
]

const withPoints = [
  { vi: 'Đọc routes + schema đã có', kr: '기존 라우트 + 스키마 읽기' },
  { vi: 'Tuân theo conventions của project', kr: '프로젝트 규칙 준수' },
  { vi: 'Thêm tests đúng chuẩn', kr: '올바른 테스트 추가' },
]

export default function Slide29DemoMixedClaudeMd() {
  return (
    <SlideLayout background={gradients.subtle}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '52px 80px 44px',
        }}
      >
        <SlideSectionLabel label="DEMO 3 · KẾT HỢP" labelKr="데모 3 · 혼합" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 14, marginBottom: 6 }}
        >
          <BiText
            vi="CLAUDE.md · Có vs Không có"
            kr="CLAUDE.md · 있을 때 vs 없을 때"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 40,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: theme.colors.text,
            }}
            krStyle={{ fontSize: '0.52em', marginTop: '0.3em' }}
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{ marginBottom: 28 }}
        >
          <BiText
            vi="Cùng 1 câu hỏi. Hai kết quả."
            kr="같은 질문. 다른 결과."
            viStyle={{
              fontFamily: theme.fonts.body,
              fontSize: 15,
              color: theme.colors.textSecondary,
            }}
            krStyle={{ fontSize: '0.78em', marginTop: '0.2em' }}
          />
        </motion.div>

        {/* Two-column split */}
        <div style={{ display: 'flex', gap: 24, flex: 1, minHeight: 0 }}>
          {/* LEFT — without, red tint */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            style={{
              flex: 1,
              background: theme.colors.redDim,
              border: `1px solid ${theme.colors.red}`,
              borderRadius: 12,
              padding: '22px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <div
              style={{
                fontFamily: theme.fonts.mono,
                fontSize: 11,
                fontWeight: 700,
                color: theme.colors.red,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              WITHOUT CLAUDE.md
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {withoutPoints.map((p, i) => (
                <BiText
                  key={i}
                  vi={`✗  ${p.vi}`}
                  kr={p.kr}
                  viStyle={{
                    fontFamily: theme.fonts.body,
                    fontSize: 14,
                    color: theme.colors.textSecondary,
                    lineHeight: 1.45,
                  }}
                  krStyle={{ fontSize: '0.78em', marginTop: '0.15em' }}
                />
              ))}
            </div>

            {/* Code snippet mockup */}
            <div
              style={{
                marginTop: 8,
                background: theme.colors.bgDeep,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: 6,
                padding: '12px 14px',
                fontFamily: theme.fonts.mono,
                fontSize: 12,
                color: theme.colors.textMuted,
                lineHeight: 1.6,
              }}
            >
              <div>{'// Generic boilerplate'}</div>
              <div>{'app.get("/users", handler)'}</div>
            </div>
          </motion.div>

          {/* RIGHT — with, green tint */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            style={{
              flex: 1,
              background: theme.colors.greenDim,
              border: `1px solid ${theme.colors.green}`,
              borderRadius: 12,
              padding: '22px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <div
              style={{
                fontFamily: theme.fonts.mono,
                fontSize: 11,
                fontWeight: 700,
                color: theme.colors.green,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              WITH CLAUDE.md
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {withPoints.map((p, i) => (
                <BiText
                  key={i}
                  vi={`✓  ${p.vi}`}
                  kr={p.kr}
                  viStyle={{
                    fontFamily: theme.fonts.body,
                    fontSize: 14,
                    color: theme.colors.textSecondary,
                    lineHeight: 1.45,
                  }}
                  krStyle={{ fontSize: '0.78em', marginTop: '0.15em' }}
                />
              ))}
            </div>

            {/* Code snippet mockup */}
            <div
              style={{
                marginTop: 8,
                background: theme.colors.bgDeep,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: 6,
                padding: '12px 14px',
                fontFamily: theme.fonts.mono,
                fontSize: 12,
                color: theme.colors.textSecondary,
                lineHeight: 1.6,
              }}
            >
              <div style={{ color: theme.colors.accent }}>{'// Reads project conventions'}</div>
              <div>{'router.get("/users", authenticate, userController.list)'}</div>
            </div>
          </motion.div>
        </div>

        {/* Bottom summary */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          style={{
            marginTop: 18,
            padding: '14px 20px',
            background: theme.colors.surface,
            border: `1px solid ${theme.colors.border}`,
            borderRadius: 8,
            textAlign: 'center',
          }}
        >
          <BiText
            vi="Cùng AI. Cùng prompt. Khác context."
            kr="같은 AI. 같은 프롬프트. 다른 컨텍스트."
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 18,
              fontWeight: 700,
              color: theme.colors.text,
              letterSpacing: '-0.01em',
            }}
            krStyle={{ fontSize: '0.78em', marginTop: '0.3em' }}
          />
        </motion.div>
      </div>
    </SlideLayout>
  )
}
