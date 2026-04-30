# steering.md — Portfolio Website: Muhammad

## Overview
Build a personal portfolio website for **Muhammad**, a Software Engineer & AI Engineer currently based in Jakarta. The site should feel modern, dark-themed, and tech-forward — with subtle 3D/particle animations powered by **Three.js** and clean UI built with **React.js**.

---

## Tech Stack
- **React.js** (Vite or CRA)
- **Three.js** for background/hero 3D animation
- **Tailwind CSS** for styling (or CSS Modules if preferred)
- **Framer Motion** for page transitions and scroll animations

---

## Design Direction
- **Theme**: Dark background (`#0a0a0f`), with accent colors in electric blue (`#3b82f6`) or cyan (`#06b6d4`)
- **Vibe**: Clean, minimal, developer portfolio — no fluff, no generic gradients
- **Font**: Monospace or geometric sans (e.g., `JetBrains Mono` for code bits, `Sora` or `Outfit` for headings)
- **Animation**: Floating particle network or wireframe globe in the hero section using Three.js — keep it subtle, not distracting

---

## Sections

### 1. Hero
- Name: **Muhammad**
- Title: `Software Engineer & AI Engineer`
- Short tagline: *"Building scalable systems. Automating the boring stuff. Shipping fast."*
- Three.js canvas as background (e.g., animated particle field or floating geometric mesh)
- CTA buttons: `View Work` → scrolls to Experience, `Contact Me` → scrolls to Contact

### 2. About
- Short intro paragraph (based on resume summary):
  > Experienced in large-scale system development, data processing, and data integration. Passionate about providing data-driven solutions and automating manual processes. Strong analytical and team coordination skills.
- Keep it brief — 2–3 sentences max

### 3. Experience (Work)
Display as a vertical timeline or card list. For each role, show only:
- **Company name**, **role**, **date range**, **location**
- **Projects / what was built** (not responsibilities — see content below)
- **Tech stack used** as pill/badge components

#### PT Medika Digital Nusantara *(Feb 2025 – Aug 2025)*
- **Project**: SIMRS Morbis — Health Information System
  - Patient data management system serving 10,000+ patients across 10+ partner hospitals
  - Built and maintained a relational database with 100+ tables
  - Data visualization dashboard for stakeholders and decision-makers
- **Stack**: `PHP`, `MySQL`, `Tableau`, `Laravel`

#### PT Mediatama Kreasi Informatika *(Aug 2025 – Jan 2026)*
- **Project**: Digital Workspace Portal — Internal Employee Portal for Kementerian Investasi/BKPM
  - Portal system used by 1,000+ employees
  - Led full-stack development as PIC (Person in Charge)
  - Stakeholder coordination and feature delivery aligned to business requirements
- **Stack**: `React.js`, `Node.js`, `PostgreSQL`, `Laravel`

#### PT Bank Negara Indonesia Tbk *(Jan 2026 – Present)*
- **Project**: BNIDirect BackOffice System (CXO & CIDM modules)
  - Banking backoffice system for corporate and multinational clients
  - AI-assisted development using Kiro.ai — projects completed 2–3x faster than estimated
  - Cross-team collaboration with System Analysts, Scrum Masters, and stakeholders
- **Stack**: `Java`, `Spring Boot`, `Angular.js`, `Oracle`, `Kubernetes`

### 4. Skills
Group into 3 categories with icon badges or tag pills:

**Languages & Frameworks**
`JavaScript` `TypeScript` `PHP` `Java` `Golang` `Python` `Kotlin`
`React.js` `Angular.js` `Laravel` `Spring Boot` `Express.js` `Adonis.js` `Fiber`

**Cloud & DevOps**
`Google Cloud Platform` `Kubernetes` `Docker` `Linux` `Git` `Firebase`

**Data & AI**
`MySQL` `PostgreSQL` `Oracle` `MongoDB` `Redis`
`LangChain` `N8N` `Agentic AI` `Tableau`

**Tools**
`Figma` `Tailwind CSS` `Websocket` `Prisma / JPA`

### 5. Education & Training
Simple card list:
- **Universitas Islam Negeri Sunan Kalijaga** — Bachelor of Informatics, GPA 3.68/4.00, Cum Laude *(Sep 2021 – Jun 2025)*
- **Bangkit Academy (Google, Tokopedia, Gojek, Traveloka)** — Mobile Developer Cohort *(Feb 2024 – Jul 2024)*
- **Bangkit Academy** — Cloud Computing Cohort *(Sep 2024 – Jan 2025)*

### 6. Certifications & Achievements
Simple list:
- Oracle Academy: Database Design & Programming with SQL (2023)
- Kaltim Tuntas Scholarship — Kalimantan Timur Governor (2023–2025)
- BUMA Workers Children Achievement Scholarship (2024)
- 2nd Place — Internal Coding Challenge at PT Medika Digital Nusantara

### 7. Contact
- Email: `muhammadahjahh@gmail.com`
- Phone: `+628115907100`
- LinkedIn: `https://www.linkedin.com/in/muhammad-met/`
- Simple form or just a mailto button — keep it minimal

---

## Component Notes
- All sections should have **scroll-triggered fade-in** animations (via Framer Motion `useInView`)
- Navbar: sticky top, minimal — just name + anchor links
- Mobile responsive is required
- Three.js canvas should be `position: absolute` behind hero content, not interactive (just visual)
- Use `React Router` or simple anchor scroll for navigation — no page routing needed (single page)

---

## File Structure Suggestion
```
src/
├── components/
│   ├── Hero.jsx          ← Three.js canvas + intro text
│   ├── About.jsx
│   ├── Experience.jsx    ← Timeline/cards
│   ├── Skills.jsx        ← Grouped badge list
│   ├── Education.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   └── Navbar.jsx
├── three/
│   └── ParticleBackground.js   ← Three.js scene logic
├── App.jsx
└── main.jsx
```

---

## Tone & Copy Notes
- Keep language concise and developer-native
- Avoid buzzwords like "passionate about innovation"
- Let the stack badges and project names speak for themselves
- One-liner descriptions per project, not paragraphs