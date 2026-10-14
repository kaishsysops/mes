"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { contact, ctaLabel } from "@/lib/content";
import { buttonPrimary, buttonPrimaryCompact, logoDarkFilter } from "@/lib/ui";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const hotline = contact.hotlines[0];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt=""
            width={30}
            height={33}
            className={`h-8 w-auto ${logoDarkFilter}`}
            loading="eager"
          />
          <span className="text-lg font-semibold tracking-tight text-ink">MES</span>
          <span className="sr-only">Maldives Employment Services, home</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active ? "bg-ink/[0.06] text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={`tel:${hotline.replace(/[^+\d]/g, "")}`}
            className="mr-2 hidden items-center gap-2 text-sm text-muted transition-colors hover:text-ink lg:flex"
          >
            <Phone size={14} strokeWidth={1.5} />
            {hotline}
          </a>
          <Link href="/contact" className={buttonPrimaryCompact}>
            {ctaLabel}
          </Link>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="-mr-2 rounded-full p-2 text-ink"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto border-t border-line bg-paper px-4 pt-6 pb-10 md:hidden"
        >
          <ul className="flex flex-col">
            {[{ href: "/", label: "Home" }, ...links].map((link) => (
              <li key={link.href} className="border-b border-line">
                <Link
                  href={link.href}
                  className="block py-4 text-2xl font-medium tracking-tight text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className={`${buttonPrimary} mt-8 w-full`} onClick={() => setOpen(false)}>
            {ctaLabel}
          </Link>
          <a
            href={`tel:${hotline.replace(/[^+\d]/g, "")}`}
            className="mt-4 flex items-center justify-center gap-2 py-2 text-sm text-muted"
          >
            <Phone size={14} strokeWidth={1.5} />
            Hotline {hotline}
          </a>
        </nav>
      )}
    </header>
  );
}
