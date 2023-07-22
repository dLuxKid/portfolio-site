import Image from "next/image";
import Github from "../SVG/Github";
import Web from "../SVG/Web";

interface Props {
  photoUrl: string;
  name: string;
  githubLink: string;
  webLink: string;
}

export default function ProjectCard({
  photoUrl,
  name,
  githubLink,
  webLink,
}: Props) {
  return (
    <div className="relative w-full sm:w-[48%] md:w-[31%] h-[300px] bg-black-sec overflow-hidden [&>*:nth-child(2)]:hover:top-0 [&>*:nth-child(2)]:hover:left-0 [&>*:nth-child(1)]:hover:top-0 [&>*:nth-child(1)]:hover:-left-full flex-center">
      <div className="w-full h-full absolute transition-all duration-500 top-0 left-0">
        <Image
          src={photoUrl}
          alt="project thumbnail"
          className="w-full object-fill object-center"
        />
      </div>
      <div className="w-full h-full absolute transition-all duration-500 top-0 left-full py-8 px-4  border-white-pry border text-center flex-center flex-col gap-4">
        <h2 className="body_text">{name} hi</h2>
        <span className="w-full h-[2px] bg-white-sec rounded-sm"></span>
        <p className="flex-center gap-6">
          <a
            href={githubLink}
            title="github link"
            target="_blank"
            rel="noopener"
            className="hover:opacity-80 transition-all duration-200"
          >
            <Github />
          </a>
          <a
            href={webLink}
            title="website link"
            target="_blank"
            rel="noopener"
            className="hover:opacity-80 transition-all duration-200"
          >
            <Web />
          </a>
        </p>
      </div>
    </div>
  );
}
