import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.riverventures.co"),
  title: "River Ventures | Home to Argus & High Jade",
  description: "Home to Argus and High Jade. Founder-led AI consulting, training and education for businesses and individuals. Based in Dubai, working globally.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "River Ventures | Home to Argus & High Jade",
    description: "Two founder-led businesses helping organisations and individuals put AI to useful work.",
    url: "https://www.riverventures.co", siteName: "River Ventures", type: "website",
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
