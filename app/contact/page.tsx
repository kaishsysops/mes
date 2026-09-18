import type { Metadata } from "next";
import { Phone, PhoneCall, Mail, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import IconBadge from "@/components/IconBadge";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | MES",
  description: "Contact the MES team in Male.",
};

const details = [
  { icon: Phone, label: "Telephone", lines: contact.phones },
  { icon: PhoneCall, label: "Hotline", lines: contact.hotlines },
  { icon: Mail, label: "Email", lines: contact.emails },
  { icon: MapPin, label: "Office", lines: contact.address },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-semibold tracking-wide uppercase text-accent-deep">Contact</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          Start with the requirement in front of you.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/70">
          Recruiting, moving a workforce, sorting documents, or looking for HR
          advice. Send the details and the team will pick it up.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <Reveal className="rounded-md border border-line bg-white/60 p-8">
          <ContactForm />
        </Reveal>

        <Reveal stagger={0.08} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {details.map((detail) => (
            <div key={detail.label} className="flex h-full gap-4 rounded-md border border-line p-5">
              <IconBadge icon={detail.icon} size="sm" />
              <div>
                <p className="text-xs font-semibold tracking-wide uppercase text-ink/50">{detail.label}</p>
                {detail.lines.map((line) => (
                  <p key={line} className="mt-1 text-sm text-ink/85">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
