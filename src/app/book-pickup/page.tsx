"use client";

import React from 'react';
import { createPickupRequest } from "./actions";
import { 
  ArrowRight, 
  Package, 
  ShieldCheck, 
  Box, 
  Truck, 
  MapPin, 
  Calendar,
  Info
} from "lucide-react";
import Link from 'next/link';

export default function BookPickupPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] py-12 md:py-10 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
             <Truck size={16} className="text-[#7C3AED]" />
             <span className="text-[#7C3AED] text-[11px] font-bold tracking-[0.3em] uppercase block">Fulfillment Request</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Schedule a <span className="text-[#7C3AED]">New Pickup</span>
          </h1>
          <p className="text-slate-500 text-[14px] mt-2 max-w-xl font-medium">
            Fill out the shipment manifest. Our nearest Indore logistics agent will be dispatched to your location within the selected window.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* --- MAIN FORM SECTION --- */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <form action={createPickupRequest} className="space-y-10">
                
                {/* 01. Contact Info */}
                <section>
                  <SectionHeader number="01" title="Pickup Contact" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <FormGroup label="Contact Person" name="name" placeholder="Rahul Sharma" />
                    <FormGroup label="Mobile Number" name="phone" type="tel" placeholder="+91 98765 43210" />
                  </div>
                </section>

                {/* 02. Shipment Specs */}
                <section>
                  <SectionHeader number="02" title="Shipment Specifications" />
                  <div className="grid md:grid-cols-2 gap-5 mb-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Category</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-[14px] font-medium outline-none focus:border-[#7C3AED] focus:bg-white transition-all cursor-pointer">
                        <option value="">Select Shipment Type</option>
                        <option value="electronics">Electronics & Gadgets</option>
                        <option value="apparel">Apparel & Textiles</option>
                        <option value="documents">Important Documents</option>
                        <option value="industrial">Industrial Spare Parts</option>
                      </select>
                    </div>
                    <FormGroup label="Preferred Pickup Window" name="pickupTime" type="datetime-local" />
                  </div>

                  {/* DIMENSIONS BOX */}
                  <div className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100/50">
                    <div className="flex items-center gap-2 mb-4">
                        <Info size={14} className="text-[#7C3AED]" />
                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Volumetric Dimensions (Approx)</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <FormGroup label="Weight (kg)" name="weight" type="number" placeholder="0.0" isThin />
                      <FormGroup label="L (cm)" name="length" type="number" placeholder="0" isThin />
                      <FormGroup label="B (cm)" name="breadth" type="number" placeholder="0" isThin />
                      <FormGroup label="H (cm)" name="height" type="number" placeholder="0" isThin />
                    </div>
                  </div>
                </section>

                {/* 03. Route */}
                <section>
                  <SectionHeader number="03" title="Route Manifest" />
                  <div className="grid gap-5">
                    <FormGroup label="Pickup Address (Indore Hub)" name="pickupAddress" isTextArea placeholder="Floor, Building Name, Industrial Area..." />
                    <FormGroup label="Destination Address" name="deliveryAddress" isTextArea placeholder="Full delivery address with Pincode..." />
                  </div>
                </section>

                <button
                  type="submit"
                  className="w-full bg-[#7C3AED] text-white py-4 rounded-md font-bold text-[14px] hover:bg-[#6D28D9] shadow-lg shadow-indigo-100 transition-all active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  Create Shipment & Notify Driver <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* --- SIDEBAR INFO --- */}
          <div className="space-y-6">
            <div className="bg-[#0F172A] rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
              <div className="absolute -top-6 -right-6 opacity-[0.05]">
                <Box className="w-40 h-40 rotate-12" />
              </div>
              
              <h3 className="text-lg font-bold mb-8 tracking-tight flex items-center gap-2">
                <ShieldCheck className="text-[#7C3AED]" size={20} /> Fulfillment Guarantees
              </h3>
              <ul className="space-y-6 relative z-10">
                <SidebarBenefit 
                  title="Priority Pickup" 
                  desc="Guaranteed 2-hour window for merchants in Vijay Nagar & Pithampur." 
                />
                <SidebarBenefit 
                  title="Digital Manifest" 
                  desc="Instantly generate e-way bills and QR codes for every parcel." 
                />
                <SidebarBenefit 
                  title="On-site Verification" 
                  desc="Agents carry digital scales to verify weight before pickup." 
                />
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-indigo-50 text-[#7C3AED] rounded-lg flex items-center justify-center">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Next Available Slot</p>
                  <p className="text-slate-900 font-bold text-[14px]">Today, 02:30 PM</p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-slate-500 text-[12px] leading-relaxed">
                  Need custom bulk transit? <Link href="#" className="text-[#7C3AED] font-bold hover:underline">Contact Enterprise Support</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// --- HELPERS ---

function SectionHeader({ number, title }: { number: string, title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-[12px] font-bold bg-[#7C3AED] text-white w-7 h-7 flex items-center justify-center rounded-md">
        {number}
      </span>
      <h2 className="text-[12px] font-bold text-slate-900 uppercase tracking-widest">{title}</h2>
      <div className="h-[1px] bg-slate-100 flex-1"></div>
    </div>
  );
}

function FormGroup({ label, isTextArea, isThin, ...props }: { label: string, isTextArea?: boolean, isThin?: boolean, [key: string]: any }) {
  const Component = isTextArea ? "textarea" : "input";
  return (
    <div className="space-y-2 flex-1">
      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">{label}</label>
      <Component
        {...props}
        rows={isTextArea ? 3 : undefined}
        className={`w-full bg-slate-50 border border-slate-200 rounded-md px-4 ${isThin ? 'py-2.5' : 'py-3'} text-[14px] font-medium outline-none focus:border-[#7C3AED] focus:bg-white transition-all placeholder:text-slate-400`}
      />
    </div>
  );
}

function SidebarBenefit({ title, desc }: { title: string, desc: string }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
          <p className="font-bold text-[14px] tracking-tight text-white">{title}</p>
      </div>
      <p className="text-slate-400 text-[12px] font-medium leading-relaxed pl-3.5">{desc}</p>
    </div>
  );
}