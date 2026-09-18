import Link from "next/link";

type BlogCardProps = {
  title: string;
  preview: string;
  slug: string;
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

export function BlogCard({ title, preview, slug }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="relative isolate flex flex-col gap-3 overflow-visible rounded-xl border border-foreground/15 bg-white/10 p-5 transition-transform duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1 hover:rotate-0 dark:border-white/15 dark:bg-white/7 lg:p-6">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 rounded-xl shadow-[3px_3px_0_#d8cfbb] transition-shadow duration-300 ease-in-out group-hover:shadow-none dark:shadow-[3px_3px_0_rgba(255,255,255,0.4)] dark:group-hover:shadow-none lg:shadow-[5px_5px_0_#d8cfbb] lg:dark:shadow-[5px_5px_0_rgba(255,255,255,0.4)] lg:dark:group-hover:shadow-none"
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
        <h2 className="font-caveat text-3xl font-semibold leading-none decoration-foreground/50 underline-offset-4 transition-[text-decoration-color] group-hover:underline lg:text-4xl">
          {title}
        </h2>
        <p className="font-sans text-base leading-relaxed opacity-80">
          {preview.split(/\s+/).slice(0, 6).join(" ")}...
        </p>
      </article>
    </Link>
  );
}
