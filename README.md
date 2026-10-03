# Vrit Task 2

A modern, high-performance **React + Vite** single-page application (SPA) featuring pixel-perfect implementations of the Figma design specifications.

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 6](https://vite.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## 📁 Routes

| Route | Name | Description |
| :--- | :--- | :--- |
| `/ux` | **Services & Projects Showcase** | Pixel-accurate replica of the Figma service inspect spec and UI screenshot: Oakes Grotesk typography, `Services` pill button, stacked core services (UI & UX, Development, Blockchain), draggable carousel with centered "Drag" pill, proportional progress bar, and 4 monochrome partner logos (Cloud Education, CMC, IT SNP, Zebec). |
| `/test` | **Trending Courses Stats** | Expandable course cards accordion (`All Courses`, `Upcoming Courses`, `Ongoing Courses`) with custom display numbers, animated floating sticker badges, vertical text flow on collapsed cards, and fluid spring transitions. |

---

## 🛠️ Getting Started

### 1. Installation

```bash
pnpm install
```

### 2. Development Server

```bash
pnpm dev
```
Open [http://localhost:5173/ux](http://localhost:5173/ux) or [http://localhost:5173/test](http://localhost:5173/test) in your browser.

### 3. Production Build

```bash
pnpm build
```

### 4. Preview Production Build

```bash
pnpm preview
```

---

## 📂 Project Structure

```
vrit-task-2/
├── index.html
├── package.json
├── pnpm-workspace.yaml
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── lib/
    │   └── utils.ts
    └── routes/
        ├── test/
        │   ├── index.tsx
        │   └── components/
        │       ├── animated-cards.tsx
        │       └── trending-courses-stats.tsx
        └── ux/
            ├── index.tsx
            └── components/
                └── services-showcase.tsx
```
