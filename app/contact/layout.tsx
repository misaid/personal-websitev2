import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Mohamed Said about full-stack software development opportunities and collaborations.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
