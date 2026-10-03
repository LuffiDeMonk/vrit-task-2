"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  AnimatedCards,
  type AnimatedCardItem,
} from "@/components/common/animated-cards"

// Re-export reusable components & types so imports from either location work seamlessly
export { AnimatedCards, AnimatedCard } from "@/components/common/animated-cards"
export type {
  AnimatedCardItem,
  AnimatedCardProps,
  AnimatedCardsProps,
} from "@/components/common/animated-cards"

export interface CourseCategory {
  id: "all" | "upcoming" | "ongoing" | string
  count?: string
  hasPlus?: boolean
  title: string
  description: string
  viewAllText?: string
  viewAllHref?: string
  buttonName?: string
}

export interface TrendingCoursesStatsProps {
  subtitle?: string
  title?: React.ReactNode
  categories?: CourseCategory[]
  defaultActiveId?: string
  className?: string
  onSelectCategory?: (id: string) => void
}

const DEFAULT_CATEGORIES: CourseCategory[] = [
  {
    id: "all",
    count: "23",
    hasPlus: true,
    title: "All Courses",
    description: "courses you're powering through right now.",
    viewAllText: "View all Courses",
    buttonName: "View all Courses",
    viewAllHref: "/products",
  },
  {
    id: "upcoming",
    count: "05",
    hasPlus: true,
    title: "Upcoming Courses",
    description: "exciting new courses waiting to boost your skills.",
    viewAllText: "View all Courses",
    buttonName: "View all Courses",
    viewAllHref: "/products",
  },
  {
    id: "ongoing",
    count: "10",
    hasPlus: true,
    title: "Ongoing Courses",
    description: "currently happening—don’t miss out on the action!",
    viewAllText: "View all Courses",
    buttonName: "View all Courses",
    viewAllHref: "/products",
  },
]

export function TrendingCoursesStats({
  subtitle = "Explore our classes and master trending skills!",
  title,
  categories = DEFAULT_CATEGORIES,
  defaultActiveId = "all",
  className,
  onSelectCategory,
}: TrendingCoursesStatsProps) {
  // Map items passing title, description, and buttonName
  const items: AnimatedCardItem[] = categories.map((cat) => ({
    id: cat.id,
    title: cat.title,
    description: cat.description,
    buttonName: cat.buttonName ?? cat.viewAllText ?? "View all Courses",
    count: cat.count,
    hasPlus: cat.hasPlus,
    href: cat.viewAllHref,
  }))

  return (
    <section
      className={cn(
        "mx-auto flex w-full max-w-[1216px] flex-col items-start gap-8 px-4 py-8 sm:gap-12 sm:px-6 lg:px-0",
        className
      )}
      aria-labelledby="trending-courses-heading"
    >
      {/* Header Text Block (Figma: width 528px, gap 20px) */}
      <div className="flex max-w-[620px] flex-col items-start gap-3 sm:gap-5">
        <p className="font-outfit text-lg leading-normal font-normal text-[#414141] sm:text-xl lg:text-[24px] dark:text-neutral-300">
          {subtitle}
        </p>
        <h2
          id="trending-courses-heading"
          className="font-heading text-2xl leading-[1.2] font-bold text-[#2B2B2B] sm:text-3xl lg:text-[32px] dark:text-white"
        >
          {title ?? (
            <>
              Dive Into{" "}
              <span className="text-[#0C7C59] dark:text-emerald-400">
                What’s Hot Right Now!
              </span>{" "}
              🔥
            </>
          )}
        </h2>
      </div>

      {/* Reusable Animated Cards Row */}
      <AnimatedCards
        items={items}
        defaultActiveId={defaultActiveId}
        onSelectCard={(id) => onSelectCategory?.(id)}
      />
    </section>
  )
}

export default TrendingCoursesStats
