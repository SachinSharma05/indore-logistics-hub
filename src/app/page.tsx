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
    <main className="flex flex-col bg-white selection:bg-red-100 selection:text-red-600">
      <ModernHero />
      <PartnerNetwork />
      
      <ServiceHighlights />

      <DeliveryProcess />
      <TestimonialSection />
      <FinalCTA />

      {/* FLOATING TOOLS */}
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  );
}

// --- CORE COMPONENTS ---
function ModernHero() {
  const [active, setActive] = useState(0);
  const heroImages = [
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop"
  ];

  useEffect(() => {
    const int = setInterval(() => setActive(p => (p + 1) % heroImages.length), 5000);
    return () => clearInterval(int);
  }, []);

  return (
    <section className="bg-slate-950 pt-10 pb-5 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-red-500 text-[9px] font-black tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" /> Indore`s Trusted #1 Network
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.1] mb-6">
              Moving cargo at <br/>
              <span className="text-red-600 italic font-medium">the speed of light.</span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg font-medium mb-10 max-w-md leading-relaxed">
              Premium manifest handling and real-time tracking built for modern commerce.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/book-pickup" className="bg-red-600 text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all shadow-xl shadow-red-600/10">
                Start Shipping
              </Link>
              <Link href="/track" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white hover:text-red-600 transition-colors">
                Track Manifest <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-video lg:aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              {heroImages.map((img, i) => (
                <Image key={i} src={img} alt="Logistics" fill className={`object-cover transition-opacity duration-1000 ${i === active ? "opacity-70" : "opacity-0"}`} />
              ))}
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-600 rounded-lg text-white"><Zap size={14} fill="currentColor" /></div>
                  <div><p className="text-[8px] font-black text-red-500 uppercase">Live</p><p className="text-xs font-bold text-white">98.4% Efficiency</p></div>
                </div>
                <ShieldCheck size={18} className="text-emerald-500"/>
              </div>
            </div>
          </div>
        </div>

        {/* RESTORED STAT BAR: Compact & Modern */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
          {[["Active Shipments", "50k+"], ["Success Rate", "99.8%"], ["Destinations", "150+"], ["Support", "24/7"]].map(([label, val]) => (
            <div key={label} className="text-center border-r last:border-0 border-white/10">
              <p className="text-xl font-bold text-white">{val}</p>
              <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerNetwork() {
  return (
    <section className="bg-white py-10 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Header - Slimmed Down */}
        <div className="text-center mb-16">
          <span className="text-red-600 text-[10px] font-semibold tracking-[0.3em] uppercase">Network Synergy</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mt-2 tracking-tight">
            Integrated Carriers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 relative z-10">
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
    </section>
  );
}

function ServiceHighlights() {
  {/* SECTION: SERVICES */}
  return(
    <section className="bg-white py-10 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header - Slimmed Down */}
        <div className="text-center mb-16">
          <span className="text-red-600 text-[10px] font-semibold tracking-[0.3em] uppercase">Logistics Solutions</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mt-2 tracking-tight">
            Enterprise-grade infrastructure designed for Indore`s business pace.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard icon={<Package className="w-6 h-6 stroke-[1.5]" />} title="Ecommerce" description="Full API support and COD management for high-volume sellers." />
          <ServiceCard icon={<Truck className="w-6 h-6 stroke-[1.5]" />} title="Bulk Cargo" description="Heavy industrial parts and equipment with priority handling." />
          <ServiceCard icon={<Building2 className="w-6 h-6 stroke-[1.5]" />} title="Corporate" description="Specialized document logistics with end-to-end digital audit trails." />
          <ServiceCard icon={<Home className="w-6 h-6 stroke-[1.5]" />} title="Relocation" description="Expert movers providing white-glove service for domestic shifting." />
        </div>
      </div>
    </section>
  );
}

function DeliveryProcess() {
  const steps = [
    { id: "01", title: "Parcel Register", desc: "Instant booking and digital label generation for your shipment.", icon: <ClipboardCheck className="w-6 h-6 stroke-[1.5]" /> },
    { id: "02", title: "Parcel Loading", desc: "Secure handling and specialized loading at our Indore hub.", icon: <Truck className="w-6 h-6 stroke-[1.5]" /> },
    { id: "03", title: "Parcel In-Transit", desc: "Real-time GPS tracking as your goods move to the destination.", icon: <PackageCheck className="w-6 h-6 stroke-[1.5]" /> },
    { id: "04", title: "Parcel Delivery", desc: "Safe doorstep delivery with digital proof of acknowledgement.", icon: <UserCheck className="w-6 h-6 stroke-[1.5]" /> },
  ];

  return (
    <section className="w-full py-10 bg-white overflow-hidden">
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

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
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
    <section className="py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto bg-slate-950 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[80px] rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight relative z-10">
                Ready to optimize <br className="md:hidden"/> your logistics?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <button className="w-full sm:w-auto bg-red-600 text-white px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all">
                    Create Free Account
                </button>
                <button className="w-full sm:w-auto border border-white/20 text-white px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">
                    Contact Sales
                </button>
            </div>
        </div>
    </section>
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

function WhatsAppButton() {
  const phoneNumber = "919340384339"; // Your Indore Logistics number
  const message = "Hello! I'm interested in your logistics services. Can you help me?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-start group">
      {/* Tooltip Label - Appears on hover */}
      <span className="ml-4 mb-2 px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-md opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
        Chat with us
      </span>
      
      <Link 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4 w-14 h-14 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(37,211,102,0.4)] hover:scale-110 hover:-rotate-6 transition-all duration-300 group-active:scale-95"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.434 5.71 1.434h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </Link>
    </div>
  );
}

function TestimonialSection() {
  const testimonials = [
    {
      name: "Rajesh Mehta",
      role: "Owner, Malwa Textiles",
      content: "Switching to Indore Logistics was the best decision for our distribution. Their 'Speed of Light' claim isn't just marketing—it's reality.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop",
      company: "Verified Business"
    },
    {
      name: "Sneha Kapoor",
      role: "E-commerce Seller",
      content: "The API integration and COD management are seamless. I've seen a 20% reduction in RTO (Return to Origin) since we started using their manifest system.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop",
      company: "Top Rated Seller"
    },
    {
      name: "Amit Sharma",
      role: "Operations Manager",
      content: "Handling bulk cargo in the Pithampur industrial area used to be a headache. Now, it's a one-click process. Highly recommended.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop",
      company: "Industrial Partner"
    }
  ];

  return (
    <section className="w-full py-14 bg-slate-50/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl pl-8 border-l-2 border-red-600">
            <span className="text-red-600 text-[10px] font-black tracking-[0.3em] uppercase block mb-2">Social Proof</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 tracking-tighter">
              Trusted by Indore`s <br />Fastest Growing Businesses
            </h2>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                   <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" width={40} height={40} />
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">4.9/5 Rating</p>
              <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">From 2,000+ Clients</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col justify-between hover:-translate-y-2 transition-all duration-500 group">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-red-600" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-slate-600 text-base font-light italic leading-relaxed mb-8">
                  {t.content}
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">{t.name}</h4>
                  <p className="text-[10px] text-red-600 font-black uppercase tracking-widest">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}