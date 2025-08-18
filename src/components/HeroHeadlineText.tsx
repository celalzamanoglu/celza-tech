"use client";

import { motion, LayoutGroup } from "framer-motion";
import RotatingText from "./RotatingText";

type HeroHeadlineTextProps = {
  prefix: string;
  words: readonly string[];
};

const sharedTransition = {
  type: "spring",
  damping: 30,
  stiffness: 400,
} as const;

export default function HeroHeadlineText({ prefix, words }: HeroHeadlineTextProps) {
  return (
    <LayoutGroup>
      <motion.span layout className="inline" transition={sharedTransition}>
        {prefix}
        <motion.span layout className="relative inline-block" transition={sharedTransition}>
          <RotatingText
            texts={[...words]}
            mainClassName="px-2 sm:px-2 md:px-3 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={sharedTransition}
            rotationInterval={2000}
          />
          <motion.span layout aria-hidden="true" className="absolute left-full pl-2" transition={sharedTransition}>
            .
          </motion.span>
        </motion.span>
      </motion.span>
    </LayoutGroup>
  );
}
