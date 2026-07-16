import { motion, useReducedMotion } from "framer-motion";
import { whyChooseFeatures } from "../../data/servicesPageData";

function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="pb-16">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Why Choose Nexovora
          </p>

          <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            Why Clients Choose Us
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            A clear, careful, and practical approach to delivering professional
            digital services.
          </p>
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
          className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {whyChooseFeatures.map(
            ({ title, description, icon: Icon }) => (
              <motion.article
                key={title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition hover:border-blue-300 hover:shadow-[0_18px_40px_rgba(37,99,235,0.09)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Icon size={21} />
                </div>

                <h3 className="font-heading mt-5 text-lg font-bold text-slate-950">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
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

export default WhyChooseUs;