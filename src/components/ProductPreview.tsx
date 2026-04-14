export default function ProductPreview() {
  const customers = [
    { name: 'ACME Cash Services LLC', score: 94, risk: 'Critical', change: '+12', type: 'MSB' },
    { name: 'Golden Dragon Restaurant', score: 87, risk: 'High', change: '+8', type: 'Cash-Intensive' },
    { name: 'Pacific Import/Export Co', score: 82, risk: 'High', change: 'New', type: 'International' },
    { name: 'Metro Check Cashing #4', score: 79, risk: 'High', change: '+3', type: 'MSB' },
    { name: 'Summit Real Estate Holdings', score: 76, risk: 'Elevated', change: '-2', type: 'RE Investment' },
  ];

  const distribution = [
    { range: '0-20', count: 438, pct: 35, color: 'bg-emerald-500' },
    { range: '21-40', count: 312, pct: 25, color: 'bg-emerald-400' },
    { range: '41-60', count: 249, pct: 20, color: 'bg-yellow-500' },
    { range: '61-80', count: 150, pct: 12, color: 'bg-orange-500' },
    { range: '81-100', count: 98, pct: 8, color: 'bg-red-500' },
  ];

  const migration = [
    { label: 'Up-Risked', count: 23, color: 'text-risk', bg: 'bg-red-50', border: 'border-red-200' },
    { label: 'De-Risked', count: 15, color: 'text-safe', bg: 'bg-emerald-50', border: 'border-emerald-200' },
    { label: 'Newly Flagged', count: 8, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' },
    { label: 'Stable', count: 1201, color: 'text-navy-600', bg: 'bg-navy-50', border: 'border-navy-200' },
  ];

  return (
    <section className="py-24 px-6 bg-navy-50/50 grid-pattern">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent-500 tracking-widest uppercase">
            Product Preview
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
            Your entire portfolio at a glance
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Real-time risk scoring, migration tracking, and priority queuing in
            one dashboard.
          </p>
        </div>

        {/* Mock Dashboard */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-soft overflow-hidden">
          {/* Dashboard header */}
          <div className="bg-navy-900 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-sm font-mono text-navy-300">
                EDD Profiler &mdash; Risk Dashboard
              </span>
            </div>
            <div className="text-xs font-mono text-navy-400">
              Q1 2026 Review Cycle
            </div>
          </div>

          <div className="p-6">
            {/* Top row: Distribution + Migration */}
            <div className="grid lg:grid-cols-3 gap-6 mb-6">
              {/* Portfolio Distribution */}
              <div className="lg:col-span-2 bg-navy-50 rounded-xl p-5">
                <h4 className="text-sm font-semibold text-navy-700 mb-4">
                  Portfolio Risk Distribution
                </h4>
                <div className="flex items-end gap-3 h-40">
                  {distribution.map((d) => (
                    <div key={d.range} className="flex-1 flex flex-col items-center justify-end h-full">
                      <span className="text-xs font-mono text-navy-500 mb-1">
                        {d.count}
                      </span>
                      <div
                        className={`w-full ${d.color} rounded-t-md transition-all`}
                        style={{ height: `${d.pct * 2.5}%` }}
                      />
                      <span className="text-[10px] font-mono text-navy-400 mt-2">
                        {d.range}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Migration Summary */}
              <div className="bg-navy-50 rounded-xl p-5">
                <h4 className="text-sm font-semibold text-navy-700 mb-4">
                  Migration Summary
                </h4>
                <div className="space-y-3">
                  {migration.map((m) => (
                    <div
                      key={m.label}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg ${m.bg} border ${m.border}`}
                    >
                      <span className="text-sm text-gray-700">{m.label}</span>
                      <span className={`text-sm font-bold ${m.color}`}>
                        {m.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Highest Risk Customers Table */}
            <div className="bg-navy-50 rounded-xl p-5">
              <h4 className="text-sm font-semibold text-navy-700 mb-4">
                Highest Risk Customers &mdash; EDD Priority Queue
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-navy-500 text-xs uppercase tracking-wider">
                      <th className="pb-3 pr-4">Customer</th>
                      <th className="pb-3 pr-4">Type</th>
                      <th className="pb-3 pr-4">Risk Score</th>
                      <th className="pb-3 pr-4">Level</th>
                      <th className="pb-3">Change</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-100">
                    {customers.map((c) => (
                      <tr key={c.name} className="hover:bg-navy-100/50">
                        <td className="py-3 pr-4 font-medium text-navy-900">
                          {c.name}
                        </td>
                        <td className="py-3 pr-4 text-navy-500">{c.type}</td>
                        <td className="py-3 pr-4">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-navy-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${
                                  c.score >= 80
                                    ? 'bg-red-500'
                                    : c.score >= 60
                                    ? 'bg-orange-500'
                                    : 'bg-yellow-500'
                                }`}
                                style={{ width: `${c.score}%` }}
                              />
                            </div>
                            <span className="font-mono font-bold text-navy-900">
                              {c.score}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 pr-4">
                          <span
                            className={`inline-flex px-2 py-0.5 rounded text-xs font-semibold ${
                              c.risk === 'Critical'
                                ? 'bg-red-100 text-red-700'
                                : c.risk === 'High'
                                ? 'bg-orange-100 text-orange-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}
                          >
                            {c.risk}
                          </span>
                        </td>
                        <td className="py-3">
                          <span
                            className={`font-mono text-sm font-bold ${
                              c.change === 'New'
                                ? 'text-orange-600'
                                : c.change.startsWith('+')
                                ? 'text-risk'
                                : 'text-safe'
                            }`}
                          >
                            {c.change}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
