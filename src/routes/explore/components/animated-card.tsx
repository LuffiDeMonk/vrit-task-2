import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CourseCategory } from "../types";
import ClickMeAnnotation from "./click-me-annotation";
import DefaultBadges from "./card-badges";

interface AnimatedCardProps {
  category?: CourseCategory;
  index?: number;
  activeId?: string;
  shrinkingId?: string | null;
  hoveredId?: string | null;
  title?: string;
  description?: string;
  buttonName?: string;
  id?: string;
  count?: string;
  hasPlus?: boolean;
  href?: string;
  isActive?: boolean;
  isShrinking?: boolean;
  isClosing?: boolean;
  isHovered?: boolean;
  direction?: "forward" | "backward";
  onSelect?: () => void;
  onHover?: (hovered: boolean) => void;
  badges?: React.ReactNode;
  className?: string;
}

export default function AnimatedCard({
  category,
  index = 0,
  activeId,
  shrinkingId,
  hoveredId,
  title: propTitle,
  description: propDescription,
  buttonName: propButtonName,
  id: propId,
  count: propCount,
  hasPlus: propHasPlus,
  href: propHref,
  isActive: propIsActive,
  isShrinking: propIsShrinking,
  isClosing: propIsClosing,
  isHovered: propIsHovered,
  direction = "forward",
  onSelect,
  onHover,
  badges,
  className,
}: AnimatedCardProps) {
  const id = propId ?? category?.id ?? `card-${index}`;
  const count =
    propCount ??
    category?.count ??
    ["23", "05", "10"][index] ??
    String(index + 1).padStart(2, "0");
  const hasPlus = propHasPlus ?? category?.hasPlus ?? true;
  const href = propHref ?? category?.viewAllHref ?? "/products";
  const buttonName =
    propButtonName ??
    category?.buttonName ??
    category?.viewAllText ??
    "View all Courses";
  const title = propTitle ?? category?.title ?? "";
  const description = propDescription ?? category?.description ?? "";

  const isActive = propIsActive ?? id === activeId;
  const isShrinking = propIsShrinking ?? id === shrinkingId;
  const isClosing = propIsClosing ?? (id === activeId && shrinkingId !== null);
  const isHovered = propIsHovered ?? id === hoveredId;

  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  const isInitialRender = !hasMounted;

  return (
    <motion.div
      className={cn(
        "relative flex h-[461px] shrink-0 justify-center",
        isActive ? "cursor-default z-10" : "cursor-pointer z-0",
        isHovered && "z-50",
        className,
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
      <AnimatePresence>
        {isHovered && !isActive && !isShrinking && <ClickMeAnnotation />}
      </AnimatePresence>

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
            e.preventDefault();
            onSelect?.();
          }
        }}
        className={cn(
          "relative h-[461px] overflow-hidden outline-none select-none",
          isActive ? "cursor-default" : "cursor-pointer",
        )}
      >
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
                    dir === "backward" ? [600, 52, 70, 66] : [-514, 80, 62, 66],
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
            isActive ? "pointer-events-auto" : "pointer-events-none",
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
            <ArrowRight className="size-5 shrink-0" strokeWidth={2} />
          </a>
        </motion.div>

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
            isActive ? "w-[290px]" : "w-[218px]",
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
              isActive && "whitespace-nowrap",
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
  );
}
