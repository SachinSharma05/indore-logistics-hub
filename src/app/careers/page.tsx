import Link from 'next/link';
import React from 'react';
import { Briefcase, MapPin, Clock, Rocket, ShieldCheck, Heart, MoveRight, Search, Play, ChevronRight } from "lucide-react";

export default function CareersPage() {
  const jobs = [
    {
      title: "Logistics Operations Manager",
      department: "Operations",
      location: "Dewas Naka Hub",
      type: "Full-Time",
      posted: "2 days ago"
    },
    {
      title: "Senior Fleet Coordinator",
      department: "Fleet Mgmt",
      location: "Vijay Nagar HQ",
      type: "Full-Time",
      posted: "5 days ago"
    },
    {
      title: "D2C Account Executive",
      department: "Sales",
      location: "Remote / Indore",
      type: "Contract",
      posted: "1 week ago"
    },
    {
      title: "Warehouse Lead Hand",
      department: "Warehouse",
      location: "Pithampur Hub",
      type: "Full-Time",
      posted: "3 days ago"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* --- 1. HERO: Clean Shiprocket Professionalism --- */}
      <section className="bg-[#f9fafb] py-20 px-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <p className="text-[#6366F1] text-[12px] font-bold uppercase tracking-wider mb-3">
            Join the Movement
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Build the backbone of <br className="hidden md:block" /> 
            <span className="text-[#7C3AED]">Central Indian Trade</span>
          </h1>
          <p className="text-slate-600 text-[16px] leading-relaxed max-w-2xl mx-auto font-normal">
            We aren’t just moving parcels; we’re engineering the infrastructure that 
            powers Indore’s economic growth. Join our mission to revolutionize logistics.
          </p>
          <div className="mt-8">
            <a href="#openings" className="bg-[#7C3AED] text-white px-8 py-3 rounded-md text-[14px] font-bold hover:bg-[#6D28D9] transition-all shadow-lg shadow-indigo-100">
              View Open Roles
            </a>
          </div>
        </div>
      </section>

      {/* --- 2. CULTURE GRID: High-Density Utility --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <CultureCard 
              icon={<Rocket className="text-indigo-600" />}
              title="Rapid Growth"
              desc="Join a fast-scaling startup where your contributions directly impact the city's supply chain."
            />
            <CultureCard 
              icon={<Heart className="text-rose-500" />}
              title="Local Pride"
              desc="We are 100% Indore-owned. Our success is the city's success. We value our local heritage."
            />
            <CultureCard 
              icon={<ShieldCheck className="text-emerald-600" />}
              title="Tech-First"
              desc="From AI routing to automated sorting, we use the best tools to make your work efficient."
            />
          </div>
        </div>
      </section>

      {/* --- 3. OPEN POSITIONS --- */}
      <section id="openings" className="py-20 px-6 bg-[#fcfdff] border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Open Opportunities</h2>
              <p className="text-slate-500 text-[14px] font-medium mt-1">Find your next challenge in logistics.</p>
            </div>
            
            {/* Search Filter Utility */}
            <div className="relative">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
               <input 
                 type="text" 
                 placeholder="Search roles..." 
                 className="bg-white border border-slate-200 rounded-md pl-10 pr-4 py-2 text-[14px] font-medium outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/5 transition-all w-full md:w-64"
               />
            </div>
          </div>

          {/* Job List */}
          <div className="space-y-3">
            {jobs.map((job, index) => (
              <JobRow key={index} {...job} />
            ))}
          </div>

          {/* Spontaneous Application: Styled as a Utility Box */}
          <div className="mt-12 bg-white rounded-xl p-8 border border-dashed border-slate-300 text-center">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Don’t see a perfect fit?</h3>
              <p className="text-slate-500 text-[14px] mb-6">We’re always looking for hungry talent. Send us your resume anyway.</p>
              <Link href="mailto:careers@indorelogistics.com" className="inline-flex items-center gap-2 text-[#7C3AED] font-bold text-[13px] uppercase tracking-wider hover:gap-3 transition-all">
                General Application <MoveRight size={16} />
              </Link>
          </div>
        </div>
      </section>

      {/* --- 4. PERKS SECTION: Clean B2B Dark Style --- */}
      <section className="py-20 bg-[#0F172A] text-white px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#6366F1] text-[11px] font-bold uppercase tracking-widest mb-4 block">The IL Life</span>
            <h2 className="text-3xl font-bold mb-10 tracking-tight">Standard perks for our <br/> Extraordinary team.</h2>
            
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
              <PerkItem title="Health & Safety" desc="Full medical insurance & workplace safety protocols." />
              <PerkItem title="Skill Training" desc="Regular workshops on AI tools & supply chain mgmt." />
              <PerkItem title="Performance Bonus" desc="Quarterly incentives for hub and delivery excellence." />
              <PerkItem title="City Connectivity" desc="Subsidized transport for our operational staff." />
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video bg-slate-900 rounded-xl border border-slate-800 overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-slate-950/20 z-10 transition-colors group-hover:bg-slate-950/40" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-14 h-14 bg-[#7C3AED] rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                        <Play className="text-white fill-white ml-1" size={20} />
                    </div>
                </div>
                {/* Background Image of Indore Hub */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.1em] mt-5 text-center">
              Watch: A Day in the Life at Indore Logistics
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

// --- REFINED COMPONENTS ---

function CultureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-[#7C3AED]/20 hover:shadow-lg transition-all">
      <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-6 border border-slate-100">
        {icon}
      </div>
      <h3 className="text-[17px] font-bold text-slate-900 mb-3 tracking-tight">{title}</h3>
      <p className="text-slate-500 text-[14px] leading-relaxed font-medium">{desc}</p>
    </div>
  );
}

function JobRow({ title, department, location, type, posted }: { title: string, department: string, location: string, type: string, posted: string }) {
  return (
    <div className="group bg-white border border-slate-200 p-5 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#7C3AED]/40 hover:shadow-md transition-all">
      <div>
        <h4 className="text-[15px] font-bold text-slate-900 mb-2">{title}</h4>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
           <span className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-tight">
             <Briefcase size={13} className="text-slate-300"/> {department}
           </span>
           <span className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-tight">
             <MapPin size={13} className="text-slate-300"/> {location}
           </span>
           <span className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-tight">
             <Clock size={13} className="text-slate-300"/> {type}
           </span>
        </div>
      </div>
      <div className="flex items-center justify-between md:justify-end gap-5 border-t md:border-t-0 pt-4 md:pt-0 border-slate-100">
        <p className="text-[11px] font-bold text-slate-300 uppercase">{posted}</p>
        <Link href={`/careers/apply?role=${encodeURIComponent(title)}`} className="bg-slate-50 text-slate-700 px-4 py-2 rounded-md font-bold text-[12px] group-hover:bg-[#7C3AED] group-hover:text-white transition-all flex items-center gap-2">
          Apply <ChevronRight size={14} />
        </Link>
      </div>
    </div>
  );
}

function PerkItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="border-l-2 border-[#7C3AED] pl-4">
      <h4 className="text-[13px] font-bold text-white mb-2 uppercase tracking-wider">{title}</h4>
      <p className="text-slate-400 text-[13px] leading-relaxed">{desc}</p>
    </div>
  );
}