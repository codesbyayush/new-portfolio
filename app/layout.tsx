import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Ayush",
  description: "Created by Ayush Patel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-noise dark:bg-zinc-900 bg-white`}>
        <Providers>
          <Navbar />
          <div className="pt-24 sm:pt-32 px-12 max-w-6xl w-full mx-auto">{children}
          
          {/* <Footer /> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
