import { CheckCircle } from 'lucide-react';

const items = [
  'FFIEC BSA/AML Examination Manual aligned',
  'FinCEN CDD Rule compliant',
  'OCC/FDIC examination expectations met',
  'Configurable to match your institution\'s BSA program',
  'Supports both risk-based and rules-based EDD triggers',
  'Audit-ready documentation for every review cycle',
];

export default function Compliance() {
  return (
    <section className="py-24 px-6 bg-navy-50/50 grid-pattern">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="text-sm font-semibold text-accent-500 tracking-widest uppercase">
              Compliance
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              Built for regulators, not around them
            </h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">
              EDD Profiler was designed by BSA compliance professionals to meet
              the exact standards examiners expect. Every output is structured
              for regulatory review.
            </p>

            <div className="mt-8 space-y-4">
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-safe flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Regulatory badges visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-soft">
              <div className="text-center mb-6">
                <h4 className="font-bold text-navy-900 text-lg">
                  Regulatory Alignment
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                  Framework compliance status
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'FFIEC BSA/AML Manual', status: 'Aligned' },
                  { label: 'FinCEN CDD Rule', status: 'Compliant' },
                  { label: 'OCC Heightened Standards', status: 'Met' },
                  { label: 'FDIC Risk Management', status: 'Met' },
                  { label: 'State Regulations', status: 'Configurable' },
                ].map((reg, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-4 py-3 bg-navy-50 rounded-lg border border-navy-100"
                  >
                    <span className="text-sm font-medium text-navy-800">
                      {reg.label}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-safe bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-safe" />
                      {reg.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-accent-500/5 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
