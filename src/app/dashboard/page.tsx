"use client";

import Link from 'next/link';
import { 
  Package, Search, MessageSquareWarning, 
  ExternalLink, Filter, Plus, 
  History, Clock, CheckCircle2, AlertCircle, 
  LayoutDashboard
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
    <div className="flex min-h-screen bg-white">
      {/* --- SIDEBAR: Ultra Slim & Modern --- */}
      <aside className="hidden lg:flex w-72 bg-slate-950 border-r border-slate-800 flex-col p-8 sticky top-0 h-screen text-white">
        <div className="flex items-center gap-3 mb-12 px-2">
          <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-900/20">
            <Package className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-lg tracking-tight">Indore<span className="text-red-600 italic font-light">Hub</span></span>
        </div>
        
        <nav className="space-y-1 flex-1">
          <SidebarLink href="/dashboard" label="Overview" icon={<LayoutDashboard className="w-4 h-4" />} active />
          <SidebarLink href="/dashboard/complaints" label="Support Tickets" icon={<MessageSquareWarning className="w-4 h-4" />} />
          <SidebarLink href="/dashboard/history" label="Archive" icon={<History className="w-4 h-4" />} />
        </nav>

        {/* Priority Support Card */}
        <div className="mt-auto p-6 bg-white/5 rounded-[2rem] border border-white/10">
          <p className="text-[9px] text-red-500 font-bold uppercase tracking-[0.2em] mb-2">Concierge</p>
          <p className="text-xs font-light text-slate-300 leading-relaxed mb-4">Dedicated logistics support for your account.</p>
          <button className="w-full bg-white text-slate-950 text-[10px] py-3 rounded-full font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all">
            Get Help
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-8 md:p-12 max-w-[1400px] mx-auto bg-slate-50/30">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <span className="text-red-600 text-[10px] font-semibold tracking-[0.3em] uppercase mb-2 block">Client Dashboard</span>
            <h1 className="text-3xl font-semibold text-slate-950 tracking-tight">Active Shipments</h1>
          </div>
          <Link href="/book-pickup" className="bg-slate-950 text-white px-8 py-4 rounded-full text-[11px] font-semibold uppercase tracking-widest flex items-center gap-2 hover:bg-red-600 shadow-2xl shadow-slate-200 transition-all active:scale-95">
            <Plus className="w-4 h-4" /> Book New Pickup
          </Link>
        </header>

        {/* --- STATS OVERVIEW --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <StatCard label="Total Logistics" value="12" icon={<Package />} color="slate" />
          <StatCard label="Live Tracking" value="03" icon={<Clock />} color="red" />
          <StatCard label="Fulfilled" value="09" icon={<CheckCircle2 />} color="slate" />
        </div>

        {/* --- DATA TABLE --- */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/40 overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row justify-between gap-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              <input 
                type="text" 
                placeholder="Find Shipment ID or City..." 
                className="w-full pl-14 pr-6 py-4 bg-slate-50/50 border border-slate-100 rounded-full text-[13px] font-light outline-none focus:bg-white focus:border-red-500 transition-all" 
              />
            </div>
            <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-slate-100 px-8 py-4 rounded-full hover:bg-slate-50 transition-colors">
              <Filter className="w-3.5 h-3.5" /> Filter Results
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-slate-400 uppercase text-[9px] tracking-[0.2em] font-bold">
                  <th className="px-10 py-6">Manifest ID</th>
                  <th className="px-10 py-6">Destination</th>
                  <th className="px-10 py-6">Timeline</th>
                  <th className="px-10 py-6">Status</th>
                  <th className="px-10 py-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {shipments.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 transition-all group">
                    <td className="px-10 py-7">
                      <span className="font-semibold text-slate-900 block tracking-tight">{item.id}</span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{item.type}</span>
                    </td>
                    <td className="px-10 py-7 text-[13px] text-slate-600 font-light">{item.destination}</td>
                    <td className="px-10 py-7 text-[13px] text-slate-500 font-light">{item.date}</td>
                    <td className="px-10 py-7">
                      <StatusBadge status={item.status} />
                    </td>
                    <td className="px-10 py-7 text-right">
                      <div className="flex justify-end gap-2">
                        <Link href={`/track/${item.id}`} className="p-3 text-slate-400 hover:text-slate-950 hover:bg-white border border-transparent hover:border-slate-100 rounded-xl transition-all">
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                        <button 
                          onClick={() => setSelectedAwb(item.id)}
                          className="p-3 text-slate-400 hover:text-red-600 hover:bg-white border border-transparent hover:border-red-50 rounded-xl transition-all" 
                        >
                          <AlertCircle className="w-4 h-4" />
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

      {/* --- MODAL --- */}
      <ComplaintModal
        isOpen={!!selectedAwb}
        onClose={() => setSelectedAwb(null)}
        awb={selectedAwb}
        clientId={clientId}
      />
    </div>
  );
}

// --- REFINED HELPER COMPONENTS ---

function SidebarLink({ href, label, icon, active = false }: any) {
  return (
    <Link href={href} className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-[11px] font-semibold uppercase tracking-[0.1em] transition-all ${
      active ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-white hover:bg-white/5'
    }`}>
      {icon} {label}
    </Link>
  );
}

function StatCard({ label, value, icon, color }: any) {
  const isRed = color === 'red';
  return (
    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 flex justify-between items-center shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{label}</p>
        <p className="text-4xl font-light text-slate-950 tracking-tighter leading-none">{value}</p>
      </div>
      <div className={`p-4 rounded-2xl transition-colors ${isRed ? 'bg-red-50 text-red-600' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-950 group-hover:text-white'}`}>
        {icon}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: any = {
    'Delivered': 'text-emerald-600 border-emerald-100',
    'In Transit': 'text-red-600 border-red-100',
    'Pending Pickup': 'text-slate-400 border-slate-100',
  };
  return (
    <span className={`px-4 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border bg-white ${styles[status]}`}>
      {status}
    </span>
  );
}