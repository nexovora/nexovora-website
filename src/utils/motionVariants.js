export const easeOutExpo = [0.22, 1, 0.36, 1];

export function fadeInVariant({
  direction = "up",
  distance = 22,
  duration = 0.55,
} = {}) {
  const offset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  }[direction];

  return {
    hidden: {
      opacity: 0,
      ...offset,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: easeOutExpo,
      },
    },
  };
}

export const reducedFadeVariant = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

export function staggerContainerVariant({
  delayChildren = 0,
  staggerChildren = 0.08,
} = {}) {
  return {
    hidden: {},
    visible: {
      transition: {
        delayChildren,
        staggerChildren,
      },
    },
  };
}

export const cardHover = {
  y: -5,
  scale: 1.01,
  transition: {
    duration: 0.22,
    ease: easeOutExpo,
  },
};

export const buttonHover = {
  y: -2,
  scale: 1.02,
  transition: {
    duration: 0.18,
    ease: easeOutExpo,
  },
};

export const buttonTap = {
  scale: 0.98,
  transition: {
    duration: 0.15,
    ease: easeOutExpo,
  },
};
