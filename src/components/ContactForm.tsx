'use client';

import { useState, FormEvent } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      institution: String(formData.get('institution') || ''),
      message: String(formData.get('message') || ''),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(
          data?.error || 'Something went wrong. Please try again or email info@eddprofiler.com.',
        );
        setStatus('error');
        return;
      }

      setStatus('success');
      e.currentTarget.reset();
    } catch {
      setErrorMessage(
        'Network error. Please try again or email info@eddprofiler.com.',
      );
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-soft text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mb-4">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy-900 mb-2">Message sent</h3>
        <p className="text-sm text-gray-600">
          Thanks for reaching out. We&rsquo;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  const submitting = status === 'submitting';

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-soft">
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={submitting}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 text-sm focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors disabled:opacity-60"
              placeholder="Jane Smith"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Work Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={submitting}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 text-sm focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors disabled:opacity-60"
              placeholder="jane@yourbank.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-2">
            Institution Name
          </label>
          <input
            type="text"
            id="institution"
            name="institution"
            disabled={submitting}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 text-sm focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors disabled:opacity-60"
            placeholder="First National Bank"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            disabled={submitting}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 text-sm focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors resize-none disabled:opacity-60"
            placeholder="Tell us what you're looking for..."
          />
        </div>

        {status === 'error' && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending…' : 'Submit Request'}
        </button>
      </form>
    </div>
  );
}
