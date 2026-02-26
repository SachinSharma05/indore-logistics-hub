"use client";

import { useState } from "react";
import { updateProfile } from "./actions";
import { 
  User, Mail, Phone, MapPin, Building2, 
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* LEFT SIDEBAR: Static Info */}
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-red-100">
            <User size={24} />
          </div>
          <h1 className="text-xl font-bold text-slate-900 mb-1">Account Settings</h1>
          <p className="text-xs text-slate-500 mb-6">Manage your business profile</p>
          
          <div className="space-y-4 pt-4 border-t border-slate-50">
            <div className="flex items-center gap-3 text-slate-600">
              <Mail size={14} className="text-slate-400" />
              <span className="text-xs font-medium">{user.email}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <Shield size={14} className="text-slate-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                {user.role || 'Public User'}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-5 rounded-2xl text-white">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2">
            <AlertCircle size={12} /> Security Tip
          </p>
          <p className="text-xs leading-relaxed text-slate-300">
            Username and Email are locked for security. Contact support to change these.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Editable Form */}
      <div className="md:col-span-2">
        <form action={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h3 className="font-bold text-slate-900">Business Manifest</h3>
          </div>

          <div className="p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone Input */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Phone size={12} /> Contact Number
                </label>
                <input
                  name="phone"
                  type="text"
                  placeholder="+91 00000 00000"
                  defaultValue={user.phone || ""}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-red-500/10 focus:border-red-600 outline-none transition-all font-medium"
                />
              </div>

              {/* Company Name Input */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Building2 size={12} /> Company Name
                </label>
                <input
                  name="company_name"
                  type="text"
                  placeholder="e.g. Malwa Textiles"
                  defaultValue={user.company_name || ""}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-red-500/10 focus:border-red-600 outline-none transition-all font-medium"
                />
              </div>
            </div>

            {/* Address Textarea */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <MapPin size={12} /> Official Business Address
              </label>
              <textarea
                name="company_address"
                rows={4}
                placeholder="Full address in Indore..."
                defaultValue={user.company_address || ""}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-red-500/10 focus:border-red-600 outline-none transition-all font-medium resize-none"
              />
            </div>
          </div>

          <div className="p-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
            <div>
              {status && (
                <div className={`flex items-center gap-2 text-sm font-bold ${status.type === 'success' ? 'text-emerald-600' : 'text-red-600'}`}>
                  {status.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                  {status.msg}
                </div>
              )}
            </div>
            <button
              disabled={loading}
              className="group flex items-center gap-2 bg-slate-950 text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-red-600 transition-all active:scale-95 disabled:opacity-50 shadow-lg shadow-slate-200 hover:shadow-red-200"
            >
              {loading ? (
                "Processing..."
              ) : (
                <>
                  <Save size={14} /> 
                  Update Profile
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}