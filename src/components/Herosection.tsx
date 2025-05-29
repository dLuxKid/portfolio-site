import JavaScript from "@/assets/svgs/JavaScript";
import Next from "@/assets/svgs/Next";
import ReactIcon from "@/assets/svgs/React";
import Tailwind from "@/assets/svgs/Tailwind";
import TypeScript from "@/assets/svgs/TypeScript";
import Avatar from "./Avatar";

export default function Herosection() {
  return (
    <section className="min-h-screen py-8 md:py-12 flex items-center justify-center">
      <div className="flex justify-between flex-col lg:flex-row gap-12 lg:gap-8">
        <div className="w-full lg:w-[50%] flex flex-col gap-8">
          <h2 className="flex items-center gap-4 text-base md:text-lg">
            <span className="h-1 w-8 md:w-10 bg-black rounded-sm" /> Hi, I&#39;m
            Marvellous Adetunji
          </h2>
          <h4 className="text-3xl md:text-5xl vollkorn font-bold leading-16 text-black">
            Frontend Engineer
          </h4>
          <p className="text-lg md:text-xl leading-8">
            I am a frontend web developer passionate about creating seamless,
            user-centric web experiences. My work mainly focuses on building
            dynamic, responsive interfaces using modern frameworks like{" "}
            <span className="text-black font-semibold inline-flex items-center justify-center gap-1">
              Next.js
              <Next />
            </span>{" "}
            and{" "}
            <span className="text-[#61DAFB] font-semibold inline-flex items-center justify-center gap-1">
              React
              <ReactIcon />
            </span>{" "}
            , with a strong foundation in{" "}
            <span className="text-[#007acc] font-semibold inline-flex items-center justify-center gap-1">
              TypeScript
              <TypeScript />
            </span>{" "}
            ,{" "}
            <span className="text-[#F0DB4F] font-semibold inline-flex items-center justify-center gap-1">
              JavaScript
              <JavaScript />
            </span>{" "}
            , and{" "}
            <span className="text-[#38bdf8] font-semibold inline-flex items-center justify-center gap-1">
              Tailwind
              <Tailwind />
            </span>{" "}
            . I enjoy bringing ideas to life through clean, efficient code and
            thoughtful design.
            <br />
            <br />I am currently open to new opportunities, including part-time,
            full-time, and freelance roles.
          </p>
        </div>
        <Avatar />
      </div>
    </section>
  );
}
