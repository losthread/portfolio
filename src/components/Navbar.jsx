import { Terminal } from 'lucide-react';

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="flex items-center justify-between px-6 mx-auto">
        
        {/* Left Side: Logo & Name */}
        <div className="flex items-center gap-2 py-4">
          <a 
            className="p-2 rounded-lg border border-primary/50 bg-primary/10 transition-colors hover:bg-primary/20"
            href='#'
          >
            <Terminal className="text-primary size-5" />
          </a>

          <p className="font-mono tracking-tight">
            <span className="text-primary text-lg font-bold">~/</span>
            <span className="text-foreground text-base">Losthread</span>
          </p>
        </div>

        {/* Right Side: Links & Resume */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="font-sans text-base text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="px-4 py-2 border border-primary text-primary text-sm font-mono rounded-lg hover:bg-primary/10 transition-all active:scale-95"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}