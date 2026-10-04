import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "@/routes/home";
import ExplorePage from "@/routes/explore";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-white text-neutral-900 antialiased">
        <main className="w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/services" element={<Navigate to="/" replace />} />
            <Route path="/ux" element={<Navigate to="/" replace />} />
            <Route path="/test" element={<Navigate to="/explore" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
