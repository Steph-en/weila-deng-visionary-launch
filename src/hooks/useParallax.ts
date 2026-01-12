import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ParallaxConfig {
  offset?: [string, string];
  backgroundSpeed?: number;
  foregroundSpeed?: number;
  opacityRange?: [number, number];
}

interface ParallaxReturn {
  ref: React.RefObject<HTMLElement>;
  backgroundY: MotionValue<string>;
  foregroundY: MotionValue<string>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
}

export const useParallax = ({
  offset = ["start start", "end start"],
  backgroundSpeed = 0.3,
  foregroundSpeed = 0.15,
  opacityRange = [1, 0.3],
}: ParallaxConfig = {}): ParallaxReturn => {
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as ["start start", "end start"],
  });

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${backgroundSpeed * 100}%`]
  );

  const foregroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${foregroundSpeed * 100}%`]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.8], opacityRange);
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return {
    ref,
    backgroundY,
    foregroundY,
    opacity,
    scale,
  };
};
