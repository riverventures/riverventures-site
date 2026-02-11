import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "River Ventures | Venture Studio & Elite Advisory",
  description:
    "River Ventures is a venture studio and elite advisory firm based in Dubai. We provide strategic advisory, venture building, and deep expertise for fintech and crypto companies.",
  openGraph: {
    title: "River Ventures | Venture Studio & Elite Advisory",
    description: "Dubai-based venture studio and advisory firm specializing in fintech, crypto, and emerging technologies.",
    url: "https://riverventures.co",
  },
  keywords: ["venture capital", "advisory", "startup", "fintech", "crypto", "Dubai", "UAE", "venture studio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-body antialiased bg-primary text-text overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}