"use client";

import { useEffect, useRef } from "react";

export function PageReveal({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const elements = content.querySelectorAll<HTMLElement>(
      "h1, h2, h3, p, .page-reveal-card, .page-reveal-link",
    );
    elements.forEach((element, index) => {
      element.style.setProperty("--reveal-index", String(index));
    });
    content.classList.add("page-reveal-ready");
  }, []);

  return <div ref={contentRef} className="page-reveal">{children}</div>;
}
