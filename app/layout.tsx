import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ModeToggle from "@/app/UI/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Frontend Quiz App",
  description: "Frontend Quiz App solution for Frontend Mentor Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ModeToggle />
        {children}
      </body>
    </html>
  );
}
