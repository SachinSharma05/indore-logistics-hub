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
      {/* --- 1. UTILITY BAR --- */}
      <div className="w-full bg-slate-950 py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[10px] font-medium text-slate-200">
              <Phone className="w-3 h-3 text-red-500" /> 
              <span className="tracking-wider">+91 93403 84339</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-medium text-slate-200">
              <Clock className="w-3 h-3 text-red-500" /> 
              <span className="tracking-wider">MON - SAT: 9:00AM - 6:00PM</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/careers" className="text-[10px] font-semibold text-slate-200 hover:text-white uppercase tracking-widest transition">We`re Hiring</Link>
            <Link href="/terms" className="text-[10px] font-semibold text-slate-200 hover:text-white uppercase tracking-widest transition">Terms</Link>
          </div>
        </div>
      </div>

      {/* --- 2. MAIN NAVIGATION --- */}
      <nav className="w-full bg-white/80 backdrop-blur-xl h-16 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-slate-950 rounded-xl flex items-center justify-center text-white shadow-xl shadow-slate-200 transition-colors group-hover:bg-red-600">
              <Package className="w-5 h-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-950">
              Indore<span className="text-red-600 font-light"> Logistics</span>
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {['Home', 'About Us', 'Services', 'Pricing', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-slate-950 transition-colors group"
              >
                {item}
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Actions: Dynamic Auth State */}
          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-slate-950 transition-colors hidden sm:block mr-2">
              <Search className="w-4 h-4 stroke-[1.5px]" />
            </button>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <div className="hidden lg:block">
                {!user ? (
                  <Link href="/login" className="bg-slate-950 text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest">Login</Link>
                ) : (
                  <AuthDropdown user={user} />
                )}
              </div>

              {/* This handles the Mobile Menu visibility correctly */}
              <MobileMenu user={user} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}