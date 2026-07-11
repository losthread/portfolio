import SectionIntro from "./ui/SectionIntro";
import ProjectPreview from "./ui/ProjectPreview";
import ProjectDescription from "./ui/ProjectDescription";

export default function Projects() 
{
  return (
    <section id='projects' className="flex flex-col gap-11 px-6 md:px-20 lg:px-30 mb-20 lg:mb-35">
      <SectionIntro sectionName={"Projects"} />
      <div className="flex flex-col gap-14 lg:gap-20">
        {/* Project 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center">
          <ProjectPreview 
            className="order-2 lg:order-1" 
            imagePath={'/spur.png'} 
            imageAlt={'Square Foot Interiors Website Image'} 
            projectUrl={'https://github.com/losthread/spur'} 
            isReversed={false}
          />

          <ProjectDescription
            className="order-1 lg:order-2"
            title={`Square Foot Interior Studios`}  
            description={`A modern, fully responsive landing page built for an interior design studio. Features smooth animations, optimized performance, and an elegant UI showcasing their portfolio and services.`}
            techStack={[`ReactJS`, `TailwindCSS`, `ShadCN UI`, `Python`, `FastAPI`, `Docker`]}
            githubUrl={'https://github.com/losthread/spur'} 
          />
        </div>

        {/* Project 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center">
          <ProjectDescription
            className="lg:order-1"
            title={`POSIX-Compliant Shell`}  
            description={`A lightweight, custom Unix shell built from scratch in C to explore low level process creation, input tokenization, parsing, and core system calls.`}
            techStack={[`Bash`, `Makefile`, `C`]}
            githubUrl={`https://github.com/losthread/psh`}
            isReversed={true}
          />

          <ProjectPreview 
            className=" lg:order-2"
            imagePath={'/psh.png'} 
            imageAlt={'POSIX-compliant Shell'} 
            projectUrl={'https://github.com/losthread/psh'} 
          />
        </div>

        {/* Project 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center">
          <ProjectPreview 
            className="order-2 lg:order-1" 
            imagePath={'/pscan.png'} 
            imageAlt={'Port Scanner'} 
            projectUrl={'https://github.com/losthread/pscan'} 
            isReversed={false}
          />

          <ProjectDescription
            className="order-1 lg:order-2"
            title={`Port Scanner`}  
            description={`A network administration and cybersecurity tool to scan ports like nmap `}
            techStack={[`Python`]}
            githubUrl={'https://github.com/losthread/pscan'}
          />
        </div>
      </div>
    </section>
  );
}