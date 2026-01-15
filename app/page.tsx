import SignupForm from "@/components/SignupForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="absolute left-0 top-0 -translate-y-12 bg-amber-600 px-4 py-2 text-white focus:translate-y-0"
      >
        Skip to main content
      </a>

      {/* Hero Section */}
      <section className="border-b border-stone-200 bg-white" id="main-content">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
              CommonGood
            </h1>
            <p className="mt-4 text-xl text-stone-600">
              Community infrastructure for mutual aid
            </p>
            <p className="mt-2 text-lg text-stone-500">
              Not a startup. Not a platform. A practice.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="prose prose-stone max-w-none">
            <h2 className="text-2xl font-bold text-stone-900">
              What We&rsquo;re Building
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              CommonGood is offline-capable, privacy-respecting software that
              helps Minneapolis communities share skills, coordinate mutual aid,
              and maintain communication during disruptions.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              We&rsquo;re building in the tradition of community bulletin
              boards, tool libraries, and neighborhood networks—digital tools
              that enhance (not replace) human connection.
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div className="rounded-lg border border-stone-200 bg-stone-50 p-6">
              <h3 className="font-semibold text-stone-900">Local-First</h3>
              <p className="mt-2 text-sm text-stone-600">
                Your data lives on your device. Works offline forever. No cloud
                dependency.
              </p>
            </div>
            <div className="rounded-lg border border-stone-200 bg-stone-50 p-6">
              <h3 className="font-semibold text-stone-900">
                Privacy by Design
              </h3>
              <p className="mt-2 text-sm text-stone-600">
                Pseudonyms, not real names. No tracking, no analytics, no
                surveillance.
              </p>
            </div>
            <div className="rounded-lg border border-stone-200 bg-stone-50 p-6">
              <h3 className="font-semibold text-stone-900">Community-Owned</h3>
              <p className="mt-2 text-sm text-stone-600">
                Open source. Self-hostable. Exportable. Your community, your
                rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 0: Community Building */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="rounded-lg border-2 border-amber-200 bg-amber-50 p-8">
            <h2 className="text-2xl font-bold text-stone-900">
              Phase 0: Building the Human Network First
            </h2>
            <p className="mt-4 text-lg text-stone-700">
              Before we build software, we&rsquo;re building community. Join us
              to:
            </p>
            <ul className="mt-4 space-y-2 text-stone-700 list-disc list-inside">
              <li>Test the SkillSwap concept with physical paper prototypes</li>
              <li>
                Meet neighbors interested in local resilience and mutual aid
              </li>
              <li>Shape the design of the platform before code is written</li>
              <li>
                Learn about offline-first architecture and community sovereignty
              </li>
            </ul>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-stone-900">
                Interested in participating?
              </h3>
              <p className="mt-2 text-stone-700">
                We&rsquo;re gathering neighbors in Minneapolis who want to build
                resilient local networks. First physical meetup details
                TBD&mdash;sign up to stay informed.
              </p>

              <SignupForm />
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl font-bold text-stone-900">
            Why Local-First Architecture Matters
          </h2>

          <div className="mt-8 space-y-6">
            <div className="border-l-4 border-stone-300 pl-6">
              <h3 className="font-semibold text-stone-900">
                Your Device as Source of Truth
              </h3>
              <p className="mt-2 text-stone-600">
                Traditional apps store everything in &ldquo;the
                cloud&rdquo;—when the server goes down, the app breaks.
                CommonGood works offline indefinitely because your phone is the
                authoritative source.
              </p>
            </div>

            <div className="border-l-4 border-stone-300 pl-6">
              <h3 className="font-semibold text-stone-900">
                Privacy by Architecture
              </h3>
              <p className="mt-2 text-stone-600">
                We don&rsquo;t ask you to trust our privacy policy. The
                architecture makes surveillance impossible—data stays on your
                device, encrypted, under your control.
              </p>
            </div>

            <div className="border-l-4 border-stone-300 pl-6">
              <h3 className="font-semibold text-stone-900">
                Community Sovereignty
              </h3>
              <p className="mt-2 text-stone-600">
                If the project ends, your community continues unaffected. Export
                your data, fork the code, run your own server. This is
                infrastructure you control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What This Isn't */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl font-bold text-stone-900">
            What CommonGood Is Not
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <p className="text-sm text-red-900">
                <span className="font-semibold">Not a startup:</span> No
                monetization, no growth metrics, no exit strategy. This is
                community infrastructure.
              </p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <p className="text-sm text-red-900">
                <span className="font-semibold">Not optimizing for scale:</span>{" "}
                We&rsquo;re building for trust networks, not transaction volume.
              </p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <p className="text-sm text-red-900">
                <span className="font-semibold">Not dependent on cloud:</span>{" "}
                Corporate servers can shut down. Your community&rsquo;s
                infrastructure shouldn&rsquo;t.
                {/* cSpell:ignore shouldn */}
              </p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <p className="text-sm text-red-900">
                <span className="font-semibold">Not surveillance tech:</span> No
                analytics, no tracking, no &ldquo;engagement metrics&rdquo;.
                Just tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl font-bold text-stone-900">
            Development Timeline
          </h2>
          <p className="mt-2 text-stone-600">
            This is a learning journey, not a product launch.
          </p>

          <ol className="mt-8 space-y-6">
            <li className="flex gap-4">
              <div className="shrink-0">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-900"
                  aria-label="Phase 0"
                >
                  0
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-stone-900">
                  Phase 0: Community Foundation (Weeks 1-4)
                </h3>
                <p className="mt-1 text-sm text-stone-600">
                  Physical meetups, paper prototypes, building the human network
                  first. Gathering 20+ interested neighbors.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <div className="shrink-0">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 font-bold text-stone-600"
                  aria-label="Phase 1"
                >
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-stone-900">
                  Phase 1: Local-Only MVP (Months 1-3)
                </h3>
                <p className="mt-1 text-sm text-stone-600">
                  Flutter app with offline-first database. Post skills, view
                  local posts. Works on airplane mode. No server, no sync—just
                  learning.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <div className="shrink-0">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 font-bold text-stone-600"
                  aria-label="Phase 2"
                >
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-stone-900">
                  Phase 2: Add Sync Layer (Months 3-6)
                </h3>
                <p className="mt-1 text-sm text-stone-600">
                  Background sync for multi-device support. Neighborhood-based
                  post sharing. Basic messaging.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <div className="shrink-0">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 font-bold text-stone-600"
                  aria-label="Phase 3 and beyond"
                >
                  3+
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-stone-900">
                  Phase 3+: Peer-to-Peer & Mesh (Months 6+)
                </h3>
                <p className="mt-1 text-sm text-stone-600">
                  Bluetooth device-to-device communication. Mesh network
                  research. True resilience for disruptions.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl font-bold text-stone-900">Questions</h2>

          <dl className="mt-8 space-y-6">
            <div>
              <dt className="font-semibold text-stone-900">
                Why not just use Nextdoor or Facebook groups?
              </dt>
              <dd className="mt-2 text-stone-600">
                Corporate platforms optimize for engagement and ad revenue, not
                community resilience. They break completely offline, require
                surveillance to function, and can shut down at any time.
                CommonGood is infrastructure you control.
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-stone-900">
                How is this different from other community apps?
              </dt>
              <dd className="mt-2 text-stone-600">
                Most apps treat offline mode as an afterthought. We&rsquo;re
                building offline-first from day one—your device is the source of
                truth, sync is optional enhancement. This isn&rsquo;t a feature,
                it&rsquo;s philosophy.
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-stone-900">
                When can I download the app?
              </dt>
              <dd className="mt-2 text-stone-600">
                We&rsquo;re in Phase 0 (community building). The app development
                starts in Month 1-3. This is deliberate—we&rsquo;re building the
                human network first, validating the concept with physical
                prototypes before writing code.
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-stone-900">
                Is this free? What&rsquo;s the business model?
              </dt>
              <dd className="mt-2 text-stone-600">
                Free forever. Open source. No monetization, no ads, no data
                selling. This is community infrastructure, not a business. Think
                of it like a community garden or tool library&mdash;sustained by
                those who use it.
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-stone-900">How can I help?</dt>
              <dd className="mt-2 text-stone-600">
                Sign up above to join Phase 0. We need people to test paper
                prototypes, provide feedback on the design, host meetups in
                their neighborhoods, and eventually beta test the app. No
                technical skills required.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-100">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">CommonGood</h3>
              <p className="mt-2 text-sm text-stone-300">
                Community infrastructure for mutual aid.
              </p>
              <p className="mt-1 text-sm text-stone-300">
                Minneapolis, Minnesota
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">Contact</h4>
              <p className="mt-2 text-sm text-stone-300">
                <a
                  href="mailto:hello@commongood.community"
                  className="hover:text-white transition-colors underline"
                  aria-label="Send email to hello@commongood.community"
                >
                  hello@commongood.community
                </a>
              </p>
              <p className="mt-4 text-xs text-stone-400">
                Community-led initiative
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-stone-700 pt-6 text-xs text-stone-400">
            <p>
              Documentation licensed under CC BY-SA 4.0. Code (when released)
              under AGPL-3.0.
            </p>
            <p className="mt-2">
              We&rsquo;re building this in public. All decisions, designs, and
              code will be transparent and auditable.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
