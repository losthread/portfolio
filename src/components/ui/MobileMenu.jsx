import { X } from 'lucide-react';

export default function MobileMenu({ isOpen, setIsOpen, navItems }) {
  return (
    <div className={`
      fixed top-0 right-0 h-full w-[75%] sm:w-[60%] bg-black border-l border-border z-50 md:hidden
      transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "translate-x-full"}
    `}>
      <div className="flex justify-end p-6">
        <button 
          onClick={() => setIsOpen(false)} 
          className="p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Close menu"
        >
          <X className="size-8" />
        </button>
      </div>

      <nav className="flex flex-col items-center gap-8 mt-10">
        {navItems.map((item) => (
          <a 
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-mono text-muted-foreground hover:text-primary transition-colors"
          >
            {item.name}
          </a>
        ))}
        
        <a 
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-8 py-3 border border-primary text-primary rounded-lg font-mono hover:bg-primary/10 transition-colors"
        >
          Resume
        </a>
      </nav>
    </div>
  );
}