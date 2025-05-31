import JavaScript from "@/assets/svgs/JavaScript";
import Next from "@/assets/svgs/Next";
import ReactIcon from "@/assets/svgs/React";
import Tailwind from "@/assets/svgs/Tailwind";
import TypeScript from "@/assets/svgs/TypeScript";
import Avatar from "./Avatar";

export default function Herosection() {
  return (
    <section className="min-h-[80svh] py-8 flex items-center justify-center">
      <div className="flex items-center justify-between flex-col lg:flex-row gap-12 lg:gap-8">
        <div className="w-full lg:w-[50%] flex flex-col gap-6 md:gap-8">
          <h3 className="flex items-center gap-4 text-sm md:text-lg">
            <span className="h-1 w-8 md:w-10 bg-black rounded-sm" /> Hi, I&#39;m
            Marvellous Adetunji
          </h3>
          <h1 className="text-2xl md:text-5xl vollkorn font-bold leading-16 text-black">
            Frontend Engineer
          </h1>
          <p className="text-sm md:text-xl leading-[26px] md:leading-10">
            I am a frontend web developer passionate about creating seamless,
            user-centric web experiences. My work mainly focuses on building
            dynamic, responsive interfaces using modern frameworks like{" "}
            <span className="text-black font-semibold inline-flex items-center justify-center gap-1">
              Next.js
              <Next className="w-5 h-5 md:w-6 md:h-6" />
            </span>{" "}
            and{" "}
            <span className="text-[#61DAFB] font-semibold inline-flex items-center justify-center gap-1">
              React
              <ReactIcon className="w-5 h-5 md:w-6 md:h-6" />
            </span>{" "}
            , with a strong foundation in{" "}
            <span className="text-[#007acc] font-semibold inline-flex items-center justify-center gap-1">
              TypeScript
              <TypeScript className="w-5 h-5 md:w-6 md:h-6" />
            </span>{" "}
            ,{" "}
            <span className="text-[#F0DB4F] font-semibold inline-flex items-center justify-center gap-1">
              JavaScript
              <JavaScript className="w-5 h-5 md:w-6 md:h-6" />
            </span>{" "}
            , and{" "}
            <span className="text-[#38bdf8] font-semibold inline-flex items-center justify-center gap-1">
              Tailwind
              <Tailwind className="w-5 h-5 md:w-6 md:h-6" />
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
