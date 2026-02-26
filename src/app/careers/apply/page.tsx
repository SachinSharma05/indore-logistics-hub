import { ArrowLeft, Upload, FileText, ShieldCheck, CheckCircle2, MoveRight } from "lucide-react";
import Link from 'next/link';

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      
      {/* --- 1. MINIMAL NAV/HEADER --- */}
      <nav className="py-8 px-6 max-w-7xl mx-auto">
        <Link href="/careers" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-red-600 transition-colors">
          <ArrowLeft size={14} /> Back to Openings
        </Link>
      </nav>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          
          {/* --- LEFT: ROLE SUMMARY (5 Cols) --- */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="text-red-600 text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Application Portal</span>
              <h1 className="text-4xl font-bold text-slate-950 tracking-tight mb-6">Operations Manager</h1>
              <div className="flex flex-wrap gap-4">
                 <Tag label="Full-Time" />
                 <Tag label="Dewas Naka Hub" />
                 <Tag label="Operations" />
              </div>
            </div>

            <div className="space-y-8">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-4">Our Selection Process</h3>
                <ProcessStep 
                    number="01" 
                    title="Profile Verification" 
                    desc="Our HR team reviews your resume and background details for role alignment." 
                />
                <ProcessStep 
                    number="02" 
                    title="Initial Screening" 
                    desc="A brief 15-minute call to discuss your experience and expectations." 
                />
                <ProcessStep 
                    number="03" 
                    title="Technical Discussion" 
                    desc="In-person meeting at our Vijay Nagar HQ with the Department Head." 
                />
            </div>

            <div className="bg-slate-950 p-8 rounded-[2rem] text-white">
                <ShieldCheck className="text-red-600 mb-4" size={32} />
                <h4 className="font-bold text-lg mb-2 tracking-tight">Data Privacy</h4>
                <p className="text-slate-400 text-xs font-medium leading-relaxed">
                    Your personal information is encrypted and only accessible by our recruitment 
                    officers. We never share applicant data with third parties.
                </p>
            </div>
          </div>

          {/* --- RIGHT: THE FORM (7 Cols) --- */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-200 shadow-2xl shadow-slate-200/40">
              <form className="space-y-10">
                
                {/* Personal Section */}
                <div>
                    <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                       <span className="w-8 h-px bg-slate-100" /> Personal Details
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <FormInput label="Full Name" placeholder="e.g. Rahul Sharma" />
                        <FormInput label="Phone Number" placeholder="+91 00000 00000" />
                        <div className="md:col-span-2">
                            <FormInput label="Email Address" type="email" placeholder="rahul@example.com" />
                        </div>
                    </div>
                </div>

                {/* Professional Section */}
                <div>
                    <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                       <span className="w-8 h-px bg-slate-100" /> Professional Background
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <FormInput label="Current Organization" placeholder="Company Name" />
                        <FormInput label="Total Experience" placeholder="e.g. 5 Years" />
                        <div className="md:col-span-2">
                            <FormInput label="LinkedIn Profile (Optional)" placeholder="linkedin.com/in/username" />
                        </div>
                    </div>
                </div>

                {/* Resume Upload */}
                <div>
                    <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6 block">Resume / CV</h2>
                    <div className="relative group cursor-pointer">
                        <input 
                            type="file" 
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                        />
                        <div className="border-2 border-dashed border-slate-200 rounded-[2rem] p-12 text-center group-hover:border-red-600 group-hover:bg-red-50/30 transition-all duration-500">
                            <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:text-red-600 transition-colors">
                                <Upload size={24} />
                            </div>
                            <p className="text-slate-900 font-bold text-sm">Upload your Resume</p>
                            <p className="text-slate-400 text-xs mt-1">PDF or Word (Max 5MB)</p>
                        </div>
                    </div>
                </div>

                {/* Submit */}
                <div className="pt-6">
                    <button className="w-full bg-slate-950 text-white py-6 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-red-600 transition-all shadow-xl shadow-slate-950/10 flex items-center justify-center gap-4">
                        Submit Application <MoveRight size={16} />
                    </button>
                    <p className="text-center text-slate-400 text-[10px] font-medium mt-6">
                        By clicking submit, you agree to our Terms of Recruitment and Privacy Policy.
                    </p>
                </div>

              </form>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

// --- HELPERS ---

function Tag({ label }: { label: string }) {
    return (
        <span className="bg-white border border-slate-200 px-4 py-1.5 rounded-lg text-[10px] font-black text-slate-600 uppercase tracking-widest">
            {label}
        </span>
    );
}

function ProcessStep({ number, title, desc }: { number: string, title: string, desc: string }) {
    return (
        <div className="flex gap-6">
            <span className="text-red-600 font-black text-lg italic tracking-tighter">{number}</span>
            <div>
                <h4 className="text-slate-950 font-bold text-sm mb-1">{title}</h4>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}

function FormInput({ label, ...props }: any) {
  return (
    <div className="space-y-3">
      <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] block ml-1">{label}</label>
      <input 
        {...props}
        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-4 focus:ring-red-500/5 focus:border-red-600 text-sm font-medium transition-all placeholder:text-slate-300" 
      />
    </div>
  );
}