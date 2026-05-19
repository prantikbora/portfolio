import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SparklesCore } from "@/components/ui/sparkles";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Prantik Bora | Software Engineer",
  description: "Portfolio of Prantik Bora, showcasing software engineering, full-stack web development, and embedded systems projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} font-sans antialiased relative min-h-screen bg-black text-white`}
      >
        <div className="fixed inset-0 z-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
