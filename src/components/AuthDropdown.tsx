"use client";

import { useState } from "react";
import Link from "next/link";
import { LogOut, LayoutDashboard, Package, Settings, User, ChevronDown } from "lucide-react";
import { logout } from "../app/logout/actions";

export default function AuthDropdown({ user }: { user: any }) {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 pl-3 pr-1 py-1 rounded-full border border-slate-100 bg-slate-50/50 hover:bg-white transition-all"
      >
        <div className="hidden md:block text-right">
          <p className="text-[10px] font-bold text-slate-900 leading-none mb-0.5">
            {user.username}
          </p>
          <p className="text-[8px] text-red-600 font-bold uppercase tracking-tighter">
            Member
          </p>
        </div>

        <div className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center">
          <User className="w-4 h-4" />
        </div>

        <ChevronDown
          className={`w-3 h-3 text-slate-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-56 bg-white border border-slate-100 rounded-3xl shadow-2xl overflow-hidden py-3">
          <div className="px-5 py-3 mb-2 border-b border-slate-50">
            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">
              Signed in as
            </p>
            <p className="text-xs font-semibold text-slate-950 truncate">
              {user.email}
            </p>
          </div>

          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-5 py-3 text-xs font-medium hover:bg-slate-50"
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>

          <Link
            href="/complaints"
            className="flex items-center gap-3 px-5 py-3 text-xs font-medium hover:bg-slate-50"
          >
            <Package className="w-4 h-4" />
            My Complaints
          </Link>

          <Link
            href="/profile"
            className="flex items-center gap-3 px-5 py-3 text-xs font-medium hover:bg-slate-50"
          >
            <Settings className="w-4 h-4" />
            Account Settings
          </Link>

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
      )}
    </div>
  );
}