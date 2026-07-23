# 🚀 Minimal-UI Dashboard (Next.js App Router)

A modern, high-performance, and responsive Admin Dashboard built with **Next.js 14+ (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed with modern React patterns, strict performance optimizations, and optimal UX/SEO balance.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Architecture & Performance Optimizations](#-architecture--performance-optimizations)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Scripts](#-scripts)

---

## 🧐 Overview

This project is a scalable, feature-rich admin dashboard designed to handle analytical data, interactive charts, and complex data tables. The application focuses heavily on **Server-Side Rendering (SSR)** efficiency, **Code Splitting**, and **State Memoization** to deliver lightning-fast page loads and zero layout shifts.

---

## ✨ Key Features

- **📊 Dynamic Analytics & Charts:** Interactive charts powered by Recharts, lazily loaded with zero server-side hydration mismatches.
- **👥 User Management Table:** Complete table featuring instant client-side searching, filter toggles, and status badges.
- **⚡ Advanced Performance Optimizations:** Strategic separation between Server Components and Client Components to minimize JavaScript bundle size.
- **🎨 Modern UI/UX:** Clean, accessible, responsive design with customized scrollbars, sticky headers, and smooth hover/active transitions.
- **🔍 SEO & Metadata Prepared:** Pre-configured route-based dynamic metadata for maximum search engine indexability.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescript.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Charts Library:** [Recharts](https://recharts.org/)

---

## ⚡ Architecture & Performance Optimizations

### 1. Server Components First Strategy

Pages and Layouts (`page.tsx`, `layout.tsx`) are preserved as **Server Components** by default. This guarantees fast initial HTML rendering, optimized Core Web Vitals (FCP, LCP), and complete SEO support.

### 2. Isolated Client Boundaries (`"use client"`)

Client interactivity is strictly pushed down to leaf nodes/components. This avoids polluting parent trees with client-side JavaScript execution.

### 3. Dynamic Imports & Code Splitting (`next/dynamic`)

Heavy client dependencies—specifically Recharts—are isolated into dedicated section components and dynamically imported with `{ ssr: false }`.

- **Why?** Prevents window DOM manipulation errors during SSR and significantly reduces initial JavaScript payload.

### 4. Re-render Protection (`memo`, `useMemo`, `useCallback`)

- **`useMemo`:** Used for memory-intensive table filtering and data transformations.
- **`useCallback`:** Retains stable reference handlers passed to child inputs/buttons.
- **`memo`:** Wraps list items, menus, and table components (`UserTableRow`, `UserActionsMenu`, `UsersTable`) to eliminate unnecessary re-renders across sibling components.

---

## 📂 Folder Structure

The project follows Next.js App Router **Co-location / Feature-Based** architecture using Private Folders (`_components`, `_types`):

```text
src/
├── app/
│   ├── (dashboard)/
│   │   ├── _components/            # Shared or page-scoped components
│   │   │   ├── analyses/           # Chart components
│   │   │   │   ├── ConversionRates.tsx
│   │   │   │   ├── PieChartWithCustomizedLabel.tsx
│   │   │   │   ├── StatsGrid.tsx
│   │   │   │   └── WebsiteVisitsCard.tsx
│   │   │   ├── AnalysesSection.tsx  # Dynamic Client Boundary wrapper
│   │   │   ├── News.tsx
│   │   │   └── OrderTimeline.tsx
│   │   ├── user/
│   │   │   ├── _components/        # User page specific components
│   │   │   │   ├── UserActionsMenu.tsx
│   │   │   │   ├── UserTableRow.tsx
│   │   │   │   └── UsersTable.tsx
│   │   │   ├── _types/             # User TypeScript definitions
│   │   │   └── page.tsx            # Users Page (Server Component)
│   │   └── page.tsx                # Dashboard Main Page (Server Component)
│   ├── layout.tsx                  # Global Root Layout
│   └── globals.css                 # Custom Tailwind styles & theme variables
└── components/
    └── ui/                         # Reusable design system elements (Button, SearchInput)
```
