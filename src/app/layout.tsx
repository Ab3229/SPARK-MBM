import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SPARK",
  description:
    "SPARK is a dynamic and passionate coding community dedicated to fostering a tech-driven environment in college. Our mission is to empower students by enhancing their programming skills, encouraging innovation, and preparing them for real-world challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        
        {/* Wrap children in a main tag with padding top */}
        <main className="pt-20">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
