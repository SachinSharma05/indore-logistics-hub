"use client";

import React, { useState } from 'react';
import { 
  X, 
  CheckCircle, 
  Send, 
  ShieldAlert, 
  Clock,
  MessageSquare
} from "lucide-react";
import { createComplaint } from "../app/complaints/actions"; 

export default function ComplaintModal({ isOpen, onClose, awb, clientId }: any) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    // Simulated API Call
    await createComplaint(formData); 
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2500);
    }, 1500);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-slate-900/60 backdrop-blur-md p-4 pt-25 transition-all">
      <div className="bg-white w-full max-w-md rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* --- MODAL HEADER --- */}
        <div className="bg-rose-50/50 p-6 flex justify-between items-center border-b border-rose-100/50">
          <div className="flex items-center gap-4">
            <div className="bg-rose-500 p-2.5 rounded-xl text-white shadow-lg shadow-rose-200">
              <ShieldAlert size={20} />
            </div>
            <div>
              <h2 className="font-bold text-slate-900 text-[15px] leading-tight">Resolution Center</h2>
              <div className="flex items-center gap-2 mt-0.5">
                 <span className="text-[10px] bg-white border border-rose-200 text-rose-600 px-2 py-0.5 rounded-md font-bold tracking-wider uppercase">
                   AWB: {awb}
                 </span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-white rounded-full transition-colors text-slate-400 hover:text-slate-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* --- MODAL BODY --- */}
        <div className="p-8">
          {!isSuccess ? (
            <form action={handleSubmit} className="space-y-6">
              <input type="hidden" name="client_id" value={clientId} />
              <input type="hidden" name="awb" value={awb} />

              <div className="space-y-3">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <MessageSquare size={14} className="text-indigo-500" /> Issue Description
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-4 focus:ring-indigo-500/5 focus:border-[#7C3AED] focus:bg-white transition-all outline-none resize-none text-[14px] font-medium text-slate-700 placeholder:text-slate-400"
                  placeholder="Describe the problem (e.g., Driver didn't arrive, AWB mismatch, etc.)"
                />
              </div>

              {/* --- RESOLUTION GUARANTEE --- */}
              <div className="bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100/50 flex gap-4 items-start">
                <div className="p-2 bg-white rounded-lg text-indigo-500 shrink-0 shadow-sm">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-indigo-900 uppercase tracking-tight">Rapid Support</p>
                  <p className="text-[12px] text-indigo-700/80 font-medium leading-relaxed mt-1">
                    Your request is prioritized. Our Indore dispatch team will review this manifest and respond within <strong className="text-indigo-900">4 business hours</strong>.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-[13px] uppercase tracking-widest text-white transition-all flex items-center justify-center gap-2 shadow-lg ${
                  isSubmitting 
                  ? 'bg-slate-400 cursor-not-allowed' 
                  : 'bg-slate-900 hover:bg-[#7C3AED] shadow-indigo-100 active:scale-[0.98]'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </span>
                ) : (
                  <>File Complaint <Send size={14} /></>
                )}
              </button>
            </form>
          ) : (
            /* --- SUCCESS STATE --- */
            <div className="py-8 text-center animate-in fade-in slide-in-from-bottom-4">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-emerald-100">
                <CheckCircle size={36} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Ticket Logged</h3>
              <p className="text-slate-500 text-[14px] font-medium mt-2 px-4 leading-relaxed">
                Your complaint has been assigned to a resolution officer. You'll receive an SMS update shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}