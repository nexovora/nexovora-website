import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";
import { contactTrustPoints } from "../../data/contactPageData";

function ContactIllustration() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -6, 0],
            }
      }
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative mx-auto w-full max-w-[620px] py-8"
    >
      <div
        className="pointer-events-none absolute inset-[8%] rounded-full bg-blue-300/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 p-7 shadow-[0_32px_80px_rgba(37,99,235,0.25)] sm:p-10">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/20"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute bottom-8 right-8 h-28 w-28 bg-[radial-gradient(circle,rgba(255,255,255,0.45)_1.4px,transparent_1.4px)] bg-[length:14px_14px] opacity-50"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[380px]">
          <div className="rounded-3xl border border-white/30 bg-white/15 p-5 shadow-xl backdrop-blur">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-blue-600 shadow-lg">
              <Mail size={38} aria-hidden="true" />
            </div>

            <div className="mt-5 rounded-2xl bg-white p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Sparkles size={20} aria-hidden="true" />
                </div>

                <div>
                  <p className="font-heading font-bold text-slate-950">
                    NEXOVORA
                  </p>

                  <p className="text-xs text-slate-500">
                    Creating Digital Excellence
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="h-2.5 w-full rounded-full bg-slate-100" />
                <div className="h-2.5 w-4/5 rounded-full bg-slate-100" />
                <div className="h-2.5 w-3/5 rounded-full bg-blue-100" />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 8, 0],
                  y: [0, -8, 0],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-xl sm:right-8 sm:top-8"
        >
          <Send size={25} aria-hidden="true" />
        </motion.div>

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, 6, 0],
                }
          }
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-6 left-5 rounded-2xl bg-white px-4 py-3 shadow-xl sm:left-8"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <MessageCircle size={18} aria-hidden="true" />
            </div>

            <div>
              <p className="text-xs text-slate-500">Let’s discuss</p>
              <p className="font-heading text-sm font-bold text-slate-950">
                Your Next Project
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ContactHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white to-blue-50/40">
      <div
        className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-28 top-10 h-[420px] w-[420px] rounded-full bg-blue-200/45 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container relative grid items-center gap-14 py-14 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Get in Touch
          </div>

          <h1 className="font-heading mt-7 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.6rem]">
            Let&apos;s Build Something{" "}
            <span className="text-gradient">Amazing Together</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Have a project in mind or need guidance? We&apos;re here to help
            you turn your ideas into practical, professional, and high-quality
            digital solutions.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {contactTrustPoints.map(
              ({ title, description, icon: Icon }) => (
                <div key={title}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Icon size={19} aria-hidden="true" />
                  </div>

                  <p className="mt-3 text-sm font-bold text-slate-900">
                    {title}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {description}
                  </p>
                </div>
              ),
            )}
          </div>
        </motion.div>

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.95,
                  y: 24,
                }
          }
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: "easeOut",
          }}
        >
          <ContactIllustration />
        </motion.div>
      </div>
    </section>
  );
}

export default ContactHero;