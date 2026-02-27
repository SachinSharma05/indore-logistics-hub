"use client";

import React from 'react';
import { 
  Search, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Truck,
  Timer
} from "lucide-react";

export default function TrackShipmentPage() {
  const shipmentStatus = "In Transit";
  const trackingSteps = [
    { status: "Shipment Picked Up", location: "Vijay Nagar Hub, Indore", time: "Feb 26, 10:30 AM", completed: true },
    { status: "Processed at Facility", location: "Dewas Naka Sorting Center", time: "Feb 26, 02:15 PM", completed: true },
    { status: "In Transit", location: "En route to Destination Hub", time: "Feb 27, 09:00 AM", completed: true },
    { status: "Out for Delivery", location: "Assigned to Local Van", time: "Pending", completed: false },
    { status: "Delivered", location: "Customer Doorstep", time: "Pending", completed: false },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-12 px-6">
      <div className="max-w-[850px] mx-auto">
        
        {/* --- DYNAMIC SEARCH BAR --- */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
             <Timer size={16} className="text-[#7C3AED]" />
             <span className="text-[#7C3AED] text-[11px] font-bold tracking-[0.3em] uppercase block">Real-Time Monitoring</span>
          </div>
          <div className="max-w-md mx-auto relative group">
            <input 
              type="text" 
              placeholder="Enter AWB Number (e.g., ILH-8821)" 
              className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-[#7C3AED] transition-all text-[14px] font-medium shadow-sm pr-14"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-[#7C3AED] px-3 rounded-lg text-white hover:bg-[#6D28D9] transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* --- TRACKING CARD --- */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-indigo-100/20 overflow-hidden">
          
          {/* Header Banner: Digital "Glass" Effect */}
          <div className="bg-[#0F172A] p-8 text-white flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div className="flex items-center gap-5 relative z-10">
              <div className="w-14 h-14 bg-[#7C3AED] rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-indigo-300 text-[11px] uppercase tracking-widest font-bold mb-1">Live Manifest ILH-8821</p>
                <h2 className="text-2xl font-bold tracking-tight">{shipmentStatus}</h2>
              </div>
            </div>

            <div className="text-center md:text-right relative z-10">
              <p className="text-slate-400 text-[11px] uppercase tracking-widest font-bold mb-1">Estimated Arrival</p>
              <h2 className="text-2xl font-bold text-white">Today <span className="text-[#7C3AED] ml-1">06:45 PM</span></h2>
            </div>
          </div>

          {/* Visual Progress Meter */}
          
          <div className="px-10 pt-10">
            <div className="flex justify-between mb-3">
                <span className="text-[11px] font-bold text-[#7C3AED] uppercase tracking-wider">Indore Hub</span>
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">Mumbai Terminal</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden flex">
                <div className="w-[65%] h-full bg-gradient-to-r from-[#7C3AED] to-indigo-400 rounded-full transition-all duration-1000" />
            </div>
          </div>

          <div className="p-10">
            {/* Vertical Timeline */}
            <div className="space-y-0">
              {trackingSteps.map((step, index) => (
                <div key={index} className="flex gap-8 group">
                  {/* Left: Icon & Connector */}
                  <div className="flex flex-col items-center w-6">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center z-10 transition-all border-4 ${
                      step.completed 
                      ? "bg-[#7C3AED] border-indigo-100 text-white shadow-md shadow-indigo-100" 
                      : "bg-white border-slate-100 text-slate-300"
                    }`}>
                      {step.completed ? <CheckCircle2 size={12} strokeWidth={3} /> : <div className="w-2 h-2 bg-slate-200 rounded-full" />}
                    </div>
                    {index !== trackingSteps.length - 1 && (
                      <div className={`w-[2px] h-20 -mt-1 ${step.completed ? "bg-[#7C3AED]" : "bg-slate-100"}`}></div>
                    )}
                  </div>

                  {/* Right: Event Content */}
                  <div className="flex-1 pb-12">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                        <div>
                            <h4 className={`text-[15px] font-bold tracking-tight ${step.completed ? "text-slate-900" : "text-slate-400"}`}>
                                {step.status}
                            </h4>
                            <div className="flex items-center gap-1.5 mt-1.5">
                                <MapPin size={12} className={step.completed ? "text-[#7C3AED]" : "text-slate-300"} />
                                <p className={`text-[13px] font-medium ${step.completed ? "text-slate-600" : "text-slate-400"}`}>
                                    {step.location}
                                </p>
                            </div>
                        </div>
                        {step.time !== "Pending" && (
                            <span className="text-[11px] font-bold text-slate-500 bg-slate-100 border border-slate-200/50 px-3 py-1 rounded-full whitespace-nowrap">
                                {step.time}
                            </span>
                        )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed Info Grid */}
            <div className="mt-4 pt-10 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8">
              <InfoBlock label="Shipper" value="Indore Hub (MP)" />
              <InfoBlock label="Consignee" value="Andheri, Mumbai" />
              <InfoBlock label="Gross Weight" value="2.50 KG" />
              <InfoBlock label="Service" value="Priority Air" />
            </div>
          </div>
        </div>

        {/* --- FOOTER UTILITIES --- */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 p-5 bg-white border border-slate-200 rounded-2xl flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                    <ShieldCheck size={24} />
                </div>
                <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Secured Transit</p>
                    <p className="text-[14px] font-bold text-slate-800">100% Value Insured</p>
                </div>
            </div>
            <button className="flex-1 bg-white border border-slate-200 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all rounded-2xl p-5 flex items-center justify-center gap-3 text-[13px] font-bold text-slate-600 shadow-sm group">
                Download Waybill PDF <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </main>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] text-slate-400 uppercase font-bold tracking-widest mb-1.5">{label}</p>
      <p className="text-slate-900 text-[14px] font-bold tracking-tight">{value}</p>
    </div>
  );
}