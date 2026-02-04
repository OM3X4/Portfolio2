import { BiChevronDown } from "react-icons/bi";
import { GiEgyptianSphinx } from 'react-icons/gi'
import { motion } from 'framer-motion'
import { CUBIC_BEIZER } from '../config'

export default function Hero() {


    return (
        <section className=" overflow-hidden relative h-screen">

            {/* Based In Egypt */}
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 1.6, duration: 0.5, ease: CUBIC_BEIZER }}
                viewport={{ once: false, amount: 1 }}
                className="absolute hidden lg:flex z-5 top-1/4 left-0 w-45 h-20 bg-secondary-background rounded-r-full items-center justify-end px-3">
                <h3 className="text-muted text-wrap text-lg font-medium w-fit ">Based In Egypt</h3>
                <div
                    className="h-[80%] aspect-square bg-white rounded-full flex items-center justify-center p-3">
                    <GiEgyptianSphinx className="w-full h-full text-golden" />
                </div>
            </motion.div>

            <div className="w-[50vw] mx-auto flex flex-col gap-1 items-center justify-center h-full">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: CUBIC_BEIZER }}
                    className="text-7xl text-white font-black ">OMAR EMAD</motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: CUBIC_BEIZER }}
                    className="text-muted text-lg text-center w-[80%]">Independent software engineer, 18.
                    Focused on systems and performance.
                    Builds end-to-end systems and web applications.</motion.p>
                <motion.h5
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6, ease: CUBIC_BEIZER }}
                    className="text-text text-center text-2xl font-medium">Rust | Typescript | Databases</motion.h5>
                <div className="flex flex-col items-center justify-center mt-10">
                    <span className="text-muted leading-none">Scroll down</span>
                    <BiChevronDown className="text-muted text-2xl animate-pulse" />
                </div>
            </div>


        </section>
    )
}
