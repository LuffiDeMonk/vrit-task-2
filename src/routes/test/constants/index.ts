import type { CourseCategory } from "../types";

export const DEFAULT_CATEGORIES: CourseCategory[] = [
  {
    id: "all",
    count: "23",
    hasPlus: true,
    title: "All Courses",
    description: "courses you're powering through right now.",
    viewAllText: "View all Courses",
    buttonName: "View all Courses",
    viewAllHref: "/products",
  },
  {
    id: "upcoming",
    count: "05",
    hasPlus: true,
    title: "Upcoming Courses",
    description: "exciting new courses waiting to boost your skills.",
    viewAllText: "View all Courses",
    buttonName: "View all Courses",
    viewAllHref: "/products",
  },
  {
    id: "ongoing",
    count: "10",
    hasPlus: true,
    title: "Ongoing Courses",
    description: "currently happening—don’t miss out on the action!",
    viewAllText: "View all Courses",
    buttonName: "View all Courses",
    viewAllHref: "/products",
  },
];
