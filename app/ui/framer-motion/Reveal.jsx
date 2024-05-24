import React from 'react'
import { motion } from 'framer-motion'

export const Reveal = ({ children }) => {


    return (
        <motion.div
            className="flex flex-col items-center gap-[10px]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        > {children}</motion.div>
    )
}