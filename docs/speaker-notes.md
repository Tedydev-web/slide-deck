# Speaker Notes — AI Agent Workshop (2026-04-10)

Bilingual VI-KR workshop, 48 slides, ~50 min target. First-person tech lead voice.

**Personas in audience:** Senior dev, Junior dev, Non-dev (Marketing/Design/HR), CTO, Security.  
**Ratio:** 60/40 dev/non-dev.

**KR pronunciation note:** Many KR lines already printed on slides — use them as cues. For tricky words, phonetic guide in `[...]`.

**Demo fallback protocol (slides 27–29):**
- If live demo fails → say "Xin lỗi, network/tool issue" and play pre-recorded fallback video
- Fallback videos: `public/assets/demo-{27,28,29}-fallback.mp4` (to be recorded by presenter)
- If no fallback video → pivot to next slide and say "tôi sẽ share recording sau workshop"

---

## Chapter 1 — Hạ Phòng Thủ (Slides 01–07) · ~8 min

### S01 — cold-open · 60s
- **Open:** "Tôi KHÔNG đến để bán AI cho các bạn. Workshop này là để nói thật về cái được, cái mất, và cái chưa ai nói."
- **Set tone:** dev-first, honest, not hype.
- **KR cue:** slide đã có "저는 AI를 팔러 온 게 아닙니다" — đọc chậm.
- **Transition:** "Trước khi bắt đầu, tôi muốn biết audience mình."

### S02 — survey-warmup · 45s
- **Action:** Ask for raw of hands on 3 questions. Participate — nod at responses, don't comment.
- **Read order:** Q1 → pause 3s → Q2 → pause → Q3.
- **Transition:** "OK, tôi thấy rồi. Giờ nói về nỗi sợ thật sự."

### S03 — eight-objections · 75s
- **Don't read all 8.** Point at 3-4 that match audience mix (security + senior + junior concerns most likely to land).
- **Line:** "Các nỗi sợ này đều hợp lý. Không phải FUD. Tôi sẽ giải quyết từng cái trong 48 slides tiếp theo."
- **Transition:** "Nhưng trước hết, hãy xem data."

### S04 — productivity-data · 60s
- **Lead number:** "+110% PR, +60% task completion — từ 10,000 devs ở 1,255 teams."
- **Source:** FAROS AI 2025 — repeat source name for credibility.
- **KR cue:** "파로스 AI 2025" [paroseu AI ichonisipo]
- **Caveat:** "Đây là một trong nhiều data sources. Slide 13 tôi sẽ nói về bias."
- **Transition:** "Nhưng cùng data đó có fact ngược."

### S05 — metr-slower · 60s
- **Lead:** "19% SLOWER — METR randomized controlled trial, senior devs với OSS work."
- **Frame:** "Đây là bằng chứng NHÂN QUẢ, không phải correlational như Faros."
- **Key insight:** "Tức là cùng data có productivity TĂNG và cũng có productivity GIẢM. Tại sao?"
- **Transition:** "Vấn đề không phải ở AI. Ở chỗ khác."

### S06 — review-bottleneck · 45s
- **Point at DataBar:** "+90% review time, +154% PR size. Code write nhanh, review chậm. Bottleneck dịch chuyển."
- **Quote:** đọc QuoteBlock chậm.
- **Transition:** "Nên câu hỏi đúng không phải 'code nhanh thế nào'..."

### S07 — summary-wrong-goal · 60s
- **Frame slide as summary of Ch1:** "Đây là chiến lược SAI. Chúng ta đo sai thứ."
- **Left column:** cần đo (xanh). **Right column:** đang đo (đỏ, nhìn xấu xí intentionally).
- **Key line:** "Goal không phải viết nhiều code. Goal là tạo nhiều giá trị."
- **Transition:** "Vậy goal thật sự là gì?"

---

## Chapter 2 — Philosophy + Reality (Slides 08–14a) · ~10 min

### S08 — core-thesis · 50s
- **Read slowly:** "Trình mình ở đâu, trình AI ở đó."
- **Pause for effect** 2 seconds after headline.
- **Explain:** "Same Claude Code, same Sonnet 4.5. 10 devs dùng → 10 kết quả khác nhau. Vì context + skill người khác nhau."
- **KR cue:** "당신의 실력이 AI의 실력입니다" [dangsinui silryeogi AI-ui silryeogimnida]
- **Transition:** "AI không tạo ra khả năng mới. Nó làm gì?"

### S09 — amplifier · 45s
- **Visual cue:** Good system → better. Bad system → worse. AI is multiplier, not creator.
- **Relate to audience:** "Nếu team chưa có process tốt, AI sẽ phóng đại bug, confusion, tech debt."
- **Transition:** "Nên câu hỏi không phải Chat vs Agentic..."

### S10 — three-level-spectrum · 75s
- **Key insight:** "Không phải binary. Là spectrum. L1 cho ai muốn dùng ít. L3 cho người đầu tư xây harness."
- **Don't rank publicly** — say "Cả 3 đều hợp lệ, tùy tình huống."
- **Senior-winning:** acknowledges skeptics who reject false dichotomies.
- **Transition:** "Nhưng 2025 có một thứ DỪNG hoạt động ở scale."

### S11 — vibe-coding-dead · 60s
- **Timeline walk:** Autocomplete (2021) → Chat (2023) → Vibe coding (2024) → Agentic (2025-2026).
- **Karpathy reference:** "Karpathy coined 'vibe coding' — nhưng chính Karpathy sau đó cảnh báo nó fail ở scale."
- **Transition:** "Nhưng đủ talk về tương lai. Câu hỏi CTO thật sự muốn hỏi là..."

### S12 — roi-cost-value · 90s ⚠️ CTO MOMENT
- **Lead with formula** — điểm vào công thức trên slide.
- **Concrete numbers:** "$200 Claude Max + $50-150 Codex/Cursor + $0-50 token = ~$250-350/dev/month."
- **Value side:** time saved × hourly rate.
- **Net:** "Plus column lớn hơn minus khi team biết xài. Nhỏ hơn khi team amateur."
- **CTO cue:** "Slide 42 tôi sẽ show pilot plan 90 ngày với kill criteria cụ thể."
- **Transition:** "Trước khi tin data, tôi muốn disclosure."

### S13 — data-bias-disclosure · 75s ⚠️ SKEPTIC-WINNER
- **Honest framing:** "Faros/Jellyfish là công ty bán AI tools. METR là academic nhỏ nhất."
- **Reddit/HN:** "Vocal minority — loud but biased."
- **Conclusion:** "Đây là data TỐT NHẤT hiện có. Không có gold standard. Tôi dùng và disclose bias."
- **Senior dev sẽ gật đầu ở slide này.** Nếu họ gật, you've won the room.
- **KR cue:** "데이터 편향 고백" [deiteo pyeonhyang gobaek]
- **Transition:** "Giờ câu hỏi junior sợ nhất."

### S14 — junior-ai-learning · 90s ⚠️ JUNIOR RELIEF
- **Lead:** "Junior dev sợ AI lấy job. Sự thật ngược lại."
- **Show comparison:** 12 tháng traditional → 3 tháng với AI.
- **CONDITION:** "NHƯNG phải hỏi 'WHY'. Không hỏi → AI phá hủy khả năng học."
- **Personal anecdote optional:** share one junior case từ team của bạn nếu có.
- **Transition:** "Ch3 tới đây có vẻ kỹ thuật — nhưng..."

### S14a — context-bridge · 60s ⚠️ NON-DEV BRIDGE (NEW)
- **Key purpose:** Keep non-dev audience engaged before Ch3 deep-dive.
- **Action:** Point at 4 role cards — say "Marketing có brand guide. HR có job spec. Design có design system. Dev có CLAUDE.md. Cùng nguyên lý."
- **Reassure:** "Nếu bạn không code, Ch3 tiếp theo sẽ có concepts technical — nhưng nguyên lý áp dụng cho bạn. Không cần hiểu code."
- **Transition:** "Bắt đầu với data thực tế."

---

## Chapter 3 — Context Engineering (Slides 15–21) · ~8 min ⚠️ NON-DEV FATIGUE ZONE

**Presenter reminder:** Non-dev có thể zone out ở đây. Mỗi slide ≤ 60s. Nhấn mạnh "nguyên lý này applies cho everyone" 2-3 lần trong chapter.

### S15 — jellyfish-pr-data · 45s
- **Lead:** "Jellyfish — 700 companies, 200k engineers, 20M PRs."
- **Point:** "Adoption → PR throughput doubled."
- **Transition:** "Nhưng tại sao AI work? Vì CONTEXT."

### S16 — context-concept · 45s
- **Definition slow-read:** "Context engineering — curating the right information."
- **Plain language:** "Input tốt → output tốt. Cho AI và cho người."
- **Transition:** "Context nằm trong một thứ gọi là..."

### S17 — context-window · 60s
- **Visual walk:** Chỉ từng segment — system, user, docs, etc.
- **Analogy for non-dev:** "Như brief marketing — có limit chữ, phải chọn thông tin quan trọng."
- **Transition:** "Có 7 loại context..."

### S18 — seven-components · 60s
- **Don't read all 7.** Pick 3 most relatable: System Prompt, Examples, Retrieved Docs.
- **Non-dev analogy:** "Giống như chuẩn bị brief cho agency — bạn gửi guidelines, examples, reference docs."
- **Transition:** "Một cách cụ thể để cung cấp context..."

### S19 — quality-equation · 45s
- **Key insight:** "Weak model + great context > strong model + no context."
- **This is persona-neutral.** Works for everyone.
- **Transition:** "Show các technique cụ thể..."

### S20 — few-shot · 60s
- **Explain:** "Show, don't tell. 3 examples → model học pattern."
- **Non-dev cue:** "Giống như train intern — show 3 ví dụ tốt, họ hiểu."
- **Transition:** "Nhưng có khi ví dụ không đủ — cần data mới."

### S21 — rag · 75s
- **Explain slow:** "RAG = Retrieval Augmented Generation. Lấy tài liệu liên quan, inject vào context."
- **Non-dev example:** "Marketing team có brand bible 50 pages? RAG nghĩa là AI tự tìm 2-3 page liên quan cho câu hỏi của bạn, thay vì đọc tất cả."
- **Transition:** "Context là nguyên liệu. Nhưng tools nào xài?"

---

## Chapter 4 — Harness Engineering (Slides 22–26) · ~6 min

### S22 — harness-evolution · 60s
- **Timeline:** Prompt Engineering → Context Engineering → Harness Engineering (2025-26).
- **Non-dev bridge:** "Harness = hệ thống. Giống như marketing automation platform."
- **Transition:** "Một building block của harness là Skill."

### S23 — skill-definition · 45s
- **Read terminal prompt** như dev: "cat SKILL.md"
- **Key:** "Skill = structured prompt + reusable."
- **Transition:** "Làm sao skill work?"

### S24 — skill-how-works · 60s
- **4-step walk:** Trigger → Read → Execute → Results.
- **Analogy:** "Giống như employee onboarding doc — newbie đọc doc, biết làm gì, ra outcome nhất quán."
- **Transition:** "Xem structure của SKILL.md..."

### S25 — skill-anatomy · 45s
- **Code walkthrough:** point at frontmatter (name, description), then instructions.
- **Don't deep-dive.** This is for devs who want spec.
- **Transition:** "Làm sao Claude biết skill nào dùng?"

### S26 — skill-trigger · 60s
- **Show dialogue example** on slide.
- **Explain keyword matching** — "description field có từ khóa → Claude tự kích hoạt."
- **Transition:** "Enough theory. Demo thời gian."

---

## Chapter 5 — Demos (Slides 27–29) · ~8 min ⚠️ LIVE DEMO RISK

**FALLBACK PROTOCOL:** If ANY demo fails, don't panic. Say "Network/tool issue, cho tôi switch sang recording" → play fallback video → continue.

### S27 — demo-dev-bug-fix · 3 min ⚠️ LIVE DEMO
- **Setup:** Prepared bug file + error log ready on laptop before workshop.
- **Show terminal:** run `claude fix "NullPointerException in auth.ts:45"` (hoặc bug tương tự).
- **Narrate steps:** Research → Plan → Implement.
- **Target:** 15-minute task, compressed to 3-min demo.
- **Outcome:** show tests passing.
- **Fallback:** `public/assets/demo-27-fallback.mp4` (PENDING — presenter needs to record).
- **Transition:** "Nhưng devs không phải audience duy nhất."

### S28 — demo-nondev-design · 2 min ⚠️ LIVE DEMO
- **Setup:** Figma file with design tokens pre-loaded.
- **Show:** Figma screenshot → Claude extracts tokens → output tokens.json + Tailwind config.
- **Target audience:** Non-dev designers.
- **Outcome:** before/after tokens.
- **Fallback:** `public/assets/demo-28-fallback.mp4` (PENDING).
- **Transition:** "Slide này show mixed — dev + non-dev."

### S29 — demo-mixed-claude-md · 2 min ⚠️ LIVE DEMO
- **Setup:** Same prompt, 2 projects — one with CLAUDE.md, one without.
- **Show:** Same question → 2 very different outputs.
- **Key line:** "Same AI. Same prompt. Different context → different results."
- **This is the thesis slide.** Nhấn mạnh.
- **Fallback:** `public/assets/demo-29-fallback.mp4` (PENDING).
- **Transition:** "Xong demo. Giờ nói về sự thật."

---

## Chapter 6 — Honest Truths (Slides 30–36) · ~8 min

### S30 — bad-vs-good · 60s
- **Show 2 columns:** bad context vs great context.
- **Key:** "Same question 'how do I fix this bug'. Output quality khác nhau 10x."
- **Transition:** "Nhưng AI có boundaries — thứ nó KHÔNG được làm."

### S31 — ai-boundaries · 60s
- **Read 3 boxes slow:** API keys, emails/calls, untrusted input.
- **Frame:** "Guardrails này cứng. Không negotiable."
- **KR cue:** "AI 경계선" [AI gyeonggyeseon]
- **Transition:** "Và một rủi ro ít ai nói..."

### S32 — skill-atrophy · 75s
- **Senior anxiety:** "Outsource thinking → kỹ năng teo."
- **Contrast:** "AI as mentor → hỏi WHY → học nhanh hơn."
- **Quote:** read QuoteBlock.
- **Transition:** "Biết limits → biết khi nào không dùng."

### S33 — when-not-to-use-ai · 90s
- **5 situations:** read each slow.
  - Auth/crypto/payment — security critical
  - Novel domain — không có data
  - DB migrations — irreversible
  - GDPR/HIPAA — compliance
  - Can't review — if you can't check, don't ship
- **Line:** "Use AI wisely, or not at all."
- **Skeptic approval moment.**
- **Transition:** "Data flow — security lead sẽ quan tâm."

### S34 — data-sandbox-security · 90s ⚠️ SECURITY MOMENT
- **Walk diagram:** Your code → Claude Code (local) → API → Response.
- **Anthropic policy:** "Không training từ API data — policy cứng."
- **Sandbox:** workspace-write, .env BLOCKED, network ask permission.
- **Add verbally (gap in slide):** "Audit logs available, governance partnership available."
- **Transition:** "Và 3 nguyên tắc guardrail..."

### S35 — guardrails · 60s
- **3 principles:** Least agency, Strong observability, Dual-LLM.
- **Explain Dual-LLM verbally:** "Một AI generate, một AI audit. 2 góc nhìn."
- **Transition:** "Sự thật cuối cùng về quality."

### S36 — hidden-quality-costs · 60s
- **Key:** "Output quality stable — NHƯNG review cost ẩn."
- **Data (caveat):** "Business Insider 2026 — có thể update. Nhưng pattern thật."
- **Frame:** "Quality không free. Ai đó phải pay."
- **Transition:** "Đủ honest truths. Giờ use cases cụ thể cho các role."

---

## Chapter 7 — Use Cases (Slides 37–41) · ~6 min ⚠️ PERSONA MOMENT

**Purpose:** Give every persona a "this is for me" moment.

### S37 — usecase-dev · 75s
- **Contrast:** "Chat person" vs "Workflow person".
- **Show workflow:** dev đọc context, prepare CLAUDE.md, agent chạy.
- **Time saving:** "2 days → 30 min (based on my team's refactoring workflow)."
- **Transition:** "QA also."

### S38 — usecase-qa · 60s
- **Frame:** "AI generates ~50 test cases. QA reviews + filters + ships."
- **Human accountability:** "AI candidate, QA owner."
- **Number caveat:** "Con số minh hoạ — phụ thuộc framework + PRD quality."
- **Transition:** "Design team."

### S39 — usecase-design · 60s
- **Concrete pain:** "Dev uses #3B82F6, designer wants #3A86F1. Argued for 2 days."
- **AI solution:** "Extract tokens from Figma → tokens.json → Tailwind. 15 min."
- **Caveat:** "Works with Figma + Tailwind stack. Your stack may differ."
- **Transition:** "Marketing."

### S40 — usecase-marketing · 60s
- **Walk pipeline:** script → storyboard → Veo 3.1 prompts → video draft.
- **Key:** "~4h to draft. Not final. Marketing team reviews + approves + iterates. Creative ownership stays with people."
- **Transition:** "HR."

### S41 — usecase-hr · 60s
- **Frame:** "80% admin tasks → AI does. 20% strategic → HR focuses."
- **Examples:** onboarding, salary benchmarking, survey analysis.
- **Reframe abstract:** "Strategic partner = more time for people, less time on forms."
- **Transition:** "Đã xem use cases. Giờ roll out."

---

## Chapter 8 — Rollout & Closing (Slides 42–47) · ~6 min

### S42 — pilot-rollout-90-day · 90s ⚠️ CTO MOMENT
- **Walk 4 phases:** Week 1-2 autocomplete → Week 3-4 chat → Month 2 agentic → Month 3 decide.
- **Month 3 highlight:** "ROI = hours saved ÷ hours invested. Kill if < 1.0 at day 90 → STOP."
- **Concrete number** — nhấn mạnh cho CTO.
- **Footer:** "Không phải 'AI everywhere'. Là 'AI đúng chỗ'."
- **Transition:** "Strategy is..."

### S43 — right-strategy · 60s
- **4 cards walk:** reduce review cost, boost testing, shorten feedback loop, ship right thing.
- **Frame:** "Business strategy. Apply to all personas."
- **Transition:** "Best practices khi dùng AI."

### S44 — best-practices · 60s
- **4 practices:** specs, examples, format, checklist.
- **Frame:** "Dùng như prompt rules. Giống code style guide."
- **Transition:** "Built-in vs custom tools."

### S45 — builtin-vs-custom · 45s
- **Show both columns.** Built-in for quick start. Custom for differentiation.
- **Plain language:** "Start built-in, graduate to custom khi xác định pain point của team."
- **Transition:** "Và metric quan trọng..."

### S46 — takeaway-metrics · 45s
- **Read 3 metrics:** 1× write, N+ reuse, minimize copy-paste.
- **Caveat:** "Reuse requires maintenance. Not free."
- **Transition:** "Close."

### S47 — closing-cta · 60s
- **Big pause.** Read slowly:
  - **"Xây harness. Đừng chỉ prompt."**
  - **"하네스를 구축하세요. 단순히 프롬프트하지 마세요."** [haneseureul guchukhaseyo. dansunhi peurompeuteu-haji maseyo]
- **Subtitle:** "Lợi thế không nằm ở tốc độ viết code — mà ở tốc độ biến code thành giá trị."
- **CTA:** "Giá trị > Số lượng."
- **Q&A:** "Câu hỏi? Tôi share link deck + speaker notes sau session."

---

## Post-Workshop Followups

- [ ] Share deck URL (build deployed to vercel/netlify)
- [ ] Share speaker notes for async reference
- [ ] Collect feedback form
- [ ] Record session if allowed → share async
- [ ] Follow up 1-on-1 with skeptics

## Timing Checklist (total ~55 min)

| Chapter | Slides | Target | Notes |
|---|---|---|---|
| Ch1 Hạ Phòng Thủ | 01-07 | 8 min | Don't rush S13 (skeptic moment coming Ch2) |
| Ch2 Philosophy+Reality | 08-14a | 10 min | S12/S13/S14 are PIVOTAL — spend time |
| Ch3 Context Eng | 15-21 | 8 min | Pace! Non-dev risk — monitor room |
| Ch4 Harness Eng | 22-26 | 6 min | Can compress if running behind |
| Ch5 Demos | 27-29 | 8 min | HARD TIMEBOX — 3+2+2 min max |
| Ch6 Honest Truths | 30-36 | 8 min | Skeptic wins here |
| Ch7 Use Cases | 37-41 | 6 min | 1 min each, hit every persona |
| Ch8 Rollout+Closing | 42-47 | 6 min | S42 for CTO, S47 slow close |
| **Total** | **48** | **~60 min** | +10 min Q&A = 70 min total |

## Emergency Cuts (if running 10+ min behind)

- Cut first: S20, S21 (techniques — can skip if Ch3 lost audience)
- Cut second: S44, S45 (best practices + built-in/custom — nice-to-have)
- Cut third: S46 (takeaway metrics — subsumed by S47)
- **NEVER cut:** S01, S08, S12, S13, S14, S14a, S27, S33, S34, S42, S47

## Pre-Workshop Checklist

- [ ] Record 3 fallback videos (S27, S28, S29) — 1-2 hour effort
- [ ] Native KR review for S01, S08, S12, S13, S14, S27, S33, S34, S42, S47
- [ ] Projector contrast test on actual venue — 5 min
- [ ] Build deck: `npm run build` → deploy static hosting
- [ ] Test keyboard navigation on presentation laptop
- [ ] Pretendard Korean font loads (check network)
- [ ] Disable macOS notifications during presentation
- [ ] Water + timer visible
