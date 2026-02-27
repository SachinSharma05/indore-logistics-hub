import Link from 'next/link';
import { 
  Package, 
  Lock, 
  ArrowRight, 
  ShieldCheck, 
  Mail,
  CheckCircle2
} from "lucide-react";
import { loginUser } from "./actions";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex bg-white font-sans selection:bg-indigo-100 selection:text-[#7C3AED]">
      
      {/* --- LEFT SIDE: THE MANIFEST (FORM) --- */}
      <div className="w-full lg:w-[45%] flex items-center justify-center p-8 md:p-16 bg-white relative border-r border-slate-100">
        <div className="max-w-sm w-full">
          
          {/* Logo & Header */}
          <div className="mb-10">
            <Link href="/" className="flex items-center gap-3 mb-10 group">
              <div className="bg-[#7C3AED] p-2 rounded-lg transition-transform group-hover:scale-110">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Indore<span className="text-[#7C3AED]">Logistics</span>
              </span>
            </Link>
            <h1 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Welcome back</h1>
            <p className="text-[14px] text-slate-500 font-medium">
              Manage your shipments and real-time manifests.
            </p>
          </div>

          <form action={loginUser} className="space-y-5">
            <div className="space-y-2">
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Institutional Email
              </label>
              <div className="relative">
                <input 
                  type="email"
                  name="email"
                  required
                  placeholder="name@company.com" 
                  className="w-full pl-11 pr-5 py-3 text-[14px] rounded-md bg-slate-50 border border-slate-200 outline-none focus:border-[#7C3AED] focus:bg-white focus:ring-4 focus:ring-indigo-500/5 transition-all placeholder:text-slate-400"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Access Key
                </label>
                <Link href="#" className="text-[11px] font-bold text-[#7C3AED] hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <div className="relative">
                <input 
                  type="password"
                  name="password"
                  required
                  placeholder="••••••••" 
                  className="w-full pl-11 pr-5 py-3 text-[14px] rounded-md bg-slate-50 border border-slate-200 outline-none focus:border-[#7C3AED] focus:bg-white focus:ring-4 focus:ring-indigo-500/5 transition-all placeholder:text-slate-400"
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
            </div>

            <button type="submit" className="w-full bg-[#7C3AED] text-white py-3.5 rounded-md text-[14px] font-bold hover:bg-[#6D28D9] shadow-lg shadow-indigo-100 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2">
              Sign In <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="mt-10 text-center text-[13px] text-slate-500 font-medium">
            New to the Hub? {' '}
            <Link href="/register" className="text-[#7C3AED] font-bold hover:underline">Create an account</Link>
          </p>
        </div>

        {/* Branding Footer */}
        <div className="absolute bottom-8 text-[11px] text-slate-400 font-bold uppercase tracking-widest">
          © 2026 Indore Logistics
        </div>
      </div>

      {/* --- RIGHT SIDE: BRANDING (LOGISTICS TECH) --- */}
      <div className="hidden lg:flex lg:w-[55%] bg-[#0F172A] p-16 items-center justify-center relative overflow-hidden">
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
        
        <div className="relative z-10 max-w-md w-full">
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-10 backdrop-blur-md">
            <div className="w-12 h-12 bg-[#7C3AED] rounded-lg flex items-center justify-center mb-8 shadow-xl shadow-[#7C3AED]/20">
                <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4 leading-tight tracking-tight">
              Enterprise Grade <br />
              <span className="text-[#7C3AED]">Secure Logistics.</span>
            </h2>
            
            <p className="text-slate-400 text-[15px] mb-8 leading-relaxed font-normal">
              Indore’s most trusted network for real-time fleet visibility and autonomous delivery verification.
            </p>

            <div className="space-y-4 border-t border-white/5 pt-8">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0F172A] bg-slate-800 flex items-center justify-center text-[10px] text-white font-bold">
                      {i === 1 ? 'JD' : i === 2 ? 'AS' : 'RK'}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#10B981]" />
                    <p className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">Trusted by 500+ Merchants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}