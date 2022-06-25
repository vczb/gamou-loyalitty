import { ReactNode, memo } from "react";
import { motion } from "framer-motion";

type MotionTransitionProps = {
  children: ReactNode | string | null;
};

const MotionTransition = ({ children }: MotionTransitionProps) => (
  <motion.div
    // initial={{ width: 0 }}
    // animate={{ width: "100%" }}
    // exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.5 } }}
    // transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default memo(MotionTransition);
