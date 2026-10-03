import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TestPage from "@/routes/test";
import UxPage from "@/routes/ux";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-white text-neutral-900 antialiased">
        <main className="w-full">
          <Routes>
            <Route path="/ux" element={<UxPage />} />
            <Route path="/service" element={<UxPage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/" element={<Navigate to="/ux" replace />} />
            <Route path="*" element={<Navigate to="/ux" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
