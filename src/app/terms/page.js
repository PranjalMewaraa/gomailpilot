export const metadata = {
  title: "Terms of Service | A2z Mail Hosting",
  description:
    "Read the terms that govern use of A2z Mail Hosting email hosting services.",
};

export default function TermsPage() {
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
          <h1 className="section-heading">Terms of Service</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: March 30, 2026</p>

          <div className="mt-8 space-y-8 text-sm leading-7 text-slate-600 sm:text-base">
            <section>
              <h2 className="text-xl font-bold text-slate-950">Service overview</h2>
              <p className="mt-3">
                A2z Mail Hosting provides business email hosting and related support services. By
                using the service, you agree to these terms and any applicable policies
                referenced on this site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">Account responsibility</h2>
              <p className="mt-3">
                You are responsible for maintaining accurate account information, protecting
                login credentials, and ensuring that your use of the service complies with all
                applicable laws, regulations, and third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">Acceptable use</h2>
              <p className="mt-3">
                You may not use the service for spam, phishing, malware distribution,
                fraudulent activity, illegal content, or any activity that harms service
                performance, infrastructure stability, or other users.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">Billing and cancellation</h2>
              <p className="mt-3">
                Paid plans are billed according to the selected subscription terms. Unless
                otherwise stated, fees are non-refundable after service activation. You may
                cancel future renewals at any time, but service access may continue only through
                the end of the active billing period.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">Availability and support</h2>
              <p className="mt-3">
                We work to maintain reliable uptime and timely support, but uninterrupted or
                error-free service cannot be guaranteed at all times. Maintenance, third-party
                provider issues, abuse prevention, or emergency actions may affect availability.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">Backup disclaimer</h2>
              <p className="mt-3">
                A2z Mail Hosting performs backups frequently, generally every 12 hours, as part of
                its service operations. These backups are intended to improve resilience and
                recovery options, but they do not constitute a 100% guarantee of preservation,
                restoration, or uninterrupted access to customer data in all situations. In rare
                circumstances, backup copies may be unavailable, incomplete, delayed, damaged,
                or not recoverable due to system failure, user actions, security incidents,
                third-party provider issues, or other exceptional events. Customers remain
                responsible for maintaining any additional independent backups they consider
                necessary for business continuity or compliance requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">Limitation of liability</h2>
              <p className="mt-3">
                To the maximum extent permitted by law, A2z Mail Hosting is not liable for
                indirect, incidental, special, or consequential damages arising from use of the
                service, including data loss, service interruptions, or business disruption.
              </p>
              <p className="mt-3">
                This limitation includes, without limitation, loss of emails, loss of backup
                copies, restoration failures, or preservation issues, even where periodic
                backups are offered as part of the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">Changes to these terms</h2>
              <p className="mt-3">
                We may update these terms from time to time. Continued use of the service after
                an update becomes effective constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">Contact</h2>
              <p className="mt-3">
                Questions about these terms can be sent to{" "}
                <a
                  href="mailto:info@a2zcloud.net"
                  className="font-semibold text-emerald-600"
                >
                  info@a2zcloud.net
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
