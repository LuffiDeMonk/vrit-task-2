# Vrit Task 2

A modern, high-performance **React + Vite** single-page application (SPA) featuring pixel-perfect implementations of the Figma design specifications.

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 6](https://vite.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## 📁 Routes

| Route | Name | Description |
| :--- | :--- | :--- |
| `/` | **Overview Hub** | Landing dashboard with cards linking to `/test` and `/ux` showcases. |
| `/test` | **Trending Courses Stats** | Expandable course cards accordion (`All Courses`, `Upcoming Courses`, `Ongoing Courses`) with custom 150px numbers, animated floating sticker badges, and spring transitions. |
| `/ux` | **Services & Projects Showcase** | Pixel-accurate replica of the Figma service inspect spec and UI screenshot: Oakes Grotesk typography, `Services` pill button, stacked core services (UI & UX, Development, Blockchain), 1012px draggable carousel with centered 132px "Drag" pill, proportional 7px progress bar, and 4 monochrome partner logos (Cloud Education, CMC, IT SNP, Zebec). |

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
Open [http://localhost:5173](http://localhost:5173) in your browser.

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
    ├── components/
    │   ├── common/
    │   │   ├── navbar.tsx
    │   │   └── animated-cards.tsx
    │   ├── stats/
    │   │   └── trending-courses-stats.tsx
    │   ├── services/
    │   │   ├── index.ts
    │   │   └── services-showcase.tsx
    │   └── ui/
    │       └── button.tsx
    └── routes/
        ├── home-page.tsx
        ├── test-page.tsx
        └── ux-page.tsx
```
