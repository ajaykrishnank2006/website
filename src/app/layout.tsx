import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ajay Krishnan K | AI & ML Engineer",
  description: "Professional portfolio of Ajay Krishnan K (AK), an AI & Machine Learning Engineer, Flutter Developer, and Full-Stack Learner from Kerala, India. Specialize in intelligent systems, CV, and mobile apps.",
  keywords: ["Ajay Krishnan", "AI Engineer", "Machine Learning Engineer", "Flutter Developer", "Portfolio", "Kerala", "India"],
  authors: [{ name: "Ajay Krishnan K" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cyber-dark text-foreground">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
