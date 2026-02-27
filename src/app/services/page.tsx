import Link from 'next/link';
import { Zap, Truck, Building2, Home, Check, ArrowRight, Clock, ShieldCheck, Globe, MoveRight, ChevronRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Ecommerce Shipping",
      description: "Automated D2C logistics with seamless COD management, branded tracking, and NDR automation.",
      icon: <Zap size={20} />,
      features: ["Next-day delivery", "Real-time Tracking", "COD Remittance"],
      link: "/book-pickup?type=ecommerce",
      accent: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Bulk & Heavy Shipment",
      description: "Cost-efficient FTL & LTL options for heavy machinery and industrial inventory transfers.",
      icon: <Truck size={20} />,
      features: ["FTL & LTL Options", "Lift-gate Service", "Industrial Packing"],
      link: "/book-pickup?type=bulk",
      accent: "bg-blue-50 text-blue-600"
    },
    {
      title: "Corporate Courier",
      description: "Priority chain-of-custody for banks and offices requiring secure, scheduled document transfers.",
      icon: <Building2 size={20} />,
      features: ["Secure Chain of Custody", "Digital POD", "Scheduled Pickups"],
      link: "/book-pickup?type=corporate",
      accent: "bg-purple-50 text-purple-600"
    },
    {
      title: "Home Shifting",
      description: "Professional local relocation within Indore with specialized packing and assembly services.",
      icon: <Home size={20} />,
      features: ["Furniture Assembly", "Fragile Item Care", "Transit Insurance"],
      link: "/book-pickup?type=shifting",
      accent: "bg-emerald-50 text-emerald-600"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* --- SHIPROCKET HERO --- */}
      <section className="bg-[#f9fafb] py-20 px-6 border-b border-slate-100 relative overflow-hidden">
        {/* Subtle decorative mesh */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-50/50 to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#7C3AED] text-[12px] font-bold uppercase tracking-wider mb-4 block">
              Our Service Ecosystem
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Comprehensive shipping solutions <br className="hidden md:block" />
              for <span className="text-[#7C3AED]">every business need</span>
            </h1>
            <p className="text-slate-600 text-base md:text-lg font-normal leading-relaxed mb-8">
              Whether you're an emerging D2C brand or a large-scale industrialist, our tech-enabled 
              network ensures your shipments reach their destination with zero friction.
            </p>
            <div className="flex gap-4">
               <button className="bg-[#7C3AED] text-white px-6 py-3 rounded-md text-[14px] font-bold hover:bg-[#6D28D9] transition-all">
                  Get a Quote
               </button>
               <button className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-md text-[14px] font-bold hover:bg-slate-50 transition-all">
                  Contact Sales
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID: High-Density Cards --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group flex flex-col bg-white rounded-xl border border-slate-200 hover:border-[#7C3AED]/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
              >
                <div className="p-8 flex-1">
                  <div className={`w-12 h-12 rounded-lg ${service.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-3 py-1 rounded-full">
                        <Check size={12} className="text-[#10B981]" />
                        <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  href={service.link}
                  className="px-8 py-5 border-t border-slate-100 flex items-center justify-between group-hover:bg-[#fcfdff] transition-colors rounded-b-xl"
                >
                  <span className="text-[13px] font-bold text-[#7C3AED] flex items-center gap-1">
                    Learn more about this solution <ChevronRight size={14} />
                  </span>
                  <MoveRight className="text-slate-300 group-hover:text-[#7C3AED] group-hover:translate-x-2 transition-all" size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STANDARDS: Data-Centric Layout --- */}
      <section className="py-20 px-6 bg-[#f9fafb] border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Standard with every shipment</h2>
              <p className="text-slate-500 text-sm mt-2">Professional logistics infrastructure you can rely on.</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-slate-200 mx-10"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <StandardItem 
              icon={<Clock className="text-indigo-600" />}
              title="Hyper-Punctual"
              desc="Indore traffic is dynamic; our AI routing isn't. We guarantee arrival within your selected window."
            />
            <StandardItem 
              icon={<ShieldCheck className="text-emerald-600" />}
              title="Full Liability"
              desc="Comprehensive transit insurance for every manifest, from legal docs to heavy machinery."
            />
            <StandardItem 
              icon={<Globe className="text-blue-600" />}
              title="Indore-to-India"
              desc="Direct lines from our Dewas Naka hub to over 19,000 pincodes across the country."
            />
          </div>
        </div>
      </section>

      {/* --- CTA: Minimalist SaaS Banner --- */}
      <section className="py-24 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Need a custom logistics plan?</h2>
            <p className="text-slate-500 text-sm mb-8 max-w-lg mx-auto leading-relaxed">
                Contact our enterprise team for customized API integrations, dedicated warehousing, 
                and bulk-volume pricing.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-8 py-3.5 rounded-md text-[13px] font-bold hover:bg-[#7C3AED] transition-all shadow-lg shadow-slate-200">
              Consult our Dispatch Team <ArrowRight size={16} />
            </Link>
        </div>
      </section>
    </main>
  );
}

function StandardItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-5 shadow-sm border border-slate-100">
        {icon}
      </div>
      <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-tight">{title}</h4>
      <p className="text-slate-500 text-[13px] font-medium leading-relaxed">{desc}</p>
    </div>
  );
}