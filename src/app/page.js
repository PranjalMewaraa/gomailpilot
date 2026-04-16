"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const brand = {
  name: "A2z Mail Hosting",
  parent: "A2z Cloud",
  logo: "https://www.a2zcloud.net/wp-content/uploads/2024/11/logo.png",
  email: "info@a2zcloud.net",
  phone: "+91 8766346052",
  whatsapp: "https://wa.me/918766346052",
  website: "https://a2zcloud.net",
  domain: "mailmaster.a2zcloud.net",
  address: "Hig 6A, Shastripuram Sikandra Agra 282007, India",
  refundPolicy: "https://www.a2zcloud.net/refund-policy/",
  privacyPolicy: "https://www.a2zcloud.net/privacy-policy/",
  paymentButtonId: "pl_SdL4Fbmt8t2cu9",
};

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
    title: "Higher Sending Limits",
    description:
      "Need more sending volume? Dedicated IP upgrades are available with additional charges.",
    icon: <BoltIcon />,
  },
  {
    title: "Human Support",
    description:
      "Ticket, email, and WhatsApp support with real people for custom solutions and scaling needs.",
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
  {
    name: "Creditmaster",
    src: "/creditmaster.png",
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

const infrastructure = [
  {
    title: "Datacenter",
    description: "Brussels, Belgium",
  },
  {
    title: "Network Provider",
    description: "ANEXIA Internetdienstleistungs GmbH",
  },
  {
    title: "Enterprise-Grade Security",
    description: "Built for secure, professional business email operations.",
  },
  {
    title: "Redundant Power & Network",
    description: "Designed for dependable uptime and business continuity.",
  },
];

const guarantees = [
  "99.9% Uptime SLA",
  "30-Day Money Back",
  "Free Migration Service",
  "24/7 Technical Support",
];

export default function Home() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [hasScrolled, setHasScrolled] = useState(false);
  const [registrationForm, setRegistrationForm] = useState({
    name: "",
    email: "",
    mobile: "",
    plan: "Growth",
    domain: "",
    description: "",
  });
  const [registrationStatus, setRegistrationStatus] = useState({
    type: "idle",
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

  const handleRegistrationChange = (event) => {
    const { name, value } = event.target;

    setRegistrationForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleRegistrationSubmit = async (event) => {
    event.preventDefault();

    setRegistrationStatus({
      type: "loading",
      message: "Submitting your consultation request...",
    });

    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationForm),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Failed to submit registration request.",
        );
      }

      setRegistrationStatus({
        type: "success",
        message: "Consultation request submitted. We’ll contact you shortly.",
      });
      setRegistrationForm({
        name: "",
        email: "",
        mobile: "",
        plan: "Growth",
        domain: "",
        description: "",
      });
    } catch (error) {
      setRegistrationStatus({
        type: "error",
        message:
          error.message ||
          "Something went wrong while submitting your consultation request.",
      });
    }
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
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="h-9 w-auto sm:h-10"
            />
            <div>
              <p className="font-[family-name:var(--font-display)] text-lg font-extrabold leading-none">
                {brand.name}
              </p>
              <p className="text-xs text-slate-500">by {brand.parent}</p>
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
              href="#registration"
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
                Own Your Domain. Earn Their Trust.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Stop using @gmail.com for your business. Get secure,
                enterprise-grade email with 24/7 WhatsApp support and daily
                backups starting at just{" "}
                <span className="font-bold text-emerald-600">₹249/month</span>.
                Need higher sending limits or a dedicated IP? We also offer
                custom upgrades for growing teams.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#registration"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-7 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(34,197,94,0.28)] transition duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(34,197,94,0.36)]"
                >
                  Get Started Now - ₹249/mo
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
                <TrustItem label="99.9% Uptime Guarantee" />
                <TrustItem label="30-Day Money Back" />
              </div>

              <p className="mt-5 text-sm font-medium text-slate-500">
                Starting ₹249 only • No setup cost • Cancel anytime • Custom
                solutions available
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
                      info@yourbusiness.com
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
                  <StatCard value="24/7" label="Support" />
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
                  needs more storage, accounts, forwarding capacity, or higher
                  sending limits with a dedicated IP upgrade.
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

                    <p className="mt-5 text-xs leading-6 text-slate-500">
                      Higher sending limit with dedicated IP available on
                      request. Charges applicable.
                    </p>

                    <a
                      href="#registration"
                      className={`mt-8 inline-flex justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ease-in-out ${
                        plan.featured
                          ? "bg-[var(--color-accent)] text-white shadow-[0_18px_36px_rgba(34,197,94,0.28)] hover:-translate-y-0.5"
                          : "border border-slate-300 text-slate-900 hover:-translate-y-0.5 hover:border-slate-900"
                      }`}
                    >
                      {plan.cta}
                    </a>
                    <div className="mt-4 rounded-[1.25rem] border border-emerald-100 bg-emerald-50/60 p-3">
                      <p className="mb-3 text-center text-xs font-semibold text-emerald-700">
                        Pay now with Razorpay
                      </p>
                      <RazorpayPaymentButton />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="#registration"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white transition duration-300 ease-in-out hover:-translate-y-0.5"
              >
                Book Your Slot Now
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
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="section-kicker">Infrastructure</p>
                <h2 className="section-heading">
                  Enterprise-Grade Hosting Infrastructure
                </h2>
                <p className="section-copy">
                  Your business email runs on a professional hosting stack with
                  datacenter infrastructure in Brussels, Belgium and reliable
                  network operations from ANEXIA Internetdienstleistungs GmbH.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {infrastructure.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
                  >
                    <CheckIcon />
                    <h3 className="mt-4 text-lg font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-4 rounded-[2rem] border border-emerald-100 bg-emerald-50/60 p-5 sm:grid-cols-2 lg:grid-cols-4">
              {guarantees.map((guarantee) => (
                <div
                  key={guarantee}
                  className="rounded-[1.25rem] bg-white px-5 py-4 text-sm font-bold text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
                >
                  {guarantee}
                </div>
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
                A2z Mail Hosting keeps the essentials front and center: reliable
                hosting, clean setup, and support that understands smaller
                businesses, while still offering custom solutions when your
                requirements grow.
              </p>

              <ul className="mt-8 space-y-4 text-sm font-medium text-slate-700">
                {[
                  "No hidden costs",
                  "One-click email setup",
                  "Full control with no locked ecosystem",
                  "Faster support for small businesses",
                  "Affordable for startups and local businesses",
                  "Custom solutions for more emails and higher sending needs",
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
                <span className="text-emerald-700">A2z Mail Hosting</span>
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
                Set up your business email in under 5 minutes
              </div>
              <div className="mt-6 space-y-4">
                {[
                  {
                    title: "Connect your domain",
                    description:
                      "Easily link your domain with step-by-step DNS setup. No technical expertise required.",
                  },
                  {
                    title: "Create your mailboxes",
                    description:
                      "Set up custom email addresses for your team in seconds (e.g. info@, sales@, support@).",
                  },
                  {
                    title: "Start sending from a branded address",
                    description:
                      "Send and receive emails using your domain with reliable delivery and a professional identity.",
                  },
                ].map((step, index) => (
                  <div
                    key={step.title}
                    className="flex items-start gap-4 rounded-2xl bg-white/88 p-4"
                  >
                    <div className="flex h-10 w-10 aspect-square items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-950">
                        {step.title}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        {step.description}
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
                ticket, email, and WhatsApp whenever you need it, including
                custom solutions or more email accounts.
              </p>

              <div className="mt-8 flex items-center gap-4 rounded-[1.5rem] bg-white/8 p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-xl font-black text-white">
                  A2Z
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
                    href={`mailto:${brand.email}`}
                    className="flex items-center justify-between rounded-2xl bg-white/6 px-4 py-3 transition hover:bg-white/10"
                  >
                    <span>Email support</span>
                    <span className="font-semibold text-white">
                      {brand.email}
                    </span>
                  </a>
                  <a
                    href={brand.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl bg-white/6 px-4 py-3 transition hover:bg-white/10"
                  >
                    <span>WhatsApp support</span>
                    <span className="font-semibold text-white">
                      {brand.phone}
                    </span>
                  </a>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  Contact now for custom solutions, more email accounts, or
                  higher sending limits with dedicated IP options. 24/7 WhatsApp
                  Support is available.
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8">
                <p className="section-kicker">Contact Sales</p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-[-0.04em] text-slate-950">
                  Talk to us directly
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Need more email accounts, custom plans, higher sending limits,
                  or dedicated IP options? Contact our team directly for the
                  fastest response.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <a
                    href={`mailto:${brand.email}`}
                    className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-white"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-600">
                      Email
                    </p>
                    <p className="mt-3 text-lg font-bold text-slate-950">
                      {brand.email}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Best for business queries, sales requests, and migration
                      help.
                    </p>
                  </a>
                  <a
                    href={brand.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-white"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-600">
                      WhatsApp
                    </p>
                    <p className="mt-3 text-lg font-bold text-slate-950">
                      {brand.phone}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      24/7 WhatsApp support for quick help and urgent questions.
                    </p>
                  </a>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${brand.email}`}
                    className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(34,197,94,0.28)] transition hover:-translate-y-0.5"
                  >
                    Email Sales Team
                  </a>
                  <a
                    href={brand.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-900"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {[
                  "24/7 WhatsApp Support",
                  "Free Migration Service",
                  "30-Day Money Back",
                  "Custom solutions for growing teams",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
                  >
                    <CheckIcon />
                    <p className="mt-4 text-lg font-semibold text-slate-950">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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

        <section id="registration" className="px-4 py-18 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_26px_70px_rgba(15,23,42,0.16)]">
              <p className="section-kicker !text-emerald-300">
                Book a Consultation
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-[-0.04em]">
                Book your consultation or demo today.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Tell us what you need and our team will reach out to help you
                choose the right plan, discuss setup, and walk you through a
                live demo if needed.
              </p>
              <p className="mt-4 rounded-2xl bg-white/8 px-4 py-3 text-sm font-semibold text-emerald-200">
                Mail service domain: {brand.domain}
              </p>

              <div className="mt-8 rounded-[1.75rem] border border-emerald-400/20 bg-emerald-500/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
                  What we help with
                </p>
                <p className="mt-3 text-lg font-bold text-white">
                  Plan selection, migration, demos, and custom business email
                  setup
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  Share your requirements and we&apos;ll guide you to the right
                  plan, migration path, and any custom sending or mailbox needs.
                </p>
              </div>
            </div>

            <form
              onSubmit={handleRegistrationSubmit}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="section-kicker">Consultation Form</p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-[-0.04em] text-slate-950">
                    Book your demo
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    Share your details and preferred plan. We&apos;ll contact
                    you to discuss setup, demos, upgrades, or custom business
                    requirements.
                  </p>
                </div>
                <div className="hidden rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 sm:inline-flex">
                  Demo bookings open
                </div>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={registrationForm.name}
                  onChange={handleRegistrationChange}
                  required
                />
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@business.com"
                  value={registrationForm.email}
                  onChange={handleRegistrationChange}
                  required
                />
                <FormField
                  label="Mobile"
                  name="mobile"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={registrationForm.mobile}
                  onChange={handleRegistrationChange}
                  required
                />
                <div>
                  <label
                    htmlFor="plan"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Plan
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    value={registrationForm.plan}
                    onChange={handleRegistrationChange}
                    required
                    className="w-full rounded-[1.25rem] border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white"
                  >
                    {plans.map((plan) => (
                      <option key={plan.name} value={plan.name}>
                        {plan.name} - {plan.price}/month
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <FormField
                  label="Domain"
                  name="domain"
                  type="text"
                  placeholder="yourbusiness.com"
                  value={registrationForm.domain}
                  onChange={handleRegistrationChange}
                  required
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-semibold text-slate-900"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  placeholder="Tell us about your business email needs, number of mailboxes, or any custom requirements."
                  value={registrationForm.description}
                  onChange={handleRegistrationChange}
                  className="w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white"
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    Need more emails, migration help, or custom sending
                    capacity? Mention it in the description and we&apos;ll cover
                    it during the consultation.
                  </p>
                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    Backup notice: we perform backups frequently, typically
                    every 12 hours, but restoration and preservation cannot be
                    guaranteed 100% in rare exceptional cases. See our{" "}
                    <a
                      href={brand.privacyPolicy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-emerald-600"
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="/terms" className="font-semibold text-emerald-600">
                      Terms
                    </a>
                    .
                  </p>
                  {registrationStatus.type !== "idle" ? (
                    <p
                      className={`mt-2 text-sm font-medium ${
                        registrationStatus.type === "success"
                          ? "text-emerald-600"
                          : registrationStatus.type === "error"
                            ? "text-red-600"
                            : "text-slate-500"
                      }`}
                    >
                      {registrationStatus.message}
                    </p>
                  ) : null}
                </div>
                <button
                  type="submit"
                  disabled={registrationStatus.type === "loading"}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(34,197,94,0.28)] transition hover:-translate-y-0.5"
                >
                  {registrationStatus.type === "loading"
                    ? "Submitting..."
                    : "Book Consultation Now"}
                </button>
              </div>
            </form>
          </div>
        </section>

        <section id="final-cta" className="px-4 pt-18 pb-28 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-slate-950 px-6 py-10 text-center text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)] sm:px-10 sm:py-14">
            <p className="section-kicker !text-emerald-300">Start Today</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
              Start Your Professional Email Today
            </h2>
            <p className="mt-4 text-base text-slate-300">
              No setup cost • Instant activation • Cancel anytime • Contact now
              for custom solutions or more emails
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#registration"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-7 py-4 text-base font-semibold text-white transition duration-300 ease-in-out hover:-translate-y-0.5"
              >
                Book Consultation Now
              </a>
              <a
                href="#support"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-base font-semibold text-white transition duration-300 ease-in-out hover:-translate-y-0.5 hover:border-white/50"
              >
                Contact for Custom Solutions
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="h-10 w-auto"
            />
            <p className="mt-2 text-sm text-slate-500">
              Professional business email hosting by {brand.parent}.
            </p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
              {brand.address}
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
              href={`mailto:${brand.email}`}
              className="transition hover:text-slate-950"
            >
              {brand.email}
            </a>
            <a
              href={`tel:${brand.phone.replace(/\s/g, "")}`}
              className="transition hover:text-slate-950"
            >
              {brand.phone}
            </a>
            <a
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-slate-950"
            >
              a2zcloud.net
            </a>
            <a
              href={brand.privacyPolicy}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-slate-950"
            >
              Privacy Policy
            </a>
            <a
              href={brand.refundPolicy}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-slate-950"
            >
              Refund Policy
            </a>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl text-sm text-slate-400">
          © 2026 {brand.name}. All rights reserved.
        </div>
      </footer>

      <a
        href="#registration"
        className={`fixed right-5 bottom-5 z-40 hidden rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(34,197,94,0.35)] transition duration-300 ease-in-out sm:inline-flex ${
          hasScrolled
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        Book ₹249 Plan
      </a>

      <a
        href={brand.whatsapp}
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
            href="#registration"
            className="inline-flex rounded-full bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-white"
          >
            Get Started
          </a>
        </div>
      </div>

      <a
        href={brand.whatsapp}
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

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required = false,
}) {
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
        required={required}
        className="w-full rounded-[1.25rem] border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white"
      />
    </div>
  );
}

function RazorpayPaymentButton() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    containerRef.current.innerHTML = "";

    const form = document.createElement("form");
    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    script.dataset.payment_button_id = brand.paymentButtonId;

    form.appendChild(script);
    containerRef.current.appendChild(form);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div ref={containerRef} className="flex justify-center" />;
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
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="currentColor"
    >
      <path d="M19.05 4.94A9.9 9.9 0 0 0 12.03 2C6.55 2 2.08 6.46 2.08 11.95c0 1.76.46 3.47 1.34 4.99L2 22l5.22-1.37a9.92 9.92 0 0 0 4.75 1.21h.01c5.48 0 9.95-4.46 9.95-9.95 0-2.66-1.04-5.16-2.88-6.95Zm-7.02 15.22h-.01a8.26 8.26 0 0 1-4.2-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.25 8.25 0 0 1-1.27-4.36c0-4.56 3.7-8.27 8.27-8.27 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.42 5.84c0 4.56-3.71 8.27-8.27 8.27Zm4.53-6.2c-.25-.12-1.47-.73-1.7-.81-.23-.09-.39-.12-.56.12-.16.24-.64.81-.78.97-.14.16-.29.18-.54.06-.25-.13-1.04-.38-1.99-1.21-.74-.66-1.24-1.47-1.38-1.72-.14-.24-.01-.37.11-.49.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.24-.84.82-.84 2 0 1.18.86 2.31.98 2.47.12.16 1.69 2.58 4.09 3.62.57.24 1.01.39 1.36.5.57.18 1.09.16 1.5.1.46-.07 1.47-.6 1.68-1.17.21-.58.21-1.07.15-1.17-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}
