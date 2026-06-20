import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Prantik Bora | Software Engineer & Co-Founder",
  description: "Portfolio of Prantik Bora, showcasing software engineering, full-stack web development, and technical leadership.",
  keywords: ["Prantik Bora", "Software Engineer", "Full-Stack Developer", "Next.js Developer", "React Native", "Embedded Systems", "Co-Founder", "Erthad Pvt Ltd"],
  authors: [{ name: "Prantik Bora" }],
  creator: "Prantik Bora",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://prantikbora.com", // Assuming domain, update if needed
    title: "Prantik Bora | Software Engineer & Co-Founder",
    description: "Portfolio of Prantik Bora, showcasing software engineering, full-stack web development, and technical leadership.",
    siteName: "Prantik Bora Portfolio",
    images: [{
      url: "/og-image.jpg", 
      width: 1200,
      height: 630,
      alt: "Prantik Bora - Software Engineer"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prantik Bora | Software Engineer & Co-Founder",
    description: "Portfolio of Prantik Bora, showcasing software engineering, full-stack web development, and technical leadership.",
    creator: "@prantikbora", // Update with actual twitter handle if exists
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
<body className={`${poppins.variable} font-sans antialiased relative min-h-screen text-white`}>
  
  
  <div className="fixed inset-0 w-full h-full bg-[#050508] z-0 pointer-events-none">
    <StarsBackground />
    <ShootingStars />
  </div>

  
  <main className="relative z-10">
    {children}
  </main>
</body>
    </html>
  );
}