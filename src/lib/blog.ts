export type BlogPost = {
  slug: string;
  title: string;
  preview: string;
};

const blogPosts: BlogPost[] = [
  {
    slug: "Building-a-shell",
    title: "Building A Shell",
    preview: "My first \"real\" and systems-level project...",
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}
