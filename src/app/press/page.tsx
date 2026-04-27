import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press Kit - Smudgz",
  description: "Press resources, brand assets, and media information for Smudgz - the browser extension that turns any webpage into a playground.",
};

export default function PressPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#112d4e] via-[#0a192f] to-[#0a192f]">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-cyan-200/70 hover:text-white transition text-sm mb-8 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Press Kit</h1>
          <p className="text-xl text-cyan-200/70 max-w-2xl mx-auto">
            Everything you need to write about Smudgz. Brand assets, screenshots, and the story behind the extension.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Quick Facts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#112d4e]/50 border border-cyan-400/10">
              <h3 className="font-semibold text-pink-400 mb-2">One-Liner</h3>
              <p className="text-cyan-200/80">
                Draw on any website. Run around on your drawings.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#112d4e]/50 border border-cyan-400/10">
              <h3 className="font-semibold text-pink-400 mb-2">Platform</h3>
              <p className="text-cyan-200/80">
                Chrome browser extension (Chromium-based browsers)
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#112d4e]/50 border border-cyan-400/10">
              <h3 className="font-semibold text-pink-400 mb-2">Price</h3>
              <p className="text-cyan-200/80">
                Free
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#112d4e]/50 border border-cyan-400/10">
              <h3 className="font-semibold text-pink-400 mb-2">Release</h3>
              <p className="text-cyan-200/80">
                2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#0a192f] via-[#0d2137] to-[#0a192f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">About Smudgz</h2>

          <div className="space-y-6 text-cyan-200/80">
            <p>
              <strong className="text-white">Short (50 words):</strong><br />
              Smudgz is a Chrome extension that lets you draw on any webpage. But here&apos;s the twist: a stick figure character appears and uses your drawings as platforms to run and jump on. Friends can see each other&apos;s doodles in real-time, turning the internet into a collaborative playground.
            </p>

            <p>
              <strong className="text-white">Medium (100 words):</strong><br />
              Smudgz transforms web browsing into a multiplayer playground. Draw directly on any webpage with multiple brush styles - solid, spray, rainbow, or glow. Your drawings aren&apos;t just art; they become physical platforms. A customizable stick figure character runs, jumps, and bounces across the page using website elements and your sketches as the level.
            </p>
            <p>
              The real magic happens with friends. Everyone on the same page sees each other in real-time. Play tag across Wikipedia. Build obstacle courses on news sites. Leave annotations and reactions. It&apos;s recess for the internet, built by a dad who wanted to make browsing fun again.
            </p>

            <p>
              <strong className="text-white">Full (200 words):</strong><br />
              Smudgz is a free Chrome extension that reimagines what a web browser can be. At its core, it lets you draw on any webpage - but that&apos;s just the beginning.
            </p>
            <p>
              Every drawing you make becomes a physical surface. A stick figure character appears on the page, and you control it with arrow keys. The character can run across headers, bounce off buttons, and platform across your sketches. Draw a bridge to cross a gap. Build a staircase to reach the top of a page. The entire website becomes your playground.
            </p>
            <p>
              Multiplayer takes it further. Anyone with Smudgz installed who visits the same URL appears on your screen in real-time. Play tag (one player becomes &quot;it&quot; and chases others). Race through custom obstacle courses. Collaborate on drawings. React to each other&apos;s annotations.
            </p>
            <p>
              Smudgz was built by a solo developer - a 40-year-old dad who doesn&apos;t code for a living. The extension started as an experiment to make browsing more playful, tested by high schoolers who spread it through their school. No VC funding, no growth team - just a fun idea that stuck.
            </p>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">The Story</h2>
          <div className="p-8 rounded-2xl bg-[#112d4e]/50 border border-cyan-400/10 text-cyan-200/80 space-y-4">
            <p>
              I&apos;m a 40-year-old dad. I don&apos;t code for a living.
            </p>
            <p>
              Smudgz started as a &quot;what if&quot; project. What if you could doodle on any website? What if those doodles became platforms you could jump on? What if other people could see you running around?
            </p>
            <p>
              My high school daughter became my first tester. She showed her friends. They showed their friends. Suddenly kids at her school were drawing on their homework and playing tag across Wikipedia articles.
            </p>
            <p>
              There&apos;s no startup behind this. No investors. No growth team. Just a fun idea that people seem to enjoy.
            </p>
            <p className="text-right text-cyan-200/50 italic">
              - The Smudgz Creator
            </p>
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#0a192f] via-[#0d2137] to-[#0a192f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Brand Assets</h2>

          {/* Logos */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-4 text-pink-400">Logos</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl bg-[#0a192f] border border-cyan-400/10 flex flex-col items-center">
                <img src="/logo-white.png" alt="Smudgz Logo White" className="h-16 mb-4" />
                <span className="text-sm text-cyan-200/50">White (for dark backgrounds)</span>
                <a href="/logo-white.png" download className="mt-3 text-sm text-pink-400 hover:text-pink-300 transition">
                  Download PNG
                </a>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-cyan-400/10 flex flex-col items-center">
                <img src="/logo-color.png" alt="Smudgz Logo Color" className="h-16 mb-4" />
                <span className="text-sm text-gray-500">Color (for light backgrounds)</span>
                <a href="/logo-color.png" download className="mt-3 text-sm text-pink-500 hover:text-pink-400 transition">
                  Download PNG
                </a>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 border border-cyan-400/10 flex flex-col items-center">
                <img src="/logo-white.png" alt="Smudgz Logo on Pink" className="h-16 mb-4" />
                <span className="text-sm text-white/70">On brand pink</span>
              </div>
            </div>
          </div>

          {/* Colors */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-4 text-pink-400">Brand Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="h-20 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 mb-2"></div>
                <p className="text-sm font-mono text-cyan-200/70">#ec4899 → #db2777</p>
                <p className="text-xs text-cyan-200/50">Primary Pink</p>
              </div>
              <div>
                <div className="h-20 rounded-xl bg-[#0a192f] border border-cyan-400/20 mb-2"></div>
                <p className="text-sm font-mono text-cyan-200/70">#0a192f</p>
                <p className="text-xs text-cyan-200/50">Background Navy</p>
              </div>
              <div>
                <div className="h-20 rounded-xl bg-cyan-400 mb-2"></div>
                <p className="text-sm font-mono text-cyan-200/70">#22d3ee</p>
                <p className="text-xs text-cyan-200/50">Accent Cyan</p>
              </div>
              <div>
                <div className="h-20 rounded-xl bg-white mb-2"></div>
                <p className="text-sm font-mono text-cyan-200/70">#ffffff</p>
                <p className="text-xs text-cyan-200/50">Text White</p>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">Typography</h3>
            <div className="p-6 rounded-2xl bg-[#112d4e]/50 border border-cyan-400/10">
              <p className="text-cyan-200/80">
                <strong className="text-white">Primary Font:</strong> Inter<br />
                <span className="text-cyan-200/50">Used for all UI and body text. Available on Google Fonts.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
          <p className="text-cyan-200/60 mb-8">
            High-resolution screenshots available upon request. Email us and we&apos;ll send over whatever you need.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-video rounded-2xl bg-[#112d4e]/50 border border-cyan-400/10 flex items-center justify-center text-cyan-200/30">
              Drawing on a webpage
            </div>
            <div className="aspect-video rounded-2xl bg-[#112d4e]/50 border border-cyan-400/10 flex items-center justify-center text-cyan-200/30">
              Multiplayer tag game
            </div>
            <div className="aspect-video rounded-2xl bg-[#112d4e]/50 border border-cyan-400/10 flex items-center justify-center text-cyan-200/30">
              Character customization
            </div>
            <div className="aspect-video rounded-2xl bg-[#112d4e]/50 border border-cyan-400/10 flex items-center justify-center text-cyan-200/30">
              Course builder
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#0a192f] via-[#0d2137] to-[#0a192f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Demo Video</h2>
          <div className="aspect-video rounded-2xl border border-cyan-400/20 overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/XLi20ZYcniw"
              title="Smudgz Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-cyan-200/60 mb-8">
            Writing about Smudgz? Have questions? Need custom assets or an interview?
          </p>
          <a
            href="mailto:Bentonvillebiker@gmail.com?subject=Smudgz Press Inquiry"
            className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full text-lg font-semibold hover:opacity-90 transition shadow-lg shadow-pink-500/25"
          >
            Email Us
          </a>
          <p className="mt-6 text-cyan-200/40 text-sm">
            Bentonvillebiker@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}
