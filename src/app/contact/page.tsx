import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Twitter, ArrowRight, Globe, MessageSquare } from "lucide-react";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* --- 1. CLEAN HERO: Shiprocket Style --- */}
      <section className="bg-[#f9fafb] py-16 px-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <p className="text-[#6366F1] text-[12px] font-bold uppercase tracking-wider mb-3">
            Contact Our Team
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Let’s synchronize your <span className="text-[#7C3AED]">supply chain</span>
          </h1>
          <p className="text-slate-600 text-[15px] leading-relaxed max-w-2xl mx-auto">
            From our Vijay Nagar headquarters to your doorstep, our Indore-based 
            dispatch command is ready to help you scale.
          </p>
        </div>
      </section>

      {/* --- 2. CONTACT HUB: The Grid --- */}
      <section className="py-16 px-6 relative z-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10">
          
          {/* Left Column: Utility Information (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-2">
                <MessageSquare size={14} className="text-[#7C3AED]" /> Direct Support
              </h3>
              
              <div className="space-y-8">
                <ContactMethod 
                  icon={<Phone size={18} className="text-indigo-600" />} 
                  label="Dispatch Hotline" 
                  value="+91 93403 84339" 
                  sub="24/7 Priority Support"
                />
                <ContactMethod 
                  icon={<Mail size={18} className="text-purple-600" />} 
                  label="Business Inquiry" 
                  value="solutions@indorelogistics.com" 
                  sub="Avg response: 2 hours"
                />
                <ContactMethod 
                  icon={<MapPin size={18} className="text-red-500" />} 
                  label="Regional HQ" 
                  value="Vijay Nagar, Indore, MP 452010" 
                  sub="Open Mon-Sat, 9am-8pm"
                />
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Follow Updates</h4>
                  <div className="flex gap-2">
                    <SocialIcon icon={<Linkedin size={16} />} />
                    <SocialIcon icon={<Twitter size={16} />} />
                  </div>
                </div>
                <div className="text-right">
                    <h4 className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-1 flex items-center gap-2 justify-end">
                       <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse" /> Live
                    </h4>
                    <p className="text-[13px] font-bold text-slate-900">Agents Online</p>
                </div>
              </div>
            </div>

            {/* AEO Trust Card */}
            <div className="bg-[#0F172A] p-6 rounded-xl text-white flex items-center gap-5 border border-slate-800">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-[#7C3AED]">
                    <Globe size={20} />
                </div>
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Certification</p>
                    <p className="text-[13px] font-medium leading-snug">Indore`s first AEO-Certified <br/>private logistics provider.</p>
                </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-xl border border-slate-200 shadow-xl shadow-slate-100">
              <div className="mb-8">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-2">Send an Inquiry</h2>
                <p className="text-slate-500 text-[14px]">Fill out the form and a logistics expert will contact you shortly.</p>
              </div>
              
              <form className="grid md:grid-cols-2 gap-x-6 gap-y-6">
                <FormInput label="Full Name" placeholder="Rahul Sharma" />
                <FormInput label="Email Address" type="email" placeholder="rahul@company.com" />
                <div className="md:col-span-2">
                  <FormInput label="Requirement Type" placeholder="E-commerce Shipping / Bulk Cargo / Warehouse" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 block ml-1">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#7C3AED]/10 focus:border-[#7C3AED] text-[14px] font-medium transition-all resize-none placeholder:text-slate-400"
                    placeholder="Describe your cargo, volume, and destination..."
                  />
                </div>
                <div className="md:col-span-2 pt-2">
                  <button className="w-full bg-[#7C3AED] text-white py-4 rounded-lg font-bold text-[14px] uppercase tracking-wider hover:bg-[#6D28D9] transition-all flex items-center justify-center gap-3 shadow-lg shadow-indigo-100">
                    Submit Inquiry <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. MINIMAL MAP SECTION --- */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[400px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
            {/* Map Placeholder */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-50" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white px-5 py-4 rounded-lg shadow-2xl border border-slate-100 flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#7C3AED] rounded flex items-center justify-center text-white">
                        <MapPin size={18} />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">HQ Office</p>
                        <p className="text-[13px] font-bold text-slate-900">Indore Logistics Hub</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// --- SHIPROCKET UI HELPERS ---

function ContactMethod({ icon, label, value, sub }: { icon: React.ReactNode, label: string, value: string, sub: string }) {
  return (
    <div className="flex gap-5 group">
      <div className="w-11 h-11 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center transition-colors group-hover:bg-white group-hover:shadow-md">
        {icon}
      </div>
      <div>
        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
        <p className="text-slate-900 font-bold tracking-tight text-[16px] mb-0.5">{value}</p>
        <p className="text-slate-400 text-[12px]">{sub}</p>
      </div>
    </div>
  );
}

function FormInput({ label, ...props }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block ml-1">{label}</label>
      <input 
        {...props}
        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#7C3AED]/10 focus:border-[#7C3AED] text-[14px] font-medium transition-all placeholder:text-slate-400" 
      />
    </div>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#7C3AED] hover:border-[#7C3AED]/30 hover:bg-white transition-all cursor-pointer">
      {icon}
    </div>
  );
}