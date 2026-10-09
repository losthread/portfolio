import Link from "next/link";

type BlogCardProps = {
  title: string;
  preview: string;
  slug: string;
  date: string;
};

function getTapeStyle(slug: string) {
  const hash = [...slug].reduce((total, character) => total + character.charCodeAt(0), 0);

  return {
    left: `${18 + (hash % 58)}%`,
    transform: `rotate(${hash % 2 === 0 ? -4 : 5}deg)`,
  };
}

function getBottomTapeStyle(slug: string) {
  const hash = [...slug].reduce((total, character) => total + character.charCodeAt(0), 0);

  return {
    left: `${10 + ((hash * 3) % 62)}%`,
    transform: `rotate(${hash % 2 === 0 ? 5 : -4}deg)`,
  };
}

export function BlogCard({ title, preview, slug, date }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="relative isolate flex flex-col gap-3 overflow-visible rounded-xl border border-border bg-background p-5 transition-transform duration-300 ease-out hover:translate-x-1 hover:translate-y-1 hover:rotate-0 dark:hover:translate-x-0 dark:hover:translate-y-0 dark:hover:scale-[1.01] dark:bg-card lg:p-6">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 rounded-xl shadow-[3px_3px_0_#d8cfbb] transition-shadow duration-300 ease-out group-hover:shadow-none dark:shadow-[3px_3px_0_rgba(0,0,0,0.35)] dark:group-hover:shadow-[2px_2px_0_rgba(0,0,0,0.22)] lg:shadow-[5px_5px_0_#d8cfbb] lg:dark:shadow-[4px_4px_0_rgba(0,0,0,0.35)] lg:dark:group-hover:shadow-[3px_3px_0_rgba(0,0,0,0.22)]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-3 z-20 h-6 w-20 rounded-sm border border-amber-200/50 bg-amber-100/55 shadow-sm backdrop-blur-[1px] dark:border-amber-100/15 dark:bg-amber-100/15"
          style={getTapeStyle(slug)}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-3 z-20 h-6 w-24 rounded-sm border border-amber-200/50 bg-amber-100/55 shadow-sm backdrop-blur-[1px] dark:border-amber-100/15 dark:bg-amber-100/15"
          style={getBottomTapeStyle(slug)}
        />
        <time dateTime="2026-09-23" className="absolute right-5 top-4 font-sans text-xs text-muted-foreground dark:text-white/60">
          {date}
        </time>
        <h2 className="font-caveat text-3xl font-semibold leading-none decoration-foreground/50 underline-offset-4 transition-[text-decoration-color] group-hover:underline dark:text-white lg:text-4xl">
          {title}
        </h2>
        <p className="font-sans dark:font-jetbrains-mono text-base leading-relaxed opacity-80 dark:text-white/70 dark:opacity-100">
          {preview.split(/\s+/).slice(0, 6).join(" ")}
        </p>
      </article>
    </Link>
  );
}
