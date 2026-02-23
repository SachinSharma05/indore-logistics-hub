"use client";

import Link from 'next/link';
import { Truck, ArrowRight, Package, ShieldCheck, Globe } from "lucide-react";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row bg-white selection:bg-red-100 selection:text-red-600">
      
      {/* --- LEFT SIDE: THE BRAND MANIFESTO --- */}
      <div className="hidden lg:flex lg:w-[50%] bg-slate-950 p-16 items-center justify-center relative overflow-hidden">
        {/* Engineering-style background grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]"></div>

        <div className="relative z-10 max-w-sm">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-white text-[9px] font-bold uppercase tracking-[0.3em] mb-10">
            <Globe className="w-3 h-3 text-red-500" /> Regional Network • Global Standards
          </div>
          
          <h2 className="text-5xl font-semibold text-white mb-8 tracking-tight leading-[1.1]">
            Scale your <br />
            <span className="text-red-600 font-light italic">operations.</span>
          </h2>

          <div className="space-y-6">
            <FeatureItem 
              icon={<Package className="w-4 h-4" />} 
              title="Bulk Fulfilment" 
              desc="Optimized routes for Indore's major commercial hubs." 
            />
            <FeatureItem 
              icon={<ShieldCheck className="w-4 h-4" />} 
              title="Secured Transit" 
              desc="Real-time encryption for every shipment manifest." 
            />
          </div>

          <div className="mt-12 pt-10 border-t border-white/5">
            <p className="text-slate-500 text-[11px] font-medium leading-relaxed italic">
              "The onboarding was surprisingly fast. I was tracking my first shipment in under 2 minutes."
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-[10px] text-white font-bold tracking-tighter">AK</div>
              <div>
                <p className="text-white text-[11px] font-bold">Amit K.</p>
                <p className="text-slate-500 text-[9px] uppercase tracking-widest">Merchant, Vijay Nagar</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- RIGHT SIDE: ENROLLMENT FORM --- */}
      <div className="w-full lg:w-[50%] flex items-center justify-center p-8 md:p-16">
        <div className="max-w-md w-full">
          
          <div className="mb-10">
            <Link href="/" className="lg:hidden flex items-center gap-2 mb-8">
              <div className="bg-slate-950 p-1.5 rounded-lg">
                <Package className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold tracking-tight text-slate-900 uppercase">IndoreHub</span>
            </Link>
            <h1 className="text-3xl font-semibold text-slate-950 mb-2 tracking-tight">Create Account</h1>
            <p className="text-[13px] text-slate-400 font-light">Join the most reliable logistics network in Madhya Pradesh.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <FormGroup label="First Name" placeholder="Rahul" />
              <FormGroup label="Last Name" placeholder="Sharma" />
            </div>

            <FormGroup label="Phone Number" type="tel" placeholder="+91 00000 00000" />

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Account Type</label>
              <select className="w-full px-5 py-4 rounded-full bg-slate-50 border border-slate-100 text-sm font-light outline-none focus:border-red-500 focus:bg-white transition-all appearance-none cursor-pointer">
                <option>Personal (Individual)</option>
                <option>Business (Bulk / Corporate)</option>
              </select>
            </div>

            <div className="text-[11px] text-slate-400 font-light leading-relaxed">
              By initializing your account, you agree to our 
              <Link href="#" className="text-red-600 font-bold mx-1 hover:text-slate-950">Terms</Link> 
              and 
              <Link href="#" className="text-red-600 font-bold mx-1 hover:text-slate-950">Privacy Policy</Link>.
            </div>

            <button className="w-full bg-slate-950 text-white py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-red-600 shadow-xl shadow-slate-200 transition-all flex items-center justify-center gap-3 group">
              Confirm & Initialize <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="mt-10 text-center text-[11px] text-slate-500 font-medium uppercase tracking-widest">
            Existing Member? {' '}
            <Link href="/auth/login" className="text-red-600 font-bold border-b border-red-200 pb-0.5 hover:text-slate-950 transition-colors">Sign in here</Link>
          </p>
        </div>
      </div>
    </main>
  );
}

// --- HELPER COMPONENTS ---

function FormGroup({ label, ...props }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{label}</label>
      <input 
        {...props}
        className="w-full px-5 py-4 text-sm rounded-full bg-slate-50 border border-slate-100 outline-none focus:border-red-500 focus:bg-white transition-all placeholder:text-slate-300 font-light" 
      />
    </div>
  );
}

function FeatureItem({ icon, title, desc }: any) {
  return (
    <div className="flex gap-4 items-start">
      <div className="mt-1 p-2 bg-white/5 rounded-lg text-red-500 border border-white/10">
        {icon}
      </div>
      <div>
        <p className="text-white text-xs font-semibold tracking-tight">{title}</p>
        <p className="text-slate-500 text-[11px] font-light leading-relaxed mt-0.5">{desc}</p>
      </div>
    </div>
  );
}