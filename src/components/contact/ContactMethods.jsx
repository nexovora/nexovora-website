import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { contactMethods } from "../../data/contactPageData";

function ContactMethods() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Contact Options
          </p>

          <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            Reach Us Any Way You Prefer
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Choose the communication method that is most convenient for you.
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
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contactMethods.map(
            ({ id, title, value, description, href, icon: Icon }) => (
              <motion.article
                key={id}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition hover:border-blue-300 hover:shadow-[0_18px_40px_rgba(37,99,235,0.09)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={22} aria-hidden="true" />
                </div>

                <h3 className="font-heading mt-5 text-lg font-bold text-slate-950">
                  {title}
                </h3>

                {href ? (
                  <a
                    href={href}
                    target={id === "whatsapp" ? "_blank" : undefined}
                    rel={
                      id === "whatsapp"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="focus-visible-ring mt-3 inline-flex max-w-full items-center gap-2 break-all rounded-md text-sm font-semibold text-blue-600"
                  >
                    {value}

                    <ExternalLink
                      size={14}
                      className="shrink-0"
                      aria-hidden="true"
                    />
                  </a>
                ) : (
                  <p className="mt-3 text-sm font-semibold text-blue-600">
                    {value}
                  </p>
                )}

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </motion.article>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default ContactMethods;