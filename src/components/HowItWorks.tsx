import { Upload, Brain, FileText } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    number: '01',
    title: 'Ingest',
    description: 'Upload KYC/CDD data and transaction history from your core system',
    detail:
      'Connect to your core banking platform or upload CSV/Excel exports. Customer demographics, account information, transaction history, and existing CDD data are ingested and normalized automatically.',
  },
  {
    icon: Brain,
    number: '02',
    title: 'Analyze',
    description:
      'AI scores every customer using a multi-dimensional, configurable risk model',
    detail:
      'Runs negative news searches with AML-specific keyword queries. Flags CTR thresholds, structuring patterns ($8K-$10K), cash-intensive activity, and volume deviations. Scores across Customer Type, Products, Geography, and Transactions.',
  },
  {
    icon: FileText,
    number: '03',
    title: 'Report',
    description:
      'Generate examiner-ready EDD review packages with analyst narratives',
    detail:
      'CDD consistency analysis, transaction pattern narratives, adverse media summaries, risk score justification, and escalation recommendations. Output matches your EDD checklist format with proper folder structures.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-navy-50/50 grid-pattern">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent-500 tracking-widest uppercase">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
            Three steps from data to examiner-ready report
          </h2>
        </div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative flex items-start gap-6 p-8 rounded-2xl bg-white border border-gray-100 hover:border-accent-200 hover:shadow-soft transition-all duration-300"
            >
              {/* Step number */}
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-navy-900 text-white flex items-center justify-center font-mono text-lg font-bold">
                {step.number}
              </div>

              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center mt-1">
                <step.icon className="w-5 h-5 text-accent-600" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-xl">{step.title}</h3>
                <p className="text-gray-600 mt-1">{step.description}</p>
                <p className="text-gray-400 text-sm mt-3 hidden group-hover:block transition-all">
                  {step.detail}
                </p>
              </div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[3.2rem] top-[5.5rem] w-px h-[calc(100%-2rem)] bg-gray-200 -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
