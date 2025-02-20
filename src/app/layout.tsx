import type { Metadata } from "next";
import React from 'react'
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
const Provider = dynamic(() => import("@/providers"), {
  ssr: false,
});

import "./globals.css";

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
      <body className={`${inter.className} bg-gray-800 relative`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}

