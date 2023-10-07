import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "godkid",
  description: "Adetunji Marvellous's portfolio site",
  openGraph: {
    title: 'godkid',
    description: "Adetunji Marvellous's portfolio site",
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
        <Footer />
      </body>
    </html>
  );
}
