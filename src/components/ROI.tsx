import { XCircle, CheckCircle } from 'lucide-react';

const before = [
  '3-5 hours per EDD review',
  'Inconsistent quality across analysts',
  'Analyst burnout and high turnover',
  'Growing backlogs each quarter',
  'Manual negative news searches',
  'No period-over-period tracking',
];

const after = [
  'Minutes per review, not hours',
  'Consistent examiner-ready output every time',
  'Scalable to thousands of customers',
  'Automated adverse media screening',
  'Period-over-period risk migration tracking',
  'Full audit trail for every decision',
];

export default function ROI() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent-500 tracking-widest uppercase">
            Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
            The difference is measurable
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="relative p-8 rounded-2xl border border-red-100 bg-red-50/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <h3 className="text-xl font-bold text-gray-900">
                Manual Process
              </h3>
            </div>
            <div className="space-y-4">
              {before.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="relative p-8 rounded-2xl border border-emerald-100 bg-emerald-50/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <h3 className="text-xl font-bold text-gray-900">
                With EDD Profiler
              </h3>
            </div>
            <div className="space-y-4">
              {after.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stat callouts */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-100">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-navy-900">
              Minutes
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Average time per EDD review
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-navy-900">
              100%
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Consistent review quality
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-accent-600">
              Examiner-Ready
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Every report, every time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
