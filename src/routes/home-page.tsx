import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HomePage() {
  useEffect(() => {
    document.title = "Vrit Task 2 | React Showcase Hub";
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-[#0A0A0A] dark:text-neutral-100 transition-colors duration-300">
      <div className="mx-auto max-w-[1218px] px-6 py-16 sm:py-24 space-y-16">
        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1253ED]/10 px-3.5 py-1.5 text-xs font-semibold text-[#1253ED]">
            <Sparkles className="size-4" />
            Vrit Task 2 • React + Vite SPA
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Figma Design System <br />
            <span className="text-[#1253ED]">Component Showcase</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            Dedicated React repository containing the pixel-perfect implementations of the <strong>/test</strong> (Trending Courses Stats) and <strong>/ux</strong> (Services & Project Carousel) routes.
          </p>
        </div>

        {/* Route Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: /ux Route */}
          <div className="group relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 p-8 hover:border-[#1253ED]/50 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#1253ED] text-white px-3 py-1 text-xs font-semibold">
                  Route: /ux
                </span>
                <span className="text-xs font-mono text-neutral-500">1440px Spec</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">
                Services & Project Carousel Showcase
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Complete replication of the Figma inspect specs featuring Oakes Grotesk typography, the <strong>"Services"</strong> pill button, stacked core services (UI & UX, Development, Blockchain), a 1012px draggable carousel with a centered 132px "Drag" pill, proportional 7px progress bar, and 4 monochrome partner logos (Cloud Education, CMC, IT SNP, Zebec).
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="rounded-md bg-white dark:bg-neutral-800 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                  Draggable Carousel
                </span>
                <span className="rounded-md bg-white dark:bg-neutral-800 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                  Custom Drag Pill
                </span>
                <span className="rounded-md bg-white dark:bg-neutral-800 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                  Partner Logos
                </span>
              </div>
            </div>

            <div className="pt-8">
              <Link to="/ux">
                <Button className="w-full justify-between group-hover:bg-[#0E46CB]">
                  <span>Explore /ux Route</span>
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 2: /test Route */}
          <div className="group relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 p-8 hover:border-[#1253ED]/50 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-emerald-600 text-white px-3 py-1 text-xs font-semibold">
                  Route: /test
                </span>
                <span className="text-xs font-mono text-neutral-500">1216px Spec</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">
                Trending Courses Stats Showcase
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Interactive expandable card accordion for Skillshikshya course categories (All Courses, Upcoming Courses, Ongoing Courses). Features large 150px numbers, animated floating sticker badges with custom rotations, and fluid spring transitions.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="rounded-md bg-white dark:bg-neutral-800 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                  Expandable Accordion
                </span>
                <span className="rounded-md bg-white dark:bg-neutral-800 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                  Floating Badges
                </span>
                <span className="rounded-md bg-white dark:bg-neutral-800 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                  Outfit Typography
                </span>
              </div>
            </div>

            <div className="pt-8">
              <Link to="/test">
                <Button className="w-full justify-between group-hover:bg-[#0E46CB]">
                  <span>Explore /test Route</span>
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-1">
              <h3 className="font-semibold text-base">Vite + React 19</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Blazing fast HMR and optimized production bundling
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-base">React Router v7</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Client-side routing with clean URL navigation
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-base">Tailwind CSS v4</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Modern utility styling with Oakes Grotesk, Manrope, & Outfit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
