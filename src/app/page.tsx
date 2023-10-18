import Contact from "@/components/Contact";
import Herosection from "@/components/Herosection";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <main>
      <Herosection />
      <Tools />
      <Projects />
      <Contact />
      <div
        className="w-full px-[5%] py-4 border-t-4 border-black-sec"
      />
    </main>
  );
}
