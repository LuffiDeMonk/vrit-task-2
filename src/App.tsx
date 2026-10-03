import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/components/common/navbar";
import { HomePage } from "@/routes/home-page";
import { TestPage } from "@/routes/test-page";
import { UxPage } from "@/routes/ux-page";

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-neutral-900 dark:bg-[#0A0A0A] dark:text-neutral-100 antialiased transition-colors duration-300">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/ux" element={<UxPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <footer className="border-t border-neutral-200 dark:border-neutral-800 py-6 text-center text-xs text-neutral-500 dark:text-neutral-400">
          Vrit Task 2 • Pixel-Perfect Figma Component Showcase
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
