import { Code, Layers3, Palette, Shield, Cpu, Server, Cloud } from 'lucide-react';
import SectionIntro from './ui/SectionIntro';
import SkillStat from './ui/SkillStat';
import DomainCard from './ui/DomainCard';

export default function About() 
{
  return (
    <section id='about' className="flex flex-col gap-11 px-6 md:px-20 lg:px-30 mb-25 lg:mb-35">
      <SectionIntro sectionName={"About"} />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-start'>
        
        {/* Left Column (Bio & Skills) */}
        <div className='flex flex-col gap-7'>
          <div className='flex flex-col gap-3 justify-center border-2 rounded-lg p-5 border-muted-foreground/20 overflow-x-auto'>
            <div className='flex items-center gap-3'>
              <Code className='text-primary rounded-sm p-2 size-9 bg-primary/10' />
              <h3 className='font-mono text-muted-foreground'>bio.json</h3>
            </div>

            <pre className="font-mono text-sm leading-normal lg:leading-loose rounded-lg border-white/5 ">
              <span className="text-primary">{"{"}</span>
              {"\n  "}
              <span className="text-cloud">"role"</span>: <span className="text-iot">"Software Engineer"</span>,
              {"\n  "}
              <span className="text-cloud">"builds"</span>: <span className="text-iot">"Scalable software and security tools"</span>,
              {"\n  "}
              <span className="text-cloud">"interests"</span>: <span className="text-iot">"Backend and DevSecOps"</span>,
              {"\n  "}
              <span className="text-cloud">"coffee"</span>: <span className="text-iot">"Not Yet"</span>
              {"\n"}
              <span className="text-primary">{"}"}</span>
            </pre>
          </div>

        </div>

        {/* Right Column (Interests & Terminal) */}
        <div className='flex flex-col gap-7 min-w-0'>


          <div className='border rounded-xl max-w-full overflow-scroll'>
            <div className='flex px-5 py-4 gap-2 items-center border-b bg-muted/20'>
              <div className='h-3 w-3 rounded-full bg-red-500/80 shrink-0' />
              <div className='h-3 w-3 rounded-full bg-yellow-500/80 shrink-0' />
              <div className='h-3 w-3 rounded-full bg-green-500/80 shrink-0' />
              <h3 className='ml-2 font-mono text-muted-foreground text-xs tracking-widest'>terminal</h3>
            </div>

            <div className='px-6 py-5 bg-black/20'>
              <pre className="font-mono text-sm leading-normal text-iot/80 sm:whitespace-pre overflow-x-scroll">
                <span className="text-primary">$</span> <span className="text-muted-foreground">cat current.txt</span>
                {"\n"}
                [Offensive Security]
                {"\n  "}→ Web sec auditing, CTFs, and security tooling.
                {"\n\n"}
                [Software Engineering]
                {"\n  "}→ Full-stack development.
                {"\n  "}→ Scalable Architecture.
                {"\n"}
                <span className="text-primary">$</span> <span className="animate-blink bg-muted-foreground h-4 w-2 inline-block align-middle ml-1"></span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}