import TechStackMarquee from "@/components/techstack"

export default function Home() {
  return (
    <section className="flex flex-col gap-4 lg:gap-6 lg:pl-3">
      <div className="flex flex-col gap-2 lg:gap-1">
        <h1 className="font-caveat text-center lg:text-left text-5xl lg:text-6xl dark:text-white">Parth Naik</h1>
        <h2 className="font-sans text-center lg:text-left text-base lg:text-xl opacity-75 dark:text-white dark:opacity-100">Software Engineer & Security Researcher</h2>
      </div>

      <div className="flex flex-col gap-3 font-sans text-base opacity-100 dark:text-white/70 lg:gap-4 lg:text-lg">
        <p>
          Hi, I&apos;m Parth Naik, a 17-year-old <span className="dark:text-white">software engineer</span> and <span className="dark:text-white">cybersecurity researcher</span> with a knack for open source.
          I enjoy building things, especially when they end up being useful.
          I also spend some of my time solving CTFs and tackling pwn challenges.
        </p>

        <p>
          I mainly work with <span className="dark:text-white">Python, C++, Go, and Typescript</span>.
          Juggling between Web Apps, low level systems, scripting, databases and pentesting.
          Find me on <a className="underline text-black dark:text-white" href="https://github.com/losthread">GitHub</a>
        </p>

        <p>
          Apart from tech - I enjoy playing football, chess, watching anime and listening to music.
          I am a core believer of pessimism and absurdism.
        </p>

        <p>
          Feel free to reach out to me on <a className="underline dark:text-white" href="https://x.com/losthr3ad" target="_blank" rel="noreferrer">Twitter(x)</a> or drop an <a className="underline dark:text-white" href="mailto:parthnaik.office@gmail.com">Email</a>.
        </p>

        <p>
          Threadlocked <a className="underline dark:text-white" href="https://ring.seggs.lol" target="_blank" rel="noreferrer">Webring</a>.
        </p>
      </div>

      <TechStackMarquee />
    </section>
  )
}