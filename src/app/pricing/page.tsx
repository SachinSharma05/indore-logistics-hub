import { Zap, Building2, Check, Calculator, ArrowRight, Wallet, Receipt, ShieldCheck, Box } from "lucide-react";
import Link from 'next/link';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      
      {/* --- 1. INDUSTRIAL HERO --- */}
      <section className="bg-slate-950 pt-24 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ef44440a,transparent)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-red-600 text-[10px] font-black tracking-[0.4em] uppercase mb-6 block">
            Institutional Rates
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Transparent Logistics <br />
            <span className="text-red-600 italic font-light">Without the Surcharges</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            From single-parcel home pickups to large-scale industrial freight, 
            we provide standardized pricing for the Central India hub.
          </p>
        </div>
      </section>

      {/* --- 2. PRICING CARDS --- */}
      <section className="py-20 px-6 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          
          <PricingCard 
            title="Individual"
            price="Market Rate"
            description="Perfect for one-time home shifting or personal parcel delivery."
            type="Pay-as-you-go"
            features={[
              "Instant Online Booking",
              "Doorstep Pickup in 2 Hours",
              "Real-time GPS Tracking",
              "Standard Transit Insurance"
            ]}
            buttonText="Schedule Pickup"
            highlight={false}
            icon={<Box size={20} />}
          />

          <PricingCard 
            title="Business Pro"
            price="₹15/kg"
            description="Optimized for Indore's D2C brands & local Rajwada merchants."
            type="Prepaid Wallet"
            features={[
              "Discounted Express Shipping",
              "Integrated COD Management",
              "Bulk Manifest Uploads",
              "Priority Customer Support",
              "Free Insurance (up to ₹5000)"
            ]}
            buttonText="Open Merchant Account"
            highlight={true}
            icon={<Wallet size={20} />}
          />

          <PricingCard 
            title="Enterprise"
            price="Contractual"
            description="For firms shipping 500+ units monthly with custom needs."
            type="Postpaid Billing"
            features={[
              "Monthly Net-30 Invoicing",
              "Dedicated Account Manager",
              "Full API Integration",
              "Warehouse Fulfillment Ops",
              "Reverse Logistics (RTO) Mgmt"
            ]}
            buttonText="Talk to Dispatch"
            highlight={false}
            icon={<Building2 size={20} />}
          />
        </div>
      </section>

      {/* --- 3. DYNAMIC CALCULATOR CTA --- */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-10 hover:border-red-600 transition-all duration-500">
          <div className="flex gap-8 items-center">
            <div className="w-16 h-16 bg-slate-950 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200">
              <Calculator size={28} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-950 tracking-tight">Need a volumetric quote?</h3>
              <p className="text-slate-500 text-sm font-medium mt-1">Calculate precise costs based on dimensions, weight, and pincode.</p>
            </div>
          </div>
          <Link href="/calculator" className="w-full md:w-auto bg-red-600 text-white px-10 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-950 transition-all text-center">
            Open Rate Calculator
          </Link>
        </div>
      </section>

      {/* --- 4. THE BILLING LOGIC (Explainer) --- */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-md">
                <span className="text-red-600 text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Billing 101</span>
                <h2 className="text-3xl font-bold text-slate-950 tracking-tight">Which model fits your cashflow?</h2>
            </div>
            <p className="text-slate-400 text-sm font-medium">Standardized for Madhya Pradesh business cycles.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="group p-10 bg-white border border-slate-200 rounded-[2.5rem] hover:shadow-xl transition-all duration-500">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all">
                <Zap size={22} />
            </div>
            <h4 className="font-bold text-slate-950 text-xl mb-4">The Prepaid Advantage</h4>
            <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
              Ideal for startups. Recharge your IL Wallet via UPI or Card. 
              Shipping costs are deducted instantly per shipment. 
              <span className="block mt-4 text-slate-900 font-bold">Best for: Small D2C, Boutique Shops, Freelancers.</span>
            </p>
          </div>

          <div className="group p-10 bg-white border border-slate-200 rounded-[2.5rem] hover:shadow-xl transition-all duration-500">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Receipt size={22} />
            </div>
            <h4 className="font-bold text-slate-950 text-xl mb-4">Postpaid Corporate</h4>
            <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
              Ship unlimited volumes and receive a single tax-compliant invoice at the end of the month. 
              Subject to credit verification and minimum volume.
              <span className="block mt-4 text-slate-900 font-bold">Best for: Manufacturing Units, Banks, E-comm Aggregators.</span>
            </p>
          </div>
        </div>
      </section>

      {/* --- 5. TRUST FOOTER --- */}
      <section className="py-20 bg-slate-50 border-t border-slate-100 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 text-center md:text-left">
            <div className="flex-1">
                <ShieldCheck className="text-red-600 mb-4 mx-auto md:mx-0" size={32} />
                <h5 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-2">Zero Hidden Fees</h5>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">Fuel surcharges and state taxes are calculated upfront. What you see is what you pay.</p>
            </div>
            <div className="w-px bg-slate-200 hidden md:block" />
            <div className="flex-1">
                <Box className="text-red-600 mb-4 mx-auto md:mx-0" size={32} />
                <h5 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-2">Refund Policy</h5>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">Full credit back to wallet for shipments that fail to meet our 48-hour city delivery SLA.</p>
            </div>
        </div>
      </section>
    </main>
  );
}

function PricingCard({ title, price, description, type, features, buttonText, highlight, icon }: 
  {title: string, price: string, description: string, type: string, features: string[], buttonText: string, highlight?: boolean, icon?: React.ReactNode}) {
  return (
    <div className={`relative bg-white rounded-[2.5rem] p-10 border transition-all duration-700 ${
      highlight 
      ? 'border-red-600 shadow-2xl shadow-red-200 scale-105 z-10' 
      : 'border-slate-200 hover:border-slate-400'
    } flex flex-col`}>
      
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-lg shadow-red-200">
          Recommended
        </div>
      )}
      
      <div className="mb-10">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${highlight ? 'bg-red-600 text-white' : 'bg-slate-50 text-slate-400'}`}>
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{title}</h3>
        <p className="text-slate-500 text-sm font-medium mb-8 leading-relaxed h-12">{description}</p>
        
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-black text-slate-900 tracking-tighter">{price}</span>
          {price.includes('₹') && <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">/ avg</span>}
        </div>
        
        <div className="mt-6">
          <span className={`text-[10px] font-black px-4 py-1.5 rounded-lg uppercase tracking-widest ${
              highlight ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-500'
          }`}>
            {type}
          </span>
        </div>
      </div>

      <ul className="space-y-5 mb-12 flex-grow">
        {features.map((feat: string, i: number) => (
          <li key={i} className="flex items-start gap-4 text-sm text-slate-600 font-medium">
            <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" strokeWidth={3} /> {feat}
          </li>
        ))}
      </ul>

      <button className={`w-full py-5 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-all ${
        highlight 
        ? 'bg-slate-950 text-white hover:bg-red-600' 
        : 'bg-slate-50 text-slate-900 hover:bg-slate-950 hover:text-white'
      }`}>
        {buttonText}
      </button>
    </div>
  );
}