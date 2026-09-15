import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex-col flex flex-grow`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
