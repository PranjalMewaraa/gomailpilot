export const metadata = {
  title: "Privacy Policy | Go Mail Pilot",
  description:
    "Read how Go Mail Pilot collects, uses, and protects customer information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-900"
        >
          Back to Home
        </a>

        <article className="mt-6 rounded-[2rem] border border-white/80 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-10">
          <p className="section-kicker">Legal</p>
          <h1 className="section-heading">Privacy Policy</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: March 28, 2026</p>

          <div className="mt-8 space-y-8 text-sm leading-7 text-slate-600 sm:text-base">
            <section>
              <h2 className="text-xl font-bold text-slate-950">Information we collect</h2>
              <p className="mt-3">
                We collect the information you provide when you contact us, sign up for a
                hosting plan, request support, or communicate with our team. This may include
                your name, email address, company name, billing details, and information
                related to your domain or mailbox setup.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">How we use your information</h2>
              <p className="mt-3">
                We use your information to provide email hosting services, manage your account,
                process payments, respond to support requests, improve service reliability, and
                communicate important updates about your subscription or service status.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">Data security</h2>
              <p className="mt-3">
                We use reasonable administrative and technical safeguards to protect customer
                information. While no system can promise absolute security, we work to protect
                account access, maintain secure infrastructure, and limit unauthorized access to
                stored information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">Sharing of information</h2>
              <p className="mt-3">
                We do not sell your personal information. We may share limited information with
                trusted service providers only when required to operate billing, support, email
                delivery, backups, or infrastructure related to the hosting service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">Retention</h2>
              <p className="mt-3">
                We retain information for as long as needed to provide the service, meet legal
                obligations, resolve disputes, and enforce our agreements. Support messages and
                account records may be retained for operational and compliance purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">Your choices</h2>
              <p className="mt-3">
                You can contact us to request account updates, corrections, or questions related
                to your personal information. Where applicable, we will take reasonable steps to
                fulfill those requests in accordance with our legal and operational obligations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">Contact</h2>
              <p className="mt-3">
                For privacy-related questions, contact{" "}
                <a
                  href="mailto:support@gomailpilot.com"
                  className="font-semibold text-emerald-600"
                >
                  support@gomailpilot.com
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
