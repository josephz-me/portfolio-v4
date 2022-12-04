import { motion, AnimatePresence } from "framer-motion";

export default function GridContainer(props) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      className={`z-10 grid grid-cols-12 gap-8 md:gap-6 relative z-10 ${props.footerSpacing}`}
    >
      {props.children}
    </motion.section>
  );
}
