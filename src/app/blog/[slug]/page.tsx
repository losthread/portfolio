import { notFound } from "next/navigation";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

function Citation({ number }: { number: number }) {
  const citations: Record<number, string> = {
    1: "https://brennan.io/2015/01/16/write-a-shell-in-c/",
    2: "https://en.wikipedia.org/wiki/Lexical_analysis",
    3: "https://en.wikipedia.org/wiki/Parsing",
    4: "https://en.wikipedia.org/wiki/System_call",
    5: "https://man7.org/linux/man-pages/man2/fork.2.html",
    6: "https://man7.org/linux/man-pages/man3/exec.3.html",
    7: "https://man7.org/linux/man-pages/man2/wait.2.html",
    8: "https://github.com/losthread/psh",
  };

  return (
    <a
      href={citations[number]}
      target="_blank"
      rel="noreferrer"
      className="font-medium text-black underline underline-offset-2 dark:text-white"
    >
      [{number}]
    </a>
  );
}

export default async function BlogPost({ params }: BlogPageProps) {
  const { slug } = await params;

  if (slug !== "Building-a-shell") {
    notFound();
  }

  return (
    <article className="flex flex-col gap-3 lg:gap-3 lg:pl-3">
      <h1 className="inline-flex w-fit self-start py-1 font-caveat text-3xl font-semibold tracking-wide underline decoration-dotted decoration-foreground/60 underline-offset-8 dark:text-white lg:py-2 lg:text-4xl">
        Building A Shell
      </h1>
      <div className="flex flex-col gap-4 font-sans dark:font-jetbrains-mono text-base leading-relaxed dark:leading-normal text-black/70 dark:text-white/70 lg:text-md">
        <p>My first &quot;real&quot; and systems-level project</p>
        <p>
          It was quite a big leap from my previous endeavors. So far, I only had dead-simple static frontend pages, some CLI tools in Python, and a bunch of Linux commands under my belt.
        </p>
        <p>
          And now I had to make the thing that runs these CLI apps, and that too in C? It had to be fast, of course. I did not even know where to start, since everything I had built so far had some kind of reference guide.
        </p>
        <p>
          I wandered around a lot of websites, but they were all too comprehensive for me to wrap my head around, until I stumbled upon a blog post by Stephen Brennan <Citation number={1} />.
        </p>
        <p>
          It taught me about the core components of a shell, and more importantly, how to break a large project into modules, namely: <strong className="font-medium text-black dark:text-white">lexer</strong> <Citation number={2} />, <strong className="font-medium text-black dark:text-white">parser</strong> <Citation number={3} />, and executor.
        </p>
        <p>
          I researched more about these concepts and also how a command is executed at the CPU level, which is through <strong className="font-medium text-black dark:text-white">system calls</strong> <Citation number={4} />:
        </p>
        <p>A process is basically a program being executed.</p>
        <p>
          <strong className="font-medium text-black dark:text-white">fork()</strong>: Clones the calling process to create an exact duplicate child process <Citation number={5} />.
          <br />
          <strong className="font-medium text-black dark:text-white">exec()</strong>: Replaces the current process image with a completely new program <Citation number={6} />.
          <br />
          <strong className="font-medium text-black dark:text-white">wait()</strong>: Forces a parent process to pause execution until its child process finishes <Citation number={7} />.
        </p>
        <p>
          There are many more, but these three will suffice for a minimal implementation. Now what do you do with these calls? Create built-in commands like <strong className="font-medium text-black dark:text-white">cd</strong>, <strong className="font-medium text-black dark:text-white">exit</strong>, and <strong className="font-medium text-black dark:text-white">help</strong>, and execute other programs whose binaries are installed on your computer.
        </p>
        <p>
          A high-level overview:
          <br />Take commands and arguments.
          <br />Separate them into tokens.
          <br />Parse the tokenized input.
          <br />Perform system calls for your custom commands or call the built-in binaries.
          <br />Handle errors gracefully and glue everything together.
          <br />And there you have it: a minimal implementation of a UNIX shell!
        </p>
        <p>
          P.S. I tried to simplify my understanding as much as I could. I intentionally excluded code snippets so you can research and decide on an implementation yourself. If you still want to see the code, you can find it on my GitHub <Citation number={8} />.
        </p>
        <p>
          Note: This is a very basic and minimal implementation. It lacks a lot of features like conditionals, output redirection, piping, tab completion, globbing, and a ton of other things. But the point is that you can add these as you go! The guide above is more than enough for a working project.
        </p>
        <p>I hope this blog helped. Now go build a shell for yourself!</p>
        <p>~ Parth Naik</p>
        <div>
          <p className="font-medium text-black dark:text-white">Citations:</p>
          <ol className="list-inside list-decimal">
            <li><a href="https://brennan.io/2015/01/16/write-a-shell-in-c/" target="_blank" rel="noreferrer" className="font-medium text-black underline dark:text-white">Stephen Brennan: Write a Shell in C</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Lexical_analysis" target="_blank" rel="noreferrer" className="font-medium text-black underline dark:text-white">Lexical analysis</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Parsing" target="_blank" rel="noreferrer" className="font-medium text-black underline dark:text-white">Parsing</a></li>
            <li><a href="https://en.wikipedia.org/wiki/System_call" target="_blank" rel="noreferrer" className="font-medium text-black underline dark:text-white">System call</a></li>
            <li><a href="https://man7.org/linux/man-pages/man2/fork.2.html" target="_blank" rel="noreferrer" className="font-medium text-black underline dark:text-white">fork(2)</a></li>
            <li><a href="https://man7.org/linux/man-pages/man3/exec.3.html" target="_blank" rel="noreferrer" className="font-medium text-black underline dark:text-white">exec(3)</a></li>
            <li><a href="https://man7.org/linux/man-pages/man2/wait.2.html" target="_blank" rel="noreferrer" className="font-medium text-black underline dark:text-white">wait(2)</a></li>
            <li><a href="https://github.com/losthread/psh" target="_blank" rel="noreferrer" className="font-medium text-black underline dark:text-white">psh on GitHub</a></li>
          </ol>
        </div>
      </div>
    </article>
  );
}
