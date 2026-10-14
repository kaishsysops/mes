"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { contact, services } from "@/lib/content";
import { arrowNudge, buttonPrimary } from "@/lib/ui";

const fields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "mobile", label: "Mobile number", type: "tel", autoComplete: "tel" },
  { name: "company", label: "Company", type: "text", autoComplete: "organization" },
] as const;

const inputClass =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink transition-[border-color,box-shadow] duration-200 outline-none focus:border-accent focus:ring-4 focus:ring-accent/15 user-invalid:border-danger";
const labelClass = "text-sm font-medium text-ink";

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
      <div role="status" className="flex flex-col items-start gap-5 py-6">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-on-accent">
          <Check size={20} strokeWidth={1.5} />
        </span>
        <div>
          <p className="text-2xl font-semibold tracking-tight text-ink">Check your email app</p>
          <p className="mt-2 max-w-[48ch] leading-relaxed text-muted">
            A message to {contact.emails[0]} should be open and ready to send. If nothing opened, email
            us directly at that address.
          </p>
        </div>
        <button type="button" onClick={() => setSubmitted(false)} className="text-sm font-medium text-accent-ink">
          Edit the enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-2">
          <label htmlFor={field.name} className={labelClass}>{field.label}</label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            autoComplete={field.autoComplete}
            required
            className={inputClass}
          />
        </div>
      ))}

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="service" className={labelClass}>Service required</label>
        <select id="service" name="service" className={inputClass} defaultValue="General enquiry">
          <option>General enquiry</option>
          {services.map((service) => (
            <option key={service.slug}>{service.title}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="message" className={labelClass}>Workforce requirement</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-describedby="message-hint"
          className={`${inputClass} resize-none`}
        />
        <p id="message-hint" className="text-sm text-muted">
          Roles, number of people, skill level, and when you need them.
        </p>
      </div>

      <div className="sm:col-span-2">
        <button type="submit" className={buttonPrimary}>
          Send enquiry
          <ArrowRight size={16} strokeWidth={1.5} className={arrowNudge} />
        </button>
      </div>
    </form>
  );
}
