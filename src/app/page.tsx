"use client";
import Link from "next/link";
import { Search, ChevronRight, Package, Truck, Building2, Home, ArrowRight, ShieldCheck, ArrowUp } from "lucide-react";
import DeliveryProcess from "@/components/DeliveryProcess";
import { useEffect, useState } from "react";

// Types for Service Card
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// page.tsx ------------------------------------------
export default function HomePage() {
  return (
    <main className="flex flex-col bg-white">
      <ModernHero />
      
      {/* SECTION: SERVICES - Slim & Spacious */}
      <section className="py-12 px-6 border-b border-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
                Logistics Solutions
              </h2>
              <p className="text-sm text-slate-500 font-light mt-1">Professional shipping designed for Indore's business pace.</p>
            </div>
            <Link href="/services" className="text-red-600 text-[11px] font-semibold flex items-center gap-1 hover:text-slate-900 uppercase tracking-widest transition-colors">
              Explore All <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard icon={<Package className="w-5 h-5 stroke-[1.5]" />} title="Ecommerce" description="Full API support and COD management for online sellers." />
            <ServiceCard icon={<Truck className="w-5 h-5 stroke-[1.5]" />} title="Bulk Cargo" description="Heavy industrial parts and equipment shipping solutions." />
            <ServiceCard icon={<Building2 className="w-5 h-5 stroke-[1.5]" />} title="Corporate" description="Priority document handling with digital delivery proof." />
            <ServiceCard icon={<Home className="w-5 h-5 stroke-[1.5]" />} title="Relocation" description="Professional movers for stress-free home shifting." />
          </div>
        </div>
      </section>

      <DeliveryProcess />
      <FinalCTA />
      <ScrollToTop />
    </main>
  );
}

// --- CORE COMPONENTS ---
function ModernHero() {
  return (
    <div className="w-full">
      <section className="relative w-full bg-slate-950 pt-16 pb-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* Slim Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-[11px] font-medium tracking-wider mb-6 uppercase">
            Indore's #1 Logistics Network
          </div>

          {/* Slimmer Heading (Semibold instead of Black) */}
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight">
            Fastest & Secured <br />
            <span className="text-red-600 font-light italic">Logistics Solutions</span>
          </h1>
          
          {/* Light Weight Body Text */}
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-10 font-light leading-relaxed">
            Manage your entire supply chain from a single professional dashboard, 
            built for the speed of modern commerce.
          </p>

          {/* Tracking Bar with subtle borders */}
          <div className="max-w-lg mx-auto bg-white/5 backdrop-blur-sm p-1.5 rounded-full flex flex-col md:flex-row gap-2 border border-white/10">
            <input 
              type="text" 
              placeholder="Enter Tracking ID..." 
              className="bg-transparent flex-1 px-6 py-2.5 outline-none font-light text-sm text-white placeholder:text-slate-500" 
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-2.5 rounded-full text-xs font-medium transition-all">
              Track Now
            </button>
          </div>
        </div>
      </section>

      {/* COMPACT STATS OVERLAP */}
      <section className="relative -mt-10 z-30 px-6">
        <div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-lg shadow-sm p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatItem label="Active Shipments" value="50k+" />
          <StatItem label="Success Rate" value="99.8%" />
          <StatItem label="Pincodes" value="150+" />
          <StatItem label="Support" value="24/7" />
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-red-100 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500">
      <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 mb-6">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">{title}</h3>
      <p className="text-slate-500 text-[13px] leading-relaxed font-light">{description}</p>
    </div>
  );
}

function FinalCTA() {
  return (
    <section className="w-full bg-slate-950 py-14 overflow-hidden relative border-t border-slate-800">
      {/* Subtle Glow Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-600/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        <div className="text-left max-w-xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight">
            Ready to get moving?
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
            Join hundreds of Indore businesses that trust us with their daily logistics needs. Start shipping in minutes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
          <Link 
            href="/auth/register" 
            className="w-full sm:w-auto bg-red-600 text-white font-semibold px-8 py-3 rounded-full text-[11px] uppercase tracking-[0.15em] hover:bg-white hover:text-red-600 transition-all shadow-lg shadow-red-900/20 active:scale-95 text-center"
          >
            Create Free Account
          </Link>
          <Link 
            href="/contact" 
            className="w-full sm:w-auto bg-transparent text-white font-medium px-8 py-3 rounded-full text-[11px] border border-slate-700 uppercase tracking-[0.15em] hover:bg-slate-800 transition-all text-center"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}

function StatItem({ label, value }: { label: string, value: string }) {
  return (
    <div className="text-center md:text-left">
      {/* Light weight for large numbers looks very premium */}
      <span className="text-4xl font-light text-slate-900 tracking-tighter">{value}</span>
      <p className="text-[10px] font-medium text-slate-400 uppercase tracking-[0.2em] mt-1">{label}</p>
    </div>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-8 z-50 p-3 bg-red-600 text-white rounded-full shadow-2xl transition-all duration-300 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
      } hover:bg-slate-900`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}