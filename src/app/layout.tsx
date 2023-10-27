import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "godkid",
  description: "Frontend web developer, experienced with nextjs, reactjs, tailwindcss.",
  openGraph: {
    title: 'godkid',
    description: "Frontend web developer, experienced with nextjs, reactjs, tailwindcss.",
    url: 'https://adetunjimarvellous.vercel.app',
    siteName: 'Adetunji Marvellous',
    images: [
      {
        url: '../assets/imgs/Marvellous.JPG',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />
      </head>
      <body className="bg-black-pry">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
