import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Prantik Bora | Software Engineer & Co-Founder",
  description: "Portfolio of Prantik Bora, showcasing software engineering, full-stack web development, and technical leadership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} font-sans antialiased relative min-h-screen bg-[#050508] text-white`}
      >
        
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}