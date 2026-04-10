import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { BiText } from '../components/bi-text'
import { SlideSectionLabel } from '../components/slide-section-label'
import { fadeUp, staggerContainer } from '../lib/animations'
import { gradients, theme } from '../lib/theme'

const questions = [
  {
    vi: (
      <>
        Đã thử <span style={{ color: theme.colors.accent }}>Cursor / Antigravity / Claude Code / Codex</span> trong 3
        tháng qua?
      </>
    ),
    kr: '최근 3개월 안에 Cursor/Copilot/Claude Code를 써보신 분?'
  },
  {
    vi: (
      <>
        Kỳ vọng cao, thực tế… <span style={{ color: theme.colors.accent }}>thất vọng</span>?
      </>
    ),
    kr: '기대는 높았는데… 실망하셨나요?'
  },
  {
    vi: (
      <>
        Đã từng nói <span style={{ color: theme.colors.accent }}>'AI code ẩu, không dùng được'</span>?
      </>
    ),
    kr: "'AI 코드는 엉망이다'라고 말해본 적 있으신 분?"
  }
]

export default function Slide02SurveyWarmup() {
  return (
    <SlideLayout background={gradients.subtle}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px 100px'
        }}
      >
        <SlideSectionLabel label='KHẢO SÁT MỞ ĐẦU' labelKr='오프닝 서베이' />

        <motion.div
          variants={fadeUp}
          initial='hidden'
          animate='visible'
          custom={1}
          style={{ marginTop: 24, marginBottom: 48 }}
        >
          <BiText
            vi='Hãy giơ tay nếu…'
            kr='손을 들어 주세요…'
            viStyle={{
              fontFamily: theme.fonts.display,
              fontSize: 52,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: theme.colors.text
            }}
            krStyle={{ fontSize: '0.6em', marginTop: '0.4em' }}
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial='hidden'
          animate='visible'
          style={{ display: 'flex', flexDirection: 'column', gap: 32 }}
        >
          {questions.map((q, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 2}
              style={{ display: 'flex', alignItems: 'flex-start', gap: 28 }}
            >
              <div
                style={{
                  fontFamily: theme.fonts.mono,
                  fontSize: 48,
                  fontWeight: 700,
                  color: theme.colors.accent,
                  lineHeight: 1,
                  minWidth: 68,
                  paddingTop: 4
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <BiText
                vi={q.vi}
                kr={q.kr}
                viStyle={{
                  fontFamily: theme.fonts.body,
                  fontSize: 22,
                  fontWeight: 500,
                  lineHeight: 1.45,
                  color: theme.colors.text
                }}
                krStyle={{ fontSize: '0.78em', marginTop: '0.4em' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  )
}
