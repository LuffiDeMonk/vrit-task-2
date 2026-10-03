import { motion } from "framer-motion";
import { clickMeArrow } from "@/assets/logos";

export default function ClickMeAnnotation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 4 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="pointer-events-none absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center select-none"
    >
      <span className="font-outfit text-[14px] leading-tight font-medium text-[#1F1F1F]">
        Click me!
      </span>
      <img
        src={clickMeArrow}
        alt=""
        width={28}
        height={32}
        className="-mt-0.5"
        draggable={false}
      />
    </motion.div>
  );
}
