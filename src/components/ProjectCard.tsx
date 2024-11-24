import Image, { StaticImageData } from "next/image";
import Github from "../assets/svgs/Github";
import Web from "../assets/svgs/Web";

interface Props {
  photoUrl: StaticImageData;
  name: string;
  githubLink: string;
  webLink?: string;
  desc: string;
}

export default function ProjectCard({
  photoUrl,
  name,
  githubLink,
  webLink,
  desc,
}: Props) {
  return (
    <div className="relative min-w-[280px] w-full md:w-[48%] h-52 md:h-72 overflow-hidden [&>*:nth-child(2)]:hover:top-0 [&>*:nth-child(2)]:hover:left-0 [&>*:nth-child(1)]:hover:top-0 [&>*:nth-child(1)]:hover:-left-full flex-center">
      <div className="w-full h-full absolute transition-all duration-500 top-0 left-0 z-10">
        <Image
          src={photoUrl}
          alt="project thumbnail"
          className="w-full h-full object-contain object-center"
        />
      </div>
      <div className="w-full h-full absolute transition-all duration-500 top-0 left-full py-8 px-4 bg-black-sec border-white-pry border text-center flex-center flex-col gap-4">
        <h2 className="body_text">{name}</h2>
        <p className="tiny_text -mt-4">{desc}</p>
        <span className="w-full h-[2px] bg-white-sec rounded-sm"></span>
        <p className="flex-center gap-4 md:gap-8 w-full">
          <a
            href={githubLink}
            title="github link"
            target="_blank"
            rel="noopener"
            className="hover:opacity-80 transition-all duration-200 cursor-pointer"
          >
            <div>
              <Github className="w-6 md:w-8" />
            </div>
          </a>
          <div>
            {webLink && (
              <a
                href={webLink}
                title="website link"
                target="_blank"
                rel="noopener"
                className="hover:opacity-80 transition-all duration-200 cursor-pointer"
              >
                <Web className="w-6 md:w-8" />
              </a>
            )}
          </div>
        </p>
      </div>
    </div>
  );
}
