import { CheckCircle2, Clock, MessageSquareWarning, ArrowUpRight, HelpCircle } from "lucide-react";

export default function ComplaintsHistoryPage() {
  const myComplaints = [
    { 
      id: 101, 
      awb: "ILH-8821", 
      message: "My package is stuck at Dewas Naka for 2 days.",
      status: "resolved",
      resolution_comment: "The vehicle was delayed due to rain. It is now out for delivery.",
      created_at: "Feb 22, 2026"
    },
    { 
      id: 105, 
      awb: "ILH-9255", 
      message: "Incorrect pickup address provided.",
      status: "open",
      resolution_comment: null,
      created_at: "Feb 23, 2026"
    }
  ];

  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* --- 1. SLIM HEADER --- */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-red-600 text-[10px] font-semibold tracking-[0.3em] uppercase mb-3 block">Service Desk</span>
            <h1 className="text-3xl font-semibold text-slate-950 tracking-tight">Support Tickets</h1>
            <p className="text-slate-500 font-light text-sm mt-2">Track the resolution of your reported logistics issues.</p>
          </div>
          <button className="bg-slate-950 text-white px-6 py-3 rounded-full text-[11px] font-semibold uppercase tracking-widest hover:bg-red-600 transition-all flex items-center gap-2">
            New Ticket <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        {/* --- 2. TICKET LIST --- */}
        <div className="space-y-8">
          {myComplaints.map((ticket) => (
            <div key={ticket.id} className="group bg-white rounded-[2rem] border border-slate-100 hover:border-slate-200 transition-all duration-300 overflow-hidden shadow-2xl shadow-slate-200/20">
              
              {/* Ticket Header Area */}
              <div className="p-8 pb-0 flex flex-col md:flex-row justify-between gap-6">
                <div className="flex items-start gap-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-colors ${
                    ticket.status === 'resolved' 
                      ? 'bg-emerald-50 border-emerald-100 text-emerald-600' 
                      : 'bg-red-50 border-red-100 text-red-600'
                  }`}>
                    {ticket.status === 'resolved' ? <CheckCircle2 className="w-5 h-5 stroke-[1.5]" /> : <Clock className="w-5 h-5 stroke-[1.5]" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 tracking-tight">Case #00{ticket.id}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tracking</span>
                      <span className="text-[11px] font-mono font-medium text-red-600">{ticket.awb}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col justify-between items-center md:items-end">
                   <p className="hidden md:block text-[9px] text-slate-400 font-bold uppercase tracking-[0.15em] mb-2">Current State</p>
                   <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-wider border ${
                    ticket.status === 'resolved' 
                      ? 'border-emerald-200 text-emerald-600 bg-white' 
                      : 'border-red-200 text-red-600 bg-white'
                   }`}>
                    {ticket.status}
                  </span>
                </div>
              </div>

              {/* Message Content */}
              <div className="p-8 space-y-6">
                <div className="relative">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-3">Your Inquiry</p>
                  <div className="text-slate-600 text-[13px] font-light leading-relaxed bg-slate-50/50 p-5 rounded-2xl border border-slate-50 italic">
                    "{ticket.message}"
                  </div>
                </div>

                {ticket.resolution_comment && (
                  <div className="pl-6 border-l-[1px] border-red-600/30 py-1 transition-all">
                    <p className="text-[10px] text-red-600 font-bold uppercase tracking-widest mb-2">Resolution Note</p>
                    <p className="text-slate-900 text-sm font-light leading-relaxed tracking-tight">
                      {ticket.resolution_comment}
                    </p>
                  </div>
                )}
              </div>

              {/* Footer Metadata */}
              <div className="px-8 py-4 bg-slate-50/80 flex items-center justify-between border-t border-slate-50">
                <span className="text-[10px] text-slate-400 font-medium">Logged on {ticket.created_at}</span>
                <button className="text-[10px] font-bold text-slate-900 hover:text-red-600 transition-colors flex items-center gap-1">
                  View Full Thread <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}

          {/* --- 3. EMPTY STATE --- */}
          {myComplaints.length === 0 && (
            <div className="text-center py-24 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <MessageSquareWarning className="w-6 h-6 text-slate-300" />
              </div>
              <p className="text-slate-900 font-semibold tracking-tight">No Active Tickets</p>
              <p className="text-slate-400 text-xs font-light mt-1">Everything looks good with your shipments.</p>
            </div>
          )}
        </div>

        {/* --- 4. QUICK SUPPORT CTA --- */}
        <div className="mt-16 flex items-center justify-center gap-8 border-t border-slate-100 pt-10">
          <div className="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors cursor-pointer">
            <HelpCircle className="w-4 h-4" />
            <span className="text-[11px] font-semibold uppercase tracking-widest">Help Center</span>
          </div>
          <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
          <div className="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors cursor-pointer">
             <span className="text-[11px] font-semibold uppercase tracking-widest">Contact Dispatch: +91 9340384339</span>
          </div>
        </div>
      </div>
    </main>
  );
}