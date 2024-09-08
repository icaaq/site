import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { Footer, Navigation, SkipToContent } from "./components";

const notoSans = Noto_Sans({
  weight: ["400", "700"], // Specify weights you want to use (optional)
  subsets: ["latin"], // You can specify subsets
});

export const metadata: Metadata = {
  title: "Icaaq AB - Frontend developer and architect",
  description:
    "Frontend developer and architect with a strong passion for creating semantic, accessible, and well-structured code that is easy to understand and maintain, backed by 20 years of experience.",
};

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  {
    href: "/cv",
    label: "Curriculum Vitae",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.className}`}>
        <SkipToContent />
        <Navigation links={links} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
