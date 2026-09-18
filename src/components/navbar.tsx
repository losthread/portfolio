"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { HamburgerMenu } from "@/components/hamburger-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar()
{
  const pathname = usePathname();

  return (
    <section className="relative flex w-full flex-row items-center gap-2 lg:px-4 py-3 lg:gap-0 lg:py-3 mb-1">
      <div className="flex min-w-0 flex-1 items-center justify-start">
        <div className="lg:hidden">
          <ThemeToggle />
        </div>
        <Link href="/" className="hidden lg:block">
          <h2 className="font-caveat text-xl font-semibold lg:text-4xl">
            Losthread
          </h2>
        </Link>
      </div>

      <div className="hidden min-w-0 flex-1 items-center justify-between lg:flex">
        <ul className="flex w-full flex-row justify-around gap-1 font-caveat font-semibold text-black opacity-80 dark:text-white lg:gap-0 lg:text-2xl">
          {navigationLinks.map(({ href, label }) =>
          {
            const isActive =
              pathname === href ||
              (href !== "/" && pathname.startsWith(`${href}/`));

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative inline-flex items-center justify-center px-3 py-1 transition-all duration-300 ease-out max-lg:px-1 ${
                    isActive
                      ? "text-[#1e3a5f] dark:text-emerald-300"
                      : ""
                  }`}
                >
                  <span className="pointer-events-none absolute inset-0 -rotate-3 scale-90 rounded-lg bg-foreground/10 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 dark:bg-accent/60" />

                  <span className="relative z-10">
                    {label}

                    {isActive && (
                      <svg
                        className="absolute -bottom-2 left-0 h-2 w-full overflow-visible"
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