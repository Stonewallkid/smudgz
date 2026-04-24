import Link from "next/link";

export default function HomeV2() {
  return (
    <div className="flex flex-col bg-yellow-400 text-black min-h-screen -mt-16">
      {/* Custom nav for this page */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-yellow-400/95 backdrop-blur-sm border-b border-black/10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/v2" className="flex items-center">
            <img src="/logo.png" alt="Smudgz" className="h-8" />
          </Link>
          <div className="flex items-center gap-6">
            <Link href="#features" className="text-sm text-black/70 hover:text-black transition font-medium">
              Features
            </Link>
            <Link href="#faq" className="text-sm text-black/70 hover:text-black transition font-medium">
              FAQ
            </Link>
            <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-yellow-400 font-bold rounded-full text-sm hover:bg-gray-800 transition"
            >
              Add to Chrome
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 pt-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-400 rounded-full opacity-50 blur-2xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-500 rounded-full opacity-40 blur-3xl" />

        {/* Scribble decorations */}
        <div className="absolute top-1/4 right-1/4 w-20 h-1 bg-pink-500 rotate-45" />
        <div className="absolute bottom-1/3 left-1/4 w-16 h-1 bg-pink-500 -rotate-12" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <img src="/logo-color.png" alt="Smudgz" className="h-32 md:h-48 mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-black">
            Turn Any Webpage Into a Playground
          </h1>
          <p className="text-xl md:text-2xl text-black/70 mb-10 max-w-2xl mx-auto">
            Draw, annotate, and play multiplayer games with friends on any website. It&apos;s recess on the internet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-black text-yellow-400 rounded-full text-lg font-bold hover:bg-gray-800 transition shadow-lg"
            >
              Add to Chrome - It&apos;s Free
            </a>
            <Link
              href="#demo"
              className="px-8 py-4 border-2 border-black rounded-full text-lg font-bold hover:bg-black/5 transition"
            >
              Watch Demo
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-black/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="py-20 px-4 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            See It In Action
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Watch how Smudgz transforms your browsing experience.
          </p>
          <div className="aspect-video bg-gradient-to-br from-pink-500/30 to-yellow-500/30 rounded-2xl border border-white/10 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center mb-4 mx-auto">
                <svg className="w-10 h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-gray-400">Demo video coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            Everything You Need to Play
          </h2>
          <p className="text-black/60 text-center mb-16 max-w-2xl mx-auto">
            Smudgz packs multiplayer gaming, drawing tools, and annotations into one seamless experience.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature cards with pink accent */}
            {[
              { emoji: "🏃", title: "Multiplayer Platformer", desc: "Run and jump across any webpage. The site becomes your level." },
              { emoji: "🏷️", title: "Tag Game", desc: "One player is \"it.\" Chase each other across any website. No tag backs!" },
              { emoji: "🎨", title: "Draw on Any Page", desc: "Sketch and doodle directly on webpages with multiple brush styles." },
              { emoji: "💬", title: "Annotate the Web", desc: "Highlight text and leave comments. It's like a book club for the internet." },
              { emoji: "🏗️", title: "Build Courses", desc: "Create platformer courses with checkpoints, trampolines, and spikes." },
              { emoji: "👤", title: "Customize Your Character", desc: "Pick your color, choose a hat, add accessories. Make it yours." },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/80 border-2 border-black/10 hover:border-pink-500 transition shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-pink-400 flex items-center justify-center mb-4 text-2xl">
                  {feature.emoji}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-black/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-pink-400">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            Get Started in Seconds
          </h2>
          <p className="text-black/60 text-center mb-16 max-w-2xl mx-auto">
            Three simple steps to transform your browsing experience.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "1", title: "Install Extension", desc: "Add Smudgz to Chrome from the Web Store. It's free." },
              { num: "2", title: "Sign In", desc: "Use your Google account. One click and you're in." },
              { num: "3", title: "Start Playing", desc: "Click the Smudgz button on any page. Draw, play, connect." },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-black text-yellow-400 flex items-center justify-center mx-auto mb-4 text-2xl font-black">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-black/60 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-black text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Everything you need to know about Smudgz.
          </p>

          <div className="space-y-4">
            {[
              { q: "Is Smudgz free?", a: "Yes! Smudgz is completely free. All features included." },
              { q: "Does it work on all websites?", a: "Smudgz works on most websites. Some browser-restricted pages don't allow extensions." },
              { q: "How do I play with friends?", a: "Just share the URL! Anyone with Smudgz on the same page sees each other in real-time." },
              { q: "Can I draw platforms?", a: "Yes! Your character can jump on drawings. Create your own levels." },
              { q: "What's the tag game?", a: "One player is \"it\" (marked IT above their head). Tag by touching. 3-second cooldown. NO TAG BACKS flashes on screen!" },
            ].map((faq, i) => (
              <details key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/10">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-bold">{faq.q}</span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready to Play?
          </h2>
          <p className="text-xl text-black/70 mb-10 max-w-2xl mx-auto">
            Join thousands of users turning the internet into their playground.
          </p>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-black text-yellow-400 rounded-full text-lg font-bold hover:bg-gray-800 transition shadow-lg"
          >
            Add to Chrome - It&apos;s Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 py-12 bg-yellow-400">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-black/50 text-sm">
              © 2026 Smudgz. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-black/50">
              <Link href="/privacy" className="hover:text-black transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-black transition">
                Terms of Service
              </Link>
              <a href="mailto:Bentonvillebiker@gmail.com" className="hover:text-black transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Link back to original */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link href="/" className="px-4 py-2 bg-black text-white text-sm rounded-full shadow-lg hover:bg-gray-800 transition">
          View Option A (Dark)
        </Link>
      </div>
    </div>
  );
}
