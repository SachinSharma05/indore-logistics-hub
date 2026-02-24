"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Package, Truck, Building2, Home, ArrowRight, 
  ShieldCheck, ArrowUp, Zap, ClipboardCheck, PackageCheck, UserCheck 
} from "lucide-react";
import { useEffect, useState } from "react";

const heroImages = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop"
];

const partners = [
  { name: "DTDC", logo: "/logos/dtdc.png" },
  { name: "Delhivery", logo: "/logos/delhivery.png" },
  { name: "Maruti", logo: "/logos/maruti.png" },
  { name: "BlueDart", logo: "/logos/bluedart1.png" },
  { name: "Ecomm Express", logo: "/logos/ecomm.png" },
  { name: "XpressBees", logo: "/logos/xpressbees.png" },
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
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        <div className="hidden lg:block absolute left-6 top-0 bottom-0 w-px bg-slate-100 z-0">
           <div className="absolute top-16 left-[-1px] w-[3px] h-20 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.2)]"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center pt-8 pb-24 md:pt-12 md:pb-32 gap-12">
          <div className="w-full lg:w-1/2 lg:pl-16 z-10 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-[10px] font-bold tracking-widest mb-8 uppercase">
              Indore's #1 Logistics Network
            </div>
            
            <h1 className="text-5xl md:text-7xl font-semibold text-slate-950 tracking-tighter leading-[0.95] mb-8">
              Moving cargo <br />
              <span className="text-red-600 font-light italic">at the speed of light.</span>
            </h1>
            
            <p className="text-slate-500 text-sm md:text-lg font-light leading-relaxed max-w-xl mb-10 mx-auto lg:mx-0">
              Indore's premium logistics manifest. From enterprise-grade warehousing 
              to localized last-mile delivery, we redefine how the city moves.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <Link 
                href="/book-pickup" 
                className="w-full sm:w-auto bg-slate-950 text-white px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-red-600 transition-all shadow-xl shadow-slate-200 active:scale-95"
              >
                Start Shipping
              </Link>
              <Link 
                href="/track" 
                className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-950 hover:text-red-600 transition-colors"
              >
                Track Manifest <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Image Slider */}
          <div className="w-full lg:w-1/2 relative h-[400px] md:h-[550px]">
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 group">
              {heroImages.map((img, idx) => (
                <Image 
                  key={img}
                  src={img} 
                  alt="Modern Logistics Management" 
                  fill
                  priority={idx === 0}
                  className={`object-cover transition-opacity duration-1000 group-hover:scale-105 ${
                    idx === activeImage ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              
              {/* Slider Dots */}
              <div className="absolute top-8 right-8 flex gap-2 z-20">
                {heroImages.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      idx === activeImage ? "w-8 bg-red-600" : "w-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[2rem] flex justify-between items-center text-white">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
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
        {/* THE STATS BAR - Clean & Grounded */}
          <div className="bg-white border border-slate-100 shadow-2xl shadow-slate-200/60 rounded-[2.5rem] p-10 pb-12 grid grid-cols-2 md:grid-cols-4 gap-12 relative z-20 -mt-16 mb-[-2rem]">
            <StatItem label="Active Shipments" value="50k+" />
            <StatItem label="Success Rate" value="99.8%" />
            <StatItem label="Destinations" value="150+" />
            <StatItem label="Expert Support" value="24/7" />
          </div>
      </div>
    </section>
  );
}

function PartnerNetwork() {
  return (
    <section className="w-full bg-slate-50/50 py-12 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Label Side */}
          <div className="lg:w-1/4 text-center lg:text-left">
            <p className="text-[10px] font-bold text-red-600 uppercase tracking-[0.2em] mb-1">Network Synergy</p>
            <h3 className="text-lg font-semibold text-slate-900 tracking-tight">Integrated Carriers</h3>
            <p className="text-xs text-slate-400 font-light mt-1">Direct API integration with India's leading providers.</p>
          </div>

          {/* Logos Grid */}
          <div className="lg:w-3/4 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
              {partners.map((partner) => (
                <div key={partner.name} className="group cursor-help transition-all duration-300 hover:scale-110">
                  <Image 
                    src={partner.logo} 
                    alt={`${partner.name} Logo`}
                    width={100}
                    height={80}
                    className="object-contain"
                    />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function DeliveryProcess() {
  const steps = [
    {
      id: "01",
      title: "Parcel Register",
      desc: "Instant booking and digital label generation for your shipment.",
      icon: <ClipboardCheck className="w-6 h-6 stroke-[1.5]" />,
    },
    {
      id: "02",
      title: "Parcel Loading",
      desc: "Secure handling and specialized loading at our Indore hub.",
      icon: <Truck className="w-6 h-6 stroke-[1.5]" />,
    },
    {
      id: "03",
      title: "Parcel In-Transit",
      desc: "Real-time GPS tracking as your goods move to the destination.",
      icon: <PackageCheck className="w-6 h-6 stroke-[1.5]" />,
    },
    {
      id: "04",
      title: "Parcel Delivery",
      desc: "Safe doorstep delivery with digital proof of acknowledgement.",
      icon: <UserCheck className="w-6 h-6 stroke-[1.5]" />,
    },
  ];

  return (
    <section className="w-full py-16 bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Header - Slimmed Down */}
        <div className="text-center mb-16">
          <span className="text-red-600 text-[10px] font-semibold tracking-[0.3em] uppercase">Workflow</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mt-2 tracking-tight">
            How We Deliver Your Parcel
          </h2>
        </div>

        {/* The Connection Path - Simplified to a cleaner line */}
        <div className="hidden lg:block absolute top-[48%] left-0 w-full h-px pointer-events-none px-20">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent border-t border-dashed border-slate-300"></div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="flex flex-col items-center text-center group"
            >
              {/* Minimalist Circle Icon */}
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 flex items-center justify-center transition-all duration-500 group-hover:border-red-500 group-hover:shadow-xl group-hover:shadow-red-500/10 rotate-3 group-hover:rotate-0">
                  <div className="text-slate-400 group-hover:text-red-600 transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>
                
                {/* Number Badge - Slim & Small */}
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-slate-900 text-white rounded-lg flex items-center justify-center text-[10px] font-semibold">
                  {step.id}
                </div>
              </div>

              {/* Step Info - Light Hierarchy */}
              <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight transition-colors group-hover:text-red-600">
                {step.title}
              </h3>
              <p className="text-slate-500 text-[13px] font-light leading-relaxed max-w-[200px]">
                {step.desc}
              </p>
            </div>
          ))}
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