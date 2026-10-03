import {
  CloudEducationLogo,
  CmcLogo,
  ItSnpLogo,
  ZebecLogo,
} from "./partner-logos";

interface PartnersSectionProps {
  title?: string;
  className?: string;
}

export default function PartnersSection({
  title = "Our Partners",
  className,
}: PartnersSectionProps) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-8 lg:gap-[44px] max-w-[1058px] ${className ?? ""}`}
    >
      <h2
        className="text-center font-bold text-xl sm:text-[22px] leading-[150%] tracking-tight text-[#171717]"
        style={{ fontFamily: "'Manrope', var(--font-sans), sans-serif" }}
      >
        {title}
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 lg:gap-[120px] xl:gap-[150px] w-full">
        <CloudEducationLogo />
        <CmcLogo />
        <ItSnpLogo />
        <ZebecLogo />
      </div>
    </div>
  );
}
