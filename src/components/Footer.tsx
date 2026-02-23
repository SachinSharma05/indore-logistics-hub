// Footer.tsx ----------------------------------------
import Link from 'next/link';
import { TruckIcon, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section - Slim Hierarchy */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="bg-red-600 p-1.5 rounded text-white group-hover:bg-white group-hover:text-red-600 transition-colors">
                <TruckIcon className="w-4 h-4" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-white">
                Indore<span className="text-red-600 font-light">Logistics</span>
              </span>
            </Link>
            <p className="text-[13px] leading-relaxed font-light max-w-xs text-slate-500">
              Indore's premier tech-enabled logistics network. 
              Standardizing professional shipping for the heart of India.
            </p>
          </div>

          {/* Quick Links - Services */}
          <FooterGroup title="Services">
            <FooterLink href="/services/ecommerce">Ecommerce Fulfillment</FooterLink>
            <FooterLink href="/services/bulk">Bulk & Industrial</FooterLink>
            <FooterLink href="/services/shifting">Packers & Movers</FooterLink>
            <FooterLink href="/services/corporate">Corporate Priority</FooterLink>
          </FooterGroup>

          {/* Quick Links - Support */}
          <FooterGroup title="Resources">
            <FooterLink href="/track">Track Shipment</FooterLink>
            <FooterLink href="/pricing">Rate Calculator</FooterLink>
            <FooterLink href="/help">Help Center</FooterLink>
            <FooterLink href="/contact">Business Inquiry</FooterLink>
          </FooterGroup>

          {/* Contact Section - Slim Icons */}
          <div>
            <h4 className="text-[11px] font-semibold text-white uppercase tracking-[0.2em] mb-5">Connect</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[13px] font-light hover:text-white transition-colors cursor-pointer">
                <Phone className="w-3.5 h-3.5 text-red-600 stroke-[1.5]" /> +91 93403 84339
              </li>
              <li className="flex items-center gap-3 text-[13px] font-light hover:text-white transition-colors cursor-pointer">
                <Mail className="w-3.5 h-3.5 text-red-600 stroke-[1.5]" /> support@indorelogistics.com
              </li>
              <li className="flex items-start gap-3 text-[13px] font-light hover:text-white transition-colors cursor-pointer">
                <MapPin className="w-3.5 h-3.5 text-red-600 stroke-[1.5] shrink-0" /> 
                Vijay Nagar, Indore, <br />MP 452010
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Clean & Minimal */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-medium text-slate-600 uppercase tracking-widest">
            © {currentYear} Indore Logistics. Standardized for Excellence.
          </p>
          <div className="flex gap-8 text-[10px] font-medium text-slate-600 uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-red-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- Internal Helpers ---

function FooterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold text-white uppercase tracking-[0.2em] mb-5">{title}</h4>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-[13px] font-light text-slate-500 hover:text-red-500 hover:translate-x-1 inline-block transition-all duration-300">
        {children}
      </Link>
    </li>
  );
}