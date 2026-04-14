import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Logo variant="white" className="h-9 w-auto" />
            <span className="text-navy-400 text-sm">
              AI-powered BSA/AML compliance automation
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-navy-400">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-navy-800/50 text-center">
          <p className="text-sm text-navy-500">
            &copy; 2026 EDD Profiler&trade;. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
