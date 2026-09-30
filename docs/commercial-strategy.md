# Commercial readiness strategy

Written 2026-09-30. The plan for taking Kamaru from a private study app for a
few friends to something that can be sold. General knowledge, not legal advice.

---

## 1. Blockers — check first (week 1)

- **Visa.** On a Japanese work visa, a paid side business may need
  資格外活動許可 (permission for activity outside your status). Confirm before
  taking any money. This is the one item that can cause real trouble.
- **Name.** Search J-PlatPat for "Kamaru" and "華丸" before building a brand.
- **Legal pages Japan requires for online sales:**
  - 特定商取引法に基づく表記 (mandatory seller disclosure)
  - Terms of service
  - Privacy policy covering APPI (Japan) and UU PDP 27/2022 (Indonesia)
  - Refund policy
  - Disclaimer: not affiliated with the JLPT organisers (JEES / Japan
    Foundation) or BJT (日本漢字能力検定協会)

## 2. Content and IP cleanup (1–2 weeks)

Words themselves can't be copyrighted. What is protected is the compiled list
(which words were picked and how they're arranged) and anything written, such
as sentences and definitions.

What comes from jtest.net today:

| Field | Source | Action |
|---|---|---|
| Word selection | jtest | Keep the words; rebuild the selection and order as ours |
| Chapter/section structure and titles | jtest (EN/ID titles are translations) | Replace with our own structure |
| `meaning_vi` | jtest | Drop |
| `meaning_en` / `meaning_id` | Ours, but N3 EN was translated from their VI | Rewrite from the Japanese word |
| N2/N4 examples | Ours (generated 2026-04) | Keep |
| **N3 examples** | **jtest** (1,371/1,390 have their （reading） format and a `vi` field) | **Replace. Highest priority.** |
| Passages and audio | Ours | Keep |

Our own structure should really be ours, not a light edit of theirs:
- Order by real-world frequency (as BJT is built).
- Use our own groups and titles.
- Add words they don't have, and drop ones we don't think belong at that level.

Renaming chapters or swapping a few words is not enough.

Other cleanup:
- Rename the `jtest_*.json` files. They currently sit in `/public`, so anyone
  can download them without logging in.
- Audit the grammar banks, reading banks, `listening-questions.json` and
  icons. Each must be ours or under a licence that allows commercial use.
- Have a native speaker review the AI-written content (a Japanese friend, or
  a freelancer on Coconala).
- Git history still contains the old data. Start a fresh repo, or clean the
  history, if the repo is ever made public.
- Videos: switch the font from Hiragino to Noto Sans JP (OFL) to remove any
  doubt.

Other items:
- **BJT:** words only from the official guide. Never show its pages,
  questions or audio.
- **JLPT/BJT names:** these are trademarks. Descriptive use ("for JLPT N2
  practice") is fine; don't use their logos.
- **ElevenLabs:** a paid plan includes a commercial licence. The free tier
  requires crediting ElevenLabs and allows no commercial use.
- **Remotion:** the free licence covers individuals and companies of up to
  3 people, including commercial use.

## 3. Positioning

Don't compete on vocab lists. What's rare:
- **Indonesian as the interface language.** Many Indonesians come to Japan
  through 特定技能 and the trainee programmes, and most materials are in
  English or Vietnamese.
- **BJT preparation.** Almost nobody covers it, and it matters for office jobs
  in Japan.
- **Stories with native-quality audio,** word-by-word highlighting and
  tap-to-look-up.

Pitch: *"Japanese for Indonesians building a career in Japan: JLPT to BJT."*

## 4. Test demand before building payments

- Post 15–20 shorts on TikTok, YouTube Shorts and Reels, using the video
  pipeline in `video/`.
- Put up a landing page with a waitlist, and measure sign-ups per video.
- Keep the friend group as beta testers and watch whether they return daily.

## 5. Technical readiness

| Area | Needed |
|---|---|
| Security | Check Supabase RLS on every table; keep paid content out of `/public` |
| Payments | Stripe (works from Japan). Indonesian users mostly pay by e-wallet (GoPay, OVO), so look at Xendit or Midtrans. Price per country. |
| Accounts | Account deletion, data export, email login alongside OAuth |
| Reliability | Error tracking (Sentry), analytics, backups |
| Paywall | Free: N4 plus chapter 1 of each level. Paid: all stories and audio, BJT, mock exams |

## 6. Running costs

Content costs are paid once, not per user:
- **ElevenLabs:** a story is voiced once and heard by every user. A Creator
  plan is about $22/month for 100k credits.
- **Cloudflare R2:** no charge for downloads, so audio stays cheap as users grow.
- **Supabase:** free, then about $25/month on Pro.

Fixed costs stay under about $60/month. Around 10–15 subscribers at roughly
¥980/month (less in Indonesia) cover them.

## Order

1. Visa and legal checks
2. Content cleanup
3. Shorts and waitlist to test demand
4. Paywall and legal pages
5. Launch to the waitlist
6. More content: BJT stories, quizzes, N3 ch5 audio

Steps 1–2 are needed at any scale. Steps 4 and later depend on step 3 showing
real demand.
