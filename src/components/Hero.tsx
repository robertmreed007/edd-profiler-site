export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-navy-950 overflow-hidden noise-overlay">
      {/* Gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-navy-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-accent-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-52 pb-32 text-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-8">
            BSA/AML Enhanced Due Diligence Automation
          </span>
        </div>

        <h1 className="animate-fade-up-delay-1 text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
          Uncover and Report on
          <span className="block mt-2 pb-3 bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
            Your High-Risk Customers.
          </span>
        </h1>

        <p className="animate-fade-up-delay-2 mt-8 text-lg md:text-xl text-navy-200 max-w-2xl mx-auto leading-relaxed">
          EDD Profiler empowers financial institutions to efficiently analyze high-risk customers through comprehensive analysis and tailored EDD reporting — built around <em>your</em> bank&rsquo;s policy and procedure, not a one-size-fits-all template.
        </p>

        <div className="animate-fade-up-delay-3 mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-600 hover:shadow-glow transition-all hover:scale-[1.02]"
          >
            Contact Sales
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
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium transition-colors"
          >
            See How It Works
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>

        {/* Mini dashboard mockup below hero */}
        <div className="animate-fade-up-delay-4 mt-20 mx-auto max-w-3xl">
          <div className="bg-navy-900/80 backdrop-blur border border-navy-700/50 rounded-xl p-6 shadow-2xl">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-risk" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-safe" />
              </div>
              <span className="text-xs font-mono text-navy-400">
                EDD Profiler &mdash; Portfolio Risk Overview
              </span>
            </div>
            {/* Score bars */}
            <div className="grid grid-cols-5 gap-2 mb-4">
              {[
                { label: '0-20', pct: 35, color: 'bg-safe' },
                { label: '21-40', pct: 25, color: 'bg-safe/70' },
                { label: '41-60', pct: 20, color: 'bg-yellow-500' },
                { label: '61-80', pct: 12, color: 'bg-orange-500' },
                { label: '81-100', pct: 8, color: 'bg-risk' },
              ].map((bar) => (
                <div key={bar.label} className="text-center">
                  <div className="h-24 bg-navy-800 rounded relative overflow-hidden">
                    <div
                      className={`absolute bottom-0 w-full ${bar.color} rounded-t transition-all`}
                      style={{ height: `${bar.pct}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-navy-400 mt-1 block">
                    {bar.label}
                  </span>
                </div>
              ))}
            </div>
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-navy-800/50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-accent-400">1,247</div>
                <div className="text-[10px] text-navy-400 uppercase tracking-wider">
                  Customers Scored
                </div>
              </div>
              <div className="bg-navy-800/50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-yellow-400">83</div>
                <div className="text-[10px] text-navy-400 uppercase tracking-wider">
                  EDD Reviews Due
                </div>
              </div>
              <div className="bg-navy-800/50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-risk">12</div>
                <div className="text-[10px] text-navy-400 uppercase tracking-wider">
                  High Risk Alerts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
