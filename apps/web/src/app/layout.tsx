import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Navigationbar from "@/components/Navigationbar";
import { Providers } from "./providers";
import ClientLayout from "@/components/ClientLayout"; // Import the new client component

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Suspense fallback={<div>Loading...</div>}>
            <ClientLayout>{children}</ClientLayout>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
