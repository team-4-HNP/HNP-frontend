# 🌐 StayMate AI

> **Next-Generation Travel Curation & Social Matching**

StayMate AI is a specialized travel platform built to eliminate the friction of solo travel. We've replaced the traditional, tedious "manual scrolling" experience with a voice-and-text intelligent concierge and a secure matchmaking system for cost-sharing.

YouTube Demo:
https://youtu.be/mk_OV765gGQ

---

## 🛠️ Core Solutions

### 1. Automated Accommodation Discovery

Stop browsing through endless lists on legacy travel sites. StayMate AI acts as your personal travel agent:

- **Intelligent Curation** — Instead of manual filtering, describe your ideal trip through a clean chat interface.
- **Voice-Enabled Search** — Integrated with OpenAI Whisper, allowing you to plan trips hands-free via voice commands.
- **Contextual Filtering** — Instantly recalibrate stays based on:
  - Price Range
  - Stay Type (Villa / Hotel)
  - Geographical Vibe (Beach / City / Mountain)

### 2. Social Matchmaking & Cost Optimization

StayMate AI solves the "solo traveler's tax" by connecting you with compatible partners to share premium accommodations.

- **Roommate Matching** — Find fellow travelers with identical budget tiers and accommodation preferences.
- **Split-Bill Economy** — Access high-end villas and suites that would be unaffordable alone by sharing costs with verified StayMates.

---

## 💻 Technical Architecture

| Layer | Technology |
| --- | --- |
| **Frontend** | Next.js (App Router) for a seamless, fast user experience |
| **Styling** | Tailwind CSS + Shadcn/UI for a professional, minimalist dark-mode aesthetic |
| **Conversational AI** | OpenAI GPT-4 for intent understanding and stay recommendations |
| **Voice Layer** | OpenAI Whisper for high-accuracy voice-to-text processing |
| **Dev Environment** | Built with Cursor, leveraging AI-native coding workflows for rapid iteration |

---

## 🎨 Design Philosophy

The platform follows a **"Function-First"** design language:

- **Sidebar Workspace** — Organize multiple itineraries (e.g., *Tokyo Trip*, *Barcelona Summer*) in a clean, distraction-free sidebar.
- **Zero-Friction UI** — Minimalist input fields and intuitive toggles that prioritize user intent over complex menus.

---

## 🚀 Getting Started

### Prerequisites

- Node.js `18+`
- npm / pnpm / yarn
- An OpenAI API key (for GPT-4 and Whisper)

### Installation

```bash
git clone https://github.com/your-username/staymate-ai.git
cd staymate-ai
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
OPENAI_API_KEY=your_openai_api_key
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗺️ Future Roadmap

- [ ] **Verified Identity** — Integration of secure ID verification for roommate trust.
- [ ] **In-App Payment Splitting** — Seamless cost distribution directly within the platform.
- [ ] **Group Stays** — Expanding matchmaking for larger groups and digital nomad hubs.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a pull request.

## 📄 License

Released under the [MIT License](LICENSE).

---

<p align="center">
  <strong>StayMate AI</strong> — <em>Travel better, pay less, stay together.</em>
</p>
Copy `.env.example` to `.env.local` when you start wiring auth, APIs, or OpenAI.

## Deploy (Vercel)

No backend or secrets are required for the current skeleton. Optional later: set `NEXT_PUBLIC_APP_URL` to your production URL.

### Import from Git (recommended)

1. Push this repo to GitHub / GitLab / Bitbucket.
2. In [Vercel](https://vercel.com), choose **Add New… → Project** and import the repository.
3. Leave defaults: **Framework Preset: Next.js**, **Root Directory:** `./` (repository root with `package.json`).
4. Add environment variables only when you add APIs or auth; none needed now.
5. **Deploy**. Production URL appears after the build succeeds.

### CLI

```bash
npx vercel login
npx vercel            # preview deployment
npx vercel --prod     # production
```

CI/non-interactive: create a token under Vercel **Account Settings → Tokens**, then `VERCEL_TOKEN=... npx vercel --prod --yes` from this directory (project linking uses `.vercel/`, which is gitignored).
