import { config } from "@components/animationSlide/config";
import { useXPoint } from "@components/animationSlide/slideLeftRight/hooks/useXPoint";
import type { AnimationSlideProps } from "@components/animationSlide/slideLeftRight/types";
import { motion } from "framer-motion";
import type React from "react";
import { useInView } from 'react-intersection-observer';

export const AnimationSlide: React.FC<React.PropsWithChildren & AnimationSlideProps> = ({ children, direction = 'left' }) => {
    const { xPoint } = useXPoint({ direction })
    const { ref, inView } = useInView(config)
    return (
        <motion.div
            ref={ref}
            initial={{ x: xPoint, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: xPoint, opacity: 0 }}
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20
            }}
        >
            {children}
        </motion.div>
    )
}