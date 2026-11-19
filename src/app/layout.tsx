import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { portfolioConfig } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `${portfolioConfig.profile.name} — ${portfolioConfig.profile.title}`,
  description: portfolioConfig.profile.tagline,
  keywords: [
    "Suhail",
    "Full-Stack Developer",
    "Software Consultant",
    "Fleet Management Software",
    "Hajj and Umrah Booking Platform",
    "Next.js Developer",
    "React Engineer",
    "TypeScript",
  ],
  authors: [{ name: portfolioConfig.profile.name }],
  openGraph: {
    title: `${portfolioConfig.profile.name} — Portfolio`,
    description: portfolioConfig.profile.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('theme');
                if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-blue-600 selection:text-white transition-colors duration-200">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
