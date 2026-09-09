import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Newton Toxyll | Web Developer",
    template: "%s | Newton Toxyll",
  },
  description:
    "Portfolio of Newton Toxyll, an Information Technology student and aspiring full-stack web developer building modern and useful digital experiences.",
  keywords: [
    "Newton Toxyll",
    "Web Developer",
    "Information Technology",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Kenya",
  ],
  authors: [
    {
      name: "Newton Toxyll",
    },
  ],
  creator: "Newton Toxyll",
  metadataBase: new URL("https://newton-portfolio-eta.vercel.app"),
  openGraph: {
    title: "Newton Toxyll | Web Developer",
    description:
      "Portfolio of Newton Toxyll, an Information Technology student and aspiring full-stack web developer.",
    url: "https://newton-portfolio-eta.vercel.app",
    siteName: "Newton Toxyll Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}