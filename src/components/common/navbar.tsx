import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const location = useLocation();
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (
        (localStorage.getItem("theme") as "light" | "dark") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light")
      );
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const navLinks = [
    { to: "/", label: "Overview" },
    { to: "/test", label: "Courses Stats (/test)" },
    { to: "/ux", label: "Services Showcase (/ux)" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-[1218px] items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-2.5 font-bold text-lg tracking-tight text-neutral-900 dark:text-white hover:opacity-90 transition-opacity"
        >
          <div className="flex size-9 items-center justify-center rounded-lg bg-[#1253ED] text-white shadow-xs">
            <Layers className="size-5" />
          </div>
          <span>
            Vrit Task <span className="text-[#1253ED]">2</span>
          </span>
        </Link>

        {/* Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[#1253ED] text-white font-semibold shadow-xs"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800"
                )}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-2 flex size-9 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
