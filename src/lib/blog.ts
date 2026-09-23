import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const blogDirectory = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  content: string;
  preview: string;
};

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function previewFromContent(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).slice(0, 6);
  return words.length > 0 ? `${words.join(" ")}...` : "";
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const filenames = await readdir(blogDirectory);
  const slugs = filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => filename.replace(/\.mdx$/, ""));

  const posts = await Promise.all(slugs.map((slug) => getBlogPost(slug)));

  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort((first, second) => first.title.localeCompare(second.title));
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return null;
  }

  try {
    const content = await readFile(path.join(blogDirectory, `${slug}.mdx`), "utf8");
    return {
      slug,
      title: titleFromSlug(slug),
      content,
      preview: previewFromContent(content),
    };
  } catch {
    return null;
  }
}
