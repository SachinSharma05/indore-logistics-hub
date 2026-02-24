"use client";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronRight, Package, Truck, Building2, Home, ArrowRight, ShieldCheck, ArrowUp, Zap } from "lucide-react";
import DeliveryProcess from "@/components/DeliveryProcess";
import { useEffect, useState } from "react";
import PartnerNetwork from "@/components/Partners";

const heroImages = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop"
];

// page.tsx ------------------------------------------
export default function HomePage() {
  return (
    <main className="flex flex-col bg-white">
      <ModernHero />
      <PartnerNetwork />
      
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
  const [activeImage, setActiveImage] = useState(0);

  // Automatic Interval for Image Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* FINE LEFT BORDER (THE SPINE) 
          Positioned 40px from the left, hidden on small screens
      */}
      <div className="hidden lg:block absolute left-10 top-0 bottom-0 w-px bg-slate-100 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 pt-8 pb-24 md:pt-12 md:pb-32 flex flex-col lg:flex-row items-center gap-10">
        
        {/* --- LEFT CONTENT: TYPOGRAPHY --- */}
        <div className="w-full lg:w-1/2 z-10 text-center lg:text-left relative pl-0 lg:pl-10">
          {/* A small red indicator that sits ON the left border */}
          <div className="hidden lg:block absolute left-[-41px] top-2 w-px h-12 bg-red-600"></div>

          <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-[11px] font-bold tracking-wider mb-6 uppercase">
            Indore's #1 Logistics Network
          </div>
          
          <h1 className="text-4xl md:text-6xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
            Fastest & Secured <br />
            <span className="text-red-600 font-light italic">Logistics Solutions</span>
          </h1>
          
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto lg:mx-0 mb-10 font-light leading-relaxed">
            Manage your entire supply chain from a single professional dashboard, 
            built for the speed of modern commerce.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link href="/book-pickup" className="w-full sm:w-auto bg-slate-950 text-white px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-red-600 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-slate-200 group">
              Start Shipping <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/track" className="w-full sm:w-auto px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-950 hover:text-red-600 transition-colors">
              Track Manifest
            </Link>
          </div>
        </div>

        {/* --- RIGHT CONTENT: IMAGE SLIDER --- */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 group aspect-[4/3] lg:aspect-auto lg:h-[550px]">
            {heroImages.map((img, idx) => (
              <Image 
                key={img}
                src={img} 
                alt="Logistics Scene" 
                fill
                priority
                className={`object-cover transition-opacity duration-1000 group-hover:scale-105 ${
                  idx === activeImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            
            {/* Overlay indicators for the slider */}
            <div className="absolute top-8 right-8 flex gap-2">
              {heroImages.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    idx === activeImage ? "w-8 bg-red-600" : "w-2 bg-white/40"
                  }`}
                />
              ))}
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>

            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[2rem] flex justify-between items-center text-white">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/20">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-red-500">Live Delivery</p>
                  <p className="text-sm font-semibold tracking-tight">98.4% Efficiency</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Secured Manifest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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