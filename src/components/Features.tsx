import {
  BarChart3,
  Search,
  Activity,
  ArrowUpDown,
  FileEdit,
  FileCheck,
} from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'YH-Compatible Risk Scoring',
    description:
      '4-dimension weighted risk model: Customer Type, Products, Geography, and Transactions. Score 0-100 with configurable thresholds for EDD triggers.',
  },
  {
    icon: Search,
    title: 'Automated Adverse Media',
    description:
      'Negative news search using the exact AML keyword queries from your procedures. Results analyzed for relevance and flagged by severity.',
  },
  {
    icon: Activity,
    title: 'Transaction Pattern Detection',
    description:
      'CTR threshold flagging, structuring detection ($8K-$10K), cash intensity analysis, volume deviation tracking, and anomaly identification.',
  },
  {
    icon: ArrowUpDown,
    title: 'Period-over-Period Migration',
    description:
      'Track risk score changes across review cycles. Identify up-risked, de-risked, and newly flagged customers automatically with trend analysis.',
  },
  {
    icon: FileEdit,
    title: 'Analyst-Grade Narratives',
    description:
      'AI generates BSA analyst assessments with CDD consistency tables, transaction pattern narratives, and escalation recommendations.',
  },
  {
    icon: FileCheck,
    title: 'Examiner-Ready Reports',
    description:
      'PDF reports matching your EDD checklist format. Proper folder structures per procedure. Document naming conventions followed automatically.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent-500 tracking-widest uppercase">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
            Built for BSA/AML compliance teams
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Every feature designed to match your policies, procedures, and
            examination expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl border border-gray-100 bg-white hover:bg-navy-50/50 hover:border-navy-200 transition-all duration-300 hover:shadow-card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-900/5 flex items-center justify-center mb-5 group-hover:bg-accent-500/10 transition-colors">
                <feature.icon className="w-6 h-6 text-navy-700 group-hover:text-accent-600 transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
