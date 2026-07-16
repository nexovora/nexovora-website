import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { contactFaqs } from "../../data/contactPageData";

function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Common Questions
          </p>

          <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-3">
          {contactFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `contact-faq-button-${index}`;
            const panelId = `contact-faq-panel-${index}`;

            return (
              <article
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="focus-visible-ring flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-heading font-bold text-slate-950">
                      {faq.question}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      {isOpen ? (
                        <Minus size={17} aria-hidden="true" />
                      ) : (
                        <Plus size={17} aria-hidden="true" />
                      )}
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={
                        reduceMotion
                          ? false
                          : {
                              height: 0,
                              opacity: 0,
                            }
                      }
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={
                        reduceMotion
                          ? undefined
                          : {
                              height: 0,
                              opacity: 0,
                            }
                      }
                      transition={{
                        duration: 0.25,
                      }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-slate-100 px-6 py-5 text-sm leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactFAQ;