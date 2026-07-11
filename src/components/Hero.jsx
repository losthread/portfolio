import { Terminal, ChevronDown, Mouse } from 'lucide-react';
import Overlay from './ui/Overlay';
import SocialLink from './ui/SocialLink';
import Role from './ui/Role';

export default function Hero() {
  return (
    <section className="min-h-[90vh] md:min-h-[95vh] lg:min-h-screen flex flex-col items-center justify-center gap-6 lg:gap-8 pt-20 md:pt-15 lg:pt-20 px-10 md:px-20 lg:px-30">
      <Overlay />

      {/* Glow overlay */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse at center, var(--color-primary) 0%, transparent 70%)',
          opacity: '0.06'
        }}
      />

      {/* whoami block */}
      <div className="flex gap-1.5 items-center border border-primary/30 bg-primary/3 rounded-full py-1.5 px-3 lg:py-2 lg:px-5 backdrop-blur-sm">
        <Terminal className="size-4 text-primary" /> 
        <span className="font-mono text-sm text-primary">~/portfolio</span>
        <span className="font-mono text-sm text-muted-foreground">$</span>
        <span className="font-mono text-sm text-foreground">whoami</span>
      </div>

      {/* Name */}
      <div className='flex flex-col gap-1'>
        <h1 className="font-sans font-bold text-6xl md:text-7xl lg:text-8xl flex gap-2 lg:gap-3">
          <span className="text-white">
            Parth
          </span>

          <span
            className="text-primary"
            style={{
              textShadow: "0 0 14px color-mix(in oklch, var(--primary) 90%, transparent)"
            }}
          >
            Naik
          </span>
        </h1>

        <Role />
      </div>

      {/* Body Text */}
      <div>
        <p className="text-center text-muted-foreground text-lg lg:text-xl">Exploring   <span className="text-primary">Cybersecurity</span>, <span className="text-devops">DevOps</span>, and <span className="text-cloud">Cloud</span> technologies.</p>
      </div>

      {/* Social media links */}
      <div className="flex gap-4">
        <SocialLink 
          url="https://github.com/losthread" 
          icon={'github'} 
          alt="GitHub" 
        />
      </div>

      {/* Explore my work navigator */}
      <a href="#projects"
         className='group flex items-center gap-2 
                    border rounded-lg py-3 px-6
                    text-gray-800 font-medium text-sm lg:text-lg bg-primary
                    shadow-[0_0_17px_color-mix(in_srgb,var(--color-primary),transparent_65%)]
                    hover:opacity-80
                    transition-all ease-in-out duration-400
                    mt-3'
      >
        Explore My Work 
        <ChevronDown className="size-4 
                                transition-transform ease-in-out group-hover:translate-y-1" 
        />
      </a>

      {/* Animated mouse icon */}
      <div>
        <Mouse className='size-11 animate-bounce opacity-70 text-primary' 
               strokeWidth={1} // Lower = thinner. Try 1 for a very sleek look.
               style={{ filter: "drop-shadow(0 0 8px var(--color-primary))" }}
        />
      </div>
    </section>
  );
}