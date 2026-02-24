import { Target, Users, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import Link from 'next/link';
import Image from "next/image";

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
          <div className="relative group">
            {/* The Image Container */}
            <div className="aspect-square bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200">
              <Image 
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop" 
                alt="Indore Logistics Infrastructure" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle dark overlay to make the floating box pop */}
              <div className="absolute inset-0 bg-slate-950/5 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* Precise Spine Detail (to match Hero style) */}
            <div className="absolute -left-4 top-10 bottom-10 w-px bg-red-600/20 hidden lg:block"></div>

            {/* Floating Stat Box - Enhanced Design */}
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-50 hidden md:block animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="flex flex-col items-center">
                <p className="text-4xl font-light text-red-600 tracking-tighter leading-none">100%</p>
                <div className="h-px w-8 bg-slate-100 my-3"></div>
                <p className="text-[10px] font-bold text-slate-950 uppercase tracking-[0.2em]">Indore Owned</p>
                <p className="text-[8px] text-slate-400 font-medium uppercase tracking-widest mt-1">Local Heritage</p>
              </div>
            </div>
            
            {/* Decorative Background Element */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-600/5 rounded-full blur-3xl -z-10"></div>
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