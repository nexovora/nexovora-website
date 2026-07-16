import aboutWorkspace from "../../assets/images/about-workspace.png";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { NavLink } from "react-router-dom";
import { aboutStats } from "../../data/aboutPageData";

function WorkspaceIllustration() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
  animate={
    reduceMotion
      ? undefined
      : {
          y: [0, -5, 0],
        }
  }
  whileHover={
    reduceMotion
      ? undefined
      : {
          scale: 1.01,
        }
  }
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative mx-auto flex w-full items-center justify-center"
>
      <div
        className="pointer-events-none absolute inset-x-[10%] bottom-[4%] h-[48%] rounded-full bg-blue-300/25 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="relative w-full max-w-[780px]"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 78%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse at center, black 78%, transparent 100%)",
        }}
      >
         <img
        src={aboutWorkspace}
        alt="Nexovora team discussing a digital dashboard in a modern office"
        className="w-full select-none object-contain drop-shadow-[0_30px_60px_rgba(37,99,235,0.15)] transition-all duration-500"
        draggable="false"
        loading="eager"
        fetchPriority="high"
        />
      </div>
    </motion.div>
  );
}

function AboutHero() {
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

      <div className="section-container relative grid items-center gap-12 py-12 md:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:py-16">
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
            About Nexovora
          </div>

          <h1 className="font-heading mt-7 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.6rem]">
            We&apos;re Building{" "}
            <span className="text-gradient">Digital Excellence</span> That
            Drives Results.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Nexovora is a digital solutions agency focused on helping
            businesses, professionals, startups, and individuals grow through
            modern websites, creative design, quality assurance, reliable
            hosting, and professional digital support.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <NavLink
              to="/contact"
              className="focus-visible-ring inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Start Your Project
              <ArrowRight size={18} aria-hidden="true" />
            </NavLink>

            <a
              href="/nexovora-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-visible-ring inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600"
            >
              <Download size={18} aria-hidden="true" />
              View Brochure
            </a>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-4 border-t border-slate-200 pt-7 sm:grid-cols-4">
            {aboutStats.map(({ value, label, icon: Icon }) => (
              <div key={label}>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={19} aria-hidden="true" />
                </div>

                <p className="font-heading mt-3 text-lg font-bold text-slate-950">
                  {value}
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {label}
                </p>
              </div>
            ))}
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
          className="relative z-10 min-w-0 lg:-mt-32 xl:-mt-36 2xl:-mt-40"
        >
          <WorkspaceIllustration />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutHero;