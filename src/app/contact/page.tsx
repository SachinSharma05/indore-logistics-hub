import { Mail, Phone, MapPin, MessageSquare, Clock, ArrowRight, Linkedin, Twitter } from "lucide-react";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- 1. MINIMALIST HERO --- */}
      <section className="pt-24 pb-16 px-6 border-b border-slate-50">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <span className="text-red-600 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4 block">Concierge & Support</span>
          <h1 className="text-4xl md:text-6xl font-semibold text-slate-950 tracking-tight mb-6">
            We’re here to move <br />
            <span className="text-red-600 font-light italic">your world forward.</span>
          </h1>
          <p className="text-slate-500 font-light text-sm md:text-base max-w-2xl leading-relaxed">
            Whether you're looking for enterprise logistics solutions or need help with a single 
            parcel, our Indore-based team is ready to assist.
          </p>
        </div>
      </section>

      {/* --- 2. CONTACT GRID & FORM --- */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h3 className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-8">Direct Channels</h3>
              <div className="space-y-6">
                <ContactMethod 
                  icon={<Phone className="w-4 h-4" />} 
                  label="General Inquiries" 
                  value="+91 93403 84339" 
                />
                <ContactMethod 
                  icon={<Mail className="w-4 h-4" />} 
                  label="Business Solutions" 
                  value="solutions@indorelogistics.com" 
                />
                <ContactMethod 
                  icon={<MapPin className="w-4 h-4" />} 
                  label="Indore Headquarters" 
                  value="Vijay Nagar, Indore, MP 452010" 
                />
              </div>
            </div>

            <div className="pt-10 border-t border-slate-100">
              <h3 className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-6">Operating Hours</h3>
              <div className="flex items-center gap-4 text-slate-500 font-light text-sm">
                <Clock className="w-4 h-4 text-red-600" />
                <p>Monday — Saturday: 09:00 - 21:00</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <SocialIcon icon={<Linkedin className="w-4 h-4" />} />
              <SocialIcon icon={<Twitter className="w-4 h-4" />} />
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-3">
            <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/40">
              <h2 className="text-xl font-semibold text-slate-950 mb-8 tracking-tight">Send a Manifest Inquiry</h2>
              <form className="grid md:grid-cols-2 gap-6">
                <FormInput label="Your Name" placeholder="Rahul Sharma" />
                <FormInput label="Email Address" type="email" placeholder="rahul@example.com" />
                <div className="md:col-span-2">
                  <FormInput label="Subject" placeholder="Bulk Shipping / Partnership / Support" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 block">Message</label>
                  <textarea 
                    rows={5} 
                    className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-red-500 text-sm font-light transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="w-full bg-slate-950 text-white py-5 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-red-600 transition-all flex items-center justify-center gap-3 group">
                    Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. SUBTLE MAP PLACEHOLDER --- */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto h-[400px] bg-slate-100 rounded-[3rem] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
           {/* Replace with actual Google Map Embed or Component */}
           <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-400 bg-slate-100 border border-slate-200">
              <MapPin className="w-8 h-8 mb-2 opacity-20" />
              <p className="text-[10px] font-bold uppercase tracking-widest">Map Interactive Placeholder</p>
           </div>
        </div>
      </section>
    </main>
  );
}

// --- HELPER COMPONENTS ---

function ContactMethod({ icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex gap-5 group cursor-default">
      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-red-600 group-hover:text-white transition-all">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-slate-950 font-medium tracking-tight">{value}</p>
      </div>
    </div>
  );
}

function FormInput({ label, ...props }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">{label}</label>
      <input 
        {...props}
        className="w-full bg-white border border-slate-100 rounded-full px-6 py-4 outline-none focus:border-red-500 text-sm font-light transition-all" 
      />
    </div>
  );
}

function SocialIcon({ icon }: { icon: any }) {
  return (
    <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-600 hover:border-red-200 cursor-pointer transition-all">
      {icon}
    </div>
  );
}