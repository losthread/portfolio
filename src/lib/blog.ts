export type BlogPost = {
  slug: string;
  title: string;
  preview: string;
  date: string;
};

const blogPosts: BlogPost[] = [
  {
    slug: "Building-a-shell",
    title: "Building A Shell",
    preview: "My first \"real\" and systems-level project...",
    date: "23/9/26",
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}
