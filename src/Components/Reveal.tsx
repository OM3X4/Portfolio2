import { motion } from "framer-motion";
import { CUBIC_BEIZER } from "../config";

export default function Reveal({
  children,
  delay,
  duration,
  distance,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance ?? 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: delay ?? 0.3,
        duration: duration ?? 0.6,
        ease: CUBIC_BEIZER,
      }}
    >
      {children}
    </motion.div>
  );
}
