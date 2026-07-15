import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { servicesData } from "../../data/servicesData";

function ServicesPreview() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Our Services
          </p>

          <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            Solutions We Provide
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Practical digital services designed to help you build, present, and
            grow your ideas professionally.
          </p>
        </div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {servicesData.map(({ id, title, description, icon: Icon }) => (
            <motion.article
              key={id}
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.05)] transition hover:border-blue-300 hover:shadow-[0_20px_45px_rgba(37,99,235,0.10)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={23} />
              </div>

              <h3 className="font-heading mt-6 text-xl font-bold text-slate-950">
                {title}
              </h3>

              <p className="mt-3 min-h-14 text-sm leading-6 text-slate-600">
                {description}
              </p>

              <NavLink
                to="/services"
                className="focus-visible-ring mt-6 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-blue-600"
              >
                Learn More
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </NavLink>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesPreview;