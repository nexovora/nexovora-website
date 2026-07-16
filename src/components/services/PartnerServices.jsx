import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Info } from "lucide-react";
import { NavLink } from "react-router-dom";
import { partnerServices } from "../../data/servicesPageData";

function PartnerServices() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-slate-50/70">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Partner Services
          </p>

          <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            Additional Creative & Professional Support
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Nexovora also coordinates selected creative, presentation, document,
            and academic-support services through trusted specialist partners.
          </p>
        </div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
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
          {partnerServices.map(
            ({ id, title, description, features, icon: Icon }) => (
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
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_12px_34px_rgba(15,23,42,0.05)] transition hover:border-blue-300 hover:shadow-[0_20px_45px_rgba(37,99,235,0.09)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={23} aria-hidden="true" />
                </div>

                <h3 className="font-heading mt-5 text-xl font-bold text-slate-950">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-slate-700"
                    >
                      <Check
                        size={15}
                        className="shrink-0 text-blue-600"
                        aria-hidden="true"
                      />

                      {feature}
                    </li>
                  ))}
                </ul>

                <NavLink
                  to="/contact"
                  className="focus-visible-ring mt-auto inline-flex items-center gap-2 self-start rounded-md pt-6 text-sm font-semibold text-blue-600"
                >
                  Ask About This Service

                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </NavLink>
              </motion.article>
            ),
          )}
        </motion.div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 text-sm leading-6 text-slate-700">
          <Info
            size={20}
            className="mt-0.5 shrink-0 text-blue-600"
            aria-hidden="true"
          />

          <p>
            These specialized services may be delivered by trusted independent
            partners under Nexovora&apos;s coordination. Availability, pricing,
            revisions, and delivery time depend on the selected service and
            project requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PartnerServices;