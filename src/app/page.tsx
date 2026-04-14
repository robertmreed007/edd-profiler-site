import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import ProductPreview from '@/components/ProductPreview';
import Security from '@/components/Security';
import Compliance from '@/components/Compliance';
import ROI from '@/components/ROI';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemStatement />
        <HowItWorks />
        <Features />
        <ProductPreview />
        <Security />
        <Compliance />
        <ROI />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
