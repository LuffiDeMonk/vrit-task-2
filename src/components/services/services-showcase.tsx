"use client";

import * as React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*                                Types & Props                               */
/* -------------------------------------------------------------------------- */

export interface ServiceCardItem {
  id: string;
  image: string;
  alt: string;
  title?: string;
  category?: string;
}

export interface ServicesShowcaseProps {
  className?: string;
  headline?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  services?: string[];
  cards?: ServiceCardItem[];
  partnersTitle?: string;
}

/* -------------------------------------------------------------------------- */
/*                            Default Showcase Data                           */
/* -------------------------------------------------------------------------- */

const DEFAULT_CARDS: ServiceCardItem[] = [
  {
    id: "card-1",
    // Flat lay workspace with laptop, spreadsheet, calculator, coffee, notes matching screenshot
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=80",
    alt: "Workspace with laptop, calculator, paperwork, and person working",
    title: "UI & UX Design Systems",
    category: "UI & UX",
  },
  {
    id: "card-2",
    // Office desk with phone, remote, sleek device matching screenshot's second card
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
    alt: "Modern workspace desk with office devices and telephone",
    title: "Full-Stack Development",
    category: "Development",
  },
  {
    id: "card-3",
    // Technology & Blockchain engineering workspace
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80",
    alt: "Modern clean design workspace and architecture",
    title: "Blockchain Architecture",
    category: "Blockchain",
  },
  {
    id: "card-4",
    // Creative motion and animation workstation
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80",
    alt: "Creative digital design and animation setup",
    title: "Interactive Motion & 3D",
    category: "Animation",
  },
];

const DEFAULT_SERVICES = ["UI & UX", "Development", "Blockchain"];

/* -------------------------------------------------------------------------- */
/*                                Partner Logos                               */
/* -------------------------------------------------------------------------- */

// 1. Cloud Education: Cloud with open book inside, 4 sparkle stars top right, text below
function CloudEducationLogo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-1.5 transition-transform duration-300 hover:scale-105",
        className
      )}
    >
      <svg
        width="66"
        height="44"
        viewBox="0 0 66 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Cloud Education Logo"
      >
        {/* 4 Sparkle stars floating above upper right */}
        <path
          d="M52 3L53.5 7.5L58 9L53.5 10.5L52 15L50.5 10.5L46 9L50.5 7.5L52 3Z"
          fill="currentColor"
          className="text-[#171717] dark:text-neutral-100"
        />
        <circle cx="61" cy="4" r="1.3" fill="currentColor" className="text-[#171717] dark:text-neutral-100" />
        <circle cx="44" cy="4" r="1.1" fill="currentColor" className="text-[#171717] dark:text-neutral-100" />
        <circle cx="59" cy="14" r="1.1" fill="currentColor" className="text-[#171717] dark:text-neutral-100" />

        {/* Cloud Outline */}
        <path
          d="M16 38C10.4772 38 6 33.5228 6 28C6 22.9564 9.7348 18.7847 14.6139 18.0931C16.3639 11.1352 22.6806 6 30.2 6C36.3142 6 41.6033 9.4217 44.2985 14.4755C45.6961 13.551 47.3828 13 49.2 13C54.1706 13 58.2 17.0294 58.2 22C58.2 22.6685 58.127 23.32 57.989 23.9463C61.464 25.176 64 28.5135 64 32.4286C64 37.1624 60.1624 41 55.4286 41H16"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#171717] dark:text-neutral-100"
        />

        {/* Open Book in the bottom center */}
        <path
          d="M26 29C28.8 27.2 32.2 27.2 35 29C37.8 27.2 41.2 27.2 44 29V37C41.2 35.2 37.8 35.2 35 37C32.2 35.2 28.8 35.2 26 37V29Z"
          fill="currentColor"
          className="text-[#171717] dark:text-neutral-100"
        />
        <line x1="35" y1="28" x2="35" y2="37" stroke="white" strokeWidth="1.6" />
      </svg>
      <span
        className="font-bold text-[12.5px] leading-tight tracking-tight text-[#171717] dark:text-neutral-100"
        style={{ fontFamily: "'Manrope', var(--font-sans), sans-serif" }}
      >
        Cloud Education
      </span>
    </div>
  );
}

// 2. CMC: 6-petal geometric asterism + "CMC" bold text
function CmcLogo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2.5 transition-transform duration-300 hover:scale-105",
        className
      )}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="CMC Icon"
      >
        <g transform="translate(17, 17)">
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <path
              key={i}
              d="M0 -3C1.6 -6 4.2 -12 0 -15.5C-4.2 -12 -1.6 -6 0 -3Z"
              fill="currentColor"
              className="text-[#171717] dark:text-neutral-100"
              transform={`rotate(${angle})`}
            />
          ))}
          <circle cx="0" cy="0" r="2.8" fill="currentColor" className="text-[#171717] dark:text-neutral-100" />
        </g>
      </svg>
      <span
        className="font-extrabold text-[27px] tracking-tight text-[#171717] dark:text-neutral-100"
        style={{ fontFamily: "'Oakes Grotesk', var(--font-heading), sans-serif" }}
      >
        CMC
      </span>
    </div>
  );
}

// 3. IT SNP: Round gear/seal badge with "IT" screen + "SNP" bold text
function ItSnpLogo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2.5 transition-transform duration-300 hover:scale-105",
        className
      )}
    >
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="IT SNP Icon"
      >
        {/* Seal circle with gear teeth */}
        <circle cx="21" cy="21" r="18.5" fill="currentColor" className="text-[#171717] dark:text-neutral-100" />
        {[...Array(16)].map((_, i) => (
          <circle
            key={i}
            cx={21 + 19.5 * Math.cos((i * 2 * Math.PI) / 16)}
            cy={21 + 19.5 * Math.sin((i * 2 * Math.PI) / 16)}
            r="1.25"
            fill="currentColor"
            className="text-[#171717] dark:text-neutral-100"
          />
        ))}
        {/* Computer monitor outline with "IT" inside */}
        <rect x="11" y="11.5" width="20" height="15" rx="2.5" fill="white" className="dark:fill-[#0A0A0A]" />
        <rect x="13" y="13.5" width="16" height="11" rx="1.5" fill="currentColor" className="text-[#171717] dark:text-neutral-100" />
        <path d="M18 26.5L16.5 29.5H25.5L24 26.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" className="dark:stroke-[#0A0A0A]" />
        <text
          x="21"
          y="21.5"
          fontFamily="system-ui, sans-serif"
          fontSize="7.5"
          fontWeight="900"
          fill="white"
          textAnchor="middle"
          letterSpacing="0.5px"
          className="dark:fill-[#0A0A0A]"
        >
          IT
        </text>
      </svg>
      <span
        className="font-extrabold text-[21px] tracking-wide text-[#171717] dark:text-neutral-100"
        style={{ fontFamily: "'Oakes Grotesk', var(--font-heading), sans-serif" }}
      >
        SNP
      </span>
    </div>
  );
}

// 4. Zebec: Two layered floating ribbon/pill nodes + "Zebec" text
function ZebecLogo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2.5 transition-transform duration-300 hover:scale-105",
        className
      )}
    >
      <svg
        width="40"
        height="28"
        viewBox="0 0 40 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Zebec Icon"
      >
        {/* Top layer */}
        <path
          d="M8.5 6C8.5 3.79086 10.2909 2 12.5 2H27.5C29.7091 2 31.5 3.79086 31.5 6V7C31.5 9.20914 29.7091 11 27.5 11H12.5C10.2909 11 8.5 9.20914 8.5 7V6Z"
          stroke="currentColor"
          strokeWidth="2.6"
          fill="none"
          className="text-[#171717] dark:text-neutral-100"
        />
        {/* Bottom offset layer */}
        <path
          d="M3.5 17C3.5 14.7909 5.29086 13 7.5 13H32.5C34.7091 13 36.5 14.7909 36.5 17V18C36.5 20.2091 34.7091 22 32.5 22H7.5C5.29086 22 3.5 20.2091 3.5 18V17Z"
          stroke="currentColor"
          strokeWidth="2.6"
          fill="none"
          className="text-[#171717] dark:text-neutral-100"
        />
      </svg>
      <span
        className="font-bold text-[23px] tracking-tight text-[#171717] dark:text-neutral-100"
        style={{ fontFamily: "'Manrope', var(--font-sans), sans-serif" }}
      >
        Zebec
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                         Main Rewritten Component                           */
/* -------------------------------------------------------------------------- */

export function ServicesShowcase({
  className,
  headline = "Experience our expert solutions tailored to enhance your business with top-tier design, development, and animation.",
  buttonText = "Services",
  onButtonClick,
  services = DEFAULT_SERVICES,
  cards = DEFAULT_CARDS,
  partnersTitle = "Our Partners",
}: ServicesShowcaseProps) {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const isPointerDownRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const scrollLeftRef = useRef<number>(0);

  // Sync scroll progress with the carousel's scrollLeft
  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      return;
    }
    const progress = Math.min(Math.max(scrollLeft / maxScroll, 0), 1);
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    isPointerDownRef.current = true;
    setIsDragging(true);
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
    isPointerDownRef.current = false;
    setIsDragging(false);
  };

  // Click on progress bar track to seek
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickRatio = (e.clientX - rect.left) / rect.width;
    const maxScroll =
      carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
    carouselRef.current.scrollTo({
      left: clickRatio * maxScroll,
      behavior: "smooth",
    });
  };

  // Scroll to a specific card when clicking a service item on the right
  const scrollToCard = (index: number) => {
    if (!carouselRef.current) return;
    const cardWidth = 1012 + 20; // 1012px card + 20px gap
    carouselRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-white text-[#171717] dark:bg-[#0A0A0A] dark:text-neutral-100 transition-colors duration-300",
        "py-16 sm:py-24 lg:py-[137px] px-6 sm:px-12 lg:px-[112px]",
        className
      )}
      aria-label="Our Services"
    >
      {/* Centered Main Container matching Figma Frame 1000002781: 1218px width */}
      <div className="mx-auto flex w-full max-w-[1218px] flex-col items-center justify-center gap-16 sm:gap-28 lg:gap-[193px]">
        {/* ==================================================================== */}
        {/* Top Header Row (Frame 1000002779): Headline & Services               */}
        {/* ==================================================================== */}
        <div className="flex w-full flex-col lg:flex-row items-start justify-between gap-12 lg:gap-[202px]">
          {/* Left Column: Frame 1000002776 (625px width, 58px gap) */}
          <div className="flex flex-col items-start gap-8 sm:gap-12 lg:gap-[58px] max-w-[625px]">
            {/* Experience text: Oakes Grotesk 36px 500 line-height 140% color #262626 */}
            <h1
              className="text-[#262626] dark:text-[#F0F0F0] text-2xl sm:text-3xl lg:text-[36px] font-medium leading-[140%] tracking-tight"
              style={{ fontFamily: "'Oakes Grotesk', var(--font-heading), sans-serif" }}
            >
              {headline}
            </h1>

            {/* CTA Button: Blue rounded pill with text "Services" */}
            <button
              type="button"
              onClick={onButtonClick}
              className="inline-flex items-center justify-center px-6 py-2.5 h-[48px] rounded-[100px] bg-[#1253ED] hover:bg-[#0E46CB] active:bg-[#0A38A5] text-[#FAFAFA] font-semibold text-base leading-[120%] shadow-xs transition-colors duration-200 cursor-pointer outline-hidden focus-visible:ring-2 focus-visible:ring-[#1253ED]"
              style={{ fontFamily: "'Manrope', var(--font-sans), sans-serif" }}
            >
              {buttonText}
            </button>
          </div>

          {/* Right Column: Frame 1000002778 (UI & UX, Development, Blockchain) */}
          <div className="flex flex-col items-start justify-start gap-6 sm:gap-8 lg:gap-[26px] w-full lg:w-[337px] select-none">
            {services.map((service, idx) => (
              <div
                key={service}
                onClick={() => scrollToCard(idx)}
                onKeyDown={(e) => e.key === "Enter" && scrollToCard(idx)}
                tabIndex={0}
                role="button"
                aria-label={`Jump to ${service}`}
                className="group cursor-pointer transition-colors duration-200 outline-hidden focus-visible:ring-2 focus-visible:ring-[#1253ED] rounded-lg"
              >
                <span
                  className="block font-bold text-3xl sm:text-4xl lg:text-[52px] leading-[120%] tracking-[-0.01em] text-[#171717] dark:text-white group-hover:text-[#1253ED] transition-colors duration-200"
                  style={{ fontFamily: "'Oakes Grotesk', var(--font-heading), sans-serif" }}
                >
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ==================================================================== */}
        {/* Middle Section: Project Showcase Carousel (Frame 1000002780)         */}
        {/* ==================================================================== */}
        <div className="relative flex w-full flex-col items-start gap-8 lg:gap-[59px]">
          {/* The Scrollable Carousel Row: Frame 1000002777 */}
          <div
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className={cn(
              "relative flex w-full flex-row items-center gap-5 overflow-x-auto select-none py-1 scroll-smooth",
              "scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]",
              isDragging ? "cursor-grabbing" : "cursor-grab"
            )}
            style={{
              isolation: "isolate",
            }}
          >
            {cards.map((card, idx) => (
              <div
                key={card.id}
                style={{
                  borderRadius: "21.2076px",
                  scrollSnapAlign: "start",
                }}
                className={cn(
                  "relative flex-none overflow-hidden bg-[#E1E1E1] dark:bg-neutral-800",
                  "w-[85vw] sm:w-[88vw] lg:w-[1012px] h-[340px] sm:h-[450px] lg:h-[569.25px]"
                )}
              >
                {/* Clean Image filling the card with border-radius 21.2px */}
                <img
                  src={card.image}
                  alt={card.alt}
                  className="size-full object-cover pointer-events-none select-none"
                  loading={idx === 0 ? "eager" : "lazy"}
                  draggable={false}
                />
              </div>
            ))}

            {/* Circular "Drag" Circle: Group 33732 / Ellipse 296 */}
            {/* Positioned in center with width: 132px, height: 132px, background: #D9D9D9 */}
            <div
              className="pointer-events-none absolute top-[calc(50%-66px)] left-[calc(50%-66px)] z-10 flex size-[132px] items-center justify-center rounded-full bg-[#D9D9D9]/90 dark:bg-neutral-800/90 shadow-md backdrop-blur-xs select-none"
            >
              <span
                className="text-[#262626] dark:text-neutral-100 font-semibold text-base text-center"
                style={{ fontFamily: "'Manrope', var(--font-sans), sans-serif" }}
              >
                Drag
              </span>
            </div>
          </div>

          {/* Progress Bar: Frame Group 34095 */}
          {/* Rectangle 252 (Track: #EDEDED, 1218px x 7px) */}
          {/* Rectangle 253 (Indicator: #CFCFCF, 292.54px x 7px) */}
          <div
            className="group relative h-[7px] w-full cursor-pointer rounded-[50px] bg-[#EDEDED] dark:bg-neutral-800 overflow-hidden"
            onClick={handleProgressClick}
            role="progressbar"
            aria-valuenow={Math.round(scrollProgress * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Carousel Scroll Progress"
          >
            {/* Proportional 292.54px indicator thumb */}
            <motion.div
              className="absolute top-0 h-full rounded-[50px] bg-[#CFCFCF] dark:bg-neutral-500 group-hover:bg-[#1253ED] transition-colors duration-200"
              style={{
                width: "24.01%", // 292.54px / 1218px
                left: `${scrollProgress * 75.99}%`, // 100% - 24.01%
              }}
            />
          </div>
        </div>

        {/* ==================================================================== */}
        {/* Bottom Section: Our Partners (Group 33731)                           */}
        {/* ==================================================================== */}
        <div className="flex w-full flex-col items-center justify-center gap-8 lg:gap-[48px] max-w-[1058px]">
          {/* Title: "Our Partners" (Manrope, 22px, 700, #171717) */}
          <h2
            className="text-center font-bold text-xl sm:text-[22px] leading-[150%] tracking-[-0.02em] text-[#171717] dark:text-neutral-100"
            style={{ fontFamily: "'Manrope', var(--font-sans), sans-serif" }}
          >
            {partnersTitle}
          </h2>

          {/* Partner Logos Row (Frame 1000002775: gap: 162px, width: 1058px) */}
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 lg:gap-[130px] xl:gap-[162px] w-full">
            {/* 1. Cloud Education */}
            <div className="flex items-center justify-center">
              <CloudEducationLogo />
            </div>

            {/* 2. CMC */}
            <div className="flex items-center justify-center">
              <CmcLogo />
            </div>

            {/* 3. IT SNP */}
            <div className="flex items-center justify-center">
              <ItSnpLogo />
            </div>

            {/* 4. Zebec */}
            <div className="flex items-center justify-center">
              <ZebecLogo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesShowcase;
