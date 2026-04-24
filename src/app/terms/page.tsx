import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Smudgz",
  description: "Terms of Service for Smudgz Chrome extension",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          &larr; Back to Home
        </Link>

        <article className="prose prose-invert prose-purple max-w-none">
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-gray-400 mb-8">Last updated: April 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Agreement</h2>
            <p className="text-gray-300">
              By installing or using Smudgz, you agree to these terms. If you don&apos;t agree, don&apos;t use it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Smudgz Is</h2>
            <p className="text-gray-300">
              Smudgz is a Chrome extension that lets you draw, annotate, and play games on webpages with other users. We provide the platform—you&apos;re responsible for how you use it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Account</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>You need a Google account to use Smudgz</li>
              <li>You&apos;re responsible for your account activity</li>
              <li>One account per person</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Rules</h2>
            <p className="text-gray-300 mb-4"><strong>Don&apos;t use Smudgz to:</strong></p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
              <li>Draw or write anything illegal</li>
              <li>Harass, threaten, or bully other users</li>
              <li>Post hate speech, slurs, or discriminatory content</li>
              <li>Share others&apos; personal information without consent</li>
              <li>Draw explicit sexual content on public pages</li>
              <li>Spam or flood pages with unwanted content</li>
              <li>Impersonate others</li>
              <li>Attempt to hack, exploit, or break the extension or our servers</li>
              <li>Interfere with other users&apos; experience</li>
            </ul>
            <p className="text-gray-300 italic">
              Basically: Don&apos;t be a jerk. If you wouldn&apos;t want someone doing it to you, don&apos;t do it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Content</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>You own what you create (drawings, annotations, courses)</li>
              <li>By posting content, you grant us a license to display it to other users—that&apos;s how the product works</li>
              <li>You&apos;re responsible for your content</li>
              <li>We can remove content that violates these terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Rights</h2>
            <p className="text-gray-300 mb-4">We can, at any time, without notice:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
              <li>Remove content that violates these terms</li>
              <li>Suspend or terminate accounts that violate these terms</li>
              <li>Modify or discontinue the service</li>
              <li>Update these terms</li>
            </ul>
            <p className="text-gray-300">
              We&apos;re not obligated to monitor all content, but we may.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Smudgz and its code, design, and branding belong to us</li>
              <li>You can&apos;t copy, modify, or redistribute the extension</li>
              <li>The websites you use Smudgz on belong to their respective owners—we have no affiliation with them</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimers</h2>
            <p className="text-gray-300 mb-4">
              Smudgz is provided <strong>&quot;as is&quot;</strong> without warranties of any kind.
            </p>
            <p className="text-gray-300 mb-2">We don&apos;t guarantee:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>The service will be available 24/7</li>
              <li>The service will be error-free</li>
              <li>Your content won&apos;t be lost</li>
              <li>Other users will behave appropriately</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">To the maximum extent permitted by law, we&apos;re not liable for:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
              <li>Any damages arising from your use of Smudgz</li>
              <li>Content posted by other users</li>
              <li>Loss of your data</li>
              <li>Actions taken by websites you use Smudgz on</li>
            </ul>
            <p className="text-gray-300">
              Our total liability is limited to the amount you paid us (which is $0 for free users).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-gray-300 mb-2">
              Smudgz uses Google Firebase. Your use of Firebase is subject to Google&apos;s terms.
            </p>
            <p className="text-gray-300">
              We&apos;re not responsible for third-party websites you use Smudgz on.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>You can stop using Smudgz anytime by uninstalling it</li>
              <li>We can terminate your access if you violate these terms</li>
              <li>Upon termination, your license to use Smudgz ends</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes</h2>
            <p className="text-gray-300">
              We may update these terms. Continued use after changes means you accept them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disputes</h2>
            <p className="text-gray-300">
              These terms are governed by the laws of Arkansas, USA. Any disputes will be resolved in the courts of Benton County, Arkansas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Severability</h2>
            <p className="text-gray-300">
              If any part of these terms is unenforceable, the rest still applies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-300">
              Questions or concerns? Contact us at{" "}
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
