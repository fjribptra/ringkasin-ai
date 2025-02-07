import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HTML from "@/components/HTML";


const inter = Inter({
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "Ringkasin AI - Ringkas materi dengan bahasa yang gampang buat dipahami",
  description: "Ringkas materi dengan bahasa yang gampang buat dipahami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HTML>
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </HTML>
  );
}
