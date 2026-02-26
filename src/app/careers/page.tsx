import { Briefcase, MapPin, Clock, Users, Rocket, ShieldCheck, Heart, ArrowRight, MoveRight, Search } from "lucide-react";
import Link from 'next/link';

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
    <main className="min-h-screen bg-[#F8FAFC]">
      
      {/* --- 1. HERO: The Vision --- */}
      <section className="bg-slate-950 pt-24 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#ef44440a,transparent)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="text-red-600 text-[10px] font-black tracking-[0.5em] uppercase mb-6 block">
            Join the Movement
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Build the backbone of <br />
            <span className="text-red-600 italic font-light">Central Indian Trade.</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            We aren`t just moving parcels; we`re engineering the infrastructure that 
            powers Indore`s economic growth. Join our mission.
          </p>
        </div>
      </section>

      {/* --- 2. CULTURE GRID --- */}
      <section className="py-24 px-6 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <CultureCard 
            icon={<Rocket className="text-red-600" />}
            title="Rapid Growth"
            desc="Join a fast-scaling startup where your contributions directly impact the city's supply chain."
          />
          <CultureCard 
            icon={<Heart className="text-red-600" />}
            title="Local Pride"
            desc="We are 100% Indore-owned. Our success is the city's success. We value our local heritage."
          />
          <CultureCard 
            icon={<ShieldCheck className="text-red-600" />}
            title="Tech-First"
            desc="From AI routing to automated sorting, we use the best tools to make your work efficient."
          />
        </div>
      </section>

      {/* --- 3. OPEN POSITIONS --- */}
      <section className="py-5 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-950 tracking-tight">Open Opportunities</h2>
              <p className="text-slate-500 text-sm font-medium mt-2">Find your next challenge in logistics.</p>
            </div>
            
            {/* Search Filter Mockup */}
            <div className="relative group">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-600 transition-colors" size={16} />
               <input 
                 type="text" 
                 placeholder="Search roles..." 
                 className="bg-white border border-slate-200 rounded-xl pl-12 pr-6 py-3 text-sm font-medium outline-none focus:border-red-600 focus:ring-4 focus:ring-red-500/5 transition-all w-full md:w-64"
               />
            </div>
          </div>

          {/* Job List */}
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <JobRow key={index} {...job} />
            ))}
          </div>

          {/* Spontaneous Application */}
          <div className="mt-16 bg-white rounded-[2.5rem] p-10 border border-dashed border-slate-300 text-center">
             <h3 className="text-xl font-bold text-slate-900 mb-2">Don`t see a perfect fit?</h3>
             <p className="text-slate-500 text-sm font-medium mb-8">We`re always looking for hungry talent. Send us your resume anyway.</p>
             <Link href="mailto:careers@indorelogistics.com" className="inline-flex items-center gap-2 text-red-600 font-black text-[10px] uppercase tracking-widest hover:gap-4 transition-all">
               General Application <MoveRight size={14} />
             </Link>
          </div>
        </div>
      </section>

      {/* --- 4. PERKS SECTION --- */}
      <section className="py-24 bg-slate-950 text-white px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-red-600 text-[10px] font-black tracking-[0.4em] uppercase mb-6 block">The IL Life</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">Standard perks for our <br/> Extraordinary team.</h2>
            
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
              <PerkItem title="Health & Safety" desc="Full medical insurance & workplace safety protocols." />
              <PerkItem title="Skill Training" desc="Regular workshops on AI tools & supply chain mgmt." />
              <PerkItem title="Performance Bonus" desc="Quarterly incentives for hub and delivery excellence." />
              <PerkItem title="City Connectivity" desc="Subsidized transport for our operational staff." />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-slate-900 rounded-[2.5rem] border border-white/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-slate-950/40 z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                        <ArrowRight className="text-white" />
                    </div>
                </div>
                {/* Background Image of Indore Hub Operations */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-6 text-center">Watch: A Day in the Life at Indore Logistics</p>
          </div>
        </div>
      </section>
    </main>
  );
}

// --- REFINED COMPONENTS ---

function CultureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-8">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-950 mb-4 tracking-tight">{title}</h3>
      <p className="text-slate-500 text-sm font-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function JobRow({ title, department, location, type, posted }: { title: string, department: string, location: string, type: string, posted: string }) {
  return (
    <div className="group bg-white border border-slate-200 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-red-600 transition-all duration-500">
      <div className="space-y-1">
        <h4 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors tracking-tight">{title}</h4>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
           <span className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest"><Briefcase size={12}/> {department}</span>
           <span className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest"><MapPin size={12}/> {location}</span>
           <span className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest"><Clock size={12}/> {type}</span>
        </div>
      </div>
      <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0 border-slate-50">
        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{posted}</p>
        <Link href={`/careers/apply?role=${encodeURIComponent(title)}`} className="text-red-600 font-black text-[10px] uppercase tracking-widest hover:gap-2 transition-all inline-flex items-center gap-1.5">
          Apply Now <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}

function PerkItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-widest border-l-2 border-red-600 pl-4">{title}</h4>
      <p className="text-slate-500 text-xs font-medium leading-relaxed pl-4">{desc}</p>
    </div>
  );
}