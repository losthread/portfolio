import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const techStack = [
  { name: "C", logo: "c/c-original.svg", invertInDark: false },
  { name: "C++", logo: "cplusplus/cplusplus-original.svg", invertInDark: false },
  { name: "Python", logo: "python/python-original.svg", invertInDark: false },
  { name: "JavaScript", logo: "javascript/javascript-original.svg", invertInDark: false },
  { name: "TypeScript", logo: "typescript/typescript-original.svg", invertInDark: false },
  { name: "Go", logo: "go/go-original.svg", invertInDark: false },
  { name: "Bash", logo: "bash/bash-original.svg", invertInDark: true },
  { name: "HTML", logo: "html5/html5-original.svg", invertInDark: false },
  { name: "CSS", logo: "css3/css3-original.svg", invertInDark: false },
  { name: "ReactJS", logo: "react/react-original.svg", invertInDark: false },
  { name: "NextJS", logo: "nextjs/nextjs-original.svg", invertInDark: true },
  { name: "TailwindCSS", logo: "tailwindcss/tailwindcss-original.svg", invertInDark: false },
  { name: "FastAPI", logo: "fastapi/fastapi-original.svg", invertInDark: false },
  { name: "Postman", logo: "postman/postman-original.svg", invertInDark: false },
  { name: "PostgreSQL", logo: "postgresql/postgresql-original.svg", invertInDark: false },
  { name: "SQLite", logo: "sqlite/sqlite-original.svg", invertInDark: false },
  { name: "MySQL", logo: "mysql/mysql-original.svg", invertInDark: false },
  { name: "MongoDB", logo: "mongodb/mongodb-original.svg", invertInDark: false },
  { name: "Redis", logo: "redis/redis-original.svg", invertInDark: false },
  { name: "Linux", logo: "linux/linux-original.svg", invertInDark: false },
  { name: "Docker", logo: "docker/docker-original.svg", invertInDark: false },
  { name: "Vercel", logo: "vercel/vercel-original.svg", invertInDark: true },
  { name: "Vite", logo: "vitejs/vitejs-original.svg", invertInDark: false },
  { name: "Nginx", logo: "nginx/nginx-original.svg", invertInDark: false },
  { name: "Kafka", logo: "apachekafka/apachekafka-original.svg", invertInDark: true },
  { name: "Git", logo: "git/git-original.svg", invertInDark: false },
] as const;

export default function TechStackMarquee() {
  return (
    <div className="mt-2 h-22 w-full min-w-0 overflow-hidden rounded-xl">
      <Marquee
        pauseOnHover
        repeat={2}
        className="h-full w-full min-w-0 items-center [--duration:34s] [--gap:1rem]"
      >
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex size-16 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-lg border bg-black/5 shadow-sm dark:bg-white/10"
            aria-label={tech.name}
          >
            <Image
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.logo}`}
              alt={`${tech.name} logo`}
              width={44}
              height={44}
              unoptimized
              className={`size-13 shrink-0 object-contain ${
                tech.invertInDark ? "dark:invert" : ""
              }`}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}