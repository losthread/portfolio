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
            imageAlt={'Spur Dashboard Image'} 
            projectUrl={'https://github.com/losthread/spur'} 
            isReversed={false}
          />

          <ProjectDescription
            className="order-1 lg:order-2"
            title={`Spur: A URL shortener`}  
            description={`A modern URL shortener built with FastAPI, PostgreSQL, and React. Create short links, track clicks, manage URLs from a dashboard, and analyze usage through interactive charts.`}
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
            imagePath={'/recon.png'} 
            imageAlt={'OSINT deanonymizer'} 
            projectUrl={'https://github.com/losthread/recon'} 
            isReversed={false}
          />

          <ProjectDescription
            className="order-1 lg:order-2"
            title={`OSINT deanonymizer`}  
            description={`A Deterministic CLI OSINT tool to search and identify someone based on their public social profiles and history, given their username.`}
            techStack={[`Python`]}
            githubUrl={'https://github.com/losthread/recon'}
          />
        </div>

        {/* Project 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center">
          <ProjectDescription
            className="lg:order-1"
            title={`Distributed Payment System`}  
            description={`An event driven, microservices based distributed payment system.`}
            techStack={[`Docker`, `Redis`, `Kafka`, `PostgreSQL`, `FastAPI`, `Python`]}
            githubUrl={`https://github.com/losthread/distributed-payment-system`}
            isReversed={true}
          />

          <ProjectPreview 
            className=" lg:order-2"
            imagePath={'/mps.png'} 
            imageAlt={'Distributed Payment System'} 
            projectUrl={'https://github.com/losthread/distributed-payment-system'} 
          />
        </div>
      </div>
    </section>
  );
}