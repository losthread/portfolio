export default function DomainCard({ icon: Icon, name, description, theme }) {
  // Map the theme prop to the EXACT variable names in your :root
  const themeMap = {
    cyber: "var(--highlight-cyan)",
    iot: "var(--highlight-lime)",
    devops: "var(--highlight-purple)",
    cloud: "var(--highlight-yellow)",
  };

  const activeColor = themeMap[theme];

  return (
    <div 
      className="flex gap-4 border p-3 lg:p-5 rounded-2xl transition-all duration-300 hover:scale-102 overflow-scroll"
      style={{
        backgroundColor: `color-mix(in oklch, ${activeColor}, transparent 91%)`,
        borderColor: `color-mix(in oklch, ${activeColor}, transparent 80%)`
      }}
    >
      <div 
        className="p-2 lg:p-3 rounded-xl h-fit flex items-center justify-center"
        style={{
          backgroundColor: `color-mix(in oklch, ${activeColor}, transparent 93%)`,
          color: activeColor
        }}
      >
        <Icon className='size-5 lg:size-6' />
      </div>

      <div className="flex flex-col gap-1">
        <h4 className="font-bold text-md lg:text-lg" style={{ color: activeColor }}>
          {name}
        </h4>
        <p className="text-sm lg:text-md text-muted-foreground leading-relaxed min-w-60">
          {description}
        </p>
      </div>
    </div>
  );
}