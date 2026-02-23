"use client";

import { createPickupRequest } from "./actions";

import { Phone, Truck, MapPin, Clock, ShieldCheck, ArrowRight, ChevronRight } from "lucide-react";

export default function BookPickupPage() {
  return (
    <main className="min-h-screen bg-white py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* --- 1. SLIM HEADER --- */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-red-600 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4 block">Fulfillment Request</span>
          <h1 className="text-3xl md:text-5xl font-semibold text-slate-950 mb-4 tracking-tight">
            Schedule a <span className="text-red-600 font-light italic">Pickup</span>
          </h1>
          <p className="text-slate-500 font-light text-sm md:text-base max-w-xl">
            Our specialized fleet in Indore is ready to move. Fill out the logistics 
            manifest below to get started.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* --- 2. MAIN FORM SECTION --- */}
          <div className="lg:col-span-2">
            <div className="bg-white">
              <form action={createPickupRequest} className="space-y-12">
                
                {/* Section: Contact */}
                <section>
                  <SectionHeader number="01" title="Contact Information" />
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormGroup label="Full Name" name="name" placeholder="Rahul Sharma" required />
                    <FormGroup label="Phone Number" name="phone" type="tel" placeholder="+91 00000 00000" required />
                  </div>
                </section>

                {/* Section: Logistics */}
                <section>
                  <SectionHeader number="02" title="Shipment Details" />
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Service Type</label>
                      <select
                        name="serviceType"
                        required
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:border-red-500 focus:bg-white transition-all outline-none appearance-none text-sm font-light text-slate-600 cursor-pointer"
                      >
                        <option value="">Choose Service</option>
                        <option value="ecommerce">Ecommerce Shipping</option>
                        <option value="bulk">Bulk & Heavy Shipment</option>
                        <option value="corporate">Corporate Courier</option>
                        <option value="shifting">Home Shifting</option>
                      </select>
                    </div>
                    <FormGroup label="Preferred Pickup Time" name="pickupTime" type="datetime-local" required />
                  </div>
                </section>

                {/* Section: Route */}
                <section>
                  <SectionHeader number="03" title="Route Manifest" />
                  <div className="space-y-6">
                    <FormGroup label="Pickup Address (Indore Origin)" name="pickupAddress" isTextArea placeholder="Street, Landmark, Area..." />
                    <FormGroup label="Destination Address" name="deliveryAddress" isTextArea placeholder="Full destination details..." />
                  </div>
                </section>

                <button
                  type="submit"
                  className="w-full bg-slate-950 text-white py-5 rounded-full font-semibold text-[11px] uppercase tracking-[0.2em] hover:bg-red-600 shadow-xl shadow-slate-200 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  Confirm & Schedule <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* --- 3. SIDEBAR INFO --- */}
          <div className="space-y-8">
            <div className="bg-slate-950 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Truck className="w-24 h-24 -rotate-12" />
              </div>
              
              <h3 className="text-xl font-semibold mb-8 tracking-tight">Indore Priority</h3>
              <ul className="space-y-8 relative z-10">
                <SidebarBenefit 
                  icon={<Clock className="w-5 h-5 text-red-500" />} 
                  title="2-Hour Response" 
                  desc="Agents reach your location within 120 minutes of confirmation." 
                />
                <SidebarBenefit 
                  icon={<ShieldCheck className="w-5 h-5 text-red-500" />} 
                  title="Safe & Insured" 
                  desc="Enterprise-grade handling for every parcel, large or small." 
                />
                <SidebarBenefit 
                  icon={<MapPin className="w-5 h-5 text-red-500" />} 
                  title="Live Dispatch" 
                  desc="Instant tracking link provided via SMS upon pickup." 
                />
              </ul>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col items-center text-center">
              <p className="text-slate-400 font-light text-xs uppercase tracking-widest mb-2">Concierge Support</p>
              <p className="text-slate-900 font-semibold text-lg tracking-tight">+91 9340384339</p>
              <button className="mt-4 text-[10px] font-bold text-red-600 uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                Chat with an Expert <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// --- HELPER COMPONENTS ---

function SectionHeader({ number, title }: { number: string, title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-[10px] font-bold bg-slate-950 text-white w-6 h-6 flex items-center justify-center rounded-full tracking-tighter italic">
        {number}
      </span>
      <h2 className="text-[12px] font-semibold text-slate-900 uppercase tracking-[0.2em]">{title}</h2>
      <div className="h-[1px] bg-slate-100 flex-1"></div>
    </div>
  );
}

function FormGroup({ label, isTextArea, ...props }: any) {
  const Component = isTextArea ? "textarea" : "input";
  return (
    <div className="space-y-2">
      <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{label}</label>
      <Component
        {...props}
        rows={isTextArea ? 3 : undefined}
        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:border-red-500 focus:bg-white transition-all outline-none text-sm font-light placeholder:text-slate-300"
      />
    </div>
  );
}

function SidebarBenefit({ icon, title, desc }: any) {
  return (
    <li className="flex gap-4">
      <div className="shrink-0 mt-1">{icon}</div>
      <div>
        <p className="font-semibold text-sm tracking-tight">{title}</p>
        <p className="text-slate-400 text-[12px] font-light mt-1 leading-relaxed">{desc}</p>
      </div>
    </li>
  );
}