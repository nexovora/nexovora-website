import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { NavLink } from "react-router-dom";

function PricingCard({ plan, index }) {
  const reduceMotion = useReducedMotion();

  const {
    name,
    description,
    prefix,
    currency,
    price,
    billing,
    cta,
    featured,
    badge,
    features,
  } = plan;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: reduceMotion ? 0 : index * 0.06,
      }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className={`relative flex h-full flex-col rounded-[20px] bg-white p-7 transition ${
        featured
          ? "border-2 border-blue-500 shadow-[0_24px_55px_rgba(37,99,235,0.16)]"
          : "border border-slate-200 shadow-[0_12px_36px_rgba(15,23,42,0.05)] hover:border-blue-300 hover:shadow-[0_20px_45px_rgba(37,99,235,0.10)]"
      }`}
    >
      {badge && (
        <span className="absolute right-5 top-5 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-bold text-white">
          {badge}
        </span>
      )}

      <h3 className="font-heading pr-24 text-2xl font-bold text-slate-950">
        {name}
      </h3>

      <p className="mt-3 min-h-12 text-sm leading-6 text-slate-600">
        {description}
      </p>

      <div className="mt-7 border-y border-slate-100 py-6">
        {prefix && (
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            {prefix}
          </p>
        )}

        <div className="mt-2 flex flex-wrap items-end gap-2">
          {currency && (
            <span className="font-heading text-lg font-bold text-slate-950">
              {currency}
            </span>
          )}

          <span className="font-heading text-4xl font-bold tracking-tight text-blue-600">
            {price}
          </span>
        </div>

        <p className="mt-2 text-sm text-slate-500">{billing}</p>
      </div>

      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm leading-6 text-slate-700"
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <Check size={13} />
            </span>

            {feature}
          </li>
        ))}
      </ul>

      <NavLink
        to="/contact"
        className={`focus-visible-ring mt-auto inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 pt-6 font-semibold transition ${
          featured
            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
            : "border border-slate-200 bg-white text-slate-900 hover:border-blue-300 hover:text-blue-600"
        }`}
      >
        {cta}
        <ArrowRight size={17} />
      </NavLink>
    </motion.article>
  );
}

export default PricingCard;