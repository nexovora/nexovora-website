import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Play,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import heroLaptop from "../../assets/images/hero-laptop.png";

function DashboardMockup() {
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
      className="relative mx-auto flex w-full items-center justify-center overflow-hidden"
    >
      {/* Blue glow behind laptop */}
      <div
        className="pointer-events-none absolute inset-x-[10%] bottom-[8%] h-[42%] rounded-full bg-blue-400/20 blur-3xl"
        aria-hidden="true"
      />

      <img
        src={heroLaptop}
        alt="Modern laptop displaying a digital project-management dashboard"
        className="relative z-10 w-full max-w-[760px] -translate-y-2 scale-[1.06] select-none object-contain drop-shadow-[0_30px_50px_rgba(37,99,235,0.18)] sm:scale-[1.04] lg:-translate-y-3 lg:scale-[1.1]"
        draggable="false"
        loading="eager"
        fetchPriority="high"
      />
    </motion.div>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();

  const textAnimation = reduceMotion
    ? false
    : {
        opacity: 0,
        y: 28,
      };

  const visualAnimation = reduceMotion
    ? false
    : {
        opacity: 0,
        scale: 0.95,
        y: 24,
      };

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-white to-blue-50/50">
      {/* Decorative background elements */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-24 top-8 h-96 w-96 rounded-full bg-blue-200/50 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[6%] top-28 hidden h-32 w-32 bg-[radial-gradient(circle,#93c5fd_1.5px,transparent_1.5px)] bg-[length:16px_16px] opacity-40 lg:block"
        aria-hidden="true"
      />

      <div className="section-container relative grid items-center gap-10 py-10 sm:py-12 md:py-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:py-16">
        {/* Left content */}
        <motion.div
          initial={textAnimation}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Digital Solutions Agency
          </div>

          <h1 className="font-heading mt-7 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.75rem]">
            Building{" "}
            <span className="text-gradient">Digital Experiences</span> That
            Drive Results.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            We help students, professionals, startups, and businesses create
            useful digital solutions through modern development, thoughtful
            design, quality assurance, and reliable support.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <NavLink
              to="/contact"
              className="focus-visible-ring inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25"
            >
              Start Your Project
              <ArrowRight size={18} aria-hidden="true" />
            </NavLink>

            <NavLink
              to="/services"
              className="focus-visible-ring inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 hover:shadow-md"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-200 text-blue-600">
                <Play size={13} fill="currentColor" aria-hidden="true" />
              </span>

              Explore Services
            </NavLink>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <CheckCircle2
                size={18}
                className="shrink-0 text-blue-600"
                aria-hidden="true"
              />
              Now accepting projects
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <MessageCircle
                size={18}
                className="shrink-0 text-blue-600"
                aria-hidden="true"
              />
              Free initial consultation
            </div>
          </div>
        </motion.div>

        {/* Right laptop visual */}
        <motion.div
          initial={visualAnimation}
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
          className="relative z-10 -mx-4 sm:mx-0 lg:-mr-12"
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;