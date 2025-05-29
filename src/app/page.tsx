import Contact from "@/components/Contact";
import Herosection from "@/components/Herosection";
import MoreAboutMe from "@/components/MoreAboutMe";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Projects />
      <MoreAboutMe />
      <Contact />
    </>
  );
}
