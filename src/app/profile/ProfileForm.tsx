"use client";

import { useState } from "react";
import { updateProfile } from "./actions";
import { 
  User, Mail, Phone, MapPin, Building2, Lock, 
  Shield, Save, CheckCircle2, AlertCircle 
} from "lucide-react";

export default function ProfileForm({ user }: { user: any }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setStatus(null);

    const result = await updateProfile(formData);

    setLoading(false);
    if (result.success) {
      setStatus({ type: 'success', msg: "Profile updated successfully!" });
      setTimeout(() => setStatus(null), 4000);
    } else {
      setStatus({ type: 'error', msg: "Failed to update profile." });
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* --- LEFT COLUMN: IDENTITY CARD --- */}
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-14 h-14 bg-indigo-50 text-[#7C3AED] rounded-2xl flex items-center justify-center mb-6 border border-indigo-100">
              <User size={28} />
            </div>
            <h1 className="text-xl font-bold text-slate-900 mb-1">Account Settings</h1>
            <p className="text-[13px] text-slate-500 font-medium mb-8">Manage your merchant identity and billing defaults.</p>
            
            <div className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3 text-slate-600">
                <div className="p-1.5 bg-slate-50 rounded-md">
                   <Mail size={14} className="text-slate-400" />
                </div>
                <span className="text-[13px] font-medium">{user.email}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="p-1.5 bg-slate-50 rounded-md">
                   <Shield size={14} className="text-slate-400" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7C3AED]">
                  {user.role || 'Public Merchant'}
                </span>
              </div>
            </div>
          </div>
          {/* Decorative Background Element */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-50/50 rounded-full blur-3xl"></div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl text-white shadow-lg shadow-slate-200">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 mb-3 flex items-center gap-2">
            <Lock size={12} /> Security Protocol
          </p>
          <p className="text-[12px] leading-relaxed text-slate-300 font-medium">
            Email addresses and Account IDs are immutable. To transition to a different hub or change primary emails, please file a support ticket.
          </p>
        </div>
      </div>

      {/* --- RIGHT COLUMN: EDITABLE MANIFEST --- */}
      <div className="lg:col-span-8">
        <form action={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-100 bg-slate-50/30">
            <h3 className="font-bold text-slate-900 text-[15px]">Business Manifest</h3>
          </div>

          <div className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Phone Input */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2 ml-1">
                  <Phone size={12} className="text-indigo-500" /> Primary Contact
                </label>
                <input
                  name="phone"
                  type="text"
                  placeholder="+91 00000 00000"
                  defaultValue={user.phone || ""}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-[14px] focus:ring-4 focus:ring-indigo-500/5 focus:border-[#7C3AED] outline-none transition-all font-semibold text-slate-700"
                />
              </div>

              {/* Company Name Input */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2 ml-1">
                  <Building2 size={12} className="text-indigo-500" /> Trade Name
                </label>
                <input
                  name="company_name"
                  type="text"
                  placeholder="e.g. Malwa Textiles"
                  defaultValue={user.company_name || ""}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-[14px] focus:ring-4 focus:ring-indigo-500/5 focus:border-[#7C3AED] outline-none transition-all font-semibold text-slate-700"
                />
              </div>
            </div>

            {/* Address Textarea */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2 ml-1">
                <MapPin size={12} className="text-indigo-500" /> Default Pickup Hub Address
              </label>
              <textarea
                name="company_address"
                rows={4}
                placeholder="Full operational address in Indore..."
                defaultValue={user.company_address || ""}
                className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-lg text-[14px] focus:ring-4 focus:ring-indigo-500/5 focus:border-[#7C3AED] outline-none transition-all font-semibold text-slate-700 resize-none leading-relaxed"
              />
              <p className="text-[11px] text-slate-400 font-medium italic mt-1">This address will be used as the default 'Origin' for new pickup requests.</p>
            </div>
          </div>

          <div className="p-8 bg-slate-50/50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="min-h-[20px]">
              {status && (
                <div className={`flex items-center gap-2 text-[13px] font-bold animate-in fade-in slide-in-from-left-2 ${status.type === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {status.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                  {status.msg}
                </div>
              )}
            </div>
            <button
              disabled={loading}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#7C3AED] text-white px-10 py-3.5 rounded-lg text-[13px] font-bold uppercase tracking-widest hover:bg-[#6D28D9] transition-all active:scale-95 disabled:opacity-50 shadow-lg shadow-indigo-100"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                   <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                   Syncing...
                </span>
              ) : (
                <>
                  <Save size={16} /> 
                  Save Changes
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}