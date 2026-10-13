import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.riverventures.co"),
  title: "River Ventures | Home to Argus, Jade & UAE.fun",
  description: "Home to Argus, Jade and UAE.fun. AI consulting, practical learning and UAE relocation support. Based in Dubai, working globally.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "River Ventures | Home to Argus, Jade & UAE.fun",
    description: "Practical support for better business, everyday learning and a new life in the UAE.",
    url: "https://www.riverventures.co", siteName: "River Ventures", type: "website",
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
