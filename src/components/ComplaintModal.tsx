"use client";
import { useState } from "react";
import { AlertCircle, X, Send, CheckCircle } from "lucide-react";

import { createComplaint } from "../app/complaints/actions"; 

export default function ComplaintModal({ isOpen, onClose, awb, clientId }: any) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    // Add client_id and awb to the formData manually or via hidden inputs
    await createComplaint(formData); 
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Close modal after 2 seconds on success
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2000);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden transition-all animate-in fade-in zoom-in duration-300">
        
        {/* Modal Header */}
        <div className="bg-red-50 p-6 flex justify-between items-center border-b border-red-100">
          <div className="flex items-center gap-3">
            <div className="bg-red-500 p-2 rounded-xl text-white">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900 leading-tight">Report an Issue</h2>
              <p className="text-xs text-red-600 font-medium tracking-wide uppercase">ID: {awb}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white rounded-full transition text-slate-400">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-8">
          {!isSuccess ? (
            <form action={handleSubmit} className="space-y-6">
              {/* Hidden Inputs for Schema */}
              <input type="hidden" name="client_id" value={clientId} />
              <input type="hidden" name="awb" value={awb} />

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">How can we help?</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-red-500 focus:bg-white transition outline-none resize-none text-slate-700 placeholder:text-slate-400"
                  placeholder="Tell us about the issue (e.g., Delay in pickup, damaged package...)"
                />
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex gap-3 items-start">
                <CheckCircle className="w-4 h-4 text-slate-400 mt-0.5" />
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Submitting this will create an <strong>Open</strong> ticket. Our Indore resolution associate will review and respond within 4 working hours.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${
                  isSubmitting ? 'bg-slate-400' : 'bg-red-600 hover:bg-red-700 shadow-lg shadow-red-200 active:scale-95'
                }`}
              >
                {isSubmitting ? 'Processing...' : (
                  <>Submit Complaint <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          ) : (
            /* Success State */
            <div className="py-10 text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Ticket Created!</h3>
              <p className="text-slate-500 text-sm">Your complaint has been registered. You can track the status in the 'Complaints' tab.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}