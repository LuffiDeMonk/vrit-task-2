import type { ServiceCardItem } from "../types";
import {
  card1Image,
  card2Image,
  card3Image,
  card4Image,
} from "@/assets/images";

export const DEFAULT_SERVICES = [
  "UI & UX",
  "Development",
  "Blockchain",
];

export const DEFAULT_CARDS: ServiceCardItem[] = [
  {
    id: "card-1",
    image: card1Image,
    alt: "Workspace with laptop, calculator, paperwork, and person working",
    title: "UI & UX Design Systems",
    category: "UI & UX",
  },
  {
    id: "card-2",
    image: card2Image,
    alt: "Modern workspace desk with office devices and telephone",
    title: "Full-Stack Development",
    category: "Development",
  },
  {
    id: "card-3",
    image: card3Image,
    alt: "Modern clean design workspace and architecture",
    title: "Blockchain Architecture",
    category: "Blockchain",
  },
  {
    id: "card-4",
    image: card4Image,
    alt: "Creative digital design and animation setup",
    title: "Interactive Motion & 3D",
    category: "Animation",
  },
];
