import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/lib/providers";

import NavBar from "./components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shapecraft",
  description: "Shapecraft hackathon project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <Providers>
          <body className={inter.className}>
            {/* <NavBar /> */}
            {children}
          </body>
        </Providers>
    </html>
  );
}