import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adetunji Marvellous - Frontend Engineer",
  description:
    "Frontend web developer, experienced with nextjs, reactjs, tailwindcss.",
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
