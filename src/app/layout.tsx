import type { Metadata } from "next";
import "./globals.css";
import BackgroundVideo from "@/components/BackgroundVideo";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "47 Agent System | Fully Automated Agency",
  description: "Deploy an AI system that replaces your entire agency workflow using 47 interconnected AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@1,700&family=Kanit:ital,wght@1,700;1,800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <BackgroundVideo />
        {children}
        <Footer />
      </body>
    </html>
  );
}
