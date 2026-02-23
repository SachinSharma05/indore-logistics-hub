import { Zap, Truck, Building2, Home, Check, ArrowRight, Clock, ShieldCheck, Globe } from "lucide-react";
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: "Ecommerce Shipping",
      description: "Automated shipping solutions for D2C brands. Includes COD management and NDR tracking.",
      icon: <Zap className="w-6 h-6 stroke-[1.5]" />,
      features: ["Next-day delivery", "Real-time Tracking", "COD Remittance"],
      link: "/book-pickup?type=ecommerce"
    },
    {
      title: "Bulk & Heavy Shipment",
      description: "Specialized handling for heavy machinery, raw materials, and large inventory transfers.",
      icon: <Truck className="w-6 h-6 stroke-[1.5]" />,
      features: ["FTL & LTL Options", "Lift-gate Service", "Industrial Packing"],
      link: "/book-pickup?type=bulk"
    },
    {
      title: "Corporate Courier",
      description: "Priority document and parcel handling for law firms, banks, and offices.",
      icon: <Building2 className="w-6 h-6 stroke-[1.5]" />,
      features: ["Secure Chain of Custody", "Digital POD", "Scheduled Pickups"],
      link: "/book-pickup?type=corporate"
    },
    {
      title: "Home Shifting",
      description: "Stress-free local relocation within Indore with professional packing and unpacking.",
      icon: <Home className="w-6 h-6 stroke-[1.5]" />,
      features: ["Furniture Assembly", "Fragile Item Care", "Transit Insurance"],
      link: "/book-pickup?type=shifting"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. SLIM HERO */}
      <section className="bg-slate-950 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-red-500 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4 block">Our Expertise</span>
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Logistics Solutions for <br />
            <span className="text-red-600 font-light italic">Every Business Need</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            From the smallest envelope to the largest industrial cargo, we provide 
            tailored logistics across Indore with precision and care.
          </p>
        </div>
      </section>

      {/* 2. SERVICES GRID - Clean Border Style */}
      <section className="py-16 px-6 -mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group flex flex-col sm:flex-row bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-red-500/30 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
              >
                {/* Icon Column */}
                <div className="sm:w-32 bg-slate-50 flex items-center justify-center p-8 group-hover:bg-red-600 group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                
                {/* Content Column */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-[13px] font-light mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 mb-8">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-[12px] text-slate-600 font-medium">
                        <Check className="w-3.5 h-3.5 text-red-600 stroke-[3]" /> {feat}
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={service.link}
                    className="mt-auto inline-flex items-center gap-2 text-[11px] font-semibold text-slate-900 hover:text-red-600 uppercase tracking-widest transition-colors"
                  >
                    Book This Service <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE BENEFITS - Minimalist Row */}
      <section className="py-16 px-6 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Standard with every shipment</h2>
            <div className="w-12 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <BenefitItem 
              icon={<Clock className="w-5 h-5" />}
              title="Punctual Pickups"
              desc="We value your time. Our agents arrive precisely within the committed window."
            />
            <BenefitItem 
              icon={<ShieldCheck className="w-5 h-5" />}
              title="Cargo Insurance"
              desc="Optional insurance coverage for high-value goods to give you total peace of mind."
            />
            <BenefitItem 
              icon={<Globe className="w-5 h-5" />}
              title="Digital Dashboard"
              desc="Manage all your shipments, invoices, and tracking from one modern portal."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

// --- SLIM HELPER COMPONENTS ---

function BenefitItem({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="group text-center">
      <div className="w-12 h-12 bg-white rounded-2xl border border-slate-200 flex items-center justify-center mx-auto mb-6 group-hover:border-red-600 group-hover:shadow-lg group-hover:shadow-red-500/10 transition-all duration-300">
        <div className="text-slate-400 group-hover:text-red-600 transition-colors">
          {icon}
        </div>
      </div>
      <h4 className="font-semibold text-slate-900 mb-2 tracking-tight">{title}</h4>
      <p className="text-slate-500 text-[13px] font-light leading-relaxed px-4">{desc}</p>
    </div>
  );
}