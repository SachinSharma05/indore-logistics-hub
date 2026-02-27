"use client";

import Link from 'next/link';
import { 
  ArrowRight, 
  Package, 
  ShieldCheck, 
  Globe, 
  ChevronDown,
  Star
} from "lucide-react";
import { registerUser } from "./actions";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row bg-white selection:bg-indigo-100 selection:text-[#7C3AED]">
      
      {/* --- LEFT SIDE: THE BRAND MANIFESTO --- */}
      <div className="hidden lg:flex lg:w-[45%] bg-[#0F172A] p-16 items-center justify-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#7C3AED]/10 rounded-full blur-[100px]"></div>

        <div className="relative z-10 max-w-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest mb-10">
            <Globe className="w-3.5 h-3.5 text-[#7C3AED]" /> Regional Network • Global Standards
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-8 tracking-tight leading-tight">
            Scale your <br />
            <span className="text-[#7C3AED]">logistics operations.</span>
          </h2>

          <div className="space-y-8">
            <FeatureItem 
              icon={<Package className="w-4 h-4" />} 
              title="Bulk Fulfilment" 
              desc="Optimized routes for Indore's major commercial hubs like Pithampur & Dewas Naka." 
            />
            <FeatureItem 
              icon={<ShieldCheck className="w-4 h-4" />} 
              title="Secured Transit" 
              desc="End-to-end encrypted shipment manifests for your business peace of mind." 
            />
          </div>

          <div className="mt-16 pt-10 border-t border-white/10">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#7C3AED] text-[#7C3AED]" />
              ))}
            </div>
            <p className="text-slate-400 text-[14px] leading-relaxed italic mb-6">
              The onboarding was surprisingly fast. I was tracking my first shipment manifest in under 2 minutes.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-[11px] text-white font-bold border border-white/10">
                AK
              </div>
              <div>
                <p className="text-white text-[13px] font-bold">Amit K.</p>
                <p className="text-slate-500 text-[11px] uppercase tracking-wider font-medium">Merchant, Vijay Nagar</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- RIGHT SIDE: ENROLLMENT FORM --- */}
      <div className="w-full lg:w-[55%] flex items-center justify-center p-8 md:p-16 bg-white">
        <div className="max-w-md w-full">
          
          <div className="mb-10">
            <Link href="/" className="flex items-center gap-2 mb-8 group">
              <div className="bg-[#7C3AED] p-2 rounded-lg transition-transform group-hover:scale-110">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900 uppercase">IndoreLogistics</span>
            </Link>
            <h1 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Create your account</h1>
            <p className="text-[14px] text-slate-500 font-medium">Join 5,000+ businesses powering Central India`s trade.</p>
          </div>

          <form action={registerUser} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <FormGroup label="First Name" placeholder="Rahul" />
              <FormGroup label="Last Name" placeholder="Sharma" />
            </div>

            <FormGroup label="Institutional Email" type="email" placeholder="rahul@company.com" />
            <FormGroup label="Phone Number" type="tel" placeholder="+91 00000 00000" />
            <FormGroup label="Access Key (Password)" type="password" placeholder="••••••••" />

            <div className="space-y-2">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block ml-1">Account Type</label>
              <div className="relative">
                <select className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-[14px] font-medium outline-none focus:border-[#7C3AED] focus:bg-white focus:ring-4 focus:ring-indigo-500/5 transition-all appearance-none cursor-pointer">
                  <option>Personal (Individual Merchant)</option>
                  <option>Business (Corporate / Bulk)</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div className="text-[12px] text-slate-500 leading-relaxed pt-2">
              By clicking Confirm, you agree to our 
              <Link href="#" className="text-[#7C3AED] font-bold mx-1 hover:underline">Terms of Service</Link> 
              and 
              <Link href="#" className="text-[#7C3AED] font-bold mx-1 hover:underline">Privacy Policy</Link>.
            </div>

            <button className="w-full bg-[#7C3AED] text-white py-4 rounded-md text-[14px] font-bold hover:bg-[#6D28D9] shadow-lg shadow-indigo-100 transition-all flex items-center justify-center gap-2 group mt-2">
              Confirm & Initialize <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="mt-10 text-center text-[13px] text-slate-500 font-medium">
            Already a member? {' '}
            <Link href="/login" className="text-[#7C3AED] font-bold hover:underline">Sign in instead</Link>
          </p>
        </div>
      </div>
    </main>
  );
}

// --- HELPER COMPONENTS ---

function FormGroup({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="space-y-2">
      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block ml-1">
        {label}
      </label>
      <input 
        {...props}
        className="w-full px-4 py-3 text-[14px] rounded-md bg-slate-50 border border-slate-200 outline-none focus:border-[#7C3AED] focus:bg-white focus:ring-4 focus:ring-indigo-500/5 transition-all placeholder:text-slate-400 font-medium"
      />
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="mt-1 p-2 bg-[#7C3AED]/10 rounded-md text-[#7C3AED] border border-[#7C3AED]/20">
        {icon}
      </div>
      <div>
        <p className="text-white text-[15px] font-bold tracking-tight">{title}</p>
        <p className="text-slate-400 text-[13px] leading-relaxed mt-1 font-medium">{desc}</p>
      </div>
    </div>
  );
}