import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import GrainOverlay from "@/components/GrainOverlay";
import ScrollTextReveal from "@/components/ScrollTextReveal";

export const metadata: Metadata = {
  title: "Agency 47 | AI Automation Agency",
  description:
    "We build AI agents, workflow automations, voice AI systems, and outreach pipelines, turning fragmented operations into self-running systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/switzer"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <GrainOverlay />
        <ScrollReveal />
        <ScrollTextReveal
          selectors={[
            ".cta-sub",
            ".about-text",
            ".blog-card-excerpt",
            ".portfolio-card-desc",
            ".pdetail-lede",
            ".pdetail-cta-text",
            ".post-hero-lede",
            ".article-p",
            ".post-author-card-text",
            ".offer-card-desc",
            ".service-description",
          ]}
        />
      </body>
    </html>
  );
}
