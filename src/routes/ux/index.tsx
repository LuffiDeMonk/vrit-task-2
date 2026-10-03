import { useEffect } from "react";
import ServicesShowcase from "./components/services-showcase";

export default function UxPage() {
  useEffect(() => {
    document.title = "Services Showcase | Vrit Task 2";
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-neutral-900">
      <ServicesShowcase />
    </div>
  );
}
