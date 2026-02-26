import { Search, Package, CheckCircle2, Clock, MapPin, Truck, ArrowRight, ShieldCheck } from "lucide-react";

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
    <main className="min-h-screen bg-[#F8FAFC] py-12 px-6">
      <div className="max-w-[900px] mx-auto">
        
        {/* --- COMPACT SEARCH --- */}
        <div className="text-center mb-10">
          <span className="text-red-600 text-[10px] font-black tracking-[0.4em] uppercase mb-3 block">Live Tracking</span>
          <div className="max-w-md mx-auto relative">
            <input 
              type="text" 
              placeholder="Manifest ID (e.g., ILH-8821)" 
              className="w-full bg-white border border-slate-200 rounded-xl px-6 py-3.5 outline-none focus:ring-4 focus:ring-red-500/5 focus:border-red-600 transition-all text-sm shadow-sm"
            />
            <button className="absolute right-2 top-2 bg-slate-900 p-2 rounded-lg text-white hover:bg-red-600 transition-colors">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* --- TRACKING CARD --- */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          
          {/* Header Banner: Dark & High Contrast */}
          <div className="bg-slate-950 p-6 md:p-8 text-white flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-900/20">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-0.5">Manifest ILH-8821</p>
                <h2 className="text-xl font-bold tracking-tight">{shipmentStatus}</h2>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-0.5">Est. Arrival</p>
              <h2 className="text-xl font-bold text-red-500">Today <span className="text-white/30 font-light text-sm ml-1">6:00 PM</span></h2>
            </div>
          </div>

          {/* Progress Bar (Visual) */}
          <div className="px-8 pt-8">
            <div className="flex justify-between mb-2">
                <span className="text-[10px] font-bold text-red-600 uppercase tracking-tighter">Origin</span>
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter">Destination</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden flex">
                <div className="w-3/5 h-full bg-red-600 rounded-full" /> {/* Progress indicator */}
            </div>
          </div>

          <div className="p-8 md:p-10">
            {/* Timeline */}
            <div className="space-y-0">
              {trackingSteps.map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  {/* Left: Icon & Line */}
                  <div className="flex flex-col items-center w-6">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center z-10 transition-all ${
                      step.completed ? "bg-red-600 text-white" : "bg-slate-100 text-slate-300"
                    }`}>
                      {step.completed ? <CheckCircle2 size={12} strokeWidth={3} /> : <div className="w-2 h-2 bg-slate-300 rounded-full" />}
                    </div>
                    {index !== trackingSteps.length - 1 && (
                      <div className={`w-[2px] h-16 -mt-1 ${step.completed ? "bg-red-600" : "bg-slate-100"}`}></div>
                    )}
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 pb-10">
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className={`text-sm font-bold tracking-tight ${step.completed ? "text-slate-900" : "text-slate-400"}`}>
                                {step.status}
                            </h4>
                            <p className="text-slate-500 text-xs font-medium flex items-center gap-1 mt-1">
                                <MapPin size={10} className="text-slate-300" /> {step.location}
                            </p>
                        </div>
                        {step.time !== "Pending" && (
                            <span className="text-[10px] font-black text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded uppercase">
                                {step.time}
                            </span>
                        )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6">
              <InfoBlock label="From" value="Indore, MP" />
              <InfoBlock label="To" value="Mumbai, MH" />
              <InfoBlock label="Weight" value="2.50 KG" />
              <InfoBlock label="Type" value="Priority" />
            </div>
          </div>
        </div>

        {/* --- ACTION FOOTER --- */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 p-4 bg-white border border-slate-200 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-50 text-slate-400 rounded-lg flex items-center justify-center">
                    <ShieldCheck size={20} />
                </div>
                <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Secure Shipping</p>
                    <p className="text-xs font-bold text-slate-800">Insured by Indore Logistics</p>
                </div>
            </div>
            <button className="flex-1 bg-white border border-slate-200 hover:border-red-600 hover:text-red-600 transition-all rounded-xl p-4 flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-600">
                Contact Agent <ArrowRight size={14} />
            </button>
        </div>
      </div>
    </main>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-1">{label}</p>
      <p className="text-slate-900 text-xs font-bold">{value}</p>
    </div>
  );
}