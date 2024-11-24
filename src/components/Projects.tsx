import { projectDetails } from "@/assets/data/ProjectDetails";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      className="px-[5%] py-12 md:py-24 border-t-4 border-black-sec"
      id="projects"
    >
      <div>
        <h1 className="head_text capitalize blue_gradient_text">My projects</h1>
      </div>
      <div className="mt-8 md:mt-12 flex-between gap-x-6 md:gap-x-0 md:gap-y-6 overflow-scroll md:flex-wrap">
        {projectDetails.map((item, idx) => (
          <ProjectCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}
