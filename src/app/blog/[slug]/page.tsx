import { notFound } from "next/navigation";
import { getBlogPost } from "@/lib/blog";
import type { ReactNode } from "react";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

function renderInlineMarkdown(text: string): ReactNode[] {
  const parts = text.split(/(\[[^\]]+\]\(https?:\/\/[^\s)]+\))/g);

  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);

    if (!match) {
      return part;
    }

    return (
      <a
        key={`${match[2]}-${index}`}
        href={match[2]}
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-2"
      >
        {/^\d+$/.test(match[1]) ? `[${match[1]}]` : match[1]}
      </a>
    );
  });
}

export default async function BlogPost({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = await getBlogPost(slug);

  if (!blog) {
    notFound();
  }
  const paragraphs = blog.content.trim().split(/\n\s*\n/);

  return (
    <article className="flex flex-col gap-3 lg:gap-3 lg:pl-3">
      <h1 className="inline-flex w-fit self-start py-1 font-caveat text-3xl font-semibold tracking-wide underline decoration-dotted decoration-foreground/60 underline-offset-8 dark:text-white lg:py-2 lg:text-4xl">
        {blog.title}
      </h1>
      <div className="flex flex-col gap-4 font-sans text-base leading-relaxed dark:text-white/70 lg:text-lg">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="whitespace-pre-line">
            {renderInlineMarkdown(paragraph)}
          </p>
        ))}
      </div>
    </article>
  );
}
