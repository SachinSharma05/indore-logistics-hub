import { Check, Calculator, Zap, Building2 } from "lucide-react";
import Link from 'next/link';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- 1. SLIM HEADER --- */}
      <section className="bg-slate-950 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-red-500 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4 block">
            Pricing Models
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Transparent Rates for <br />
            <span className="text-red-600 font-light italic">Every Scale</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
            No hidden fuel surcharges. No surprise fees. Just reliable logistics
            powered by Indore's most efficient network.
          </p>
        </div>
      </section>

      {/* --- 2. PRICING TIERS --- */}
      <section className="py-16 px-6 -mt-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          
          <PricingCard 
            title="Individual"
            price="Standard"
            description="Perfect for one-time home shifting or sending a single parcel."
            type="Pay-as-you-go"
            features={[
              "Instant Online Booking",
              "Standard Insurance",
              "Real-time Tracking",
              "Doorstep Pickup"
            ]}
            buttonText="Book a Pickup"
            highlight={false}
          />

          <PricingCard 
            title="Business Pro"
            price="₹15/kg"
            description="For Indore-based E-commerce sellers & small shops."
            type="Prepaid Wallet"
            features={[
              "Discounted Shipping Rates",
              "COD Management",
              "Bulk CSV Uploads",
              "Priority Support",
              "Free Insurance up to ₹5000"
            ]}
            buttonText="Open Business Account"
            highlight={true}
          />

          <PricingCard 
            title="Enterprise"
            price="Custom"
            description="For large corporations with 500+ shipments per month."
            type="Postpaid Billing"
            features={[
              "Monthly Invoicing",
              "Dedicated Account Manager",
              "API Integration",
              "Warehouse Storage",
              "Reverse Logistics (RTO)"
            ]}
            buttonText="Contact Sales"
            highlight={false}
          />
        </div>
      </section>

      {/* --- 3. CALCULATOR CTA --- */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-[2rem] p-8 md:p-10 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 transition-all hover:border-red-100">
          <div className="flex gap-6 items-center">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <Calculator className="w-6 h-6 text-red-600 stroke-[1.5]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 tracking-tight">Need an exact quote?</h3>
              <p className="text-slate-500 text-[13px] font-light mt-1">Calculate shipping costs based on weight and distance instantly.</p>
            </div>
          </div>
          <Link href="/calculator" className="w-full md:w-auto bg-slate-900 text-white px-8 py-3.5 rounded-full text-[11px] font-semibold uppercase tracking-widest hover:bg-red-600 transition-all text-center">
            Open Rate Calculator
          </Link>
        </div>
      </section>

      {/* --- 4. EXPLAINER SECTION --- */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Which plan is right for you?</h2>
          <div className="w-10 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 bg-white border border-slate-100 rounded-3xl group hover:border-red-100 transition-colors">
            <div className="flex items-center gap-3 mb-4">
               <Zap className="w-5 h-5 text-red-600 stroke-[1.5]" />
               <h4 className="font-semibold text-slate-900 text-lg">Understanding Prepaid</h4>
            </div>
            <p className="text-slate-500 text-[13px] font-light leading-relaxed">
              Ideal for small businesses and D2C brands. You recharge a digital wallet and the shipping cost is deducted automatically for every parcel. No credit checks required.
            </p>
          </div>
          <div className="p-8 bg-white border border-slate-100 rounded-3xl group hover:border-red-100 transition-colors">
            <div className="flex items-center gap-3 mb-4">
               <Building2 className="w-5 h-5 text-red-600 stroke-[1.5]" />
               <h4 className="font-semibold text-slate-900 text-lg">Understanding Postpaid</h4>
            </div>
            <p className="text-slate-500 text-[13px] font-light leading-relaxed">
              Designed for established firms with high volumes. Ship throughout the month without upfront payments and settle a single consolidated invoice at the end of the billing cycle.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function PricingCard({ title, price, description, type, features, buttonText, highlight }: any) {
  return (
    <div className={`relative bg-white rounded-[2.5rem] p-10 border transition-all duration-500 ${highlight ? 'border-red-500 shadow-xl shadow-red-500/5 z-10' : 'border-slate-100 hover:border-slate-300'} flex flex-col`}>
      {highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.2em]">
          Most Popular
        </span>
      )}
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">{title}</h3>
        <p className="text-slate-500 text-[13px] font-light mb-6 leading-relaxed h-10">{description}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-light text-slate-900 tracking-tighter">{price}</span>
          {price.includes('₹') && <span className="text-slate-400 text-xs font-light">/avg</span>}
        </div>
        <div className="mt-4 flex">
          <span className="text-[10px] font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full uppercase tracking-wider">
            {type}
          </span>
        </div>
      </div>

      <ul className="space-y-4 mb-10 flex-grow">
        {features.map((feat: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-[13px] text-slate-600 font-light group">
            <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5 stroke-[3]" /> {feat}
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 rounded-full text-[11px] font-semibold uppercase tracking-widest transition-all ${
        highlight 
        ? 'bg-red-600 text-white hover:bg-slate-900 shadow-lg shadow-red-100 hover:shadow-none' 
        : 'bg-slate-50 text-slate-900 hover:bg-slate-200'
      }`}>
        {buttonText}
      </button>
    </div>
  );
}