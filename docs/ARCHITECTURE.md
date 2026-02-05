# Architecture & Development Guide

This document serves as the "North Star" for development on **hungp**. It outlines the technical decisions, design principles, and standards that ensure the project remains maintainable, performant, and premium.

## 1. Tech Stack

We utilize a modern, performance-oriented stack designed for static excellence with dynamic capabilities.

| Category | Technology | Rationale |
|----------|------------|-----------|
| **Core Framework** | **Astro** | Best-in-class performance (Zero JS by default), Islands Architecture for interactive bits, and excellent Content Collections API. |
| **Runtime** | **Bun** | Extremely fast JavaScript runtime, package manager, and test runner. |
| **UI Library** | **React** (via Shadcn) | Ecosystem maturity, robust component model, required for Shadcn UI. |
| **Component System** | **Shadcn UI** | Copy-paste component architecture allows total control. Accessible, beautiful, and customizable defaults. |
| **Styling** | **Tailwind CSS** | Utility-first, co-located styles, standardized design tokens, easy dark mode implementation. |
| **Animations** | **Framer Motion** | Declarative, production-ready animations for the "wow" factor and dynamic design requirements. |
| **State Management** | **Nano Stores** | Lightweight, framework-agnostic state management that works seamlessly across Astro islands. |
| **Content** | **MDX / Content Collections** | Type-safe content management for blog posts and ventures. |
| **Icons** | **Lucide React** | Consistent, clean stroke icons. |

## 2. Key Design Principles

### Personal Operating System
This site is not a static brochure; it is a dynamic hub. It connects my projects and thoughts like an OS connects applications.
-   **Interconnectivity**: Content types should link to each other (e.g., a "Project" links to related "Blog Posts").
-   **Dashboard Aesthetic**: The UI should feel functional and dense, yet spacious and organized—like a high-end dashboard or digital garden.

### Premium & Dynamic
-   **Visual Excellence**: Use subtle gradients, glassmorphism (backdrop-blur), and refined typography. Avoid flat, generic colors.
-   **Alive**: The interface must react to the user. Hover states, page transitions, and subtle entrance animations are mandatory. "If it stays still, it's broken."
-   **Dark Mode First**: Design with deep, rich dark themes in mind, supporting light mode as a secondary option.

### Performance First
-   **Core Web Vitals**: Target all-green metrics.
-   **Zero Layout Shift**: explicitly size images and skeletons.
-   **Partial Hydration**: Use `client:*` directives sparingly. Only hydrate what is interactive.

## 3. Directory Structure

```text
src/
├── components/
│   ├── ui/             # Shadcn primitive components (Button, Card, etc.)
│   ├── layout/         # Header, Footer, Sidebar
│   └── logic/          # Complex business-logic components
├── content/            # Source of Truth for data
│   ├── config.ts       # Zod schemas for collections
│   ├── ventures/       # Project portfolio items
│   └── thoughts/       # Blog posts/Essays
├── layouts/            # Astro page layouts (BaseLayout, BlogPostLayout)
├── pages/              # File-based routing
│   ├── api/            # API endpoints (if needed)
│   ├── index.astro
│   └── ...
├── styles/
│   └── global.css      # Tailwind directives & base styles
└── lib/                # Utilities and helpers
    └── utils.ts        # cn() helper and others
```

## 4. Coding Standards

### TypeScript
-   **Strict Mode**: Always on. No `any` unless absolutely necessary.
-   **Zod Schemas**: Use Zod for all content validation and API responses.

### Components
-   **Composition**: Prefer composing small components over creating giant "God components".
-   **Props**: Define explicit interfaces for Props.
-   **Server Components Default**: Write components as `.astro` files by default. Only use `.tsx` when state/interactivity is required.

### Styling
-   **Tailwind Order**: Keep class names sorted (use `prettier-plugin-tailwindcss`).
-   **Variables**: Use CSS variables (defined in `global.css`) for colors to ensure theming references are consistent (e.g., `bg-primary` instead of `bg-blue-500`).

## 5. SEO & Best Practices

-   **Meta Tags**: Every page must have a unique Title, Description, and Open Graph image.
-   **Semantic HTML**: Use `<main>`, `<article>`, `<nav>`, `<aside>` correctly.
-   **Images**: Always use Astro's `<Image />` component for automatic optimization (WebP/AVIF).

## 6. Lessons & Gotchas

> *Update this section as we learn during development.*

-   **Hydration Mismatch**: When using React components, ensure the server-rendered HTML matches the client-side hydration. If accessing `window` or `localStorage`, use `useEffect` or `client:only`.
-   **Bun & Astro**: While Bun is fast, occasionally some node-specific packages might have edge cases. Prefer web-standard APIs where possible.
-   **Shadcn Updates**: Since we own the code for Shadcn components, be careful when updating. Do not overwrite custom modifications blindly.
