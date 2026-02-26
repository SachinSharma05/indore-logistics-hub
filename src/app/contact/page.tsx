import { Phone, Mail, MapPin, Clock, Linkedin, Twitter, ArrowRight, ShieldCheck, Globe } from "lucide-react";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      
      {/* --- 1. HERO SECTION: High-Contrast & Cinematic --- */}
      <section className="bg-slate-950 pt-24 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ef44440a,transparent)]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-red-600 text-[10px] font-black tracking-[0.5em] uppercase mb-6 block">
              Global Support • Local Heart
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
              Let’s synchronize <br />
              <span className="text-red-600 italic font-light">your supply chain.</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-lg font-medium leading-relaxed max-w-xl">
              From our Vijay Nagar headquarters to your doorstep, our Indore-based dispatch 
              command is ready to optimize your logistics.
            </p>
          </div>
        </div>
      </section>

      {/* --- 2. CONTACT HUB: The Grid --- */}
      <section className="py-20 px-6 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Information Cards (4 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10">Direct Channels</h3>
              <div className="space-y-10">
                <ContactMethod 
                  icon={<Phone size={18} />} 
                  label="Dispatch Hotline" 
                  value="+91 93403 84339" 
                  sub="24/7 Priority Support"
                />
                <ContactMethod 
                  icon={<Mail size={18} />} 
                  label="Business Inquiry" 
                  value="solutions@indorelogistics.com" 
                  sub="Avg response: 2 hours"
                />
                <ContactMethod 
                  icon={<MapPin size={18} />} 
                  label="Regional HQ" 
                  value="Vijay Nagar, Indore, MP 452010" 
                  sub="Open for visitors"
                />
              </div>

              <div className="mt-12 pt-10 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Social Hub</h4>
                  <div className="flex gap-3">
                    <SocialIcon icon={<Linkedin size={16} />} />
                    <SocialIcon icon={<Twitter size={16} />} />
                  </div>
                </div>
                <div className="text-right">
                    <h4 className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-2 flex items-center gap-2 justify-end">
                       <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" /> Live Status
                    </h4>
                    <p className="text-xs font-bold text-slate-900">Agents Online Now</p>
                </div>
              </div>
            </div>

            {/* Quick Trust Card */}
            <div className="bg-slate-950 p-8 rounded-[2rem] text-white flex items-center gap-6">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-red-500">
                    <Globe size={24} />
                </div>
                <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Global Standards</p>
                    <p className="text-sm font-bold">Indore`s first AEO-Certified <br/>private logistics provider.</p>
                </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-200 shadow-2xl shadow-slate-200/40">
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-950 tracking-tight mb-2">Send an Inquiry</h2>
                <p className="text-slate-500 text-sm font-medium">Fill out the form below and a logistics expert will contact you.</p>
              </div>
              
              <form className="grid md:grid-cols-2 gap-x-8 gap-y-10">
                <FormInput label="Full Name" placeholder="Rahul Sharma" />
                <FormInput label="Company Email" type="email" placeholder="rahul@enterprise.com" />
                <div className="md:col-span-2">
                  <FormInput label="Interest" placeholder="Bulk Shipping / Warehouse / E-commerce" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 block">Detailed Requirements</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 outline-none focus:ring-4 focus:ring-red-500/5 focus:border-red-600 text-sm font-medium transition-all resize-none placeholder:text-slate-300"
                    placeholder="Describe your cargo, volume, and destination..."
                  />
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="w-full bg-slate-950 text-white py-6 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] hover:bg-red-600 transition-all flex items-center justify-center gap-4 group shadow-xl shadow-slate-950/10">
                    Submit Manifest <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. ARCHITECTURAL MAP --- */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto group">
          <div className="relative h-[500px] rounded-[3.5rem] overflow-hidden border border-slate-200 bg-white">
            {/* Image Placeholder representing the "Map" with an industrial aesthetic */}
            <div className="absolute inset-0 bg-slate-100 grayscale transition-all duration-1000 group-hover:grayscale-0">
               {/* Replace with actual interactive map component */}
               <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                    <div className="absolute inset-0 bg-red-600 blur-2xl opacity-20 animate-ping" />
                    <div className="relative bg-slate-950 text-white p-6 rounded-3xl shadow-2xl border border-white/10 flex items-center gap-4">
                        <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Visit Us</p>
                            <p className="text-sm font-bold">Indore Logistics Hub</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// --- REFINED HELPERS ---

function ContactMethod({ icon, label, value, sub }: { icon: React.ReactNode, label: string, value: string, sub: string }) {
  return (
    <div className="flex gap-6 group cursor-default">
      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-slate-950 font-bold tracking-tight text-lg mb-0.5">{value}</p>
        <p className="text-slate-400 text-[11px] font-medium italic">{sub}</p>
      </div>
    </div>
  );
}

function FormInput({ label, ...props }: any) {
  return (
    <div className="space-y-3">
      <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] block ml-1">{label}</label>
      <input 
        {...props}
        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-4 focus:ring-red-500/5 focus:border-red-600 text-sm font-medium transition-all placeholder:text-slate-300" 
      />
    </div>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-white hover:border-red-100 hover:shadow-lg transition-all cursor-pointer">
      {icon}
    </div>
  );
}