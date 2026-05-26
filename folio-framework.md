# The Folio Framework — Case Study Spec

## What this document is

This is the spec for writing portfolio case studies in the **Folio framework**. If you are a Claude session that has been handed this file by a designer (likely a UX / product designer at nueve.design), treat it as a complete brief: the designer will paste in raw project notes, screenshots, or a transcript, and your job is to turn that material into a case study that follows every rule below.

You do not need any other reference. Everything you need — the structure, the section menu, the writing voice, the visual conventions, the outcome format, the reflection format, the anti-patterns, a worked example, and a pre-flight checklist — is in this file.

The output you produce should be **another markdown file**, ready to drop into a portfolio site. Think Mowa Otun's site (https://www.mowaotun.com/) as the visual target — calm, premium, scannable, opinionated, story-driven, no wireframes anywhere.

---

## The Folio framework in one paragraph

A Folio case study is a **scrollable story**, not a process diagram. It earns the reader's attention in the first 3 seconds with a strong hero and a single-sentence summary, then walks them through five beats — **First impression → Obstacle → Logic + Leverage → Iteration → Outcome (FOLIO)** — using *sentence-style headlines* that state the actual idea (never bland labels like "Challenge" or "Solution"), short paragraphs with bold emphasis on the load-bearing phrases, and custom illustrated artifacts in place of stock UX deliverables. It shows how you think and how you leverage AI tools. It ends in numbers, takeaways, or visible respect — whatever the diagnosis demanded. The whole thing is **beautiful AND scannable**: a reader who skims only the eyebrow labels and sentence-headlines should still get the entire story.

---

## The FOLIO acronym

| Letter | Section role | Job to do |
| --- | --- | --- |
| **F** | First Impression | "Earn the scroll." You have 3 seconds. Hero image + an exec-summary line + a hint of the story. If the reader keeps scrolling, you've won. |
| **O** | Obstacle | Build tension. State the *real* problem — not the feature gap, the structural cause. Make the reader feel the friction. |
| **L** | Logic + Leverage | Show how you think (Guiding Policy + Coherent Actions) and how you leverage tools (AI). This is the "research and strategy" beat — but as story, not as a checklist. |
| **I** | Iteration | Show the journey. A/B versions, things that didn't work, real artifacts, real effort. Linear / clean process narratives are not believed. |
| **O** | Outcome | Land the result. Numbers, system, awards, reviews, learnings, respect — whichever is honest for this diagnosis. Always include before/after if you have it. |

These five beats are the spine. The actual section labels you choose can vary (see "Section menu" below) — the framework is loose on purpose.

---

## Cross-cutting principles

These rules apply to every section, every sentence, every visual.

1. **Earn the scroll in 3 seconds.** Hero, sentence-headline, and a glimpse of the result must be visible before the reader's thumb moves.
2. **The folio is just a hook.** It exists to get the reader to a real conversation (a slide deck, a call). It does not have to over-explain. Leave room for the meeting.
3. **No wireframes. No personas. No user flows.** These are the most boring deliverables in the field and they signal a template-follower. If you want to show research, show *sticky-note clusters with real quotes*, *journey maps with friction annotated*, or *affinity-map screenshots* — not the canonical UX-101 artefacts.
4. **Tell a story.** Every section should advance the narrative. If a section doesn't answer "and then what?" cut it.
5. **Show, don't tell.** Don't write "the layout was confusing." Show the old layout and circle the confusion. Don't write "users responded well." Show the quote.
6. **Beautiful AND scannable.** A reader skimming only the eyebrows + sentence-headlines must understand the whole case. A reader stopping on every paragraph must still find delight.
7. **Headers must mean something.** Never `Challenge` / `Solution` / `Process`. Always a complete sentence that states *the actual idea of the section* — see "Writing guide for sentence-headlines."
8. **Diagnosis is an explanation, not a goal.** The problem section is where you prove you can think. Frame the problem so well that the next move feels obvious — the reader should think "oh, then we can just do ___."
9. **Guiding Policy is a directional choice.** Not a list of actions. Not a goal. Not a slogan. It's the *governing logic* that explains every subsequent decision. Controversial framings beat safe ones.
10. **AI is leverage, not gimmick.** Mention which AI tools you used and *for what specific job* (writing copy, generating layouts, critiquing your work, building a prototype). Don't hide it; that's the modern equivalent of hiding that you used Figma.
11. **If the project is boring, make a new one.** With Cursor / Claude Code / Deep Research, a credible new project takes 1–2 days and ~$20. A boring project will sink even the best framework. Code is cheap.
12. **Outcome is not always a redesign.** Depending on the diagnosis, the honest outcome can be numbers, a launched product, a system, an award, user reviews, your own learnings, or hard-won respect. Pick the truthful one.
13. **First-person, confident voice.** "I joined as the sole designer." "I decided." "I was wrong about X." Not "the team" or "we explored options." (Plural is fine when it's literally true.)
14. **Show what didn't work.** A first attempt that you abandoned, an A/B you lost — both buy you trust.

---

## The case study skeleton

Every case study has this top-level structure. Treat it as the file outline.

```
[CHIP TAGS]   3–4 short caps-locked category tags

# [Project Name]                  ← italic serif display, single word or two
[1-line subtitle]                 ← e.g. "Mental Health Platform"

ROLE              DURATION              PLATFORM
[role]            [time]                [mobile / web / both]

[HERO IMAGE]                      ← edge-to-edge, with a small italic caption

────────────────────────────────────────────────────────────

[SECTION 1 EYEBROW]               ← small caps label
## [Sentence-style headline.]     ← serif, complete sentence, ends in period
[Paragraph with **bold** key phrases]
[Optional artifact]
[Optional sub-list: "What this ruled out", "What worked", etc.]
[Optional pull quote]

[SECTION 2 EYEBROW]
## [Sentence-style headline.]
...

(repeat 6–9 sections)

────────────────────────────────────────────────────────────

MORE CASE STUDIES                 ← links to siblings
← BACK TO ALL PROJECTS
```

**Page chrome details:**

- **Tags** — 3 or 4 chip-style category labels, all caps, e.g. `UX RESEARCH` `UI DESIGN` `PRODUCT STRATEGY` `MENTAL HEALTH`. Use them to telegraph what the case is *about* before the reader reads a word.
- **Title** — large italic serif. One or two words. The product or company name.
- **Subtitle** — one line, the category. "E-Commerce Platform." "Mental Health Platform." "AI in Construction."
- **Metadata** — three columns: Role / Duration / Platform. Use real, specific values. "Sole Product Designer" beats "Designer." "3 months" beats "Q1 2025." "Mobile & Desktop" beats "Multiplatform."
- **Hero image** — edge-to-edge, sets the emotional tone. See "Visual conventions" below for what makes a good hero.
- **TOC sidebar** — sticky left rail, "In this study" with each section name and an active-section highlight. Generated automatically from the section list.
- **Footer** — "MORE CASE STUDIES" with two sibling links + a "BACK TO ALL PROJECTS" link.

---

## The per-section block pattern

This is the unit you'll repeat 6–9 times. Every section follows the same shape. Memorise it.

```
[EYEBROW LABEL IN SMALL CAPS]

## A complete sentence that states the idea of this section.

A short paragraph (3–6 sentences) that elaborates, with **bold emphasis**
on the 1–3 phrases doing the most work. The paragraph should never
restate the headline — it should expand the headline.

[Optional: a custom artifact — diagram, image, embedded video, before/after frame]
*Italic caption explaining what we're seeing.*

(Optional sub-block — choose at most one per section)
### What this ruled out / What worked / What surfaced
- Bullet 1
- Bullet 2
- Bullet 3

(Optional pull quote — at most one per section, ideally one or two per case study)
> "A real verbatim quote from a user, stakeholder, or yourself."
```

**Rules for the block:**

- The eyebrow + headline + paragraph is mandatory. Everything else is optional.
- Never two artifacts in a row without text between them. Pace the page.
- A pull quote should never *replace* the paragraph; it should anchor it.
- Bullet sub-lists are typed, not narrative. "What this ruled out" / "What worked" / "What the UX review surfaced" / "What I scoped out early" — pick a label, then 3–5 short bullets.
- Each section should leave the reader with a single takeaway. If you can't summarise the section in one sentence, the section is doing two things — split it.

---

## Section menu

The five FOLIO beats can be expressed using any of these 12 named sections. Pick 6–9 per case study. The **bold** ones are nearly always present.

| Section label | What goes here | FOLIO beat |
| --- | --- | --- |
| Context | The setting. Who the user / company is, what the product is, why you joined. Use sparingly — only when the situation needs framing. | F |
| **The Problem** | The diagnosis. The non-obvious explanation of *why things are the way they are*. The structural cause, not the surface symptom. | O |
| The Challenge | A specific, concrete obstacle that made the problem hard to even study (e.g. "users wouldn't talk to me"). | O |
| The Impact | What the problem cost users / the business — the human consequence. Optional but powerful. | O |
| Constraints | Real limits: time, budget, no analytics, no copywriter, no photography. State them; don't whine about them. | O |
| First Attempt | The version you abandoned. Show it. Explain why it failed. Buys trust. | I |
| **My Strategy** | The Guiding Policy. The directional choice that explains every later decision. State it controversially. | L |
| Key Decision | One pivotal call you made — usually the one most worth remembering. State it as a sentence, not a feature. | L |
| Iteration | A/B versions. What you tried, kept, threw away. Before / after frames live here. | I |
| **The Process** | The Coherent Actions. What you actually did, in what order, with what tools (including AI). Make it specific. | L |
| **The Outcome** | Numbers, awards, reviews, system, launched product, learnings, respect. See "The Outcome block" below. | O (the second one) |
| **Reflection** | What you'd carry forward. 3–5 bulleted takeaways. See "The Reflection block." | (epilogue) |

**Rumelt-grounded definitions** (Stan's lessons cite Richard Rumelt's *Good Strategy / Bad Strategy*):

- **Diagnosis** = a non-obvious understanding of the real constraint, leverage point, or structural cause that explains why things are the way they are. *Not* a goal, slogan, or wish. It's an *explanation*. A good diagnosis makes the next move feel obvious.
- **Guiding Policy** = a coherent overall approach chosen to deal with the diagnosed challenge. *Not* a list of actions. *Not* a goal. *Not* a slogan. It's a directional choice — the logic that governs all subsequent decisions. The best ones are mildly controversial: "I decided every element on screen had to do therapeutic work before a single word was read."
- **Coherent Actions** = the specific, mutually reinforcing steps that follow from the Guiding Policy. They're the work itself.

These three map to **The Problem → My Strategy → The Process** but you don't have to use those exact labels.

**How to pick sections:** start with The Problem · My Strategy · The Process · The Outcome · Reflection (5). Add Context if the reader needs framing. Add The Challenge / The Impact / Constraints if there was a specific friction worth naming. Add First Attempt if you genuinely abandoned a version. Add Key Decision if there's one call worth isolating. Add Iteration if you have before/after worth showing. Stop at 9.

---

## Writing guide for sentence-headlines

Every section's headline is a **complete sentence**. This is the most important craft point in the framework. The reader's eye lands on the headline first; it has to do the work.

**Rules:**

1. **It must be a complete sentence ending in a period.** Not a noun phrase. Not a label.
2. **It must state the idea of the section, not name the section.** "The doctor booking page became a preview, not a form." — *not* "Booking Redesign."
3. **It must be readable cold.** A reader who only reads the headlines should understand the case study.
4. **Plain language. No jargon.** "Users hesitated because there was too much information" beats "Cognitive overload caused conversion drop-off."
5. **Specific over generic.** "Mental health is still taboo, and millions of people who need help never ask for it" beats "Stigma is a problem in healthcare."
6. **Conflict or surprise wins.** A headline that contains tension ("X looked like every other Y, and users called it out") will be read; a headline that confirms the obvious won't.
7. **Length: ~10–25 words.** Long enough to carry the idea, short enough to scan.

**Worked examples (study these — they are the bar):**

- "Mental health is still taboo, and millions of people who need help never ask for it." *(The Problem)*
- "When I tried to research user needs, people wouldn't talk about their mental states." *(The Challenge)*
- "The first version looked like every other health platform, and users called it out immediately." *(First Attempt)*
- "I decided that every element on screen had to do therapeutic work before a single word was read." *(My Strategy)*
- "The doctor booking page became a preview, not a form." *(Key Decision)*
- "Getting a construction cost estimate in Africa took four to six weeks — and was often wrong by the time it arrived." *(The Problem)*
- "We opened the platform to anyone with a tape measure, not just users who already had a survey plan." *(Key Decision)*
- "The landing page was trying to market and sell at the same time — and achieving neither." *(The Problem)*
- "I restructured everything around one principle: let people shop." *(My Strategy)*

Notice: every one of these is a complete sentence. Every one names a *specific* idea, not a *category*. Every one could be the punchline of a 30-second story.

---

## Writing guide for paragraphs

The paragraph under each headline expands the headline. It should never restate it.

**Rules:**

1. **Length: 3–6 sentences. ~40–100 words.** Anything longer breaks the scan.
2. **Bold the 1–3 load-bearing phrases.** A skimmer reading only the bold should get the gist of the paragraph.
3. **First-person, confident.** "I joined as the sole designer." "I decided." "I was wrong about that, and I changed it." Not "the team explored possibilities."
4. **Specific verbs, real numbers.** "I spoke directly with architects and civil engineers" beats "we did user research." "200,000+ active users" beats "many users."
5. **No filler.** Cut "It is important to note that," "In order to," "Throughout the project," etc.
6. **One paragraph per section.** If you need two, you have two sections.
7. **No marketing tone.** Don't sell yourself in the paragraphs — the work sells you. Neutral, observational, slightly understated voice wins.

**Bold-emphasis pattern in practice (from the references):**

> I joined Fox Holistic Care as the sole designer with a clear mission: build a platform where anyone could access a mental health professional **for free, at any hour of the day**. The product needed to serve everyone from people in acute crisis to those just beginning to think about their mental wellness. That breadth made **every design decision high stakes**, because one wrong note could make a vulnerable person close the tab.

The bolded phrases are the ones a skimmer needs.

---

## The Outcome block

The Outcome section ends the story. It must land. It is rendered as a **grid of 3–4 metric cells**, each cell containing a giant primary value (number or short phrase) and a small-caps descriptor below.

**Format:**

```
┌──────────────────────────┬──────────────────────────┐
│   [BIG NUMBER OR WORD]   │   [BIG NUMBER OR WORD]   │
│   [SMALL CAPS LABEL]     │   [SMALL CAPS LABEL]     │
├──────────────────────────┼──────────────────────────┤
│   [BIG NUMBER OR WORD]   │   [BIG NUMBER OR WORD]   │
│   [SMALL CAPS LABEL]     │   [SMALL CAPS LABEL]     │
└──────────────────────────┴──────────────────────────┘
```

In markdown, render as a 2×2 (or 1×3, 1×4) table or a series of large headings + caption pairs.

**What counts as an outcome (from Stan's lessons):**

> Design is not always the outcome. It can be **numbers**, **design** (before/after), **good reviews**, **a system**, **learnings and thoughts**, or **respect**. All depends on the challenge. From the diagnosis.

**Rule of thumb:** before/after designs + some numbers + your thoughts. If you have all three, use all three.

**Worked examples (the bar):**

| Big value | Small-caps label |
| --- | --- |
| `200,000+` | ACTIVE USERS IN THE UNITED STATES |
| `30–50%` | USER GROWTH RATE |
| `Verified` | PSYCHOLOGY TODAY DIRECTORY |
| `Secured` | INSURANCE COMPANY PARTNERSHIPS |
| `Best AI` | GITEX GLOBAL 2025 |
| `Instant` | VS 4–6 WEEK WAIT |
| `1 platform` | 2D + 3D + BOQ + AI COST |
| `Single page` | BROWSE + CART + CHECKOUT |
| `"Cute and nice"` | USER FEEDBACK ON ICON REDESIGN |
| `Launched` | MVP LIVE FOR GLOBAL AUDIENCE |
| `4–6 weeks` | FROM UX REVIEW TO LIVE PLATFORM |

**Rules for the cells:**

- The big value is short. A number with a unit, a word, a short phrase. Never a sentence.
- The small-caps label is specific. Not "USERS" — `ACTIVE USERS IN THE UNITED STATES`.
- A pull quote *can* be the big value, in quotes (see `"Cute and nice"`). It's powerful when the quote is the result.
- 3 or 4 cells is the sweet spot. 2 feels thin. 5+ feels like you're reaching.
- After the grid, place one final hero image — the polished, finished product — and caption it.

---

## The Reflection block

The Reflection is the epilogue. It is a **bulleted list of 3–5 takeaways**. Each bullet starts with a **bold lead phrase** + an em-dash + a short explanation.

**Format:**

```
## What I learned, and what I'd do differently.

A short paragraph framing the reflection. (Optional — sometimes the bullets stand alone.)

- **Lead phrase**— short explanation of what you'd carry forward and why.
- **Lead phrase**— short explanation.
- **Lead phrase**— short explanation.
```

**Worked examples (the bar):**

- **Stigma is a design problem**— when your users won't even talk about their needs during research, the interface has to earn trust on its own, silently and immediately.
- **Micro-interactions can do emotional work**— the sparkling stars and subtle animations weren't decorative. They were load-bearing elements of the calm strategy.
- **Affirmative language is a design layer**— "relax", "be calm", "we are here for you" were as intentional as any colour or layout choice.
- **Booking a doctor is choosing a person to trust**— turning the booking flow into an interactive preview instead of a form was the single biggest UX decision I made on this project.
- **Primary research is worth protecting**— even under launch pressure, the interviews with architects and civil engineers shaped every major decision.
- **AI critique accelerates iteration**— using an AI tool to challenge my layouts in real time saved rounds of internal review. This is now a standard part of my process.
- **Sidebar cart is a standout UX pattern**— users appreciated not being bounced between pages. I'd reach for this pattern early in any e-commerce project.
- **Brand identity lives in the details**— the icon redesign was called out specifically as "cute and nice." Small things carry big brand signal.

**Rules:**

- The bold lead phrase is a *claim*, not a topic. "Brand identity lives in the details" beats "On details."
- The em-dash is tight to the bold (no space). Then a space, then lowercase explanation.
- 3–5 bullets total. Fewer feels thin; more feels like you're padding.
- The last bullet is often a forward-looking one ("This is now a standard part of my process") — gives the reader a sense that you've grown.

---

## Visual conventions

The framework is as much visual as textual. Encode these conventions in your output (using markdown image references and detailed alt-text + captions, since you can't render the visuals yourself — the designer will produce or commission them based on your spec).

### Hero image style

The hero is the first thing a reader sees. It must communicate the project's *emotional category* in a glance.

- **Use real, culturally specific photography where possible.** Phone on a textured woven brown chair (for African jewellery). Laptop sitting on rough African stone (for African construction). Phone on warm fabric in soft window light (for mental wellness).
- **Avoid:** generic mockup-on-gradient, white-background product shots, isometric vector renders. They scream "template."
- **Composition:** the device or artifact occupies the centre or rule-of-thirds intersection; surrounding texture sets the mood.
- **Caption:** one italic line below the image: *"Mobile home page and desktop booking preview. Warm, inviting tone."* The caption explains what we're looking at AND names the emotional tone.

When briefing the designer, write something like:

> Hero suggestion: phone showing the [feature] resting on [culturally meaningful textured surface], soft directional light, warm palette. Avoid mockup-on-gradient.

### Custom illustrated diagrams

These replace the wireframe / persona / journey-map deliverables that signal "I followed a UX template." Common patterns to spec:

**Research sticky-note grid** — a 3×2 grid of coloured sticky notes (yellow, blue, pink, green, orange, purple), each note with a small-caps title and 2–3 lines of typewriter-style content. Used in The Challenge / The Problem to show indirect research findings.

```
┌─────────────────┬─────────────────┬─────────────────┐
│ USER INTERVIEWS │  JOURNEY MAP    │   THE PROBLEM   │
│ 19 conversations│ Where it goes   │ People need     │
│ 0 easy answers  │ wrong: every    │ support. Stigma │
│ "I just don't   │ step, actually  │ says asking =   │
│  talk about it" │                 │ weakness.       │
├─────────────────┼─────────────────┼─────────────────┤
│  AFFINITY MAP   │   KEY INSIGHT   │    DIRECTION    │
│ Clusters:       │ Asking for help │ Normalize.      │
│ ▸ Fear / Stigma │ = admitting     │ Don't dramatize │
│ ▸ Isolation     │ weakness.       │ the pain.       │
│ ▸ "Not bad      │ Design must     │ Make help feel  │
│   enough"       │ remove that.    │ like a calm,    │
│                 │                 │ safe choice.    │
└─────────────────┴─────────────────┴─────────────────┘
       WHAT WE LEARNED BEFORE WE KNEW WHAT WE NEEDED TO LEARN
```

**"The old way" friction infographic** — a hand-drawn-feel illustration showing the broken status-quo workflow, with messy filenames, scribbled durations, error rates. Use for The Problem when the existing process itself is the antagonist.

```
THE OLD WAY
┌────────────────────────┐
│ BUDGET_FINAL_v7.xlsx   │       6 WEEKS
│ quote1.pdf             │       ✗ ✗ ✗
│ quote2.pdf             │       ✗ ✗ ✗
│ final_FINAL.pdf        │       ✗ ✗ ?
│                "this is fine" 🔥
└────────────────────────┘
6 WEEKS · 3 SPECIALISTS · STILL WRONG 30% OF THE TIME
By the time the estimate arrived, inflation had already shifted the numbers.
SOURCE: 200+ CONTRACTORS & ARCHITECTS SURVEYED
```

**Friction-points block** — a column of typed-out friction labels in monospace caps with thin dotted borders, like:

```
NO CLEAR STARTING POINT
REPEATED INFORMATION
MISSING CALLS-TO-ACTION
SCATTERED LAYOUT
HIDDEN CART
WEAK HIERARCHY
            THE FRICTION POINTS
```

**Before → After frame** — two side-by-side panels labelled `INITIAL VERSION` and `FINAL VERSION` (or `BEFORE` / `AFTER`). Caption underneath: *"Before → After: initial 3D view vs. final polished, investor-ready version."* Used in Iteration.

**AI critique panel** — a side-by-side of "two layout directions explored with an AI tool before landing on the final approach." Cite the tool by name (Claude, Cursor, etc.) and what it did.

**Venn / overlap diagram for misalignment** — two faded circles showing "WHAT USERS NEEDED" vs. "WHAT THEY GOT," with mismatched icons in each. Used when the problem is a category mismatch.

### Pull quote

Italic serif, with a left vertical-bar accent. Real verbatim quote (user, stakeholder, you).

```
> "People from the UK would literally say, 'Hey, they like African jewelry
>  and they would like to buy.' It was a diverse target audience that we
>  were offering this service to."
```

### Outcome metric grid

See "The Outcome block" above. In markdown, often best as a borderless table or a series of paired headings.

### Decorative touches

The reference site has a small floating animated butterfly, decorative emojis (🎀 ✨ 🫧), sparkle micro-interactions on nav. You don't write the animation — but you *can* mark places in your markdown where the designer should add a touch of motion or sparkle, e.g. `<!-- sparkle micro-interaction here -->`.

### What "scannable" actually means

Open the case study in your head. Skim only:

1. The chip tags.
2. The title + subtitle.
3. Each section's eyebrow + sentence-headline.
4. The Outcome metric grid.
5. The Reflection bold-lead phrases.

You should still know the entire story. If you don't, the headlines are too vague — rewrite them.

---

## AI as leverage — explicit guidance

Stan's lessons are unambiguous: **AI is the leverage that separates a Folio from a 2018 portfolio**. Show it.

**Where to mention AI in a case study:**

- **In The Process**: name the tool and the job. "I used an AI tool to write the platform's affirmative copy and content at scale." "I used an AI tool to pressure-test layouts and critique my own designs in real time." Always *which tool*, always *for what specific job*.
- **In Reflection**: as a takeaway. "AI critique accelerates iteration— using an AI tool to challenge my layouts in real time saved rounds of internal review. This is now a standard part of my process."
- **In My Strategy**: when the leverage is structural — e.g. "AI also allowed the platform to model price fluctuations over time."

**Tools to name (when accurate):** Claude, Claude Code, Cursor, ChatGPT, Midjourney, Figma AI features, Deep Research, Perplexity. Be specific — "an AI tool" is okay but a named tool is better when you can.

**The "make a new project" escape hatch.** If the designer's old projects are boring (linear process, no real obstacle, generic outcome), the right move is *not* to dress them up with prettier visuals. The right move is to spend a weekend building a new project end-to-end with AI:

> Idea → Deep Research → Claude Code. 1 day. ~$20.

If the designer asks you "how do I make this case study interesting?" and the project itself is genuinely thin, recommend the new-project route honestly.

---

## Anti-patterns

Things that mark a case study as template-following and untrustworthy. Avoid all of these.

**Anti-patterns in structure:**

- **Wireframes as deliverables.** A wireframe says "I followed a process." Nobody hires for that.
- **Personas with names and ages.** Especially "Sarah, 32, marketing manager." The reader checks out immediately.
- **User flows / journey maps as the main artifact.** Acceptable as a small annotated visual *inside* a section; never as the proof itself.
- **A "Challenge" section followed by a "Solution" section.** This is the signature of a portfolio template. Replace both with sentence-headlined sections.
- **A linear, clean process narrative.** "Research → Define → Ideate → Prototype → Test → Ship." Nobody believes this happened. Show what didn't work.

**Anti-patterns in writing:**

- **Vague headlines.** "User Research." "The Solution." "The Process." All forbidden.
- **Marketing voice.** "We crafted a delightful experience that wowed users." Nobody believes this. Neutral observation wins.
- **Plural "we" when you were the sole designer.** Misrepresents the work.
- **Empty bullets.** "Conducted user research. Synthesised insights. Iterated on prototypes." — these are job descriptions, not bullets.
- **Result statements without numbers or quotes.** "Users loved it." Show the love.

**Anti-patterns in visuals:**

- **Generic stock photography** in the hero. Especially smiling-team-around-laptop.
- **Mockup on white gradient with subtle drop shadow.** The default-Figma-mockup look.
- **Isometric / 3D vector illustrations of the workflow.** Looks like every B2B SaaS pitch deck.
- **Process diagrams with circular arrows** and "Discover / Define / Develop / Deliver" type loops. Death.
- **Screenshots without annotation.** A naked screenshot doesn't show your thinking. Annotate or caption.

**Anti-patterns in metrics:**

- **Percentages with no baseline.** "Increased engagement by 40%" — 40% of what? Show the absolute number too.
- **Vanity metrics.** "5,000 likes." Pick a metric that *connects to the diagnosis*.
- **No metrics at all.** If the project genuinely shipped, find *something* — even a quote, an award, a launch date.

---

## A complete worked example

Below is a full case study skeleton, filled in. Treat it as the model. (Names and details are abstracted from the reference cases — don't reuse them verbatim; use them to calibrate voice and shape.)

---

```
[CHIP TAGS]   FINTECH · UX RESEARCH · DASHBOARD · B2B

# Threadline
Invoice reconciliation for finance teams

ROLE                    DURATION                PLATFORM
Founding Designer       5 months                Web (Desktop-first)

[HERO IMAGE: Dark interface mockup of a reconciliation dashboard
floating above a textured wooden desk surface, soft window light.]
*Threadline reconciliation dashboard — invoice matching against bank ledger.*

────────────────────────────────────────────────────────────

CONTEXT
## I joined as the first designer on a product the founders had built in a spreadsheet.

Threadline started as a 47-tab Excel workbook one of the co-founders used to
reconcile invoices against bank statements at her old finance role. Twelve
customers were already paying for an early version. **My job was to take the
spreadsheet's logic and turn it into a product** that a finance team could trust
on their first day. I was the only designer; I worked directly with the two
founders and a backend engineer.

────────────────────────────────────────────────────────────

THE PROBLEM
## Finance teams don't trust new reconciliation tools — because the cost of one
## wrong match is a week of unwinding.

I shadowed three accountants doing month-end reconciliation. The friction
wasn't the speed of matching — it was the **fear of an automated wrong match**.
Every accountant I watched did the same thing: even when their existing tool
suggested a match, they re-checked it manually. The tool wasn't saving them
time; it was just adding a step. The structural cause: **finance is a
trust-and-audit profession, and an unexplained automated decision is worse
than no decision at all**.

[ARTIFACT: 3×2 sticky-note grid of research findings]
┌─────────────────┬─────────────────┬─────────────────┐
│ SHADOW SESSIONS │  PAIN MOMENTS   │  WHAT THEY SAID │
│ 3 accountants   │ Manual re-check │ "If I can't see │
│ 2 hrs each      │ after every     │  why it matched │
│                 │ auto-suggestion │  I have to      │
│                 │                 │  re-check it."  │
├─────────────────┼─────────────────┼─────────────────┤
│  WHAT DROVE IT  │   KEY INSIGHT   │    DIRECTION    │
│ No visible      │ Trust isn't     │ Show the why,   │
│ reasoning.      │ optional in     │ not the answer. │
│ Black-box       │ finance — it's  │ Match = always  │
│ matching.       │ regulatory.     │ explainable.    │
└─────────────────┴─────────────────┴─────────────────┘
*What the shadow sessions surfaced before we wrote a single line of UI copy.*

> "If I can't see why your tool matched it, I have to re-check it manually
>  — which is the whole job you said you'd save me from."

────────────────────────────────────────────────────────────

MY STRATEGY
## I decided every automated match had to ship with its own audit trail, visible
## by default.

The Guiding Policy was **"explainable by default, automatable by choice."** Every
match the system proposed was rendered with a small reasoning panel — the
matching fields, the confidence score, the source documents — visible without
a click. The accountant could approve, reject, or open the audit trail for
deeper review. Only after that workflow was solid did we add bulk-approve.
Speed without trust was the trap; trust *then* speed was the route.

### What this ruled out
- Black-box "AI auto-reconciliation" framings, which the market was already saturated with
- Hiding confidence scores below a threshold — accountants wanted to see the low-confidence matches *more*, not less
- A clean dashboard with no inline reasoning, even though it tested better in 5-second tests

────────────────────────────────────────────────────────────

KEY DECISION
## We made the lowest-confidence matches the most prominent thing on the page.

Counterintuitive, but it's what the research demanded. Accountants wanted to
spend their attention where the system was uncertain. **The dashboard now sorts
proposed matches by inverse confidence by default** — the ones the system is
least sure about appear first, fully expanded. High-confidence matches collapse
into a "23 ready to approve" pill at the top. One click, all approved.

[ARTIFACT: Annotated screenshot of the matches view]
*Inverse-confidence sort. Low-confidence matches expanded; high-confidence
collapsed into a single approve-all pill.*

────────────────────────────────────────────────────────────

ITERATION
## The first version of the audit trail was a modal — and accountants closed it
## without reading.

[ARTIFACT: Before / After frame]

INITIAL VERSION                    FINAL VERSION
[Screenshot of modal-based         [Screenshot of inline expanded
 audit trail]                       audit panel under each match]

*Before → After: modal vs. inline. The modal felt like a quiz; the inline
panel felt like part of the work.*

When the audit trail lived in a modal, accountants treated it as an
interruption and closed it. When we inlined it under each proposed match,
they read it. Same content; different relationship to the workflow.

────────────────────────────────────────────────────────────

THE PROCESS
## I used Claude to pressure-test the reasoning UI before showing it to real
## accountants.

In a five-month timeline with no design partner, I needed a fast, honest
critic. **I used Claude as a daily reviewer**: I'd paste a screenshot and a
short context note and ask it to argue against the design from the perspective
of an accountant who's been doing reconciliation for fifteen years. The
critiques weren't always right, but they were always sharp — and they caught
two structural issues (a misleading confidence label, an ambiguous match-source
icon) before our first round of customer interviews. By the time I sat down
with real accountants, I'd already pre-empted the obvious objections.

────────────────────────────────────────────────────────────

THE OUTCOME
## Threadline's first 12 paying customers stayed; we tripled the user base in
## the quarter after launch.

| Metric           | Detail                                       |
| ---------------- | -------------------------------------------- |
| **12 → 38**      | PAYING CUSTOMERS, FIRST QUARTER POST-LAUNCH  |
| **0**            | CUSTOMERS LOST FROM THE EXCEL ERA            |
| **94%**          | OF PROPOSED MATCHES APPROVED WITHOUT EDIT    |
| **"It thinks like I do"** | VERBATIM QUOTE FROM CUSTOMER #1 ON LAUNCH DAY |

[FINAL HERO IMAGE: Full desktop view of the polished Threadline dashboard,
matches view, inline audit trails visible.]
*Threadline at launch — explainable by default, automatable by choice.*

────────────────────────────────────────────────────────────

REFLECTION
## What I'd carry into every B2B trust-heavy product from here.

- **Trust is a layout problem**— in finance, where you put the reasoning is more important than how good the matching algorithm is. Inline beat modal by a margin no one expected.
- **Inverse-confidence sort is a strong default for review work**— putting the uncertain items first, by default, matched how accountants actually want to spend attention.
- **AI critique catches the obvious before customers do**— using Claude as a daily critic saved at least two rounds of internal review and caught real structural issues. Now standard in my process.
- **Found-customers tell you what to keep, not what to build**— our first 12 customers anchored the workflow, but they couldn't see around the corner to inverse-confidence sort. Real research with new prospects mattered for the *new* ideas.

────────────────────────────────────────────────────────────

MORE CASE STUDIES
[Sibling 1]   [Sibling 2]
← BACK TO ALL PROJECTS
```

---

## Pre-flight checklist

Before considering a case study done, confirm every box.

**Earned the scroll**
- [ ] Hero image is specific, not generic mockup-on-gradient
- [ ] Subtitle states the category in 1 line
- [ ] Reader can see the project name + category + a hint of the result without scrolling

**Sentence-headlines do the work**
- [ ] Every section has a complete-sentence headline ending in a period
- [ ] Reading only the eyebrows + headlines tells the story
- [ ] No headline is a bare label ("Challenge," "Solution," "Process")

**Show, don't tell**
- [ ] At least one custom artifact in the first half of the case (research grid, friction infographic, or before/after)
- [ ] At least one before/after or first-attempt-vs-final somewhere in the case
- [ ] No naked screenshots — every visual has a caption

**Diagnosis is real**
- [ ] The Problem section explains the *structural cause*, not the surface symptom
- [ ] The Strategy section is a directional choice, not a feature list
- [ ] The Process section names specific actions and at least one AI tool with its job

**Outcome lands**
- [ ] 3 or 4 metric cells in the Outcome grid
- [ ] At least one number with absolute context (not just a percentage)
- [ ] At least one non-numeric outcome if appropriate (award, quote, launch, system)
- [ ] A final polished hero image after the metrics, with caption

**Reflection holds up**
- [ ] 3–5 bulleted takeaways with bold-lead phrasing
- [ ] At least one bullet is forward-looking ("now standard in my process")
- [ ] No takeaway is generic ("collaboration is important")

**No anti-patterns**
- [ ] Zero wireframes, personas, user flows
- [ ] Zero "Challenge / Solution" labels
- [ ] Zero process-loop diagrams
- [ ] First-person voice; "we" only when literally a team
- [ ] No marketing tone

**Beautiful AND scannable**
- [ ] A reader skimming for 30 seconds gets the whole story
- [ ] A reader stopping on every block finds at least one moment of delight (a quote, a custom diagram, a punchy headline)

If any box is unchecked, fix it before shipping.

---

## End of spec.

You now have everything you need. When the designer hands you raw notes for a project, your job is:

1. Ask 1–2 sharp clarifying questions if the diagnosis or outcome is unclear. (The diagnosis is the load-bearing element; if the designer can't articulate it, help them articulate it before writing.)
2. Choose 6–9 sections from the menu.
3. Draft a sentence-headline for each section *first*, before writing any paragraphs. The case study lives or dies on those headlines.
4. Write the paragraphs, with bold emphasis on 1–3 phrases each.
5. Spec the artifacts (custom diagrams, photo briefs, before/after frames) — the designer will produce or commission them.
6. Build the Outcome grid and the Reflection bullets.
7. Run the pre-flight checklist.

Default to the prescriptive voice of this document. The designer reading your output should feel like they're being handed a finished case study, not a draft.
