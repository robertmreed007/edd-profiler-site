import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import { Mail, Tag, Shield } from 'lucide-react';

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
              Get in touch
            </h1>
            <p className="mt-4 text-lg text-navy-200 max-w-2xl mx-auto">
              Have a question about EDD Profiler? Send us a note and we&rsquo;ll
              get back to you shortly. Looking for pricing or a demo?{' '}
              <Link
                href="/pricing"
                className="text-accent-400 hover:text-accent-300 font-medium underline-offset-2 hover:underline"
              >
                See our plans
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Contact form */}
        <section className="py-24 px-6 bg-navy-50/50 grid-pattern">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>

              {/* Info sidebar */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <Mail className="w-6 h-6 text-accent-500 mb-3" />
                  <h3 className="font-bold text-navy-900 mb-1">General Inquiries</h3>
                  <a
                    href="mailto:info@eddprofiler.com"
                    className="text-sm text-gray-500 hover:text-accent-600 transition-colors"
                  >
                    info@eddprofiler.com
                  </a>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <Tag className="w-6 h-6 text-accent-500 mb-3" />
                  <h3 className="font-bold text-navy-900 mb-1">
                    Pricing &amp; Sales
                  </h3>
                  <p className="text-sm text-gray-500">
                    Looking for plan details, custom configurations, or a
                    demo?{' '}
                    <Link
                      href="/pricing"
                      className="text-accent-600 hover:text-accent-500 font-medium"
                    >
                      View pricing →
                    </Link>
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
