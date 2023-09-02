// images
import collabor8 from "@/assets/imgs/projects/collabor8.png";
import DermCheck from "@/assets/imgs/projects/DermCheck.png";
import LuxClothings from "@/assets/imgs/projects/Luxclothings.png";
import Covid19 from "@/assets/imgs/projects/covid19.png";
import financetracka from "@/assets/imgs/projects/financetracka.png";
import hotelmidrand from "@/assets/imgs/projects/hotelmidrand.png";
import codm from "@/assets/imgs/projects/codmplayarena.png";
// types
import { StaticImageData } from "next/image";

interface Props {
  photoUrl: StaticImageData;
  name: string;
  desc: string;
  githubLink: string;
  webLink?: string;
}

export const projectDetails: Array<Props> = [
  {
    photoUrl: codm,
    desc: "A codm-based esport web application",
    name: "CODM PLAY ARENA",
    githubLink: "https://github.com/dLuxKid/esports-app",
    webLink: "https://codmplayarena.vercel.app/",
  },
  {
    photoUrl: collabor8,
    name: "collabor8",
    desc: "A mini project management web application",
    githubLink: "https://github.com/dLuxKid/project-management-web-app",
    webLink: "https://collabor8-one.vercel.app/",
  },
  {
    photoUrl: hotelmidrand,
    name: "Hotelmidrand",
    desc: "An hotel web application",
    githubLink: "https://github.com/dLuxKid/hotelApp",
    webLink: "https://hotelmidrand.vercel.app/",
  },
  {
    photoUrl: DermCheck,
    desc: "A web based skin disease detection system",
    name: "DermCheck",
    githubLink: "https://github.com/dLuxKid/2023",
  },
  {
    photoUrl: LuxClothings,
    name: "Luxury Clothings",
    desc: "A clothing e-commerce store",
    githubLink: "https://github.com/dLuxKid/Luxury-Clothings",
    webLink: "https://luxury-clothings.vercel.app/",
  },
  {
    photoUrl: financetracka,
    name: "Fin9ce Tracka",
    desc: "A web application based finance tracker",
    githubLink: "https://github.com/dLuxKid/financeTracker",
    webLink: "https://fin9ce-tracka.vercel.app/",
  },
  {
    photoUrl: Covid19,
    desc: "a web application for covid-19 data analysis",
    name: "covid19 tracker",
    githubLink: "https://github.com/dLuxKid/covid19-tracker",
  },
];
