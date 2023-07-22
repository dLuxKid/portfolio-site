import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="section border-t-4 border-black-sec">
      <div>
        <h1 className="head_text capitalize">some projects</h1>
      </div>
      <div className="mt-8">
        <ProjectCard />
      </div>
    </section>
  );
}
