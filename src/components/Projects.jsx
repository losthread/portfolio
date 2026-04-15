import SectionIntro from "./ui/SectionIntro";
import ProjectPreview from "./ui/ProjectPreview";
import ProjectDescription from "./ui/ProjectDescription";

export default function Projects() 
{
  return (
    <section id='projects' className="flex flex-col gap-11 px-6 md:px-20 lg:px-30">
      <SectionIntro sectionName={"Projects"} />

      <div className="flex flex-col gap-26">
        {/* Project 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ProjectPreview 
            className="order-2 lg:order-1" 
            imagePath={'/squarefoot.png'} 
            imageAlt={'Square Foot Interiors Website Image'} 
            projectUrl={'https://squarefootinteriors.netlify.app/'} 
            isReversed={false}
          />

          <ProjectDescription
            className="order-1 lg:order-2"
            title={`Square Foot Interior Studios`}  
            description={`A modern, fully responsive landing page built for an interior design studio. Features smooth animations, optimized performance, and an elegant UI showcasing their portfolio and services.`}
            techStack={[`Html`, `Css`, `Javascript`]}
            url={`https://squarefootinteriors.netlify.app/`}
          />
        </div>

        {/* Project 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ProjectDescription
            className="lg:order-1"
            title={`Personal Finance Tracker`}  
            description={`A simplified f=personal finance management and budgeting tool featuring data visualisation to analyze expenses, and local data persistence`}
            techStack={[`Html`, `Css`, `Javascript`]}
            url={`https://ledgertrack.netlify.app/`}
            isReversed={true}
          />

          <ProjectPreview 
            className="lg:order-2"
            imagePath={'/ledger.png'} 
            imageAlt={'Expense Tracker'} 
            projectUrl={'https://ledgertrack.netlify.app/'} 
          />
        </div>
      </div>
    </section>
  );
}