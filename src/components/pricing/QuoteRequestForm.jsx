import { motion, useReducedMotion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import {
  quoteBudgetOptions,
  quoteServiceOptions,
} from "../../data/pricingPageData";
import { submitQuoteRequest } from "../../services/quoteService";

const initialForm = {
  fullName: "",
  email: "",
  whatsapp: "",
  service: "",
  budget: "",
  deadline: "",
  details: "",
  website: "",
};

function QuoteRequestForm() {
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
      form: "",
    }));

    setStatus("idle");
    setServerMessage("");
  }

  function validate() {
    const nextErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.whatsapp.trim()) {
      nextErrors.whatsapp = "Please enter your WhatsApp number.";
    } else if (
      !/^[+]?[\d\s()-]{7,20}$/.test(form.whatsapp.trim())
    ) {
      nextErrors.whatsapp =
        "Please enter a valid WhatsApp number.";
    }

    if (!form.service) {
      nextErrors.service = "Please select a service.";
    }

    if (!form.budget) {
      nextErrors.budget = "Please select a budget range.";
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

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("error");
      setServerMessage("Please review the highlighted fields.");
      return;
    }

    setStatus("loading");
    setServerMessage("");
    setErrors({});

    try {
      const response = await submitQuoteRequest(form);

      setStatus("success");
      setServerMessage(
        response.message ||
          "Your quotation request has been sent successfully. We will contact you shortly.",
      );

      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setServerMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your quotation request.",
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
    <section className="section-padding bg-white">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        className="section-container"
      >
        <div className="grid gap-10 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-white p-7 sm:p-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Need Something Different?
            </p>

            <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Request a Custom Quotation
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Every project is different. Share your goals, required features,
              deadline, and budget range, and we will recommend the most
              suitable solution.
            </p>

            <div className="mt-7 rounded-2xl border border-blue-100 bg-white p-5">
              <p className="font-semibold text-slate-900">
                Clear and transparent quotation
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                We review your project requirements before confirming the final
                price, scope, timeline, and included revisions.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate>
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
                label="Email"
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
                  aria-describedby={
                    errors.email ? "email-error" : undefined
                  }
                  placeholder="you@example.com"
                />
              </Field>

              <Field
                label="WhatsApp Number"
                name="whatsapp"
                required
                error={errors.whatsapp}
              >
                <input
                  id="whatsapp"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={updateField}
                  className={inputClass("whatsapp")}
                  aria-invalid={Boolean(errors.whatsapp)}
                  aria-describedby={
                    errors.whatsapp ? "whatsapp-error" : undefined
                  }
                  placeholder="+92 3XX XXXXXXX"
                />
              </Field>

              <Field
                label="Service Required"
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

                  {quoteServiceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                label="Budget Range"
                name="budget"
                required
                error={errors.budget}
              >
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={updateField}
                  className={inputClass("budget")}
                  aria-invalid={Boolean(errors.budget)}
                  aria-describedby={
                    errors.budget ? "budget-error" : undefined
                  }
                >
                  <option value="">Select your budget</option>

                  {quoteBudgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Preferred Deadline" name="deadline">
                <input
                  id="deadline"
                  name="deadline"
                  type="date"
                  value={form.deadline}
                  onChange={updateField}
                  className={inputClass("deadline")}
                />
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
                  value={form.details}
                  onChange={updateField}
                  rows={6}
                  className={`${inputClass("details")} resize-y`}
                  aria-invalid={Boolean(errors.details)}
                  aria-describedby={
                    errors.details ? "details-error" : undefined
                  }
                  placeholder="Describe your project, goals, required features, references, and any special requirements..."
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
              <p
                role="status"
                className={`mt-5 rounded-xl border px-4 py-3 text-sm leading-6 ${
                  status === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border-red-200 bg-red-50 text-red-700"
                }`}
              >
                {serverMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="focus-visible-ring mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading"
                ? "Sending Request..."
                : "Request Quote"}

              <Send size={17} aria-hidden="true" />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

function Field({
  label,
  name,
  required = false,
  error,
  children,
}) {
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

export default QuoteRequestForm;