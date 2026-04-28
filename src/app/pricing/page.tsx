import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, Mail } from 'lucide-react';

const SALES_EMAIL = 'sales@eddprofiler.com';
const mailto = (subject: string) =>
  `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(subject)}`;

const tiers = [
  {
    name: 'Community',
    price: '$2,500',
    period: '/mo',
    description: 'For community banks and credit unions with focused portfolios.',
    features: [
      'Up to 500 customers monitored',
      'Quarterly EDD review cycles',
      'Multi-dimensional risk scoring',
      'Automated adverse media screening',
      'Examiner-ready PDF reports',
      'Email support',
    ],
    cta: 'Request Demo',
    ctaHref: mailto('Demo request — Community plan'),
    highlighted: false,
  },
  {
    name: 'Enterprise',
    price: '$7,500',
    period: '/mo',
    description: 'For growing institutions with complex compliance needs.',
    features: [
      'Unlimited customers monitored',
      'Monthly review cycles',
      'Dedicated Customer Success Manager',
      'API access for core system integration',
      'Period-over-period migration tracking',
      'Custom risk model configuration',
      'Priority support with SLA',
      'Bulk report generation',
    ],
    cta: 'Request Demo',
    ctaHref: mailto('Demo request — Enterprise plan'),
    highlighted: true,
  },
  {
    name: 'On-Premise',
    price: 'Custom',
    period: '',
    description: 'For institutions requiring full data sovereignty.',
    features: [
      'Self-hosted deployment',
      'Air-gapped installation available',
      'Custom core system integrations',
      'White-glove implementation',
      'Dedicated engineering support',
      'Custom SLA terms',
      'On-site training',
      'Source code escrow',
    ],
    cta: 'Contact Sales',
    ctaHref: mailto('Sales inquiry — On-Premise plan'),
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-24 px-6 bg-navy-950 overflow-hidden noise-overlay">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="text-sm font-semibold text-accent-400 tracking-widest uppercase">
              Pricing
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
              Plans that scale with your institution
            </h1>
            <p className="mt-4 text-lg text-navy-200 max-w-2xl mx-auto">
              Transparent pricing. No per-report fees. No hidden costs.
            </p>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="py-24 px-6 bg-navy-50/50 grid-pattern">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 hover:shadow-card-hover ${
                    tier.highlighted
                      ? 'bg-white border-accent-500 shadow-glow'
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-accent-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-navy-900">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {tier.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <span className="text-4xl font-extrabold text-navy-900">
                      {tier.price}
                    </span>
                    <span className="text-gray-500">{tier.period}</span>
                  </div>

                  <div className="flex-1 space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-safe flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={tier.ctaHref}
                    className={`text-center px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
                      tier.highlighted
                        ? 'bg-accent-500 text-white hover:bg-accent-600'
                        : 'bg-navy-900 text-white hover:bg-navy-800'
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              ))}
            </div>

            {/* Sales contact callout */}
            <div className="mt-16 max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center shadow-soft">
                <Mail className="w-6 h-6 text-accent-500 mx-auto mb-3" />
                <h3 className="font-bold text-navy-900 mb-2">Talk to sales</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Custom configuration, volume pricing, or implementation
                  questions? Reach our team directly.
                </p>
                <a
                  href={mailto('Sales inquiry')}
                  className="inline-block text-accent-600 hover:text-accent-500 font-medium"
                >
                  {SALES_EMAIL}
                </a>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500">
                All plans include bank-grade encryption, audit trails, and
                regulatory-aligned output formats.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
