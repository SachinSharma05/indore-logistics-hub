import React from 'react';
import Link from 'next/link';
import { Check, Box, Zap, Smartphone, Receipt, Building2, LineChart, BadgeCheck, ArrowUpRight } from 'lucide-react';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFF] font-sans">
      
      {/* --- 1. HERO SECTION (Custom Content) --- */}
      <section className="bg-white pt-15 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Scale your logistics with <span className="text-[#6366F1]">Smarter Shipping</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Standardized freight rates and tech-enabled tracking for Madhya Pradesh`s growing business ecosystem. 
          </p>
        </div>
      </section>

      {/* --- 2. PRICING CARDS --- */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <PricingCard 
            title="Starter"
            monthlyFee="FREE"
            avgCost="₹45"
            description="Perfect for casual sellers or small home-based businesses."
            features={[
              "Access to 5+ Courier Partners",
              "Standard API Integration",
              "Next-day Pickup scheduling",
              "Email & Chat Support"
            ]}
          />

          <PricingCard 
            title="Merchant"
            monthlyFee="₹199/m"
            avgCost="₹42"
            description="Built for retail shops scaling their online presence."
            features={[
              "Discounted Intra-City Rates",
              "Automated Label Printing",
              "Priority Warehouse Pickup",
              "WhatsApp Tracking Alerts"
            ]}
            promo="Reach 50 monthly shipments to get your plan fee credited back."
          />

          <PricingCard 
            title="Enterprise"
            monthlyFee="₹499/m"
            avgCost="₹38"
            description="Optimized for high-volume manufacturing & distribution."
            features={[
              "Lowest Freight Surcharges",
              "Custom Brand Tracking Page",
              "Dedicated Service Manager",
              "Advanced RTO Protection"
            ]}
            promo="Reach 200 monthly shipments to get your plan fee credited back."
            highlight={true}
          />

          <PricingCard 
            title="Corporate"
            monthlyFee="₹999/m"
            avgCost="₹34"
            description="Full-scale logistics stack for national distributors."
            features={[
              "Multi-location Pickup Sync",
              "Postpaid Billing Cycles",
              "Full API Access for ERPs",
              "Insurance on Every Parcel"
            ]}
            promo="Reach 1000 monthly shipments to get your plan fee credited back."
          />
        </div>
      </section>

      {/* --- 3. THE "SUPERIOR FEATURES" GRID (Original Content) --- */}
      <section className="py-24 bg-[#F8FAFF] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Powerful tools to <span className="text-indigo-600">accelerate</span> your <span className="text-amber-500">delivery speed</span>
            </h2>
            <p className="text-slate-500 mt-4 font-medium">More than just shipping—we manage your entire supply chain lifecycle.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureBox 
              icon={<Zap className="text-emerald-500" />}
              title="Smart Exception Handling"
              desc="Our system flags delivery delays before they happen, allowing you to resolve issues with customers proactively."
            />
            <FeatureBox 
              icon={<Smartphone className="text-blue-500" />}
              title="Branded Post-Purchase"
              desc="Direct your customers to your own tracking portal rather than courier sites to build brand loyalty."
            />
            <FeatureBox 
              icon={<Receipt className="text-purple-500" />}
              title="Fast-Track Remittance"
              desc="Liquidate your COD payments faster with our accelerated settlement cycles to keep your cash flow healthy."
            />
            <FeatureBox 
              icon={<Building2 className="text-indigo-500" />}
              title="Unified Dashboard"
              desc="Manage multiple carrier accounts, inventory, and returns through a single, easy-to-use control center."
            />
            <FeatureBox 
              icon={<LineChart className="text-blue-400" />}
              title="Flexible Credit Lines"
              desc="Ship now and pay later. We offer revolving credit limits based on your monthly shipping volumes."
            />
            <FeatureBox 
              icon={<BadgeCheck className="text-emerald-400" />}
              title="Route Intelligence"
              desc="Our AI suggests the fastest carrier based on real-time traffic, weather, and historical pincode performance."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

// Core helpers
function PricingCard({ title, monthlyFee, avgCost, description, features, promo, highlight }: any) {
  return (
    <div className={`bg-white rounded-xl border p-6 flex flex-col h-full transition-all ${highlight ? 'border-indigo-200 shadow-xl ring-1 ring-indigo-100' : 'border-slate-100'}`}>
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-lg font-bold text-slate-800">{title}</h3>
        <span className="text-indigo-600 font-bold text-lg uppercase">{monthlyFee}</span>
      </div>

      <div className="bg-indigo-50/50 rounded-lg p-4 mb-6 flex justify-between items-center border border-indigo-100/50">
        <span className="text-xs font-semibold text-slate-600 uppercase tracking-tight">Avg shipment cost*</span>
        <div className="text-right">
          <span className="text-2xl font-bold text-slate-900">{avgCost}</span>
          <div className="h-0.5 w-full bg-slate-900/10 mt-1 border-b border-dashed border-slate-900/30" />
        </div>
      </div>

      <p className="text-sm text-slate-500 mb-8 leading-relaxed font-medium">{description}</p>

      <div className="space-y-4 mb-8 flex-grow">
        <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Includes:</p>
        {features.map((f: string, i: number) => (
          <div key={i} className="flex items-start gap-3">
            <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
            <span className="text-sm text-slate-600 font-medium">{f}</span>
          </div>
        ))}
      </div>

      {promo && (
        <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 mb-6 flex gap-3">
            <Box className="w-5 h-5 text-blue-500 shrink-0" />
            <p className="text-[11px] text-blue-700 leading-snug font-medium">{promo}</p>
        </div>
      )}

      <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${highlight ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-indigo-500 text-white hover:bg-indigo-600'}`}>
        Get Started
      </button>
    </div>
  );
}

function FeatureBox({ icon, title, desc }: any) {
  return (
    <div className="p-8 rounded-2xl border border-emerald-100 bg-white hover:border-indigo-200 transition-all group">
      <div className="w-12 h-12 mb-6 flex items-center justify-center bg-slate-50 rounded-lg group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-slate-900 mb-4">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">{desc}</p>
      <Link href="#" className="text-indigo-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
        Learn more <ArrowUpRight size={16} />
      </Link>
    </div>
  );
}