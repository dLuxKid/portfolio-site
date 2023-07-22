import Contact from "@/components/Contact/Contact";
import Herosection from "@/components/Herosection/Herosection";
import Projects from "@/components/Projects/Projects";
import Tools from "@/components/Tools/Tools";

export default function Home() {
  return (
    <main>
      <Herosection />
      <Tools />
      <Projects />
      <Contact />
    </main>
  );
}
