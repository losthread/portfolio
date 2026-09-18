import { notFound } from "next/navigation";
import { getBlogPost } from "@/lib/blog";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = await getBlogPost(slug);

  if (!blog) {
    notFound();
  }
  const paragraphs = blog.content.trim().split(/\n\s*\n/);

  return (
    <article className="flex flex-col gap-3 lg:gap-3 lg:pl-3">
      <h1 className="inline-flex w-fit self-start py-1 font-caveat text-3xl font-semibold tracking-wide underline decoration-dotted decoration-foreground/60 underline-offset-8 lg:py-2 lg:text-4xl">
        {blog.title}
      </h1>
      <div className="flex flex-col gap-4 font-sans text-base leading-relaxed lg:text-lg">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
