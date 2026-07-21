import { Quote } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { testimonialsData } from "../../data/testimonialsData";
import FadeIn from "../animations/FadeIn";
import StaggerContainer from "../animations/StaggerContainer";
import { cardHover, fadeInVariant } from "../../utils/motionVariants";

function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Client Feedback
          </p>

          <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            Verified Reviews Coming Soon
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Genuine testimonials will be published here as Nexovora completes
            client projects and receives permission to share feedback.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonialsData.map((testimonial) => (
            <motion.article
              key={testimonial.id}
              variants={
                reduceMotion
                  ? undefined
                  : fadeInVariant({ direction: "up", distance: 18 })
              }
              whileHover={reduceMotion ? undefined : cardHover}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.05)] transition-shadow hover:shadow-[0_18px_46px_rgba(15,23,42,0.08)]"
            >
              <Quote size={34} className="text-blue-600" />

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {testimonial.quote}
              </p>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="font-heading font-bold text-slate-950">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {testimonial.role}
                </p>
              </div>
            </motion.article>
          ))}
        </StaggerContainer>

        <div className="mt-8 flex justify-center gap-2" aria-hidden="true">
          <span className="h-2 w-7 rounded-full bg-blue-600" />
          <span className="h-2 w-2 rounded-full bg-blue-200" />
          <span className="h-2 w-2 rounded-full bg-blue-200" />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
