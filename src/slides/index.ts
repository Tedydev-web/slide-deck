import type { ComponentType } from 'react'

/* ============================================================
 * AI Agent Workshop Deck — 47 slides (v2, red-team approved)
 *
 * Chapter structure:
 *  Ch1 Hạ Phòng Thủ              01-07   (7 slides)
 *  Ch2 Core Philosophy            08-11   (4 slides)
 *  Ch2 Reality Checks (v2)        12-14   (3 slides)
 *  Ch3 Context Engineering        15-21   (7 slides)
 *  Ch4 Harness Engineering        22-26   (5 slides)
 *  Ch5 Demos (rebalanced)         27-29   (3 slides)
 *  Ch6 Honest Truths              30-36   (7 slides)
 *  Ch7 Cross-Dept Use Cases       37-41   (5 slides)
 *  Ch8 Rollout & Closing          42-47   (6 slides)
 * ============================================================ */

/* Ch1 Hạ Phòng Thủ */
import Slide01 from './01-cold-open'
import Slide02 from './02-survey-warmup'
import Slide03 from './03-eight-objections'
import Slide04 from './04-productivity-data'
import Slide05 from './05-metr-slower'
import Slide06 from './06-review-bottleneck'
import Slide07 from './07-summary-wrong-goal'

/* Ch2 Core Philosophy */
import Slide08 from './08-core-thesis'
import Slide09 from './09-amplifier'
import Slide10 from './10-three-level-spectrum'
import Slide11 from './11-vibe-coding-dead'

/* Ch2 Reality Checks (v2 red-team fixes) */
import Slide12 from './12-roi-cost-value'
import Slide13 from './13-data-bias-disclosure'
import Slide14 from './14-junior-ai-learning'
import Slide14aContextBridge from './14a-context-bridge'

/* Ch3 Context Engineering */
import Slide15 from './15-jellyfish-pr-data'
import Slide16 from './16-context-concept'
import Slide17 from './17-context-window'
import Slide18 from './18-seven-components'
import Slide19 from './19-quality-equation'
import Slide20 from './20-few-shot'
import Slide21 from './21-rag'

/* Ch4 Harness Engineering */
import Slide22 from './22-harness-evolution'
import Slide23 from './23-skill-definition'
import Slide24 from './24-skill-how-works'
import Slide25 from './25-skill-anatomy'
import Slide26 from './26-skill-trigger'

/* Ch5 Demos */
import Slide27 from './27-demo-dev-bug-fix'
import Slide28 from './28-demo-nondev-design'
import Slide29 from './29-demo-mixed-claude-md'

/* Ch6 Honest Truths */
import Slide30 from './30-bad-vs-good'
import Slide31 from './31-ai-boundaries'
import Slide32 from './32-skill-atrophy'
import Slide33 from './33-when-not-to-use-ai'
import Slide34 from './34-data-sandbox-security'
import Slide35 from './35-guardrails'
import Slide36 from './36-hidden-quality-costs'

/* Ch7 Cross-Dept Use Cases */
import Slide37 from './37-usecase-dev'
import Slide38 from './38-usecase-qa'
import Slide39 from './39-usecase-design'
import Slide40 from './40-usecase-marketing'
import Slide41 from './41-usecase-hr'

/* Ch8 Rollout & Closing */
import Slide42 from './42-pilot-rollout-90-day'
import Slide43 from './43-right-strategy'
import Slide44 from './44-best-practices'
import Slide45 from './45-builtin-vs-custom'
import Slide46 from './46-takeaway-metrics'
import Slide47 from './47-closing-cta'

export const slides: ComponentType[] = [
  Slide01, Slide02, Slide03, Slide04, Slide05, Slide06, Slide07,
  Slide08, Slide09, Slide10, Slide11,
  Slide12, Slide13, Slide14, Slide14aContextBridge,
  Slide15, Slide16, Slide17, Slide18, Slide19, Slide20, Slide21,
  Slide22, Slide23, Slide24, Slide25, Slide26,
  Slide27, Slide28, Slide29,
  Slide30, Slide31, Slide32, Slide33, Slide34, Slide35, Slide36,
  Slide37, Slide38, Slide39, Slide40, Slide41,
  Slide42, Slide43, Slide44, Slide45, Slide46, Slide47,
]

export const slideSlugs: string[] = [
  '01-cold-open', '02-survey-warmup', '03-eight-objections', '04-productivity-data', '05-metr-slower', '06-review-bottleneck', '07-summary-wrong-goal',
  '08-core-thesis', '09-amplifier', '10-three-level-spectrum', '11-vibe-coding-dead',
  '12-roi-cost-value', '13-data-bias-disclosure', '14-junior-ai-learning', '14a-context-bridge',
  '15-jellyfish-pr-data', '16-context-concept', '17-context-window', '18-seven-components', '19-quality-equation', '20-few-shot', '21-rag',
  '22-harness-evolution', '23-skill-definition', '24-skill-how-works', '25-skill-anatomy', '26-skill-trigger',
  '27-demo-dev-bug-fix', '28-demo-nondev-design', '29-demo-mixed-claude-md',
  '30-bad-vs-good', '31-ai-boundaries', '32-skill-atrophy', '33-when-not-to-use-ai', '34-data-sandbox-security', '35-guardrails', '36-hidden-quality-costs',
  '37-usecase-dev', '38-usecase-qa', '39-usecase-design', '40-usecase-marketing', '41-usecase-hr',
  '42-pilot-rollout-90-day', '43-right-strategy', '44-best-practices', '45-builtin-vs-custom', '46-takeaway-metrics', '47-closing-cta',
]
