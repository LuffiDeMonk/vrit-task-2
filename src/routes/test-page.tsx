import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { TrendingCoursesStats } from "@/components/stats/trending-courses-stats";
import { Button } from "@/components/ui/button";

export function TestPage() {
  useEffect(() => {
    document.title = "Trending Courses Stats | Vrit Task 2";
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-[#0A0A0A] dark:text-neutral-100 py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-[1340px] space-y-12">
        {/* Navigation Breadcrumb / Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1253ED] uppercase tracking-wider bg-[#1253ED]/10 px-2.5 py-1 rounded-full">
              <Sparkles className="size-3.5" />
              Figma Component Route • /test
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Trending Courses Stats Showcase
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Interactive expandable accordion cards with floating sticker badges and responsive layout.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-1.5 size-4" />
                Home
              </Button>
            </Link>
            <Link to="/ux">
              <Button size="sm">
                Go to UX Route (/ux)
                <ArrowRight className="ml-1.5 size-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* The Figma Spec Component */}
        <div className="overflow-hidden rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 sm:p-6 lg:p-8 shadow-xs">
          <TrendingCoursesStats />
        </div>

        {/* Interactive Features & Specifications Notes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 p-6 space-y-2">
            <div className="flex items-center gap-2 text-[#1253ED] font-semibold text-sm">
              <CheckCircle2 className="size-4" />
              Interactive Accordion
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Click or press Enter/Space on any course card (All Courses, Upcoming, or Ongoing) to smoothly expand it to 592px while contracting the others to 280px.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 p-6 space-y-2">
            <div className="flex items-center gap-2 text-[#1253ED] font-semibold text-sm">
              <CheckCircle2 className="size-4" />
              Custom Badges & Typography
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Rendered with exact Figma typography (Outfit + 150px numbers), rotated sticker badges (-16.67°, 7.22°, -8.97°, 12.61°), and brand palettes (#C33241 / #F9EBEC).
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 p-6 space-y-2">
            <div className="flex items-center gap-2 text-[#1253ED] font-semibold text-sm">
              <CheckCircle2 className="size-4" />
              Responsive & Theme Adaptive
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Fully optimized across desktop, tablet, and mobile devices with fluid transitions, keyboard accessibility, and light/dark theme compatibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestPage;
