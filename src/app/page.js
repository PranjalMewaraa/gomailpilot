"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "₹249",
    subtitle: "Perfect for small teams getting started",
    storage: "10 GB Storage",
    accounts: "10 Email Accounts",
    forwarders: "10 Email Forwarders",
    cta: "Start Starter Plan",
    featured: false,
  },
  {
    name: "Growth",
    price: "₹399",
    subtitle: "Built for growing businesses that need room to scale",
    storage: "20 GB Storage",
    accounts: "20 Email Accounts",
    forwarders: "10 Email Forwarders",
    cta: "Start Growth Plan",
    featured: true,
  },
  {
    name: "Business",
    price: "₹699",
    subtitle: "For busy teams that need more capacity and control",
    storage: "50 GB Storage",
    accounts: "30 Email Accounts",
    forwarders: "15 Email Forwarders",
    cta: "Start Business Plan",
    featured: false,
  },
  {
    name: "Enterprise",
    price: "₹1199",
    subtitle: "High-volume email hosting for serious operations",
    storage: "100 GB Storage",
    accounts: "50 Email Accounts",
    forwarders: "30 Email Forwarders",
    cta: "Start Enterprise Plan",
    featured: false,
  },
];

const commonPlanFeatures = [
  "Free SSL",
  "Daily Offsite Backup",
  "3-Day Backup Restore",
  "Easy Control Panel",
];

const featureCards = [
  {
    title: "Secure & Reliable",
    description:
      "Free SSL for every domain with advanced spam protection baked in.",
    icon: <ShieldIcon />,
  },
  {
    title: "Daily Backups",
    description:
      "Automatic offsite backups with quick restore access for the last 3 days.",
    icon: <BackupIcon />,
  },
  {
    title: "Fast Performance",
    description:
      "Optimized delivery infrastructure with minimal downtime and smooth inbox access.",
    icon: <BoltIcon />,
  },
  {
    title: "Easy Control Panel",
    description:
      "A beginner-friendly dashboard to manage accounts, passwords, and routing.",
    icon: <PanelIcon />,
  },
  {
    title: "Email Forwarding",
    description:
      "Route messages anywhere with forwarder limits matched to your chosen plan.",
    icon: <ForwardIcon />,
  },
  {
    title: "Human Support",
    description:
      "Ticket and email support with quick help from real people, not bots.",
    icon: <SupportIcon />,
  },
];

const audiences = [
  "Small business owners",
  "Agencies",
  "Freelancers",
  "Local shops",
];

const trustedBrands = [
  {
    name: "Aditya Rathore World",
    src: "/adityarathoreworld.png",
  },
  {
    name: "SerpFit",
    src: "/SerpFit.png",
  },
  {
    name: "Rank Brew",
    src: "/rank-brew.png",
  },
  {
    name: "Vrishaba",
    src: "/vrishaba.png",
  },
  {
    name: "TLG Gaming",
    src: "/tlggaming.png",
  },
  {
    name: "VGAII",
    src: "/vgaii.jpeg",
  },
  {
    name: "Gurutmaan",
    src: "/gurutmaan.png",
  },
];

const comparisons = [
  {
    label: "Starting price",
    us: "₹249/month",
    them: "Often ₹1500+",
  },
  {
    label: "Setup",
    us: "One-click onboarding",
    them: "More moving parts",
  },
  {
    label: "Control",
    us: "Full domain and mailbox control",
    them: "Locked into a larger ecosystem",
  },
  {
    label: "Support",
    us: "Fast help for small businesses",
    them: "Shared support queues",
  },
];

export default function Home() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [hasScrolled, setHasScrolled] = useState(false);
  const [supportForm, setSupportForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSupportChange = (event) => {
    const { name, value } = event.target;

    setSupportForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSupportSubmit = (event) => {
    event.preventDefault();

    const subject = `Go Mail Pilot Support Query from ${supportForm.name || "Website Visitor"}`;
    const body = [
      `Name: ${supportForm.name || "-"}`,
      `Email: ${supportForm.email || "-"}`,
      `Company: ${supportForm.company || "-"}`,
      "",
      "Query:",
      supportForm.message || "-",
    ].join("\n");

    window.location.href = `mailto:support@gomailpilot.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-[var(--color-canvas)] text-[var(--color-ink)]">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          hasScrolled
            ? "border-b border-black/6 bg-white/92 shadow-[0_16px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/width_308.webp"
              alt="Go Mail Pilot logo"
              width={144}
              height={42}
              priority
              className="h-9 w-auto sm:h-10"
            />
            <div>
              <p className="font-[family-name:var(--font-display)] text-lg font-extrabold leading-none">
                Go Mail Pilot
              </p>
              <p className="text-xs text-slate-500">
                Professional email hosting made simple
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
            <a href="#plans" className="transition hover:text-slate-950">
              Plans
            </a>
            <a href="#features" className="transition hover:text-slate-950">
              Features
            </a>
            <a href="#support" className="transition hover:text-slate-950">
              Support
            </a>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="#support"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-900"
            >
              Talk to Support
            </a>
            <a
              href="#plans"
              className="rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(34,197,94,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(34,197,94,0.38)]"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="overflow-x-clip">
        <section className="relative isolate px-4 pt-28 pb-18 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
          <div className="hero-glow absolute top-20 left-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full" />
          <div className="grid-pattern absolute inset-0 -z-20 opacity-70" />

          <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-[0_12px_28px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Starting at just ₹249/month
              </div>

              <h1 className="font-[family-name:var(--font-display)] text-5xl font-extrabold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
                Professional Business Email Hosting That Just Works
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Secure, fast, and affordable email hosting with daily backups,
                free SSL, and an easy control panel starting at just{" "}
                <span className="font-bold text-emerald-600">₹249/month</span>.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#plans"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-7 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(34,197,94,0.28)] transition duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(34,197,94,0.36)]"
                >
                  Get Started
                </a>
                <a
                  href="#support"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-7 py-4 text-base font-semibold text-slate-900 transition duration-300 ease-in-out hover:-translate-y-0.5 hover:border-slate-900"
                >
                  Talk to Support
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
                <TrustItem label="No technical skills needed" />
                <TrustItem label="Instant setup" />
                <TrustItem label="99.9% uptime" />
              </div>

              <p className="mt-5 text-sm font-medium text-slate-500">
                Starting ₹249 only • No setup cost • Cancel anytime
              </p>
            </div>

            <div className="relative">
              <div className="absolute -top-10 right-6 h-28 w-28 rounded-full bg-emerald-200/60 blur-3xl" />
              <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
                <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/70 bg-white/90 px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Inbox Overview
                    </p>
                    <p className="text-xs text-slate-500">
                      pilot@yourbusiness.com
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    <ShieldIcon small />
                    Verified
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    ["New client inquiry", "Delivered securely", "1m ago"],
                    ["Invoice approval", "Spam filtered", "8m ago"],
                    ["Team update", "Backed up offsite", "16m ago"],
                  ].map(([subject, status, time]) => (
                    <div
                      key={subject}
                      className="rounded-2xl border border-white/70 bg-white/88 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-semibold text-slate-900">
                            {subject}
                          </p>
                          <p className="mt-1 text-sm text-slate-500">
                            {status}
                          </p>
                        </div>
                        <p className="text-xs font-semibold text-slate-400">
                          {time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <StatCard value="99.9%" label="Uptime" />
                  <StatCard value="Daily" label="Backups" />
                  <StatCard value="SSL" label="Included" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="plans" className="px-4 py-18 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="section-kicker">Pricing</p>
                <h2 className="section-heading">
                  Simple Pricing That Grows With Your Business
                </h2>
                <p className="section-copy">
                  Choose the plan that fits today and scale up when your team
                  needs more storage, accounts, or forwarding capacity.
                </p>
              </div>

              <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
                {["monthly", "yearly"].map((cycle) => (
                  <button
                    key={cycle}
                    type="button"
                    onClick={() => setBillingCycle(cycle)}
                    className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition ${
                      billingCycle === cycle
                        ? "bg-slate-950 text-white"
                        : "text-slate-500 hover:text-slate-950"
                    }`}
                  >
                    {cycle}
                  </button>
                ))}
              </div>
            </div>

            <div className="-mx-4 mt-10 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
              <div className="flex snap-x snap-mandatory gap-5 lg:grid lg:grid-cols-4 py-4 lg:gap-5">
                {plans.map((plan) => (
                  <article
                    key={plan.name}
                    className={`group relative flex h-full w-[calc(100vw-2rem)] max-w-[22rem] shrink-0 snap-center flex-col rounded-[2rem] border bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)] sm:w-[28rem] lg:w-auto lg:max-w-none lg:shrink lg:snap-none ${
                      plan.featured
                        ? "scale-[1.02] border-emerald-400 pt-10 lg:pb-10"
                        : "border-slate-200"
                    }`}
                  >
                    {plan.featured ? (
                      <span className="absolute top-4 left-6 inline-flex rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white">
                        Most Popular
                      </span>
                    ) : null}

                    <div className="mt-3">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-950">
                          {plan.name}
                        </h3>
                        {plan.featured ? (
                          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                            Recommended
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {plan.subtitle}
                      </p>
                    </div>

                    <div className="mt-6">
                      <p className="text-4xl font-black tracking-[-0.04em] text-slate-950">
                        {plan.price}
                        <span className="text-base font-semibold text-slate-500">
                          /month
                        </span>
                      </p>
                      <p className="mt-2 text-sm font-medium text-emerald-600">
                        {billingCycle === "yearly"
                          ? "Yearly billing available"
                          : "Monthly billing active"}
                      </p>
                    </div>

                    <ul className="mt-8 space-y-3 text-sm text-slate-600">
                      {[
                        plan.storage,
                        plan.accounts,
                        ...commonPlanFeatures,
                        plan.forwarders,
                      ].map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckIcon />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#final-cta"
                      className={`mt-8 inline-flex justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ease-in-out ${
                        plan.featured
                          ? "bg-[var(--color-accent)] text-white shadow-[0_18px_36px_rgba(34,197,94,0.28)] hover:-translate-y-0.5"
                          : "border border-slate-300 text-slate-900 hover:-translate-y-0.5 hover:border-slate-900"
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="#final-cta"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white transition duration-300 ease-in-out hover:-translate-y-0.5"
              >
                Start Now - Instant Activation
              </a>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="bg-[var(--color-surface)] px-4 py-18 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="section-kicker">Features</p>
              <h2 className="section-heading">
                Everything You Need for Professional Email
              </h2>
              <p className="section-copy">
                Built to feel simple on day one and dependable every day after
                that.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {featureCards.map((feature) => (
                <article
                  key={feature.title}
                  className="group rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-sm transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_26px_56px_rgba(15,23,42,0.12)]"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-950">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-18 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="section-kicker">Why Choose Us</p>
              <h2 className="section-heading">
                Why Pay ₹1500 When ₹249 Does the Job?
              </h2>
              <p className="section-copy">
                Go Mail Pilot keeps the essentials front and center: reliable
                hosting, clean setup, and support that understands smaller
                businesses.
              </p>

              <ul className="mt-8 space-y-4 text-sm font-medium text-slate-700">
                {[
                  "No hidden costs",
                  "One-click email setup",
                  "Full control with no locked ecosystem",
                  "Faster support for small businesses",
                  "Affordable for startups and local businesses",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 px-6 py-4 text-sm font-semibold text-slate-500">
                <span>Feature</span>
                <span className="text-emerald-700">Go Mail Pilot</span>
                <span>Them</span>
              </div>
              <div className="divide-y divide-slate-200">
                {comparisons.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-3 items-center px-6 py-5 text-sm text-slate-700"
                  >
                    <span className="font-semibold text-slate-900">
                      {row.label}
                    </span>
                    <span className="font-semibold text-emerald-600">
                      {row.us}
                    </span>
                    <span className="text-slate-400">{row.them}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-surface)] px-4 py-18 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="section-kicker">Built For</p>
              <h2 className="section-heading">Built for Growing Businesses</h2>
              <p className="section-copy">
                Launch branded email addresses like{" "}
                <span className="font-semibold text-slate-950">
                  info@yourbusiness.com
                </span>{" "}
                in minutes and give your business a more professional first
                impression.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {audiences.map((audience) => (
                  <div
                    key={audience}
                    className="rounded-[1.5rem] border border-white/80 bg-white/85 px-5 py-4 text-base font-semibold text-slate-800 shadow-[0_16px_40px_rgba(15,23,42,0.05)]"
                  >
                    {audience}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-[2rem] p-8">
              <div className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                Professional identity in minutes
              </div>
              <div className="mt-6 space-y-4">
                {[
                  "Connect your domain",
                  "Create your mailboxes",
                  "Start sending from a branded address",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-start gap-4 rounded-2xl bg-white/88 p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-950">{step}</p>
                      <p className="mt-1 text-sm text-slate-500">
                        Clean onboarding designed for owners, freelancers, and
                        lean teams.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="support" className="px-4 py-18 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_26px_70px_rgba(15,23,42,0.16)]">
              <p className="section-kicker !text-emerald-300">Support</p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-[-0.04em]">
                Real Support. Real Humans.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
                Fast issue resolution, human support, and practical help through
                ticket and email whenever you need it.
              </p>

              <div className="mt-8 flex items-center gap-4 rounded-[1.5rem] bg-white/8 p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-xl font-black text-white">
                  GP
                </div>
                <div>
                  <p className="text-lg font-bold">Support team online</p>
                  <p className="text-sm text-slate-300">
                    Average response time under 30 minutes
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
                  Contact options
                </p>
                <div className="mt-4 space-y-3 text-sm text-slate-300">
                  <a
                    href="mailto:support@gomailpilot.com"
                    className="flex items-center justify-between rounded-2xl bg-white/6 px-4 py-3 transition hover:bg-white/10"
                  >
                    <span>Email support</span>
                    <span className="font-semibold text-white">
                      support@gomailpilot.com
                    </span>
                  </a>
                  <a
                    href="https://wa.me/918766346052"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl bg-white/6 px-4 py-3 transition hover:bg-white/10"
                  >
                    <span>WhatsApp support</span>
                    <span className="font-semibold text-white">
                      +91 87663 46052
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSupportSubmit}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="section-kicker">Query Form</p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-[-0.04em] text-slate-950">
                    Send us your question
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    Fill this out and we&apos;ll open your email client with the
                    full query, ready to send to our team.
                  </p>
                </div>
                <div className="hidden rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 sm:inline-flex">
                  Under 30 min avg.
                </div>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Your name"
                  name="name"
                  type="text"
                  placeholder="Pranjal"
                  value={supportForm.name}
                  onChange={handleSupportChange}
                />
                <FormField
                  label="Email address"
                  name="email"
                  type="email"
                  placeholder="you@business.com"
                  value={supportForm.email}
                  onChange={handleSupportChange}
                />
                <FormField
                  label="Company"
                  name="company"
                  type="text"
                  placeholder="Your business name"
                  value={supportForm.company}
                  onChange={handleSupportChange}
                />
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-950">
                    Need a faster route?
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    For urgent setup help or pre-sales questions, tap the
                    WhatsApp button and chat with us directly.
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-900"
                >
                  Your query
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us what you need help with..."
                  value={supportForm.message}
                  onChange={handleSupportChange}
                  className="w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white"
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-500">
                  Ticket support, email support, and WhatsApp assistance for
                  quick queries.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(34,197,94,0.28)] transition hover:-translate-y-0.5"
                >
                  Send Query
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="bg-[var(--color-surface)] px-4 py-18 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="section-kicker">Trusted By</p>
              <h2 className="section-heading">Trusted by Growing Businesses</h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {trustedBrands.map((brand) => (
                <div
                  key={brand.name}
                  className="group flex min-h-28 items-center justify-center rounded-[1.5rem] border border-white/80 bg-white/85 px-5 py-4 shadow-[0_14px_35px_rgba(15,23,42,0.05)] transition duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                >
                  <Image
                    src={brand.src}
                    alt={`${brand.name} logo`}
                    width={220}
                    height={88}
                    className="h-12 w-auto max-w-full object-contain grayscale transition duration-300 ease-in-out group-hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="final-cta" className="px-4 pt-18 pb-28 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-slate-950 px-6 py-10 text-center text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)] sm:px-10 sm:py-14">
            <p className="section-kicker !text-emerald-300">Start Today</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
              Start Your Professional Email Today
            </h2>
            <p className="mt-4 text-base text-slate-300">
              No setup cost • Instant activation • Cancel anytime
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#plans"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-7 py-4 text-base font-semibold text-white transition duration-300 ease-in-out hover:-translate-y-0.5"
              >
                Get Started
              </a>
              <a
                href="#plans"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-base font-semibold text-white transition duration-300 ease-in-out hover:-translate-y-0.5 hover:border-white/50"
              >
                View Plans
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Image
              src="/width_308.webp"
              alt="Go Mail Pilot logo"
              width={170}
              height={50}
              className="h-10 w-auto"
            />
            <p className="mt-2 text-sm text-slate-500">
              Professional business email hosting that stays simple.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm font-medium text-slate-600">
            <a href="#plans" className="transition hover:text-slate-950">
              Plans
            </a>
            <a href="#features" className="transition hover:text-slate-950">
              Features
            </a>
            <a href="#support" className="transition hover:text-slate-950">
              Support
            </a>
            <a
              href="mailto:support@gomailpilot.com"
              className="transition hover:text-slate-950"
            >
              support@gomailpilot.com
            </a>
            <a href="/privacy-policy" className="transition hover:text-slate-950">
              Privacy Policy
            </a>
            <a href="/terms" className="transition hover:text-slate-950">
              Terms
            </a>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl text-sm text-slate-400">
          © 2026 Go Mail Pilot. All rights reserved.
        </div>
      </footer>

      <a
        href="#plans"
        className={`fixed right-5 bottom-5 z-40 hidden rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(34,197,94,0.35)] transition duration-300 ease-in-out sm:inline-flex ${
          hasScrolled
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        Start at ₹249
      </a>

      <a
        href="https://wa.me/918766346052"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed left-5 bottom-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_36px_rgba(37,211,102,0.35)] transition duration-300 ease-in-out hover:-translate-y-0.5 sm:inline-flex"
      >
        <WhatsAppIcon />
      </a>

      <div className="fixed inset-x-3 bottom-3 z-40 sm:hidden">
        <div className="flex items-center justify-between gap-3 rounded-full border border-white/80 bg-white/95 px-4 py-3 shadow-[0_20px_45px_rgba(15,23,42,0.14)] backdrop-blur-xl">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Starter
            </p>
            <p className="text-sm font-bold text-slate-950">₹249/mo</p>
          </div>
          <a
            href="#plans"
            className="inline-flex rounded-full bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-white"
          >
            Get Started
          </a>
        </div>
      </div>

      <a
        href="https://wa.me/918766346052"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed left-3 bottom-24 z-40 inline-flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_36px_rgba(37,211,102,0.35)] transition duration-300 ease-in-out hover:-translate-y-0.5 sm:hidden"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}

function FormField({ label, name, type, placeholder, value, onChange }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-slate-900"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-[1.25rem] border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white"
      />
    </div>
  );
}

function TrustItem({ label }) {
  return (
    <div className="inline-flex items-center gap-2">
      <CheckIcon />
      <span>{label}</span>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/70 bg-white/88 p-4 text-center">
      <p className="text-2xl font-extrabold tracking-[-0.04em] text-slate-950">
        {value}
      </p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500"
      fill="none"
    >
      <path
        d="M5 10.5 8.2 13.7 15 6.9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon({ small = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={small ? "h-4 w-4" : "h-6 w-6"}
      fill="none"
    >
      <path
        d="M12 3 5.5 5.6v5.8c0 4.1 2.8 7.9 6.5 9.6 3.7-1.7 6.5-5.5 6.5-9.6V5.6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m9.5 12 1.7 1.7 3.4-3.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BackupIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="M12 5a7 7 0 1 1-6.5 4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4 5v4h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8v4l2.5 1.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PanelIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M9 4v16" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M13 9h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13 14h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ForwardIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="M14 6h4v4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14 18 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M18 13v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="M8 15h8M8 11h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M18 17.5A8.5 8.5 0 1 0 7 20l-3 1 1-3A8.5 8.5 0 0 0 18 17.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M19.05 4.94A9.9 9.9 0 0 0 12.03 2C6.55 2 2.08 6.46 2.08 11.95c0 1.76.46 3.47 1.34 4.99L2 22l5.22-1.37a9.92 9.92 0 0 0 4.75 1.21h.01c5.48 0 9.95-4.46 9.95-9.95 0-2.66-1.04-5.16-2.88-6.95Zm-7.02 15.22h-.01a8.26 8.26 0 0 1-4.2-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.25 8.25 0 0 1-1.27-4.36c0-4.56 3.7-8.27 8.27-8.27 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.42 5.84c0 4.56-3.71 8.27-8.27 8.27Zm4.53-6.2c-.25-.12-1.47-.73-1.7-.81-.23-.09-.39-.12-.56.12-.16.24-.64.81-.78.97-.14.16-.29.18-.54.06-.25-.13-1.04-.38-1.99-1.21-.74-.66-1.24-1.47-1.38-1.72-.14-.24-.01-.37.11-.49.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.24-.84.82-.84 2 0 1.18.86 2.31.98 2.47.12.16 1.69 2.58 4.09 3.62.57.24 1.01.39 1.36.5.57.18 1.09.16 1.5.1.46-.07 1.47-.6 1.68-1.17.21-.58.21-1.07.15-1.17-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}
