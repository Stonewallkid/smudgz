import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[128px]" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm text-purple-300 mb-6">
            Now available on Chrome Web Store
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Turn Any Webpage Into a Playground
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Draw, annotate, and play multiplayer games with friends on any website. It&apos;s recess on the internet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold hover:opacity-90 transition shadow-lg shadow-purple-500/25"
            >
              Add to Chrome - It&apos;s Free
            </a>
            <Link
              href="#demo"
              className="px-8 py-4 border border-white/20 rounded-full text-lg font-medium hover:bg-white/5 transition"
            >
              Watch Demo
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            See It In Action
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Watch how Smudgz transforms your browsing experience into a collaborative playground.
          </p>
          <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl border border-white/10 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-4 mx-auto">
                <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-gray-400">Demo video coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Everything You Need to Play
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Smudgz packs multiplayer gaming, drawing tools, and annotations into one seamless experience.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4 text-2xl">
                🏃
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiplayer Platformer</h3>
              <p className="text-gray-400">
                Run and jump across any webpage. The site becomes your level - hop on buttons, climb headers, platform across the page.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 text-2xl">
                🏷️
              </div>
              <h3 className="text-xl font-semibold mb-2">Tag Game</h3>
              <p className="text-gray-400">
                One player is &quot;it.&quot; Chase each other across any website. No tag backs for 3 seconds. It&apos;s recess on the internet.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 text-2xl">
                🎨
              </div>
              <h3 className="text-xl font-semibold mb-2">Draw on Any Page</h3>
              <p className="text-gray-400">
                Sketch and doodle directly on webpages. Multiple brush styles: solid, spray, rainbow, glow. Drawings sync in real-time.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center mb-4 text-2xl">
                💬
              </div>
              <h3 className="text-xl font-semibold mb-2">Annotate the Web</h3>
              <p className="text-gray-400">
                Highlight text and leave comments. Add reactions. Start conversations. It&apos;s like a book club for the entire internet.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 text-2xl">
                🏗️
              </div>
              <h3 className="text-xl font-semibold mb-2">Build Courses</h3>
              <p className="text-gray-400">
                Create platformer courses on any webpage. Place checkpoints, trampolines, speed boosts, and spikes. Challenge friends to race.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-4 text-2xl">
                👤
              </div>
              <h3 className="text-xl font-semibold mb-2">Customize Your Character</h3>
              <p className="text-gray-400">
                Pick your color. Choose a hat - cap, top hat, crown, beanie. Add accessories like glasses or a mustache. Make it yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get Started in Seconds
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Three simple steps to transform your browsing experience.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-purple-400">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Install Extension</h3>
              <p className="text-gray-400 text-sm">
                Add Smudgz to Chrome from the Web Store. It&apos;s free and takes 2 seconds.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-purple-400">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Sign In</h3>
              <p className="text-gray-400 text-sm">
                Use your Google account. One click and you&apos;re in.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-purple-400">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Start Playing</h3>
              <p className="text-gray-400 text-sm">
                Click the Smudgz button on any page. Draw, play, and connect with others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Everything you need to know about Smudgz.
          </p>

          <div className="space-y-4">
            <details className="group p-6 rounded-2xl bg-white/5 border border-white/10">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold">Is Smudgz free?</span>
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-400">
                Yes! Smudgz is completely free to use. All features including multiplayer games, drawing tools, and annotations are available at no cost.
              </p>
            </details>

            <details className="group p-6 rounded-2xl bg-white/5 border border-white/10">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold">Does it work on all websites?</span>
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-400">
                Smudgz works on most websites. Some browser-restricted pages (like Chrome settings or the Web Store) don&apos;t allow extensions to run.
              </p>
            </details>

            <details className="group p-6 rounded-2xl bg-white/5 border border-white/10">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold">How do I play with friends?</span>
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-400">
                Just share the URL of any webpage! Anyone with Smudgz installed who visits the same page will see each other in real-time. No invite codes needed.
              </p>
            </details>

            <details className="group p-6 rounded-2xl bg-white/5 border border-white/10">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold">Can I draw on drawings?</span>
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-400">
                Yes! Your character can actually jump on drawings. Draw platforms to create your own levels, or collaborate with friends to build elaborate courses.
              </p>
            </details>

            <details className="group p-6 rounded-2xl bg-white/5 border border-white/10">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold">What&apos;s the tag game?</span>
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-400">
                One player becomes &quot;it&quot; (marked with NTB above their head). Tag another player by touching them. There&apos;s a 3-second cooldown to prevent immediate tag-backs. &quot;NO TAG BACKS&quot; flashes across the screen when someone gets tagged.
              </p>
            </details>

            <details className="group p-6 rounded-2xl bg-white/5 border border-white/10">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold">Is my data private?</span>
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-400">
                We only collect what&apos;s necessary to make the product work: your Google profile for sign-in, drawings you create, and game positions. We don&apos;t track your browsing or sell your data. Read our <Link href="/privacy" className="text-purple-400 hover:underline">Privacy Policy</Link> for details.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Play?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of users turning the internet into their playground.
          </p>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold hover:opacity-90 transition shadow-lg shadow-purple-500/25"
          >
            Add to Chrome - It&apos;s Free
          </a>
        </div>
      </section>
    </div>
  );
}
