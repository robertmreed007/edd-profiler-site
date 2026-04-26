import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Dark background with gradient */}
      <div className="absolute inset-0 bg-navy-950 noise-overlay">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Ready to automate your EDD process?
        </h2>
        <p className="mt-6 text-lg text-navy-200 leading-relaxed">
          Stop drowning in manual reviews. Start delivering consistent,
          examiner-ready EDD reports at scale.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-600 hover:shadow-glow transition-all hover:scale-[1.02]"
          >
            View Pricing
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
