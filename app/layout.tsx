// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Prantik Bora | Software Engineer",
  description:
    "Portfolio of Prantik Bora, showcasing software engineering, full-stack web development, and technical leadership.",
  keywords: [
    "Prantik Bora",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Native",
    "Embedded Systems",
  ],
  authors: [{ name: "Prantik Bora" }],
  creator: "Prantik Bora",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://prantikbora.com", // Update this when you deploy
    title: "Prantik Bora | Software Engineer",
    description:
      "Portfolio of Prantik Bora, showcasing software engineering, full-stack web development, and technical leadership.",
    siteName: "Prantik Bora Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prantik Bora - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prantik Bora | Software Engineer",
    description:
      "Portfolio of Prantik Bora, showcasing software engineering, full-stack web development, and technical leadership.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} font-sans antialiased bg-slate-50 text-slate-900 text-lg selection:bg-blue-500/30`}
      >
        <main className="relative flex flex-col min-h-screen">{children}</main>
      </body>
    </html>
  );
}
