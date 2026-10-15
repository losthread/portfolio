"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { HamburgerMenu } from "@/components/hamburger-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/links", label: "Links" },
];

export default function Navbar()
{
  const pathname = usePathname();

  return (
    <section className="relative flex w-full flex-row items-center justify-between gap-2 py-3 lg:px-2 lg:gap-2 lg:py-3 mb-1">
      <div className="flex min-w-0 flex-1 items-center justify-start gap-4">
        <Link
          href="/"
          aria-label="Home"
          aria-current={pathname === "/" ? "page" : undefined}
          className="rounded-md px-1 font-caveat text-2xl md:text-3xl lg:text-3xl font-semibold transition-opacity hover:opacity-70"
        >
          losthread
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 flex-row justify-center gap-4 font-caveat font-semibold text-black/80 dark:text-white/80 lg:flex lg:gap-2 lg:text-2xl">
          {navigationLinks.filter(({ href }) => href !== "/").map(({ href, label }) =>
          {
            const isActive =
              pathname === href ||
              (href !== "/" && pathname.startsWith(`${href}/`));

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative inline-flex items-center justify-center px-3 py-1 transition-all duration-300 ease-out max-lg:px-1 ${isActive ? "text-black dark:text-white" : ""}`}
                >
                  <span className="pointer-events-none absolute inset-0 -rotate-3 scale-90 rounded-lg bg-foreground/10 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 dark:bg-accent/60" />

                  <span className="relative z-10">
                    {label}

                    {isActive && (
                      <svg
                        className="absolute -bottom-2 left-0 h-2 w-full overflow-visible text-black dark:text-white"
                        viewBox="0 0 100 12"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M2 7 C20 5, 28 2, 45 5 S70 9, 98 3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-end">
        <div className="hidden lg:block">
          <ThemeToggle />
        </div>
        <HamburgerMenu links={navigationLinks} />
      </div>
    </section>
  );
}