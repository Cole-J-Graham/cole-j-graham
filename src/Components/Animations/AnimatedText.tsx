import './AnimatedText.scss';
import { motion } from 'framer-motion';

const AnimatedText = (props:any) => {
    return (
        <motion.h2
            className="side-animation"
                style={{
                    top: props.top,
                }}
                animate={{
                    x: 3000,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                }}
                transition={{ 
                    repeat: Infinity, 
                    duration: 30, 
                    ease: "linear",
                    delay: props.delay
                }}
            > {props.text}
        </motion.h2>
    )
}

export default AnimatedText;