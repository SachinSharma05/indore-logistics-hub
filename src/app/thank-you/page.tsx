"use client";

import React from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  Home, 
  ArrowRight, 
  Phone, 
  Truck, 
  Smartphone,
  Copy,
  Share2
} from "lucide-react";

export default function ThankYouPage() {
  const trackingId = "ILH-IND-88291"; 

  const copyToClipboard = () => {
    navigator.clipboard.writeText(trackingId);
    // You could trigger a toast notification here
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-6 py-12">
      <div className="max-w-xl w-full">
        
        {/* --- MAIN SUCCESS CARD --- */}
        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl shadow-indigo-100/20 overflow-hidden relative">
          
          {/* Top Progress Bar Decoration */}
          <div className="h-1.5 w-full bg-slate-100">
             <div className="h-full w-full bg-gradient-to-r from-[#7C3AED] to-indigo-400"></div>
          </div>

          <div className="pt-10 pb-6 flex justify-center">
            <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center relative">
              <CheckCircle2 className="w-12 h-12 text-[#7C3AED] stroke-[1.5]" />
              <div className="absolute inset-0 rounded-full border-4 border-indigo-600/10 animate-ping"></div>
            </div>
          </div>

          <div className="pb-12 px-8 md:px-12 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
              Pickup Scheduled!
            </h1>
            <p className="text-[14px] font-medium text-slate-500 mb-8 max-w-sm mx-auto leading-relaxed">
              Your manifest has been successfully logged in our 
              <span className="text-[#7C3AED] font-bold"> Indore Hub</span>. 
              Get your parcel ready for dispatch.
            </p>

            {/* --- DIGITAL REFERENCE BOX --- */}
            <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-200 group relative">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] uppercase tracking-widest text-slate-400 font-bold">
                  Reference AWB
                </span>
                <button 
                  onClick={copyToClipboard}
                  className="p-1.5 hover:bg-white rounded-md transition-all text-slate-400 hover:text-[#7C3AED]"
                >
                  <Copy size={14} />
                </button>
              </div>
              <code className="text-3xl font-mono font-bold text-slate-900 tracking-wider">
                {trackingId}
              </code>
              <div className="mt-4 flex items-center justify-center gap-4 pt-4 border-t border-slate-200/60">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                   <Smartphone size={12} /> SMS SENT
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                   <Share2 size={12} /> EMAIL SENT
                </div>
              </div>
            </div>

            {/* --- EXPECTATION TIMELINE --- */}
            <div className="text-left space-y-6 mb-10 bg-slate-50/50 p-6 rounded-2xl border border-dashed border-slate-200">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-[11px] font-bold shrink-0">1</div>
                  <div className="w-[2px] h-full bg-slate-200 mt-2"></div>
                </div>
                <div className="pb-2">
                  <p className="text-[13px] font-bold text-slate-900 uppercase tracking-tight">Verification Call</p>
                  <p className="text-[12px] font-medium text-slate-500 mt-0.5 leading-relaxed">Our Indore dispatcher will call to verify the warehouse floor/gate within 15 mins.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full border-2 border-slate-200 bg-white text-slate-400 flex items-center justify-center text-[11px] font-bold shrink-0">2</div>
                <div>
                  <p className="text-[13px] font-bold text-slate-900 uppercase tracking-tight">Agent Arrival</p>
                  <p className="text-[12px] font-medium text-slate-500 mt-0.5 leading-relaxed">Agent will arrive with digital scales and security tape for on-site weighing.</p>
                </div>
              </div>
            </div>

            {/* --- ACTION PILLS --- */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/dashboard"
                className="flex-1 flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 px-6 py-3.5 rounded-lg text-[13px] font-bold hover:bg-slate-50 transition-all"
              >
                <Home size={16} /> Dashboard
              </Link>
              <Link
                href={`/track/${trackingId}`}
                className="flex-1 flex items-center justify-center gap-2 bg-[#7C3AED] text-white px-6 py-3.5 rounded-lg text-[13px] font-bold hover:bg-[#6D28D9] shadow-lg shadow-indigo-100 transition-all"
              >
                Live Tracking <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* --- SUPPORT FOOTER --- */}
        <div className="mt-8 text-center">
          <p className="text-slate-400 text-[12px] font-medium inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full border border-slate-100 shadow-sm">
            <Phone size={14} className="text-[#7C3AED]" />
            Need to cancel or reschedule? <span className="text-slate-900 font-bold">+91 93403 84339</span>
          </p>
        </div>
      </div>
    </main>
  );
}