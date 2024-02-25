import type { Metadata } from "next"
import "./globals.css"


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
      <body className="bg-light">
        {children}
      </body>
    </html>
  );
}
