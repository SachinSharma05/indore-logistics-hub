// Footer.tsx ----------------------------------------
import Link from 'next/link';
import { Mail, Phone, MapPin, Package } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0F172A] text-slate-400 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="bg-[#6366F1] p-2 rounded-xl text-white shadow-lg shadow-indigo-500/10 transition-transform group-hover:scale-110">
                <Package className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Indore<span className="text-[#6366F1]">Logistics</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed font-medium text-slate-500 max-w-xs">
              Central India's most advanced tech-led shipping platform. We empower 5,000+ businesses with automated supply chain solutions.
            </p>
            <div className="flex gap-4 mt-6">
              {/* Social Placeholders */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-[#6366F1] transition-colors cursor-pointer group">
                  <div className="w-4 h-4 bg-slate-600 group-hover:bg-white rounded-sm" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links - Services */}
          <FooterGroup title="Solutions">
            <FooterLink href="/services/ecommerce">E-commerce Shipping</FooterLink>
            <FooterLink href="/services/bulk">B2B Bulk Cargo</FooterLink>
            <FooterLink href="/services/shifting">Express Delivery</FooterLink>
            <FooterLink href="/services/corporate">Enterprise API</FooterLink>
          </FooterGroup>

          {/* Quick Links - Support */}
          <FooterGroup title="Platform">
            <FooterLink href="/track">Real-time Tracking</FooterLink>
            <FooterLink href="/cost">Shipping Calculator</FooterLink>
            <FooterLink href="/help">Developer Docs</FooterLink>
            <FooterLink href="/contact">Support Center</FooterLink>
          </FooterGroup>

          {/* Contact Section */}
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] mb-6">Headquarters</h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 text-sm font-medium hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center shrink-0">
                   <Phone className="w-3.5 h-3.5 text-[#6366F1]" />
                </div>
                +91 93403 84339
              </li>
              <li className="flex items-center gap-4 text-sm font-medium hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center shrink-0">
                   <Mail className="w-3.5 h-3.5 text-[#6366F1]" />
                </div>
                ops@indorelogistics.com
              </li>
              <li className="flex items-start gap-4 text-sm font-medium hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center shrink-0 mt-1">
                   <MapPin className="w-3.5 h-3.5 text-[#6366F1]" />
                </div>
                Vijay Nagar, Indore, <br />Madhya Pradesh 452010
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.15em]">
            © {currentYear} Indore Logistics. Built for the Heart of India.
          </p>
          <div className="flex gap-10 text-[10px] font-bold text-slate-600 uppercase tracking-[0.15em]">
            <Link href="/privacy" className="hover:text-[#6366F1] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#6366F1] transition-colors">Terms</Link>
            <Link href="/security" className="hover:text-[#6366F1] transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- Helpers ---

function FooterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] mb-6">{title}</h4>
      <ul className="space-y-3.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm font-medium text-slate-500 hover:text-[#6366F1] hover:translate-x-1 inline-block transition-all duration-200">
        {children}
      </Link>
    </li>
  );
}