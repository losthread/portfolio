"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavigationLink = {
  href: string;
  label: string;
};

type HamburgerMenuProps = {
  links: readonly NavigationLink[];
};

export function HamburgerMenu({ links }: HamburgerMenuProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
        className="flex size-9 items-center justify-center rounded-full border border-transparent transition-colors hover:border-current hover:bg-black/5 dark:hover:bg-white/10 lg:hidden"
      >
        <svg
          aria-hidden="true"
          className="size-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {menuOpen ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {menuOpen && (
        <nav className="absolute right-4 top-full z-50 flex w-40 flex-col gap-1 rounded-lg border border-foreground/10 bg-[#fcf8ef] p-2 shadow-[4px_4px_0_rgba(30,58,95,0.16)] dark:border-white/10 dark:bg-background dark:shadow-[4px_4px_0_rgba(0,0,0,0.35)] lg:hidden">
          {links.map(({ href, label }) => {
            const isActive =
              pathname === href ||
              (href !== "/" && pathname.startsWith(`${href}/`));

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`rounded-md px-3 py-2 font-caveat font-semibold text-xl text-black transition-colors hover:bg-foreground/10 dark:text-white dark:hover:bg-white/10 ${
                  isActive ? "text-[#1e3a5f] dark:text-emerald-300" : ""
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      )}
    </>
  );
}
