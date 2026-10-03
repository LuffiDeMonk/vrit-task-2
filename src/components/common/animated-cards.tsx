"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*                                Types & Models                              */
/* -------------------------------------------------------------------------- */

export interface AnimatedCardItem {
  /** Main title displayed on the card (e.g. "All Courses") */
  title: string
  /** Subtitle/description text below the title */
  description: string
  /** Text for the top-right action link button (e.g. "View All Products") */
  buttonName: string
  /** Optional unique identifier. Defaults to item index or slugified title */
  id?: string
  /** Optional large counter number (e.g. "23", "05"). Auto-defaults to 2-digit index if omitted */
  count?: string
  /** Optional boolean indicating whether to show '+' next to the count. Defaults to true */
  hasPlus?: boolean
  /** Optional destination URL for the action button. Defaults to "#" */
  href?: string
}

export interface AnimatedCardProps {
  /** Main title */
  title: string
  /** Subtitle/description */
  description: string
  /** Action button text */
  buttonName: string
  /** Card unique identifier */
  id?: string
  /** Big display number */
  count?: string
  /** Show '+' sign */
  hasPlus?: boolean
  /** Button link href */
  href?: string
  /** Whether this card is currently expanded */
  isActive?: boolean
  /** Whether this card is currently in the 320ms shrink anticipation phase */
  isShrinking?: boolean
  /** Whether this card is currently active and anticipating closing */
  isClosing?: boolean
  /** Whether this card is currently hovered */
  isHovered?: boolean
  /** Direction of navigation (forward or backward) for icon wave transitions */
  direction?: "forward" | "backward"
  /** Click/select handler */
  onSelect?: () => void
  /** Hover state callback */
  onHover?: (hovered: boolean) => void
  /** Custom badge icons (defaults to 4 tech stickers if omitted) */
  badges?: React.ReactNode
  /** Additional custom class names */
  className?: string
}

export interface AnimatedCardsProps {
  /** Array of card data. Only title, description, and buttonName are required! */
  items: AnimatedCardItem[]
  /** Index of the card that should be expanded by default (defaults to 0) */
  defaultActiveIndex?: number
  /** ID of the card that should be expanded by default */
  defaultActiveId?: string
  /** Callback fired when a card is selected */
  onSelectCard?: (id: string, index: number, item: AnimatedCardItem) => void
  /** Optional wrapper class names */
  className?: string
}

/* -------------------------------------------------------------------------- */
/*                   Floating Sticker Badges (Exact Figma Specs)              */
/* -------------------------------------------------------------------------- */

function BadgeReact() {
  return (
    <motion.div
      whileHover={{ scale: 1.08, rotate: -12 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{ transform: "rotate(-16.67deg)" }}
      className="pointer-events-auto relative flex size-18.75 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-[#5CA4DA] shadow-md"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#6DAFE0] to-[#4590C8] opacity-90" />
      <svg
        viewBox="-11.5 -10.23174 23 20.46348"
        className="relative size-11 fill-none stroke-current text-white"
        strokeWidth="1.15"
      >
        <circle cx="0" cy="0" r="2.1" fill="currentColor" stroke="none" />
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </svg>
    </motion.div>
  )
}

function BadgeSocial() {
  return (
    <motion.div
      whileHover={{ scale: 1.08, rotate: 12 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{ transform: "rotate(7.22deg)" }}
      className="pointer-events-auto relative flex size-[75px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-2xl"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-full"
      >
        {/* Blue bubble with # */}
        <rect x="6" y="16" width="30" height="24" rx="7" fill="#38BDF8" />
        <path d="M12 40 L16 38 L16 43 Z" fill="#38BDF8" />
        <text
          x="21"
          y="33"
          fill="white"
          fontSize="14"
          fontWeight="bold"
          textAnchor="middle"
          fontFamily="sans-serif"
        >
          #
        </text>

        {/* Yellow bubble with thumbs up */}
        <rect x="34" y="8" width="35" height="26" rx="7" fill="#FCD34D" />
        <path d="M42 34 L40 32 L46 32 Z" fill="#FCD34D" />
        <path
          d="M47 25 L47 18 C47 16.5 48.5 15 50 15 C50.8 15 51 16 51 17 L51 19 L56 19 C57.5 19 58 20.5 58 21.5 L56 26 C55.5 27 54.5 27 53.5 27 L47 27 Z"
          fill="#78350F"
        />

        {/* Pink bubble with heart */}
        <rect x="18" y="38" width="34" height="26" rx="7" fill="#FB7185" />
        <path d="M30 64 L34 62 L32 60 Z" fill="#FB7185" />
        <path
          d="M35 46 C33.5 44 30 45 30 47.5 C30 50 35 54 35 54 C35 54 40 50 40 47.5 C40 45 36.5 44 35 46 Z"
          fill="white"
        />
      </svg>
    </motion.div>
  )
}

function BadgeVue() {
  return (
    <motion.div
      whileHover={{ scale: 1.08, rotate: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{ transform: "rotate(-8.97deg)" }}
      className="pointer-events-auto relative flex size-[75px] shrink-0 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#E6F4EA] p-1.5 shadow-md"
      aria-hidden="true"
    >
      <svg viewBox="0 0 128 128" width="42" height="36">
        <path
          fill="#42b883"
          d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110H78.8z"
        />
        <path
          fill="#35495e"
          d="M78.8,10L64,35.4L49.2,10H25.5L64,76l38.5-66H78.8z"
        />
      </svg>
      <span className="mt-0.5 rounded bg-white/85 px-1.5 py-0.5 text-[10px] font-bold tracking-tight text-[#35495e] shadow-xs">
        VueJS
      </span>
    </motion.div>
  )
}

function BadgeDesignTool() {
  return (
    <motion.div
      whileHover={{ scale: 1.08, rotate: 18 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{ transform: "rotate(12.61deg)" }}
      className="pointer-events-auto relative flex size-[75px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-2xl"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-full"
      >
        <circle cx="37.5" cy="37.5" r="30" fill="#F1F5F9" />
        <path
          d="M37.5 37.5 L67.5 37.5 A30 30 0 0 1 52.5 63.5 Z"
          fill="#EF4444"
        />
        <path
          d="M37.5 37.5 L52.5 63.5 A30 30 0 0 1 22.5 63.5 Z"
          fill="#F59E0B"
        />
        <path
          d="M37.5 37.5 L22.5 63.5 A30 30 0 0 1 7.5 37.5 Z"
          fill="#10B981"
        />
        <path
          d="M37.5 37.5 L7.5 37.5 A30 30 0 0 1 22.5 11.5 Z"
          fill="#3B82F6"
        />
        <path
          d="M37.5 37.5 L22.5 11.5 A30 30 0 0 1 52.5 11.5 Z"
          fill="#8B5CF6"
        />
        <path
          d="M37.5 37.5 L52.5 11.5 A30 30 0 0 1 67.5 37.5 Z"
          fill="#EC4899"
        />
        <g transform="rotate(-35 37.5 37.5)">
          <rect
            x="33"
            y="10"
            width="9"
            height="38"
            rx="2"
            fill="#FBBF24"
            stroke="#D97706"
            strokeWidth="1"
          />
          <path d="M33 48 L37.5 58 L42 48 Z" fill="#FDE68A" />
          <path d="M36 54 L37.5 58 L39 54 Z" fill="#1E293B" />
          <rect x="33" y="10" width="9" height="7" fill="#CBD5E1" />
          <rect x="33" y="7" width="9" height="5" rx="1.5" fill="#F43F5E" />
        </g>
      </svg>
    </motion.div>
  )
}

function DefaultBadges() {
  return (
    <>
      <BadgeReact />
      <BadgeSocial />
      <BadgeVue />
      <BadgeDesignTool />
    </>
  )
}

/* -------------------------------------------------------------------------- */
/*                     "Click me!" Tooltip Annotation                        */
/* -------------------------------------------------------------------------- */

function ClickMeAnnotation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 3 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="pointer-events-none absolute -top-14 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center select-none"
    >
      <span className="font-outfit text-[14px] leading-tight font-medium text-[#414141] dark:text-neutral-300">
        Click me!
      </span>
      <svg
        width="28"
        height="32"
        viewBox="0 0 28 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-mt-0.5 text-[#414141] dark:text-neutral-300"
      >
        <path
          d="M7 2 C7 8 5 12 4 16 C3 20 7 22 10 19 C13 16 12 11 8 11 C4 11 3 16 6 21 C9 26 15 28 22 30"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 29 L22 30 L20 23"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*                     Individual Reusable Animated Card                      */
/* -------------------------------------------------------------------------- */

export function AnimatedCard({
  title,
  description,
  buttonName,
  id,
  count = "01",
  hasPlus = true,
  href = "#",
  isActive = false,
  isShrinking = false,
  isClosing = false,
  isHovered = false,
  direction = "forward",
  onSelect,
  onHover,
  badges,
  className,
}: AnimatedCardProps) {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])
  const isInitialRender = !hasMounted

  return (
    <motion.div
      className={cn(
        "relative flex h-[461px] shrink-0 justify-center",
        isActive ? "cursor-default" : "cursor-pointer",
        className
      )}
      onClick={onSelect}
      initial={false}
      animate={{
        width: isActive
          ? isInitialRender
            ? 592
            : [280, 604, 589, 592]
          : isInitialRender
          ? 280
          : [592, 268, 283, 280],
      }}
      transition={{
        duration: 0.8,
        times: !isInitialRender ? [0, 0.62, 0.82, 1] : undefined,
        ease: ["easeOut", "easeInOut", "easeOut"],
      }}
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
    >
      {/* "Click me!" annotation with curly doodle arrow matching video on hover of collapsed cards */}
      <AnimatePresence>
        {isHovered && !isActive && !isShrinking && <ClickMeAnnotation />}
      </AnimatePresence>

      {/* 
        Card Container (Smart Animate from Figma inspect)
        - Inward compression recoil during 300ms anticipation:
          - Clicked card shrinks to 240px
          - Closing card shrinks to 560px
        - Elastic width overshoot and recoil on expansion:
          - Opening card expands: [240, 604, 589, 592]
          - Closing card collapses: [560, 268, 283, 280]
        - Sum of widths is ALWAYS 872px (604+268 = 872, 589+283 = 872, 592+280 = 872):
          Zero container layout shift!
      */}
      <motion.div
        initial={false}
        animate={{
          width: isActive
            ? isClosing
              ? 560
              : isInitialRender
              ? 592
              : [240, 604, 589, 592]
            : isShrinking
            ? 240
            : isInitialRender
            ? 280
            : [560, 268, 283, 280],
        }}
        transition={{
          duration: isShrinking || isClosing ? 0.3 : 0.8,
          times:
            !isInitialRender && !isShrinking && !isClosing
              ? [0, 0.62, 0.82, 1]
              : undefined,
          ease:
            isShrinking || isClosing
              ? [0.4, 0, 0.2, 1]
              : ["easeOut", "easeInOut", "easeOut"],
        }}
        style={{
          backgroundColor: "#C33241",
          borderRadius: 32,
        }}
        role="tab"
        aria-selected={isActive}
        tabIndex={0}
        onClick={onSelect}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            onSelect?.()
          }
        }}
        className={cn(
          "relative h-[461px] overflow-hidden transition-shadow outline-none select-none",
          isActive
            ? "cursor-default shadow-2xl"
            : "cursor-pointer shadow-sm hover:shadow-xl"
        )}
      >
        {/* 
          Ellipse 6 (The Circular Wipe Transition)
          - Collapsed: width 680px, height 680px, left -200px, top -110px (completely covers closed card in #F9EBEC)
          - Active: shrinks to 0 at bottom-left corner with opacity 0, leaving pure clean #C33241
        */}
        <motion.div
          className="pointer-events-none absolute rounded-full bg-[#F9EBEC]"
          initial={false}
          animate={{
            width: isActive ? 0 : 680,
            height: isActive ? 0 : 680,
            left: isActive ? -10 : -200,
            top: isActive ? 465 : -110,
            opacity: isActive ? 0 : 1,
          }}
          transition={{
            duration: 0.75,
            ease: [0.25, 1, 0.5, 1],
          }}
        />

        {/* 
          Frame 811897: Floating Sticker Badges
          - Active: left 66px, top 126px, opacity 1
          - Recoil on Open: enters from offscreen, overshoots past 66px, recoils back and settles
          - Recoil on Close: recoils in opposite direction of motion before exiting
        */}
        <AnimatePresence custom={direction} initial={false}>
          {isActive && (
            <motion.div
              key={`badges-${id ?? title}`}
              custom={direction}
              variants={{
                enter: (dir?: "forward" | "backward") => ({
                  left: dir === "backward" ? 600 : -514,
                  opacity: 0,
                  scale: 0.92,
                }),
                center: (dir?: "forward" | "backward") => ({
                  left:
                    dir === "backward"
                      ? [600, 52, 70, 66]
                      : [-514, 80, 62, 66],
                  opacity: [0, 1, 1, 1],
                  scale: [0.94, 1.05, 0.98, 1],
                  transition: {
                    duration: 0.8,
                    times: [0, 0.62, 0.82, 1],
                    ease: ["easeOut", "easeInOut", "easeOut"],
                  },
                }),
                recoil: (dir?: "forward" | "backward") => ({
                  left: dir === "backward" ? 92 : 40,
                  scale: 0.95,
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }),
                exit: (dir?: "forward" | "backward") => ({
                  left: dir === "backward" ? -514 : 600,
                  opacity: 0,
                  scale: 0.9,
                  transition: {
                    duration: 0.7,
                    ease: [0.25, 1, 0.5, 1],
                  },
                }),
              }}
              initial="enter"
              animate={isClosing ? "recoil" : "center"}
              exit="exit"
              className="absolute top-[126px] z-10 flex items-center gap-[42px]"
            >
              {badges ?? <DefaultBadges />}
            </motion.div>
          )}
        </AnimatePresence>

        {/* 
          Action Button: Fixed at left: 393px, top: 40px with w-max and whitespace-nowrap
        */}
        <motion.div
          initial={false}
          animate={{
            opacity: isActive ? 1 : 0,
            x: isActive ? [15, -2, 0] : 15,
          }}
          transition={{
            duration: 0.75,
            ease: [0.25, 1, 0.5, 1],
          }}
          className={cn(
            "absolute top-[40px] left-[393px] z-20 w-max shrink-0 select-none",
            isActive ? "pointer-events-auto" : "pointer-events-none"
          )}
          aria-hidden={!isActive}
        >
          <a
            href={href}
            tabIndex={isActive ? 0 : -1}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-[18px] leading-[23px] font-semibold text-[#F9EBEC] transition-colors hover:text-white"
          >
            {buttonName}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="shrink-0"
            >
              <path
                d="M4.16675 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15"
                stroke="currentColor"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>

        {/* 
          Title & Description Block (Frame 811894):
          - Active: horizontal (rotate: 0deg) at top: 295px, left: 268px, color #F9EBEC
          - Collapsed: vertical (rotate: -90deg) at top: 180px, left: 140px, color #C33241
          - Recoil on Open: swings down from -90deg, overshoots past 0deg to +4deg, recoils to -1deg, settles at 0deg!
          - Position coordinates smoothly transition with ZERO layout shift!
        */}
        <motion.div
          initial={false}
          animate={{
            top: isActive
              ? isInitialRender
                ? 295
                : [180, 298, 294, 295]
              : isClosing
              ? 295
              : isInitialRender
              ? 180
              : [295, 177, 181, 180],
            left: isActive
              ? isInitialRender
                ? 268
                : [140, 273, 267, 268]
              : isClosing
              ? 268
              : isInitialRender
              ? 140
              : [268, 137, 141, 140],
            rotate: isClosing
              ? 8
              : isActive
              ? isInitialRender
                ? 0
                : [-90, 4, -1, 0]
              : isShrinking
              ? -98
              : isInitialRender
              ? -90
              : [0, -93, -89, -90],
          }}
          style={{
            transformOrigin: "0% 50%",
          }}
          transition={{
            duration: isShrinking || isClosing ? 0.3 : 0.8,
            times:
              !isInitialRender && !isShrinking && !isClosing
                ? [0, 0.62, 0.82, 1]
                : undefined,
            ease:
              isShrinking || isClosing
                ? [0.4, 0, 0.2, 1]
                : ["easeOut", "easeInOut", "easeOut"],
          }}
          className={cn(
            "absolute z-10 flex flex-col items-start gap-3 select-none",
            isActive ? "w-[290px]" : "w-[218px]"
          )}
        >
          <motion.h3
            initial={false}
            animate={{
              color: isActive ? "#F9EBEC" : "#C33241",
            }}
            transition={{
              duration: 0.8,
              ease: ["easeOut", "easeInOut", "easeOut"],
            }}
            className={cn(
              "font-outfit text-[32px] leading-[40px] font-bold",
              isActive && "whitespace-nowrap"
            )}
          >
            {title}
          </motion.h3>
          <motion.p
            initial={false}
            animate={{
              color: isActive ? "#F9EBEC" : "#C33241",
            }}
            transition={{
              duration: 0.8,
              ease: ["easeOut", "easeInOut", "easeOut"],
            }}
            className="line-clamp-2 font-outfit text-[18px] leading-[23px] font-normal"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* 
          Number Display & Plus Sign:
          Fixed position: DOES NOT SHIFT when card is opened or closed.
          - Stays anchored at left: 50px, bottom: 35px across all states.
          - Plus symbol is positioned at the TOP RIGHT of the number.
          - Rock-solid layout: no position shift or distortion!
        */}
        <div className="pointer-events-none absolute bottom-[35px] left-[50px] z-10 select-none">
          <div className="relative inline-block">
            <motion.span
              initial={false}
              animate={{
                color: isActive ? "#F9EBEC" : "#C33241",
              }}
              transition={{ duration: 0.55 }}
              className="block font-heading text-[150px] leading-none font-bold tracking-tight"
            >
              {count}
            </motion.span>
            {hasPlus && (
              <motion.span
                initial={false}
                animate={{
                  color: isActive ? "#FFFFFF" : "#C33241",
                }}
                transition={{ duration: 0.55 }}
                className="absolute top-1 left-full ml-1 font-heading text-[64px] leading-none font-bold"
              >
                +
              </motion.span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*            Reusable Animated Cards Collection / Accordion Row              */
/* -------------------------------------------------------------------------- */

export function AnimatedCards({
  items,
  defaultActiveIndex = 0,
  defaultActiveId,
  onSelectCard,
  className,
}: AnimatedCardsProps) {
  // Resolve starting card id
  const initialId =
    defaultActiveId ??
    items[defaultActiveIndex]?.id ??
    `card-${defaultActiveIndex}`

  const [activeId, setActiveId] = React.useState<string>(initialId)
  const [shrinkingId, setShrinkingId] = React.useState<string | null>(null)
  const [direction, setDirection] = React.useState<"forward" | "backward">("forward")
  const [hoveredId, setHoveredId] = React.useState<string | null>(null)
  const shrinkTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => {
    return () => {
      if (shrinkTimerRef.current) {
        clearTimeout(shrinkTimerRef.current)
      }
    }
  }, [])

  const handleSelect = (id: string, index: number, item: AnimatedCardItem) => {
    if (id === activeId || shrinkingId) return

    const currentIndex = items.findIndex(
      (c, i) => (c.id ?? `card-${i}`) === activeId
    )
    const newDirection = index > currentIndex ? "forward" : "backward"
    setDirection(newDirection)

    // 1. Trigger width compression recoil FIRST
    setHoveredId(null)
    setShrinkingId(id)

    if (shrinkTimerRef.current) {
      clearTimeout(shrinkTimerRef.current)
    }

    shrinkTimerRef.current = setTimeout(() => {
      // 2. Trigger expansion recoil
      setShrinkingId(null)
      setActiveId(id)
      onSelectCard?.(id, index, item)
    }, 300)
  }

  return (
    <div className={cn("-mt-12 w-full overflow-x-auto scrollbar-none pt-12 pb-4", className)}>
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="flex h-[461px] w-full min-w-max flex-row items-stretch justify-start sm:justify-center gap-8"
      >
        {items.map((item, index) => {
          const { title, description, buttonName } = item
          const id = item.id ?? `card-${index}`
          const count = item.count ?? ["23", "05", "10"][index] ?? String(index + 1).padStart(2, "0")
          const hasPlus = item.hasPlus ?? true
          const href = item.href ?? "#"

          const isActive = id === activeId
          const isShrinking = id === shrinkingId
          const isClosing = id === activeId && shrinkingId !== null
          const isHovered = id === hoveredId

          return (
            <AnimatedCard
              key={id}
              id={id}
              title={title}
              description={description}
              buttonName={buttonName}
              count={count}
              hasPlus={hasPlus}
              href={href}
              isActive={isActive}
              isShrinking={isShrinking}
              isClosing={isClosing}
              isHovered={isHovered}
              direction={direction}
              onSelect={() => handleSelect(id, index, item)}
              onHover={(hovered) => setHoveredId(hovered ? id : null)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default AnimatedCards
