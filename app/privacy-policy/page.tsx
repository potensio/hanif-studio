import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Hanif Studio",
  description:
    "Privacy Policy for Hanif Studio. Learn about our commitment to your privacy.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen relative bg-gray-100">
      {/* Hero Background */}
      <div className="absolute top-0 w-full z-0 h-[300px] blur-3xl overflow-hidden">
        <Image
          src="/mountain-purple.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-10">
        <Header />
        <main className="max-w-4xl mx-auto px-5 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-medium mb-4 tracking-tighter">
            Privacy Policy
          </h1>
          <p className="text-black/60 font-geist mb-8">
            Effective date: February 6, 2026
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                Introduction
              </h2>
              <p className="text-black/70 font-geist leading-relaxed mb-4">
                Welcome to Hanif Studio. This privacy policy explains how we
                handle information when you visit our portfolio website at
                https://hanif.studio.
              </p>
              <p className="text-black/70 font-geist leading-relaxed">
                Hanif Studio is a portfolio and showcase website. We are
                committed to protecting your privacy and being transparent about
                our practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                Information We Collect
              </h2>
              <p className="text-black/70 font-geist leading-relaxed mb-4">
                Our website is a static portfolio site. We do not actively
                collect, store, or process personal information from visitors.
              </p>
              <p className="text-black/70 font-geist leading-relaxed mb-4">
                When you visit our website, your browser may automatically
                provide certain technical information such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black/70 font-geist">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device type</li>
                <li>Pages visited and time spent on pages</li>
              </ul>
              <p className="text-black/70 font-geist leading-relaxed mt-4">
                This information is typically collected by web hosting services
                and is not personally identifiable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                Cookies
              </h2>
              <p className="text-black/70 font-geist leading-relaxed mb-4">
                Our website does not use cookies for tracking or advertising
                purposes. Any cookies that may be set are strictly necessary for
                the website to function properly (such as session management).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                Third-Party Services
              </h2>
              <p className="text-black/70 font-geist leading-relaxed mb-4">
                We do not use third-party analytics services, advertising
                networks, or tracking tools on this website.
              </p>
              <p className="text-black/70 font-geist leading-relaxed">
                If you contact us via email at hanifyaskur@gmail.com, your email
                address and any information you provide will be used solely to
                respond to your inquiry.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                Data Sharing
              </h2>
              <p className="text-black/70 font-geist leading-relaxed">
                We do not sell, trade, or share your personal information with
                third parties. Since we don't collect personal data through this
                website, there is no data to share.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                Your Rights
              </h2>
              <p className="text-black/70 font-geist leading-relaxed mb-4">
                Since we do not collect or store personal information through
                this website, there is no personal data for you to access,
                modify, or delete.
              </p>
              <p className="text-black/70 font-geist leading-relaxed">
                If you have contacted us via email and wish to have your
                correspondence deleted, please email us at hanifyaskur@gmail.com
                with your request.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                External Links
              </h2>
              <p className="text-black/70 font-geist leading-relaxed">
                Our website may contain links to external sites. We are not
                responsible for the privacy practices or content of these
                third-party websites. We encourage you to review their privacy
                policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                Children's Privacy
              </h2>
              <p className="text-black/70 font-geist leading-relaxed">
                Our website is not directed at children under the age of 13. We
                do not knowingly collect information from children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                Changes to This Privacy Policy
              </h2>
              <p className="text-black/70 font-geist leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated effective date.
              </p>
              <p className="text-black/70 font-geist leading-relaxed">
                We encourage you to review this Privacy Policy periodically for
                any updates.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                Contact Us
              </h2>
              <p className="text-black/70 font-geist leading-relaxed">
                If you have any questions about this Privacy Policy, please
                contact us at:{" "}
                <a
                  href="mailto:hanifyaskur@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  hanifyaskur@gmail.com
                </a>
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
