"use client";

import { useState } from "react";
import { 
  ArrowUpRight, CheckCircle2, Clock, MessageSquareWarning, 
  HelpCircle, Filter, Search, Plus, ChevronDown, ChevronUp, MessageSquare 
} from "lucide-react";

export default function ComplaintsHistoryPage() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const toggleRow = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const myComplaints = [
    { 
      id: 101, 
      awb: "ILH-8821", 
      message: "My package is stuck at Dewas Naka for 2 days.",
      status: "resolved",
      resolution_comment: "The vehicle was delayed due to heavy rain in the Dewas-Indore bypass. It has cleared the hub and is now out for delivery via our local dispatch van.",
      created_at: "Feb 22, 2026"
    },
    { 
      id: 105, 
      awb: "ILH-9255", 
      message: "Incorrect pickup address provided by the team.",
      status: "open",
      resolution_comment: null,
      created_at: "Feb 23, 2026"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-12 px-6">
      <div className="max-w-[1100px] mx-auto">
        
        {/* --- HEADER --- */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <span className="text-red-600 text-[10px] font-black tracking-[0.4em] uppercase mb-2 block">Service Desk</span>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Support Tickets</h1>
          </div>
          <button className="bg-slate-950 hover:bg-red-600 text-white px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-all">
            <Plus size={14} /> Raise New Ticket
          </button>
        </header>

        {/* --- TABLE --- */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 text-slate-500 uppercase text-[10px] font-black tracking-widest border-b border-slate-100">
                  <th className="px-6 py-4">Ticket</th>
                  <th className="px-6 py-4">AWB Number</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {myComplaints.map((ticket, idx) => (
                  <>
                    <tr 
                      key={ticket.id  + idx} 
                      className={`hover:bg-slate-50/50 transition-colors cursor-pointer ${expandedRow === ticket.id ? 'bg-slate-50/80' : ''}`}
                      onClick={() => toggleRow(ticket.id)}
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${ticket.status === 'resolved' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                             {ticket.status === 'resolved' ? <CheckCircle2 size={16}/> : <Clock size={16}/>}
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 text-sm">#00{ticket.id}</span>
                            <p className="text-[10px] text-slate-400 font-medium">{ticket.created_at}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="text-[11px] font-mono font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded">
                          {ticket.awb}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <TicketStatusBadge status={ticket.status} />
                      </td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex items-center justify-end gap-2 text-slate-400">
                          <span className="text-[10px] font-bold uppercase tracking-widest">
                            {expandedRow === ticket.id ? 'Hide' : 'View'}
                          </span>
                          {expandedRow === ticket.id ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
                        </div>
                      </td>
                    </tr>

                    {/* --- EXPANDABLE ROW --- */}
                    {expandedRow === ticket.id && (
                      <tr className="bg-slate-50/30">
                        <td colSpan={4} className="px-8 py-6 border-b border-slate-100">
                          <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-top-2">
                            {/* User Message */}
                            <div>
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <MessageSquare size={12}/> Your Issue
                              </p>
                              <div className="bg-white p-4 rounded-xl border border-slate-200 text-sm text-slate-600 leading-relaxed shadow-sm">
                                {ticket.message}
                              </div>
                            </div>

                            {/* Official Resolution */}
                            <div>
                              <p className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <CheckCircle2 size={12}/> Official Resolution
                              </p>
                              <div className="bg-white p-4 rounded-xl border border-red-100 text-sm text-slate-900 leading-relaxed shadow-sm shadow-red-50/50">
                                {ticket.resolution_comment || (
                                  <span className="italic text-slate-400">Our dispatch team is currently investigating this manifest. Check back soon.</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

function TicketStatusBadge({ status }: { status: string }) {
  const isResolved = status === 'resolved';
  return (
    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
      isResolved ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
    }`}>
      {status}
    </span>
  );
}