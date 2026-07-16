import { motion, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  Lightbulb,
  MessageCircle,
  UserRound,
} from "lucide-react";

function FounderIllustration() {
  return (
    <div className="relative mx-auto max-w-md">
      <div
        className="absolute -left-5 -top-5 h-24 w-24 rounded-3xl bg-blue-100"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-100 p-8 shadow-[0_24px_60px_rgba(8,26,58,0.12)]">
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/20">
          <UserRound size={52} />
        </div>

        <p className="font-heading mt-6 text-center text-xl font-bold text-slate-950">
          Founder — Nexovora
        </p>

        <p className="mt-2 text-center text-sm text-slate-500">
          Building a trusted digital services brand
        </p>

        <div className="mt-7 grid gap-3">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3">
            <Lightbulb size={18} className="text-blue-600" />
            <span className="text-sm font-medium text-slate-700">
              Long-term vision
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3">
            <MessageCircle size={18} className="text-blue-600" />
            <span className="text-sm font-medium text-slate-700">
              Clear communication
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3">
            <CheckCircle2 size={18} className="text-blue-600" />
            <span className="text-sm font-medium text-slate-700">
              Careful delivery
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FounderSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-white">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.65,
          ease: "easeOut",
        }}
        className="section-container"
      >
        <div className="grid items-center gap-12 rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-10 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <FounderIllustration />

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Founder
            </p>

            <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Built With a Long-Term Vision
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Nexovora is being built with the goal of creating a reliable
              digital services brand that combines design, development, quality
              assurance, hosting, branding, and professional support under one
              identity.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              The approach is simple: understand the client&apos;s needs,
              communicate clearly, deliver carefully, and improve with every
              project.
            </p>

            <div className="mt-7 inline-flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">
              Founder — Nexovora
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default FounderSection;