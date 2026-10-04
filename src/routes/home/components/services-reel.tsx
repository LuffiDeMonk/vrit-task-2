import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DEFAULT_SERVICES } from "../constants";

interface ServicesReelProps {
  services?: string[];
  animStep?: number;
  onSelectService?: (index: number) => void;
  onHoverChange?: (hovering: boolean) => void;
  className?: string;
}

export default function ServicesReel({
  services = DEFAULT_SERVICES,
  animStep = 0,
  onSelectService,
  onHoverChange,
  className,
}: ServicesReelProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-start w-full lg:w-[337px] h-auto lg:h-[242px] gap-[35px] select-none",
        className
      )}
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
    >
      <div
        onClick={() => onSelectService?.(0)}
        className="w-full lg:w-[337px] h-[53px] overflow-hidden cursor-pointer group rounded-lg"
        role="button"
        tabIndex={0}
        aria-label="UI & UX service slot"
        onKeyDown={(e) => e.key === "Enter" && onSelectService?.(0)}
      >
        <motion.div
          animate={{ y: -(animStep * 88) }}
          transition={{ duration: 0.85, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col items-start gap-[26px]"
        >
          {services.map((service, i) => (
            <span
              key={i}
              className="block h-[62px] font-bold text-3xl sm:text-4xl lg:text-[52px] leading-[120%] tracking-[-0.01em] text-[#171717] group-hover:text-[#1253ED] transition-colors duration-200"
              style={{ fontFamily: "'Oakes Grotesk', var(--font-heading), sans-serif" }}
            >
              {service}
            </span>
          ))}
        </motion.div>
      </div>

      <div
        onClick={() => onSelectService?.(1)}
        className="w-full lg:w-[337px] h-[53px] overflow-hidden cursor-pointer group rounded-lg"
        role="button"
        tabIndex={0}
        aria-label="Development service slot"
        onKeyDown={(e) => e.key === "Enter" && onSelectService?.(1)}
      >
        <motion.div
          animate={{ y: -(((1 + animStep) % 3) * 88) - 2 }}
          transition={{ duration: 0.85, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col items-start gap-[26px]"
        >
          {services.map((service, i) => (
            <span
              key={i}
              className="block h-[62px] font-bold text-3xl sm:text-4xl lg:text-[52px] leading-[120%] tracking-[-0.01em] text-[#171717] group-hover:text-[#1253ED] transition-colors duration-200"
              style={{ fontFamily: "'Oakes Grotesk', var(--font-heading), sans-serif" }}
            >
              {service}
            </span>
          ))}
        </motion.div>
      </div>

      <div
        onClick={() => onSelectService?.(2)}
        className="w-full lg:w-[337px] h-[66px] overflow-hidden cursor-pointer group rounded-lg"
        role="button"
        tabIndex={0}
        aria-label="Blockchain service slot"
        onKeyDown={(e) => e.key === "Enter" && onSelectService?.(2)}
      >
        <motion.div
          animate={{ y: -(((2 + animStep) % 3) * 88) + 2 }}
          transition={{ duration: 0.85, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col items-start gap-[26px]"
        >
          {services.map((service, i) => (
            <span
              key={i}
              className="block h-[62px] font-bold text-3xl sm:text-4xl lg:text-[52px] leading-[120%] tracking-[-0.01em] text-[#171717] group-hover:text-[#1253ED] transition-colors duration-200"
              style={{ fontFamily: "'Oakes Grotesk', var(--font-heading), sans-serif" }}
            >
              {service}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
