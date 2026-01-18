import type { Metadata } from "next";
import { Instrument_Sans, Victor_Mono } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const victorMono = Victor_Mono({
  variable: "--font-victor-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CommonGood - Community Infrastructure for Mutual Aid",
  description:
    "An offline-capable, privacy-respecting platform for Minneapolis communities to share skills, coordinate mutual aid, and maintain communication during disruptions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${victorMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
