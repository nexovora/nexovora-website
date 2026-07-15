import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { processData } from "../../data/processData";

function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-slate-50/70">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Our Process
          </p>

          <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            How We Work
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            A clear and collaborative process designed to keep your project
            organized from the first discussion to final delivery.
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
                staggerChildren: 0.1,
              },
            },
          }}
          className="relative mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-6"
        >
          {processData.map(
            ({ number, title, description, icon: Icon }, index) => (
              <motion.article
                key={title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="relative text-center"
              >
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-600 shadow-lg shadow-blue-900/5">
                  <Icon size={25} />
                </div>

                {index < processData.length - 1 && (
                  <ChevronRight
                    className="absolute -right-5 top-5 hidden text-blue-300 lg:block"
                    size={20}
                  />
                )}

                <p className="mt-5 text-xs font-bold text-blue-600">{number}</p>

                <h3 className="font-heading mt-2 font-bold text-slate-950">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
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

export default Process;