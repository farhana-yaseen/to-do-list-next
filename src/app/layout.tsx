import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Todo List",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-cover bg-center h-screen sm:bg-contain md:bg-cover lg:bg-cover bg-no-repeat min-h-screen" style={{ background: "url(/bg.jpg)" }}
      >
        {children}
      </body>
    </html>
  );
}
