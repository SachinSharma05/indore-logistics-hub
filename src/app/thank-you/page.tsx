import { CheckCircle2, Home, ArrowRight, Phone } from "lucide-react";
import Link from 'next/link';

export default function ThankYouPage() {
  const trackingId = "ILH-IND-88291"; 

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <div className="max-w-xl w-full">
        {/* Success Container */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/40 overflow-hidden">
          
          {/* Minimalist Success Icon */}
          <div className="pt-12 pb-6 flex justify-center">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center relative">
              <CheckCircle2 className="w-10 h-10 text-red-600 stroke-[1.5]" />
              <div className="absolute inset-0 rounded-full border-2 border-red-600/20 animate-ping"></div>
            </div>
          </div>

          <div className="pb-12 px-8 md:px-12 text-center">
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3 tracking-tight">
              Pickup Scheduled
            </h1>
            <p className="text-[13px] font-light text-slate-500 mb-10 max-w-sm mx-auto leading-relaxed">
              Your request has been received and assigned to our 
              <span className="text-slate-900 font-medium"> Indore Hub</span>. 
              Our fleet is on the way.
            </p>

            {/* Tracking ID Box - Refined Digital Look */}
            <div className="bg-slate-50 rounded-2xl p-6 mb-10 relative overflow-hidden group border border-slate-100">
               <div className="absolute top-0 right-0 p-2 opacity-5">
                 <div className="text-4xl font-black">TRACK</div>
               </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold mb-2 block">
                Reference ID
              </span>
              <code className="text-2xl font-mono font-light text-red-600 tracking-wider">
                {trackingId}
              </code>
              <p className="text-[10px] text-slate-400 mt-3 font-light">
                Sent to your mobile via SMS and Email.
              </p>
            </div>

            {/* Next Steps - Slim Timeline */}
            <div className="text-left space-y-8 mb-10 px-2">
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-semibold shrink-0">1</div>
                  <div className="w-px h-full bg-slate-100 mt-2"></div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Verification Call</p>
                  <p className="text-[12px] font-light text-slate-500 mt-1">Our dispatcher will confirm your location within 15 minutes.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-6 h-6 rounded-full border border-slate-200 text-slate-400 flex items-center justify-center text-[10px] font-semibold shrink-0">2</div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Agent Dispatch</p>
                  <p className="text-[12px] font-light text-slate-500 mt-1">A professional Indore Logistics partner will arrive for secure pickup.</p>
                </div>
              </div>
            </div>

            {/* Actions - Slim Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 px-6 py-3.5 rounded-full text-[11px] font-semibold uppercase tracking-widest hover:bg-slate-50 transition-all"
              >
                <Home className="w-3.5 h-3.5" /> Return Home
              </Link>
              <Link
                href={`/track/${trackingId}`}
                className="flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3.5 rounded-full text-[11px] font-semibold uppercase tracking-widest hover:bg-slate-900 shadow-lg shadow-red-100 transition-all"
              >
                Track Status <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Support Info */}
        <div className="flex items-center justify-center gap-2 mt-8 text-slate-400 text-xs font-light">
          <Phone className="w-3 h-3 text-red-600" />
          Support: <span className="text-slate-900 font-medium">+91 9340384339</span>
        </div>
      </div>
    </main>
  );
}