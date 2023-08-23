
import { projectDetails } from "@/assets/data/ProjectDetails";
import ProjectCard from "./ProjectCard";

export default function Projects() {

  return (
    <section className="section border-t-4 border-black-sec">
      <div>
        <h1 className="head_text capitalize">My projects</h1>
      </div>
      <div className="mt-8 flex-between gap-x-6 md:gap-x-0 md:gap-y-6 overflow-scroll md:flex-wrap">
        {projectDetails
          .map((item, idx) => (
            <ProjectCard
              key={idx}
              desc={item.desc}
              githubLink={item.githubLink}
              name={item.name}
              photoUrl={item.photoUrl}
              webLink={item.webLink as string}
            />
          ))}
      </div>
    </section>
  );
}
