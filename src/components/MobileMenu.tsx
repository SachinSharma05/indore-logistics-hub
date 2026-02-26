"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Home, Info, Truck, Tag, PhoneCall, LayoutDashboard, Settings, LogOut, Package } from "lucide-react";
import { logout } from "@/app/logout/actions";

export default function MobileMenu({ user }: { user: any }) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '/', icon: <Home size={20} /> },
    { name: 'About Us', href: '/about-us', icon: <Info size={20} /> },
    { name: 'Services', href: '/services', icon: <Truck size={20} /> },
    { name: 'Pricing', href: '/pricing', icon: <Tag size={20} /> },
    { name: 'Contact', href: '/contact', icon: <PhoneCall size={20} /> },
  ];

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className="lg:hidden p-2 text-slate-900 bg-slate-50 rounded-lg active:scale-95 transition-transform"
      >
        <Menu size={24} />
      </button>

      {/* SOLID MOBILE OVERLAY */}
      <div className={`
        fixed inset-0 bg-white z-[999] lg:hidden transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}>
        {/* Header inside Menu */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Package className="text-red-600" size={24} />
            <span className="font-bold text-slate-900 text-lg">Indore Logistics</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 rounded-full">
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col h-[calc(100vh-64px)] overflow-y-auto p-6 bg-white">
          {/* USER SECTION */}
          {user ? (
            <div className="mb-10 p-5 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center font-bold text-lg">
                  {user.username?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{user.username}</p>
                  <p className="text-[10px] text-red-600 font-black uppercase tracking-widest">Premium Member</p>
                </div>
              </div>
              <div className="space-y-2">
                <MobileLink href="/dashboard" icon={<LayoutDashboard size={18}/>} label="Dashboard" onClick={() => setIsOpen(false)} />
                <MobileLink href="/profile" icon={<Settings size={18}/>} label="Account Settings" onClick={() => setIsOpen(false)} />
                <form action={logout}>
                  <button className="flex w-full items-center gap-4 p-3 text-red-600 font-bold text-sm hover:bg-red-50 rounded-xl transition-colors">
                    <LogOut size={18} /> Sign Out
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="mb-10 flex flex-col gap-3">
              <Link href="/login" onClick={() => setIsOpen(false)} className="w-full py-4 text-center bg-slate-950 text-white rounded-2xl font-bold text-sm shadow-xl shadow-slate-200">
                Log In
              </Link>
              <Link href="/register" onClick={() => setIsOpen(false)} className="w-full py-4 text-center border border-slate-200 rounded-2xl font-bold text-sm">
                Create Account
              </Link>
            </div>
          )}

          {/* MAIN NAV LINKS */}
          <div className="space-y-2">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 px-2">General Navigation</p>
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-5 p-4 text-slate-900 font-bold text-lg hover:bg-slate-50 rounded-2xl transition-all"
              >
                <span className="text-slate-400">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function MobileLink({ href, icon, label, onClick }: any) {
  return (
    <Link href={href} onClick={onClick} className="flex items-center gap-4 p-3 text-slate-700 font-bold text-sm hover:bg-white hover:shadow-sm rounded-xl transition-all">
      <span className="text-slate-400">{icon}</span>
      {label}
    </Link>
  );
}