import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"],weight:['400','500',"600","700","300"] });

export const metadata: Metadata = {
  title: "Inzerát",
  description: "Nakupuj a prodávej",
};

export default function TasksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`${poppins.className}`}>
  {children}    
    </main>
  );
};
