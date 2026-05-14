import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smudgz - Draw, Play & Connect on Any Webpage",
  description: "Turn any webpage into a playground. Draw, annotate, and play multiplayer games with friends on any website.",
  keywords: ["browser extension", "multiplayer", "drawing", "annotation", "games", "tag", "platformer"],
  openGraph: {
    title: "Smudgz - Draw, Play & Connect on Any Webpage",
    description: "Turn any webpage into a playground. Draw, annotate, and play multiplayer games with friends.",
    url: "https://smudgz.com",
    siteName: "Smudgz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smudgz - Draw, Play & Connect on Any Webpage",
    description: "Turn any webpage into a playground. Draw, annotate, and play multiplayer games with friends.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-[#0a192f] text-white`}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/90 backdrop-blur-md border-b border-cyan-400/10">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img src="/logo-white.png" alt="Smudgz" className="h-8" />
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/#features" className="text-sm text-cyan-200/70 hover:text-white transition">
                Features
              </Link>
              <Link href="/#faq" className="text-sm text-cyan-200/70 hover:text-white transition">
                FAQ
              </Link>
              <a
                href="https://chromewebstore.google.com/detail/smudgz/gfhnokmdeeneocjoifajjbcniidpfnnf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full text-sm font-medium hover:opacity-90 transition"
              >
                Add to Chrome
              </a>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          {children}
        </main>

        <footer className="border-t border-cyan-400/10 py-12 mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-cyan-200/50 text-sm">
                © 2026 Smudgz. All rights reserved.
              </div>
              <div className="flex items-center gap-6 text-sm text-cyan-200/50">
                <Link href="/press" className="hover:text-white transition">
                  Press
                </Link>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
                <a href="mailto:Bentonvillebiker@gmail.com" className="hover:text-white transition">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
