import Link from 'next/link';
import { Lock, ShieldCheck, ArrowRight, Package } from "lucide-react";
import { loginUser } from "./actions";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex bg-white font-sans selection:bg-red-100 selection:text-red-600">
      
      {/* --- LEFT SIDE: THE MANIFEST (FORM) --- */}
      <div className="w-full lg:w-[45%] flex items-center justify-center p-8 md:p-16 bg-white relative">
        <div className="max-w-sm w-full">
          
          {/* Logo & Header */}
          <div className="mb-12">
            <Link href="/" className="flex items-center gap-3 mb-12 group">
              <div className="bg-slate-950 p-2 rounded-xl transition-colors group-hover:bg-red-600">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold tracking-tight text-slate-950">
                Indore<span className="text-red-600 italic font-light">Hub</span>
              </span>
            </Link>
            <h1 className="text-3xl font-semibold text-slate-950 mb-2 tracking-tight">Access Portal</h1>
            <p className="text-[13px] text-slate-400 font-light leading-relaxed">
              Enter your credentials to manage your logistics manifest and real-time shipments.
            </p>
          </div>

          <form action={loginUser} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                Institutional Email
              </label>
              <input 
                type="email"
                name="email"   // IMPORTANT
                required
                placeholder="name@company.com" 
                className="w-full px-5 py-4 text-sm rounded-full bg-slate-50 border border-slate-100 outline-none focus:border-red-500 focus:bg-white transition-all placeholder:text-slate-300"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center mb-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                  Access Key
                </label>
                <Link href="/forgot-password" className="text-[10px] font-bold text-red-600 uppercase tracking-widest hover:text-slate-950 transition-colors">
                  Forgot?
                </Link>
              </div>

              <div className="relative">
                <input 
                  type="password"
                  name="password"   // IMPORTANT
                  required
                  placeholder="••••••••" 
                  className="w-full px-5 py-4 text-sm rounded-full bg-slate-50 border border-slate-100 outline-none focus:border-red-500 focus:bg-white transition-all placeholder:text-slate-300"
                />
                <Lock className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              </div>
            </div>

            <button type="submit" className="w-full bg-slate-950 text-white py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-red-600 shadow-xl shadow-slate-200 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-3">
              Authorize Access <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="mt-12 text-center text-[11px] text-slate-500 font-medium uppercase tracking-widest">
            New to the Hub? {' '}
            <Link href="/register" className="text-red-600 font-bold hover:text-slate-950 transition-colors border-b border-red-200 pb-0.5">Initialize Account</Link>
          </p>
        </div>

        {/* Subtle Footer for Form Side */}
        <div className="absolute bottom-8 text-[9px] text-slate-300 uppercase tracking-[0.3em] font-medium">
          © 2026 Indore Logistics Holdings
        </div>
      </div>

      {/* --- RIGHT SIDE: BRANDING (HIGH-END INDUSTRIAL) --- */}
      <div className="hidden lg:flex lg:w-[55%] bg-slate-950 p-16 items-center justify-center relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]"></div>
        
        <div className="relative z-10 max-w-lg w-full">
          <div className="bg-white/[0.03] border border-white/10 rounded-[3rem] p-12 backdrop-blur-xl">
            <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-red-900/40">
                <ShieldCheck className="w-7 h-7 text-white stroke-[1.5]" />
            </div>
            
            <h2 className="text-4xl font-semibold text-white mb-6 leading-[1.1] tracking-tight">
              Enterprise Grade <br />
              <span className="text-red-600 font-light italic">Secure Logistics.</span>
            </h2>
            
            <p className="text-slate-400 text-sm mb-10 leading-relaxed font-light">
              Join Indore’s elite business network using our encrypted platform for real-time fleet visibility and autonomous delivery verification.
            </p>

            <div className="space-y-4 border-t border-white/10 pt-8">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-[10px] text-white font-bold italic">
                      {i === 1 ? 'S' : i === 2 ? 'L' : 'M'}
                    </div>
                  ))}
                </div>
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Priority Merchant Network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}