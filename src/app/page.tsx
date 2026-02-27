"use client";

import Image from "next/image";
import Link from "next/link";
import { Truck, ArrowRight, ShieldCheck, ArrowUp, Zap, ClipboardCheck, PackageCheck, UserCheck, PlayCircle, BarChart3, ChevronRight 
} from "lucide-react";
import { useEffect, useState } from "react";

// page.tsx ------------------------------------------
export default function HomePage() {
  return (
    <main className="flex flex-col bg-[#FDFDFF] selection:bg-indigo-100 selection:text-indigo-700 overflow-x-hidden">
      <ModernHero />
      <PartnerNetwork /> {/* Updated Name */}
      <ServiceHighlights />
      <DeliveryProcess />
      <TestimonialSection />
      <FinalCTA />
      
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  );
}

// --- CORE COMPONENTS ---
function ModernHero() {
  return (
    <section className="relative pt-16 pb-20 overflow-hidden bg-white">
      {/* Subtle Background Mesh Gradient (similar to Shiprocket screenshot) */}
      <div className="absolute top-0 left-0 w-full h-[600px] opacity-20 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,#818cf8_0%,transparent_50%),radial-gradient(circle_at_80%_70%,#c084fc_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Content: Compact & Professional */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] leading-[1.15] mb-6 tracking-tight">
              One-stop shipping <br /> 
              solutions to fuel your <br />
              <span className="text-[#6366F1]">business growth</span>
            </h1>
            <p className="text-[#64748B] text-base md:text-lg font-medium max-w-lg mb-8 leading-relaxed">
              Integrate with 25+ courier partners, manage orders, and track shipments across the globe with our tech-enabled logistics platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/signup" className="bg-[#6366F1] text-white px-7 py-3 rounded-lg font-semibold text-sm hover:bg-[#4F46E5] transition-all shadow-md">
                Try for Free
              </Link>
              <button className="flex items-center gap-2 text-[#1E293B] px-5 py-3 rounded-lg font-semibold text-sm hover:bg-slate-50 transition-all border border-slate-200">
                <PlayCircle size={18} className="text-[#6366F1]" /> How it works
              </button>
            </div>
            
            <div className="mt-10 flex items-center gap-6 border-t border-slate-100 pt-8">
              <div>
                <p className="text-xl font-bold text-[#1E293B]">2.5 Lakh+</p>
                <p className="text-xs text-[#64748B] font-bold uppercase tracking-wider">Happy Sellers</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <p className="text-xl font-bold text-[#1E293B]">220+</p>
                <p className="text-xs text-[#64748B] font-bold uppercase tracking-wider">Countries Served</p>
              </div>
            </div>
          </div>

          {/* Right Content: The Dashboard "Cards" Look */}
          <div className="w-full lg:w-1/2 relative">
             <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-2 shadow-2xl relative overflow-hidden">
                <div className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col gap-6">
                   {/* Mock UI Elements matching Shiprocket's screenshot style */}
                   <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-slate-800">Financial Performance</span>
                      <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded-md">Live Status</span>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100">
                         <p className="text-[10px] text-indigo-500 font-bold uppercase mb-1">Total Revenue</p>
                         <p className="text-2xl font-bold text-slate-900">₹14,50,000</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                         <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Active Shipments</p>
                         <p className="text-2xl font-bold text-slate-900">1,248</p>
                      </div>
                   </div>
                   {/* Simplified Graph Visual */}
                   <div className="h-32 w-full bg-slate-50 rounded-xl flex items-end gap-1 p-2">
                      {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                        <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-indigo-400/40 rounded-t-sm" />
                      ))}
                   </div>
                </div>
             </div>
             {/* Floating Badge */}
             <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce-slow">
                <ShieldCheck className="text-emerald-500 w-8 h-8" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceHighlights() {
  return (
    <section className="py-20 bg-[#FDFDFF] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-xl">
             <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Everything you need to <span className="text-[#6366F1]">scale faster</span></h2>
             <p className="text-slate-500 font-medium">Streamline your shipping operations with our suite of logistics tools.</p>
          </div>
          <Link href="/products" className="hidden md:flex items-center gap-2 text-sm font-bold text-[#6366F1] hover:underline">
            View all products <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <CompactFeatureCard 
            title="AI-Courier Selection" 
            desc="Our proprietary engine chooses the best courier based on weight and destination."
            icon={<Zap className="text-amber-500" />}
          />
          <CompactFeatureCard 
            title="Real-time Analytics" 
            desc="Detailed reports on RTO, COD remittance, and transit performance."
            icon={<BarChart3 className="text-indigo-500" />}
          />
          <CompactFeatureCard 
            title="Post-Purchase Tech" 
            desc="Engage customers with branded tracking pages and NDR automation."
            icon={<Zap className="text-purple-500" />}
          />
        </div>
      </div>
    </section>
  );
}

function CompactFeatureCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 transition-all group hover:shadow-lg hover:shadow-indigo-100">
      <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-indigo-50 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6">{desc}</p>
      <Link href="#" className="text-xs font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
        Explore <ArrowRight size={14} />
      </Link>
    </div>
  );
}

function PartnerNetwork() {
  const partners = [
    { name: "DTDC", logo: "/logos/dtdc-v2.png" },
    { name: "Delhivery", logo: "/logos/delhivery-v2.png" },
    { name: "Aramex", logo: "/logos/aramex-v2.png" },
    { name: "BlueDart", logo: "/logos/bluedart-v2.png" },
    { name: "Ecomm Express", logo: "/logos/ecomm-v2.png" },
    { name: "XpressBees", logo: "/logos/xpressbees-v2.png" },
    { name: "Ekart", logo: "/logos/ekart-v2.png" },
    { name: "Gati", logo: "/logos/gati-v2.png" },
    { name: "India Post", logo: "/logos/indiapost-v2.png" },
    { name: "ShadowFax", logo: "/logos/shadowfax-v2.png" },
  ];

  const marqueeList = [...partners, ...partners];

  return (
    <section className="bg-slate-50/50 py-10 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-[#64748B] text-sm font-bold uppercase tracking-widest mb-2">
          Building Success Stories with 25+ Carriers
        </p>
      </div>

      <div className="relative flex items-center">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {marqueeList.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="mx-10 flex items-center justify-center shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={110}
                height={35}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        
        {/* Soft edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/50 to-transparent" />
      </div>
    </section>
  );
}

function DeliveryProcess() {
  const steps = [
    { id: "01", title: "Instant Booking", desc: "Digital label generation via our automated API manifest system.", icon: <ClipboardCheck className="w-5 h-5" /> },
    { id: "02", title: "Smart Pickup", desc: "Automated routing for the fastest hub arrival in Madhya Pradesh.", icon: <Truck className="w-5 h-5" /> },
    { id: "03", title: "Live Transit", desc: "Real-time tracking synchronization across all carrier nodes.", icon: <PackageCheck className="w-5 h-5" /> },
    { id: "04", title: "Proof of Delivery", desc: "Instant digital acknowledgment and COD settlement triggers.", icon: <UserCheck className="w-5 h-5" /> },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        <div className="mb-16 text-left border-l-4 border-[#6366F1] pl-6">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Our <span className="text-[#6366F1]">Operational</span> Blueprint
          </h2>
          <p className="text-slate-500 mt-2 font-medium">Simplified logistics from warehouse to doorstep.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, idx) => (
            <div key={step.id} className="relative group">
              {/* Vertical/Horizontal Line Connector */}
              {idx !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-slate-100 group-hover:bg-indigo-100 transition-colors" />
              )}
              
              <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#6366F1] flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-tighter">Step {step.id}</span>
                  <div className="h-px w-4 bg-indigo-100" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#6366F1] transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="w-full py-24 bg-white overflow-hidden relative">
      {/* Subtle Background Mesh - Inspired by Shiprocket Hero */}
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,#e0e7ff_0%,transparent_40%),radial-gradient(circle_at_10%_80%,#f3e8ff_0%,transparent_40%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-[#1E293B] rounded-[2rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-2xl">
          
          {/* Decorative Circle Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          
          <div className="flex-1 text-center lg:text-left relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
              Ready to automate your <br />
              <span className="text-indigo-400">logistics workflow?</span>
            </h2>
            <p className="text-slate-300 text-lg font-medium mb-10 max-w-xl">
              Join 5,000+ businesses across Indore and central India who have scaled their operations with our smart shipping platform.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link 
                href="/signup" 
                className="bg-[#6366F1] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-[#4F46E5] transition-all shadow-lg hover:shadow-indigo-500/25"
              >
                Sign Up for Free
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent text-white border border-slate-700 px-8 py-4 rounded-xl font-bold text-base hover:bg-slate-800 transition-all"
              >
                Talk to an Expert
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full border border-slate-800 bg-slate-700" />
                ))}
              </div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                No credit card required
              </p>
            </div>
          </div>

          {/* Feature Highlight Mockup */}
          <div className="flex-1 w-full lg:max-w-md bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700 p-6 shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-800/80 rounded-lg border border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-indigo-500/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-indigo-400" />
                  </div>
                  <span className="text-sm font-bold text-slate-200 uppercase">Express Dispatch</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-400">ACTIVE</span>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">Daily Revenue Tracking</p>
                <div className="flex items-end gap-1 h-12">
                  {[30, 60, 45, 80, 55, 90, 70].map((h, i) => (
                    <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-indigo-500/40 rounded-t-sm" />
                  ))}
                </div>
              </div>

              <button className="w-full py-3 bg-slate-700 text-slate-300 text-xs font-bold rounded-lg uppercase tracking-widest hover:text-white transition-colors">
                View Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  const testimonials = [
    {
      name: "Rajesh Mehta",
      role: "Director, Malwa Textiles",
      content: "The transition to this platform has streamlined our state-wide distribution. Their real-time dashboard provides the transparency we were missing with traditional transporters.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop",
      company: "Textile Manufacturing"
    },
    {
      name: "Sneha Kapoor",
      role: "Founder, Indore Decor",
      content: "Managing COD remittances used to be a nightmare. Now, the automated settlements and low RTO rates have significantly improved our business cash flow.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop",
      company: "E-commerce Enterprise"
    },
    {
      name: "Amit Sharma",
      role: "Logistics Head",
      content: "Reliable bulk cargo handling in Pithampur is hard to find. Their specialized industrial manifest system has made our heavy machinery shipping 100% paperless.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop",
      company: "Industrial Logistics"
    }
  ];

  return (
    <section className="w-full py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Professional Header Structure */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Trusted by 5,000+ <span className="text-[#6366F1]">Growing Brands</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              Discover why businesses across Madhya Pradesh rely on our technology to power their supply chain.
            </p>
          </div>
          
          {/* Trust Pilot Style Badge */}
          <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                   <Image src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" width={32} height={32} />
                </div>
              ))}
            </div>
            <div className="h-8 w-px bg-slate-200 mx-2" />
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 fill-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-[11px] text-slate-900 font-bold uppercase tracking-wider">4.9/5 Average Rating</p>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col hover:border-indigo-200 transition-colors group">
              
              {/* Star Rating Section */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="flex-grow">
                <p className="text-slate-600 text-[15px] leading-relaxed font-medium mb-8 italic">
                  {t.content}
                </p>
              </blockquote>

              {/* User Bio Section */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-100 ring-2 ring-white">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-none mb-1">{t.name}</h4>
                  <p className="text-[11px] text-[#6366F1] font-bold uppercase tracking-wide">
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
      className={`fixed bottom-8 right-8 z-50 p-3 bg-slate-900 text-white rounded-xl shadow-2xl transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      } hover:bg-[#6366F1] hover:-translate-y-1 border border-white/10`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

function WhatsAppButton() {
  const phoneNumber = "919340384339";
  const message = "Hello! I'm interested in your logistics services. Can you help me?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed left-8 bottom-8 z-50 flex flex-col items-start group">
      {/* Tooltip - Now sits above the button */}
      <span className="mb-3 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none shadow-xl border border-white/10">
        Support Online
      </span>
      
      <Link 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-[0_15px_30px_-5px_rgba(37,211,102,0.4)] hover:scale-110 hover:rotate-3 transition-all duration-300 active:scale-95 relative"
      >
        {/* Subtle Pulse Effect */}
        <span className="absolute inset-0 rounded-2xl bg-[#25D366] animate-ping opacity-20 group-hover:hidden" />
        
        <svg 
          viewBox="0 0 24 24" 
          className="w-7 h-7 fill-current relative z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.434 5.71 1.434h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </Link>
    </div>
  );
}