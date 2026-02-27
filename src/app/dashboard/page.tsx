"use client";

import Link from 'next/link';
import { 
  Plus, 
  Package, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Search, 
  Filter, 
  MapPin, 
  ChevronRight,
  MoreVertical,
  ArrowUpRight,
  Download
} from "lucide-react";
import ComplaintModal from '../../components/ComplaintModal';
import { useState } from 'react';

export default function CustomerDashboard() {
  const [selectedAwb, setSelectedAwb] = useState<string | null>(null);
  const clientId = 123;

  const shipments = [
    { id: "ILH-8821", date: "22 Feb, 2026", type: "Ecommerce", status: "Delivered", destination: "Mumbai, MH", weight: "2.5kg" },
    { id: "ILH-9012", date: "23 Feb, 2026", type: "Home Shifting", status: "In Transit", destination: "Bhopal, MP", weight: "450kg" },
    { id: "ILH-9255", date: "23 Feb, 2026", type: "Corporate", status: "Pending Pickup", destination: "Delhi, NCR", weight: "12kg" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* --- DASHBOARD WRAPPER --- */}
      <main className="max-w-[1200px] mx-auto px-4 py-8 md:px-6">
        
        {/* --- HEADER: ACTION ORIENTED --- */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Shipment Command</h1>
            <p className="text-[13px] text-slate-500 font-medium mt-1">Operational overview for <span className="text-[#7C3AED] font-bold">Indore Merchant Account</span></p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-700 text-[13px] font-bold rounded-md hover:bg-slate-50 transition-all">
              <Download size={16} /> Export Reports
            </button>
            <Link href="/book-pickup" className="flex-1 md:flex-none bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-5 py-2.5 rounded-md text-[13px] font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-100">
              <Plus size={18} /> New Shipment
            </Link>
          </div>
        </header>

        {/* --- KPI TILES --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <StatCard label="Total Shipments" value="12" icon={<Package size={20} />} trend="+2 today" />
          <StatCard label="Live Tracking" value="03" icon={<Clock size={20} />} isActive />
          <StatCard label="Delivered" value="09" icon={<CheckCircle2 size={20} />} />
          <StatCard label="Active Issues" value="01" icon={<AlertCircle size={20} />} isWarning />
        </div>

        {/* --- SHIPMENT TABLE --- */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          
          {/* Table Header/Search Area */}
          <div className="px-6 py-5 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search AWB, ID or City..." 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md text-[13px] font-medium focus:bg-white focus:ring-4 focus:ring-indigo-500/5 focus:border-[#7C3AED] transition-all outline-none" 
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 text-[12px] font-bold text-slate-600 border border-slate-200 px-4 py-2.5 rounded-md hover:bg-slate-50">
                <Filter size={14} /> Filter
              </button>
            </div>
          </div>

          {/* Table Data */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 text-slate-500 uppercase text-[11px] font-bold tracking-wider border-b border-slate-100">
                  <th className="px-6 py-4">Manifest Info</th>
                  <th className="px-6 py-4">Route</th>
                  <th className="px-6 py-4">Weight</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {shipments.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 text-[14px]">{item.id}</span>
                        <span className="text-[12px] text-slate-400 font-medium">{item.type} • {item.date}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-slate-700 text-[13px] font-semibold">
                        <MapPin size={14} className="text-slate-300" /> {item.destination}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-[13px] text-slate-600 font-medium">{item.weight}</span>
                    </td>
                    <td className="px-6 py-5">
                      <StatusBadge status={item.status} />
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex justify-end items-center gap-2">
                        <Link href={`/track/${item.id}`} className="bg-slate-100 text-slate-600 p-2 rounded-md hover:bg-[#7C3AED] hover:text-white transition-all">
                          <ArrowUpRight size={16} />
                        </Link>
                        <button
                          onClick={() => setSelectedAwb(item.id)}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                          title="Raise Complaint"
                        >
                          <AlertCircle size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* --- MODAL (Abstracted) --- */}
      {selectedAwb && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
           <ComplaintModal
              isOpen={!!selectedAwb}
              onClose={() => setSelectedAwb(null)}
              awb={selectedAwb}
              clientId={clientId}
            />
        </div>
      )}
    </div>
  );
}

// --- REFINED MINI-COMPONENTS ---

function StatCard({ label, value, icon, isActive, isWarning, trend }: { label: string, value: string, icon: React.ReactNode, isActive?: boolean, isWarning?: boolean, trend?: string }) {
  return (
    <div className={`p-6 rounded-xl border transition-all bg-white shadow-sm hover:shadow-md ${isActive ? 'border-[#7C3AED]/30' : isWarning ? 'border-rose-200' : 'border-slate-200'}`}>
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2.5 rounded-lg ${isActive ? 'bg-[#7C3AED] text-white shadow-lg shadow-indigo-100' : isWarning ? 'bg-rose-500 text-white shadow-lg shadow-rose-100' : 'bg-slate-100 text-slate-500'}`}>
          {icon}
        </div>
        {trend && <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{trend}</span>}
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-slate-900 tracking-tight">{value}</span>
        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">{label}</p>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    'Delivered': 'bg-emerald-50 text-emerald-700 border-emerald-100',
    'In Transit': 'bg-indigo-50 text-indigo-700 border-indigo-100',
    'Pending Pickup': 'bg-amber-50 text-amber-700 border-amber-100',
  };
  return (
    <span className={`px-2.5 py-1 rounded text-[11px] font-bold border ${styles[status] || 'bg-slate-100 border-slate-200'}`}>
      {status}
    </span>
  );
}