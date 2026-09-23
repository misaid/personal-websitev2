import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
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
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohamed Said",
    url: "https://mohamedsaid.ca",
    jobTitle: "Full-Stack Software Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Edmonton",
      addressRegion: "Alberta",
      addressCountry: "CA",
    },
    sameAs: [
      "https://www.linkedin.com/in/misaid",
      "https://www.github.com/misaid",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Alberta",
    },
    knowsAbout: [
      "TypeScript",
      "React",
      "Next.js",
      "Python",
      "Java",
      "PostgreSQL",
      "Docker",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex-col flex flex-grow`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
