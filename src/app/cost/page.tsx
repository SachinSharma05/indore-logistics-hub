"use client";

import React, { useState } from 'react';
import { 
  Calculator, 
  Filter, 
  ChevronRight, 
  Info, 
  Truck, 
  MapPin, 
  Scale,
  Zap,
  Star
} from "lucide-react";

export default function PriceCalculator() {
  const [weight, setWeight] = useState<string>("");
  const [destination, setDestination] = useState("");
  const [showResults, setShowResults] = useState(false);

  // Mock Data
  const carriers = [
    { name: "Delhivery", price: 450, days: "2-3 Days", speed: "Express", rating: 4.8, best: "Fastest" },
    { name: "BlueDart", price: 620, days: "1-2 Days", speed: "Priority", rating: 4.9, best: "Reliable" },
    { name: "XpressBees", price: 380, days: "4-5 Days", speed: "Standard", rating: 4.2, best: "Budget" },
    { name: "DTDC", price: 510, days: "2-4 Days", speed: "Economy", rating: 4.5, best: "Global" },
  ];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (weight && destination) setShowResults(true);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* --- HERO HEADER --- */}
      <section className="bg-[#0F172A] pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
               <Zap size={16} className="text-[#7C3AED]" />
               <span className="text-[#7C3AED] text-[11px] font-bold tracking-[0.3em] uppercase">Dynamic Rate Engine</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Instant Shipping <br /><span className="text-indigo-400">Quotes.</span>
            </h1>
            <p className="text-slate-400 mt-6 max-w-md text-lg font-medium leading-relaxed">
              Real-time pricing from Indore`s most trusted logistics networks. No hidden surcharges.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm hidden md:block">
            <Calculator size={100} className="text-indigo-500/20" />
          </div>
        </div>
      </section>

      {/* --- MAIN CALCULATOR GRID --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 grid lg:grid-cols-12 gap-10">
        
        {/* Left: Input Form Card */}
        <div className="lg:col-span-4 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-indigo-100/20 h-fit sticky top-24">
          <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <Scale size={20} className="text-[#7C3AED]" /> Shipment Details
          </h2>
          
          <form onSubmit={handleCalculate} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Origin City</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input disabled value="Indore, MP" className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-xl text-slate-500 font-semibold cursor-not-allowed" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Destination Pincode</label>
              <input 
                required
                type="text" 
                placeholder="e.g. 400001" 
                className="w-full border border-slate-200 p-4 rounded-xl focus:ring-4 focus:ring-indigo-500/5 focus:border-[#7C3AED] outline-none transition-all font-semibold"
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Dead Weight (KG)</label>
              <input 
                required
                type="number" 
                placeholder="Weight in kg" 
                className="w-full border border-slate-200 p-4 rounded-xl focus:ring-4 focus:ring-indigo-500/5 focus:border-[#7C3AED] outline-none transition-all font-semibold"
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <button type="submit" className="w-full bg-[#7C3AED] text-white py-5 rounded-xl font-bold text-[13px] uppercase tracking-widest hover:bg-[#6D28D9] transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2">
              Get Comparison Rates <ChevronRight size={18} />
            </button>
          </form>
        </div>

        {/* Right: Results Section */}
        <div className="lg:col-span-8">
          {!showResults ? (
            <div className="h-full min-h-[500px] bg-white border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-slate-400 text-center p-12">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                <Filter className="opacity-20" size={40} />
              </div>
              <p className="font-bold text-xl text-slate-600">Calculated Rates Will Appear Here</p>
              <p className="text-[14px] mt-2 max-w-xs leading-relaxed">Fill in the shipment weight and destination to unlock our network rates.</p>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Available Solutions</h3>
                <span className="bg-indigo-50 text-[#7C3AED] px-4 py-1.5 rounded-full text-[12px] font-bold border border-indigo-100 uppercase tracking-wider">
                  {carriers.length} Options
                </span>
              </div>

              {carriers.map((carrier) => (
                <div key={carrier.name} className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-[#7C3AED] hover:shadow-xl hover:shadow-indigo-100/40 transition-all group">
                  <div className="flex items-center gap-8 w-full md:w-auto">
                    <div className="w-20 h-14 bg-slate-50 rounded-xl flex flex-col items-center justify-center border border-slate-100 group-hover:bg-indigo-50/50 transition-colors">
                        <span className="text-[10px] font-bold text-slate-400 group-hover:text-[#7C3AED] uppercase tracking-tighter">{carrier.name}</span>
                        <div className="flex gap-0.5 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={8} className={i < 4 ? "fill-[#7C3AED] text-[#7C3AED]" : "text-slate-200"} />
                          ))}
                        </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{carrier.name} <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded ml-2">{carrier.best}</span></h4>
                      <p className="text-[13px] text-slate-500 font-medium flex items-center gap-1.5 mt-1">
                        <Truck size={14} className="text-indigo-400" /> {carrier.speed} Network
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-10 w-full md:w-auto justify-between md:justify-end pt-6 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <div className="text-center md:text-right">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Transit Time</p>
                      <p className="text-[15px] font-bold text-slate-900">{carrier.days}</p>
                    </div>
                    <div className="text-center md:text-right">
                      <p className="text-[11px] font-bold text-[#7C3AED] uppercase tracking-widest mb-1">Estimated Net</p>
                      <p className="text-2xl font-bold text-slate-950">₹{carrier.price * (Number(weight) || 1)}</p>
                    </div>
                    <button className="bg-slate-900 text-white p-3.5 rounded-xl group-hover:bg-[#7C3AED] transition-all shadow-lg shadow-indigo-100">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              ))}

              <div className="mt-10 bg-indigo-50/50 border border-indigo-100 p-6 rounded-2xl flex gap-4">
                <Info className="text-[#7C3AED] shrink-0" size={24} />
                <p className="text-[13px] text-indigo-700 leading-relaxed font-medium">
                  <strong>Pricing Note:</strong> Quotes are based on current hub capacity and fuel surcharges. Volumetric weight ($L \times B \times H / 5000$) may apply if dimensions exceed standard proportions.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}