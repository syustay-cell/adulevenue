import { useState } from 'react';
import { Shield } from 'lucide-react';

interface LeadFormProps {
  variant?: 'hero' | 'closing';
}

const INTAKE_URL = 'https://ochuyydjomkpxbzrnptq.supabase.co/functions/v1/abg-lead-intake';
const INTAKE_SECRET = import.meta.env.VITE_ABG_INTAKE_SECRET ?? '';

export function LeadForm({ variant = 'hero' }: LeadFormProps) {
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone]         = useState('');
  const [address, setAddress]     = useState('');
  const [email, setEmail]         = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [error, setError]           = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !phone.trim() || !address.trim()) return;

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch(INTAKE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-abg-secret': INTAKE_SECRET,
        },
        body: JSON.stringify({
          source: 'adu-levenue',
          first_name: firstName.trim(),
          phone: phone.trim(),
          email: email.trim() || undefined,
          address: address.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (data.error === 'Unauthorized') {
          setError('Configuration error. Please contact us directly.');
        } else {
          setError('Something went wrong. Please try again.');
        }
        return;
      }

      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">We received your property.</h3>
        <p className="text-gray-500">Someone will review it and reach out shortly. Real response within hours.</p>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl shadow-lg border border-gray-100 ${variant === 'hero' ? 'p-6 md:p-8' : 'p-8'}`}>
      {variant === 'hero' && (
        <h3 className="text-xl font-bold text-gray-900 mb-1">Get Your ADU Income Plan</h3>
      )}
      {variant === 'closing' && (
        <h3 className="text-xl font-bold text-gray-900 mb-1">Send Us Your Property</h3>
      )}
      <p className="text-sm text-gray-500 mb-5">No commitment. Real property review. Response within hours.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">First Name *</label>
          <input
            type="text"
            required
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            placeholder="Maria"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition text-gray-900 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">Phone Number *</label>
          <input
            type="tel"
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="(555) 000-0000"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition text-gray-900 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">Property Address *</label>
          <input
            type="text"
            required
            value={address}
            onChange={e => setAddress(e.target.value)}
            placeholder="123 Main St, Brooklyn, NY"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition text-gray-900 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">Email <span className="text-gray-400 font-normal">(optional)</span></label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition text-gray-900 placeholder-gray-400"
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>
        )}

        <button
          type="submit"
          disabled={submitting || !firstName.trim() || !phone.trim() || !address.trim()}
          className="w-full btn-primary text-base py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending...' : 'Get My ADU Plan'}
        </button>

        <div className="flex items-center gap-2 text-xs text-gray-500 justify-center pt-1">
          <Shield className="w-3.5 h-3.5" />
          <span>Your info stays private and is never sold.</span>
        </div>
      </form>
    </div>
  );
}
