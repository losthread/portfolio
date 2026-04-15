export default function SectionIntro({ sectionName }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-4xl font-bold whitespace-nowrap">{sectionName}</h2>
      <div className="h-0.5 w-full bg-muted-foreground/20" />
    </div>
  );
}