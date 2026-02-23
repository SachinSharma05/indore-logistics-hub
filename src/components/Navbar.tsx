// Navbar.tsx ------------------------------------------
import Link from 'next/link';
import { Phone, Clock, Facebook, Instagram, Twitter, Search, TruckIcon, ChevronRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-[100] border-b border-slate-100">
      {/* TOP ROW: Utility Bar - Thinner fonts & icons */}
      <div className="w-full bg-slate-950 py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[10px] font-medium text-slate-400">
              <Phone className="w-3 h-3 text-red-500" /> 
              <span className="tracking-wider">+91 93403 84339</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-medium text-slate-400">
              <Clock className="w-3 h-3 text-red-500" /> 
              <span className="tracking-wider">MON - SAT: 9:00AM - 6:00PM</span>
            </div>
          </div>
          
          <div className="flex items-center gap-5">
            <div className="flex gap-4 border-r border-slate-800 pr-5">
              <Facebook className="w-3 h-3 text-slate-500 hover:text-red-500 transition-colors cursor-pointer" />
              <Instagram className="w-3 h-3 text-slate-500 hover:text-red-500 transition-colors cursor-pointer" />
              <Twitter className="w-3 h-3 text-slate-500 hover:text-red-500 transition-colors cursor-pointer" />
            </div>
            <Link href="/career" className="text-[10px] font-semibold text-slate-400 hover:text-white uppercase tracking-widest transition">Career</Link>
            <Link href="/terms" className="text-[10px] font-semibold text-slate-400 hover:text-white uppercase tracking-widest transition">Terms</Link>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW: Main Nav - Clean & Spacious */}
      <nav className="w-full bg-white/80 backdrop-blur-xl h-14 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          
          {/* Brand - Slimmer Logo approach */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white shadow-sm shadow-red-200">
              <TruckIcon className="w-4 h-4" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              Indore<span className="text-red-600 font-light">Logistics</span>
            </span>
          </Link>

          {/* Nav Links - Medium weight, spaced out */}
          <div className="hidden lg:flex items-center gap-10">
            <Link 
              key="Home"
              href="/" 
              className="relative text-[11px] font-medium uppercase tracking-[0.15em] text-slate-600 hover:text-red-600 transition-colors group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
            </Link>
            {['About Us', 'Services', 'Pricing', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={`/${item.toLowerCase().replace(' ', '-')}`} 
                className="relative text-[11px] font-medium uppercase tracking-[0.15em] text-slate-600 hover:text-red-600 transition-colors group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Actions - Slimmed down button */}
          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-red-600 transition-colors hidden sm:block">
              <Search className="w-4 h-4 stroke-[1.5px]" />
            </button>
            <Link 
              href="/track" 
              className="group flex items-center gap-2 bg-red-600 hover:bg-slate-900 text-white px-5 py-2 rounded text-[10px] font-semibold uppercase tracking-widest transition-all shadow-md shadow-red-100 hover:shadow-none active:scale-95"
            >
              Track Order
              <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}