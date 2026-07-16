import { motion, useReducedMotion } from "framer-motion";
import ContactForm from "./ContactForm";
import LocationPanel from "./LocationPanel";

function MainContactArea() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-slate-50/70">
      <div className="section-container grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -24 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.55,
          }}
        >
          <ContactForm />
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 24 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.55,
            delay: 0.08,
          }}
        >
          <LocationPanel />
        </motion.div>
      </div>
    </section>
  );
}

export default MainContactArea;