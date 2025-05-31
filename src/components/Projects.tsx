import { projectDetails } from "@/assets/data/project-details";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="py-8 md:py-12">
      <div className="pb-4 border-b-2 border-black">
        <h1 className="vollkorn text-2xl md:text-3xl text-black font-semibold">
          Projects
        </h1>
      </div>

      <div>
        {projectDetails.map((item, idx) => (
          <ProjectCard key={idx} {...item} index={idx} />
        ))}
      </div>
    </section>
  );
}
