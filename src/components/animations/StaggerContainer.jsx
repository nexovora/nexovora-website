import { motion, useReducedMotion } from "framer-motion";
import {
  reducedFadeVariant,
  staggerContainerVariant,
} from "../../utils/motionVariants";

function StaggerContainer({
  as = "div",
  delayChildren = 0,
  staggerChildren = 0.08,
  once = true,
  amount = 0.16,
  className = "",
  children,
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      variants={
        reduceMotion
          ? reducedFadeVariant
          : staggerContainerVariant({ delayChildren, staggerChildren })
      }
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export default StaggerContainer;
