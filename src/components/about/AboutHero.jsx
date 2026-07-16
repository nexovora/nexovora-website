import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Download,
  Quote,
  Users,
} from "lucide-react";
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
              y: [0, -6, 0],
            }
      }
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative mx-auto w-full max-w-[650px] pb-14"
    >
      <div
        className="pointer-events-none absolute inset-[8%] rounded-full bg-blue-300/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-slate-100 via-white to-blue-100 p-5 shadow-[0_28px_70px_rgba(8,26,58,0.16)] sm:p-7">
        <div className="absolute right-6 top-6 text-right">
          <p className="font-heading text-xl font-bold text-slate-950">
            NEXOVORA
          </p>
          <p className="text-[10px] uppercase tracking-[0.18em] text-blue-600">
            Creating Digital Excellence
          </p>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl bg-slate-900 p-3 shadow-xl">
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-[#06142E] to-[#0D3270] p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white">
                    Digital Workspace
                  </p>
                  <p className="mt-1 text-[9px] text-blue-200">
                    Project planning and quality review
                  </p>
                </div>

                <BarChart3 size={18} className="text-blue-300" />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {["Design", "Build", "Test"].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 p-2 text-center text-[9px] text-blue-100"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="flex h-24 items-end gap-2">
                  {[45, 65, 52, 80, 62, 90].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-blue-600 to-blue-300"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <Users size={20} className="text-blue-600" />
              <p className="font-heading mt-3 font-bold text-slate-950">
                Collaborative Approach
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Clear planning, communication, and review.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <CheckCircle2 size={20} className="text-blue-600" />
              <p className="font-heading mt-3 font-bold text-slate-950">
                Quality Focused
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Every project follows a structured process.
              </p>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, 5, 0],
              }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-4 max-w-sm rounded-2xl border border-white/80 bg-white/95 p-5 shadow-xl shadow-blue-950/10 backdrop-blur sm:left-8"
      >
        <Quote size={28} className="text-blue-600" />

        <p className="mt-3 text-sm leading-6 text-slate-700">
          Our goal is simple — deliver smart digital solutions that help our
          clients grow, stand out, and succeed.
        </p>
      </motion.div>
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
        className="pointer-events-none absolute right-[5%] top-24 hidden h-32 w-32 bg-[radial-gradient(circle,#93c5fd_1.4px,transparent_1.4px)] bg-[length:15px_15px] opacity-35 lg:block"
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
              <ArrowRight size={18} />
            </NavLink>

            <a
              href="/nexovora-brochure.pdf"
              download
              className="focus-visible-ring inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600"
            >
              <Download size={18} />
              Download Brochure
            </a>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-4 border-t border-slate-200 pt-7 sm:grid-cols-4">
            {aboutStats.map(({ value, label, icon: Icon }) => (
              <div key={label}>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={19} />
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
        >
          <WorkspaceIllustration />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutHero;