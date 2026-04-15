import { useState } from 'react';
import Overlay from './Overlay';
import FileOverlay from './FileOverlay';

export default function ProjectPreview({ imagePath, imageAlt, projectUrl })
{
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <a 
      href={projectUrl || "#"} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block w-full max-w-160"
    >
      <div 
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 transition-all duration-300 cursor-pointer" 
        style={{
          width: '100%',
          aspectRatio: '16 / 9',
          borderColor: isHovered ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.1)'
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <Overlay showMask={false} />

        <img 
          src={imagePath}
          alt={imageAlt}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${isHovered ? 'opacity-80 scale-102' : 'opacity-30'}`}
        />

        <FileOverlay isHovered={isHovered} />

        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 animate-in fade-in duration-300">
            <span className="text-white font-medium drop-shadow-md">View Project ↗</span>
          </div>
        )}
      </div>
    </a>
  );
}