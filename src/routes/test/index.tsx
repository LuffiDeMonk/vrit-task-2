import { useEffect } from "react";
import TrendingCoursesStats from "./components/trending-courses-stats";

export default function TestPage() {
  useEffect(() => {
    document.title = "Trending Courses Stats | Vrit Task 2";
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <TrendingCoursesStats />
    </div>
  );
}
