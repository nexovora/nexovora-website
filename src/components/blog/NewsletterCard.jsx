import { LockKeyhole, Send } from "lucide-react";
import { useState } from "react";
import { subscribeToNewsletter } from "../../services/newsletterService";

function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const result = await subscribeToNewsletter(email);

      setStatus("success");

      setMessage(
        result.mode === "development"
          ? "Email validated in development mode. Connect a newsletter endpoint before publishing."
          : "Thank you for subscribing.",
      );

      if (result.mode === "remote") {
        setEmail("");
      }
    } catch (error) {
      setStatus("error");

      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to subscribe right now.",
      );
    }
  }

  return (
    <div className="rounded-2xl bg-gradient-to-br from-[#06142E] to-[#0B2A63] p-6 text-white shadow-xl">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-blue-200">
        <Send size={20} />
      </div>

      <h2 className="font-heading mt-5 text-xl font-bold">
        Subscribe to Our Newsletter
      </h2>

      <p className="mt-3 text-sm leading-6 text-slate-300">
        Get practical articles, digital tips, and updates delivered to your
        inbox.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-5">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>

        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setStatus("idle");
            setMessage("");
          }}
          placeholder="Email address"
          className={`focus-visible-ring w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-950 outline-none ${
            status === "error" ? "border-red-400" : "border-white/20"
          }`}
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="focus-visible-ring mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe Now"}

          <Send size={16} />
        </button>

        {message && (
          <p
            role="status"
            className={`mt-3 rounded-lg px-3 py-2 text-xs leading-5 ${
              status === "success"
                ? "bg-emerald-500/15 text-emerald-200"
                : "bg-red-500/15 text-red-200"
            }`}
          >
            {message}
          </p>
        )}
      </form>

      <p className="mt-4 flex items-center gap-2 text-xs text-slate-400">
        <LockKeyhole size={13} />
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}

export default NewsletterCard;