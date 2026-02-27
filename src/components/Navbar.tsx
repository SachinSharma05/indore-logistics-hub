// Navbar.tsx ------------------------------------------
import Link from 'next/link';
import { Phone, Clock, Search, Package } from "lucide-react";
import { getCurrentUser } from "@/lib/auth";
import AuthDropdown from "@/components/AuthDropdown";
import MobileMenu from "@/components/MobileMenu";

export default async function Navbar() {
  const user = await getCurrentUser();

  return (
    <header className="w-full sticky top-0 z-[100] border-b border-slate-100">
      {/* --- 1. UTILITY BAR: Refined with Indigo accents --- */}
      <div className="w-full bg-[#0F172A] py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300">
              <Phone className="w-3 h-3 text-[#6366F1]" /> 
              <span className="tracking-[0.05em]">+91 93403 84339</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300">
              <Clock className="w-3 h-3 text-[#6366F1]" /> 
              <span className="tracking-[0.05em]">MON - SAT: 9:00AM - 6:00PM</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/careers" className="text-[10px] font-bold text-slate-400 hover:text-white uppercase tracking-widest transition-colors">We're Hiring</Link>
            <Link href="/terms" className="text-[10px] font-bold text-slate-400 hover:text-white uppercase tracking-widest transition-colors">Terms</Link>
          </div>
        </div>
      </div>

      {/* --- 2. MAIN NAVIGATION: Clean & Modern --- */}
      <nav className="w-full bg-white/90 backdrop-blur-md h-20 flex items-center transition-all">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          
          {/* Brand: Swapped Red for Indigo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#6366F1] rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-100 transition-transform group-hover:scale-105">
              <Package className="w-5 h-5" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-extrabold tracking-tight text-slate-950">
                Indore<span className="text-[#6366F1]">Logistics</span>
              </span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Tech-Enabled Supply</span>
            </div>
          </Link>

          {/* Nav Links: Modern hover & Spacing */}
          <div className="hidden lg:flex items-center gap-10">
            {['Home', 'About Us', 'Services', 'Pricing', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                className="relative text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 hover:text-[#6366F1] transition-colors group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6366F1] transition-all group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Actions: Replaced Red/Black with Indigo/Slate */}
          <div className="flex items-center gap-5">
            <button className="text-slate-400 hover:text-[#6366F1] transition-colors hidden sm:block">
              <Search className="w-5 h-5 stroke-[2px]" />
            </button>

            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
                {!user ? (
                  <Link 
                    href="/login" 
                    className="bg-[#0F172A] text-white px-7 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-[#6366F1] transition-all shadow-md shadow-slate-200"
                  >
                    Client Login
                  </Link>
                ) : (
                  <AuthDropdown user={user} />
                )}
              </div>

              {/* Mobile Menu logic preserved */}
              <MobileMenu user={user} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}