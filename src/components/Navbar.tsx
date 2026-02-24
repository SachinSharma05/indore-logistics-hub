// Navbar.tsx ------------------------------------------
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  Phone, Clock, Search, ChevronRight, User, LogOut, LayoutDashboard, Settings, ChevronDown, Package 
} from "lucide-react";

export default function Navbar() {
  // Mock authentication state (Replace with your actual Auth logic)
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-[100] border-b border-slate-100">
      {/* --- 1. UTILITY BAR (UNTOUCHED) --- */}
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
            <Link href="/career" className="text-[10px] font-semibold text-slate-200 hover:text-white uppercase tracking-widest transition">Career</Link>
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

            {!isLoggedIn ? (
              <div className="flex items-center gap-3">
                <Link 
                  href="/login" 
                  className="text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:text-slate-950 px-4 transition-colors"
                >
                  Log In
                </Link>
                <Link 
                  href="/track" 
                  className="group flex items-center gap-2 bg-slate-950 hover:bg-red-600 text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-slate-200"
                >
                  Track <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            ) : (
              /* --- AUTHENTICATED DROPDOWN --- */
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-3 pl-3 pr-1 py-1 rounded-full border border-slate-100 bg-slate-50/50 hover:bg-white transition-all group"
                >
                  <div className="flex flex-col text-right hidden md:block">
                    <p className="text-[10px] font-bold text-slate-900 leading-none mb-0.5">Rahul Sharma</p>
                    <p className="text-[8px] text-red-600 font-bold uppercase tracking-tighter">Business Acc.</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center shadow-lg group-hover:bg-red-600 transition-colors">
                    <User className="w-4 h-4" />
                  </div>
                  <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-white border border-slate-100 rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden py-3 animate-in fade-in slide-in-from-top-2">
                    <div className="px-5 py-3 mb-2 border-b border-slate-50">
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Signed in as</p>
                      <p className="text-xs font-semibold text-slate-950 truncate">rahul@sharmalogistics.com</p>
                    </div>
                    
                    <DropdownItem href="/dashboard" icon={<LayoutDashboard className="w-4 h-4" />} label="Dashboard" />
                    <DropdownItem href="/dashboard/history" icon={<Package className="w-4 h-4" />} label="My Shipments" />
                    <DropdownItem href="/settings" icon={<Settings className="w-4 h-4" />} label="Account Settings" />
                    
                    <div className="mt-3 pt-3 border-t border-slate-50">
                      <button className="flex w-full items-center gap-3 px-5 py-2.5 text-red-600 hover:bg-red-50 transition-colors text-xs font-semibold uppercase tracking-widest">
                        <LogOut className="w-4 h-4" /> Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

// --- DROPDOWN HELPER COMPONENT ---

function DropdownItem({ href, icon, label }: { href: string, icon: any, label: string }) {
  return (
    <Link 
      href={href} 
      className="flex items-center gap-3 px-5 py-3 text-slate-600 hover:text-slate-950 hover:bg-slate-50 transition-all text-xs font-medium"
    >
      <span className="text-slate-300">{icon}</span>
      {label}
    </Link>
  );
}