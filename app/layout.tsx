'use client'

import "./globals.css";
import NavMenu from "../components/NavMenu/NavMenu";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import AuthProvider from "../components/AuthProvider";

const fontFamily = Montserrat({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
    <html lang="en">
        <body className={fontFamily.className}>
          <NavMenu />
          {children}
          <Footer />
        </body>
      </html>
      </AuthProvider>
  );
}
