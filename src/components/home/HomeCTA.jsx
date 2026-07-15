import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import { NavLink } from "react-router-dom";

function HomeCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="pb-16">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-container relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-500 p-7 text-white shadow-xl shadow-blue-600/20 sm:p-10"
      >
        <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full border border-white/15" />
        <div className="absolute -right-5 -top-10 h-40 w-40 rounded-full border border-white/10" />

        <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 shadow-lg">
              <Send size={24} />
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold sm:text-3xl">
                Ready to Start Your Next Project?
              </h2>

              <p className="mt-2 text-blue-100">
                Tell us what you need, and let&apos;s explore the right digital
                solution together.
              </p>
            </div>
          </div>

          <NavLink
            to="/contact"
            className="focus-visible-ring inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-blue-600 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
          >
            Let&apos;s Talk
            <ArrowRight size={18} />
          </NavLink>
        </div>
      </motion.div>
    </section>
  );
}

export default HomeCTA;