import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.godkid.dev/",
      lastModified: new Date(),
    },
  ];
}
