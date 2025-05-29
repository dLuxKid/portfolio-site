import Image, { StaticImageData } from "next/image";
import Github from "../assets/svgs/Github";
import Web from "../assets/svgs/Web";

interface Props {
  photoUrl: StaticImageData;
  name: string;
  githubLink: string;
  webLink?: string;
  desc: string;
  index: number;
  builtWith?: string;
}

export default function ProjectCard({
  photoUrl,
  index,
  name,
  githubLink,
  webLink,
  desc,
  builtWith,
}: Props) {
  return (
    <div className="w-full border-b-[0.7px] md:border-b border-b-black/50 flex flex-col py-10 md:py-16 lg:flex-row gap-8 md:gap-12 lg:justify-between">
      <div className="lg:flex-1 flex flex-col gap-4 md:gap-6">
        <h4 className="text-lg md:text-xl">
          {(index + 1).toString().padStart(2, "0")}/ {name}
        </h4>

        <p className="text-sm md:text-base text-[#606060]">{desc}</p>

        <p className="text-base md:text-lg">Built with: {builtWith}</p>

        <div className="mt-auto flex items-center gap-4">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6 md:h-8 md:w-8" />
          </a>
          {webLink && (
            <a href={webLink} target="_blank" rel="noopener noreferrer">
              <Web className="h-6 w-6 md:h-8 md:w-8" />
            </a>
          )}
        </div>
      </div>
      <div className="lg:flex-1 rounded-lg shadow-lg overflow-hidden">
        <Image
          src={photoUrl}
          alt="project image"
          className="object-cover object-center duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
}
