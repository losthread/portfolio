import { ExternalLink } from 'lucide-react';

export default function ProjectDescription({ title, description, techStack = [], githubUrl, url, className, isReversed }) 
{
  // Sets mobile to items-start (left) and lg screen to items-end (right) only if isReversed is true
  const alignmentClass = isReversed 
    ? "items-start lg:items-end text-left lg:text-right" 
    : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3.5 max-w-full ${alignmentClass} ${className}`}>
      <h4 className='font-mono text-primary text-sm lg:text-base'>Featured Project</h4>
      <h3 className='font-bold text-xl lg:text-2xl'>{title}</h3>

      <p className='text-muted-foreground p-5 border rounded-2xl text-sm lg:text-base leading-relaxed'>
        {description}
      </p>

      <div className={`flex gap-2 flex-wrap ${isReversed ? "flex-row lg:flex-row-reverse" : "flex-row"}`}>
        {techStack.map((tech, index) => 
        {
          return (
            <span 
              key={index} 
              className="font-mono text-muted-foreground text-xs lg:text-sm font-light px-3.5 py-1 rounded-xl bg-muted/60"
            >
              {tech}
            </span>
          );
        })}
      </div>

      {/* Links Container */}
      <div className={`flex gap-3 ${isReversed ? "flex-row lg:flex-row-reverse" : "flex-row"}`}>
        {/* GitHub Link (Only renders if githubUrl is provided) */}
        {githubUrl && (
          <a 
            href={githubUrl}
            target="_blank"  
            rel="noopener noreferrer"
            className="group border border-muted rounded-full max-w-fit p-2 transition-all ease-out duration-200 hover:border-primary/50 hover:bg-primary/5"
            aria-label="View Source on GitHub"
          >
            <img 
              src="/icons/github.svg" 
              alt="GitHub" 
              className="size-5 opacity-60 group-hover:opacity-100 transition-opacity invert dark:invert-0" 
            />
          </a>
        )}

        {/* External Project Link */}
        {url && (
          <a 
            href={url}
            target="_blank"  
            rel="noopener noreferrer"
            className="group border border-muted rounded-full max-w-fit p-2 transition-all ease-out duration-200 hover:border-primary/50 hover:bg-primary/5"
            aria-label="View Live Project"
          >
            <ExternalLink className='text-muted-foreground size-5 group-hover:text-primary' />
          </a>
        )}
      </div>
    </div>
  );
}