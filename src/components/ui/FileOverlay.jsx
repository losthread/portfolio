import { Folder } from 'lucide-react';

export default function FileOverlay({ isHovered })
{
  if (isHovered)
  {
    return null;
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center animate-in fade-in duration-300">
      <div className="flex items-center justify-center p-3 rounded-xl border border-primary/50 bg-primary/10 mb-2 lg:mb-4">
        <Folder 
          className="text-primary size-6" 
        />
      </div>
      <span className="font-mono text-white/80 text-xs font-semibold tracking-widest">
        Project Preview
      </span>
    </div>
  );
}