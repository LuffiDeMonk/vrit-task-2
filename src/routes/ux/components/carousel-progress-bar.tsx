import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CarouselProgressBarProps {
  progress: number;
  onSeek?: (ratio: number) => void;
  className?: string;
}

export default function CarouselProgressBar({
  progress,
  onSeek,
  className,
}: CarouselProgressBarProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!onSeek) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickRatio = (e.clientX - rect.left) / rect.width;
    onSeek(Math.min(Math.max(clickRatio, 0), 1));
  };

  return (
    <div
      className={cn(
        "group relative h-[7px] w-full cursor-pointer rounded-full bg-[#EDEDED] overflow-hidden",
        className,
      )}
      onClick={handleClick}
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Carousel Scroll Progress"
    >
      <motion.div
        className="absolute top-0 h-full rounded-full bg-[#CFCFCF] group-hover:bg-[#1253ED] transition-colors duration-200"
        style={{
          width: "24.01%",
          left: `${progress * 75.99}%`,
        }}
      />
    </div>
  );
}
