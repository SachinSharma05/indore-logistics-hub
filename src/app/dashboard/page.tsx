"use client";

import Link from 'next/link';
import { 
  Package, Search, ExternalLink, Filter, Plus, Clock, CheckCircle2, AlertCircle, 
  ChevronRight,
  MapPin
} from 'lucide-react';
import ComplaintModal from '../../components/ComplaintModal';
import { useState } from 'react';

export default function CustomerDashboard() {
  const [selectedAwb, setSelectedAwb] = useState<string | null>(null);
  const clientId = 123;

  const shipments = [
    { id: "ILH-8821", date: "22 Feb, 2026", type: "Ecommerce", status: "Delivered", destination: "Mumbai, MH" },
    { id: "ILH-9012", date: "23 Feb, 2026", type: "Home Shifting", status: "In Transit", destination: "Bhopal, MP" },
    { id: "ILH-9255", date: "23 Feb, 2026", type: "Corporate", status: "Pending Pickup", destination: "Delhi, NCR" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <main className="max-w-[1280px] mx-auto px-4 py-8 md:px-8">
        
        {/* --- COMPACT HEADER --- */}
        <header className="flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Shipment Command</h1>
            <p className="text-xs text-slate-500 mt-1">Manage and track your active logistics manifest</p>
          </div>
          <Link href="/book-pickup" className="bg-red-600 hover:bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-red-100">
            <Plus size={16} /> New Pickup
          </Link>
        </header>

        {/* --- COMPACT STATS GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard label="Total" value="12" icon={<Package size={18} />} />
          <StatCard label="Live" value="03" icon={<Clock size={18} />} isActive />
          <StatCard label="Fulfilled" value="09" icon={<CheckCircle2 size={18} />} />
          <StatCard label="Tickets" value="01" icon={<AlertCircle size={18} />} />
        </div>

        {/* --- DATA BOARD --- */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Table Toolbar */}
          <div className="p-4 border-b border-slate-100 flex flex-col md:flex-row justify-between gap-4 bg-white">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search ID or Destination..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-red-500/10 focus:border-red-600 transition-all outline-none" 
              />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 text-[11px] font-bold text-slate-600 border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-50">
                <Filter size={14} /> Filter
              </button>
            </div>
          </div>

          {/* Optimized Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 text-slate-500 uppercase text-[10px] font-black tracking-widest border-b border-slate-100">
                  <th className="px-6 py-4">Manifest ID</th>
                  <th className="px-6 py-4">Destination</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {shipments.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 text-sm">{item.id}</span>
                        <span className="text-[10px] text-slate-400 font-medium">{item.type} • {item.date}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                        <MapPin size={14} className="text-slate-300" /> {item.destination}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={item.status} />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1">
                        <Link href={`/track/${item.id}`} className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all" title="View Details">
                          <ChevronRight size={18} />
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

      <ComplaintModal
        isOpen={!!selectedAwb}
        onClose={() => setSelectedAwb(null)}
        awb={selectedAwb}
        clientId={clientId}
      />
    </div>
  );
}

// --- OPTIMIZED MINI-COMPONENTS ---

function StatCard({ label, value, icon, isActive }: { label: string, value: string, icon: React.ReactNode, isActive?: boolean }) {
  return (
    <div className={`p-5 rounded-2xl border transition-all ${isActive ? 'bg-white border-red-100 shadow-md shadow-red-50' : 'bg-white border-slate-100 shadow-sm'}`}>
      <div className="flex justify-between items-start mb-2">
        <div className={`p-2 rounded-lg ${isActive ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
          {icon}
        </div>
        <span className="text-2xl font-bold text-slate-900">{value}</span>
      </div>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    'Delivered': 'bg-emerald-50 text-emerald-700',
    'In Transit': 'bg-blue-50 text-blue-700',
    'Pending Pickup': 'bg-amber-50 text-amber-700',
  };
  return (
    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold border-0 ${styles[status] || 'bg-slate-100'}`}>
      {status}
    </span>
  );
}