import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Zap, Users, Target, ArrowRight, Award, Globe, Building2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="flex flex-col bg-[#F8FAFC]">
      
      {/* 1. CINEMATIC HERO */}
      <section className="bg-slate-950 pt-24 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="text-red-500 text-[10px] font-black tracking-[0.5em] uppercase mb-6 block">
            Since 2021 • Central India`s Hub
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
            Redefining Logistics for the <br />
            <span className="text-red-600 italic font-light">Heart of Indore</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Indore Logistics was built to bridge the gap between traditional trade and the 
            digital-first economy of Madhya Pradesh.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY (Timeline Spine Style) */}
      <section className="py-24 px-6 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual Side */}
            <div className="relative group">
              <div className="aspect-[4/5] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl relative">
                <Image 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Warehouse Operations" 
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                
                {/* Floating Heritage Badge */}
                <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                    <p className="text-white text-[10px] font-bold uppercase tracking-widest">Est. Indore</p>
                </div>
              </div>

              {/* Floating Performance Box */}
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 hidden md:block">
                <div className="space-y-4">
                  <StatItem value="1M+" label="Parcels Moved" />
                  <div className="h-px bg-slate-100" />
                  <StatItem value="99.9%" label="Local Reliability" />
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:pl-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 mb-6">
                <Building2 size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Local Heritage</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">The Pace of Central India</h2>
              <div className="space-y-6 text-slate-600 text-sm md:text-base font-medium leading-relaxed">
                <p>
                  From the historic lanes of <span className="text-slate-950 font-bold">Rajwada</span> to the soaring 
                  IT parks of <span className="text-slate-950 font-bold">Crystal IT Park</span>, we’ve mapped 
                  every shortcut and bottleneck in the city.
                </p>
                <p>
                  We don’t just deliver boxes; we deliver trust. Our AI-driven routing integrates 
                  seamlessly with our ground fleet of over 200+ dedicated local agents, ensuring 
                  your business never stops moving.
                </p>
                
                <div className="pt-6 grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-2xl border border-slate-100">
                        <Award className="text-red-600 mb-2" size={20} />
                        <h4 className="text-xs font-bold text-slate-900 uppercase">AEO Certified</h4>
                        <p className="text-[10px] text-slate-400">Standardized Ops</p>
                    </div>
                    <div className="p-4 bg-white rounded-2xl border border-slate-100">
                        <Globe className="text-red-600 mb-2" size={20} />
                        <h4 className="text-xs font-bold text-slate-900 uppercase">Pan-India</h4>
                        <p className="text-[10px] text-slate-400">19,000+ Pincodes</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES (High-Density Grid) */}
      <section className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-600 text-[10px] font-black tracking-[0.4em] uppercase mb-3 block">Our DNA</span>
            <h2 className="text-3xl font-bold text-slate-950 tracking-tight italic">Built on Principles</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<ShieldCheck />} 
              title="Integrity First" 
              desc="We treat every local merchant's parcel like it's our own." 
            />
            <ValueCard 
              icon={<Zap />} 
              title="Indore Velocity" 
              desc="Using real-time telemetry to navigate Indore's unique traffic." 
            />
            <ValueCard 
              icon={<Users />} 
              title="Community Rooted" 
              desc="100% of our ground staff are residents of Madhya Pradesh." 
            />
            <ValueCard 
              icon={<Target />} 
              title="Tech Precision" 
              desc="Proprietary scanning tech for zero-error sorting." 
            />
          </div>
        </div>
      </section>

      {/* 4. JOIN US CTA (Modern Inset) */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-slate-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight relative z-10">
            Ready to scale your <br /> logistics?
          </h2>
          <p className="text-slate-400 text-sm font-medium mb-10 max-w-md mx-auto relative z-10">
            Join 500+ Indore businesses who rely on us for their daily fulfillment and shipping needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link href="/contact" className="bg-red-600 text-white px-10 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all shadow-xl shadow-red-900/20">
              Partner With Us
            </Link>
            <Link href="/services" className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
              Explore Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// --- REFINED HELPERS ---

function StatItem({ value, label }: { value: string, label: string }) {
    return (
        <div>
            <p className="text-2xl font-bold text-slate-950 tracking-tighter">{value}</p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
        </div>
    );
}

function ValueCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="group bg-[#F8FAFC] p-8 rounded-3xl border border-transparent hover:border-red-500/10 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500">
      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-red-600 mb-6 shadow-sm border border-slate-100 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">{title}</h3>
      <p className="text-slate-500 text-[13px] font-medium leading-relaxed">{desc}</p>
    </div>
  );
}