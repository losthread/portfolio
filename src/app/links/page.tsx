type LinkSection = {
  title: string;
  links: { title: string; url: string }[];
};

const linkSections: LinkSection[] = [
  {
    title: "Artificial Intelligence",
    links: [
      {
        title: "New to LLMs? start here",
        url: "https://towardsdatascience.com/new-to-llms-start-here/?utm_source=roadmap&utm_medium=Referral&utm_campaign=TDS+roadmap+integration",
      },
      {
        title: "Frontier model training technologies",
        url: "https://djdumpling.github.io/2026/01/31/frontier_training.html",
      },
      {
        title: "Decision models vs LLMs",
        url: "https://neubird.ai/blog/decision-models-vs-llms",
      },
    ],
  },
  {
    title: "Cybersecurity",
    links: [
      {
        title: "Red teaming tradecraft",
        url: "https://yggdrasil-zoro.vercel.app/",
      },
    ],
  },
  {
    title: "Software Engineering",
    links: [
      {
        title: "The modern software developer",
        url: "https://themodernsoftware.dev/"
      },
      {
        title: "A guide to chess engines",
        url: "https://chessprogramming.org/"
      },
    ],
  },
  {
    title: "Others",
    links: [],
  },
] as const;

export default function Links() {
  return (
    <section className="flex flex-col gap-8 lg:pl-3">
      <h1 className="group relative inline-flex w-fit self-start px-3 py-1 lg:px-4 lg:py-2 -rotate-1 font-caveat text-4xl lg:text-5xl font-semibold tracking-wide transition-transform duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1 dark:hover:translate-x-0 dark:hover:translate-y-0 dark:text-white">
        <span className="pointer-events-none absolute inset-0 -z-10 -rotate-3 rounded-lg border border-border bg-background shadow-[3px_3px_0_#d8cfbb] transition-shadow duration-300 ease-in-out group-hover:shadow-none dark:bg-card dark:shadow-[3px_3px_0_rgba(0,0,0,0.35)] lg:shadow-[5px_5px_0_#d8cfbb] lg:dark:shadow-[4px_4px_0_rgba(0,0,0,0.35)] dark:group-hover:shadow-none" />
        <span className="relative z-10">Links</span>
      </h1>

      <div>
        <p className="font-sans dark:font-jetbrains-mono text-left lg:text-left text-base lg:text-base opacity-75 font-medium text-black dark:text-white dark:opacity-100">A curated knowledge base of techinal writeups, blogs, articles and other intriguing stuff that I found in some corner of the Internet.</p>
      </div>

      <div className="grid gap-8">
        {linkSections.map((section) => (
          <section key={section.title} className="flex flex-col gap-3">
            <h2 className="font-caveat text-3xl font-semibold tracking-wide lg:text-3xl">
              {section.title}
            </h2>
            {section.links.length > 0 ? (
              <ul className="flex flex-col gap-2 font-sans text-base leading-relaxed text-black/75 dark:text-white/75">
                {section.links.map((link) => (
                  <li key={link.url} className="page-reveal-link">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 transition-opacity hover:opacity-70"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-sans text-base text-black/45 dark:text-white/45">
                Nothing here yet.
              </p>
            )}
          </section>
        ))}
      </div>
    </section>
  );
}