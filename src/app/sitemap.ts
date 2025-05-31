import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://godkid.dev/",
      lastModified: new Date(),
    },
  ];
}
