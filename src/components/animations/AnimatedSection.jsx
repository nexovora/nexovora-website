import FadeIn from "./FadeIn";

function AnimatedSection({
  as = "section",
  className = "",
  direction = "up",
  children,
}) {
  return (
    <FadeIn as={as} direction={direction} className={className}>
      {children}
    </FadeIn>
  );
}

export default AnimatedSection;
