import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgeCheck, TrendingUp } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  heroBenefits,
  pricingIllustrationPlans,
} from "../../data/pricingPageData";

function PricingIllustration() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -6, 0],
            }
      }
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative mx-auto w-full max-w-[620px] py-8"
    >
      <div
        className="pointer-events-none absolute inset-[12%] rounded-full bg-blue-300/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-[0_28px_70px_rgba(8,26,58,0.14)] backdrop-blur sm:p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-heading text-xl font-bold text-slate-950">
              Project Packages
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Clear starting points for different needs
            </p>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
            <TrendingUp size={22} />
          </div>
        </div>

        <div className="mt-7 space-y-3">
          {pricingIllustrationPlans.map(({ label, icon: Icon }, index) => (
            <div
              key={label}
              className={`flex items-center justify-between rounded-2xl border p-4 ${
                index === 1
                  ? "border-blue-300 bg-blue-50"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={19} />
                </div>

                <div>
                  <p className="font-heading font-bold text-slate-950">
                    {label}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Customizable project scope
                  </p>
                </div>
              </div>

              <BadgeCheck size={20} className="text-blue-600" />
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#06142E] to-[#0B2A63] p-5 text-white">
          <p className="text-xs uppercase tracking-[0.16em] text-blue-200">
            Flexible quotation
          </p>

          <p className="font-heading mt-2 text-2xl font-bold">
            Built Around Your Requirements
          </p>

          <div className="mt-5 flex h-20 items-end gap-2">
            {[35, 48, 42, 64, 58, 78, 72].map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-md bg-gradient-to-t from-blue-600 to-blue-300"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, 5, 0],
              }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-1 right-4 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl shadow-blue-950/10 sm:right-8"
      >
        <p className="text-xs text-slate-500">Recommended for</p>

        <p className="font-heading mt-1 font-bold text-blue-600">
          Growing Businesses
        </p>
      </motion.div>
    </motion.div>
  );
}

function PricingHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white to-blue-50/40">
      <div
        className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-28 top-10 h-[420px] w-[420px] rounded-full bg-blue-200/45 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container relative grid items-center gap-14 py-14 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Pricing & Packages
          </div>

          <h1 className="font-heading mt-7 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.6rem]">
            Simple, Transparent Pricing for{" "}
            <span className="text-gradient">Every Need</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Choose a package that fits your goals, project scope, and budget.
            Every package is designed to provide clear value, professional
            quality, and reliable support.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {heroBenefits.map(({ title, description, icon: Icon }) => (
              <div key={title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Icon size={19} />
                </div>

                <p className="mt-3 text-sm font-bold text-slate-900">{title}</p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <NavLink
            to="/contact"
            className="focus-visible-ring mt-9 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Request a Quote
            <ArrowRight size={18} />
          </NavLink>
        </motion.div>

        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, scale: 0.95, y: 24 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <PricingIllustration />
        </motion.div>
      </div>
    </section>
  );
}

export default PricingHero;