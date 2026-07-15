import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  CodeXml,
  MessageCircle,
  Play,
  ShieldCheck,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const floatingCards = [
  {
    label: "Core Services",
    value: "6",
    className: "right-0 top-6",
  },
  {
    label: "Support",
    value: "Daily",
    className: "bottom-14 -left-3",
  },
  {
    label: "Approach",
    value: "Quality First",
    className: "bottom-2 right-3",
  },
];

function DashboardMockup() {
    const reduceMotion = useReducedMotion();
  return (
    <div className="relative mx-auto w-full max-w-[600px]">
      <div className="absolute inset-10 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative rotate-[-2deg] rounded-[2rem] border border-blue-200/60 bg-slate-950 p-3 shadow-2xl shadow-blue-950/20">
        <div className="overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-[#06142E] to-[#0B2A63] p-5 sm:p-7">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="font-heading font-bold text-white">Nexovora</p>
              <p className="text-xs text-blue-200">Digital Experience Studio</p>
            </div>

            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              <span className="h-2 w-2 rounded-full bg-blue-300/50" />
              <span className="h-2 w-2 rounded-full bg-blue-300/20" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.25fr_0.75fr]">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-sm text-blue-200">We create</p>

              <h3 className="font-heading mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Digital experiences that matter.
              </h3>

              <div className="mt-6 flex items-center gap-2 text-sm text-blue-200">
                <CheckCircle2 size={16} className="text-blue-400" />
                Modern, responsive and quality-focused
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-blue-500/15 p-4">
                <CodeXml className="text-blue-300" />
                <p className="mt-3 text-sm font-semibold text-white">
                  Web Solutions
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <ShieldCheck className="text-blue-300" />
                <p className="mt-3 text-sm font-semibold text-white">
                  Quality Assurance
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {["Design", "Develop", "Test"].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center text-xs font-medium text-blue-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {floatingCards.map((card, index) => (
        <motion.div
          key={card.label}
          animate={
            reduceMotion
                ? undefined
                : {
                    y: [0, index % 2 === 0 ? -8 : 8, 0],
                }
            }
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute hidden min-w-32 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl shadow-blue-950/10 backdrop-blur sm:block ${card.className}`}
        >
          <p className="text-xs text-slate-500">{card.label}</p>
          <p className="font-heading mt-1 font-bold text-blue-600">
            {card.value}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50/40">
      <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="absolute right-0 top-8 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="section-container relative grid min-h-[760px] items-center gap-14 py-20 lg:grid-cols-2 lg:py-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Digital Solutions Agency
          </div>

          <h1 className="font-heading mt-7 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Building{" "}
            <span className="text-gradient">Digital Experiences</span> That
            Drive Results.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            We help students, professionals, startups, and businesses build
            useful digital solutions through modern development, thoughtful
            design, quality assurance, and reliable support.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <NavLink
              to="/contact"
              className="focus-visible-ring inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Start Your Project
              <ArrowRight size={18} />
            </NavLink>

            <NavLink
              to="/services"
              className="focus-visible-ring inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-800 shadow-sm transition hover:border-blue-300 hover:text-blue-600"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-200 text-blue-600">
                <Play size={13} fill="currentColor" />
              </span>
              Explore Services
            </NavLink>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-slate-200 pt-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <CheckCircle2 size={18} className="text-blue-600" />
              Now accepting projects
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <MessageCircle size={18} className="text-blue-600" />
              Free initial consultation
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;