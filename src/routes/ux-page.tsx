import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Sparkles,
  Layers,
  MousePointer,
  CheckCircle2,
  Sliders,
  ArrowRight,
} from "lucide-react";
import { ServicesShowcase } from "@/components/services/services-showcase";
import { Button } from "@/components/ui/button";

export function UxPage() {
  useEffect(() => {
    document.title = "Services & UX Showcase | Vrit Task 2";
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-[#0A0A0A] dark:text-neutral-100 transition-colors duration-300">
      {/* Top Banner / Breadcrumb Navigation */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-[#0A0A0A]/70 backdrop-blur-md sticky top-16 z-30">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:px-12 py-3.5">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1253ED]/10 px-2.5 py-1 text-xs font-semibold text-[#1253ED]">
              <Sparkles className="size-3.5" />
              Figma Implementation • /ux
            </span>
            <span className="hidden sm:inline text-xs text-neutral-500 dark:text-neutral-400 font-medium">
              Service Showcase Component • 1440px Spec
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-1.5 size-3.5" />
                Home
              </Button>
            </Link>
            <Link to="/test">
              <Button size="sm">
                Go to Test Route (/test)
                <ArrowRight className="ml-1.5 size-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Rewritten Component based on Figma Specs */}
      <main className="w-full">
        <ServicesShowcase />
      </main>

      {/* Interactive Specifications & Figma Feature Breakdown */}
      <aside className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-950/80 py-16 px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1218px] space-y-8">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              <Sliders className="size-3.5 text-[#1253ED]" />
              Figma Inspection & Engineering Details
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Component Architecture & Figma Specifications
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Direct implementation of Figma auto-layout nodes, kinetic animations, and interactive drag controls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Services List */}
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 font-semibold text-sm text-[#1253ED]">
                <Layers className="size-4" />
                Core Services Typography
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Frame 1000002778 rendering UI & UX, Development, and Blockchain in bold Oakes Grotesk 52px. Features interactive click-to-scroll navigation to carousel cards.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                <span className="rounded bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-[10px] font-mono text-neutral-600 dark:text-neutral-400">
                  Oakes Grotesk 52px 700
                </span>
                <span className="rounded bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-[10px] font-mono text-neutral-600 dark:text-neutral-400">
                  #171717
                </span>
              </div>
            </div>

            {/* Card 2: Draggable Project Carousel */}
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 font-semibold text-sm text-[#1253ED]">
                <MousePointer className="size-4" />
                Draggable Carousel & "Drag" Pill
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Frame 1000002777 featuring 1012 × 569.25px cards with 21.2px border-radius, centered 132px "Drag" pill (Group 33732), mouse drag-to-scroll, and touch swipe.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                <span className="rounded bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-[10px] font-mono text-neutral-600 dark:text-neutral-400">
                  1012px × 569.25px
                </span>
                <span className="rounded bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-[10px] font-mono text-neutral-600 dark:text-neutral-400">
                  21.2px Radius
                </span>
                <span className="rounded bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-[10px] font-mono text-neutral-600 dark:text-neutral-400">
                  Pill 132px
                </span>
              </div>
            </div>

            {/* Card 3: Proportional Progress & Partners */}
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 font-semibold text-sm text-[#1253ED]">
                <CheckCircle2 className="size-4" />
                Progress Track & Monochrome Logos
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Group 34095 7px progress bar with 292.54px proportional thumb and interactive seek. Group 33731 with 4 brand partner logos (Cloud Education, CMC, IT SNP, Zebec).
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                <span className="rounded bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-[10px] font-mono text-neutral-600 dark:text-neutral-400">
                  Track 1218px × 7px
                </span>
                <span className="rounded bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-[10px] font-mono text-neutral-600 dark:text-neutral-400">
                  Thumb 292.54px
                </span>
                <span className="rounded bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-[10px] font-mono text-neutral-600 dark:text-neutral-400">
                  4 Partner SVGs
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default UxPage;
