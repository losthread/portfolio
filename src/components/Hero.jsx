import { Terminal } from "lucide-react";
import Role from './ui/Role';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-7">
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
              textShadow: "0 0 14px color-mix(in oklch, var(--primary) 80%, transparent)"
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
        <p className="text-muted-foreground text-xl">Passionate about <span className="text-primary">Cybersecurity</span>, <span className="text-iot">IoT</span>, <span className="text-devops">DevOps</span>, and <span className="text-cloud">Cloud</span> technologies.</p>
      </div>
    </section>
  );
}