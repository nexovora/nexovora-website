import { motion, useReducedMotion } from "framer-motion";
import { includedFeatures } from "../../data/pricingPageData";
import FadeIn from "../animations/FadeIn";
import StaggerContainer from "../animations/StaggerContainer";
import { fadeInVariant } from "../../utils/motionVariants";

function IncludedFeatures() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="pb-16">
      <div className="section-container">
        <FadeIn className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-7 sm:p-9">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Standard Benefits
            </p>

            <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950">
              All Packages Include
            </h2>
          </div>

          <StaggerContainer className="mt-9 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
            {includedFeatures.map(({ label, icon: Icon }, index) => (
              <motion.div
                key={label}
                variants={
                  reduceMotion
                    ? undefined
                    : fadeInVariant({ direction: "up", distance: 14 })
                }
                className={`text-center ${
                  index > 0 ? "lg:border-l lg:border-slate-200" : ""
                }`}
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                  <Icon size={20} />
                </div>

                <p className="mt-3 text-sm font-semibold leading-5 text-slate-800">
                  {label}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </FadeIn>
      </div>
    </section>
  );
}

export default IncludedFeatures;
