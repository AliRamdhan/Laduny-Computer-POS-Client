import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AgGridProvider } from "@/laduny/provider/AgGridProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Laduny Admin Panel",
  description: "Laduny POS Admin Panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AgGridProvider>{children}</AgGridProvider>
      </body>
    </html>
  );
}
