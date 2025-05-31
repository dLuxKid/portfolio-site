import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adetunji Marvellous - Frontend Engineer",
  description:
    "Frontend web developer, experienced with nextjs, reactjs, tailwindcss.",
  other: {
    "theme-color": "light",
    "color-scheme": "light",
    "twitter:image": "https://www.godkid.dev/opengraph-image.png",
    "twitter:image:alt": "Adetunji Marvellous - Frontend Engineer",
    "twitter:card": "summary_large_image",
    "twitter:site": "https://www.godkid.dev",
    "og:url": "https://www.godkid.dev",
    "og:image": "https://www.godkid.dev/opengraph-image.png",
    "og:image:alt": "Adetunji Marvellous - Frontend Engineer",
    "og:type": "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "godkid",
    description:
      "Frontend web developer, experienced with nextjs, reactjs, tailwindcss.",
    url: "https://www.godkid.dev",
    siteName: "Adetunji Marvellous",
    images: [
      {
        url: "https://www.godkid.dev/opengraph-image.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F3F3F3] flex items-center justify-center">
        <main className="p-[5%] space-y-6 max-w-screen-xl">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
