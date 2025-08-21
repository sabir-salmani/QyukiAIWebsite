import React from "react";

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.854-9.854a.5.5 0 00-.708-.708L9 11.586 6.854 9.44a.5.5 0 10-.708.707l2.5 2.5a.5.5 0 00.708 0l4.5-4.5z"
      clipRule="evenodd"
    />
  </svg>
);

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12.293 4.293a1 1 0 011.414 0l4 4a.999.999 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 10H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" />
  </svg>
);

const Pricing: React.FC = () => {
  const websitePlans = [
    {
      title: "Starter Website",
      price: "₹49,000",
      note: "one-time",
      features: [
        "Up to 5 pages (Home, About, Services, Contact, Blog)",
        "Responsive UI, SEO-ready",
        "CMS setup (basic)",
        "Contact form & basic analytics",
      ],
      cta: "Get Starter",
    },
    {
      title: "Pro Website",
      price: "₹1,20,000",
      note: "one-time",
      highlight: true,
      features: [
        "10–15 pages + blog",
        "Custom components & animations",
        "CMS with roles & staging",
        "Performance & on-page SEO",
        "Integrations (CRM, Newsletter)",
      ],
      cta: "Choose Pro",
    },
    {
      title: "Enterprise Website",
      price: "Custom",
      note: "quote",
      features: [
        "Multi-locale, multi-brand",
        "Design system & a11y compliance",
        "Headless CMS + pipelines",
        "SLA + ongoing improvements",
      ],
      cta: "Talk to Sales",
    },
  ];

  const appPlans = [
    {
      title: "MVP App",
      price: "₹1,50,000",
      note: "one-time",
      features: [
        "1 platform (iOS or Android)",
        "Auth, 3–4 core screens",
        "API integration",
        "Basic analytics & crash reporting",
      ],
      cta: "Build MVP",
    },
    {
      title: "Growth App",
      price: "₹3,50,000",
      note: "one-time",
      highlight: true,
      features: [
        "iOS + Android (React Native/Flutter)",
        "Push notifications, deep links",
        "Payments & subscriptions",
        "CI/CD + TestFlight/Play Store",
      ],
      cta: "Start Growth",
    },
    {
      title: "Enterprise App",
      price: "Custom",
      note: "quote",
      features: [
        "Modular architecture",
        "SSO / MDM support",
        "Offline-first + edge sync",
        "Security reviews & SLA",
      ],
      cta: "Consult Now",
    },
  ];

  // ✅ AI Model Deployment (not development)
  const modelDeployPlans = [
    {
      title: "Pilot Deployment",
      price: "₹1,50,000",
      note: "one-time setup",
      features: [
        "Containerize your existing model (image/video/audio/3D)",
        "Secure API gateway (keys, rate limits, quotas)",
        "Basic autoscaling & batching",
        "Metrics & logs (latency, throughput, GPU/CPU)",
      ],
      cta: "Deploy Pilot",
    },
    {
      title: "Scale Deployment",
      price: "₹3,50,000",
      note: "from",
      highlight: true,
      features: [
        "Multi-model routing (A/B, canary)",
        "Cost optimizations (quantization, KV cache, mixed precision)",
        "Caching & guardrails (content moderation, PII filters)",
        "SLOs, alerting, on-call support",
      ],
      cta: "Scale Up",
    },
    {
      title: "Enterprise Deployment",
      price: "Custom",
      note: "quote",
      features: [
        "Hybrid cloud/on-prem (VPC peering, private networking)",
        "High availability, rolling updates, blue/green",
        "Dedicated clusters, tenancy isolation",
        "Compliance & audit logging (SOC2/ISO-ready)",
      ],
      cta: "Talk to Sales",
    },
  ];

  // AI Model Deployment Hardware Setup
  const hardwarePlans = [
    {
      title: "Edge Box",
      price: "₹2,00,000",
      note: "from",
      features: [
        "Compact GPU (e.g., RTX class)",
        "On-prem inference setup",
        "Containerized services",
        "Remote monitoring",
      ],
      cta: "Quote Edge",
    },
    {
      title: "GPU Workstation",
      price: "₹3,50,000",
      note: "from",
      highlight: true,
      features: [
        "1–2 GPUs + RAID storage",
        "K8s/K3s + Helm charts",
        "Tracing, logging, metrics",
        "Security hardening",
      ],
      cta: "Quote Workstation",
    },
    {
      title: "On-Prem Cluster",
      price: "₹25,00,000",
      note: "from",
      features: [
        "Multi-GPU nodes + fabric",
        "Model gateway & autoscaling",
        "High availability & backups",
        "SRE runbooks + training",
      ],
      cta: "Quote Cluster",
    },
  ];

  const automationPlans = [
    {
      title: "Starter Automation",
      price: "₹25,000",
      note: "per month",
      features: [
        "3–5 workflows (CRM/email/social)",
        "Ready recipes & monitoring",
        "Basic support",
      ],
      cta: "Start Starter",
    },
    {
      title: "Growth Automation",
      price: "₹75,000",
      note: "per month",
      highlight: true,
      features: [
        "10–15 workflows + data sync",
        "A/B testing & reporting",
        "Priority support & SLAs",
      ],
      cta: "Start Growth",
    },
    {
      title: "Enterprise Automation",
      price: "Custom",
      note: "quote",
      features: [
        "Cross-department orchestration",
        "Custom apps/integrations",
        "24×7 support & governance",
      ],
      cta: "Talk to Sales",
    },
  ];

  const Card: React.FC<{
    title: string;
    price: string;
    note: string;
    features: string[];
    cta: string;
    highlight?: boolean;
  }> = ({ title, price, note, features, cta, highlight }) => (
    <div
      className={`dark-card dark-card-hover p-8 transition-all duration-300 ${
        highlight ? "neon-border" : ""
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-poppins font-semibold text-xl text-white">{title}</h3>
      </div>

      <div className="flex items-baseline gap-2 mb-6">
        <div className="text-3xl md:text-4xl font-bold text-gradient">{price}</div>
        <div className="text-gray-400 text-sm">{note}</div>
      </div>

      <ul className="space-y-2 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-start text-gray-300 text-sm">
            <CheckIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <button className="btn-primary w-full flex items-center justify-center">
        {cta}
        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="bg-gradient-animated grid-pattern pt-[120px] pb-16 scroll-mt-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Choose what fits today. Scale as you grow.
          </p>
        </div>
      </section>

      {/* Website Pricing */}
      <section className="section-padding bg-black grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-poppins font-bold text-3xl text-white">
              Website <span className="text-gradient">Building</span>
            </h2>
            <div className="hidden md:flex items-center text-gray-400 text-sm">
              Jamstack / Headless supported
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {websitePlans.map((p) => (
              <Card key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Pricing */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-poppins font-bold text-3xl text-white">
              Mobile <span className="text-gradient">App</span> Building
            </h2>
            <div className="hidden md:flex items-center text-gray-400 text-sm">
              iOS · Android · Cross-platform
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {appPlans.map((p) => (
              <Card key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Model Deployment */}
      <section className="section-padding bg-black grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-poppins font-bold text-3xl text-white">
              AI Model <span className="text-gradient">Deployment</span>
            </h2>
            <div className="hidden md:flex items-center text-gray-400 text-sm">
              Image · Video · Audio · 3D
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modelDeployPlans.map((p) => (
              <Card key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Model Deployment Hardware Setup */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-poppins font-bold text-3xl text-white">
              AI Model Deployment <span className="text-gradient">Hardware Setup</span>
            </h2>
            <div className="hidden md:flex items-center text-gray-400 text-sm">
              Secure on-prem & edge options
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hardwarePlans.map((p) => (
              <Card key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Business Automations */}
      <section className="section-padding bg-black grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-poppins font-bold text-3xl text-white">
              Business <span className="text-gradient">Automations</span>
            </h2>
            <div className="hidden md:flex items-center text-gray-400 text-sm">
              CRM · Marketing · Ops
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {automationPlans.map((p) => (
              <Card key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Notes / CTA */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="dark-card p-10">
            <p className="text-gray-400 text-sm mb-6">
              Prices are indicative and exclusive of taxes. Final quotes depend
              on scope, integrations, and SLAs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary inline-flex items-center justify-center">
                Request a Custom Quote
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </button>
              <button className="btn-secondary">Download Detailed Rate Card</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
