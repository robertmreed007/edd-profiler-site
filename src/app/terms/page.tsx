import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
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
              Terms of Service
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
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              By accessing or using EDD Profiler (&quot;the Service&quot;), you
              agree to be bound by these Terms of Service. If you are using the
              Service on behalf of an organization, you represent that you have
              the authority to bind that organization to these terms.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              2. Description of Service
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              EDD Profiler provides automated Enhanced Due Diligence analysis
              tools for financial institutions, including risk scoring,
              transaction analysis, adverse media screening, and report
              generation. The Service is intended to assist compliance
              professionals and does not constitute legal or regulatory advice.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              3. User Responsibilities
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              You are responsible for ensuring that your use of the Service
              complies with all applicable laws and regulations. You agree to
              provide accurate information, maintain the security of your account
              credentials, and ensure that authorized personnel review all
              AI-generated outputs before regulatory submission.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              4. Data Ownership
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              You retain all ownership rights to your data, including customer
              information, transaction records, and generated reports. We do not
              claim any ownership interest in your data. We process your data
              solely to provide the Service as directed by you.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Service, including its software, algorithms, design, and
              documentation, is the property of EDD Profiler and is protected by
              intellectual property laws. You are granted a limited,
              non-exclusive license to use the Service for your internal
              compliance purposes during the term of your subscription.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Service is provided &quot;as is&quot; and &quot;as
              available.&quot; EDD Profiler shall not be liable for any indirect,
              incidental, special, or consequential damages arising out of your
              use of the Service. Our total liability shall not exceed the
              amounts paid by you in the twelve months preceding the claim.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              7. Disclaimer
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              EDD Profiler is a compliance automation tool and does not provide
              legal, regulatory, or financial advice. All outputs should be
              reviewed by qualified BSA/AML compliance professionals before use.
              The accuracy of risk scores and analyses depends on the quality and
              completeness of input data.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              8. Termination
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Either party may terminate the agreement with 30 days written
              notice. Upon termination, we will provide you with a copy of your
              data and securely delete all copies within 90 days, unless
              retention is required by law.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              9. Governing Law
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              These Terms shall be governed by and construed in accordance with
              the laws of the State of Delaware, without regard to its conflict
              of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              10. Contact
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              For questions about these Terms, please contact us at
              legal@eddprofiler.com.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
