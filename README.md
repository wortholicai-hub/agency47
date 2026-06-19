# Agency47

> Your agency, fully automated by 47 AI agents working together.

A unified AI system that runs an entire digital agency autonomously. Handles sales, marketing, support, and operations with zero human intervention.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules + Global CSS
- **Deployment:** Docker / Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles & design tokens
│   ├── case-studies/           # Case studies page
│   ├── deploy/                 # Deploy page
│   ├── protocols/              # Protocols page
│   └── solutions/              # Solutions pages
│       ├── voice-ai/           # Voice AI Agents
│       ├── crm/                # CRM Automations
│       ├── support/            # Omnichannel Support
│       ├── outreach/           # Lead Gen & Outreach
│       ├── workflows/          # Operational Workflows
│       └── content/            # Content Systems
├── components/
│   ├── Header.tsx              # Navigation with Solutions dropdown
│   ├── Footer.tsx              # Site footer
│   ├── Hero.tsx                # Hero section
│   ├── BackgroundVideo.tsx     # Background video component
│   ├── LuminousCard/           # Glowing card component
│   └── TrackingCard/           # Tracking card component
public/
├── assets/                     # Static assets (videos, images)
└── favicon.svg                 # Site favicon
```

## Deployment

### Docker

```bash
docker-compose up --build
```

### Vercel

Push to your connected Git repository. Vercel will auto-deploy.

## License

Proprietary — All rights reserved.
