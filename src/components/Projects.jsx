import SectionIntro from "./ui/SectionIntro";
import ProjectPreview from "./ui/ProjectPreview";

export default function Projects() {
  return (
    <section id='projects' className="flex flex-col gap-11 px-30">
      <SectionIntro sectionName={"Projects"} />

      <div>
        <ProjectPreview 
          imagePath={'/squarefoot.png'} 
          imageAlt={'Square Foot Interiors Website Image'} 
          projectUrl={'https://squarefootinteriors.netlify.app/'} 
        />

      </div>
    </section>
  );
}