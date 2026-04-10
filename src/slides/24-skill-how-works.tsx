import { motion } from 'framer-motion'
import { staggerContainer, slideUp, terminalLine } from '../lib/animations'
import { ArrowRight } from 'lucide-react'
import SlideLayout, { DotPattern } from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { theme, gradients } from '../lib/theme'

const steps = [
  { vi: 'Kích hoạt', kr: '활성화', desc: { vi: 'Tin nhắn khớp từ khóa', kr: '키워드 매칭' } },
  { vi: 'Đọc', kr: '읽기', desc: { vi: 'Claude đọc SKILL.md', kr: 'SKILL.md 읽기' } },
  { vi: 'Thực thi', kr: '실행', desc: { vi: 'Làm theo hướng dẫn', kr: '지침에 따라 실행' } },
  { vi: 'Kết quả', kr: '결과', desc: { vi: 'Output nhất quán', kr: '일관된 출력' } },
]

export default function Slide24SkillHowWorks() {
  return (
    <SlideLayout background={gradients.subtle}>
      <DotPattern rows={4} cols={6} bottom={40} right={60} opacity={0.1} />

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
            {'>'}_&nbsp;skill-flow.sh
          </motion.div>

          <motion.h2
            variants={slideUp}
            style={{
              fontSize: 'clamp(26px, 3.2vw, 40px)',
              color: theme.colors.text,
              fontWeight: 800,
              fontFamily: theme.fonts.display,
              letterSpacing: '-0.02em',
              marginBottom: 48,
            }}
          >
            <BiText
              vi="Cách Skill hoạt động"
              kr="스킬의 작동 방식"
              krStyle={{ fontSize: '0.55em', marginTop: '0.35em', color: theme.colors.textMuted }}
            />
          </motion.h2>

          <motion.div variants={staggerContainer} className="flex items-start justify-between">
            {steps.map((step, i) => (
              <motion.div key={i} variants={terminalLine} className="flex items-center gap-4">
                <div className="flex flex-col items-center text-center" style={{ width: 190 }}>
                  {/* Step number badge */}
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 56,
                      height: 56,
                      border: `1px solid ${theme.colors.accentGlow}`,
                      borderRadius: 10,
                      background: theme.colors.accentDim,
                      color: theme.colors.accent,
                      fontSize: 'clamp(18px, 2vw, 24px)',
                      fontWeight: 800,
                      fontFamily: theme.fonts.mono,
                      marginBottom: 14,
                    }}
                  >
                    {i + 1}
                  </div>

                  {/* Step label bilingual */}
                  <BiText
                    vi={step.vi}
                    kr={step.kr}
                    viStyle={{
                      color: theme.colors.text,
                      fontSize: 'clamp(13px, 1.4vw, 17px)',
                      fontWeight: 700,
                      fontFamily: theme.fonts.display,
                      marginBottom: 6,
                    }}
                    krStyle={{ fontSize: '0.78em', color: theme.colors.textMuted, marginTop: '0.2em' }}
                  />

                  {/* Step desc bilingual */}
                  <BiText
                    vi={step.desc.vi}
                    kr={step.desc.kr}
                    viStyle={{
                      color: theme.colors.textSecondary,
                      fontSize: 'clamp(11px, 1.1vw, 14px)',
                      fontFamily: theme.fonts.body,
                      marginTop: 4,
                    }}
                    krStyle={{ fontSize: '0.78em', color: theme.colors.textMuted, marginTop: '0.2em' }}
                  />
                </div>

                {i < steps.length - 1 && (
                  <ArrowRight
                    style={{ color: theme.colors.accent, opacity: 0.5, flexShrink: 0 }}
                    size={20}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
