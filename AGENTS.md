# AGENTS.md — Workspace Guidelines & Skills Orchestration

Welcome to the **PetNexus Sales Page (`page-vendas`)** repository.
This document defines project guidelines, tech stack standards, and automatic skill orchestration rules for AI assistants (Antigravity & subagents).

---

## 🐾 Project Overview

- **Project:** PetNexus Landing & Sales Page (`page-vendas`)
- **Product:** All-in-one SaaS management system for Pet Shops, Grooming ("Banho & Tosa"), and Veterinary Clinics.
- **Tech Stack:** Next.js 14 (App Router), React 18, TypeScript 5, Tailwind CSS 3.4, Google Fonts (Hanken Grotesk), Google Material Symbols.
- **Core Value Proposition:** Turnkey system ready in 48h, visual agenda, live operations ("Operação ao Vivo"), exclusive tutor portal ("Painel do Tutor"), WhatsApp integration, and high-conversion SaaS pricing tiers.

---

## ⚡ Automatic Skills Orchestration (Skills as Tools)

Whenever working on tasks in this repository, you **MUST automatically consult and invoke** the relevant specialized skills located in [`.agents/skills/`](file:///c:/Users/gabri/OneDrive/Documentos/Trabalhos/page-vendas/.agents/skills) by reading their `SKILL.md` before designing, writing, or reviewing code.

### 1. 🎯 Revenue, Conversion Rate Optimization (CRO) & Copywriting
*Trigger: Any changes to copy, layout hierarchy, hero section, pricing table, CTAs, objection handling, or funnel flow.*
- **`revenue-centric-design`** ([SKILL.md](file:///c:/Users/gabri/OneDrive/Documentos/Trabalhos/page-vendas/.agents/skills/revenue-centric-design/SKILL.md)):
  - Apply SaaS landing page playbooks: Above-the-fold clarity, social proof mechanics, risk-reversal guarantees, pricing tier anchoring, and friction reduction.

### 2. 🎨 UI Polish, Motion & Visual Craftsmanship
*Trigger: Any work on visual styling, micro-animations, component states, gestures, transitions, or modern UI polish.*
- **`emil-design-eng`** ([SKILL.md](file:///c:/Users/gabri/OneDrive/Documentos/Trabalhos/page-vendas/.agents/skills/emil-design-eng/SKILL.md)):
  - UI craft, interactive micro-states, layout feel, visual hierarchy, details that make interfaces feel premium.
- **`animate`** ([SKILL.md](file:///c:/Users/gabri/OneDrive/Documentos/Trabalhos/page-vendas/.agents/skills/animate/SKILL.md)):
  - Animation curves, physics, interruptible transitions, springs, durations.
- **`apple-design`** ([SKILL.md](file:///c:/Users/gabri/OneDrive/Documentos/Trabalhos/page-vendas/.agents/skills/apple-design/SKILL.md)):
  - Fluid tactile motion, translucent depth, refined typography hierarchy, tactile feedback.
- **`find-animation-opportunities`** & **`improve-animations`**:
  - Identifying missing interaction feedback and auditing motion quality.
- **`ask-sonner`**:
  - Toast notifications and alert UX.

### 3. 🏗️ Architecture, Code Quality & Implementation
*Trigger: Implementing new features, modularizing code, refactoring components, or writing tests.*
- **`implement`** ([SKILL.md](file:///c:/Users/gabri/OneDrive/Documentos/Trabalhos/page-vendas/.agents/skills/implement/SKILL.md)):
  - Disciplined, structured feature execution.
- **`codebase-design`** ([SKILL.md](file:///c:/Users/gabri/OneDrive/Documentos/Trabalhos/page-vendas/.agents/skills/codebase-design/SKILL.md)):
  - Deep modules, clean component boundaries, maintainable interfaces.
- **`code-review`**:
  - Dual-axis code reviews (Standards + Specs).
- **`diagnosing-bugs`**:
  - Systematic debugging loop for regressions, hydration mismatches, and responsive layout glitches.
- **`tdd`**:
  - Test-driven development for mission-critical business logic or pricing calculations.

### 4. 📋 Requirements, Planning & Strategy
*Trigger: Defining tasks, breaking down complex user requests, or stress-testing proposals.*
- **`to-spec`** & **`to-tickets`**:
  - Translating requirements into clear specifications and actionable atomic tasks.
- **`to-questionnaire`**:
  - Structuring questions when requirements are underspecified.
- **`grill-me`** / **`grilling`**:
  - Stress-testing architectural, design, or commercial decisions before implementation.
- **`research`**:
  - Deep-dive technical or market research against authoritative primary sources.

---

## 🛠️ Code Conventions & Design System Rules

1. **Colors & Dark Palette:**
   - Base canvas: `bg-matte-canvas` (`#0f1419`), `bg-surface-container` (`#1a211d`).
   - Accent / Brand: `text-primary` / `bg-primary` (`#4edea3`), emerald glow, extruded shadows.
   - Text hierarchy: `text-on-surface` (`#dde4dd`), `text-on-surface-variant` (`#bbcabf`).
2. **Typography:**
   - Font: `Hanken Grotesk` (configured via Next.js Google font loader).
   - Icons: Google Material Symbols Outlined (`<span className="material-symbols-outlined">icon_name</span>`).
3. **Responsiveness:**
   - Mobile-first approach with fluid adaptation for `sm:`, `md:`, `lg:`, `xl:`.
   - Prevent horizontal overflow (`overflow-x-hidden`).
4. **Performance & SEO:**
   - Optimized images in Next.js, semantic HTML5, clear OpenGraph metadata.
   - WhatsApp links formatted with international country codes (`5544...`) and pre-encoded URL messages.
