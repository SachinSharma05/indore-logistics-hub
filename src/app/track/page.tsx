import { Search, Package, CheckCircle2, Clock, MapPin, Truck, ArrowRight } from "lucide-react";

export default function TrackShipmentPage() {
  const shipmentStatus = "In Transit";
  const trackingSteps = [
    { status: "Shipment Picked Up", location: "Vijay Nagar Hub, Indore", time: "Oct 24, 10:30 AM", completed: true },
    { status: "Processed at Facility", location: "Dewas Naka Sorting Center", time: "Oct 24, 02:15 PM", completed: true },
    { status: "In Transit", location: "En route to Destination", time: "Oct 25, 09:00 AM", completed: true },
    { status: "Out for Delivery", location: "Arriving Today", time: "Pending", completed: false },
    { status: "Delivered", location: "Customer Doorstep", time: "Pending", completed: false },
  ];

  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* --- SLIM SEARCH HEADER --- */}
        <div className="text-center mb-16">
          <span className="text-red-600 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4 block">Real-time Visibility</span>
          <h1 className="text-3xl font-semibold text-slate-900 mb-8 tracking-tight">Track Your Shipment</h1>
          <div className="max-w-xl mx-auto relative group">
            <input 
              type="text" 
              placeholder="Enter Tracking ID (e.g., ILH-123456)" 
              className="w-full bg-slate-50 border border-slate-200 rounded-full px-8 py-4 outline-none focus:border-red-500 focus:bg-white transition-all pr-16 text-sm font-light shadow-sm"
            />
            <button className="absolute right-2 top-2 bg-slate-900 p-2.5 rounded-full text-white hover:bg-red-600 transition-colors duration-300">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* --- TRACKING DETAILS CARD --- */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-2xl shadow-slate-200/40 overflow-hidden">
          
          {/* Status Summary Banner - Refined Navy */}
          <div className="bg-slate-950 p-8 md:p-10 text-white flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                <Package className="w-6 h-6 text-red-500 stroke-[1.5]" />
              </div>
              <div>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest font-semibold mb-1">Current Status</p>
                <h2 className="text-xl font-semibold tracking-tight">{shipmentStatus}</h2>
              </div>
            </div>
            <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10">
              <p className="text-slate-500 text-[10px] uppercase tracking-widest font-semibold mb-1">Estimated Delivery</p>
              <h2 className="text-xl font-light text-red-500">Today <span className="text-white/40 text-sm italic">by 6:00 PM</span></h2>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {/* Visual Timeline - Slim & Technical */}
            <div className="relative">
              {trackingSteps.map((step, index) => (
                <div key={index} className="flex gap-8 mb-10 last:mb-0 group">
                  {/* Timeline Line & Icons */}
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 transition-colors duration-500 ${
                      step.completed ? "bg-red-600 text-white" : "bg-white text-slate-300 border border-slate-200"
                    }`}>
                      {step.completed ? <CheckCircle2 className="w-4 h-4 stroke-[2.5]" /> : <Clock className="w-4 h-4 stroke-[1.5]" />}
                    </div>
                    {index !== trackingSteps.length - 1 && (
                      <div className={`w-[1px] h-full mt-2 ${step.completed ? "bg-red-600" : "bg-slate-100"}`}></div>
                    )}
                  </div>

                  {/* Step Text */}
                  <div className="pb-4">
                    <h4 className={`text-base font-semibold tracking-tight ${step.completed ? "text-slate-900" : "text-slate-400"}`}>
                      {step.status}
                    </h4>
                    <p className="text-slate-500 text-[13px] font-light flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3 h-3 text-red-500/50" /> {step.location}
                    </p>
                    {step.time !== "Pending" && (
                      <span className="inline-block mt-3 text-[9px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                        {step.time}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>

            {/* Shipment Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <InfoBlock label="Origin" value="Indore, MP" />
              <InfoBlock label="Destination" value="Mumbai, MH" />
              <InfoBlock label="Net Weight" value="2.50 KG" />
              <InfoBlock label="Service Type" value="Priority Express" />
            </div>
          </div>
        </div>

        {/* --- Support Section - Slim Card --- */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 group">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-white rounded-lg border border-slate-200 group-hover:border-red-200 transition-colors">
              <Truck className="w-5 h-5 text-slate-400 group-hover:text-red-600 transition-colors" />
            </div>
            <p className="text-slate-600 text-sm font-light">Need to adjust your delivery window?</p>
          </div>
          <button className="text-[11px] font-semibold uppercase tracking-widest text-slate-900 hover:text-red-600 flex items-center gap-2 transition-colors">
            Contact Local Agent <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </main>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] text-slate-400 uppercase font-semibold tracking-[0.15em] mb-2">{label}</p>
      <p className="text-slate-900 text-sm font-medium tracking-tight">{value}</p>
    </div>
  );
}