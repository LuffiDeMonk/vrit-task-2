export interface AnimatedCardItem {
  title: string;
  description: string;
  buttonName: string;
  id?: string;
  count?: string;
  hasPlus?: boolean;
  href?: string;
}

export interface CourseCategory {
  id: "all" | "upcoming" | "ongoing" | string;
  count?: string;
  hasPlus?: boolean;
  title: string;
  description: string;
  viewAllText?: string;
  viewAllHref?: string;
  buttonName?: string;
}
