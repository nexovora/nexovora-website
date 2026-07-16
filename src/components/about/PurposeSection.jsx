import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { purposeCards } from "../../data/aboutPageData";

function PurposeSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-white p-7 sm:p-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Our Purpose
            </p>

            <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Our Mission, Vision & Values
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              The principles guiding how Nexovora serves clients, builds
              solutions, and grows as a digital services brand.
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
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {purposeCards.map(
              ({ id, title, description, icon: Icon, type, items }) => (
                <motion.article
                  key={id}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 22,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_12px_34px_rgba(15,23,42,0.05)] transition hover:border-blue-300 hover:shadow-[0_20px_45px_rgba(37,99,235,0.09)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={23} />
                  </div>

                  <h3 className="font-heading mt-5 text-xl font-bold text-slate-950">
                    {title}
                  </h3>

                  {type === "text" ? (
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {description}
                    </p>
                  ) : (
                    <ul className="mt-4 space-y-3">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-slate-700"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                            <Check size={12} />
                          </span>

                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.article>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PurposeSection;