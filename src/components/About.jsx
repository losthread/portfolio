import { Code, Layers3 } from 'lucide-react';
import SkillStat from './ui/SkillStat';

export default function About() {
  return (
    <section className="flex flex-col gap-11 px-16">
      <div className="flex items-center gap-4">
        <h2 className="text-4xl font-bold whitespace-nowrap">About Me</h2>
        <div className="h-0.5 w-full bg-muted-foreground/20" />
      </div>

      <div className='flex w-full gap-1'>
        <div className='flex flex-1 flex-col gap-7'>
          <div className='flex flex-col gap-3 justfy-center border-2 rounded-lg p-5 border-muted-foreground/20'>
            <div className='flex items-center gap-3'>
              <Code className='text-primary rounded-sm p-2 size-9 bg-primary/10' />
              <h3 className='font-mono text-muted-foreground'>bio.json</h3>
            </div>

            <pre className="font-mono text-sm leading-loose rounded-lg border-white/5">
              <span className="text-primary">{"{"}</span>
              {"\n  "}
              <span className="text-cloud">"role"</span>: <span className="text-iot">"Fullstack developer"</span>,
              {"\n  "}
              <span className="text-cloud">"passion"</span>: <span className="text-iot">"Building Real World Technical Solutions"</span>,
              {"\n  "}
              <span className="text-cloud">"learning"</span>: <span className="text-iot">"DevSecOps and IoT"</span>,
              {"\n  "}
              <span className="text-cloud">"coffee"</span>: <span className="text-iot">"Not Yet"</span>
              {"\n"}
              <span className="text-primary">{"}"}</span>
            </pre>
          </div>

          <div className='flex flex-col gap-6 text-muted-foreground text-md'>
            <p>
              I am a student enjoys exploring new technologies.
              Not yet committed to any domain in particular but exploring Cybersecurity, IoT, DevOps and Cloud.
            </p>

            <p>
              Currently learning Frontend development and design principles.
              Always learning, building and growing.
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <div className='flex gap-3'>
              <Layers3 className='text-primary' />
              <h3 className='font-bold'>Skills</h3>
            </div>

            <div className='flex flex-col gap-2'>
              <SkillStat name={`React`} percentageCompletion={50} />
              <SkillStat name={`TailwindCSS`} percentageCompletion={60} />
              <SkillStat name={`Django`} percentageCompletion={10} />
              <SkillStat name={`Javascript`} percentageCompletion={80} />
              <SkillStat name={`HTML/CSS`} percentageCompletion={95} />
            </div>
          </div>
        </div>

        <div className='flex flex-1'>
        </div>
      </div>
    </section>
  );
}