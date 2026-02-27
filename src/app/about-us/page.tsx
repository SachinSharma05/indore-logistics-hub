import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  Award, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Users, 
  Target, 
  ArrowRight, 
  Package,
  CheckCircle2
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="flex flex-col bg-white">
      
      {/* 1. SHIPROCKET-STYLE HERO: Clean typography & Balanced spacing */}
      <section className="bg-[#f9fafb] py-16 px-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <p className="text-[#6366F1] text-[12px] font-bold uppercase tracking-wider mb-3">
            About Indore Logistics
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            We’re on a mission to make logistics <br className="hidden md:block" /> 
            <span className="text-[#7C3AED]">simple, accessible and trustworthy</span>
          </h1>
          <p className="text-slate-600 text-[15px] leading-relaxed max-w-2xl mx-auto font-normal">
            We enable businesses in Central India with technology-driven shipping solutions, 
            order fulfillment, and dependable logistics services to provide a delightful 
            customer experience.
          </p>
          <div className="mt-8">
            <Link href="/services" className="bg-[#7C3AED] text-white px-6 py-2.5 rounded-md text-[14px] font-semibold hover:bg-[#6D28D9] transition-all">
              Explore solutions
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE STORY: Split Layout with Utility Stats */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                <Image 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Operations" 
                  fill
                  className="object-cover"
                />
              </div>
              {/* Tight Stat Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-lg shadow-lg border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-xl font-bold text-slate-900">1.2M+</p>
                    <p className="text-[11px] text-slate-500 uppercase font-bold tracking-wide">Shipments</p>
                  </div>
                  <div className="w-px h-10 bg-slate-100" />
                  <div>
                    <p className="text-xl font-bold text-slate-900">200+</p>
                    <p className="text-[11px] text-slate-500 uppercase font-bold tracking-wide">Agents</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Standardizing the Heart of India</h2>
              <p className="text-slate-600 text-[14px] leading-relaxed">
                Founded in Indore, we bridged the gap between traditional trade and the digital-first economy. 
                Our platform leverages data and supply chains at scale, providing you with everything needed 
                to scale your business across 19,000+ pincodes.
              </p>
              <ul className="space-y-3">
                {['Real-time telemetry on every shipment', 'Local expertise in MP bottlenecks', 'Seamless API integration for E-commerce'].map((text) => (
                  <li key={text} className="flex items-center gap-2 text-[14px] text-slate-700 font-medium">
                    <CheckCircle2 size={16} className="text-[#10B981]" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE FEATURES: High-Density Grid (Shiprocket Style) */}
      <section className="py-16 px-6 bg-[#fcfdff] border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Superior features to launch <span className="text-[#7C3AED]">your business growth</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<ShieldCheck className="text-[#10B981]" />} 
              title="NDR Automation" 
              desc="Reduce your RTO by empowering your buyers to take action on undelivered shipments." 
            />
            <FeatureCard 
              icon={<Zap className="text-[#F59E0B]" />} 
              title="Indore Velocity" 
              desc="Using real-time telemetry to navigate local routes from Pithampur to Sanwer Road." 
            />
            <FeatureCard 
              icon={<Users className="text-[#3B82F6]" />} 
              title="Multi User" 
              desc="Manage your account effortlessly by having multiple users and specific permissions." 
            />
            <FeatureCard 
              icon={<Package className="text-[#7C3AED]" />} 
              title="Post Ship" 
              desc="Get your own branded tracking page to keep buyers updated and increase retention." 
            />
            <FeatureCard 
              icon={<Globe className="text-[#6366F1]" />} 
              title="Pan-India Reach" 
              desc="Connect with customers nationwide through our network of integrated top-tier carriers." 
            />
            <FeatureCard 
              icon={<Target className="text-[#EC4899]" />} 
              title="Courier Engine" 
              desc="Choose the right partner based on cost, pickup time, and delivery performance." 
            />
          </div>
        </div>
      </section>

      {/* 4. INTEGRATED CARRIERS: Clean Logo Row */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#EF4444] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Network Synergy</p>
          <h3 className="text-xl font-bold text-slate-900 mb-8">Integrated Carriers</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
            {/* Standard Carrier Logo Placeholders */}
            <span className="font-bold text-slate-400 text-lg">DELHIVERY</span>
            <span className="font-bold text-slate-400 text-lg">BLUE DART</span>
            <span className="font-bold text-slate-400 text-lg">DTDC</span>
            <span className="font-bold text-slate-400 text-lg">XPRESSBEES</span>
          </div>
        </div>
      </section>

      {/* 5. CTA: Shiprocket Purple Banner */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#7C3AED] to-[#6366F1] rounded-lg p-10 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Financial Services, Supporting Your Ambitions
          </h2>
          <p className="text-indigo-100 text-[14px] mb-8 max-w-xl mx-auto">
            Join 4 Lakhs+ businesses who rely on our tech-enabled network for daily fulfillment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-[#7C3AED] px-8 py-2.5 rounded-md text-[14px] font-bold shadow-md hover:bg-slate-50 transition-all">
              Sign Up for Free
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// --- SHIPROCKET COMPONENT HELPERS ---

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-[#7C3AED]/30 hover:shadow-md transition-all group">
      <div className="w-10 h-10 bg-slate-50 rounded-md flex items-center justify-center mb-4 border border-slate-100">
        {icon}
      </div>
      <h3 className="text-[15px] font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 text-[13px] leading-relaxed mb-4">{desc}</p>
      <Link href="#" className="text-[#7C3AED] text-[13px] font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
        Learn more <ArrowRight size={14} />
      </Link>
    </div>
  );
}

function StatItem({ value, label }: { value: string, label: string }) {
    return (
        <div>
            <p className="text-xl font-bold text-slate-900">{value}</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
        </div>
    );
}

function ValueCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="group bg-[#F8FAFC] p-10 rounded-[2.5rem] border border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500">
      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#6366F1] mb-8 shadow-sm border border-slate-100 group-hover:bg-[#6366F1] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
        {icon}
      </div>
      <h3 className="text-base font-extrabold text-slate-900 mb-4 uppercase tracking-tight">{title}</h3>
      <p className="text-slate-500 text-sm font-medium leading-relaxed">{desc}</p>
    </div>
  );
}