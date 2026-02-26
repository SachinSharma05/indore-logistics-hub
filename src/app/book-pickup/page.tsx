"use client";

import { createPickupRequest } from "./actions";
import { ArrowRight, ShieldCheck, Package, Box } from "lucide-react";

export default function BookPickupPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] py-12 md:py-10 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* --- COMPACT HEADER --- */}
        <div className="mb-12">
          <span className="text-red-600 text-[10px] font-black tracking-[0.4em] uppercase mb-3 block">Fulfillment Request</span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-950 tracking-tight">
            Schedule a <span className="text-red-600 font-light italic">Pickup</span>
          </h1>
          <p className="text-slate-500 text-sm mt-2 max-w-xl">
            Indore`s priority logistics network. Fill the manifest below to dispatch our nearest agent.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* --- MAIN FORM SECTION --- */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-10 shadow-sm">
              <form action={createPickupRequest} className="space-y-10">
                
                {/* 01. Contact Info */}
                <section>
                  <SectionHeader number="01" title="Contact Details" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <FormGroup label="Full Name" name="name" placeholder="Rahul Sharma" />
                    <FormGroup label="Phone Number" name="phone" type="tel" placeholder="+91 98765 43210" />
                  </div>
                </section>

                {/* 02. Shipment Specs */}
                <section>
                  <SectionHeader number="02" title="Shipment Specifications" />
                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Shipment Category</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-red-500 focus:bg-white transition-all appearance-none cursor-pointer">
                        <option value="">Select Category</option>
                        <option value="electronics">Electronics & Gadgets</option>
                        <option value="apparel">Apparel & Textiles</option>
                        <option value="documents">Important Documents</option>
                        <option value="industrial">Industrial Spare Parts</option>
                        <option value="fragile">Fragile Glassware</option>
                        <option value="others">Others</option>
                      </select>
                    </div>
                    <FormGroup label="Pickup Date & Time" name="pickupTime" type="datetime-local" />
                  </div>

                  {/* TECHNICAL DIMENSIONS GRID */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Package Dimensions (Approx)</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <FormGroup label="Weight (kg)" name="weight" type="number" placeholder="0.00" isThin />
                      <FormGroup label="Length (cm)" name="length" type="number" placeholder="0" isThin />
                      <FormGroup label="Breadth (cm)" name="breadth" type="number" placeholder="0" isThin />
                      <FormGroup label="Height (cm)" name="height" type="number" placeholder="0" isThin />
                    </div>
                  </div>
                </section>

                {/* 03. Route */}
                <section>
                  <SectionHeader number="03" title="Route Manifest" />
                  <div className="grid gap-5">
                    <FormGroup label="Pickup Address (Indore)" name="pickupAddress" isTextArea placeholder="Plot No, Building Name, Landmark..." />
                    <FormGroup label="Destination Address" name="deliveryAddress" isTextArea placeholder="Full Delivery Address with Pincode..." />
                  </div>
                </section>

                <button
                  type="submit"
                  className="w-full bg-slate-950 text-white py-4 rounded-xl font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-red-600 shadow-xl shadow-red-100 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  Confirm Dispatch <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* --- SIDEBAR INFO --- */}
          <div className="space-y-6">
            <div className="bg-slate-950 rounded-[2rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-slate-300">
              <div className="absolute -top-4 -right-4 p-4 opacity-10">
                <Box className="w-32 h-32 rotate-12" />
              </div>
              
              <h3 className="text-lg font-bold mb-8 tracking-tight flex items-center gap-2">
                <ShieldCheck className="text-red-500" size={20} /> Indore Priority
              </h3>
              <ul className="space-y-6 relative z-10">
                <SidebarBenefit 
                  title="2-Hour Window" 
                  desc="On-demand pickup across Indore city limits." 
                />
                <SidebarBenefit 
                  title="Secure Transit" 
                  desc="Tamper-proof packaging support available on-site." 
                />
                <SidebarBenefit 
                  title="Real-time ETA" 
                  desc="Driver location shared via WhatsApp instantly." 
                />
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col items-center text-center shadow-sm">
              <div className="w-10 h-10 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4">
                <Package size={20} />
              </div>
              <p className="text-slate-400 font-bold text-[9px] uppercase tracking-widest mb-1">Direct Helpline</p>
              <p className="text-slate-900 font-bold text-lg">+91 93403 84339</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// --- REFINED HELPERS ---

function SectionHeader({ number, title }: { number: string, title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-[10px] font-black bg-slate-900 text-white w-6 h-6 flex items-center justify-center rounded-lg">
        {number}
      </span>
      <h2 className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.2em]">{title}</h2>
      <div className="h-[1px] bg-slate-100 flex-1"></div>
    </div>
  );
}

function FormGroup({ label, isTextArea, isThin, ...props }: { label: string, isTextArea?: boolean, isThin?: boolean, [key: string]: any }) {
  const Component = isTextArea ? "textarea" : "input";
  return (
    <div className="space-y-1.5 flex-1">
      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</label>
      <Component
        {...props}
        rows={isTextArea ? 3 : undefined}
        className={`w-full bg-slate-50 border border-slate-200 rounded-xl px-4 ${isThin ? 'py-2.5' : 'py-3'} text-sm outline-none focus:border-red-500 focus:bg-white transition-all placeholder:text-slate-300 font-medium`}
      />
    </div>
  );
}

function SidebarBenefit({ title, desc }: { title: string, desc: string }) {
  return (
    <div>
      <p className="font-bold text-sm tracking-tight text-white">{title}</p>
      <p className="text-slate-400 text-[11px] font-medium mt-1 leading-relaxed">{desc}</p>
    </div>
  );
}