import { BlogCard } from "@/components/blog-card";
import { getBlogPosts } from "@/lib/blog";

export default async function Blog() {
	const blogs = await getBlogPosts();

	return (
		<section className="flex flex-col gap-6 lg:pl-3">
			<div className="flex flex-col gap-1">
				<h1 className="group relative inline-flex w-fit self-start px-3 py-1 lg:px-4 lg:py-2 -rotate-1 font-caveat mb-4 text-4xl lg:text-5xl font-semibold tracking-wide transition-transform duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1">
					<span className="pointer-events-none absolute inset-0 -z-10 -rotate-3 rounded-lg bg-white shadow-[3px_3px_0_#d8cfbb] transition-shadow duration-300 ease-in-out group-hover:shadow-none dark:bg-white/10 dark:shadow-[3px_3px_0_rgba(255,255,255,0.4)] lg:shadow-[5px_5px_0_#d8cfbb] lg:dark:shadow-[5px_5px_0_rgba(255,255,255,0.4)] dark:group-hover:shadow-none" />
					<span className="relative z-10">Notes</span>
				</h1>
				{blogs.length === 0 ? (
					<p className="mt-4 font-sans text-lg opacity-75">No blogs yet.</p>
				) : (
					<div className="mt-4 grid gap-13">
						{blogs.map((blog) => (
							<BlogCard key={blog.title} {...blog} />
						))}
					</div>
				)}
			</div>
		</section>
	);
}