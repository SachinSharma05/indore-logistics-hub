import { ClipboardCheck, Truck, PackageCheck, UserCheck } from "lucide-react";

export default function DeliveryProcess() {
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