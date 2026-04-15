import { Folder } from 'lucide-react';

export default function FileOverlay({ isHovered })
{
  if (isHovered)
  {
    return null;
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center animate-in fade-in duration-300">
      <div className="flex items-center justify-center w-16 h-16 rounded-xl border border-primary/50 bg-primary/10 mb-4">
        <Folder 
          size={32} 
          strokeWidth={1.5} 
          className="text-primary" 
        />
      </div>
      <span className="font-mono text-muted-foreground text-xs font-semibold tracking-widest">
        Project Preview
      </span>
    </div>
  );
}