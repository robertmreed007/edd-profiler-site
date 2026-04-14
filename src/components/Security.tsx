import { Lock, ShieldCheck, Server, ClipboardList } from 'lucide-react';

const cards = [
  {
    icon: Lock,
    title: 'Bank-Grade Encryption',
    description:
      'AES-256 encryption at rest, TLS 1.3 in transit. All data encrypted end-to-end with keys managed per institution.',
  },
  {
    icon: ShieldCheck,
    title: 'Security-First Architecture',
    description:
      'Built from the ground up for enterprise security. Access controls, activity monitoring, and incident response designed for financial institutions.',
  },
  {
    icon: Server,
    title: 'On-Premise Option',
    description:
      'Deploy within your own network. No customer data leaves your infrastructure. Ideal for institutions with strict data residency requirements.',
  },
  {
    icon: ClipboardList,
    title: 'Audit Trail',
    description:
      'Every action logged with timestamps and user attribution. Full chain of custody for examiner review and regulatory inquiries.',
  },
];

export default function Security() {
  return (
    <section id="security" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-safe tracking-widest uppercase">
            Security
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
            Enterprise security. Zero compromise.
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Your customer data demands the highest level of protection. EDD Profiler delivers cloud and on-premise options to meet your institution&rsquo;s requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-gray-100 bg-white hover:bg-emerald-50/30 hover:border-emerald-200 transition-all duration-300 hover:shadow-card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
                <card.icon className="w-6 h-6 text-safe" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
