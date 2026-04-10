# Demo Recording Script — Fallback Videos (S27/S28/S29)

> Speaker-notes.md lines 10-14 + 197/205/213 quy định: mỗi live demo cần 1 file fallback `.mp4` trong `public/assets/`.
> Status hiện tại: **PENDING** — presenter tự record.
> Agent không quay video được — file này là script để presenter làm theo.

## Nguyên tắc chung

- Recording tool khuyến nghị: **QuickTime Screen Recording** (macOS native) hoặc **asciinema** nếu chỉ terminal
- Format output: `.mp4`, H.264, ≤ 5MB/file (compress bằng `ffmpeg -crf 28 -preset slow` nếu cần)
- Resolution: 1280x720 (khớp slide dimension)
- Đặt file vào: `examples/workshop-deck/public/assets/demo-{27,28,29}-fallback.mp4`
- Thời lượng: ≤ target duration — fallback là phòng khi live fail, không phải demo chính

---

## S27 — Dev Bug Fix (3 phút target, fallback ≤ 90s)

### Prereqs
- [ ] Project chuẩn bị sẵn: repo nhỏ có file `auth.ts` với bug `NullPointerException` thật
- [ ] Terminal đã `cd` vào project, prompt sạch
- [ ] Claude Code CLI + Claude Kit đã install (skill `/ck:fix` active)
- [ ] Test suite chạy được (`npm test` hoặc tương đương), 12 tests pre-existing
- [ ] Font terminal ≥ 16pt để audience đọc được

### Recording steps
1. Show terminal với prompt sạch
2. Gõ lệnh (chậm, rõ):
   ```bash
   /ck:fix "NullPointerException in auth.ts:45"
   ```
3. Claude Code tự:
   - Read `auth.ts` — highlight đoạn null check missing
   - Trace call chain — show 1-2 file liên quan
   - Xác định root cause
   - Apply fix (hiện diff patch)
4. Run tests → show `12/12 passing ✓`
5. Kết thúc recording ngay sau khi tests pass

### Expected on-screen (match slide 27 terminalLines)
```
$ /ck:fix "NullPointerException in auth.ts:45"
→ Reading auth.ts...
→ Tracing call chain...
→ Root cause: missing null check
→ Applied fix
→ Tests pass (12/12) ✓
```

### Narration tips (optional voiceover)
- "Đây là bug report lúc nửa đêm, 15 phút để fix"
- "Claude tự đọc code, không cần tôi chỉ file nào"
- "Tests pass — ship được"

### Fail modes → not for video
- Claude hỏi clarification → bỏ take, chuẩn bị prompt rõ hơn
- Tests fail sau fix → bỏ take, fix root cause trước

---

## S28 — Non-Dev Design Token Extraction (2 phút target, fallback ≤ 60s)

### Prereqs
- [ ] Figma file chuẩn bị: có design system nhỏ (colors, typography, spacing) — ~10-15 tokens
- [ ] Screenshot Figma file sẵn sàng (`.png` hoặc share link)
- [ ] Claude Code với skill `/ck:ui-ux-pro-max` hoặc tương đương active
- [ ] Empty `tailwind.config.ts` để target update
- [ ] Browser tab Figma mở cạnh terminal

### Recording steps
1. Show Figma file (3-5s) — zoom vào colors/typography để audience thấy source
2. Switch sang terminal, gõ lệnh (hoặc paste prompt):
   ```
   Extract design tokens từ Figma screenshot này → tailwind config + tokens.json
   ```
3. Attach screenshot vào prompt
4. Claude:
   - Analyze image (1-2s)
   - Output `tokens.json` với colors, spacing, typography
   - Update `tailwind.config.ts` với theme extension
5. Show 2 file đã generate — diff view nếu có

### Expected output structure
```json
// tokens.json
{
  "colors": { "primary": "#...", "accent": "#..." },
  "spacing": { "xs": "4px", "sm": "8px", ... },
  "typography": { "display": "...", "body": "..." }
}
```

### Narration tips
- "Designer post Figma link trong Slack"
- "Dev không cần đọc từng color code"
- "15 phút, consistent, no drift"

---

## S29 — CLAUDE.md Difference Demo (2 phút target, fallback ≤ 60s)

### Prereqs
- [ ] **2 project riêng biệt** mở song song (2 terminal tabs hoặc 2 cửa sổ):
  - Project A: **KHÔNG** có `CLAUDE.md`, `docs/`, custom skills
  - Project B: **CÓ** `CLAUDE.md` rõ ràng mô tả conventions, tech stack, naming
- [ ] Cùng 1 prompt pre-written trong clipboard:
  ```
  Thêm GET /users endpoint với pagination
  ```
- [ ] Cả 2 project đã `cd` sẵn, empty git state

### Recording steps
1. **Split screen hoặc sequential**:
   - Tab 1 (Project A no CLAUDE.md): paste prompt → Claude output
   - Tab 2 (Project B with CLAUDE.md): paste **cùng prompt** → Claude output
2. Show side-by-side diff của 2 output:
   - A: generic Express boilerplate, `app.get("/users", handler)`
   - B: follows project conventions, `router.get("/users", authenticate, userController.list)`
3. Highlight khác biệt bằng chuột hoặc cursor

### Key visual
| WITHOUT CLAUDE.md | WITH CLAUDE.md |
|---|---|
| `app.get("/users", handler)` | `router.get("/users", authenticate, userController.list)` |
| Generic boilerplate | Follows routes + schema + auth middleware |

### Narration tips
- "Cùng 1 AI. Cùng 1 prompt. Khác context."
- "Không phải Claude dở — là mình chưa cho context"
- "CLAUDE.md là file 100 dòng, tạo 10 phút, tiết kiệm hàng trăm giờ"

---

## Post-recording checklist

- [ ] Compress mỗi file về ≤ 5MB: `ffmpeg -i input.mov -vcodec h264 -crf 28 -preset slow output.mp4`
- [ ] Verify resolution 1280x720 (hoặc aspect 16:9 tương đương)
- [ ] Test playback trong browser (Chrome, Safari)
- [ ] Drop vào `examples/workshop-deck/public/assets/demo-27-fallback.mp4`, `demo-28-fallback.mp4`, `demo-29-fallback.mp4`
- [ ] Update speaker-notes.md: đổi `(PENDING)` → `(recorded 2026-04-XX)`

## KHÔNG làm

- Không embed `<video>` tag vào slide 27/28/29 — presenter play thủ công theo protocol speaker-notes
- Không add voiceover vietnamese (presenter sẽ narrate live)
- Không add subtitles (audience tiếng Việt)
- Không add music/intro/outro — fallback cần start ngay
