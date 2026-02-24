import Image from "next/image";

const partners = [
  { name: "DTDC", logo: "/logos/dtdc.png" },
  { name: "Delhivery", logo: "/logos/delhivery.png" },
  { name: "Maruti", logo: "/logos/maruti.png" },
  { name: "BlueDart", logo: "/logos/bluedart.png" },
  { name: "Ecomm Express", logo: "/logos/ecomm.png" },
  { name: "XpressBees", logo: "/logos/xpressbees.png" },
];

export default function PartnerNetwork() {
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
                  {/* For now, using text as placeholders; replace with <Image /> tags once you have the logos */}
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