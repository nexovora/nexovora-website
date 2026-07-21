import {
  BadgeCheck,
  CalendarDays,
  Layers3,
  ListChecks,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import StaggerContainer from "../animations/StaggerContainer";
import { cardHover, fadeInVariant } from "../../utils/motionVariants";

const stats = [
  {
    value: "6",
    label: "Core Digital Services",
    icon: Layers3,
  },
  {
    value: "7 Days",
    label: "Client Communication",
    icon: CalendarDays,
  },
  {
    value: "1",
    label: "Clear Project Process",
    icon: ListChecks,
  },
  {
    value: "0",
    label: "Hidden Service Charges",
    icon: BadgeCheck,
  },
];

function StatsBar() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="pb-16">
      <div className="section-container">
        <StaggerContainer className="grid overflow-hidden rounded-3xl bg-gradient-to-r from-[#06142E] to-[#0B2A63] p-6 text-white shadow-xl shadow-blue-950/10 sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
          {stats.map(({ value, label, icon: Icon }, index) => (
            <motion.div
              key={label}
              variants={
                reduceMotion
                  ? undefined
                  : fadeInVariant({ direction: "up", distance: 16 })
              }
              whileHover={reduceMotion ? undefined : cardHover}
              className={`flex items-center gap-4 px-4 py-5 ${
                index > 0 ? "lg:border-l lg:border-white/10" : ""
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-300">
                <Icon size={23} />
              </div>

              <div>
                <p className="font-heading text-2xl font-bold">{value}</p>
                <p className="mt-1 text-xs text-blue-100">{label}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export default StatsBar;
