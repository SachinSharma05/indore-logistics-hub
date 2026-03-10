"use client";

import Image from "next/image";
import Link from "next/link";
import { Truck, Zap, ArrowRight, ClipboardCheck, PackageCheck, UserCheck, ShoppingBag, MessageSquare, Building2, Home } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

// page.tsx ------------------------------------------
export default function HomePage() {
  return (
    <main className="flex flex-col bg-[#FDFDFF] selection:bg-indigo-100 selection:text-indigo-700 overflow-x-hidden">
      
      <ModernHero />
      <PartnerNetwork />
      <WhyChooseUs />
      <DeliveryProcess />
      <CoverageSection />
      <TestimonialSection />

      <FinalCTA />
      
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  );
}

// --- CORE COMPONENTS ---
function ModernHero() {
  const services = [
    {
      title: "E-commerce Shipping",
      desc: "Instant integration for Shopify, WooCommerce & D2C brands.",
      icon: <ShoppingBag size={24} />,
      color: "from-indigo-500 to-indigo-600",
      lightColor: "bg-indigo-50 text-indigo-600",
      tag: "Best for Startups"
    },
    {
      title: "B2B / Bulk Cargo",
      desc: "LTL & FTL solutions for heavy industrial & commercial goods.",
      icon: <Zap size={24} />,
      color: "from-blue-500 to-blue-600",
      lightColor: "bg-blue-50 text-blue-600",
      tag: "Heavy Load"
    },
    {
      title: "Home Shifting",
      desc: "Professional packing and door-to-door relocation services.",
      icon: <Home size={24} />,
      color: "from-rose-500 to-rose-600",
      lightColor: "bg-rose-50 text-rose-600",
      tag: "Safe & Insured"
    },
    {
      title: "Corporate Logistics",
      desc: "Dedicated office assets and document movement solutions.",
      icon: <Building2 size={24} />,
      color: "from-amber-500 to-amber-600",
      lightColor: "bg-amber-50 text-amber-600",
      tag: "Enterprise"
    }
  ];

  const trustItems = [
    "Same Day Pickup",
    "25+ Courier Partners",
    "COD Available",
    "Indore Local Support"
  ];

  return (
    <section className="bg-[#F8FAFC] pt-10 pb-16 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-50/30 skew-x-12 translate-x-32 -z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">       
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
            Ship Anywhere in India <br className="hidden md:block" /> 
            Choose Your <span className="text-[#7C3AED]">Logistics Service</span>
          </h1>
          <p className="text-[#6366F1] text-[13px] font-bold uppercase tracking-widest mb-6">
            Directly book your pickup or send an enquiry. Indore dispatch responds within 30 minutes.
          </p>

          {/* --- NEW: MINI TRUST STRIP --- */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-slate-700 tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- SERVICE ACTION GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl ${service.lightColor}`}>
                  {service.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                  {service.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>

              <div className="space-y-3">
                <Link 
                  href="/book-pickup" 
                  className={`w-full py-4 rounded-xl text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 bg-gradient-to-r ${service.color} shadow-lg shadow-indigo-100 hover:scale-[1.02] transition-transform`}
                >
                  <ClipboardCheck size={16} /> Book Pickup
                </Link>
                <Link 
                  href="/contact" 
                  className="w-full py-4 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
                >
                  <MessageSquare size={16} /> Get Enquiry
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* --- AWB TRACKING BOX (Integrated) --- */}
        <div className="max-w-3xl mx-auto">
           <div className="bg-white rounded-[2rem] p-2 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-2">
              <div className="flex-grow flex items-center px-6 py-2 gap-3">
                 <Truck size={20} className="text-indigo-500" />
                 <input 
                  type="text" 
                  placeholder="Enter AWB Number or Order ID..." 
                  className="w-full bg-transparent border-none focus:ring-0 text-slate-700 font-bold text-sm placeholder:text-slate-400"
                 />
              </div>
              <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-600 transition-all">
                Track Shipment
              </button>
           </div>
           <p className="text-center mt-4 text-[11px] text-slate-400 font-bold uppercase tracking-tighter">
             Track your shipments in real-time across all 25+ partners
           </p>
        </div>
      </div>
    </section>
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
    <section className="bg-[#F8FAFC] py-10 border-y border-slate-100 overflow-hidden">
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
              className="mx-10 flex items-center justify-center shrink-0 opacity-100 transition-all duration-500"
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

function WhyChooseUs() {
  const features = [
    { title: "Smart Courier Allocation", desc: "AI-driven engine selects the best partner based on speed and past performance.", icon: <Zap className="text-amber-500" /> },
    { title: "Lowest RTO Rates", desc: "Our address verification tools reduce Return-to-Origin by up to 25%.", icon: <PackageCheck className="text-emerald-500" /> },
    { title: "Unified Wallet", desc: "One wallet for all 25+ couriers with instant COD remittance.", icon: <ClipboardCheck className="text-indigo-500" /> },
    { title: "Indore-Based Support", desc: "Local 24/7 dedicated support team that understands your geography.", icon: <UserCheck className="text-purple-500" /> }
  ];

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            Logistics built for <br />
            <span className="text-indigo-600 font-serif italic">efficiency.</span>
          </h2>
          <p className="text-slate-500 text-lg mb-8 leading-relaxed">
            We don't just move boxes; we provide the technology that moves your business forward.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center">{f.icon}</div>
                <h4 className="font-bold text-slate-900">{f.title}</h4>
                <p className="text-sm text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-indigo-600 rounded-[3rem] p-10 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Save up to 40% on shipping costs</h3>
            <p className="text-indigo-100 mb-8">Compare rates across multiple carriers in real-time and choose what fits your budget.</p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold">Compare Shipping Rates</button>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>
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
    <section className="py-15 bg-[#F8FAFC] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Our <span className="text-[#7C3AED]">Operational Blueprint</span>
          </h1>
          <p className="text-slate-600 text-[15px] leading-relaxed max-w-2xl mx-auto font-normal">
            Simplified logistics from warehouse to doorstep.
          </p>
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

function CoverageSection() {
  return (
    <section className="py-20 bg-slate-900 text-white px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm">Deep Coverage</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            From Indore to <br /> 29,000+ Pincodes
          </h2>
          <p className="text-slate-400 text-lg">
            Specialized daily routes from <span className="font-semibold text-white">
            Pithampur Industrial Area
            </span> and <span className="font-semibold text-white">Indore City</span> hubs. 
            We ensure your local pickups are prioritized for same-day dispatch.
          </p>
          <ul className="grid grid-cols-2 gap-4">
            {["Same-day Pickup", "Next-day MP delivery", "29,000+ Pincodes", "Global Shipping"].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm font-bold">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">✓</div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex justify-center">
          {/* Abstract Map Graphic */}
          <div className="w-full max-w-md aspect-square bg-indigo-500/10 border border-white/10 rounded-full flex items-center justify-center relative">
            <div className="absolute w-4 h-4 bg-indigo-500 rounded-full animate-ping" />
            <div className="absolute w-4 h-4 bg-indigo-500 rounded-full" />
            <div className="text-center">
              <p className="text-4xl font-black mb-1">INDORE</p>
              <p className="text-indigo-400 text-sm font-bold uppercase tracking-widest">Central Hub</p>
            </div>
            {/* Orbiting dots */}
            <div className="absolute w-full h-full border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
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
    <section className="w-full py-20 bg-[#F8FAFC] px-6">
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

function FinalCTA() {
  return (
    <section className="w-full py-15 bg-[#F8FAFC] overflow-hidden relative">
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
                href="/register"
                className="bg-[#6366F1] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-[#4F46E5] transition-all shadow-lg hover:shadow-indigo-500/25"
              >
                Start Shipping Now
              </Link>
              <Link
                href="/contact"
                className="bg-transparent text-white border border-slate-700 px-8 py-4 rounded-xl font-bold text-base hover:bg-slate-800 transition-all"
              >
                Talk to Logistics Expert
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