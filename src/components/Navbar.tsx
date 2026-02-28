// Navbar.tsx ------------------------------------------
import Link from 'next/link';
import { Phone, Clock, Search, Package, LayoutDashboard, PackagePlus, LifeBuoy, User, ChevronDown, MapPin, Calculator, LogOut } from "lucide-react";
import { getCurrentUser } from "@/lib/auth";
import { logout } from "../app/logout/actions";
import MobileMenu from "@/components/MobileMenu";

export default async function Navbar() {
  const user = await getCurrentUser();

  return (
    <header className="w-full sticky top-0 z-[150] border-b border-slate-100 shadow-sm">
      {/* --- 1. UTILITY BAR: High Contrast --- */}
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
            <Link href="/careers" className="text-[10px] font-bold text-slate-400 hover:text-white uppercase tracking-widest transition-colors">Careers</Link>
            <Link href="/terms" className="text-[10px] font-bold text-slate-400 hover:text-white uppercase tracking-widest transition-colors">Terms</Link>
          </div>
        </div>
      </div>

      {/* --- 2. MAIN NAVIGATION --- */}
      <nav className="w-full bg-white/95 backdrop-blur-md h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          
          {/* Brand Section */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 bg-[#6366F1] rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-100 transition-transform group-hover:scale-105">
              <Package className="w-5 h-5" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-extrabold tracking-tight text-slate-950">
                Indore<span className="text-[#6366F1]"> Logistics</span>
              </span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Tech-Enabled Supply</span>
            </div>
          </Link>

          {/* Nav Links: Grouped Logic */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="/about-us" label="About Us" />
            <NavLink href="/services" label="Services" />
            <NavLink href="/pricing" label="Pricing" />

            {/* Public Shipping Tools Dropdown */}
            <div className="relative group py-8">
              <button className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 group-hover:text-[#6366F1] transition-all">
                Shipping Tools <ChevronDown size={12} className="group-hover:rotate-180 transition-transform" />
              </button>
              
              <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-64 bg-white border border-slate-100 shadow-2xl rounded-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0">
                <DropdownItem href="/cost" icon={<Calculator size={16} />} title="Cost Calculator" desc="Instant rate estimates" />
                <DropdownItem href="/pincodes" icon={<MapPin size={16} />} title="Serviceability" desc="Check delivery zones" />
                <DropdownItem href="/track" icon={<Search size={16} />} title="Track Shipment" desc="Real-time AWB updates" />
              </div>
            </div>

            <NavLink href="/contact" label="Contact" />
          </div>

          {/* Action Area: Auth & Booking */}
          <div className="flex items-center gap-4">
            {!user ? (
              <div className="flex items-center gap-3">
                <Link href="/login" className="hidden sm:block text-[11px] font-bold uppercase tracking-widest text-slate-600 hover:text-[#6366F1] px-4 py-2">
                  Login
                </Link>
                <Link 
                  href="/book" 
                  className="bg-[#0F172A] text-white px-6 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-[#6366F1] transition-all shadow-md shadow-slate-200"
                >
                  Book Pickup
                </Link>
              </div>
            ) : (
              /* PRO-TIP: Move Dashboard, Complaints, Profile under here */
              <div className="relative group py-2">
                 <button className="flex items-center gap-3 bg-slate-50 border border-slate-200 p-1.5 pr-4 rounded-full hover:bg-slate-100 transition-all">
                   <div className="w-8 h-8 bg-[#6366F1] rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                     {user.username?.charAt(0) || 'U'}
                   </div>
                   <span className="text-xs font-bold text-slate-700">Account Menu</span>
                   <ChevronDown size={14} className="text-slate-400" />
                 </button>

                 <div className="absolute top-full right-0 mt-3 w-72 bg-white border border-slate-100 shadow-2xl rounded-[1.5rem] p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0">
                    <div className="px-4 py-3 mb-2 border-b border-slate-50">
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Authenticated Client</p>
                      <p className="text-sm font-bold text-slate-900 truncate">{user.email}</p>
                    </div>
                    
                    <DropdownItem href="/dashboard" icon={<LayoutDashboard size={16} />} title="Merchant Dashboard" desc="Full shipment overview" />
                    <DropdownItem href="/book-pickup" icon={<PackagePlus size={16} />} title="Book Pickup" desc="Schedule new shipment" />
                    <DropdownItem href="/complaints" icon={<LifeBuoy size={16} />} title="Support Tickets" desc="Raise or view complaints" />
                    <DropdownItem href="/profile" icon={<User size={16} />} title="My Profile" desc="Manage account settings" />

                    <form action={logout}>
                      <button
                        type="submit"
                        className="flex w-full items-center gap-3 px-5 py-3 text-red-600 hover:bg-red-50 text-xs font-semibold uppercase tracking-widest"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </form>
                 </div>
              </div>
            )}
            
            <div className="lg:hidden">
              <MobileMenu user={user} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

/* Helper Component for standard links */
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link 
      href={href} 
      className="relative text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 hover:text-[#6366F1] transition-colors group"
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6366F1] transition-all group-hover:w-full rounded-full"></span>
    </Link>
  );
}

/* Helper Component for dropdown list items */
function DropdownItem({ href, icon, title, desc }: any) {
  return (
    <Link href={href} className="flex items-start gap-4 p-3 hover:bg-indigo-50/50 rounded-xl transition-all group/item">
      <div className="mt-1 p-2 bg-slate-50 group-hover/item:bg-white rounded-lg text-slate-400 group-hover/item:text-[#6366F1] transition-colors border border-transparent group-hover/item:border-indigo-100 shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-[13px] font-bold text-slate-800 group-hover/item:text-[#6366F1]">{title}</p>
        <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">{desc}</p>
      </div>
    </Link>
  );
}