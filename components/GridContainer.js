import { motion, AnimatePresence } from "framer-motion";

export default function GridContainer(props) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      className="grid grid-cols-12 gap-4 md:gap-6 relative"
    >
      {props.children}
    </motion.section>
  );
}
