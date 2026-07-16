import heroImage from "../../assets/images/services-laptop.png";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { heroBenefits } from "../../data/servicesPageData";

function ServicesLaptopVisual() {
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
      className="relative mx-auto flex w-full items-center justify-center"
    >
      {/* Soft glow behind the image */}
      <div
        className="pointer-events-none absolute inset-x-[10%] bottom-[5%] h-[50%] rounded-full bg-blue-300/25 blur-3xl"
        aria-hidden="true"
      />

      {/* Image with faded edges */}
      <div
        className="relative w-full max-w-[760px]"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 72%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse at center, black 72%, transparent 100%)",
        }}
      >
        <img
          src={heroImage}
          alt="Nexovora digital services dashboard with website, portfolio, branding, and QA testing"
          className="w-full select-none object-contain"
          draggable="false"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </motion.div>
  );
}

function ServicesHero() {
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

      <div
        className="pointer-events-none absolute right-[5%] top-20 hidden h-32 w-32 bg-[radial-gradient(circle,#93c5fd_1.4px,transparent_1.4px)] bg-[length:15px_15px] opacity-35 lg:block"
        aria-hidden="true"
      />

      <div className="section-container relative grid items-center gap-12 py-12 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Our Services
          </div>

          <h1 className="font-heading mt-7 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.6rem]">
            Digital Solutions Designed to{" "}
            <span className="text-gradient">Elevate Your Brand</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            We provide practical digital services that help students,
            professionals, startups, and businesses build a stronger and more
            professional digital presence.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {heroBenefits.map(({ title, icon: Icon }, index) => (
              <div
                key={title}
                className={`flex items-center gap-3 ${
                  index > 0
                    ? "sm:border-l sm:border-slate-200 sm:pl-5"
                    : ""
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Icon size={19} aria-hidden="true" />
                </div>

                <p className="text-sm font-semibold leading-5 text-slate-800">
                  {title}
                </p>
              </div>
            ))}
          </div>

          <NavLink
            to="/contact"
            className="focus-visible-ring mt-9 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25"
          >
            Start Your Project
            <ArrowRight size={18} aria-hidden="true" />
          </NavLink>
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
          className="relative z-10 min-w-0 lg:-mr-2"
        >
          <ServicesLaptopVisual />
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesHero;