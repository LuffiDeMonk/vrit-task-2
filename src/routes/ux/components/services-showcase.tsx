import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import ServicesHeader from "./services-header";
import ServicesReel from "./services-reel";
import ProjectsCarousel, {
  type ProjectsCarouselHandle,
} from "./projects-carousel";
import PartnersSection from "./partners-section";
import type { ServiceCardItem } from "../types";
import { DEFAULT_CARDS, DEFAULT_SERVICES } from "../constants";

interface ServicesShowcaseProps {
  className?: string;
  headline?: React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  services?: string[];
  cards?: ServiceCardItem[];
  partnersTitle?: string;
}

export default function ServicesShowcase({
  className,
  headline,
  buttonText = "Services",
  onButtonClick,
  services = DEFAULT_SERVICES,
  cards = DEFAULT_CARDS,
  partnersTitle = "Our Partners",
}: ServicesShowcaseProps) {
  const [animStep, setAnimStep] = useState<number>(0);
  const [isHoveringServices, setIsHoveringServices] = useState<boolean>(false);
  const [isDraggingCarousel, setIsDraggingCarousel] = useState<boolean>(false);

  const carouselRef = useRef<ProjectsCarouselHandle>(null);

  useEffect(() => {
    if (isHoveringServices || isDraggingCarousel) return;
    const timer = setInterval(() => {
      setAnimStep((prev) => (prev + 1) % 3);
    }, 3200);
    return () => clearInterval(timer);
  }, [isHoveringServices, isDraggingCarousel]);

  const handleSelectService = (index: number) => {
    setAnimStep(index);
    carouselRef.current?.scrollToCard(index);
  };

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-white text-[#171717] transition-colors duration-300",
        "py-12 sm:py-16 lg:py-[100px] px-6 sm:px-12 lg:px-[112px]",
        className
      )}
      aria-label="Our Services"
    >
      <div className="mx-auto flex w-full max-w-[1218px] flex-col items-center justify-center gap-14 sm:gap-20 lg:gap-[100px]">
        <div className="flex w-full flex-col lg:flex-row items-start justify-between gap-10 lg:gap-[202px] max-w-[1218px]">
          <ServicesHeader
            headline={headline}
            buttonText={buttonText}
            onButtonClick={onButtonClick}
          />

          <ServicesReel
            services={services}
            animStep={animStep}
            onSelectService={handleSelectService}
            onHoverChange={setIsHoveringServices}
          />
        </div>

        <ProjectsCarousel
          ref={carouselRef}
          cards={cards}
          onDragStateChange={setIsDraggingCarousel}
          onActiveCardChange={(index) => setAnimStep(index % 3)}
        />

        <PartnersSection title={partnersTitle} />
      </div>
    </section>
  );
}
