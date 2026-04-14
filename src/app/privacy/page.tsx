import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 px-6 bg-navy-950 overflow-hidden noise-overlay">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Privacy Policy
            </h1>
            <p className="mt-4 text-navy-300">
              Last updated: April 13, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-gray">
            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              EDD Profiler collects information that you provide directly to us,
              including your name, email address, institution name, and any
              messages you send through our contact forms. When you use our
              platform, we process customer data and transaction information
              solely for the purpose of generating EDD reports as directed by
              your institution.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We use the information we collect to provide, maintain, and improve
              our services; to process EDD reviews and generate compliance
              reports; to communicate with you about your account and our
              services; and to comply with legal obligations. We do not use your
              customer data for any purpose other than delivering the services
              you have contracted.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              3. Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We implement industry-standard security measures including AES-256
              encryption at rest, TLS 1.3 encryption in transit, and strict
              access controls. All data is stored in SOC 2 Type II certified
              facilities. For on-premise deployments, customer data never leaves
              your infrastructure.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              4. Data Retention
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We retain your data only for as long as necessary to provide our
              services and comply with legal obligations. Customer data processed
              for EDD reviews is retained according to your institution&apos;s
              configured retention policy. You may request deletion of your data
              at any time, subject to regulatory retention requirements.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              5. Third-Party Sharing
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We do not sell, rent, or share your personal information or
              customer data with third parties for their marketing purposes. We
              may share information with service providers who assist in
              operating our platform, subject to strict confidentiality
              agreements and data processing addendums.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              6. Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              You have the right to access, correct, or delete your personal
              information. You may also request a copy of the data we hold about
              you or your institution. To exercise these rights, please contact
              us at privacy@eddprofiler.com.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              7. Changes to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We may update this Privacy Policy from time to time. We will notify
              you of any material changes by posting the new policy on this page
              and updating the &quot;Last updated&quot; date. Your continued use
              of our services after such changes constitutes acceptance of the
              revised policy.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              8. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you have questions about this Privacy Policy or our data
              practices, please contact us at privacy@eddprofiler.com.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
