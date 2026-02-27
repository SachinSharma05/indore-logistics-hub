"use client";
import { useState } from 'react';
import { Calculator, Info, Zap, ShieldCheck, ChevronRight, Filter } from 'lucide-react';

export default function PriceCalculator() {
  const [weight, setWeight] = useState("");
  const [origin, setOrigin] = useState("Indore");
  const [destination, setDestination] = useState("");
  const [showResults, setShowResults] = useState(false);

  // Mock Data - In a real app, this would come from an API
  const carriers = [
    { name: "Delhivery", logo: "/logos/delhivery.png", price: 450, days: "2-3 Days", speed: "Express", rating: 4.8 },
    { name: "BlueDart", logo: "/logos/bluedart1.png", price: 620, days: "1-2 Days", speed: "Priority", rating: 4.9 },
    { name: "XpressBees", logo: "/logos/xpressbees.png", price: 380, days: "4-5 Days", speed: "Standard", rating: 4.2 },
    { name: "DTDC", logo: "/logos/dtdc.png", price: 510, days: "2-4 Days", speed: "Economy", rating: 4.5 },
  ];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (weight && destination) setShowResults(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-20 pb-10">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-slate-950 rounded-[2.5rem] p-10 md:p-16 text-center md:text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[80px] rounded-full" />
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <span className="text-red-500 text-[10px] font-black tracking-[.3em] uppercase">Rate Engine</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 tracking-tighter">Compare & Save.</h1>
              <p className="text-slate-400 mt-4 max-w-md">Enter your parcel details to find the most cost-effective carrier for your route.</p>
            </div>
            <Calculator size={80} className="text-white/10 hidden md:block" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">
        {/* Left: Input Form */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm h-fit sticky top-24">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Shipment Details</h2>
          <form onSubmit={handleCalculate} className="space-y-6">
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Origin City</label>
              <input disabled value="Indore (MP)" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-500 cursor-not-allowed" />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Destination Pincode</label>
              <input 
                required
                type="text" 
                placeholder="Enter Pincode" 
                className="w-full border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-red-600 outline-none transition-all"
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Weight (KG)</label>
              <input 
                required
                type="number" 
                placeholder="e.g. 5" 
                className="w-full border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-red-600 outline-none transition-all"
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <button type="submit" className="w-full bg-red-600 text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-950 transition-all shadow-lg shadow-red-600/20">
              Check Prices
            </button>
          </form>
        </div>

        {/* Right: Results Table */}
        <div className="lg:col-span-2 space-y-4">
          {!showResults ? (
            <div className="h-full min-h-[400px] border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-slate-400 text-center p-10">
              <Filter className="mb-4 opacity-20" size={48} />
              <p className="font-medium text-lg text-slate-500">Waiting for your details...</p>
              <p className="text-sm">Fill in the form to compare available logistics networks.</p>
            </div>
          ) : (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex justify-between items-end mb-6">
                <h3 className="text-xl font-bold text-slate-900">Available Carriers</h3>
                <span className="text-[10px] font-bold text-slate-500 uppercase">{carriers.length} Networks Found</span>
              </div>

              {carriers.map((carrier) => (
                <div key={carrier.name} className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-red-200 transition-all group">
                  <div className="flex items-center gap-6 w-full md:w-auto">
                    <div className="w-20 h-12 relative grayscale group-hover:grayscale-0 transition-all">
                       {/* Placeholder for real logos */}
                       <div className="w-full h-full bg-slate-100 rounded-lg flex items-center justify-center text-[8px] font-bold uppercase">{carrier.name}</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{carrier.name}</h4>
                      <p className="text-xs text-slate-500">{carrier.speed} Shipping</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                    <div className="text-center md:text-right">
                      <p className="text-[10px] font-black text-slate-400 uppercase">Est. Delivery</p>
                      <p className="text-sm font-bold text-slate-900">{carrier.days}</p>
                    </div>
                    <div className="text-center md:text-right">
                      <p className="text-[10px] font-black text-red-600 uppercase">Estimated Price</p>
                      <p className="text-xl font-black text-slate-950">₹{carrier.price * (Number(weight) || 1)}</p>
                    </div>
                    <button className="bg-slate-950 text-white p-3 rounded-xl group-hover:bg-red-600 transition-colors">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              ))}

              <div className="mt-8 bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-3">
                <Info className="text-blue-500 shrink-0" size={20} />
                <p className="text-xs text-blue-700 leading-relaxed">
                  Prices are estimates based on standard dimensions. Volumetric weight charges might apply for bulky items.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}