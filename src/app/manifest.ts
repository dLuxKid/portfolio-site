import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Adetunji Marvellous - Frontend Engineer",
    short_name: "Adetunji Marvellous - Frontend Engineer",
    description:
      "Frontend web developer, experienced with nextjs, reactjs, tailwindcss.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f3f3",
    theme_color: "#f3f3f3",
    icons: [
      {
        src: "/opengraph-image.png",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
