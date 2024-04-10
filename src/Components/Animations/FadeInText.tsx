import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className: string;
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const FadeInText = ({
  text,
  el: Wrapper = "p",
  className,
}: AnimatedTextProps) => {
  return (
    <Wrapper className={className}>
        <span className="sr-only">{text}</span>
        <motion.span 
        initial="hidden" 
        animate="visible" 
        transition={{staggerChildren: 0.05}}
        aria-hidden
        >
        {text.split("").map((char) => (
          <motion.span variants={defaultAnimations}>{char}</motion.span>
        ))}
        </motion.span>
      </Wrapper>
  );
};

export default FadeInText;