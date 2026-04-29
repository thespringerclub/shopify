# The Springer Club — Shopify theme

A Shopify Online Store 2.0 theme built on the **Horizon** starter pattern. All page content is composed from editable, mix-and-match Liquid sections and theme blocks.

Brand reference: `springer-club-website/project/uploads/web-design-brief.md` (the working brief). The theme's content choices, palette, and microcopy are taken directly from that document.

---

## Quick start

1. Install the **Shopify CLI** (`shopify theme dev`).
2. Connect to a development store: `shopify theme dev --store your-dev-store.myshopify.com`. The CLI uploads the theme and serves a live preview.
3. To bundle for upload via the Shopify admin: `shopify theme push --unpublished`.
4. Theme settings are at **Online Store → Themes → Customize**. Page content is at **Customize → [Template]**.

The theme expects the following Shopify objects to exist:
- A blog with handle `journal` (for the journal index `/blogs/journal`).
- A page with handle `about` (uses the `page.about.json` template — set the page's template to "page.about" in the page editor).
- Standard customer accounts enabled (login / register / addresses).
- A main menu and footer menu (assigned in `Header` and `Footer` section settings, defaults to `main-menu` and `footer`).

---

## Architecture

```
springer-club-theme/
├── assets/                # base.css, theme.js
├── blocks/                # reusable theme blocks (cross-section building blocks)
├── config/                # settings_schema.json, settings_data.json
├── layout/                # theme.liquid (global wrapper)
├── locales/               # en.default.json (microcopy)
├── sections/              # section library (one Liquid file per section)
│   ├── header.liquid, footer.liquid, header-group.json, footer-group.json
│   └── (every section is independently editable in the theme editor)
├── snippets/              # icon set, brand lockup, cards, drawer/overlay markup
└── templates/             # JSON templates that compose sections per surface
    └── customers/         # standard Shopify customer Liquid templates
```

### Editable modules

Every page is composed of **sections** — each section is a Liquid file with its own JSON schema (settings + blocks). Sections are independently:
- **Reorderable** within a template (drag in the theme editor)
- **Reusable** across templates (the same `hero` section drives Home, Collection, Journal, About)
- **Configurable per-instance** (each placement has its own settings)

Sections that present free-form composition (`hero`, `editorial-paragraph`, `editorial-spread`, `about-teaser`, `about-section`) accept any **theme block** from `blocks/` — eyebrow, heading, body, button, image, hairline, brand-lockup, pull-quote, spacer, script-line. Blocks are added/reordered via the theme editor and rendered with `{% content_for 'blocks' %}`.

Purpose-specific sections (`product-main`, `collection-grid`, `featured-products`, `product-story`, `product-related`) have a fixed structure but expose granular settings.

### Theme blocks (`blocks/`)

| Block | Purpose | Brief |
|---|---|---|
| `_eyebrow` | Small all-caps Cormorant overline | §6, §11 |
| `_heading` | Cormorant headline (hero / page / h2 / h3 scales) | §6 |
| `_body` | Body paragraph (Cormorant italic, Inter editorial, Inter body, Inter small) | §6, §11.10 |
| `_button` | Primary / secondary / link / link-italic | §12 |
| `_image` | Image with placeholder fallback, ratio + tone settings | §13 |
| `_hairline` | Decorative or structural rule (Soft Ink / soft / Clay) | §5, §12 |
| `_brand-lockup` | Wordmark + logomark in 4 variants | §8 |
| `_pull-quote` | Italic Cormorant pull-rule | §11.10 |
| `_spacer` | Negative-space block (brief §11.3 — "empty space is part of the design") | §11.3 |
| `_script-line` | Decorative Pinyon Script line, restricted to one moment per page | §6 |

### Sections

| Section | Used on | Notes |
|---|---|---|
| `header` + `header-group` | All templates | Sticky, transparent on home (toggle in theme settings) |
| `footer` + `footer-group` | All templates | Three-column with email capture |
| `cart-drawer` | All templates (loaded in `theme.liquid`) | Side-out drawer; refreshed via Section Rendering API |
| `hero` | Home, Collection, About, Journal index | Accepts blocks; image / tinted ground / placeholder fallback |
| `editorial-paragraph` | Home (intro), About | Centered Cormorant-italic editorial paragraph |
| `featured-products` | Home | 3-up tiles with `product` blocks |
| `editorial-spread` | Home, anywhere | 2-column image + copy on tinted ground |
| `about-teaser` | Home | Centered teaser with optional small illustration |
| `about-section` | About | Numbered editorial section (I. / II. / III.) |
| `image-break` | About, Journal entry, anywhere | Full-bleed or contained editorial image |
| `members-cta` | About closing, anywhere | "Members in Good Standing — the rolls are open" |
| `collection-grid` | Collection | Sort bar, 9-per-page, end-of-collection moment |
| `product-main` | PDP | Vertical scroll gallery (no carousel) + sticky buy module |
| `product-story` | PDP | Magazine-spread story moment, reads from product metafields |
| `product-mark` | PDP | Mark close-up + descriptive copy |
| `product-related` | PDP | "Pairs well with" 3-up |
| `journal-grid` | Journal index | 2-column journal tiles |
| `article-hero`, `article-body`, `article-continue` | Journal entry | Magazine-style entry |
| `customer-login`, `customer-register`, `customer-account` | Customer area | Standard Shopify forms with brand register |
| `cart-page` | Cart page (`/cart`) | Direct-cart fallback |
| `search-results` | Search page | Apparel + Journal results |
| `not-found` | 404 | Editorial moment, never a "we're sorry" page |
| `page-content` | Default page | Renders `page.content` from Shopify admin |

### Snippets

- `icon` — single SVG icon set (search, account, bag, close, arrow-left/right, plus, minus, menu, filter)
- `brand-lockup` — wordmark + logomark in 4 variants
- `placeholder-image` — labeled placeholder used everywhere images aren't yet uploaded
- `mark-placeholder` — small inline labeled box (logomark stand-in)
- `search-overlay` — full-bleed search overlay
- `toast` — bottom-right notification (auto-dismiss in 4s)
- `product-card` — collection grid tile
- `journal-card` — journal grid tile
- `member-card` — account dashboard card
- `pagination` — restrained prev/next + page count

### Section groups

- `header-group.json` — wraps `header.liquid`. Add an announcement bar above the header by placing it in this group.
- `footer-group.json` — wraps `footer.liquid`. Add additional sections above the footer by placing them in this group.

---

## Product metafields

The PDP reads optional editorial fields from product metafields under the namespace `springer`. Configure them in **Settings → Custom data → Products**:

| Key | Type | Used by | Notes |
|---|---|---|---|
| `subtitle` | Single line text | `product-main` | "For the woman who thought she lived alone." |
| `tone` | Single line text | `product-main`, `product-card`, `product-story` | One of: `tone-sage`, `tone-deep`, `tone-seaglass`, `tone-warm`, `tone-bone` — placeholder ground when no media |
| `mark_label` | Single line text | `product-main`, `product-mark` | Short uppercase label for the mark placeholder |
| `mark_image` | File (image) | `product-mark` | Mark close-up artwork |
| `story_kicker` | Single line text | `product-story` | "On the Springer sprawl" |
| `story_title` | Single line text | `product-story` | "She is not, in fact, alone." |
| `story_body` | Rich text | `product-story` | Two-paragraph editorial body |
| `story_pull` | Single line text | `product-story` | The pull quote |
| `story_image` | File (image) | `product-story` | Editorial illustration / photo |
| `specs` | Rich text | `product-main` (specs accordion) | Use a `<dl>` with `<dt>`/`<dd>` for material / fit / mark / construction / origin |

The PDP's section schema also exposes per-template overrides in the theme editor — if you don't want to use metafields you can set the story copy directly in **Customize → Product → Product story**.

## Article (journal) metafields

| Key | Type | Used by | Notes |
|---|---|---|---|
| `tone` | Single line text | `journal-card`, `article-hero` | Placeholder ground when no featured image |

---

## Color tokens

| Token | Hex | Where it lives |
|---|---|---|
| `--bone` | `#F5EFE4` | Default page ground |
| `--sage` | `#9AAE9C` | Section grounds, signature |
| `--seaglass` | `#B8C7D1` | Tertiary backgrounds, hero overlays |
| `--clay` | `#C48B6F` | Hairlines and hover-only accent (never a fill) |
| `--ink` | `#2C2A28` | All primary type, hairlines, button fills |

These are injected into a `<style>` tag in `layout/theme.liquid` from `settings.color_*`. They should not be changed without consulting the brand team.

---

## Typography

- **Display:** Cormorant Garamond (Google Fonts) — headlines, editorial text
- **Script:** Pinyon Script (Google Fonts) — wordmark only (one decorative moment per page maximum)
- **UI / Body:** Inter (Google Fonts) — all UI text, navigation, buttons, body paragraphs

Fonts are loaded in `layout/theme.liquid` via Google Fonts (preconnect + display=swap).

The brand uses no other fonts. Don't introduce a sans-serif headline pattern. Don't use Pinyon for anything other than the wordmark.

---

## Motion (brief §15)

The theme is intentionally restrained. There are no scroll-triggered fades, no parallax, no skeleton screens, no spring/bounce. The only motion is:

- 200ms cross-fade between routes (Shopify's default)
- 300ms ease-out cross-fade on image hover (cards)
- 300ms ease-out drawer slide
- ≤100ms button hover state transitions

If a stakeholder asks for fancy motion, refuse — the brief is explicit.

---

## What's not built (out of scope per brief §1)

- Subscription products
- Gift card configurator
- Multi-region storefronts (the country selector exists in the footer but no merchandising-by-region logic)
- Complex variant configurators
- Customer reviews integration
- Loyalty point system

Hooks are left open — the section / block architecture should accommodate these without needing structural changes.

---

## Image generation

Every placeholder in the theme has a corresponding ChatGPT-Images-2 prompt in `IMAGE-PROMPTS.md`. The placeholders are **labeled** — the caption reads exactly which image is missing — so you can shoot or generate them in any order.

## Forbidden patterns (brief §17)

These are the patterns most likely to break the brand. Refuse them even if a stakeholder requests them:

- Glossy gradients, neon CTAs, bright accent colors
- "As seen in" press-logo bars, founder photo + handwritten note, urgency banners, countdown timers
- Stock pet imagery (every Springer photograph must be a real Springer in a real setting)
- Pawesome-tier copy
- Sans-serif headlines
- Pinyon Script anywhere except the wordmark
- Audubon-style illustration in editorial moments (Audubon = logomark only)
- Pop-ups within 30 seconds of arrival
- Hover effects with bounce, glow, or lift
- Quick-add buttons on collection tiles
- Cart "free shipping over $X" progress bars
- Sale stickers, "best seller" flags

A single hairline Clay flag on a product image is the only exception, and only when a SKU is genuinely limited.
