import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import AnimatedCard from "./components/animated-card";
import type { CourseCategory } from "./types";
import { DEFAULT_CATEGORIES } from "./constants";

interface ExplorePageProps {
  subtitle?: string;
  title?: React.ReactNode;
  categories?: CourseCategory[];
  defaultActiveId?: string;
  className?: string;
  onSelectCategory?: (id: string) => void;
}

export default function ExplorePage({
  subtitle = "Explore our classes and master trending skills!",
  title,
  categories = DEFAULT_CATEGORIES,
  defaultActiveId = "all",
  className,
  onSelectCategory,
}: ExplorePageProps) {
  useEffect(() => {
    document.title = "Explore Trending Courses | Vrit Task 2";
  }, []);

  const initialId = defaultActiveId ?? categories[0]?.id ?? "all";

  const [activeId, setActiveId] = useState<string>(initialId);
  const [shrinkingId, setShrinkingId] = useState<string | null>(null);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const shrinkTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (shrinkTimerRef.current) {
        clearTimeout(shrinkTimerRef.current);
      }
    };
  }, []);

  const handleSelect = (id: string, index: number) => {
    if (id === activeId || shrinkingId) return;

    const currentIndex = categories.findIndex((c) => c.id === activeId);
    const newDirection = index > currentIndex ? "forward" : "backward";
    setDirection(newDirection);

    setHoveredId(null);
    setShrinkingId(id);

    if (shrinkTimerRef.current) {
      clearTimeout(shrinkTimerRef.current);
    }

    shrinkTimerRef.current = setTimeout(() => {
      setShrinkingId(null);
      setActiveId(id);
      onSelectCategory?.(id);
    }, 300);
  };

  return (
    <div className="min-h-screen w-full bg-white text-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1216px] mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      <section
        className={cn(
          "mx-auto flex w-full max-w-[1216px] flex-col items-start gap-8 px-4 py-8 sm:gap-12 sm:px-6 lg:px-0",
          className,
        )}
        aria-labelledby="trending-courses-heading"
      >
        <div className="flex max-w-[620px] flex-col items-start gap-3 sm:gap-4">
          <p className="font-outfit text-lg sm:text-xl lg:text-[22px] leading-normal font-medium text-[#1F1F1F]">
            {subtitle}
          </p>
          <h2
            id="trending-courses-heading"
            className="font-heading text-2xl sm:text-3xl lg:text-[34px] leading-[1.2] font-bold text-[#1F1F1F]"
          >
            {title ?? (
              <>
                Dive Into{" "}
                <span className="text-[#0C7C59]">What’s Hot Right Now!</span> 🔥
              </>
            )}
          </h2>
        </div>

        <div className="-mt-20 w-full overflow-x-auto scrollbar-none pt-20 pb-4">
          <div
            role="tablist"
            aria-orientation="horizontal"
            className="flex h-[461px] w-full min-w-max flex-row items-stretch justify-start sm:justify-center gap-8"
          >
            {categories.map((cat, index) => (
              <AnimatedCard
                key={cat.id}
                category={cat}
                index={index}
                activeId={activeId}
                shrinkingId={shrinkingId}
                hoveredId={hoveredId}
                direction={direction}
                onSelect={() => handleSelect(cat.id, index)}
                onHover={(hovered) => setHoveredId(hovered ? cat.id : null)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
