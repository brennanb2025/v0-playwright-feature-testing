# Playwright Testing Playground

A Next.js application that provides a testing playground for Playwright interactions.

## Overview

This project serves as a demonstration and testing ground for various Playwright browser automation interactions including clicks, double-clicks, hover, fill, check/uncheck, select, keyboard press, and focus actions.

## Tech Stack

- **Framework**: Next.js 15.5.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives with shadcn/ui patterns

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main testing playground page
│   └── iframe-content/     # Iframe content page
├── components/             # React components
│   ├── ui/                 # UI primitives (button, card, checkbox, input)
│   └── theme-provider.tsx  # Theme context provider
├── lib/                    # Utility functions
│   └── utils.ts            # Helper utilities
├── public/                 # Static assets
└── styles/                 # Additional styles
```

## Development

The development server runs on port 5000:

```bash
npm run dev
```

## Deployment

- Build: `npm run build`
- Production: `npm run start` (runs on port 5000)
