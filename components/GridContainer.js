import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export default function GridContainer(props) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      className={twMerge(
        'w-full z-10 grid grid-cols-12 grid-gap relative z-10 max-w-8xl',

        props.footerSpacing,
        props.className
      )}
    >
      {props.children}
    </motion.section>
  );
}
