import { Terminal, Menu } from 'lucide-react'; // Import Menu icon
import { useState, useEffect } from 'react';
import MobileMenu from './ui/MobileMenu';

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // 1. Add state for the menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header className={`px-6 md:px-16 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/70 backdrop-blur-md border-b border-border shadow-2xl py-4" : "bg-transparent border-b-transparent py-5"}`}>
      <nav className="flex items-center justify-between mx-auto">
        
        {/* Left Side: Logo & Name */}
        <div className="flex items-center gap-2">
          <a className="p-2 rounded-lg border border-primary/50 bg-primary/10 transition-colors hover:bg-primary/20" href='#'>
            <Terminal className="text-primary size-5" />
          </a>
          <p className="font-mono tracking-tight">
            <span className="text-primary text-lg font-bold">~/</span>
            <span className="text-foreground text-base">Losthread</span>
          </p>
        </div>

        {/* Right Side: Links, Resume & Burger */}
        <div className="flex items-center gap-4 md:gap-8">
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="font-sans text-base text-muted-foreground hover:text-foreground transition-colors">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="hidden md:block px-4 py-2 border border-primary text-primary text-sm font-mono rounded-lg hover:bg-primary/10 transition-all active:scale-95">
            Resume
          </a>

          <button 
            onClick={() => setIsOpen(true)} 
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            <Menu className="size-7" />
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />
    </header>
  );
}