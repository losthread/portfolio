"use client"

import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="w-9 h-9" />

  const isDark = theme === "dark"

  const handleToggle = () => {
    const next = isDark ? "light" : "dark"

    // Pin the splash origin to the button center
    const btn = buttonRef.current
    if (btn) {
      const rect = btn.getBoundingClientRect()
      const x = Math.round(rect.left + rect.width / 2)
      const y = Math.round(rect.top + rect.height / 2)
      document.documentElement.style.setProperty("--splash-x", `${x}px`)
      document.documentElement.style.setProperty("--splash-y", `${y}px`)
    }

    // Fall back if View Transitions not supported
    if (!document.startViewTransition) {
      setTheme(next)
      return
    }

    document.startViewTransition(() => {
      setTheme(next)
    })
  }

  return (
    <button
      ref={buttonRef}
      id="theme-toggle"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={handleToggle}
      className="
        relative w-9 h-9 rounded-full flex items-center justify-center
        border border-transparent
        hover:border-current hover:bg-black/5 dark:hover:bg-white/10
        transition-colors duration-200 cursor-pointer
      "
    >
      {/* Sun */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18" height="18"
        viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        style={{
          position: "absolute",
          transition: "opacity 150ms, transform 250ms",
          opacity: isDark ? 0 : 1,
          transform: isDark ? "rotate(90deg) scale(0.4)" : "rotate(0deg) scale(1)",
        }}
      >
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="4.22" y1="4.22" x2="7.05" y2="7.05" />
        <line x1="16.95" y1="16.95" x2="19.78" y2="19.78" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
        <line x1="4.22" y1="19.78" x2="7.05" y2="16.95" />
        <line x1="16.95" y1="7.05" x2="19.78" y2="4.22" />
      </svg>

      {/* Moon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18" height="18"
        viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        style={{
          position: "absolute",
          transition: "opacity 150ms, transform 250ms",
          opacity: isDark ? 1 : 0,
          transform: isDark ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.4)",
        }}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  )
}
