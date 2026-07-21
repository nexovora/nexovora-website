import { LockKeyhole, Send } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  budgetOptions,
  serviceOptions,
  timelineOptions,
} from "../../data/contactPageData";
import { submitContactForm } from "../../services/contactService";
import { buttonHover, buttonTap } from "../../utils/motionVariants";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  timeline: "",
  details: "",
  website: "",
};

function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverMessage, setServerMessage] = useState("");
  const reduceMotion = useReducedMotion();

  function updateField(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setStatus("idle");
    setServerMessage("");
  }

  function validateForm() {
    const nextErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (
      form.phone.trim() &&
      !/^[+]?[\d\s()-]{7,20}$/.test(form.phone.trim())
    ) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.service) {
      nextErrors.service = "Please select a service.";
    }

    if (!form.details.trim()) {
      nextErrors.details = "Please describe your project.";
    } else if (form.details.trim().length < 20) {
      nextErrors.details =
        "Please provide at least 20 characters about your project.";
    }

    return nextErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (form.website) {
      return;
    }

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("error");
      setServerMessage("Please review the highlighted fields.");
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const result = await submitContactForm(form);

      setStatus("success");

      setServerMessage(
        result.mode === "development"
          ? "Thank you! Your form passed validation in development mode. Connect a real form endpoint before publishing."
          : "Thank you! Your message has been received. We’ll get back to you shortly.",
      );

      if (result.mode === "remote") {
        setForm(initialForm);
      }
    } catch (error) {
      setStatus("error");
      setServerMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try WhatsApp or email.",
      );
    }
  }

  const inputBase =
    "focus-visible-ring w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400";

  function inputClass(fieldName) {
    return `${inputBase} ${
      errors[fieldName]
        ? "border-red-400 focus:border-red-500"
        : "border-slate-200 focus:border-blue-400"
    }`;
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-9">
      <h2 className="font-heading text-3xl font-bold text-slate-950">
        Send Us a Message
      </h2>

      <p className="mt-3 leading-7 text-slate-600">
        Fill out the form below and we&apos;ll get back to you as soon as
        possible.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Full Name"
            name="fullName"
            required
            error={errors.fullName}
          >
            <input
              id="fullName"
              name="fullName"
              value={form.fullName}
              onChange={updateField}
              className={inputClass("fullName")}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={
                errors.fullName ? "fullName-error" : undefined
              }
              placeholder="Your full name"
            />
          </Field>

          <Field
            label="Email Address"
            name="email"
            required
            error={errors.email}
          >
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={updateField}
              className={inputClass("email")}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              placeholder="you@example.com"
            />
          </Field>

          <Field
            label="Phone / WhatsApp"
            name="phone"
            error={errors.phone}
          >
            <input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={updateField}
              className={inputClass("phone")}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              placeholder="+92 3XX XXXXXXX"
            />
          </Field>

          <Field
            label="Service Interested In"
            name="service"
            required
            error={errors.service}
          >
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={updateField}
              className={inputClass("service")}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={
                errors.service ? "service-error" : undefined
              }
            >
              <option value="">Select a service</option>

              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Project Budget" name="budget">
            <select
              id="budget"
              name="budget"
              value={form.budget}
              onChange={updateField}
              className={inputClass("budget")}
            >
              <option value="">Select your budget</option>

              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Preferred Timeline" name="timeline">
            <select
              id="timeline"
              name="timeline"
              value={form.timeline}
              onChange={updateField}
              className={inputClass("timeline")}
            >
              <option value="">Select a timeline</option>

              {timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="mt-5">
          <Field
            label="Project Details"
            name="details"
            required
            error={errors.details}
          >
            <textarea
              id="details"
              name="details"
              rows={7}
              value={form.details}
              onChange={updateField}
              className={`${inputClass("details")} resize-y`}
              aria-invalid={Boolean(errors.details)}
              aria-describedby={
                errors.details ? "details-error" : undefined
              }
              placeholder="Tell us about your project, goals, required features, deadline, and any references."
            />
          </Field>
        </div>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>

          <input
            id="website"
            name="website"
            tabIndex="-1"
            autoComplete="off"
            value={form.website}
            onChange={updateField}
          />
        </div>

        {serverMessage && (
          <motion.p
            role="status"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.22 }}
            className={`mt-5 rounded-xl border px-4 py-3 text-sm leading-6 ${
              status === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            {serverMessage}
          </motion.p>
        )}

        <motion.button
          type="submit"
          disabled={status === "loading"}
          whileHover={
            reduceMotion || status === "loading" ? undefined : buttonHover
          }
          whileTap={
            reduceMotion || status === "loading" ? undefined : buttonTap
          }
          className="focus-visible-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Sending..." : "Send Message"}

          <Send size={17} aria-hidden="true" />
        </motion.button>

        <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
          <LockKeyhole size={14} aria-hidden="true" />

          Your information will only be used to respond to your inquiry.
        </p>
      </form>
    </div>
  );
}

function Field({ label, name, required = false, error, children }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-slate-800"
      >
        {label}

        {required && (
          <span className="ml-1 text-red-500" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {children}

      {error && (
        <p
          id={`${name}-error`}
          className="mt-2 text-xs text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default ContactForm;
