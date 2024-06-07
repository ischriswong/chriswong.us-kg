import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import GridBackground from "@/components/grid-background";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Chris Wong | Personal",
  metadataBase: new URL("https://ischris.us.kg"),
  alternates: {
    canonical: "/",
  },
  authors: [
    { name: "Chris Wong", url: "https://github.com/ischriswong" },
    { name: "王穎", url: "https://github.com/ischriswong" },
  ],
  description: "Chris Wong's personal portfolio website, 王穎的个人网站",
  openGraph: {
    title: "Chris Wong | Personal",
    description: "Chris Wong's personal portfolio website, 王穎的个人网站",
    images: [
      {
        url: "/photo.jpg",
        alt: "Chris Wong's Portrait",
        width: 640,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <GridBackground />
        <main className="container overflow-x-hidden lg:px-28">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
