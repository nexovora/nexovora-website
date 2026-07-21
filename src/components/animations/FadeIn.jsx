import { motion, useReducedMotion } from "framer-motion";
import {
  fadeInVariant,
  reducedFadeVariant,
} from "../../utils/motionVariants";

function FadeIn({
  as = "div",
  direction = "up",
  delay = 0,
  duration = 0.55,
  distance = 22,
  once = true,
  amount = 0.18,
  className = "",
  children,
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  const baseVariant = fadeInVariant({ direction, distance, duration });
  const variants = reduceMotion
    ? reducedFadeVariant
    : {
        ...baseVariant,
        visible: {
          ...baseVariant.visible,
          transition: {
            ...baseVariant.visible.transition,
            delay,
          },
        },
      };

  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export default FadeIn;
