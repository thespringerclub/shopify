# The Springer Club — image prompts

Every placeholder in the theme corresponds to one image listed here. Each entry has:

- **Where it lives** — the section / template the image fills
- **Aspect / dimensions** — what to set when generating
- **Prompt** — copy/paste into ChatGPT (Image 2 / `gpt-image-1`)

The prompts were drafted to fit the brand's three-register architecture (brief §4):

- **Register 1 — Heraldic / Engraved** — Audubon, 19th-century, the *dress uniform*. Used on the homepage hero, About hero, member-card stamp.
- **Register 2 — Editorial / New Yorker** — 1925–1965, Penguin Modern Classics, Bawden, Ravilious, Steinberg, Cormorant Italic. The brand's *voice*. Used on collection / PDP / journal / 404.
- **Register 3 — Club Regalia / Embroidered** — timeless prep, yacht-club burgees, Drake's repp ties. Lives on the products themselves and product photography.

When generating, append: *"No watermarks, no text, no signatures, no logos. Photographic medium-format film grain at 100 ISO; soft natural light; no contemporary digital sharpness."* to anything photographic.
For illustrations, append: *"Illustration only, no photographic elements; period-correct line work; no contemporary digital effects."*

A note on the cool-East-Coast palette: prompts request *Bone* (#F5EFE4), *Sage* (#9AAE9C), *Sea Glass* (#B8C7D1), *Clay* (#C48B6F), and *Soft Ink* (#2C2A28). Lean into restraint; *quiet luxury* is the register.

---

## Brand assets (foundational)

### 1. Primary logomark — Audubon Springer-flushing-a-bird (Soft Ink)
- **Where** — `settings.logomark` (header, footer, member card, social avatar, favicon, hero stacked lockup)
- **Format** — square SVG / PNG, transparent background, ~1024×1024
- **Prompt:**
  > A 19th-century Audubon-style steel-engraving of an English Springer Spaniel mid-flush — front feet just leaving the ground, head down, ears mid-air, a single woodcock breaking from cover beneath. Hand-drawn cross-hatched ink only, no shading washes, no color, no background. Composition tight to the figures, designed to read as a heraldic mark at small sizes. Render in a single dark color #2C2A28 ("Soft Ink") on transparent background. No type, no border, no decorative flourish — the engraving alone. Reference: Audubon's Birds of America plates, Royal Kennel Club studbook frontispieces, mid-19th-century sporting prints.

### 2. Logomark — Clay foil variant (member card stamp)
- **Where** — `settings.logomark_clay`
- **Format** — square SVG / PNG, transparent background, ~512×512
- **Prompt:**
  > Same Audubon-style engraving as the primary logomark above, but rendered as if foil-stamped in warm Clay (#C48B6F) on Bone. Slight metallic-ink texture, otherwise identical line work. Transparent background, square crop, no type.

### 3. Favicon
- **Where** — `settings.favicon`
- **Format** — square 256×256 PNG (Shopify will auto-resize)
- **Prompt:**
  > A simplified version of the Audubon logomark optimized for 16×16 readability. Just the silhouette of the Springer in the flush pose, head and ears clear of the body. Pure #2C2A28 on Bone (#F5EFE4) background. No type. Iconic, minimal, recognizable at thumbnail size.

---

## Homepage (`templates/index.json`)

### 4. Homepage hero — atmospheric brand photograph
- **Where** — `index.json → hero.settings.image`
- **Aspect** — 21:9, ~2880×1234
- **Caption in placeholder:** *HERO · Springer at a shingled porch, Nantucket morning, soft diffused light*
- **Prompt:**
  > A wide cinematic photograph, 21:9, of a single liver-and-white English Springer Spaniel sitting calmly on a weathered grey shingle-style porch, looking out across hydrangea bushes toward an unseen sea. Nantucket-grey shingles, white-painted railings, a faded Persian-stripe doormat. Soft diffused early-morning light, slight overexposure, cool-warm balance leaning warm. Empty negative space in the upper third of the frame for type overlay. No people, no logos, no text. Medium-format film grain (Portra 400 at 100 ISO), natural colors, no heavy filters. The dog is relaxed, ears down, eyes off-camera, present and unposed. Quiet, *Town & Country* register, never *Instagram*.

### 5. Featured tile 1 — Springer Mum tee, on-figure
- **Where** — `index.json → featured.blocks.p1.settings` (will be replaced when the product gets real media)
- **Aspect** — 4:5, ~1200×1500
- **Prompt:**
  > A 4:5 lifestyle photograph of a woman in her late forties, soft greying brunette hair pulled loosely back, wearing a Bone-colored heavyweight cotton t-shirt with a small Springer-mid-flush mark chain-stitched on the left chest in Soft Ink. She stands in a Nantucket-style kitchen at a slate counter, linen curtains diffusing morning light, a copper kettle visible behind. Loro-Piana-tailored ease, no obvious branding. Eyes off-camera, an in-process moment, not a pose. Soft-airy color, slight overexposure, no filters. Quiet East Coast luxury register.

### 6. Featured tile 2 — Born to Flush crewneck, on-dog at low light
- **Where** — `index.json → featured.blocks.p2.settings`
- **Aspect** — 4:5, ~1200×1500
- **Prompt:**
  > A 4:5 lifestyle photograph of a liver-and-white English Springer Spaniel at the edge of a brushy covert in low golden-hour light, with a folded heavyweight loopback cotton crewneck in Faded Navy resting on a weathered wooden tailgate beside the dog. The crewneck has a single-color screen-print mark — a Springer set-jawed mid-work — printed on the chest in Soft Ink. The dog is alert, nose into the wind, ears clear of the body. Frosted long grass, hint of stone wall behind. *Garden & Gun* photographic register; medium-format grain; natural color; no digital sharpening.

### 7. Featured tile 3 — Embroidered tote, on-dog with leather handle detail
- **Where** — `index.json → featured.blocks.p3.settings`
- **Aspect** — 4:5, ~1200×1500
- **Prompt:**
  > A 4:5 lifestyle photograph of a Bone-colored heavy canvas tote with bridle-leather handles set on a Sea-Glass-painted bench, a Springer Spaniel's paw and chest visible at the lower right of the frame as the dog rests beside it. Embroidery on the tote shows a small Audubon-style Springer-flushing-a-bird mark in Soft Ink chain-stitch. Detail of the leather handle stitching is sharp; the rest of the dog is softly out of focus. Soft diffused side light. *Drake's*-tier prep register; no logos visible; quiet, considered.

### 8. Editorial spread illustration — homepage Sage section
- **Where** — `index.json → editorial.settings.placeholder_caption` ("EDITORIAL · Penguin/Bawden-style illustration · the season cover")
- **Aspect** — 4:5, ~1200×1500
- **Prompt:**
  > A 4:5 mid-20th-century editorial illustration in the manner of Edward Bawden / Eric Ravilious / Penguin Modern Classics covers (1955-1965 register). The subject: a single English Springer Spaniel sprawled across a sunlit kitchen floor, ears spread to two compass points, the corner of a Persian rug visible. Limited palette (three to four colors max): Sage #9AAE9C ground, Soft Ink #2C2A28 line work, Bone #F5EFE4 highlights, a single touch of Clay #C48B6F for the dog's nose or a small detail. Hand-drawn line work, slightly imperfect register, lithograph texture. No text, no signature. Used as the season cover for *The Journal*. Restrained, literary, never cute.

### 9. About teaser illustration — small mark
- **Where** — `index.json → about.settings.illustration` (or fall back to placeholder)
- **Aspect** — 1:1, ~600×600
- **Prompt:**
  > A small Bawden-style illustration, 1:1 ratio, of a single Springer Spaniel head in three-quarter profile, ears alert. Two-color: Soft Ink line on Bone ground. Hand-drawn line work, lithograph quality, slightly imperfect. Designed to live small (120px) at the top of an editorial paragraph. No type, no border. Same register as the homepage editorial illustration above.

---

## Collection page (`templates/collection.json`)

### 10. Collection hero — Spring Field Days (atmospheric)
- **Where** — `collection.json → hero.settings.image`
- **Aspect** — 21:9 / 16:9, ~2880×1234 if 21:9
- **Prompt:**
  > A wide cinematic photograph, 16:9, of a Springer Spaniel mid-stride across a tilled spring field at the edge of a hedgerow, with morning mist rising. The frame is dominated by Sage-tinted greens and the cool dawn sky; a sliver of weathered stone wall in the right foreground. The dog is small in the frame; the landscape is the subject. Generous negative space at the top for a Cormorant-italic title overlay. Medium-format film grain, naturalistic color, no heavy filters. *Sporting Classics* / *The Drake* register.

### 11–18. Product tile placeholders (collection grid)
The collection grid currently shows nine placeholder tiles when no products are loaded. Each will be replaced with the product's primary lifestyle shot once products are imported. As a reference, here are prompts for the additional SKUs the prototype seeds:

- **The Field Cap** (4:5, on-figure, golden hour):
  > A 4:5 photograph of a six-panel waxed-cotton field cap in olive sitting on a weathered wooden post in golden-hour light. A Springer's nose enters the lower-right edge of the frame. A small Soft Ink chain-stitch mark on the cap's left side. Soft-airy color, no logos, no text.

- **The Kennel Crewneck** (4:5, on-figure, gunroom):
  > A 4:5 lifestyle photograph of a man in his early fifties in a wood-paneled gunroom, wearing a Bone heavyweight loopback cotton crewneck. He is reading a book at a small writing desk, oil portrait on the wall behind, a Springer at his feet. Lamp-lit, warm shadows; the crewneck's left-chest mark in Soft Ink chain-stitch is clearly visible. *Town & Country* register.

- **The Covert Tee** (4:5, on-figure, field):
  > A 4:5 photograph of a young woman in a Faded Navy heavyweight cotton t-shirt, walking across a stubble field at the edge of a covert with a Springer at heel. Mid-stride, off-camera, weather-beaten Barbour over her shoulder. Soft diffused light, late afternoon.

- **The Shoot Tote** (4:5, leather, field detail):
  > A 4:5 photograph of a heavy canvas-and-bridle-leather tote bag set on a damp wooden gun-cabinet, an open shotgun cleaning kit beside it, the corner of an oil-cloth jacket draped over the back of a wooden chair. Embroidered Audubon mark visible in Soft Ink chain-stitch. Soft window light from the right. No logos.

- **The Kennel Cap** (4:5, on-figure, kitchen window):
  > A 4:5 photograph of a Sage-colored canvas cap set on a windowsill in a Nantucket-style kitchen, hydrangeas just visible through the leaded panes beyond. Late morning light. Embroidered logomark on the cap's front in Soft Ink. No people, no logos elsewhere.

- **The Tradition Tee** (4:5, on-dog, hydrangea garden):
  > A 4:5 photograph of a Bone-colored heavyweight cotton t-shirt folded on a wrought-iron garden bench surrounded by white and pale-blue hydrangeas in full bloom, a Springer sitting beside the bench, looking off-frame. Soft diffused garden light. The tee's left-chest mark is in Soft Ink chain-stitch. Slow-shutter, contemplative.

---

## PDP placeholders (per-SKU media)

The PDP gallery uses six placeholder slots when product media isn't uploaded. Below are the prompt templates — fill in `{{ SKU }}` with the actual product (e.g., "The Springer Mum tee").

### 19. PDP — pack shot (4:5, primary)
> A 4:5 photograph of {{ SKU }} laid flat on a Bone (#F5EFE4) surface, soft even diffused light, no shadow, no props, no people. Catalog quality, color-accurate, no styling. Edges of the garment crisp, fabric texture clearly visible. The mark on the chest is sharp. No logos elsewhere, no text. Slight overhead angle, ~10° tilt. Pure pack-shot.

### 20. PDP — on-figure (4:5)
> A 4:5 lifestyle photograph of {{ SKU }} worn in a believable everyday setting (kitchen, porch, garden, gunroom — pick one consistent with the SKU), soft diffused side light, no posed expression. The wearer is partially out of frame; the garment is the subject. *Kinfolk-shot-in-Watch-Hill* register, never *DTC-product-shot*.

### 21. PDP — on-figure detail (4:5, fit & drape)
> A 4:5 detail photograph showing the fit and drape of {{ SKU }} on the wearer — shoulders, sleeves, neckline, the way the fabric falls. Tight crop, no face. Soft natural light. Demonstrates that the garment is well-cut.

### 22. PDP — embroidery / print detail (1:1)
> A 1:1 macro photograph of the embroidered mark on {{ SKU }}, taken at oblique angle so the chain-stitch thread is clearly individuated. Soft Ink (#2C2A28) thread on the garment fabric. Single-needle hem and stitch detail visible at the edge of frame. Nothing else in the shot. Crisp, textural, no filters.

### 23. PDP — on-dog (4:5, the Springer beside the garment)
> A 4:5 photograph of an English Springer Spaniel resting beside {{ SKU }} (the garment folded or worn). The dog is the model. Soft diffused light, mid-tone palette. The dog is calm, alert, looking off-camera. Composition emphasizes the relationship between the garment and the breed.

### 24. PDP — mark in isolation (4:5, white ground)
> A 4:5 photograph of the embroidered mark in isolation, presented like a swatch — the mark embroidered onto a small square of garment fabric, set centered on a Bone (#F5EFE4) ground, no shadow. Studio lighting. Clean, archival. Used as the "this is the mark" reference image at the bottom of the gallery.

### 25. PDP — story spread illustration (4:5, Sage tone)
- **Where** — `product-story` section placeholder
- **Aspect** — 4:5
- **Prompt (per SKU):**
  > A 4:5 Bawden-style illustration depicting the cultural story of {{ SKU }} (e.g., for Springer Mum: a Springer sprawled across a sun-patched kitchen floor, a woman reading on the sofa nearby; for Born to Flush: a Springer at full extension mid-flush in covert grass at first light). Limited palette of three colors maximum: Sage / Soft Ink / Bone with a single Clay accent. Hand-drawn line work, mid-century book illustration register, no text, no signature.

### 26. PDP — mark detail close-up (square, white ground)
- **Where** — `product-mark` section placeholder
- **Aspect** — 1:1, ~1200×1200
- **Prompt:**
  > A 1:1 macro photograph of the SKU's chain-stitch mark, presented on a Bone ground with generous white space. The mark fills the central third of the frame. Studio lighting from upper-left, very soft. The chain-stitch thread reads as individual loops. Catalog-archival quality.

---

## About page (`templates/page.about.json`)

### 27. About hero — Springers at work
- **Where** — `page.about.json → hero.settings.image`
- **Aspect** — 21:9, ~2880×1234
- **Prompt:**
  > A wide cinematic photograph, 21:9, of two Springer Spaniels mid-work in a low-light morning covert: one mid-flush with a woodcock breaking from cover, the other at full extension downstream, a hint of a sportsman's boot at the right edge of frame. Cool wet greens and ochre browns, mist on the ground, sharp natural light from a low sun. The dogs are the subjects; the landscape grounds them. Negative space at lower third for type overlay. *Garden & Gun* / *Sporting Classics* register; no logos, no text.

### 28. About — Section break I (16:9 Bawden-style illustration)
- **Where** — `page.about.json → image_break_one.settings.image`
- **Caption fallback:** *SECTION BREAK · BAWDEN-STYLE ILLUSTRATION · A FIELD IN MAY*
- **Prompt:**
  > A 16:9 Bawden-style illustration of a tilled May field at first light, with hedgerows in the middle distance and a single Springer Spaniel small in the right third of the frame, scenting a hedgerow. Sage / Soft Ink / Bone palette only. Hand-drawn line work, lithograph register, slight off-register printing. No type, no signature.

### 29. About — Section break II (16:9 lifestyle photograph)
- **Where** — `page.about.json → image_break_two.settings.image`
- **Caption fallback:** *SECTION BREAK · A LAND CRUISER, A SHINGLED PORCH, HYDRANGEAS*
- **Prompt:**
  > A 16:9 lifestyle photograph of a 1995-era olive Toyota Land Cruiser parked beside a shingle-style summer house, hydrangeas in full bloom along the drive, a Springer Spaniel sitting in front of the open tailgate beside a wicker picnic basket. Late afternoon golden-hour light. Sea Glass and Sage tones dominant. *Town & Country* / *Coastal Living* register, never *Architectural Digest*. No logos, no text. Medium-format film, natural color.

---

## Journal (`templates/blog.json` + `templates/article.json`)

### 30. Journal hero (per-entry, 21:9)
- **Where** — `article.json → hero` (per article, set via Article.featured_image)
- **Aspect** — 21:9, ~2400×1029
- **Prompt template (vary per entry):**
  > A 21:9 Bawden-style editorial illustration accompanying a magazine essay titled "[ENTRY TITLE]". Limited palette of Sage / Soft Ink / Bone with a single Clay accent. Hand-drawn line work, lithograph register, mid-20th-century editorial illustration in the manner of Edward Bawden / Eric Ravilious / Penguin Modern Classics covers. The subject should be a small narrative scene relating to the entry's content. No text, no signature, no logos.

### 31. Journal index — entry thumbnails (4:5, varied tones)
Each journal entry tile uses the article's featured image. Prompt template (per entry):

> A 4:5 illustration or photograph for a magazine essay titled "[ENTRY TITLE]". Tone: [SAGE / DEEP / SEAGLASS / WARM CLAY-TINTED] depending on the season of the entry. Subject should evoke the essay topic — a working dog at rest, a sporting weekend, a kennel debate, a long Yorkshire weekend. Hand-drawn line work for illustrations, medium-format photography for photographic entries; both share the cool-East-Coast palette and editorial restraint.

---

## Account page (`templates/customers/account.liquid`)

### 32. Member card stamp — Audubon logomark in Clay foil
- **Where** — Already covered in #2 above; rendered live at 64×64 inside the member card.
- **Note:** The member card itself is rendered live in Liquid (Bone fill, Soft Ink border, Pinyon Script name, Clay-foil logomark). No additional generated image needed unless the team wants a static, bake-rendered card art for marketing (in which case use the prompt below).
- **Prompt (optional bake render):**
  > A 480×280 print-rendered "member card" — Bone (#F5EFE4) ground, single Soft Ink (#2C2A28) hairline border, the Audubon Springer-flushing-a-bird logomark stamped in Clay-foil (#C48B6F) at upper right, the customer's name in Pinyon Script in the center-left, "Member in Good Standing — Since [MONTH] [YEAR]" in Cormorant Italic beneath. At the bottom-left, "THE SPRINGER CLUB" in tracked-out Inter caps; at the bottom-right, "FOUND WHEREVER THE BIRDS ARE" in tracked-out Inter caps. Studio render, slight paper texture, no shadow. Reference: a 1960s yacht-club membership card or a Royal Kennel Club member's pass.

---

## 404 (`templates/404.json`)

### 33. 404 illustration — Springer off-trail
- **Where** — `404.json → main.settings.illustration`
- **Aspect** — square, ~600×600
- **Caption fallback:** *ILLUSTRATION · A SPRINGER OFF-TRAIL, SNIFFING THE AIR*
- **Prompt:**
  > A small Bawden-style illustration, square 1:1, of a single Springer Spaniel pictured slightly lost in a meadow — head up, nose into the wind, ears alert, body tense with attention. Limited palette: Sage ground, Soft Ink line, Bone highlights, single Clay accent for the bird leaving the upper edge. Hand-drawn lithograph register, no text, no border. Used at 200px on the 404 page. Subtly humorous, never cute.

---

## Email and social (referenced in brief §18, optional for v1.0)

### 34. Email header — atmospheric brand-level
- **Aspect** — 16:9 or 3:1
- **Prompt:**
  > A 3:1 cinematic photograph of a Nantucket-style shingle-style cottage at first light, hydrangeas in bloom, a Springer Spaniel small in the lower-right third of the frame walking toward the front porch. Generous negative space in the upper third for the wordmark overlay. Cool Sage / Sea Glass tones, soft diffused light, slight overexposure. Used as the recurring header on monthly journal-digest emails. Quiet, restrained, *Town & Country* register.

### 35. OG image (social share)
- **Aspect** — 1200×630 (1.91:1)
- **Prompt:**
  > A 1.91:1 image suitable for OG-share use. Bone ground, the Audubon logomark centered upper-third in Soft Ink, "The Springer Club" Pinyon Script wordmark beneath at large size, "Found wherever the birds are." in Cormorant Italic at small size beneath. Generous margins. No additional decoration. Print-quality.

---

## Asset upload checklist

When images come back from generation, upload them in this order so the placeholders disappear cleanly:

1. **Brand foundationals** (#1, #2, #3) — `theme settings → Brand`. Fixes header / footer / member card / favicon immediately.
2. **Homepage hero** (#4) — `theme editor → home → Hero → Background image`.
3. **Featured tiles** (#5–#7) — replaced when the products themselves get media. For the homepage's pre-launch, set as `Featured products` block placeholder images via the section settings.
4. **About hero + section breaks** (#27–#29) — `page.about → Hero → image`, `Image break × 2`.
5. **Collection hero** (#10) — `collection → Hero → image`.
6. **PDP media** (#19–#26) — uploaded as Product media in Shopify admin per SKU; the gallery picks them up automatically.
7. **Editorial spread illustration** (#8) — `home → Editorial spread → image`.
8. **Journal artwork** (#30–#31) — uploaded as the Article's featured image in Shopify admin per entry.
9. **404 illustration** (#33) — `404 → main → illustration`.
10. **Email + social** (#34–#35) — outside the theme; live in Shopify Marketing or Settings → Online Store → Preferences.
