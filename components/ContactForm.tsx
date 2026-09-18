"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

const fields = [
  { name: "name", label: "Full name", type: "text" },
  { name: "email", label: "Email address", type: "email" },
  { name: "company", label: "Company", type: "text" },
] as const;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex items-start gap-3 border border-line p-6">
        <Check size={18} className="mt-0.5 shrink-0 text-teal" />
        <div>
          <p className="font-serif text-lg text-ink">Message sent</p>
          <p className="mt-1 text-sm text-ink/60">
            Thanks for reaching out. We&rsquo;ll be in touch within one business day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="text-xs tracking-[0.1em] uppercase text-ink/50">
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            required
            className="mt-2 w-full border-b border-line bg-transparent py-2 text-ink outline-none transition-colors focus:border-teal"
          />
        </div>
      ))}

      <div>
        <label htmlFor="message" className="text-xs tracking-[0.1em] uppercase text-ink/50">
          What are you hiring for?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-2 w-full resize-none border-b border-line bg-transparent py-2 text-ink outline-none transition-colors focus:border-teal"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3 text-sm text-cream transition-colors hover:bg-ink-deep"
      >
        Send message <ArrowRight size={16} />
      </button>
    </form>
  );
}
