"use client";

import PersonalDetails from "@/components/sections/PersonalDetails";
import "./globals.css";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ryan Pereira | Full Stack Developer",
  description: "Ryan Pereira's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen min-h-screen mx-auto max-w-7xl">
          <div className="relative flex flex-row w-full h-full my-8 overflow-hidden bg-gray-50 ">
            {/* Personal Details Section */}
            <aside className="z-50 h-full w-80 bg-gray-50">
              <PersonalDetails />
            </aside>
            <main className="flex w-full h-full px-8 bg-gray-300">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
