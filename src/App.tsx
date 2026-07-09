import { Nav } from './components/Nav';
import { LeadForm } from './components/LeadForm';
import { FAQ } from './components/FAQ';
import {
  TrendingUp, Home, PiggyBank, CheckCircle2,
  ArrowRight, ShieldCheck,
  DollarSign, Map, Wrench, Zap,
} from 'lucide-react';

// ─── Shared color constants ───────────────────────────────────────────────────
const C = {
  blue: '#1D4ED8',
  blueL: '#3B82F6',
  dark: '#111827',
  charcoal: '#1F2937',
  muted: '#6B7280',
  light: '#F9FAFB',
  green: '#059669',
};

// ─── Trust Strip Item ─────────────────────────────────────────────────────────
function TrustItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.85)' }}>
      <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#4ade80' }} />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

// ─── Step Card ────────────────────────────────────────────────────────────────
function StepCard({ num, title, desc }: { num: number; title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
        style={{ background: C.blue }}>
        {num}
      </div>
      <div>
        <h3 className="font-bold mb-1" style={{ color: C.dark }}>{title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{desc}</p>
      </div>
    </div>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({ value, label, icon: Icon }: { value: string; label: string; icon: React.ElementType }) {
  return (
    <div className="rounded-2xl p-6 text-center shadow-sm border" style={{ background: 'white', borderColor: '#f3f4f6' }}>
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
        style={{ background: `${C.blue}15` }}>
        <Icon className="w-6 h-6" style={{ color: C.blue }} />
      </div>
      <p className="text-2xl font-black mb-1" style={{ color: C.dark }}>{value}</p>
      <p className="text-sm" style={{ color: C.muted }}>{label}</p>
    </div>
  );
}

// ─── Why Us Card ──────────────────────────────────────────────────────────────
function WhyCard({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="rounded-2xl p-6 shadow-sm border" style={{ background: 'white', borderColor: '#f3f4f6' }}>
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${C.blue}15` }}>
        <Icon className="w-5 h-5" style={{ color: C.blue }} />
      </div>
      <h3 className="font-bold mb-2" style={{ color: C.dark }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{desc}</p>
    </div>
  );
}

// ─── Inline CTA button ────────────────────────────────────────────────────────
function BtnPrimary({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="btn-primary inline-flex items-center gap-2 text-sm px-6 py-3">
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Nav />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-16"
        style={{ background: 'linear-gradient(135deg, #111827 0%, #1e3a5f 60%, #1D4ED8 100%)' }}>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#4ade80' }} />
                <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>Now reviewing properties in NYC</span>
              </div>

              <h1 className="font-black text-white leading-tight mb-5"
                style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                Turn Your Property Into Monthly Income —{' '}
                <span style={{ color: '#93c5fd' }}>Without Guessing What Works</span>
              </h1>

              <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
                We review your exact property, show you what may be possible, and map out the smartest path to build, finance, and profit from an ADU.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                <TrustItem text="Property-first review" />
                <TrustItem text="Financing guidance" />
                <TrustItem text="Build strategy" />
                <TrustItem text="Response within hours" />
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#hero-form" className="btn-primary text-base px-7 py-3.5">
                  Get My ADU Plan
                </a>
                <a href="#how-it-works"
                  className="btn-outline text-base px-7 py-3.5"
                  style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
                  See How It Works
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div id="hero-form">
              <LeadForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUE STRIP ──────────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: C.light }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <StatCard value="$2K–$4K/mo" label="Potential monthly rental income" icon={DollarSign} />
            <StatCard value="20–30%" label="Typical property value increase" icon={TrendingUp} />
            <StatCard value="One Path" label="Guided financing + build planning" icon={Map} />
          </div>
          <div className="text-center">
            <BtnPrimary href="#hero-form">
              See What My Property Could Generate <ArrowRight className="w-4 h-4" />
            </BtnPrimary>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">A Simple Path From Property Review to Build Plan</h2>
            <p style={{ color: C.muted }} className="max-w-xl mx-auto">No guessing. No running to the wrong professional first. A clear sequence from your property to a real plan.</p>
          </div>

          <div className="space-y-8">
            <StepCard num={1} title="Property Review"
              desc="We look at your lot size, layout, rear yard access, utility positioning, and likely constraints — before anything else." />
            <StepCard num={2} title="Income Strategy"
              desc="Rental income, family use, guest house, hybrid model — we map the use case that creates the strongest return for your situation." />
            <StepCard num={3} title="Financing Path"
              desc="We show realistic ways to fund the project based on your equity position and project scope." />
            <StepCard num={4} title="Build Recommendation"
              desc="Prefab or site-built — we recommend the path that fits your property, timeline, and ROI." />
            <StepCard num={5} title="Execution Path"
              desc="We organize the next move so the project can actually happen — who goes first, what gets filed, how it moves forward." />
          </div>

          <div className="text-center mt-12">
            <BtnPrimary href="#hero-form">
              Start My Property Review <ArrowRight className="w-4 h-4" />
            </BtnPrimary>
          </div>
        </div>
      </section>

      {/* ── REAL EXAMPLE ─────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: C.dark }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-white font-bold mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
              What This Can Look Like in Real Numbers
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)' }}>Every property is different. This is a real scenario, not a marketing estimate.</p>
          </div>

          <div className="rounded-3xl p-8 md:p-12" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <p className="text-xs font-medium uppercase tracking-wider mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Example Property Scenario — 1BR ADU, Brooklyn NY
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { label: 'Project Cost', value: '$180,000', note: 'including permits + build' },
                { label: 'Est. Monthly Payment', value: '$1,500', note: 'HELOC financing' },
                { label: 'Est. Monthly Rental', value: '$2,800', note: 'local market rate' },
              ].map(item => (
                <div key={item.label} className="text-center">
                  <p className="text-xs uppercase tracking-wide mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.label}</p>
                  <p className="text-3xl font-black text-white mb-1">{item.value}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{item.note}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <p className="text-sm mb-2" style={{ color: 'rgba(255,255,255,0.45)' }}>Monthly Net Result</p>
              <p className="text-5xl font-black mb-3" style={{ color: '#4ade80' }}>+$1,300</p>
              <p className="text-sm max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Every property is different. We review yours based on actual fit, not a generic template.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <BtnPrimary href="#hero-form">
              Show Me My Numbers <ArrowRight className="w-4 h-4" />
            </BtnPrimary>
          </div>
        </div>
      </section>

      {/* ── BUILD PATH COMPARISON ────────────────────────────────────────── */}
      <section className="py-20" style={{ background: C.light }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">Not Every Property Should Be Built the Same Way</h2>
            <p style={{ color: C.muted }}>We do not force one model. We recommend what fits your property and goals.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="rounded-2xl p-6 shadow-sm" style={{ background: 'white', border: `2px solid ${C.blue}30` }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${C.blue}15` }}>
                  <Zap className="w-5 h-5" style={{ color: C.blue }} />
                </div>
                <h3 className="font-bold text-lg" style={{ color: C.dark }}>Prefab / Modular</h3>
              </div>
              <ul className="space-y-2">
                {['Faster timeline', 'Lower site disruption', 'Controlled manufacturing quality', 'Strong fit for standard lots'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: C.muted }}>
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: C.blue }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-6 shadow-sm border" style={{ background: 'white', borderColor: '#f3f4f6' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100">
                  <Wrench className="w-5 h-5" style={{ color: C.charcoal }} />
                </div>
                <h3 className="font-bold text-lg" style={{ color: C.dark }}>Site-Built</h3>
              </div>
              <ul className="space-y-2">
                {['More customization options', 'Flexible for complex layouts', 'Better for unique site conditions', 'Traditional build approach'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: C.muted }}>
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: C.green }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center">
            <BtnPrimary href="#hero-form">Find My Best Build Option <ArrowRight className="w-4 h-4" /></BtnPrimary>
          </div>
        </div>
      </section>

      {/* ── QUALIFICATION ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading mb-4">Not Every Property Works — That's Why We Check First</h2>
              <p style={{ color: C.muted }} className="mb-6">Quick review first. No wasted time.</p>
              <BtnPrimary href="#hero-form">Check If My Property Qualifies <ArrowRight className="w-4 h-4" /></BtnPrimary>
            </div>
            <div className="space-y-3">
              {['Lot size and available square footage', 'Rear or side yard access', 'Utility positioning and connection feasibility', 'Local zoning and ADU regulations', 'Intended use and layout potential', 'Overall property configuration'].map(item => (
                <div key={item} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: C.blue }} />
                  <span className="font-medium" style={{ color: C.charcoal }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINANCING ────────────────────────────────────────────────────── */}
      <section id="financing" className="py-20" style={{ background: C.light }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">If the Numbers Don't Work, the Project Doesn't Work</h2>
            <p style={{ color: C.muted }} className="max-w-xl mx-auto">We help map practical funding paths before you go too far down a road that does not make financial sense.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              { title: 'Home Equity / HELOC', desc: 'Use existing equity with flexible draw schedules.' },
              { title: 'Cash-Out Refinance', desc: 'Access property value to self-finance the build.' },
              { title: 'Construction Financing', desc: 'Purpose-built loans for ADU projects specifically.' },
              { title: 'Custom Path', desc: 'Based on your homeowner profile and financial scenario.' },
            ].map(card => (
              <div key={card.title} className="rounded-2xl p-6 shadow-sm border" style={{ background: 'white', borderColor: '#f3f4f6' }}>
                <PiggyBank className="w-6 h-6 mb-3" style={{ color: C.blue }} />
                <h3 className="font-bold mb-1" style={{ color: C.dark }}>{card.title}</h3>
                <p className="text-sm" style={{ color: C.muted }}>{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-6 md:p-8 text-center mb-8" style={{ background: C.dark }}>
            <p className="font-semibold text-lg text-white mb-2">We do not just talk about building.</p>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>We look at whether the project makes financial sense first. If the numbers do not work, we tell you.</p>
          </div>

          <div className="text-center">
            <BtnPrimary href="#hero-form">See My Financing Options <ArrowRight className="w-4 h-4" /></BtnPrimary>
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">Why Homeowners Start Here First</h2>
            <p style={{ color: C.muted }} className="max-w-lg mx-auto">Most people talk to the wrong person first. We help you start with the right plan.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <WhyCard icon={Home} title="Property-First Thinking"
              desc="We start with your specific lot. Every recommendation is tailored to your property." />
            <WhyCard icon={TrendingUp} title="ROI-Focused Planning"
              desc="Every recommendation is tested against whether the project makes economic sense." />
            <WhyCard icon={DollarSign} title="Financing + Build Together"
              desc="We factor in how it gets paid for, not just how it gets built." />
            <WhyCard icon={ShieldCheck} title="One Coordinated Path"
              desc="One point of contact through the full process. We manage the complexity." />
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <FAQ />

      {/* ── CLOSING FORM ─────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: C.dark }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-bold text-white mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Your Property Might Already Be an Income Opportunity
          </h2>
          <p className="mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Send your address and we'll show you the smartest next step.
          </p>
          <LeadForm variant="closing" />
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="py-10" style={{ background: C.charcoal }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: C.blue }}>
                  <span className="text-white font-black text-xs">A</span>
                </div>
                <span className="font-bold text-white">ADU Levenue</span>
              </div>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>Helping NYC homeowners evaluate, plan, and structure ADU projects the right way.</p>
            </div>

            <div>
              <p className="font-semibold text-sm mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>Navigation</p>
              <div className="space-y-2">
                {[['How It Works', '#how-it-works'], ['Financing', '#financing'], ['FAQ', '#faq']].map(([label, href]) => (
                  <a key={href} href={href} className="block text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.45)' }}>{label}</a>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold text-sm mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>Legal</p>
              <p className="text-xs leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                ADU Levenue is not a lender or licensed contractor. We provide coordination, evaluation, and guidance services. Income estimates are illustrative.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-xs transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.35)' }}>Privacy</a>
                <a href="#" className="text-xs transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.35)' }}>Terms</a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>© 2026 ADU Levenue. All rights reserved.</p>
            <a href="https://wolf-fund.com/abg/portal/today"
              className="text-xs transition-colors hover:text-white"
              style={{ color: 'rgba(255,255,255,0.18)' }}>Staff Portal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
