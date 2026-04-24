import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Smudgz",
  description: "Privacy Policy for Smudgz Chrome extension",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          &larr; Back to Home
        </Link>

        <article className="prose prose-invert prose-purple max-w-none">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last updated: April 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Smudgz Does</h2>
            <p className="text-gray-300">
              Smudgz is a Chrome extension that lets you draw, annotate, and play games on any webpage with other users in real-time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What We Collect</h2>
            <p className="text-gray-300 mb-4">When you use Smudgz, we collect:</p>

            <h3 className="text-xl font-medium mb-2 text-purple-300">Account Information</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
              <li>Your Google account name, email, and profile photo (used for sign-in and displaying your profile to other users)</li>
            </ul>

            <h3 className="text-xl font-medium mb-2 text-purple-300">Content You Create</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
              <li>Drawings you make on webpages</li>
              <li>Text annotations and comments</li>
              <li>Reactions and replies to annotations</li>
              <li>Game courses you build</li>
            </ul>

            <h3 className="text-xl font-medium mb-2 text-purple-300">Usage Data</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Which pages you&apos;ve drawn on or annotated (stored as encoded URLs)</li>
              <li>Your player position during multiplayer games (temporary, real-time only)</li>
              <li>Who you follow and who follows you</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Data</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>To display your drawings and annotations to other users</li>
              <li>To sync multiplayer game positions in real-time</li>
              <li>To show your profile to other users</li>
              <li>To populate your activity feed with content from people you follow</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Who Can See Your Data</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li><strong>Your drawings and annotations</strong> are visible to anyone using Smudgz on the same webpage</li>
              <li><strong>Your profile</strong> (name, photo, bio) is visible to other Smudgz users</li>
              <li><strong>Your game activity</strong> is visible to other players on the same page</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-gray-300 mb-2">We use <strong>Google Firebase</strong> to:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
              <li>Authenticate your Google account</li>
              <li>Store your data in Firestore (cloud database)</li>
            </ul>
            <p className="text-gray-300">
              Your data is stored on Google&apos;s servers. See{" "}
              <a href="https://policies.google.com/privacy" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Google&apos;s Privacy Policy
              </a>{" "}
              for how they handle data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What We Don&apos;t Do</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>We don&apos;t sell your data</li>
              <li>We don&apos;t show you ads</li>
              <li>We don&apos;t track your browsing outside of Smudgz features</li>
              <li>We don&apos;t read page content—only what you explicitly highlight or annotate</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Your data stays until you delete it</li>
              <li>Drawings and annotations persist until you remove them</li>
              <li>Game positions are temporary and not stored long-term</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Deleting Your Data</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>You can delete individual drawings and annotations from within the extension</li>
              <li>To delete your entire account and all associated data, contact us at{" "}
                <a href="mailto:Bentonvillebiker@gmail.com" className="text-purple-400 hover:underline">
                  Bentonvillebiker@gmail.com
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-300">
              Smudgz is not intended for children under 13. We don&apos;t knowingly collect data from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update this policy. Continued use of Smudgz after changes means you accept the new policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-300">
              Questions? Contact us at{" "}
              <a href="mailto:Bentonvillebiker@gmail.com" className="text-purple-400 hover:underline">
                Bentonvillebiker@gmail.com
              </a>
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
