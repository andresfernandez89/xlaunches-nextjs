import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Navbar from "./components/navbar/navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SpaceX liftoffs",
  description: "SpaceX astronomical liftoffs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "dark m-auto my-4 min-h-screen max-w-6xl bg-background px-4 font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
