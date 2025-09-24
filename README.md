# Next 15 + Kentico Kontent Movies App

A modern movie catalog built with **Next.js 15 (App Router)** and **Kontent.ai by Kentico** as the headless CMS, featuring a complete theme system and responsive design.

## ✨ Features

### 🎬 Movie Management

- Movie listing with responsive grid layout
- Individual movie detail pages
- Movie cards with aspect-ratio optimized images
- Rich text plot descriptions
- Movie metadata (release date, length, categories)

### 🎨 Advanced Theme System

- **Light/Dark/System themes** with automatic switching
- **CSS Variables** for consistent theming
- **Tailwind CSS** integration with custom design tokens
- **Smooth transitions** between themes
- **Persistent theme preferences** in localStorage

### 🚀 Technical Features

- App Router (`app/`) with TypeScript
- Static generation with incremental revalidation
- Draft Preview toggle (`/api/preview`)
- Webhook revalidation endpoint (`/api/revalidate`)
- Responsive design with mobile-first approach
- Optimized images with Next.js Image component

## 🛠 Getting Started

1. **Install dependencies**

```bash
npm install
# or
yarn install
```

2. **Environment variables**
   Create `.env.local` and set:

```env
KONTENT_ENVIRONMENT_ID=your_env_id
KONTENT_PREVIEW_API_KEY=your_preview_key  # optional
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000

## 📋 Content Model

This app expects the following content types in Kentico Kontent:

### Movie Content Type

- `title` (text) - Movie title
- `seoname` (URL slug) - SEO-friendly URL slug
- `plot` (rich text) - Movie plot/synopsis
- `poster` (asset) - Movie poster image
- `released` (date & time) - Release date
- `length` (number) - Movie length in minutes
- `category` (multiple choice) - Movie genres
- `stars` (modular content) - Linked actor items
- `releasecategory` (taxonomy) - Release category

### Actor Content Type

- `name` (text) - Actor name
- `photo` (asset) - Actor photo
- `born` (date & time) - Birth date
- `nationality` (taxonomy) - Actor nationality

## 🎨 Theme System

The app includes a sophisticated theme system:

### Available Themes

- **Light Theme**: Clean, bright interface
- **Dark Theme**: Modern dark interface
- **System Theme**: Follows OS preference

### Theme Features

- CSS Variables for consistent theming
- Tailwind CSS integration
- Smooth transitions between themes
- Persistent user preferences
- Accessible color contrasts

### Using Themes

```tsx
// In any component
const { theme, toggleTheme } = useThemeContext()

// Theme-aware classes
;<div className="bg-primary text-on-primary">Content with theme colors</div>
```

## 🔧 Customization

### Adding New Themes

1. Update `app/globals.css` with new CSS variables
2. Add theme logic in `hooks/useTheme.ts`
3. Update `components/ThemeToggle.tsx` for new options

### Modifying Movie Cards

Edit `components/MovieCard/index.tsx` to customize:

- Card layout and styling
- Image aspect ratios
- Content display
- Hover effects

## 📡 API Endpoints

- `GET /` - Movie listing page
- `GET /movie/[slug]` - Individual movie page
- `GET /api/preview` - Enable draft preview
- `POST /api/revalidate` - Webhook revalidation

## 🔗 Webhooks

Point a Kontent webhook to `POST /api/revalidate` to automatically revalidate pages when content changes.

## 👀 Preview Mode

- Visit `/api/preview` to enable draft preview for 8 hours
- Visit `/api/preview?disable=1` to disable preview mode
- Preview mode shows unpublished content changes

## 🏗 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles + CSS variables
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Homepage with movie listing
├── components/
│   ├── MovieCard/         # Movie card component
│   ├── Theme/             # Theme system components
│   └── ThemeToggle.tsx    # Theme switcher
├── hooks/
│   └── useTheme.ts        # Theme management hook
├── lib/
│   ├── kontent.ts         # Kentico API client
│   ├── types.ts           # TypeScript types
│   └── theme-config.ts    # Theme configuration
└── tailwind.config.ts     # Tailwind configuration
```

## 🚀 Deployment

The app is ready for deployment on platforms like:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

Make sure to set your environment variables in your deployment platform.
