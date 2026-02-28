"use client";

import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  Truck, 
  Zap, 
  Navigation, 
  ChevronRight, 
  Info, 
  Filter, 
  ShieldCheck,
  Globe
} from "lucide-react";

export default function PincodeServiceability() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [showResults, setShowResults] = useState(false);

  // Mock Data for Service Tiers
  const networks = [
    { name: "Express Air", type: "Air", days: "1-2 Days", status: "Available", color: "text-amber-500", bg: "bg-amber-50" },
    { name: "Surface Pro", type: "Road", days: "3-5 Days", status: "Available", color: "text-[#7C3AED]", bg: "bg-indigo-50" },
    { name: "Hyperlocal", type: "Bike", days: "Same Day", status: "Limited", color: "text-emerald-500", bg: "bg-emerald-50" },
    { name: "Eco Surface", type: "Road", days: "5-7 Days", status: "Available", color: "text-slate-500", bg: "bg-slate-50" },
  ];

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (origin.length === 6 && destination.length === 6) setShowResults(true);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* --- HERO HEADER --- */}
      <section className="bg-[#0F172A] pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
               <Navigation size={16} className="text-[#6366F1]" />
               <span className="text-[#6366F1] text-[11px] font-bold tracking-[0.3em] uppercase">Network Coverage</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Pincode <br /><span className="text-indigo-400">Serviceability.</span>
            </h1>
            <p className="text-slate-400 mt-6 max-w-md text-lg font-medium leading-relaxed">
              Verify delivery reach across 26,000+ PIN codes instantly. Check for pickup and delivery availability.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm hidden md:block">
            <Search size={100} className="text-indigo-500/20" />
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT GRID --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 grid lg:grid-cols-12 gap-10">
        
        {/* Left: Search Form */}
        <div className="lg:col-span-4 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-indigo-100/20 h-fit sticky top-24">
          <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <MapPin size={20} className="text-[#7C3AED]" /> Route Verification
          </h2>
          
          <form onSubmit={handleCheck} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Origin Pincode</label>
              <input 
                required
                type="text" 
                maxLength={6}
                placeholder="e.g. 452001 (Indore)" 
                className="w-full border border-slate-200 p-4 rounded-xl focus:ring-4 focus:ring-indigo-500/5 focus:border-[#7C3AED] outline-none transition-all font-semibold"
                onChange={(e) => setOrigin(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Destination Pincode</label>
              <input 
                required
                type="text" 
                maxLength={6}
                placeholder="Enter destination" 
                className="w-full border border-slate-200 p-4 rounded-xl focus:ring-4 focus:ring-indigo-500/5 focus:border-[#7C3AED] outline-none transition-all font-semibold"
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>

            <button type="submit" className="w-full bg-[#7C3AED] text-white py-5 rounded-xl font-bold text-[13px] uppercase tracking-widest hover:bg-[#6D28D9] transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2">
              Check Serviceability <ArrowRight size={18} />
            </button>
          </form>
        </div>

        {/* Right: Results Section */}
        <div className="lg:col-span-8">
          {!showResults ? (
            <div className="h-full min-h-[500px] bg-white border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-slate-400 text-center p-12">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                <Search className="opacity-20" size={40} />
              </div>
              <p className="font-bold text-xl text-slate-600">Route Data Will Appear Here</p>
              <p className="text-[14px] mt-2 max-w-xs leading-relaxed">Enter both pincodes to see available delivery speeds and network status.</p>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Route Summary Header */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">From</p>
                    <p className="text-lg font-black text-slate-900">{origin}</p>
                  </div>
                  <div className="h-px w-12 bg-slate-200" />
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">To</p>
                    <p className="text-lg font-black text-slate-900">{destination}</p>
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-2 text-emerald-500 font-bold text-xs uppercase bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                  <ShieldCheck size={14} /> Major Route Active
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {networks.map((network) => (
                  <div key={network.name} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#7C3AED] transition-all group">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-3 rounded-xl ${network.bg} ${network.color}`}>
                        {network.type === 'Air' ? <Zap size={20} /> : <Truck size={20} />}
                      </div>
                      <span className={`text-[10px] font-black uppercase px-2 py-1 rounded border ${network.color === 'text-emerald-500' ? 'bg-emerald-50 border-emerald-100' : 'bg-slate-50 border-slate-100'}`}>
                        {network.status}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg">{network.name}</h4>
                    <p className="text-sm text-slate-500 mb-4 font-medium italic">Est: {network.days}</p>
                    <button className="w-full py-2.5 rounded-lg border border-slate-100 text-slate-900 font-bold text-[11px] uppercase tracking-widest group-hover:bg-slate-900 group-hover:text-white transition-all">
                      Select This Route
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-indigo-50/50 border border-indigo-100 p-6 rounded-2xl flex gap-4">
                <Info className="text-[#7C3AED] shrink-0" size={24} />
                <div className="text-[13px] text-indigo-700 leading-relaxed font-medium">
                  <p className="font-bold mb-1">Network Guidelines:</p>
                  <ul className="list-disc ml-4 space-y-1">
                    <li>COD is available for this route up to ₹10,000.</li>
                    <li>Hyperlocal delivery is subject to rider availability in the {destination} cluster.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function ArrowRight({ size }: { size: number }) {
  return <ChevronRight size={size} />;
}