import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'How do I know if my property qualifies?',
    a: 'We review your specific lot — size, access, setbacks, zoning, and layout. Most properties in NYC have some ADU potential. We tell you clearly what is realistic and what is not.',
  },
  {
    q: 'How much can an ADU cost to build?',
    a: 'Costs range widely based on size, type, and site conditions. A studio ADU typically runs $85K–$150K. A 1-bedroom runs $150K–$300K. We give you real numbers based on your specific property.',
  },
  {
    q: 'Can I finance the ADU project?',
    a: 'Yes. Most homeowners use home equity (HELOC or cash-out refinance), construction financing, or a combination. We help you understand which path is realistic before you go too far.',
  },
  {
    q: 'Do I need architectural plans first?',
    a: 'No. We review the property first. If it makes sense, we help you organize the right professionals in the right order — not the other way around.',
  },
  {
    q: 'Should I build prefab or site-built?',
    a: 'Depends on your property. Prefab is faster and lower-disruption for standard lots. Site-built is better for complex layouts or where customization matters. We recommend based on what fits your site.',
  },
  {
    q: 'How long does the process usually take?',
    a: 'From first review to final build varies. Permitting alone can take 2–6 months in NYC. We help you start correctly so time is not wasted on avoidable delays.',
  },
  {
    q: 'Is this only for rentals?',
    a: 'No. ADUs work for rental income, family housing, guest use, and hybrid models. We help you define the best use case for your property and goals.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading text-center mb-12">Questions Homeowners Usually Ask</h2>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-gray-500 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
