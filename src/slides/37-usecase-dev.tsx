import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { SlideSectionLabel } from '../components/slide-section-label'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'
import { fadeUp } from '../lib/animations'
import { X, Check } from 'lucide-react'

export default function Slide37() {
  return (
    <SlideLayout background={gradients.subtle}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '60px 100px',
          gap: 0,
        }}
      >
        <SlideSectionLabel label="ÁP DỤNG · DEV" labelKr="활용 · 개발" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ marginTop: 20, marginBottom: 36 }}
        >
          <BiText
            vi="Dev: PRD → Code → Tests trong 1 session"
            kr="개발: PRD → 코드 → 테스트를 한 세션에"
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 38,
              fontWeight: 800,
              color: theme.colors.text,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
            krStyle={{ fontSize: '0.5em', marginTop: '0.35em' }}
          />
        </motion.div>

        <div style={{ display: 'flex', gap: 28, flex: 1, alignItems: 'stretch' }}>
          {/* Left - bad */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            style={{
              flex: 1,
              background: theme.colors.redDim,
              border: `1px solid ${theme.colors.red}`,
              borderRadius: 12,
              padding: '28px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <X size={18} color={theme.colors.red} />
              <span
                style={{
                  fontFamily: theme.fonts.mono,
                  fontSize: 12,
                  color: theme.colors.red,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
Kiểu Chat
              </span>
            </div>
            <BiText
              vi="Boilerplate Express chung chung, không context"
              kr="일반적인 Express 보일러플레이트, 컨텍스트 없음"
              viStyle={{
                fontFamily: theme.fonts.body,
                fontSize: 17,
                color: theme.colors.textSecondary,
                lineHeight: 1.5,
              }}
              krStyle={{ fontSize: '0.78em', marginTop: '0.3em' }}
            />
            <BiText
              vi="Không biết structure project, không biết naming conventions"
              kr="프로젝트 구조, 네이밍 규칙 모름"
              viStyle={{
                fontFamily: theme.fonts.body,
                fontSize: 15,
                color: theme.colors.textMuted,
                lineHeight: 1.4,
              }}
              krStyle={{ fontSize: '0.8em', marginTop: '0.2em' }}
            />
          </motion.div>

          {/* Right - good */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            style={{
              flex: 1,
              background: theme.colors.accentDim,
              border: `1px solid ${theme.colors.accent}`,
              borderRadius: 12,
              padding: '28px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Check size={18} color={theme.colors.accent} />
              <span
                style={{
                  fontFamily: theme.fonts.mono,
                  fontSize: 12,
                  color: theme.colors.accent,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
Kiểu Workflow
              </span>
            </div>
            <BiText
              vi="Đọc routes + schema đã có → code + tests khớp chuẩn"
              kr="기존 라우트 + 스키마 읽기 → 맞는 코드 + 테스트"
              viStyle={{
                fontFamily: theme.fonts.body,
                fontSize: 17,
                color: theme.colors.text,
                lineHeight: 1.5,
              }}
              krStyle={{ fontSize: '0.78em', marginTop: '0.3em' }}
            />
            <BiText
              vi="CLAUDE.md, custom skills, output nhận biết ngữ cảnh"
              kr="CLAUDE.md, 커스텀 스킬, 컨텍스트 인식 출력"
              viStyle={{
                fontFamily: theme.fonts.body,
                fontSize: 15,
                color: theme.colors.textSecondary,
                lineHeight: 1.4,
              }}
              krStyle={{ fontSize: '0.8em', marginTop: '0.2em' }}
            />
          </motion.div>

          {/* Stat */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: theme.colors.surface,
              border: `1px solid ${theme.colors.borderStrong}`,
              borderRadius: 12,
              padding: '28px 20px',
              gap: 12,
            }}
          >
            <div
              style={{
                fontFamily: theme.fonts.display,
                fontSize: 52,
                fontWeight: 900,
                color: theme.colors.accent,
                lineHeight: 1,
                letterSpacing: '-0.03em',
                textAlign: 'center',
              }}
            >
              2 ngày
            </div>
            <div
              style={{
                fontFamily: theme.fonts.mono,
                fontSize: 24,
                color: theme.colors.textMuted,
                textAlign: 'center',
              }}
            >
              →
            </div>
            <div
              style={{
                fontFamily: theme.fonts.display,
                fontSize: 52,
                fontWeight: 900,
                color: theme.colors.green,
                lineHeight: 1,
                letterSpacing: '-0.03em',
                textAlign: 'center',
              }}
            >
              30 phút
            </div>
            <div lang="ko" style={{ fontFamily: theme.fonts.korean, fontSize: 14, color: theme.colors.textMuted, textAlign: 'center', marginTop: 4 }}>
              2일 → 30분
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  )
}
