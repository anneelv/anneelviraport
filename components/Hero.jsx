import React from "react";
import { motion } from 'framer-motion'

// this component will be used in multiple pages

const Hero = ({heading, message}) => {
    return (
        <div className = 'flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
            {/* Overlay */}
            <div className = 'absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]' />
            <div className = 'p-5 text-white z-[2] mt-[10rem]'>
                <motion.div initial='hidden' animate='visible' variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: .4
                    }
                  },
             }}>
                <h2 className = 'text-5xl font-bold'>{heading}</h2>
                <p className = 'py-5 text-xl'>{message}</p>
                <button className = 'px-8 py-2 border'>Book</button>

             </motion.div>
            </div>  
        </div>
    )
}

export default Hero;