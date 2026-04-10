# Speaker Notes — AI Agent Workshop (v3 — Rehearsal Ready, 2026-04-10)

Bilingual VI-KR workshop, **47 slides** (S20 few-shot cut), ~55 min target + 10 min Q&A.
First-person tech lead voice. Dev-first 60/40.

**Personas in audience:** Senior dev, Junior dev, Non-dev (Marketing/Design/HR), CTO, Security.
**KR pronunciation note:** KR lines printed on slides — use them as cues. Phonetic guide in `[...]`.

---

## 🧭 How to use this script

Every slide has the same template. Read the fields in this order when rehearsing:

| Field | Purpose |
|---|---|
| **Energy** 🔥/⚡/🌊 | High / Medium / Low — vocal intensity + body language |
| **Stance** | Where you physically stand (center / walk / lean-in / side) |
| **Audience is thinking** | The sentence in their head RIGHT NOW — address it |
| **Hook** | First line verbatim. Memorize it. |
| **Body** | Talking points. `MEMORY HOOK` = must be spoken verbatim |
| **Read the room** | If-then fork based on audience reaction |
| **Callback** | Reference to prior slide / objection (builds spine) |
| **Transition** | Exact line to next slide |
| **KR cue** | Korean line + phonetic + when to use |

**Golden rule:** Don't read the slide — narrate OVER it. Slide is backdrop.

---

## 📋 Quick Reference Table — 47 slides

| Ch | Slides | Duration | Energy arc | Critical markers |
|---|---|---|---|---|
| Ch1 Hạ Phòng Thủ | 01–07 | 8 min | 🔥→⚡→🔥 | S01 opener, S07 reframe twist |
| Ch2 Philosophy | 08–11 | 5 min | 🔥→🌊 | S08 core thesis (memorize) |
| Ch2b Reality | 12–14a | 6 min | 🔥→⚡ | ⚠️ S12 CTO, S13 skeptic, S14 junior, S14a bridge |
| Ch3 Context Eng | 15–19, 21 | 7 min | 🌊 (theory zone) | ⚠️ fatigue risk — see panel below |
| Ch4 Harness Eng | 22–26 | 6 min | 🌊→⚡ | Compress if behind |
| Ch5 Demos | 27–29 | 8 min | 🔥 peak | ⚠️ live demo risk — see fallback |
| Ch6 Honest Truths | 30–36 | 8 min | 🌊 serious | ⚠️ S33, S34 skeptic + security |
| Ch7 Use Cases | 37–41 | 6 min | ⚡ persona rotation | Give every persona a moment |
| Ch8 Closing | 42–47 | 6 min | 🔥 finale | ⚠️ S42 CTO, S47 slow close |
| **TOTAL** | **47** | **~55 min** | | + 10 min Q&A = **65 min** |

---

## 🧵 Callback Spine Tracker — Dialogue device

**Goal:** Audience feels the workshop is a **dialogue answering their objections**, not a monologue.

Use these 4 callback moments to weave S03's 8 objections as a spine:

| When | Slide | Time | Callback line |
|---|---|---|---|
| 1 | **S13** bias disclosure | ~18 min | *"Các bạn nhớ objection #2 ở S03 — 'Data không đáng tin'? Tôi đang trả lời nó ngay bây giờ. Đây là bias disclosure của chính tôi."* |
| 2 | **S29** CLAUDE.md demo | ~32 min | *"Objection #5 ở đầu — 'Show me it works'. Đây, same prompt, 2 context khác nhau."* |
| 3 | **S33** when-not-to-use | ~40 min | *"Objection #1 — 'AI nguy hiểm'. Đúng. Đây là 5 trường hợp KHÔNG dùng. Tôi đồng ý với các bạn."* |
| 4 | **S47** closing | ~55 min | *"8 objection lúc đầu. Cùng đếm lại. {pause} Bao nhiêu đã được trả lời? {đếm tay 1-2-3...}"* — visual recap nếu có thời gian |

**Side effect:** Skeptics feel heard. Senior devs gật đầu. CTO thấy critical thinking.

---

## 🇻🇳 VN Context — Data Presentation Frame

**Principle:** Audience VN (dev + non-dev) thường **dè dặt với Western research**. Đừng defend data khi bị push back — sẽ mất authority. Chỉ disclose source + bias, frame data như **signal, không phải truth**.

### Reusable framing cho mỗi foreign data point

Khi cite Faros / METR / Stack Overflow / Jellyfish / Business Insider:

1. **Name source tường minh** — *"FAROS AI 2025 cho số..."* (repeat tên)
2. **Acknowledge bias ngay** — *"Đây là data TỐT NHẤT hiện có. Không gold standard."*
3. **Defer to S13** — *"Slide 13 tôi sẽ nói đầy đủ về bias của các source này."*
4. **Frame như signal** — *"Đây là signal, không phải lời khai của Chúa."*

### ❌ DO NOT

- *"Western research cho thấy..."* → tạo feeling us-vs-them, audience defensive
- Defend data khi bị pushback (*"Nhưng paper này được peer-reviewed!"*) → lost authority
- Present foreign data as gospel (*"Fact là..."*) → dev VN sẽ question ngay

### ✅ DO

- Acknowledge skepticism **proactively** — *"Tôi biết các bạn nghi data nước ngoài. Tôi cũng vậy."*
- Disclose bias **early** — đừng để dồn xuống S13 mới nói, mỗi data point 1 câu caveat
- Frame as **signal** — *"Đây là 1 trong nhiều signals. Tôi sẽ show signal ngược ở slide sau."*
- **Cite Goonie + VN sources song song** khi có — tạo cân bằng perspective
- **Invite pushback** — *"Nếu các bạn có data khác, tôi muốn nghe — Q&A cuối workshop."*

### Which slides need this frame

| Slide | Foreign data | Framing cue |
|---|---|---|
| S03 | Stack Overflow 2025 (footer) | "46% dev VN/Global không tin — chính chỗ workshop này sẽ về" |
| S04 | Faros +110% | "FAROS 2025 là 1 signal. METR slide sau là signal ngược." |
| S05 | METR 19% slower | "Đây là bằng chứng nhân quả, nhưng N = 16 senior OSS. Edge case, không phải global truth." |
| S06 | Review bottleneck data | "Bottleneck shift pattern, không phải universal number." |
| S15 | Jellyfish 20M PRs | "N lớn = signal mạnh. Nhưng Jellyfish bán tool, disclose ở S13." |
| S36 | Business Insider 2026 | "Data có thể update. Pattern thật." |

**Tone tổng thể:** Humble, self-critical, không bảo vệ data. Audience VN respect người tự disclose hơn người defend cứng.

---

## 🚨 THEORY ZONE ENTRY — READ BEFORE S15

Sắp vào **6 slide theory liên tiếp** (S15, S16, S17, S18, S19, S21). Đây là **ĐIỂM MỆT NHẤT DECK** — non-dev sẽ zone out nếu speaker không chủ động lift energy.

### BEFORE entering (transition S14a → S15):
- **Drink water visibly** — resets audience attention span
- **Move**: từ center stage → side (physical cue "chế độ mới")
- **Vocal tone**: slightly faster, sharper, shorter sentences
- **Announce tường minh**: *"Chuẩn bị 6 phút theory. Payoff ở demo S27 sẽ đáng. Hold on."*

### DURING theory zone:
- **Eye contact rotation**: 3 audience members (1 per 2 slides) — tránh staring screen
- **Short sentences**. NO run-on. If you hear yourself saying "và", cut and restart.
- **1 interaction moment** at S18: *"Ai ở đây đã từng copy-paste cả file dài vào ChatGPT? {raise hand} Các bạn vừa làm RAG thủ công đấy."*
- **Pace target**: S15–S19 mỗi slide 45s (không 60s), S21 45s = **~4.5 phút nếu tight**

### EXIT theory zone at S21:
- **Voice drops to serious** (vocal pitch lower)
- **Stand still** (stop pacing)
- **Line**: *"Chấm dứt theory. Giờ xem nó hoạt động."*
- **Walk to center** → S22 harness evolution

**If you hear silence at S18** (dead room) → skip to interaction moment IMMEDIATELY, don't wait.

---

## Chapter 1 — Hạ Phòng Thủ (Slides 01–07) · ~8 min

**Arc position:** Act 1 — Break audience defense. Goal: họ hạ guard, sẵn sàng nghe.

### S01 — cold-open · 60s 🔥 OPENING
**Energy:** 🔥 high · **Stance:** center, body still, eye contact sweep
**Audience is thinking:** *"Ông này sắp bán AI cho mình rồi — chuẩn bị phản pháo."*

**Hook:** *"Tôi KHÔNG đến để bán AI cho các bạn."* [pause 3s] [vocal: slow, firm]

**Body:**
- Workshop này là để nói thật về cái được, cái mất, và cái chưa ai nói
- Set tone: dev-first, honest, not hype
- **MEMORY HOOK:** *"dùng AI sai ở đâu, và workflow nào mới đáng để tin"*

**Read the room:**
- Gật đầu → *"Tốt, vậy bắt đầu."*
- Cross arms / cảnh giác → *"Tôi biết các bạn nghi ngờ — đó là lý do tôi ở đây."*

**KR cue:** *"저는 AI를 팔러 온 게 아닙니다"* [jeoneun AI-reul palleo on ge animnida] — đọc chậm, sau VI 1 beat

**Transition:** *"Trước khi bắt đầu, tôi muốn biết audience mình."* [walk 2 steps right → gesture toward audience]

---

### S02 — survey-warmup · 45s ⚡
**Energy:** ⚡ medium · **Stance:** side of stage, facing audience
**Audience is thinking:** *"Okay, có interaction, không phải bài giảng thuần."*

**Hook:** *"3 câu hỏi. Giơ tay thẳng, không ngại."*

**Body:**
- Q1 → pause 3s → watch hands → nod, không comment
- Q2 → pause 3s → same
- Q3 → pause 3s → same
- **MEMORY HOOK:** Don't say "wow nhiều tay quá" — chỉ nod và move on

**Read the room:**
- Nhiều tay → *"Tốt, nhiều người đã dùng rồi."*
- Ít tay → *"Okay, đa số chưa — workshop này cho các bạn đấy."*

**Transition:** *"OK, tôi thấy rồi. Giờ nói về nỗi sợ thật sự."* [walk back center]

---

### S03 — eight-objections · 75s ⚡ ⚠️ ANCHOR SLIDE
**Energy:** ⚡ medium · **Stance:** center, pointing at screen
**Audience is thinking:** *"Có, tôi có đúng những nỗi sợ đó."*

**Hook:** *"Tôi đã hỏi 50+ dev và non-dev về nỗi sợ AI. Đây là 8 nỗi sợ top."*

**Body:**
- **Don't read all 8.** Chỉ point at 3-4 cái khớp audience mix
- Ưu tiên: security + senior skeptic + junior "lấy job"
- **MEMORY HOOK:** *"Các nỗi sợ này đều hợp lý. Không phải FUD."*
- **Line kết:** *"Tôi sẽ giải quyết từng cái trong 47 slide tiếp theo."*

**Anchor note:** Nhớ 8 objection để **callback ở S13, S29, S33, S47**. 4 điểm callback = spine của workshop.

**Transition:** *"Nhưng trước hết, hãy xem data."* [walk left → switch to data mode]

---

### S04 — productivity-data · 60s ⚡
**Energy:** ⚡ medium · **Stance:** center
**Audience is thinking:** *"OK data, nhưng data của ai? Cherry-pick không?"*

**Hook:** *"+110% PR, +60% task completion. Từ 10,000 dev ở 1,255 team."*

**Body:**
- Source tường minh: **FAROS AI 2025** — repeat name cho credibility
- **Caveat ngay lập tức**: *"Đây là một trong nhiều sources. Slide 13 tôi sẽ nói về bias."*
- **MEMORY HOOK:** *"Đây là data TỐT NHẤT hiện có — nhưng không gold standard"*

**KR cue:** *"파로스 AI 2025"* [paroseu AI icheonisipo] — source name bilingual

**Transition:** *"Nhưng cùng data đó có fact ngược."* [pause, then pivot]

---

### S05 — metr-slower · 60s 🔥 CONTROVERSIAL
**Energy:** 🔥 high — contrarian moment · **Stance:** center, lean-in
**Audience is thinking:** *"Slower? Chờ đã."*

**Hook:** *"19% SLOWER."* [pause 3s — let it sink]

**Body:**
- METR — randomized controlled trial, **senior devs với OSS**
- Frame: *"Bằng chứng NHÂN QUẢ, không phải correlational như Faros."*
- **MEMORY HOOK:** *"Cùng data có productivity TĂNG và cũng có productivity GIẢM. Tại sao?"*

**Read the room:**
- Shocked → *"Đúng, tôi cũng shocked lần đầu đọc."*
- Skeptic → *"METR paper public, link ở speaker notes."*

**Transition:** *"Vấn đề không phải ở AI. Ở chỗ khác."* [pause → S06]

---

### S06 — review-bottleneck · 45s ⚡
**Energy:** ⚡ medium · **Stance:** center, pointing DataBar
**Audience is thinking:** *"Bottleneck dịch chuyển — tôi hiểu ngay."*

**Hook:** *"+90% review time. +154% PR size."*

**Body:**
- Point at DataBar visual
- *"Code write nhanh. Review chậm. Bottleneck dịch chuyển."*
- **MEMORY HOOK:** *"AI không xoá bottleneck — AI dịch chuyển nó."*
- Đọc QuoteBlock chậm

**Transition:** *"Nên câu hỏi đúng không phải 'code nhanh thế nào'..."*

---

### S07 — summary-wrong-goal · 60s 🔥 REFRAME TWIST
**Energy:** 🔥 high · **Stance:** center, firm
**Audience is thinking:** *"Ah — wrong goal. Reframe moment."*

**Hook:** *"Đây là chiến lược SAI. Chúng ta đo sai thứ."*

**Body:**
- **Left column:** cần đo (xanh) — đọc 2-3 items
- **Right column:** đang đo (đỏ, xấu xí intentionally) — đọc sarcastically
- **MEMORY HOOK:** *"Goal không phải viết nhiều code. Goal là tạo nhiều giá trị."*

**Transition:** *"Vậy goal thật sự là gì?"* [pause → S08 big reveal]

---

## Chapter 2 — Philosophy + Reality (Slides 08–14a) · ~11 min

**Arc position:** Act 2 — State thesis. Then stress-test against CTO/skeptic/junior persona.

### S08 — core-thesis · 50s 🔥🔥 MOST IMPORTANT SLIDE
**Energy:** 🔥🔥 PEAK · **Stance:** dead center, body still, full stop
**Audience is thinking:** *"OK, give me the thesis."*

**Hook:** *"Trình mình ở đâu, trình AI ở đó."* [pause 3s — DO NOT rush]

**Body:**
- **MEMORY HOOK (must be verbatim):** *"Trình mình ở đâu, trình AI ở đó."*
- Explain: *"Same Claude Code, same Sonnet 4.5. 10 dev dùng → 10 kết quả khác nhau. Vì context + skill người khác nhau."*
- This is the THESIS — cả workshop chứng minh câu này

**Read the room:**
- Quiet room → tốt, họ đang nghĩ
- Nod → *"Đúng — đó là lý do tôi làm workshop này."*

**KR cue:** *"당신의 실력이 AI의 실력입니다"* [dangsinui silryeogi AI-ui silryeogimnida] — dramatic, pause after

**Transition:** *"AI không tạo ra khả năng mới. Nó làm gì?"*

---

### S09 — amplifier · 45s ⚡
**Energy:** ⚡ medium · **Stance:** center, use hands to show "multiply" gesture
**Audience is thinking:** *"Amplifier vs creator — nuance."*

**Hook:** *"AI là amplifier, không phải creator."*

**Body:**
- Good system → better. Bad system → worse.
- **MEMORY HOOK:** *"Nếu team chưa có process tốt, AI sẽ phóng đại bug, confusion, tech debt."*
- Relate to audience: *"Bạn có process code review không? AI sẽ lộ ngay."*

**Transition:** *"Nên câu hỏi không phải Chat vs Agentic..."*

---

### S10 — three-level-spectrum · 75s 🌊
**Energy:** 🌊 low — explanation mode · **Stance:** center, calm
**Audience is thinking:** *"Spectrum không binary — đúng."*

**Hook:** *"Không phải Chat vs Agentic. Là spectrum."*

**Body:**
- L1 (cho người dùng ít) → L2 (daily use) → L3 (harness builder)
- **Don't rank publicly** — *"Cả 3 đều hợp lệ, tùy tình huống."*
- **MEMORY HOOK:** *"Senior reject false dichotomies. Đây là spectrum."*

**Transition:** *"Nhưng 2025 có một thứ DỪNG hoạt động ở scale."*

---

### S11 — vibe-coding-dead · 75s ⚡ ⚠️ DEV REFRAME MOMENT
**Energy:** ⚡ medium → sharper · **Stance:** center, timeline pointing, then stand still for Goonie quote
**Audience is thinking (dev):** *"Vibe coding? Tôi ghét nó — prove me wrong."*
**Audience is thinking (non-dev):** *"Vibe coding là gì?"*

**Hook:** *"Trước hết, định nghĩa cho chuẩn. 'Vibe coding' đã bị hiểu sai."* [pause 2s]

**Body:**
- **Karpathy origin (historical fact, Feb 2025):** *"Andrej Karpathy đặt tên. Ý gốc: 'accept all, ít đọc diff, sửa lỗi bằng cách quăng lỗi ngược cho AI'. Cho **prototype vui, low-stakes**. Không phải production."* [Karpathy là người đặt tên — fact, không phải authority endorsement]
- **Reality gap:** *"Nhưng người ta hiểu sai. Tưởng 'build được demo = build được product'. Đó là ảo tưởng."*
- **Goonie reframe (verbatim):** *"Đừng thả rông AI. Kiểm soát tụi nó. AI không phải đũa thần."* — trích Goonie, bài "2026 — Here we go!"
- **Critical distinction:** *"Ghét không phải ghét AI. Ghét là ghét **vô trách nhiệm với code của mình**."*
- **MEMORY HOOK (verbatim):** *"Vấn đề không phải AI viết code. Vấn đề là con người ký tên vào thứ mình không hiểu."*

**Read the room:**
- Senior dev nod → *"Đúng, tôi biết các bạn phân biệt được. Đây là thứ workshop này sẽ về."*
- Defensive → *"Tôi không nói các bạn phải dùng AI. Chỉ nói, nếu dùng — kiểm soát cho đúng."*

**Quote emphasis:** đọc Goonie quote **chậm, dứt khoát**, sau VI 1 beat rồi KR. Đây là câu Goonie viết cho dev VN — dùng giọng "anh em với nhau" không phải "giảng viên".

**KR cue:** *"오해된 정의"* [ohaedoen jeongui] — at slide title

**Transition:** *"Nhưng đủ talk định nghĩa. Câu hỏi CTO thật sự muốn hỏi là..."* [walk to center]

---

### S12 — roi-cost-value · 90s 🔥 ⚠️ CTO MOMENT
**Energy:** 🔥 high · **Stance:** center, point at formula
**Audience is thinking:** *"Cost bao nhiêu? ROI có thật không?"*

**Hook:** *"$250-350/dev/month. Value > cost khi nào?"*

**Body:**
- **Lead with formula** — điểm vào công thức trên slide
- **Concrete numbers**: *"$200 Claude Max + $50-150 Codex/Cursor + $0-50 token"*
- **Value side**: time saved × hourly rate
- **MEMORY HOOK:** *"Plus column lớn hơn minus khi team biết xài. Nhỏ hơn khi team amateur."*
- **CTO cue**: *"Slide 42 tôi sẽ show pilot plan 90 ngày với kill criteria cụ thể."*

**Read the room:**
- CTO gật → tốt, note them mentally cho S42
- CTO skeptical → *"Pilot 90 ngày = $750-1000/dev. Rẻ hơn 1 tháng junior hire."*

**Transition:** *"Trước khi tin data, tôi muốn disclosure."*

---

### S13 — data-bias-disclosure · 75s 🔥 ⚠️ SKEPTIC-WINNER · CALLBACK #1
**Energy:** 🔥 high · **Stance:** center, serious
**Audience is thinking:** *"Là ông sẽ admit bias? Hoặc spin?"*

**Hook:** *"Trước khi tin data tôi vừa show, tôi phải admit cái mình không biết."*

**Body:**
- **🧵 CALLBACK #1:** *"Các bạn nhớ objection #2 ở S03 — 'Data không đáng tin'? Tôi đang trả lời nó ngay bây giờ."*
- **Honest framing:** *"Faros/Jellyfish là công ty bán AI tools. METR là academic, nhỏ nhất."*
- **Reddit/HN:** *"Vocal minority — loud but biased."*
- **MEMORY HOOK:** *"Đây là data TỐT NHẤT hiện có. Không có gold standard. Tôi dùng và disclose bias."*

**Read the room:**
- **Senior dev sẽ gật đầu ở slide này. Nếu họ gật — you've won the room.**
- Arms uncross → breakthrough moment, continue confident

**KR cue:** *"데이터 편향 고백"* [deiteo pyeonhyang gobaek] — use at "disclosure"

**Transition:** *"Giờ câu hỏi junior sợ nhất."* [shift tone warmer]

---

### S14 — junior-ai-learning · 90s ⚡ ⚠️ JUNIOR RELIEF · REFRAME #6
**Energy:** ⚡ medium — warm, reassuring · **Stance:** lean toward junior section if visible
**Audience is thinking (junior):** *"AI sẽ lấy job tôi. Tôi không có tương lai."*
**Audience is thinking (senior):** *"Junior phải học cách nào mới?"*

**Hook:** *"Junior dev sợ AI lấy job. Sự thật ngược lại."*

**Body:**
- Show comparison: 12 tháng traditional → 3 tháng với AI
- **CONDITION — emphasize hard:** *"NHƯNG phải hỏi 'WHY'. Không hỏi → AI phá hủy khả năng học."*
- **🎯 REFRAME #6 (verbatim):** *"AI không lấy đường sống junior. AI **đổi** đường. Junior nào sớm master AI tools + giữ nền tảng để phản biện AI → lợi thế cạnh tranh lớn."*
- **MEMORY HOOK:** *"AI as mentor = accelerate. AI as shortcut = atrophy."*
- Personal anecdote **optional**: share 1 junior case từ team của bạn nếu có

**Read the room:**
- Junior nhìn xuống → họ sợ. *"Bạn không hết đường đâu. Chỉ là đường khác. Hỏi WHY là kỹ năng mới."*
- Junior gật → tốt.
- Senior theo dõi junior → *"Senior ở đây: hãy dạy junior hỏi WHY. Đó là mentor value mới."*

**Transition:** *"Ch3 tới đây có vẻ kỹ thuật — nhưng..."*

---

### S14a — context-bridge · 60s 🌊 ⚠️ NON-DEV BRIDGE
**Energy:** 🌊 low — calm bridge · **Stance:** center, speaking to whole room
**Audience is thinking (non-dev):** *"3 chương tiếp theo technical? Tôi zone out giờ?"*

**Hook:** *"Nếu bạn không code, đừng rời ghế. Ch3 sắp tới áp dụng cho cả bạn."*

**Body:**
- Point at 4 role cards: *"Marketing có brand guide. HR có job spec. Design có design system. Dev có CLAUDE.md. Cùng nguyên lý."*
- **MEMORY HOOK:** *"Context = brief cho AI. Giống như brief cho agency, intern, freelancer."*
- *"Không cần hiểu code. Chỉ cần hiểu nguyên lý 'cho AI đủ context'."*

**Transition:** *"Bắt đầu với data thực tế."* [walk to side → **🚨 THEORY ZONE ENTRY panel now applies**]

---

## Chapter 3 — Context Engineering (Slides 15, 16, 17, 18, 19, 21) · ~7 min 🚨 THEORY ZONE

**Arc position:** Act 3a — Theory foundation. **Read THEORY ZONE ENTRY panel above before entering.**

> **🚨 Reminder:** Eye contact rotation. Short sentences. Interaction moment at S18. Exit strong at S21.

### S15 — jellyfish-pr-data · 45s 🌊
**Energy:** 🌊 low — but **ACTIVE body language** to counter · **Stance:** walking slowly
**Audience is thinking:** *"More data. How long until demo?"*

**Hook:** *"Jellyfish — 700 công ty, 200k engineer, 20 triệu PR."*

**Body:**
- *"Adoption → PR throughput doubled."*
- **MEMORY HOOK:** *"N = 20 triệu. Không phải cherry-pick."*

**Transition:** *"Nhưng tại sao AI work? Vì CONTEXT."* [short, sharp]

---

### S16 — context-concept · 45s 🌊
**Energy:** 🌊 low · **Stance:** center
**Audience is thinking:** *"Context — buzzword. Give me substance."*

**Hook:** *"Context engineering = curating the right information."* [slow read]

**Body:**
- **Plain language:** *"Input tốt → output tốt. Cho AI và cho người."*
- **MEMORY HOOK:** *"Context > Prompt. Context > Model."*

**Transition:** *"Context nằm trong một thứ gọi là..."*

---

### S17 — context-window · 60s 🌊
**Energy:** 🌊 low · **Stance:** walk slowly, pointing segments
**Audience is thinking:** *"OK architecture. Next."*

**Hook:** *"Context window — giới hạn AI được đọc trong 1 lần."*

**Body:**
- Visual walk: system, user, docs, tools — chỉ từng segment
- **Non-dev analogy:** *"Như brief marketing — có limit chữ, phải chọn thông tin quan trọng."*
- **MEMORY HOOK:** *"Context limited. Chọn đúng thứ quan trọng."*

**Transition:** *"Có 7 loại context..."*

---

### S18 — seven-components · 60s 🌊 ⚡ INTERACTION MOMENT
**Energy:** ⚡ medium (lift here) · **Stance:** step forward, engage
**Audience is thinking:** *"7 things to remember. Overwhelm."*

**Hook:** *"7 thành phần của context. Tôi sẽ chỉ đọc 3."*

**Body:**
- **Don't read all 7.** Pick 3 most relatable: System Prompt, Examples, Retrieved Docs
- **Verbal bridge cho few-shot (S20 cut):** *"Component #3 là few-shot — show bằng 3 ví dụ, model học pattern. Skip detail, sang RAG."*
- **Non-dev analogy:** *"Giống chuẩn bị brief cho agency — bạn gửi guidelines, examples, reference docs."*
- **🎯 INTERACTION MOMENT:** *"Ai ở đây đã copy-paste cả file dài vào ChatGPT? {raise hand} Các bạn vừa làm RAG thủ công đấy."* → Pause for reaction.
- **MEMORY HOOK:** *"Context = 7 ingredients. Chọn đúng 3-4 cho task."*

**Read the room:**
- Hands raised → *"Perfect. Slide tới tôi sẽ show cách tự động hoá."*
- No hands → *"Chưa ai? OK, bạn sắp thấy kỹ thuật này làm gì."*

**Transition:** *"Một cách cụ thể để cung cấp context..."*

---

### S19 — quality-equation · 45s ⚡
**Energy:** ⚡ medium — pivotal insight · **Stance:** center, firm
**Audience is thinking:** *"Equation — oh, formula."*

**Hook:** *"Weak model + great context > strong model + no context."*

**Body:**
- **MEMORY HOOK:** *"Great context > great model. Persona-neutral, works for everyone."*
- **Non-dev translation:** *"Freelancer giỏi nhất thế giới nhưng không hiểu brand bạn → output tệ. Freelancer trung bình + brief tốt → output tốt."*

**Transition:** *"Show các technique cụ thể..."* [skip S20, go to S21]

---

### S21 — rag · 45s ⚡ 🧵 EXIT THEORY ZONE
**Energy:** ⚡ medium → rising · **Stance:** walk back to center (exit signal)
**Audience is thinking:** *"RAG — I've heard this word."*

**Hook:** *"Bỏ qua few-shot detail — giờ là RAG, kỹ thuật chính cho CLAUDE.md."*

**Body:**
- **Explain slow:** *"RAG = Retrieval Augmented Generation. Lấy tài liệu liên quan, inject vào context."*
- **Non-dev example:** *"Marketing team có brand bible 50 trang? RAG nghĩa là AI tự tìm 2-3 trang liên quan cho câu hỏi của bạn, thay vì đọc tất cả."*
- **MEMORY HOOK:** *"RAG = tự động tìm đúng doc, đúng lúc, đúng context."*
- **🚨 EXIT THEORY ZONE line:** *"Chấm dứt theory. Giờ xem nó hoạt động."* [stand still, serious tone]

**Transition:** *"Context là nguyên liệu. Nhưng tools nào xài?"* [walk center → Ch4]

---

## Chapter 4 — Harness Engineering (Slides 22–26) · ~6 min

**Arc position:** Act 3b — Harness concept. Compress if behind schedule.

### S22 — harness-evolution · 60s ⚡
**Energy:** ⚡ medium · **Stance:** center
**Audience is thinking:** *"Another timeline?"*

**Hook:** *"Prompt Eng → Context Eng → Harness Eng (2025-26)."*

**Body:**
- *"Harness = hệ thống quanh AI, không chỉ là prompt."*
- **Non-dev bridge:** *"Harness = marketing automation platform, HR workflow system — cùng ý tưởng."*
- **MEMORY HOOK:** *"Prompt → tactic. Harness → system."*

**Transition:** *"Một building block của harness là Skill."*

---

### S23 — skill-definition · 45s 🌊
**Energy:** 🌊 low · **Stance:** center, pointing code block
**Audience is thinking:** *"A skill. OK."*

**Hook:** Read terminal prompt như dev: *"cat SKILL.md"*

**Body:**
- *"Skill = 1 file markdown, cấu trúc + tái sử dụng được."*
- **MEMORY HOOK:** *"Skill = structured prompt + reusable. Không magic."*

**Transition:** *"Làm sao skill work?"*

---

### S24 — skill-how-works · 60s 🌊
**Energy:** 🌊 low · **Stance:** center, walking through 4 steps
**Audience is thinking:** *"4-step flow. Got it."*

**Hook:** *"4 bước: Trigger → Read → Execute → Result."*

**Body:**
- **Analogy:** *"Giống employee onboarding doc — newbie đọc doc, biết làm gì, ra outcome nhất quán."*
- **MEMORY HOOK:** *"Skill = automate know-how."*

**Transition:** *"Xem structure của SKILL.md..."*

---

### S25 — skill-anatomy · 45s 🌊
**Energy:** 🌊 low · **Stance:** center
**Audience is thinking (dev):** *"Ah code. I get it."*
**Audience is thinking (non-dev):** *"YAML — what?"*

**Hook:** *"Code walkthrough: frontmatter + hướng dẫn. Chỉ là markdown."*

**Body:**
- Point at frontmatter: `name`, `description` (trigger keywords)
- **Don't deep-dive** — this is for devs who want spec
- Non-dev reassurance: *"Đừng lo — bạn không cần đọc. Dev team sẽ viết."*
- **MEMORY HOOK:** *"Skill anatomy = YAML + markdown. Đơn giản."*

**Transition:** *"Làm sao Claude biết skill nào dùng?"*

---

### S26 — skill-trigger · 60s ⚡
**Energy:** ⚡ medium · **Stance:** center, pointing dialogue
**Audience is thinking:** *"Keyword matching — like hashtags?"*

**Hook:** *"Claude match description với message của bạn."*

**Body:**
- Show dialogue example trên slide
- *"description field có từ khóa → Claude tự kích hoạt."*
- Show 2 example: `/slide-deck` + `/ck:cook`
- **MEMORY HOOK:** *"Skill trigger = keyword match. Như search engine cho skill."*

**Transition:** *"Enough theory. Demo thời gian."* [**energy shift here** — walk to center, stop, deep breath]

---

## Chapter 5 — Demos (Slides 27–29) · ~8 min ⚠️ LIVE DEMO RISK · PEAK ENERGY

**Arc position:** Act 4 — PAYOFF. Theory → proof. **This is the climax. Nail it.**

> **FALLBACK PROTOCOL:** If ANY demo fails, don't panic. Say *"Network/tool issue, cho tôi switch sang recording"* → play fallback video → continue.
> Fallback videos: `public/assets/demo-{27,28,29}-fallback.mp4` (see `docs/demo-recording-script.md`).
> If no fallback video → pivot to next slide, say *"tôi sẽ share recording sau workshop"*.

### S27 — demo-dev-bug-fix · 3 min 🔥🔥 ⚠️ LIVE DEMO
**Energy:** 🔥🔥 peak · **Stance:** at laptop, back to audience only during typing
**Audience is thinking:** *"Show me. Real or marketing?"*

**Hook:** *"Bug report lúc nửa đêm. 15 phút để fix. Bắt đầu."*

**Body:**
- **Setup:** Bug file + error log đã prepared on laptop PRE-workshop
- **Show terminal:** run `/ck:fix "NullPointerException in auth.ts:45"`
- **Narrate steps**: Research → Plan → Implement. Speak EACH step as Claude does it.
- **Target:** 15-minute task, compressed to 3-min demo
- **Outcome:** tests passing (12/12 ✓)
- **MEMORY HOOK:** *"Workflow > Chat. 3 bước thay vì 3 giờ trial-error."*

**Read the room:**
- Dev lean forward → won attention
- Confused → *"Tôi sẽ slow down — đây là prompt, đây là output."*

**Fallback:** `public/assets/demo-27-fallback.mp4` — play if live fails

**Transition:** *"Nhưng dev không phải audience duy nhất."* [turn to audience]

---

### S28 — demo-nondev-design · 2 min 🔥 ⚠️ LIVE DEMO
**Energy:** 🔥 high · **Stance:** at laptop, turn to audience between steps
**Audience is thinking (non-dev):** *"This is for me?"*

**Hook:** *"Designer post Figma. Dev dùng sai màu. Argued 20 phút. Fix này."*

**Body:**
- **Setup:** Figma file + design tokens pre-loaded
- **Show:** Figma screenshot → Claude extracts tokens → `tokens.json` + `tailwind.config.ts`
- **Target audience:** non-dev designer, marketing
- **Outcome:** before/after tokens
- **MEMORY HOOK:** *"15 phút, consistent, no drift."*

**Fallback:** `public/assets/demo-28-fallback.mp4`

**Transition:** *"Slide này show cả dev và non-dev xài chung."*

---

### S29 — demo-mixed-claude-md · 2 min 🔥🔥 ⚠️ LIVE DEMO · CALLBACK #2 · THESIS SLIDE
**Energy:** 🔥🔥 peak · **Stance:** center, stand still
**Audience is thinking:** *"Same prompt + different context. Prove it."*

**Hook:** *"Same AI. Same prompt. 2 kết quả khác nhau. Tại sao?"*

**Body:**
- **🧵 CALLBACK #2:** *"Objection #5 ở đầu — 'Show me it works'. Đây."*
- **Setup:** 2 project, 1 có CLAUDE.md, 1 không
- **Show:** same prompt → 2 output rất khác
- **MEMORY HOOK (verbatim):** *"Same AI. Same prompt. Khác context → khác kết quả."*
- **This is the THESIS SLIDE. Nhấn mạnh. Pause at end.**

**KR cue:** *"같은 AI. 같은 프롬프트. 다른 컨텍스트."* [gateun AI. gateun peurompeuteu. dareun keontekseuteu] — dramatic

**Fallback:** `public/assets/demo-29-fallback.mp4`

**Transition:** *"Xong demo. Giờ nói về sự thật."* [pause, walk back center, tone drops serious]

---

## Chapter 6 — Honest Truths (Slides 30–36) · ~8 min

**Arc position:** Act 5 — Ethical pivot. Senior dev + security lead gật đầu ở đây. **Tone serious.**

### S30 — bad-vs-good · 60s ⚡
**Energy:** ⚡ medium · **Stance:** center
**Audience is thinking:** *"Context quality matters. How much?"*

**Hook:** *"Same question. Output khác nhau 10x."*

**Body:**
- 2 columns: bad context vs great context
- **MEMORY HOOK:** *"10x quality. Không phải mơ. Là context."*

**Transition:** *"Nhưng AI có boundaries — thứ nó KHÔNG được làm."*

---

### S31 — ai-boundaries · 60s 🌊
**Energy:** 🌊 low — serious · **Stance:** center, stand still
**Audience is thinking:** *"Finally, limits."*

**Hook:** *"3 thứ AI không được chạm."* [slow read]

**Body:**
- API keys · emails/calls · untrusted input — read each box slow
- **MEMORY HOOK:** *"Guardrails cứng. Không negotiable."*

**KR cue:** *"AI 경계선"* [AI gyeonggyeseon] — serious

**Transition:** *"Và một rủi ro ít ai nói..."*

---

### S32 — skill-atrophy · 75s ⚡ ⚠️ SENIOR MOMENT
**Energy:** ⚡ medium · **Stance:** center, lean toward senior section
**Audience is thinking (senior):** *"Outsource thinking — tôi biết rủi ro này."*

**Hook:** *"Senior anxiety — skill atrophy."*

**Body:**
- *"Outsource thinking → kỹ năng teo."*
- **Contrast:** *"AI as mentor → hỏi WHY → học nhanh hơn."*
- **MEMORY HOOK:** *"Ask WHY, not just WHAT. Otherwise your brain atrophies."*
- Read QuoteBlock slow

**Transition:** *"Biết limits → biết khi nào không dùng."*

---

### S33 — when-not-to-use-ai · 90s 🌊 ⚠️ SKEPTIC APPROVAL · CALLBACK #3
**Energy:** 🌊 low — serious, authoritative · **Stance:** center, stand still
**Audience is thinking:** *"Finally someone admits when NOT to use."*

**Hook:** *"5 trường hợp KHÔNG dùng AI."*

**Body:**
- **🧵 CALLBACK #3:** *"Objection #1 ở đầu — 'AI nguy hiểm'. Đúng. Đây là 5 trường hợp KHÔNG dùng. Tôi đồng ý với các bạn."*
- Read each **slow**:
  1. **Auth/crypto/payment** — security critical
  2. **Novel domain** — không có data
  3. **DB migrations** — irreversible
  4. **GDPR/HIPAA** — compliance
  5. **Can't review** — if you can't check, don't ship
- **MEMORY HOOK:** *"Use AI wisely, or not at all."*

**Read the room:**
- Security lead nods → won them
- Senior dev nods → already won at S13, double reinforced

**Transition:** *"Data flow — security lead sẽ quan tâm."*

---

### S34 — data-sandbox-security · 90s 🌊 ⚠️ SECURITY MOMENT
**Energy:** 🌊 low — calm authority · **Stance:** at diagram, walk through flow
**Audience is thinking (security):** *"Where does my code go? Training data?"*

**Hook:** *"Data flow: code → Claude Code (local) → API → response."*

**Body:**
- **Walk diagram visually:** Your code → Claude Code (local) → API → Response
- **Anthropic policy:** *"Không training từ API data — policy cứng."*
- **Sandbox:** workspace-write, `.env` BLOCKED, network ask permission
- **Add verbally (gap in slide):** *"Audit logs available. Governance partnership available."*
- **MEMORY HOOK:** *"Local sandbox + policy cứng. Không phải blind trust."*

**Transition:** *"Và 3 nguyên tắc guardrail..."*

---

### S35 — guardrails · 60s ⚡
**Energy:** ⚡ medium · **Stance:** center
**Audience is thinking:** *"3 principles — memorize."*

**Hook:** *"3 nguyên tắc: Least agency. Strong observability. Dual-LLM."*

**Body:**
- **Explain Dual-LLM verbally:** *"Một AI generate, một AI audit. 2 góc nhìn."*
- **MEMORY HOOK:** *"Least agency + observability + dual-LLM = production-ready."*

**Transition:** *"Sự thật cuối cùng về quality."*

---

### S36 — hidden-quality-costs · 60s ⚡
**Energy:** ⚡ medium · **Stance:** center
**Audience is thinking:** *"Quality cost — what?"*

**Hook:** *"Output quality stable. NHƯNG review cost ẩn."*

**Body:**
- **Data (caveat):** *"Business Insider 2026 — có thể update. Nhưng pattern thật."*
- **Frame:** *"Quality không free. Ai đó phải pay."*
- **MEMORY HOOK:** *"Hidden cost = review time. Budget for it."*

**Transition:** *"Đủ honest truths. Giờ use cases cụ thể cho các role."*

---

## Chapter 7 — Use Cases (Slides 37–41) · ~6 min ⚠️ PERSONA MOMENT

**Arc position:** Act 6 — "This is for me" moment per persona. Rotate energy per slide.

### S37 — usecase-dev · 75s ⚡
**Energy:** ⚡ medium · **Stance:** lean toward dev audience section
**Audience is thinking (dev):** *"My workflow?"*

**Hook:** *"Chat person vs Workflow person — ai nhanh hơn?"*

**Body:**
- Show workflow: dev đọc context → CLAUDE.md → agent chạy
- **Time saving:** *"2 days → 30 min (based on my team's refactoring workflow)."*
- **MEMORY HOOK:** *"Workflow person > Chat person. 40x faster."*
- **Caveat:** *"Con số của team tôi — YMMV."*

**Transition:** *"QA also."*

---

### S38 — usecase-qa · 60s ⚡
**Energy:** ⚡ medium · **Stance:** lean toward QA if present, else center
**Audience is thinking (QA):** *"AI generates tests — quality?"*

**Hook:** *"AI tạo ~50 test case. QA review + filter + ship."*

**Body:**
- **Human accountability:** *"AI candidate, QA owner."*
- **Number caveat:** *"Con số minh hoạ — phụ thuộc framework + PRD quality."*
- **MEMORY HOOK:** *"Same time. Same AI. Different results. The diff is the human."*

**Transition:** *"Design team."*

---

### S39 — usecase-design · 60s ⚡
**Energy:** ⚡ medium · **Stance:** lean toward designer section
**Audience is thinking (designer):** *"Dev ghét color drift — tôi biết."*

**Hook:** *"Dev dùng #3B82F6, designer muốn #3A86F1. Cãi nhau 2 ngày."*

**Body:**
- **AI solution:** *"Extract tokens from Figma → tokens.json → Tailwind. 15 phút."*
- **Caveat:** *"Works với Figma + Tailwind stack. Stack bạn có thể khác."*
- **MEMORY HOOK:** *"Token drift = 0. Designer happy, dev happy."*

**Transition:** *"Marketing."*

---

### S40 — usecase-marketing · 60s ⚡
**Energy:** ⚡ medium · **Stance:** lean toward marketing section
**Audience is thinking (marketing):** *"Video draft nhanh? Quality?"*

**Hook:** *"Script → storyboard → Veo 3.1 prompts → video draft. 4h."*

**Body:**
- Walk pipeline: `/ckm:video:script:create` → `/ckm:video:storyboard:create` → AI prompts → `/ckm:video:create`
- **Key (nhấn mạnh):** *"~4h to draft. Not final. Marketing team reviews + approves + iterates. Creative ownership stays with people."*
- **MEMORY HOOK:** *"Draft, not final. Human keeps creative ownership."*

**Transition:** *"HR."*

---

### S41 — usecase-hr · 60s ⚡
**Energy:** ⚡ medium · **Stance:** lean toward HR section
**Audience is thinking (HR):** *"Admin tasks — I waste time on this."*

**Hook:** *"80% admin → AI làm. 20% strategic → HR focus."*

**Body:**
- **Examples:** onboarding, salary benchmarking, survey analysis
- **Reframe abstract:** *"Strategic partner = more time for people, less time on forms."*
- **MEMORY HOOK:** *"HR từ hành chính → đối tác chiến lược."*

**Transition:** *"Đã xem use cases. Giờ roll out."*

---

## Chapter 8 — Rollout & Closing (Slides 42–47) · ~6 min

**Arc position:** Act 7 — Actionable + memorable closing. CTO moment at S42, slow close at S47.

### S42 — pilot-rollout-90-day · 90s 🔥 ⚠️ CTO MOMENT
**Energy:** 🔥 high · **Stance:** center, point at each phase
**Audience is thinking (CTO):** *"Concrete plan?"*

**Hook:** *"90 ngày. 4 phase. Kill criteria rõ."*

**Body:**
- Walk 4 phases: Week 1-2 autocomplete → Week 3-4 chat → Month 2 agentic → Month 3 decide
- **Month 3 highlight — nhấn mạnh:** *"ROI = hours saved ÷ hours invested. Kill if < 1.0 at day 90 → STOP."*
- **MEMORY HOOK:** *"Không phải 'AI everywhere'. Là 'AI đúng chỗ'."*
- Concrete number — nhấn mạnh cho CTO

**Read the room:**
- CTO write notes → won
- CTO passive → *"Budget: ~$750-1000/dev/90 ngày. Rẻ hơn 1 tháng junior hire."*

**Transition:** *"Strategy is..."*

---

### S43 — right-strategy · 60s ⚡
**Energy:** ⚡ medium · **Stance:** center, 4-card walk
**Audience is thinking:** *"Tactical list — got it."*

**Hook:** *"4 mũi nhọn: review cost, testing, feedback loop, right thing."*

**Body:**
- 4 cards walk: reduce review cost → boost testing → shorten feedback → ship right thing
- **MEMORY HOOK:** *"Business strategy. Apply to all personas."*

**Transition:** *"Best practices khi dùng AI."*

---

### S44 — best-practices · 60s ⚡
**Energy:** ⚡ medium · **Stance:** center
**Audience is thinking:** *"Generic advice or specific?"*

**Hook:** *"4 practices: specs, examples, format, checklist."*

**Body:**
- *"Dùng như prompt rules. Giống code style guide."*
- **MEMORY HOOK:** *"Prompt rules = code style guide. Make it shareable."*

**Transition:** *"Built-in vs custom tools."*

---

### S45 — builtin-vs-custom · 45s 🌊
**Energy:** 🌊 low · **Stance:** center
**Audience is thinking:** *"Buy vs build — classic."*

**Hook:** *"Start built-in, graduate to custom khi thấy pain point."*

**Body:**
- Show both columns
- **MEMORY HOOK:** *"Built-in = quick start. Custom = differentiation."*

**Transition:** *"Và metric quan trọng..."*

---

### S46 — takeaway-metrics · 45s 🌊
**Energy:** 🌊 low · **Stance:** center
**Audience is thinking:** *"Metrics to track — note taking."*

**Hook:** *"3 metric: 1× write, N+ reuse, minimize copy-paste."*

**Body:**
- **Caveat:** *"Reuse requires maintenance. Not free."*
- **MEMORY HOOK:** *"Write once, reuse many. But maintain."*

**Transition:** *"Close."*

---

### S47 — closing-cta · 60s 🔥🔥 FINALE · CALLBACK #4
**Energy:** 🔥🔥 peak but **SLOW** · **Stance:** dead center, body still
**Audience is thinking:** *"Give me the one takeaway."*

**🧵 CALLBACK #4 (optional, if time permits):** *"8 objection lúc đầu ở S03. Cùng đếm lại. {pause} Bao nhiêu đã được trả lời? {đếm tay 1-2-3...}"*

**Hook (BIG PAUSE, slow read):**
- *"Xây harness. Đừng chỉ prompt."*
- *"하네스를 구축하세요. 단순히 프롬프트하지 마세요."* [haneseureul guchukhaseyo. dansunhi peurompeuteu-haji maseyo]

**Body (slow, paced — 1 line per beat):**
- **Subtitle:** *"Lợi thế không nằm ở tốc độ viết code — mà ở tốc độ biến code thành giá trị."*
- **CTA:** *"Giá trị > Số lượng."*
- **MEMORY HOOK:** *"Xây harness. Đừng chỉ prompt."*

**Q&A:** *"Câu hỏi? Tôi share link deck + speaker notes sau session."*

**End with:** smile + bow + wait for applause

---

## Post-Workshop Followups

- [ ] Share deck URL (build deployed to vercel/netlify)
- [ ] Share speaker notes for async reference
- [ ] Collect feedback form
- [ ] Record session if allowed → share async
- [ ] Follow up 1-on-1 with skeptics
- [ ] Thank audience members who raised hands during S02/S18

---

## Timing Checklist (total ~55 min, 47 slides)

| Chapter | Slides | Target | Notes |
|---|---|---|---|
| Ch1 Hạ Phòng Thủ | 01-07 (7) | 8 min | Don't rush S13 (skeptic moment coming Ch2) |
| Ch2 Philosophy+Reality | 08-14a (8) | 10 min | ⚠️ S12/S13/S14 PIVOTAL — spend time |
| Ch3 Context Eng | 15-19, 21 (6) | **7 min** | 🚨 THEORY ZONE — see panel above |
| Ch4 Harness Eng | 22-26 (5) | 6 min | Can compress if behind |
| Ch5 Demos | 27-29 (3) | 8 min | HARD TIMEBOX — 3+2+2 min max |
| Ch6 Honest Truths | 30-36 (7) | 8 min | Skeptic wins here |
| Ch7 Use Cases | 37-41 (5) | 6 min | 1 min each, hit every persona |
| Ch8 Rollout+Closing | 42-47 (6) | 6 min | S42 for CTO, S47 slow close |
| **Total** | **47** | **~55 min** | + 10 min Q&A = **65 min** |

**Budget buffer:** 5 min slack built in. If you run late → cut emergency tier 1 first (see below).

---

## Emergency Cuts (if running 10+ min behind)

- **Tier 1 (cut first):** S21 (RAG — explain inline trong S18), S45 (builtin vs custom)
- **Tier 2 (cut second):** S44 (best practices), S46 (metrics — subsumed by S47)
- **Tier 3 (cut third):** S32 (atrophy — mention in Q&A)
- **NEVER cut:** S01, S08, S12, S13, S14, S14a, S27, S29, S33, S34, S42, S47

**Note:** S20 few-shot đã cut permanent (v3). Đừng cut S21 RAG tier 1 nếu demo CLAUDE.md S29 sẽ gãy narrative — dùng tier 2 thay thế.

---

## Pre-Workshop Checklist

### T-7 days
- [ ] Rehearse full deck 1 lần với timer — note slides chạy quá thời gian
- [ ] Native KR review for S01, S08, S12, S13, S14, S27, S33, S34, S42, S47
- [ ] Memorize 8 MEMORY HOOK phrases (S01, S07, S08, S13, S14, S29, S33, S47)

### T-1 day
- [ ] Record 3 fallback videos (S27, S28, S29) — 1-2 hour effort, see `docs/demo-recording-script.md`
- [ ] Build deck: `npm run build` → deploy static hosting
- [ ] Test keyboard navigation on presentation laptop
- [ ] Pretendard Korean font loads (check network)

### T-0 morning
- [ ] Projector contrast test on actual venue — 5 min
- [ ] Disable macOS notifications during presentation
- [ ] Water bottle + timer visible to presenter
- [ ] Prepare prompt + bug file + Figma + 2 projects for live demos

### T-0 right before
- [ ] Drink water
- [ ] Read S01 hook + S08 memory hook + S47 finale out loud once
- [ ] Deep breath. Smile. Walk in.

---

## 🎯 Final reminder for presenter

1. **Don't read slides.** Narrate OVER them.
2. **Pause is power.** 3 seconds feels long to you, perfect to audience.
3. **Watch the room, not the laptop.** Eye contact > script.
4. **Energy arc matters more than content.** Theory zone is the risk — lift energy actively.
5. **Callback spine = dialogue illusion.** Use all 4 callbacks (S13, S29, S33, S47) or audience feels monologue.
6. **The MEMORY HOOK phrases are the only verbatim parts.** Rest = improv around bullet points.

---

# 📚 APPENDICES — Optional Rehearsal Arsenal

> **When to use:** Các phần dưới là OPTIONAL — chỉ dùng khi audience dev pushback mạnh, hoặc khi có thời gian Q&A dài, hoặc khi bạn muốn thay thế/mở rộng closing.
> Không phải mỗi show đều cần. Rehearse để biết, không rehearse để đọc máy móc.

---

## 🎯 Appendix A — Dev Reframe Arsenal (10 reframes)

**Mục đích:** Khi dev skeptic pushback về AI/vibe coding, đừng cãi. Dùng reframe mềm để đổi góc nhìn — không công kích.

**Nguyên tắc vàng:** *"Thừa nhận nỗi khó chịu của dev là có cơ sở, rồi mới bẻ góc nhìn."*

### Reframe #1 — Anti-AI → Anti-vô-trách-nhiệm
> *"Dev không ghét AI. Dev ghét việc một người giao trách nhiệm cho máy rồi bắt người khác gánh hậu quả."*

**When to use:** Khi ai đó nói "Tôi không dùng AI vì nó không reliable"
**Response:** *"Đồng ý — tôi cũng không tin vibe coding thả nổi. Nhưng AI-assisted engineering **có review + test** là chuyện khác. Vibe ≠ assisted."*

### Reframe #2 — "AI mất giá nghề dev" → "AI lộ ra phần giá trị thật"
> *"Khi việc gõ code rẻ đi, thứ đắt hơn là: framing vấn đề, chọn trade-off, kiểm chứng, bảo mật, maintainability, và **trách nhiệm**."*

**When to use:** Senior dev lo AI thay mình
**Response:** *"Nghề dev chưa bao giờ chỉ là gõ code. AI chỉ làm lộ điều đó."*

### Reframe #3 — "AI nhanh hơn nên tốt hơn" → "AI nhanh ở khâu SINH, không nhanh ở khâu CHỊU TRÁCH NHIỆM"
> *"AI nhanh ở sinh phương án. AI không tự nhanh ở chịu trách nhiệm. Ai review? Ai ship? Ai on-call khi production down?"*

**When to use:** Khi ai đó đo productivity bằng dòng code hoặc PR count
**Response:** *"Nhiều code ≠ nhiều value. Production bug cost gấp 100× dev time tiết kiệm."*

### Reframe #4 — "Vibe coding phá nghề" → "Vibe coding là sân tập trực giác"
> *"Simon Willison: vibe coding hữu ích để xây trực giác về LLM — làm được gì, không làm được gì. Nên là sandbox để học, không phải triết lý ship mọi thứ."*

**When to use:** Khi ai đó bash vibe coding universal
**Response:** *"Vibe coding ở low-stakes project = học. Vibe coding ở production auth = thảm hoạ. Khác sân chơi."*

### Reframe #5 — "Phải hiểu hết rồi mới dùng AI" → "Dùng AI để hiểu nhanh hơn — chọn đúng sân"
> *"Bạn không cần master hết rồi mới dùng AI. Bạn cần sandbox + dự án low-stakes + không dữ liệu nhạy cảm để thử."*

**When to use:** Junior sợ "mình không đủ giỏi mới dùng AI"
**Response:** *"Cách học nhanh nhất là bắt tay vào làm. Chỉ cần chọn sân an toàn."*

### Reframe #6 — "AI khiến junior hết đường sống" → "AI đang đổi cách junior học nghề"
> *"AI lấy đi nhiều task cơ bản mà junior từng dùng để học. NHƯNG — junior nào sớm master AI tools + giữ nền tảng đủ tốt để **phản biện AI** → lợi thế cạnh tranh lớn. Không phải hết đường. Đây là đổi đường."*

**When to use:** Junior defensive, senior lo cho junior
**Response:** *"Kỹ năng mới của junior = hỏi AI 'WHY'. Senior có thể dạy cái đó."*

### Reframe #7 — "Senior sẽ bị thay" → "Senior càng có giá nếu biết biến context thành leverage"
> *"Stack Overflow 2025: nhóm experienced devs ít 'highly trust' AI nhất. Sự dè dặt của senior là **tài sản**, miễn là không biến thành phủ định sạch trơn."*

**When to use:** Senior bị attack vì "chống AI"
**Response:** *"Senior skepticism = immune system của codebase. AI cần senior review hơn senior cần AI."*

### Reframe #8 — "AI là phép màu" → "AI là đòn bẩy có điều kiện"
> *"Goonie: thứ làm người ta ảo tưởng không phải AI mạnh quá, mà là tưởng **build được demo đồng nghĩa build được product**. Production-readiness, security, deploy, go-to-market vẫn là pain rất thật."*

**When to use:** Khi ai đó hype AI vô điều kiện
**Response:** *"Demo 5 phút không bằng production stable 5 tháng. Khoảng cách đó là nghề của chúng ta."*

### Reframe #9 — "Prompt giỏi là đủ" → "Quy trình mới là thứ cứu mình"
> *"Anthropic 2026 agentic best practices: verification, planning, context, subagents, checkpoints. Đừng thần bí hóa prompt. Hãy hệ thống hóa cách làm việc."*

**When to use:** Khi ai đó hỏi "làm sao prompt cho AI giỏi hơn"
**Response:** *"Đặt câu hỏi sai. Câu đúng là: 'harness nào quanh AI để catch lỗi của AI?'"*

### Reframe #10 — "AI hay con người" → "AI + con người + quy trình"
> *"Goonie: 'Hãy để AI trở thành bạn đồng hành — không phải sự thay thế.' Đây là cách phá cả 2 cực đoan: sợ AI và thờ AI."*

**When to use:** Closing debate, hoặc khi audience chia rẽ AI vs anti-AI
**Response:** *"Cả 2 cực đều sai. Nghiêng về 1 cực = mất cân bằng. Dev giỏi giữ cân bằng."*

---

## 💬 Appendix B — Dev-Targeted Closing (Alternative for S47)

**When to use:** Khi audience dev chiếm ≥70% và bạn cảm thấy closing S47 mặc định ("Xây harness. Đừng chỉ prompt.") không chạm đủ sâu vào tâm lý dev audience.

**How to use:** Sau khi đọc MEMORY HOOK "Xây harness. Đừng chỉ prompt." (giữ nguyên), chuyển sang speech sau trong ~45s:

> *"Tôi không đến đây để bảo anh em bỏ code và đi nói chuyện với AI.*
>
> *Tôi chỉ muốn nói rằng nghề dev chưa bao giờ chỉ là gõ ký tự.*
>
> *Nghề của chúng ta là **hiểu bài toán**, **chọn trade-off**, **kiểm chứng**, và **chịu trách nhiệm**.*
>
> *AI đang lấy đi phần dễ ảo tưởng nhất của nghề — là cảm giác bận rộn vì gõ nhiều.*
>
> *Nhưng chính vì vậy, nó lại làm nổi bật phần giá trị nhất của nghề — là **judgment**."*

**Delivery notes:**
- Đọc **chậm**, mỗi dòng pause 1 beat
- Stand dead center, body still
- Eye contact sweep 3 khu vực audience
- Cuối cùng: pause 3s rồi smile → nhận applause

**Không dùng nếu:**
- Audience non-dev ≥50% → dùng closing default
- Thời gian dưới 50 min → dùng closing default ngắn
- Cảm giác room đã mệt → dùng closing default punch

---

## 📌 Appendix C — 8 Bumper Sticker Quotes (drop anytime)

**When to use:** Các câu ngắn, memorable, drop bất kỳ lúc nào audience cần "đập chấp niệm" — đặc biệt hiệu quả trong Q&A hoặc khi có pushback.

**How to use:** Quote verbatim, đọc chậm, pause sau mỗi câu. Không quote nhiều cùng lúc — 1 quote per objection.

1. **Trách nhiệm:** *"Điều đáng sợ không phải AI viết code. Điều đáng sợ là con người ký tên vào thứ mình không hiểu."*

2. **Vibe coding:** *"Vấn đề của vibe coding không phải là có AI. Vấn đề là có AI nhưng không có kỷ luật."*

3. **Giá trị dev:** *"AI không làm nghề dev biến mất. AI làm phần 'gõ cho nhanh' rẻ đi, để phần 'nghĩ cho đúng' lộ giá trị thật."*

4. **Career question:** *"Đừng hỏi AI có thay dev không. Hãy hỏi: dev nào biết làm việc với AI mà vẫn giữ chuẩn nghề."*

5. **Engineer identity:** *"Một engineer giỏi không được định nghĩa bởi số dòng code tự tay gõ, mà bởi số quyết định đúng họ dám chịu trách nhiệm."*

6. **AI-assisted legit:** *"Nếu code do AI viết mà bạn review, test và giải thích được — đó không phải phản bội nghề. Đó là nghề đang tiến hóa."*

7. **Vibe coding role:** *"Vibe coding nên là chỗ để học trực giác, không phải nơi để gửi gắm niềm tin mù quáng."*

8. **Standards:** *"AI không phải lý do để bỏ chuẩn kỹ thuật. AI là lý do để chuẩn kỹ thuật trở nên **quan trọng hơn**."*

### Delivery tips

- **Don't dump all 8.** Pick 1-2 phù hợp với câu hỏi cụ thể.
- **Memorize verbatim.** Bumper stickers chỉ mạnh khi đọc mượt, không vấp.
- **Pause after.** Để câu kết thúc thấm, không rush transition.
- **Eye contact.** Nhìn trực diện người vừa hỏi khi trả lời bằng quote.

---

## 📖 Source References

Các source dùng trong Appendix A/B/C cho presenter đối chiếu nếu audience hỏi:

- **Andrej Karpathy** (Feb 2025) — người đặt tên "vibe coding" — Twitter/X
- **Simon Willison** (2025) — nuance "not all AI coding = vibe" — simonwillison.net
- **Stack Overflow Developer Survey 2025** — 46% mistrust accuracy, 66% frustrated — survey.stackoverflow.co
- **METR RCT 2025** — 19% slower on senior OSS devs — metr.org
- **Anthropic Agentic Coding Report (2026)** — verification/planning/context/checkpoints
- **Goonie "2026 - Here we go!"** — Vietnamese dev perspective, control vs thả rông
- **Faros AI 2025** — +110% PR, 10,000 devs, 1,255 teams
- **Jellyfish 2025** — 700 companies, 200k engineers, 20M PRs

**Note về Goonie:** Đây là tác giả Vietnamese dev community. Chỉ reference trong speaker notes (personal voice), không cite trên slide để tránh assumption KR audience không biết. Nếu audience 100% Việt Nam + dev-familiar → có thể mention tên trên sân khấu.
