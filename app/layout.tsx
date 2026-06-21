import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SECURE Tool Company | Solving the World's Greatest Challenges",
  description:
    "SECURE Tool Company — parent of SECURE Blue and SECURE Cargo Control. Next-generation IoT tools and services solving the world's greatest challenges.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.className} bg-[#0a0c10] text-zinc-400 selection:bg-blue-500/30`}
      >
        {children}
      </body>
    </html>
  );
}