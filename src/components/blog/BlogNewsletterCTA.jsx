import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

function BlogNewsletterCTA() {
  const reduceMotion = useReducedMotion();

  function focusNewsletterInput() {
    document.getElementById("newsletter-email")?.focus();
  }

  return (
    <section className="pb-16">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="section-container relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-500 p-7 text-white shadow-xl shadow-blue-600/20 sm:p-10"
      >
        <div
          className="pointer-events-none absolute right-8 top-0 h-full w-36 bg-[radial-gradient(circle,rgba(255,255,255,0.35)_1.4px,transparent_1.4px)] bg-[length:14px_14px] opacity-30"
          aria-hidden="true"
        />

        <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 shadow-lg">
              <Mail size={24} />
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold sm:text-3xl">
                Never Miss Valuable Insights
              </h2>

              <p className="mt-2 text-blue-100">
                Subscribe to receive practical articles, helpful tips, and new
                updates.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={focusNewsletterInput}
            className="focus-visible-ring inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-blue-600 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
          >
            Subscribe Now
            <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default BlogNewsletterCTA;