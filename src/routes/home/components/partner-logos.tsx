import { cn } from "@/lib/utils";
import {
  cloudEducationLogo,
  cmcLogo,
  itSnpLogo,
  zebecLogo,
} from "@/assets/logos";

export function CloudEducationLogo({ className }: { className?: string }) {
  return (
    <img
      src={cloudEducationLogo}
      alt="Cloud Education"
      className={cn(
        "h-12 w-auto object-contain transition-transform duration-300 hover:scale-105 select-none",
        className
      )}
      draggable={false}
    />
  );
}

export function CmcLogo({ className }: { className?: string }) {
  return (
    <img
      src={cmcLogo}
      alt="CMC"
      className={cn(
        "h-9 w-auto object-contain transition-transform duration-300 hover:scale-105 select-none",
        className
      )}
      draggable={false}
    />
  );
}

export function ItSnpLogo({ className }: { className?: string }) {
  return (
    <img
      src={itSnpLogo}
      alt="IT SNP"
      className={cn(
        "h-10 w-auto object-contain transition-transform duration-300 hover:scale-105 select-none",
        className
      )}
      draggable={false}
    />
  );
}

export function ZebecLogo({ className }: { className?: string }) {
  return (
    <img
      src={zebecLogo}
      alt="Zebec"
      className={cn(
        "h-8 w-auto object-contain transition-transform duration-300 hover:scale-105 select-none",
        className
      )}
      draggable={false}
    />
  );
}
