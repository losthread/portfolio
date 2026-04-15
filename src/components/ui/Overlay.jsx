export default function Overlay({ showMask = true }) {
  return (
    <div 
      className="absolute inset-0 -z-10" 
      style={{
        backgroundImage: `
          linear-gradient(to right, var(--color-border) 1px, transparent 1px),
          linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        // Only apply maskImage if showMask is true
        maskImage: showMask ? 'radial-gradient(ellipse at center, black, transparent 90%)' : 'none',
        opacity: '0.55' 
      }}
    />
  );
}