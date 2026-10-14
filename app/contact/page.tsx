import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | MES",
  description: "Contact the MES team in Male.",
};

const toTel = (n: string) => `tel:${n.replace(/[^+\d]/g, "")}`;

const details = [
  { label: "Hotline", lines: contact.hotlines.map((n) => ({ text: n, href: toTel(n) })) },
  { label: "Telephone", lines: contact.phones.map((n) => ({ text: n, href: toTel(n) })) },
  { label: "Email", lines: contact.emails.map((e) => ({ text: e, href: `mailto:${e}` })) },
  { label: "Office", lines: contact.address.map((line) => ({ text: line, href: undefined })) },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Tell us what you need to hire."
        lead="Recruiting, moving a workforce, sorting documents, or looking for HR advice. Send the details and the team will pick it up."
      />

      <section className="mx-auto grid max-w-[1400px] gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:pb-32">
        <Reveal className="rounded-2xl bg-surface p-6 sm:p-10 lg:col-span-7">
          <ContactForm />
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-5">
          <dl className="grid gap-10 sm:grid-cols-2">
            {details.map((detail) => (
              <div key={detail.label} className="border-t border-line pt-5">
                <dt className="text-sm text-muted">{detail.label}</dt>
                <dd className="mt-3 space-y-1">
                  {detail.lines.map((line) =>
                    line.href ? (
                      <a key={line.text} href={line.href} className="block text-ink transition-colors hover:text-accent-ink">
                        {line.text}
                      </a>
                    ) : (
                      <p key={line.text} className="text-ink">{line.text}</p>
                    )
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>
    </>
  );
}
