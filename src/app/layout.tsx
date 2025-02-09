import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import HTML from "@/components/HTML";


const inter = Inter({
  subsets: ['latin'],
})
const montserrat = Montserrat({
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "Ringkasin AI - Summarize article in language that is easy to understand",
  description: "Summarize article in language that is easy to understand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HTML>
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </HTML>
  );
}
