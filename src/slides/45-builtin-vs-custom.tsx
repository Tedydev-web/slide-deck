import { motion } from 'framer-motion'
import { staggerContainer, slideUp, terminalLine } from '../lib/animations'
import SlideLayout, { HLine } from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'

const builtIn = [
  { cmd: '/commit', desc: { vi: 'Tạo git commit message', kr: 'git 커밋 메시지 생성' } },
  { cmd: '/review-pr', desc: { vi: 'Review pull request', kr: '풀 리퀘스트 리뷰' } },
  { cmd: '/pdf', desc: { vi: 'Đọc và phân tích PDF', kr: 'PDF 읽기 및 분석' } },
]

const custom = [
  { cmd: '/slide-deck', desc: { vi: 'Tạo trình chiếu React', kr: 'React 슬라이드 생성' } },
  { cmd: '/app-screenshots', desc: { vi: 'Ảnh marketing iOS', kr: 'iOS 마케팅 스크린샷' } },
  { cmd: '/deploy-check', desc: { vi: 'Kiểm tra trước deploy', kr: '배포 전 체크' } },
]

export default function Slide45BuiltinVsCustom() {
  return (
    <SlideLayout background={gradients.subtle}>
      <HLine width={1} thickness={720} left={640} top={0} opacity={0.06} color={theme.colors.text} />

      <div
        className="w-full h-full flex flex-col justify-center"
        style={{ padding: '60px 80px' }}
      >
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          {/* Terminal prompt — design element */}
          <motion.div
            variants={terminalLine}
            style={{
              color: theme.colors.accent,
              fontSize: 'clamp(12px, 1.2vw, 15px)',
              fontFamily: theme.fonts.mono,
              marginBottom: 16,
              opacity: 0.8,
            }}
          >
            {'>'}_&nbsp;ls skills/
          </motion.div>

          <motion.h2
            variants={slideUp}
            style={{
              fontSize: 'clamp(26px, 3.2vw, 40px)',
              color: theme.colors.text,
              fontWeight: 800,
              fontFamily: theme.fonts.display,
              letterSpacing: '-0.02em',
              marginBottom: 40,
            }}
          >
            <BiText
              vi="Skill có sẵn vs Skill tự tạo"
              kr="내장 스킬 vs 커스텀 스킬"
              krStyle={{ fontSize: '0.55em', marginTop: '0.35em', color: theme.colors.textMuted }}
            />
          </motion.h2>

          <div className="grid grid-cols-2 gap-10">
            {/* Built-in column */}
            <motion.div variants={slideUp}>
              <div
                style={{
                  color: theme.colors.textMuted,
                  fontSize: 'clamp(13px, 1.4vw, 17px)',
                  fontFamily: theme.fonts.mono,
                  marginBottom: 20,
                }}
              >
                <BiText
                  vi="// Skill có sẵn"
                  kr="내장 스킬"
                  viStyle={{ color: theme.colors.textMuted }}
                  krStyle={{ fontSize: '0.78em', marginTop: '0.2em', color: theme.colors.textMuted }}
                />
              </div>
              {builtIn.map((item, i) => (
                <div key={i} style={{ lineHeight: 2.2 }}>
                  <BiText
                    vi={
                      <>
                        <span style={{ color: theme.colors.accent, fontFamily: theme.fonts.mono }}>
                          {item.cmd}
                        </span>
                        <span style={{ color: theme.colors.textSecondary, fontFamily: theme.fonts.body }}>
                          {' '}— {item.desc.vi}
                        </span>
                      </>
                    }
                    kr={item.desc.kr}
                    viStyle={{ fontSize: 'clamp(13px, 1.3vw, 16px)' }}
                    krStyle={{ fontSize: '0.72em', marginTop: '0.1em', color: theme.colors.textMuted, marginLeft: '0.5em' }}
                  />
                </div>
              ))}
            </motion.div>

            {/* Custom column */}
            <motion.div variants={slideUp}>
              <div
                style={{
                  color: theme.colors.accent,
                  fontSize: 'clamp(13px, 1.4vw, 17px)',
                  fontFamily: theme.fonts.mono,
                  marginBottom: 20,
                }}
              >
                <BiText
                  vi="// Skill tự tạo ✦"
                  kr="커스텀 스킬"
                  viStyle={{ color: theme.colors.accent }}
                  krStyle={{ fontSize: '0.78em', marginTop: '0.2em', color: theme.colors.textMuted }}
                />
              </div>
              {custom.map((item, i) => (
                <div key={i} style={{ lineHeight: 2.2 }}>
                  <BiText
                    vi={
                      <>
                        <span style={{ color: theme.colors.accent, fontFamily: theme.fonts.mono }}>
                          {item.cmd}
                        </span>
                        <span style={{ color: theme.colors.textSecondary, fontFamily: theme.fonts.body }}>
                          {' '}— {item.desc.vi}
                        </span>
                      </>
                    }
                    kr={item.desc.kr}
                    viStyle={{ fontSize: 'clamp(13px, 1.3vw, 16px)' }}
                    krStyle={{ fontSize: '0.72em', marginTop: '0.1em', color: theme.colors.textMuted, marginLeft: '0.5em' }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
