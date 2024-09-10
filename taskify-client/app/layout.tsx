import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/header/header";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import SessionProvider from "@/components/providers/session-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "taskify",
  description: "Track your everyday tasks efficiently with taskify",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Toaster />
          <Header />
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
