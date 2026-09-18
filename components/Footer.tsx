import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { services } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="MES" width={32} height={35} className="h-8 w-auto" />
            <span className="font-serif text-2xl">MES</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/60">
            We connect skilled professionals with employers, handling recruitment,
            documentation, and logistics under one roof.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wide uppercase text-teal">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li><Link href="/about" className="hover:text-cream">About</Link></li>
            <li><Link href="/services" className="hover:text-cream">Services</Link></li>
            <li><Link href="/clients" className="hover:text-cream">Clients</Link></li>
            <li><Link href="/contact" className="hover:text-cream">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wide uppercase text-teal">Services</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            {services.map((service) => (
              <li key={service.slug}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wide uppercase text-teal">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-teal" /> +1 (000) 000-0000
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-teal" /> hello@mes.example
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-teal" /> 100 Harbor Ave, Suite 400
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-cream/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} MES. All rights reserved.</p>
          <p>Recruitment &amp; Workforce Solutions</p>
        </div>
      </div>
    </footer>
  );
}
