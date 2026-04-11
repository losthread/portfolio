import { Terminal, ChevronDown, Mouse } from 'lucide-react';
import SocialLink from './ui/SocialLink'
import Role from './ui/Role';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-7 pt-10">
      {/* The Background Grid Lines Overlay */}
      <div 
        className="absolute inset-0 -z-10" 
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 90%)',
          opacity: '0.55' 
        }}
      />

      {/* The Subtle Glow Overlay */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse at center, var(--color-primary) 0%, transparent 70%)',
          opacity: '0.06'
        }}
      />

      {/* whoami block */}
      <div className="flex gap-2 items-center border border-primary/30 bg-primary/3 rounded-full py-2 px-5 backdrop-blur-sm">
        <Terminal className="size-4 text-primary" /> 
        <span className="font-mono text-sm text-primary">~/portfolio</span>
        <span className="font-mono text-sm text-muted-foreground">$</span>
        <span className="font-mono text-sm text-foreground">whoami</span>
      </div>

      {/* Name */}
      <div>
        <h1 className="font-sans font-bold text-8xl flex gap-3">
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
      </div>

      {/* Animated Role details */}
      <Role />

      {/* Body Text */}
      <div>
        <p className="text-muted-foreground text-xl">Exploring   <span className="text-primary">Cybersecurity</span>, <span className="text-iot">IoT</span>, <span className="text-devops">DevOps</span>, and <span className="text-cloud">Cloud</span> technologies.</p>
      </div>

      {/* Social media links */}
      <div className="flex gap-4">
        <SocialLink 
          url="https://github.com/losthread" 
          icon={'github'} 
          alt="GitHub" 
        />
        <SocialLink 
          url="https://linkedin.com/..." 
          icon={'linkedin'} 
          alt="LinkedIn" 
        />
      </div>

      {/* Explore my work navigator */}
      <a href="#projects"
         className='group flex items-center gap-2 
                    border rounded-lg py-3 px-6
                    text-black bg-primary
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
        <Mouse className='mt-3 size-11 animate-bounce opacity-70 text-primary' 
               strokeWidth={1} // Lower = thinner. Try 1 for a very sleek look.
               style={{ filter: "drop-shadow(0 0 8px var(--color-primary))" }}
        />
      </div>
    </section>
  );
}