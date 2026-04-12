export default function SkillStat({ name, percentageCompletion }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {/* Label and Percentage */}
      <div className="flex justify-between items-center">
        <h4 className="font-mono font-extralight text-sm">
          {name}
        </h4>
        <p className="font-mono text-xs text-primary">{percentageCompletion}%</p>
      </div>

      {/* Progress Bar Track */}
      <div className="h-2 w-full bg-muted-foreground/10 rounded-full overflow-hidden">
        {/* Progress Bar Fill */}
        <div 
          className="h-full rounded-2xl bg-primary transition-all duration-1000 ease-out"
          style={{ width: `${percentageCompletion}%` }}
        />
      </div>
    </div>
  );
}