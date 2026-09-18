import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: readonly string[];
  github: string;
  image: string;
};

const technologyIcons: Record<string, { logo: string; invertInDark: boolean }> = {
  ReactJS: { logo: "react/react-original.svg", invertInDark: false },
  TailwindCSS: { logo: "tailwindcss/tailwindcss-original.svg", invertInDark: false },
  Python: { logo: "python/python-original.svg", invertInDark: false },
  FastAPI: { logo: "fastapi/fastapi-original.svg", invertInDark: false },
  Docker: { logo: "docker/docker-original.svg", invertInDark: false },
  Bash: { logo: "bash/bash-original.svg", invertInDark: true },
  C: { logo: "c/c-original.svg", invertInDark: false },
  Redis: { logo: "redis/redis-original.svg", invertInDark: false },
  Kafka: { logo: "apachekafka/apachekafka-original.svg", invertInDark: true },
  PostgreSQL: { logo: "postgresql/postgresql-original.svg", invertInDark: false },
};

export function ProjectCard({
  title,
  description,
  technologies,
  github,
  image,
}: ProjectCardProps) {
  return (
    <article className="flex flex-col gap-6 overflow-hidden rounded-xl border border-foreground/15 bg-white/10 dark:border-white/15 dark:bg-black/5">
      <div className="relative aspect-video w-full overflow-hidden border-b border-foreground/10 bg-foreground/5 dark:border-white/10 dark:bg-black">
        <Image
          src={image}
          alt={`${title} preview`}
          fill
          className="object-contain object-center"
          sizes="100vw"
        />
      </div>

      <div className="flex flex-col gap-4 lg:gap-3 p-5 lg:p-6 pt-1">
        <div className="flex items-start justify-between lg:gap-4">
          <h2 className="font-caveat text-3xl lg:text-4xl font-semibold leading-none">
            {title}
          </h2>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${title} on GitHub`}
            className="group shrink-0 rounded-lg lg:p-2 transition-colors hover:bg-foreground/10 dark:hover:bg-white/10"
          >
            <Image
              src="/github.svg"
              alt=""
              width={24}
              height={24}
              className="size-7 object-contain dark:invert"
            />
          </a>
        </div>

        <p className="font-sans text-base leading-relaxed opacity-80">
          {description}
        </p>

        <div className="flex flex-col items-start gap-2">
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="inline-flex items-center gap-1.5 rounded-md bg-foreground/10 px-2 py-0.5 font-sans text-xs font-medium dark:bg-white/10"
              >
                {technologyIcons[technology] && (
                  <Image
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${technologyIcons[technology].logo}`}
                    alt=""
                    width={20}
                    height={20}
                    unoptimized
                    className={`size-5 object-contain ${
                      technologyIcons[technology].invertInDark ? "dark:invert" : ""
                    }`}
                  />
                )}
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
