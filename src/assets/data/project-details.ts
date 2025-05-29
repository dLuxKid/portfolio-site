import codm from "@/assets/imgs/projects/codmplayarena.png";
import collabor8 from "@/assets/imgs/projects/collabor8.png";
import ecommerce from "@/assets/imgs/projects/ecommerce.png";
import LuxClothings from "@/assets/imgs/projects/Luxclothings.png";
import findtrend from "@/assets/imgs/projects/findtrend.png";
import solarios from "@/assets/imgs/projects/solarios.png";
import alpharithm from "@/assets/imgs/projects/alpharithm.png";
import chromamatch from "@/assets/imgs/projects/chromamatch.png";

import { StaticImageData } from "next/image";

interface ProjectData {
  photoUrl: StaticImageData;
  name: string;
  desc: string;
  githubLink: string;
  webLink?: string;
  builtWith?: string;
}

export const projectDetails: Array<ProjectData> = [
  {
    photoUrl: chromamatch,
    desc: "An AI-powered web application that analyzes clothing colors and provides outfit suggestions based on user inputs.",
    name: "ChromaMatch",
    githubLink: "https://github.com/dLuxKid/chroma-match",
    webLink: "https://chromamatch.vercel.app/",
    builtWith: "Next.js, Tailwind CSS, Shadcn, OpenAI",
  },
  {
    photoUrl: alpharithm,
    desc: "A conceptual landing page for a platform that provides AI-driven solutions for businesses, focusing on data analysis and insights.",
    name: "Alpharithm Landing Page",
    githubLink: "https://github.com/dLuxKid/alpharithm",
    webLink: "https://alpharithm-mauve.vercel.app/",
    builtWith: "Next.js, Tailwind CSS",
  },
  {
    photoUrl: solarios,
    desc: "The project simulates a solar energy solutions platform, offering services like solar panel installation and renewable energy consulting.",
    name: "Solarios Landing Page",
    githubLink: "https://github.com/dLuxKid/solarios",
    webLink: "https://solarios.vercel.app/",
    builtWith: "React, GSAP",
  },
  {
    photoUrl: findtrend,
    desc: "The concept revolves around a platform that helps users minimize browser tabs and discover trends by organizing their favorite websites in one place.",
    name: "Findtrend Landing Page",
    githubLink: "https://github.com/dLuxKid/Findtrend",
    webLink: "https://findtrend-seven.vercel.app/",
    builtWith: "React",
  },
  {
    photoUrl: ecommerce,
    desc: "This ecommerce dashboard is designed to streamline the management of online stores by providing a centralized platform for tracking sales, customer orders, inventory, and customer conversations.",
    name: "Ecommerce  Dashbord",
    githubLink: "https://github.com/dLuxKid/ecommerce-dashboard",
    webLink: "https://ecommerce-dashboard-steel.vercel.app/",
    builtWith: "Next.Js, TypeScript, Tailwind CSS",
  },
  {
    photoUrl: codm,
    desc: "CODMPlay Arena is a dedicated esports platform for Call of Duty Mobile fans. It offers the ability to create and participate in CODM Battle Royale tournaments with prizes, team management tools, and event alerts.",
    name: "CODM PLAY ARENA",
    githubLink: "https://github.com/dLuxKid/esports-app",
    webLink: "https://codmplayarena.vercel.app/",
    builtWith: "React, Firebase, TypeScript, Tailwind CSS",
  },
  {
    photoUrl: collabor8,
    name: "collabor8",
    desc: "Collabor8 is a dynamic project management site designed to empower teams in efficiently managing projects, assigning tasks, and fostering seamless collaboration.",
    githubLink: "https://github.com/dLuxKid/project-management-web-app",
    webLink: "https://collabor8-one.vercel.app/",
    builtWith: "React, Firebase",
  },
  {
    photoUrl: LuxClothings,
    name: "Luxury Clothings",
    desc: "Luxury Clothings is a modern clothing e-commerce platform that offers a seamless shopping experience, with features like intuitive search, secure payments, and easy inventory management, making it perfect for both fashion enthusiasts and store owners.",
    githubLink: "https://github.com/dLuxKid/Luxury-Clothings",
    webLink: "https://luxury-clothings.vercel.app/",
    builtWith: "React, Redux, Firebase",
  },
];
