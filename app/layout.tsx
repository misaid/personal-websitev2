import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Balloons from "@/components/Balloons";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamedsaid.ca"),
  title: {
    default: "Mohamed Said | Full-Stack Software Developer",
    template: "%s | Mohamed Said",
  },
  description:
    "Mohamed Said is a full-stack software developer in Edmonton building secure, scalable web and mobile applications.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: "Mohamed Said",
    title: "Mohamed Said | Full-Stack Software Developer",
    description:
      "Full-stack software developer in Edmonton building secure, scalable web and mobile applications.",
  },
  twitter: {
    card: "summary",
    title: "Mohamed Said | Full-Stack Software Developer",
    description:
      "Full-stack software developer in Edmonton building secure, scalable web and mobile applications.",
  },
};

export const viewport: Viewport = {
  themeColor: "#11111b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-[#1e1e2e] focus:text-[#a6e3a1] focus:border focus:border-[#a6e3a1]/40 focus:px-3 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow">{children}</main>
        <Footer />
        <Balloons />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
