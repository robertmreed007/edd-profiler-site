import { Clock, Users, AlertTriangle, TrendingUp } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Manual Reviews Take Hours',
    description:
      'Each EDD review requires 3-5 hours of analyst time. Transaction analysis, adverse media searches, CDD consistency checks, and narrative writing consume entire days.',
  },
  {
    icon: Users,
    title: 'BSA Analyst Shortage',
    description:
      'Experienced BSA analysts are scarce and expensive. Turnover means institutional knowledge walks out the door, leaving gaps in your compliance program.',
  },
  {
    icon: AlertTriangle,
    title: 'Inconsistent Quality',
    description:
      'Different analysts produce different results. Varying depths of review, inconsistent narrative quality, and subjective risk assessments create examination risk.',
  },
  {
    icon: TrendingUp,
    title: 'Growing Backlogs',
    description:
      'Regulatory pressure is increasing while customer bases grow. EDD backlogs expand quarter after quarter, creating compliance exposure.',
  },
];

const stats = [
  {
    value: '60%',
    label: 'of community banks report EDD backlogs',
  },
  {
    value: '$50K+',
    label: 'annual cost per BSA analyst',
  },
  {
    value: '3-5 hrs',
    label: 'per manual EDD review',
  },
];

export default function ProblemStatement() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-risk tracking-widest uppercase">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
            The EDD bottleneck is costing your bank
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Manual enhanced due diligence processes cannot scale to meet
            regulatory expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl border border-gray-100 hover:border-red-100 bg-white hover:bg-red-50/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                  <problem.icon className="w-5 h-5 text-risk" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {problem.title}
                  </h3>
                  <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-100">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-navy-900">
                {stat.value}
              </div>
              <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
