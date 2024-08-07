import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";


const poppins = Poppins({ subsets: ["latin"],weight:['400','500',"600","700","300"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${poppins.className}`}>
      <Header/>
        {children}
      </body>
    </html>
  );
}
