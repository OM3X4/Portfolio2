import { BiChevronsDown } from 'react-icons/bi'
import { GiEgyptianSphinx } from 'react-icons/gi'
import { motion } from 'framer-motion'
import { CUBIC_BEIZER } from '../config'

export default function Hero() {
    return (
        <>
            {/* Hero Desktop */}
            <section className="h-screen overflow-hidden relative snap-start hidden md:block bg-center bg-no-repeat">

                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, ease: CUBIC_BEIZER }}
                    src="/Banner/OpacityGraind.png" className="absolute inset-0 z-1 pointer-events-none" />

                {/* Based In Egypt */}
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ delay: 1.2, duration: 0.5, ease: CUBIC_BEIZER }}
                    viewport={{ once: false, amount: 1 }}
                    className="absolute hidden md:flex z-5 top-1/4 left-0 w-50 h-20 bg-secondary-background rounded-r-full items-center justify-end px-3">
                    <h3 className="text-muted text-wrap text-lg font-medium w-fit ">Based In Egypt</h3>
                    <div
                        className="h-[80%] aspect-square bg-white rounded-full flex items-center justify-center p-3">
                        <GiEgyptianSphinx className="w-full h-full text-golden" />
                    </div>
                </motion.div>

                <div className="h-full flex items-center justify-start md:justify-center z-5 bg-transparent">
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                        className="w-fit flex flex-col items-start md:items-center justify-center gap-5">
                        <h1 className="text-white text-5xl sm:text-8xl md:text-[130px] md:leading-[100px] lg:text-[180px] lg:leading-[130px] xl:text-[200px] xl:leading-[150px] font-medium tracking-widest overflow-hidden space-x-8">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: "0%" }}
                                transition={{ delay: 0.4, duration: 0.6, ease: CUBIC_BEIZER }}
                                className="inline-block"
                            >
                                HI</motion.span>
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: "0%" }}
                                transition={{ delay: 0.6, duration: 0.6, ease: CUBIC_BEIZER }}
                                className="md:inline-block hidden"
                            >
                                THERE</motion.span>
                        </h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6, ease: CUBIC_BEIZER }}
                            className="w-full flex items-center justify-between px-5">
                            <h4 className="text-muted font-jersey text-sm sm:text-2xl">Omar Emad</h4>
                            <h4 className="text-muted font-jersey text-sm sm:text-2xl">Software Engineer</h4>
                        </motion.div>
                        <h1 className="text-white text-5xl sm:text-8xl md:text-[130px] md:leading-[100px] lg:text-[180px] lg:leading-[130px] xl:text-[200px] xl:leading-[150px] font-medium tracking-tighter overflow-hidden space-x-8">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: "0%" }}
                                transition={{ delay: 1, duration: 0.6, ease: CUBIC_BEIZER }}
                                className="inline-block"
                            >
                                I</motion.span>
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: "0%" }}
                                transition={{ delay: 1.2, duration: 0.6, ease: CUBIC_BEIZER }}
                                className="inline-block"
                            >
                                AM</motion.span>
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: "0%" }}
                                transition={{ delay: 1.4, duration: 0.6, ease: CUBIC_BEIZER }}
                                className="inline-block"
                            >
                                OM3X4
                            </motion.span>
                        </h1>
                    </motion.div>
                    <div

                        className="text-white text-2xl absolute bottom-10 flex flex-col items-center justify-center"
                    >
                        <h1 className="text-xs font-thin">Scroll</h1>
                        <BiChevronsDown className="animate-pulse " />
                    </div>
                </div>

            </section>

            {/* Hero Mobile */}
            <section className="h-screen overflow-hidden relative md:hidden flex items-center justify-start px-5">
                <div className="py-20">
                    <h1 className="text-7xl text-white">HI</h1>
                    <h1 className="text-7xl text-white">IAM</h1>
                    <h1 className="text-2xl text-muted">or Omar Emad</h1>
                    <h1 className="text-7xl text-white">OM3X4</h1>
                </div>
            </section>
        </>
    )
}
