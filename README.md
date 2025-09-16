# Next 15 + Kentico Kontent (Headless) Boilerplate

This is a minimal starter that uses **Next.js 15 (App Router)** with **Kontent.ai by Kentico** as the headless CMS.

## Features
- App Router (`app/`) with TypeScript
- Static generation with incremental revalidation
- Draft Preview toggle (`/api/preview`)
- Webhook revalidation endpoint (`/api/revalidate`) for content updates
- Simple Article listing + detail by `slug`
- Basic Rich Text renderer placeholder

## Getting Started

1. **Install dependencies**
```bash
pnpm i   # or npm i / yarn
```

2. **Environment variables**
Copy `.env.example` to `.env.local` and set:
```
KONTENT_ENVIRONMENT_ID=your_env_id
KONTENT_PREVIEW_API_KEY=your_preview_key  # optional
```

3. **Run the dev server**
```bash
pnpm dev
```

Open http://localhost:3000

## Content model
This starter expects a content type `article` with at least:
- `title` (text)
- `slug` (text - unique URL slug)
- `summary` (text)
- `body` (rich text)

Adjust the field codenames in `lib/kontent.ts` if yours differ.

## Webhooks
Point a Kontent webhook to `POST /api/revalidate` (optionally pass a secret header in both sides if you want).

## Preview
Open `/api/preview` to enable draft preview for 8 hours (configurable). Go to the homepage and you will see draft content.
Open `/api/preview?disable=1` to turn it off.
