import Express from "@/assets/svgs/Express";
import Firebase from "@/assets/svgs/Firebase";
import Golang from "@/assets/svgs/Golang";
import MongoDB from "@/assets/svgs/MongoDB";
import NodeJs from "@/assets/svgs/NodeJs";

export default function MoreAboutMe() {
  return (
    <>
      <section className="py-8 md:py-12">
        <div className="pb-4 border-b-2 border-black">
          <h1 className="vollkorn text-2xl md:text-3xl text-black font-semibold">
            More About Me
          </h1>
        </div>
        <p className="mt-8 text-lg md:text-xl leading-8 [&>a]:underline">
          I also dabble into backend development, working with{" "}
          <span className="text-[#83CD29] font-semibold inline-flex items-center justify-center gap-1">
            Node.Js
            <NodeJs />
          </span>
          ,{" "}
          <span className="text-black font-semibold inline-flex items-center justify-center gap-1">
            Express
            <Express />
          </span>
          , and{" "}
          <span className="text-[#439934] font-semibold inline-flex items-center justify-center gap-1">
            MongoDB
            <MongoDB />
          </span>
          . Projects i built with these technologies include a{" "}
          <a
            href="https://github.com/dLuxKid/todo-app-fullstack"
            target="_blank"
            rel="noopener noreferrer"
          >
            simple todo app
          </a>
          , an{" "}
          <a
            href="https://github.com/dLuxKid/E-Learning-API"
            target="_blank"
            rel="noopener noreferrer"
          >
            e-learning api
          </a>
          , and a{" "}
          <a
            href="https://github.com/dLuxKid/social-media-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            social media api
          </a>
          . I also have experience with{" "}
          <span className="text-[#f58220] font-semibold inline-flex items-center justify-center gap-1">
            Firebase
            <Firebase />
          </span>
          , which I used for authentication and real-time database in some of my
          projects.
          <br />
          <br />
          I&apos;ve recently been learning about system design and architecture,
          and I&apos;ve enjoyed it so much that I&apos;m seriously considering
          focusing more on backend development. I believe that understanding how
          systems work at a deeper level will help me become a better developer
          and build more efficient, scalable applications.
          <br />
          I&apos;m actively learning and tracking my progress on{" "}
          <a
            href="https://roadmap.sh/u/godkid"
            target="_blank"
            rel="noopener noreferrer"
          >
            roadmap.sh
          </a>
          , consistently sharpening my problem-solving skills on{" "}
          <a
            href="https://leetcode.com/u/dLuxKid/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LeetCode
          </a>
          , and planning to build projects using{" "}
          <span className="text-[#6AD7E5] font-semibold inline-flex items-center justify-center gap-1">
            Golang
            <Golang />
          </span>{" "}
          as I continue my backend development journey.
          <br />
          <br />
          Outside programming, I watch a lot of animes and animations, and
          I&apos;m currently obsessed with{" "}
          <a
            href="https://onepiece.fandom.com/wiki/Monkey_D._Luffy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Luffy
          </a>{" "}
          from{" "}
          <a
            href="https://onepiece.fandom.com/wiki/One_Piece_Wiki"
            target="_blank"
            rel="noopener noreferrer"
          >
            One Piece
          </a>
          . I also love football, both watching and playing, and I&apos;m a
          passionate{" "}
          <a
            href="https://www.chelseafc.com/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chelsea
          </a>{" "}
          supporter. I also enjoy reading, as it&apos;s a great way to unwind
          and interact with my imagination.
        </p>
        <div></div>
      </section>
      <section className="py-8 md:py-12">
        <div className="pb-4 border-b-2 border-black">
          <h1 className="vollkorn text-2xl md:text-3xl text-black font-semibold">
            Things i write
          </h1>
        </div>

        <div className="space-y-4 mt-8 font-medium">
          <div>
            <a
              href="https://medium.com/@godkid."
              target="_blank"
              rel="noopener noreferrer"
            >
              https://medium.com/@godkid.
            </a>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-12">
        <div className="pb-4 border-b-2 border-black">
          <h1 className="vollkorn text-2xl md:text-3xl text-black font-semibold">
            Content Creation
          </h1>
        </div>
        <div className="space-y-4 mt-8 font-medium">
          <div>
            <a
              href="https://www.youtube.com/@godkid."
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.youtube.com/@godkid.
            </a>
          </div>
          <div>
            <a
              href="https://www.tiktok.com/@godkid.tt"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.tiktok.com/@godkid.tt
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/godkid.onig"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.instagram.com/godkid.onig
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
