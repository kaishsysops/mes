import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | MES",
  description: "Get in touch with the MES team.",
};

const details = [
  { icon: Phone, label: "+1 (000) 000-0000" },
  { icon: Mail, label: "hello@mes.example" },
  { icon: MapPin, label: "100 Harbor Ave, Suite 400" },
  { icon: Clock, label: "Mon–Fri, 9am–6pm" },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
      <Reveal className="max-w-2xl">
        <p className="text-xs tracking-[0.2em] uppercase text-teal">Contact</p>
        <h1 className="mt-4 font-serif font-semibold text-4xl leading-tight text-ink sm:text-5xl">
          Let&rsquo;s talk about your team.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-ink/70">
          Tell us what you&rsquo;re hiring for and we&rsquo;ll get back to you within
          one business day.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal className="space-y-8">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
            <Image
              src="/images/office-contact.jpg"
              alt="MES office"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
            <div className="absolute inset-0 bg-ink-deep/10 mix-blend-multiply" />
          </div>

          <ul className="space-y-4 border-t border-line pt-6">
            {details.map((detail) => (
              <li key={detail.label} className="flex items-center gap-3 text-sm text-ink/70">
                <detail.icon size={16} className="text-teal" />
                <span>{detail.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
