import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { NavLink } from "react-router-dom";

function ServiceCard({
  title,
  description,
  features,
  icon: Icon,
  index,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.45,
        delay: reduceMotion ? 0 : index * 0.06,
      }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="group flex h-full flex-col rounded-[18px] border border-slate-200 bg-white p-7 shadow-[0_12px_36px_rgba(15,23,42,0.05)] transition hover:border-blue-300 hover:shadow-[0_22px_48px_rgba(37,99,235,0.10)]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white">
        <Icon size={23} />
      </div>

      <h3 className="font-heading mt-5 text-xl font-bold text-slate-950">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>

      <ul className="mt-5 space-y-2.5">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2.5 text-sm text-slate-700"
          >
            <Check size={15} className="shrink-0 text-blue-600" />
            {feature}
          </li>
        ))}
      </ul>

      <NavLink
        to="/contact"
        className="focus-visible-ring mt-auto inline-flex items-center gap-2 self-start rounded-md pt-6 text-sm font-semibold text-blue-600"
      >
        Learn More
        <ArrowRight
          size={16}
          className="transition group-hover:translate-x-1"
        />
      </NavLink>
    </motion.article>
  );
}

export default ServiceCard;