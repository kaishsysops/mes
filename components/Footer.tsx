import Link from "next/link";
import Image from "next/image";
import { contact, services } from "@/lib/content";
import { frame, logoDarkFilter } from "@/lib/ui";

const linkClass = "text-muted transition-colors hover:text-ink";

export default function Footer() {
  return (
    <footer className={`${frame} pb-2 sm:pb-3`}>
      <div className="rounded-2xl bg-surface">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:px-10 lg:py-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <Image src="/images/logo.png" alt="" width={30} height={33} className={`h-8 w-auto ${logoDarkFilter}`} />
              <span className="text-lg font-semibold tracking-tight text-ink">MES</span>
            </div>
            <p className="mt-5 max-w-[36ch] text-sm leading-relaxed text-muted">
              Maldives Employment Services. A recruiting agent and manpower supplier for skilled,
              semi-skilled, and professional roles.
            </p>
          </div>

          <nav aria-label="Company" className="lg:col-span-2">
            <p className="text-sm font-medium text-ink">Company</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/about" className={linkClass}>About</Link></li>
              <li><Link href="/services" className={linkClass}>Services</Link></li>
              <li><Link href="/clients" className={linkClass}>Clients</Link></li>
              <li><Link href="/contact" className={linkClass}>Contact</Link></li>
            </ul>
          </nav>

          <nav aria-label="Services" className="lg:col-span-2">
            <p className="text-sm font-medium text-ink">Services</p>
            <ul className="mt-4 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services#${service.slug}`} className={linkClass}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="text-sm font-medium text-ink">Office</p>
            <address className="mt-4 space-y-3 text-sm not-italic">
              <p className="text-muted">{contact.address.join(", ")}</p>
              <p>
                <a href={`mailto:${contact.emails[0]}`} className={linkClass}>{contact.emails[0]}</a>
              </p>
              <p>
                <a href={`tel:${contact.phones[0].replace(/[^+\d]/g, "")}`} className={linkClass}>
                  {contact.phones[0]}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="border-t border-line py-6 text-xs text-muted">
            &copy; {new Date().getFullYear()} Maldives Employment Services
          </p>
        </div>
      </div>
    </footer>
  );
}
