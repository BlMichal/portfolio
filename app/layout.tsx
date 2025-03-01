import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "300"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Moderní web pomocí NEXT.JS",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${poppins.className}`}>
        <Toaster position="top-right" reverseOrder={false} />
        <Header />
        {children}
      </body>
    </html>
  );
}
