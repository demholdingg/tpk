"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

const INITIAL: FormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

const SERVICES = [
  "Mechanical Electrical",
  "Network Infrastructure",
  "Heavy Duty Equipment",
  "General Contracting",
  "Maintenance",
  "Other",
];

export function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSuccess(true);
      setForm(INITIAL);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-12 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-display text-2xl font-bold uppercase text-gray-900 mb-3">
          Message Sent!
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Thank you for reaching out. Our team will get back to you within 1–2
          business days.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="text-orange text-sm font-medium hover:opacity-75 transition-opacity"
        >
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field
          label="Full Name *"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Field
          label="Email Address *"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field
          label="Company"
          name="company"
          value={form.company}
          onChange={handleChange}
        />
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      {/* Service select */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-semibold tracking-[1.5px] uppercase text-gray-500">
          Service of Interest
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="bg-white border border-gray-200 text-gray-900 text-sm px-4 py-3
                     rounded focus:outline-none focus:border-orange transition-colors
                     appearance-none cursor-pointer"
        >
          <option value="">Select a service…</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-semibold tracking-[1.5px] uppercase text-gray-500">
          Message *
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Describe your project requirements…"
          className="bg-white border border-gray-200 text-gray-900 text-sm px-4 py-3
                     rounded focus:outline-none focus:border-orange transition-colors
                     resize-none placeholder-gray-400"
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3 rounded">
          {error}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="self-start inline-flex items-center gap-2.5 bg-orange text-black
                   font-semibold text-[14px] px-8 py-3.5 rounded transition-all
                   hover:bg-orange-dark hover:-translate-y-0.5
                   disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
      >
        {loading ? (
          <>
            <Loader2 size={15} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send size={15} /> Send Message
          </>
        )}
      </button>
    </form>
  );
}

// ── Field helper ───────────────────────────────────────────────────────────────
function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-semibold tracking-[1.5px] uppercase text-gray-500">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-white border border-gray-200 text-gray-900 text-sm px-4 py-3
                   rounded focus:outline-none focus:border-orange transition-colors
                   placeholder-gray-400"
      />
    </div>
  );
}
