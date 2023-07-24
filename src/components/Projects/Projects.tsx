"use client";

import { projectDetails } from "@/assets/data/ProjectDetails";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

export default function Projects() {
  const [listLength, setListLength] = useState<number>(4);

  return (
    <section className="section border-t-4 border-black-sec">
      <div>
        <h1 className="head_text capitalize">My projects</h1>
      </div>
      <div className="mt-8 flex-between gap-y-6 flex-wrap">
        {projectDetails
          .filter((item, idx) => idx < listLength)
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
      {listLength === 4 && (
        <div className="flex-center mt-8">
          <button
            type="button"
            title="load more"
            className="white_btn"
            onClick={() => setListLength(projectDetails.length)}
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
