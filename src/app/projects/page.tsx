import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "Spur: A URL shortener",
    description:
      "A modern URL shortener built with FastAPI, PostgreSQL, and React. Create short links, track clicks, manage URLs from a dashboard, and analyze usage through interactive charts.",
    technologies: ["ReactJS", "TailwindCSS", "ShadCN UI", "Python", "FastAPI", "Docker"],
    github: "https://github.com/losthread/spur",
    image: "/spur.png",
  },
  {
    title: "POSIX-Compliant Shell",
    description:
      "A lightweight, custom Unix shell built from scratch in C to explore low level process creation, input tokenization, parsing, and core system calls.",
    technologies: ["Bash", "Makefile", "C"],
    github: "https://github.com/losthread/psh",
    image: "/psh.png",
  },
  {
    title: "OSINT deanonymizer",
    description:
      "A deterministic CLI OSINT tool to search and identify someone based on their public social profiles and history, given their username.",
    technologies: ["Python"],
    github: "https://github.com/losthread/recon",
    image: "/recon.png",
  },
  {
    title: "Distributed Payment System",
    description:
      "An event driven, microservices based distributed payment system.",
    technologies: ["Docker", "Redis", "Kafka", "PostgreSQL", "FastAPI", "Python"],
    github: "https://github.com/losthread/distributed-payment-system",
    image: "/mps.png",
  },
] as const;

export default function Projects() {
  return (
    <section className="flex flex-col gap-6 lg:pl-3">
      <div className="flex flex-col gap-1">
        <h1 className="group relative inline-flex w-fit self-start px-4 py-2 -rotate-1 font-caveat text-6xl font-semibold tracking-wide transition-transform duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1">
          <span className="pointer-events-none absolute inset-0 -z-10 -rotate-3 rounded-lg bg-white shadow-[5px_5px_0_#d8cfbb] transition-shadow duration-300 ease-in-out group-hover:shadow-none dark:bg-white/10 dark:shadow-[5px_5px_0_rgba(255,255,255,0.4)] dark:group-hover:shadow-none" />
          <span className="relative z-10">Builds</span>
        </h1>
        <p className="font-sans text-lg opacity-75 mt-4">
          A collection of things I have built and worked on.
        </p>
      </div>

      <div className="grid gap-20">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}
