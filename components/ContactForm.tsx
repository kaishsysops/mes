"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { contact, services } from "@/lib/content";

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "mobile", label: "Mobile number", type: "tel" },
  { name: "company", label: "Company", type: "text" },
] as const;

const inputClass =
  "mt-2 w-full border-b border-line bg-transparent py-2 text-ink outline-none transition-colors focus:border-accent";
const labelClass = "text-xs font-semibold tracking-wide uppercase text-ink/50";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `${data.get("service")} enquiry from ${data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Mobile: ${data.get("mobile")}`,
      `Company: ${data.get("company")}`,
      "",
      String(data.get("message")),
    ].join("\n");
    window.location.href = `mailto:${contact.emails[0]}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex items-start gap-3">
        <Check size={18} className="mt-1 shrink-0 text-accent" />
        <div>
          <p className="font-serif text-xl font-semibold text-ink">Check your email app</p>
          <p className="mt-1 text-sm text-ink/60">
            A message to {contact.emails[0]} should be open and ready to send. If nothing
            opened, email us directly at that address.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className={labelClass}>{field.label}</label>
          <input id={field.name} name={field.name} type={field.type} required className={inputClass} />
        </div>
      ))}

      <div className="sm:col-span-2">
        <label htmlFor="service" className={labelClass}>Service required</label>
        <select id="service" name="service" className={inputClass} defaultValue="General enquiry">
          <option>General enquiry</option>
          {services.map((service) => (
            <option key={service.slug}>{service.title}</option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelClass}>Workforce requirement</label>
        <textarea id="message" name="message" rows={4} required className={`${inputClass} resize-none`} />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
        >
          Send enquiry <ArrowRight size={16} />
        </button>
      </div>
    </form>
  );
}
