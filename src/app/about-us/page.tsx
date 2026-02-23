import { Target, Users, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex flex-col bg-white">
      
      {/* 1. MINIMAL HERO */}
      <section className="bg-slate-950 py-20 px-6 border-b border-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-red-500 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4 block">
            Our Journey
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
            Standardizing Logistics for the <br />
            <span className="text-red-600 font-light italic text-2xl md:text-4xl">Heart of Central India</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Indore Logistics was founded with a singular vision: to bridge the gap between 
            traditional shipping and modern tech-enabled fulfillment.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY (Side-by-Side) */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden">
               {/* Replace with actual image of Indore warehouse or skyline */}
               <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 text-xs italic">
                 [Local Logistics Infrastructure Image]
               </div>
            </div>
            {/* Subtle floating stat box */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
              <p className="text-3xl font-light text-red-600 tracking-tighter">100%</p>
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Indore Owned</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6 tracking-tight">Built for Indore's Growth</h2>
            <div className="space-y-4 text-slate-500 text-sm font-light leading-relaxed">
              <p>
                From the bustling markets of Rajwada to the corporate hubs of Vijay Nagar, 
                we understand that Indore moves differently. Our network is designed to 
                handle the unique pace of local trade while providing global standards.
              </p>
              <p>
                We don't just move parcels; we move the economy of Madhya Pradesh. 
                By integrating AI-driven routing with a dedicated local fleet, we ensure 
                that small businesses and large enterprises alike have a reliable partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES (Slim Grid) */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">The Principles That Move Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard 
              icon={<ShieldCheck className="w-5 h-5 stroke-[1.5]" />} 
              title="Integrity First" 
              desc="Every shipment is handled with the same care as our very first one." 
            />
            <ValueCard 
              icon={<Zap className="w-5 h-5 stroke-[1.5]" />} 
              title="Speed & Tech" 
              desc="Leveraging real-time data to bypass traffic and delays." 
            />
            <ValueCard 
              icon={<Users className="w-5 h-5 stroke-[1.5]" />} 
              title="Local Expertise" 
              desc="Deep roots in Indore ensure we know every turn of the city." 
            />
            <ValueCard 
              icon={<Target className="w-5 h-5 stroke-[1.5]" />} 
              title="Global Vision" 
              desc="Building infrastructure that connects MP to the world." 
            />
          </div>
        </div>
      </section>

      {/* 4. JOIN US CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Be a Part of Our Story</h2>
          <p className="text-slate-500 text-sm font-light mb-8 leading-relaxed">
            Whether you're looking for a logistics partner or a career in the future of transport, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-red-600 text-white px-8 py-3 rounded-full text-[11px] font-semibold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg shadow-red-200">
              Work With Us
            </Link>
            <Link href="/services" className="border border-slate-200 text-slate-600 px-8 py-3 rounded-full text-[11px] font-semibold uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-2">
              Our Services <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

// --- HELPER COMPONENT ---

function ValueCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:border-red-500/30 transition-all duration-300">
      <div className="text-red-600 mb-4">{icon}</div>
      <h3 className="text-base font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 text-[13px] font-light leading-relaxed">{desc}</p>
    </div>
  );
}