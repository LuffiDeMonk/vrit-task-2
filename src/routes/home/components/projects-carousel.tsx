import * as React from "react";
import {
  useState,
  useRef,
  useEffect,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import CarouselProgressBar from "./carousel-progress-bar";
import type { ServiceCardItem } from "../types";

export interface ProjectsCarouselHandle {
  scrollToCard: (index: number) => void;
}

interface ProjectsCarouselProps {
  cards: ServiceCardItem[];
  onDragStateChange?: (isDragging: boolean) => void;
  onScrollProgressChange?: (progress: number) => void;
  onActiveCardChange?: (index: number) => void;
  className?: string;
}

const ProjectsCarousel = forwardRef<
  ProjectsCarouselHandle,
  ProjectsCarouselProps
>(function ProjectsCarousel(
  {
    cards,
    onDragStateChange,
    onScrollProgressChange,
    onActiveCardChange,
    className,
  },
  ref,
) {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const isPointerDownRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const scrollLeftRef = useRef<number>(0);

  const scrollToCard = useCallback((index: number) => {
    if (!carouselRef.current) return;
    const cardWidth = 1012 + 20;
    carouselRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      scrollToCard,
    }),
    [scrollToCard],
  );

  const totalCards = cards.length;

  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      onScrollProgressChange?.(0);
      return;
    }
    const progress = Math.min(Math.max(scrollLeft / maxScroll, 0), 1);
    setScrollProgress(progress);
    onScrollProgressChange?.(progress);

    if (isPointerDownRef.current && totalCards > 1) {
      const cardIndex = Math.min(
        Math.max(Math.round(progress * (totalCards - 1)), 0),
        totalCards - 1,
      );
      onActiveCardChange?.(cardIndex);
    }
  }, [totalCards, onScrollProgressChange, onActiveCardChange]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    isPointerDownRef.current = true;
    setIsDragging(true);
    onDragStateChange?.(true);
    startXRef.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeftRef.current = carouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPointerDownRef.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (isPointerDownRef.current) {
      isPointerDownRef.current = false;
      setIsDragging(false);
      onDragStateChange?.(false);
    }
  };

  const handleProgressSeek = (ratio: number) => {
    if (!carouselRef.current) return;
    const maxScroll =
      carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
    carouselRef.current.scrollTo({
      left: ratio * maxScroll,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-start gap-8 lg:gap-[40px]",
        className,
      )}
    >
      <div
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={cn(
          "relative flex w-full flex-row items-center gap-5 overflow-x-auto select-none py-1 scroll-smooth",
          "scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]",
          isDragging ? "cursor-grabbing" : "cursor-grab",
        )}
        style={{
          isolation: "isolate",
        }}
      >
        {cards.map((card, idx) => (
          <div
            key={card.id}
            style={{
              borderRadius: "21.2px",
              scrollSnapAlign: "start",
            }}
            className={cn(
              "relative flex-none overflow-hidden bg-[#E1E1E1]",
              "w-[85vw] sm:w-[88vw] lg:w-[1012px] h-[340px] sm:h-[450px] lg:h-[569.25px]",
            )}
          >
            <img
              src={card.image}
              alt={card.alt}
              className="size-full object-cover pointer-events-none select-none"
              loading={idx === 0 ? "eager" : "lazy"}
              draggable={false}
            />

            {idx === 0 && (
              <motion.div
                animate={{ scale: isDragging ? 1.08 : 1 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex size-[120px] items-center justify-center rounded-full bg-[#D9D9D9]/85 backdrop-blur-xs select-none shadow-md"
              >
                <span
                  className="text-[#262626] font-medium text-[16px] text-center"
                  style={{
                    fontFamily: "'Manrope', var(--font-sans), sans-serif",
                  }}
                >
                  Drag
                </span>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <CarouselProgressBar
        progress={scrollProgress}
        onSeek={handleProgressSeek}
      />
    </div>
  );
});

export default ProjectsCarousel;
