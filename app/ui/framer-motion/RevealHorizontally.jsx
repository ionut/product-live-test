import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export const RevealHorizontally = ({ children, direction }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();



    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView])

    return (
        <motion.div
            ref={ref}
            className="bg-white py-10 px-5 rounded-[20px] relative shadow-cards h-full"
            variants={{
                hidden: { opacity: 0, x: direction },
                visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: .8, delay: .4 }}
        > {children}</motion.div>
    )
}
