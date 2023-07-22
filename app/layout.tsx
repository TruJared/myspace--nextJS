import "./globals.css";
import NavMenu from "./NavMenu";
import Footer from "./Footer";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const fontFamily = Montserrat({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontFamily.className}>
        <NavMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
