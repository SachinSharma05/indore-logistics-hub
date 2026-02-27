import Link from 'next/link';
import React from 'react';
import { ArrowLeft, Upload, FileText, ShieldCheck, CheckCircle2, MoveRight } from "lucide-react";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* --- 1. MINIMAL NAV --- */}
      <nav className="py-6 px-6 border-b border-slate-100 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto">
          <Link href="/careers" className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-tight text-slate-500 hover:text-[#7C3AED] transition-colors">
            <ArrowLeft size={14} /> Back to Open Positions
          </Link>
        </div>
      </nav>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">
          
          {/* --- LEFT: ROLE SUMMARY (5 Cols) --- */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-[#6366F1] text-[11px] font-bold tracking-widest uppercase mb-3 block">Application Portal</span>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-5">Operations Manager</h1>
              <div className="flex flex-wrap gap-2">
                 <Tag label="Full-Time" />
                 <Tag label="Dewas Naka Hub" />
                 <Tag label="Operations" />
              </div>
            </div>

            <div className="space-y-6">
                <h3 className="text-[13px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3">Hiring Process</h3>
                <ProcessStep 
                    number="01" 
                    title="Profile Verification" 
                    desc="Our HR team reviews your resume for technical alignment." 
                />
                <ProcessStep 
                    number="02" 
                    title="Initial Screening" 
                    desc="A brief 15-minute call to discuss your logistics background." 
                />
                <ProcessStep 
                    number="03" 
                    title="Technical Discussion" 
                    desc="In-person meeting at our Vijay Nagar HQ with the Hub Lead." 
                />
            </div>

            <div className="bg-[#f8fafc] p-6 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="text-[#7C3AED]" size={20} />
                  <h4 className="font-bold text-[15px] text-slate-900 tracking-tight">Data Privacy</h4>
                </div>
                <p className="text-slate-500 text-[13px] leading-relaxed">
                    Your personal information is encrypted and only accessible by our recruitment 
                    officers. We never share applicant data with third parties.
                </p>
            </div>
          </div>

          {/* --- RIGHT: THE FORM (7 Cols) --- */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-xl border border-slate-200 shadow-xl shadow-slate-100">
              <form className="space-y-8">
                
                {/* Personal Section */}
                <div>
                    <h2 className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                        Personal Details <span className="flex-1 h-px bg-slate-100" />
                    </h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        <FormInput label="Full Name" placeholder="e.g. Rahul Sharma" />
                        <FormInput label="Phone Number" placeholder="+91 00000 00000" />
                        <div className="md:col-span-2">
                            <FormInput label="Email Address" type="email" placeholder="rahul@example.com" />
                        </div>
                    </div>
                </div>

                {/* Professional Section */}
                <div>
                    <h2 className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                        Professional <span className="flex-1 h-px bg-slate-100" />
                    </h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        <FormInput label="Current Organization" placeholder="Current Company" />
                        <FormInput label="Total Experience" placeholder="e.g. 5 Years" />
                    </div>
                </div>

                {/* Resume Upload */}
                <div>
                    <h2 className="text-[12px] font-bold text-slate-500 uppercase tracking-widest mb-4 block">Resume / CV</h2>
                    <div className="relative group">
                        <input 
                            type="file" 
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                        />
                        <div className="border-2 border-dashed border-slate-200 rounded-lg p-10 text-center group-hover:border-[#7C3AED] group-hover:bg-indigo-50/30 transition-all">
                            <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:text-[#7C3AED] transition-colors">
                                <Upload size={20} />
                            </div>
                            <p className="text-slate-900 font-bold text-[14px]">Click or drag to upload</p>
                            <p className="text-slate-400 text-[12px] mt-1">PDF, DOCX (Max 5MB)</p>
                        </div>
                    </div>
                </div>

                {/* Submit */}
                <div className="pt-4">
                    <button className="w-full bg-[#7C3AED] text-white py-4 rounded-md font-bold text-[14px] uppercase tracking-wider hover:bg-[#6D28D9] transition-all shadow-lg shadow-indigo-100 flex items-center justify-center gap-3">
                        Submit Application <MoveRight size={18} />
                    </button>
                    <div className="flex items-start gap-2 mt-5">
                        <CheckCircle2 size={14} className="text-emerald-500 mt-0.5" />
                        <p className="text-slate-400 text-[11px] leading-snug">
                            By submitting, you agree to our recruitment terms and consent to being contacted regarding this role.
                        </p>
                    </div>
                </div>

              </form>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

// --- REFINED HELPERS ---

function Tag({ label }: { label: string }) {
    return (
        <span className="bg-slate-50 border border-slate-200 px-3 py-1 rounded text-[11px] font-bold text-slate-600 uppercase tracking-tight">
            {label}
        </span>
    );
}

function ProcessStep({ number, title, desc }: { number: string, title: string, desc: string }) {
    return (
        <div className="flex gap-4">
            <span className="text-[#7C3AED] font-bold text-[15px] tabular-nums">{number}.</span>
            <div>
                <h4 className="text-slate-900 font-bold text-[14px] mb-1">{title}</h4>
                <p className="text-slate-500 text-[12px] leading-relaxed">{desc}</p>
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
        className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#7C3AED]/10 focus:border-[#7C3AED] text-[14px] font-medium transition-all placeholder:text-slate-400" 
      />
    </div>
  );
}