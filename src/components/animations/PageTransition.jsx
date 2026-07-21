import { motion, useReducedMotion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { easeOutExpo } from "../../utils/motionVariants";

function PageTransition({ children }) {
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      key={pathname}
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.42, ease: easeOutExpo }
      }
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
