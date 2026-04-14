import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Building2, Shield } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-24 px-6 bg-navy-950 overflow-hidden noise-overlay">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="text-sm font-semibold text-accent-400 tracking-widest uppercase">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
              Request a demo
            </h1>
            <p className="mt-4 text-lg text-navy-200 max-w-2xl mx-auto">
              See how EDD Profiler can automate your enhanced due diligence
              process. Fill out the form and we will schedule a personalized
              walkthrough.
            </p>
          </div>
        </section>

        {/* Contact form */}
        <section className="py-24 px-6 bg-navy-50/50 grid-pattern">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-soft">
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 text-sm focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors"
                          placeholder="Jane Smith"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Work Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 text-sm focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors"
                          placeholder="jane@yourbank.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="institution"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Institution Name
                      </label>
                      <input
                        type="text"
                        id="institution"
                        name="institution"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 text-sm focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors"
                        placeholder="First National Bank"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 text-sm focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors resize-none"
                        placeholder="Tell us about your EDD process and what you're looking to improve..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
                    >
                      Submit Request
                    </button>
                  </form>
                </div>
              </div>

              {/* Info sidebar */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <Mail className="w-6 h-6 text-accent-500 mb-3" />
                  <h3 className="font-bold text-navy-900 mb-1">Email Us</h3>
                  <p className="text-sm text-gray-500">
                    sales@eddprofiler.com
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <Building2 className="w-6 h-6 text-accent-500 mb-3" />
                  <h3 className="font-bold text-navy-900 mb-1">
                    Enterprise Sales
                  </h3>
                  <p className="text-sm text-gray-500">
                    For institutions with 1,000+ customers or on-premise
                    requirements, we offer dedicated implementation support.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <Shield className="w-6 h-6 text-accent-500 mb-3" />
                  <h3 className="font-bold text-navy-900 mb-1">
                    Security First
                  </h3>
                  <p className="text-sm text-gray-500">
                    All communications are encrypted. We never share your
                    information with third parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
