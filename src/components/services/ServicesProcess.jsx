import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { processData } from "../../data/processData";

function ServicesProcess() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="pb-16">
      <div className="section-container">
        <div className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7 sm:p-9">
          <div className="grid gap-10 lg:grid-cols-[0.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Our Approach
              </p>

              <h2 className="font-heading mt-3 text-3xl font-bold leading-tight text-slate-950">
                A Simple Process for{" "}
                <span className="text-blue-600">
                  Outstanding Results
                </span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                We follow a transparent and collaborative process designed to
                keep your project organized from planning to delivery.
              </p>

              <NavLink
                to="/contact"
                className="focus-visible-ring mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Start Your Project
                <ArrowRight size={17} />
              </NavLink>
            </div>

            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="grid gap-7 sm:grid-cols-2 lg:grid-cols-6"
            >
              {processData.map(
                ({ number, title, description, icon: Icon }, index) => (
                  <motion.article
                    key={title}
                    variants={{
                      hidden: { opacity: 0, y: 18 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="relative text-center"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-600 shadow-lg shadow-blue-900/5">
                      <Icon size={22} />
                    </div>

                    {index < processData.length - 1 && (
                      <ChevronRight
                        size={18}
                        className="absolute -right-3 top-5 hidden text-blue-300 lg:block"
                      />
                    )}

                    <p className="mt-4 text-xs font-bold text-blue-600">
                      {number}
                    </p>

                    <h3 className="font-heading mt-1 text-sm font-bold text-slate-950">
                      {title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-600">
                      {description}
                    </p>
                  </motion.article>
                ),
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesProcess;