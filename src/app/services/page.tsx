import { Zap, Truck, Building2, Home, Check, ArrowRight, Clock, ShieldCheck, Globe, MoveRight } from "lucide-react";
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: "Ecommerce Shipping",
      description: "Scalable logistics for Indore's rising D2C brands. Includes seamless COD management and automated NDR tracking.",
      icon: <Zap size={24} />,
      features: ["Next-day delivery", "Real-time Tracking", "COD Remittance"],
      link: "/book-pickup?type=ecommerce",
      accent: "text-amber-500"
    },
    {
      title: "Bulk & Heavy Shipment",
      description: "Specialized handling for heavy machinery, raw materials, and large-scale inventory transfers between hubs.",
      icon: <Truck size={24} />,
      features: ["FTL & LTL Options", "Lift-gate Service", "Industrial Packing"],
      link: "/book-pickup?type=bulk",
      accent: "text-blue-500"
    },
    {
      title: "Corporate Courier",
      description: "Priority chain-of-custody for law firms, banks, and offices requiring secure document transfers.",
      icon: <Building2 size={24} />,
      features: ["Secure Chain of Custody", "Digital POD", "Scheduled Pickups"],
      link: "/book-pickup?type=corporate",
      accent: "text-red-600"
    },
    {
      title: "Home Shifting",
      description: "White-glove local relocation within Indore with professional packing, assembly, and insurance.",
      icon: <Home size={24} />,
      features: ["Furniture Assembly", "Fragile Item Care", "Transit Insurance"],
      link: "/book-pickup?type=shifting",
      accent: "text-emerald-600"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      
      {/* --- MODERN HERO --- */}
      <section className="bg-slate-950 pt-24 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ef44440a,transparent)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="text-red-600 text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Engineered for Indore</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Logistics Solutions for <br />
            <span className="text-red-600 italic font-light">The Next Industrial Era</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            From single-parcel D2C fulfillment to multi-ton industrial cargo, 
            Indore Logistics delivers with absolute precision.
          </p>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-20 px-6 -mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col"
              >
                <div className="p-10 flex-1">
                  {/* Icon & Label */}
                  <div className="flex items-center justify-between mb-10">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100">
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest group-hover:text-red-600 transition-colors">Service Model 0{index + 1}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-base font-medium mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {service.features.map((feat, i) => (
                      <span key={i} className="bg-slate-50 border border-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider flex items-center gap-1.5 group-hover:bg-white group-hover:border-red-100 transition-all">
                        <Check size={12} className="text-red-600" /> {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Area */}
                <Link 
                  href={service.link}
                  className="bg-slate-50 group-hover:bg-red-600 border-t border-slate-100 py-6 px-10 flex items-center justify-between transition-all duration-500"
                >
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 group-hover:text-white transition-colors">Initiate Shipment</span>
                  <MoveRight className="text-slate-400 group-hover:text-white group-hover:translate-x-2 transition-all" size={20} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STANDARDS SECTION --- */}
      <section className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-red-600 text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">The IL Standard</span>
              <h2 className="text-3xl font-bold text-slate-950 tracking-tight">Standard with every manifest</h2>
            </div>
            <div className="h-px flex-1 bg-slate-100 hidden md:block mb-4 mx-10"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16">
            <StandardItem 
              icon={<Clock />}
              title="Hyper-Punctual"
              desc="Indore traffic is dynamic; our AI routing isn't. We guarantee arrival within your selected window."
            />
            <StandardItem 
              icon={<ShieldCheck />}
              title="Full Liability"
              desc="Comprehensive transit insurance for every shipment, from legal docs to heavy machinery."
            />
            <StandardItem 
              icon={<Globe />}
              title="Indore-to-India"
              desc="Direct lines from our Dewas Naka hub to over 19,000 pincodes across the country."
            />
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Not sure which service fits?</h2>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-slate-950 text-white px-8 py-4 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-red-600 transition-all">
          Consult our Dispatch Team <ArrowRight size={14} />
        </Link>
      </section>
    </main>
  );
}

function StandardItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="group">
      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 mb-6 group-hover:bg-red-50 group-hover:text-red-600 transition-all">
        {icon}
      </div>
      <h4 className="font-bold text-slate-900 mb-3 tracking-tight uppercase text-sm">{title}</h4>
      <p className="text-slate-500 text-sm font-medium leading-relaxed">{desc}</p>
    </div>
  );
}