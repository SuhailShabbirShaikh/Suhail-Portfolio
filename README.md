# Suhail — Portfolio & Client Showcase

A modern, high-performance portfolio website built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**, designed specifically for pitching to clients.

## 🚀 Highlights & Features

- **Client-Centric Information Architecture**:
  - **Hero**: Value proposition, conversion badges, and call-to-actions ("View Case Studies", "Discuss Your Project").
  - **In-Depth Case Studies**: Dedicated showcases for:
    - **FleetSync (Fleet Management)**: Real-time GPS tracking, dispatch orchestration, telemetry ingestion, and route optimization.
    - **Ummat (Hajj & Umrah Platform)**: Pilgrimage booking marketplace, multi-stage checkout, visa document vault, and hotel manifest generation.
  - **Services & Deliverables**: 4 structured offerings covering full-stack web, APIs & microservices, 0-to-1 MVP launches, and payment gateway orchestration.
  - **Core Competencies**: Categorized technical stacks (Frontend, Backend, Databases, Cloud & DevOps, Specialized integrations).
  - **Delivery Process & Trust**: 4-step engineering methodology and client testimonials.
  - **Contact & Inquiry Intake**: Project category and timeline selection with responsive client intake form.
- **Deep-Linkable Case Study Pages**:
  - Dedicated URLs: `/projects/fleet-management` and `/projects/ummat-hajj-umrah` to share directly in client proposals or RFP responses.
- **Design & Theme**:
  - Clean Apple-inspired minimalist aesthetic.
  - Integrated **Light / Dark Mode toggle** with persistent localStorage and OS preference detection.
  - Responsive across all mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utility**: `clsx` & `tailwind-merge`

---

## 📁 Project Structure

```text
├── src/
│   ├── app/
│   │   ├── globals.css                       # Apple-style tokens, dark mode variables
│   │   ├── layout.tsx                        # Global layout with theme initialization script
│   │   ├── page.tsx                          # Main landing page
│   │   └── projects/
│   │       ├── fleet-management/page.tsx     # FleetSync dedicated case study URL
│   │       └── ummat-hajj-umrah/page.tsx     # Ummat dedicated case study URL
│   ├── components/
│   │   ├── Navbar.tsx                        # Responsive navigation with live status
│   │   ├── Hero.tsx                          # Value proposition & metrics
│   │   ├── ProjectCard.tsx                   # Interactive project cards with live UI mockups
│   │   ├── CaseStudyDetail.tsx               # Full case study layout (Problem, Architecture, KPIs)
│   │   ├── ServicesSection.tsx               # Client service packages & deliverables
│   │   ├── SkillsSection.tsx                 # Categorized technical competencies
│   │   ├── ProcessSection.tsx                # 4-stage delivery process & client reviews
│   │   ├── ContactSection.tsx                # Client inquiry intake form
│   │   ├── ThemeToggle.tsx                   # Light / Dark theme switcher
│   │   └── Footer.tsx                        # Quick links & copyright
│   └── data/
│       └── portfolioData.ts                  # Single source of truth for all content & projects
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## ⚡ Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
npm run start
```

---

## ✍️ Customizing Your Content

All profile information, project details, metrics, social links, and contact options are consolidated in:
👉 [`src/data/portfolioData.ts`](./src/data/portfolioData.ts)

You can update:
- Your name, title, bio, and location
- Social links (LinkedIn, GitHub, Twitter, Cal.com booking link)
- Contact email
- Add more case studies or tweak existing metrics
