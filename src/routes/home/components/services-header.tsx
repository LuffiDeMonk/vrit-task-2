import * as React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface ServicesHeaderProps {
  headline?: React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

export default function ServicesHeader({
  headline,
  buttonText = "Services",
  onButtonClick,
  className,
}: ServicesHeaderProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      navigate("/explore");
    }
  };

  return (
    <div className={`flex flex-col items-start gap-8 sm:gap-10 lg:gap-[58px] max-w-[625px] ${className ?? ""}`}>
      <h1
        className="text-[#262626] text-2xl sm:text-3xl lg:text-[36px] font-medium leading-[140%] tracking-tight"
        style={{ fontFamily: "'Oakes Grotesk', var(--font-heading), sans-serif" }}
      >
        {headline ?? (
          <>
            Experience our expert solutions<br className="hidden lg:block" />
            tailored to enhance your business<br className="hidden lg:block" />
            with top-tier design, development,<br className="hidden lg:block" />
            and animation.
          </>
        )}
      </h1>

      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        type="button"
        onClick={handleClick}
        className="inline-flex items-center justify-center px-5 py-3.5 h-[48px] rounded-[100px] bg-[#1253ED] hover:bg-[#0E46CB] active:bg-[#0A38A5] text-[#FAFAFA] font-semibold text-[16px] leading-[120%] shadow-xs transition-colors duration-200 cursor-pointer outline-hidden"
        style={{ fontFamily: "'Manrope', var(--font-sans), sans-serif" }}
      >
        {buttonText}
      </motion.button>
    </div>
  );
}
