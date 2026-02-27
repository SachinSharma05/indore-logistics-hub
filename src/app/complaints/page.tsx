"use client";

import React, { useState } from 'react';
import { 
  Plus, 
  CheckCircle2, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  LifeBuoy,
  Search
} from "lucide-react";
import Link from 'next/link';

export default function ComplaintsHistoryPage() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const toggleRow = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const myComplaints = [
    { 
      id: 101, 
      awb: "ILH-8821", 
      message: "My package is stuck at Dewas Naka for 2 days. The tracking hasn't updated since Tuesday.",
      status: "resolved",
      resolution_comment: "The vehicle was delayed due to heavy rain in the Dewas-Indore bypass. It has cleared the hub and is now out for delivery via our local dispatch van. Expected delivery by 4 PM today.",
      created_at: "Feb 22, 2026"
    },
    { 
      id: 105, 
      awb: "ILH-9255", 
      message: "Incorrect pickup address provided by the system. The driver is at the wrong warehouse location.",
      status: "open",
      resolution_comment: null,
      created_at: "Feb 23, 2026"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-12 px-6">
      <div className="max-w-[1000px] mx-auto">
        
        {/* --- HEADER --- */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
               <LifeBuoy size={16} className="text-[#7C3AED]" />
               <span className="text-[#7C3AED] text-[11px] font-bold tracking-widest uppercase">Service Desk</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Support Tickets</h1>
          </div>
          <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-5 py-2.5 rounded-md text-[13px] font-bold flex items-center gap-2 transition-all shadow-lg shadow-indigo-100">
            <Plus size={18} /> Raise New Ticket
          </button>
        </header>

        {/* --- FILTERS & SEARCH --- */}
        <div className="mb-6 flex gap-4">
           <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search ticket ID or AWB..." 
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-md text-[13px] font-medium outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-[#7C3AED] transition-all"
              />
           </div>
        </div>

        {/* --- TABLE --- */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 text-slate-500 uppercase text-[11px] font-bold tracking-wider border-b border-slate-100">
                  <th className="px-6 py-4">Ticket ID</th>
                  <th className="px-6 py-4">Linked AWB</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {myComplaints.map((ticket) => (
                  <React.Fragment key={ticket.id}>
                    <tr 
                      className={`hover:bg-slate-50/50 transition-colors cursor-pointer group ${expandedRow === ticket.id ? 'bg-indigo-50/30' : ''}`}
                      onClick={() => toggleRow(ticket.id)}
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${ticket.status === 'resolved' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                             {ticket.status === 'resolved' ? <CheckCircle2 size={16}/> : <Clock size={16}/>}
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 text-[14px]">#TKT-{ticket.id}</span>
                            <p className="text-[12px] text-slate-400 font-medium">{ticket.created_at}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="text-[12px] font-mono font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded">
                          {ticket.awb}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <TicketStatusBadge status={ticket.status} />
                      </td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex items-center justify-end gap-2 text-slate-400 group-hover:text-[#7C3AED] transition-colors">
                          <span className="text-[11px] font-bold uppercase tracking-wider">
                            {expandedRow === ticket.id ? 'Collapse' : 'View Details'}
                          </span>
                          {expandedRow === ticket.id ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
                        </div>
                      </td>
                    </tr>

                    {/* --- EXPANDABLE RESOLUTION PANEL --- */}
                    {expandedRow === ticket.id && (
                      <tr className="bg-[#fcfdfe]">
                        <td colSpan={4} className="px-8 py-8 border-b border-slate-100">
                          <div className="grid md:grid-cols-2 gap-10 animate-in fade-in slide-in-from-top-2 duration-300">
                            
                            {/* User Message Side */}
                            <div>
                              <div className="flex items-center gap-2 mb-4">
                                <MessageSquare size={14} className="text-slate-400"/>
                                <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Inquiry Details</h4>
                              </div>
                              <div className="relative p-5 bg-white rounded-lg border border-slate-200 text-[14px] text-slate-600 leading-relaxed shadow-sm">
                                <div className="absolute top-0 left-6 -translate-y-1/2 w-3 h-3 bg-white border-l border-t border-slate-200 rotate-45"></div>
                                {ticket.message}
                              </div>
                            </div>

                            {/* Official Resolution Side */}
                            <div>
                              <div className="flex items-center gap-2 mb-4">
                                <CheckCircle2 size={14} className={` ${ticket.status === 'resolved' ? 'text-emerald-500' : 'text-slate-300'}`}/>
                                <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Official Resolution</h4>
                              </div>
                              <div className={`p-5 rounded-lg border text-[14px] leading-relaxed shadow-sm ${
                                ticket.resolution_comment 
                                ? 'bg-indigo-50/50 border-indigo-100 text-slate-900' 
                                : 'bg-slate-50 border-slate-200 text-slate-400 italic'
                              }`}>
                                {ticket.resolution_comment || "Our support engineers are currently reviewing the hub logs for this manifest. Expected update within 4 working hours."}
                                {ticket.status === 'resolved' && (
                                  <div className="mt-4 pt-4 border-t border-indigo-100 flex items-center justify-between">
                                     <span className="text-[11px] font-bold text-indigo-600 uppercase">Resolved by Hub Lead</span>
                                     <button className="text-[11px] font-bold text-slate-400 hover:text-red-500 transition-colors uppercase">Reopen Ticket</button>
                                  </div>
                                )}
                              </div>
                            </div>

                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- SUPPORT FOOTER --- */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 p-6 bg-white border border-slate-200 rounded-xl">
           <div className="text-[13px] text-slate-500">
              Need urgent help? Call our 24/7 Indore Hub helpline at <span className="font-bold text-slate-900">+91 731 000 000</span>
           </div>
           <div className="flex gap-4">
              <Link href="#" className="text-[12px] font-bold text-[#7C3AED] hover:underline">Support Documentation</Link>
              <Link href="#" className="text-[12px] font-bold text-[#7C3AED] hover:underline">API Status</Link>
           </div>
        </div>
      </div>
    </main>
  );
}

function TicketStatusBadge({ status }: { status: string }) {
  const isResolved = status === 'resolved';
  return (
    <span className={`px-2.5 py-1 rounded text-[11px] font-bold border ${
      isResolved ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-amber-50 text-amber-700 border-amber-100'
    }`}>
      {isResolved ? 'RESOLVED' : 'IN REVIEW'}
    </span>
  );
}