import { useRef } from 'react'
import type { JSX } from 'react'
import { motion } from 'framer-motion'
import { GiEgyptianSphinx , GiEgyptianWalk } from "react-icons/gi";
import { cubicBezier } from 'framer-motion';
import { BiChevronsDown } from "react-icons/bi";
import { SiLeetcode , SiMonkeytype } from 'react-icons/si';


function Home({ links , skills }: { links: { leetcode: string , monkeytype: string }, skills: { name: string; icon: JSX.Element; color: string }[] }) {

    const homeRef = useRef(null)
    const aboutRef = useRef(null)

    const CUBIC_BEIZER_MINE = cubicBezier(0.6, 0.05, 0, 0.9)

    const CUBIC_BEIZER = CUBIC_BEIZER_MINE

    return (
        <main className="w-screen h-screen overflow-x-hidden bg-background overflow-y-scroll md:snap-y md:snap-mandatory">

            {/* Hero Desktop */}
            <section className="h-screen overflow-hidden relative snap-start hidden md:block bg-center bg-no-repeat" ref={homeRef} >

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

                <div className="h-full flex items-center justify-start md:justify-center z-5">
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
            <section className="h-screen overflow-hidden relative md:hidden flex items-center justify-start px-5" >
                <div className="py-20">
                    <h1 className="text-7xl text-white">HI</h1>
                    <h1 className="text-7xl text-white">IAM</h1>
                    <h1 className="text-2xl text-muted">or Omar Emad</h1>
                    <h1 className="text-7xl text-white">OM3X4</h1>
                </div>
            </section>

            <section className="h-screen space-y-5 overflow-hidden relative py-20 px-8 snap-start">
                <div className="grid lg:grid-cols-2 w-full h-fit overflow-hidden gap-15">
                    <div className="text-muted text-3xl sm:text-3xl md:text-4xl lg:text-5xl self-end">
                        <motion.h1
                            initial={{ opacity: 0, y: 40, rotate: 12 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ duration: 0.6, ease: CUBIC_BEIZER }}
                            viewport={{ once: false, amount: 0.1 }}
                            className="text-muted origin-left overflow-hidden"
                        >
                            I’m <span className="text-white">Omar Emad</span>, <span className="text-white">17 (2008)</span>.
                        </motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, y: 40, rotate: 12 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ delay: 0.1, duration: 0.6, ease: CUBIC_BEIZER }}
                            viewport={{ once: false, amount: 0.1 }}
                            className="text-muted origin-left overflow-hidden"
                        >
                            A high schooler into <span className="text-white">chess</span>, Rubik’s cubes,
                            and building things.
                            <span className="text-white">Self-taught</span>, performance-driven,
                            and <span className="text-white">fast</span> on the keyboard.
                        </motion.h1>
                    </div>
                    <div className="grid grid-cols-3 grid-rows-2 lg:grid-rows-3 gap-5 h-fit">
                        {/* Egypt */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: CUBIC_BEIZER }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="w-full h-full bg-secondary-background rounded-2xl hidden lg:flex items-center justify-center p-3">
                            <GiEgyptianWalk className="text-5xl text-golden" />
                        </motion.div>

                        {/* Leetcode */}
                        <motion.div
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6, ease: CUBIC_BEIZER }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="w-full h-full bg-secondary-background rounded-2xl flex flex-col items-center justify-center gap-3 p-3">
                            <span className="text-white text-2xl md:text-4xl font-semibold">238+</span>
                            <a href={links.leetcode} target="_blank"><SiLeetcode className="text-2xl text-golden" /></a>
                        </motion.div>

                        {/* Monkeytype */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7, duration: 0.6, ease: CUBIC_BEIZER }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="w-full h-full bg-secondary-background rounded-2xl flex flex-col items-center justify-center gap-3 p-3">
                            <span className="text-white text-2xl text-center md:text-4xl font-semibold">216+ <span className="text-muted text-base font-normal">WPM</span></span>
                            <a href={links.monkeytype} target="_blank" rel="noopener noreferrer"><SiMonkeytype className="text-2xl text-golden" /></a>
                        </motion.div>

                        {/* Starting Date */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6, ease: CUBIC_BEIZER }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="w-full h-full bg-secondary-background rounded-2xl flex flex-col items-center justify-center p-3">
                            <span className="text-muted text-base text-center md:text-3xl font-medium">Dev Since</span>
                            <h1 className="text-white text-center text-2xl md:text-3xl font-semibold">2024</h1>
                        </motion.div>

                        {/* Availabilty */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9, duration: 0.6, ease: CUBIC_BEIZER }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="w-full h-full bg-secondary-background rounded-2xl flex flex-col items-center justify-center p-3 lg:col-span-2">
                            <h1 className="text-white text-center text-xl md:text-3xl font-semibold">Open To Work</h1>
                        </motion.div>

                        {/* Scroll to see the work */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6, ease: CUBIC_BEIZER }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="w-full h-full bg-secondary-background rounded-2xl hidden lg:flex flex-col items-center justify-center p-3">
                            <h1 className="text-white text-xl text-center">Scroll To See My Projects</h1>
                            <div
                                className="text-white text-2xl flex flex-col items-center justify-center"
                            >
                                <BiChevronsDown className="animate-pulse " />
                            </div>
                        </motion.div>

                        {/* Full Stack */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: CUBIC_BEIZER }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="w-full h-full bg-secondary-background rounded-2xl flex flex-col items-center justify-center p-3 col-span-2">
                            <h1 className="text-white text-center text-2xl md:text-3xl font-semibold">Full Stack Developer <span className="text-muted text-base">Temporarily</span></h1>
                        </motion.div>


                    </div>
                </div>
                <div className="w-fit mx-auto">
                    <div
                        className="w-fit flex items-center justify-center"
                    >
                        <h1 className="text-7xl sm:text-8xl xl:text-[200px] xl:leading-[200px] text-white">MY</h1>
                        <motion.div
                            initial={{ marginLeft: 100, marginRight: 100 }}
                            whileInView={{ marginLeft: 5, marginRight: 5 }}
                            transition={{ duration: 0.8, ease: CUBIC_BEIZER }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="w-4 h-4 sm:w-7 sm:h-7 bg-white rounded-full"></motion.div>
                        <h1 className="text-7xl sm:text-8xl xl:text-[200px] xl:leading-[200px] text-white">WORK</h1>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.6, duration: 0.6, ease: CUBIC_BEIZER }}
                        className="w-full flex items-center justify-between px-5">
                        <h4 className="text-muted font-jersey sm:text-2xl">REAL WORLD PROVE</h4>
                        <div
                            className="text-white text-2xl flex flex-col items-center justify-center"
                        >
                            <BiChevronsDown className="animate-pulse " />
                        </div>
                        <h4 className="text-muted font-jersey sm:text-2xl">DEVELOPED BY ME</h4>
                    </motion.div>
                </div>
            </section>

            <section className="h-screen w-screen text-9xl text-amber-50 snap-start py-10 md:py-0" ref={aboutRef} >
                <div className="w-fit mx-auto">
                    <div
                        className="w-fit flex items-center justify-center"
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-[200px] lg:leading-[200px] text-white">ABOUT</h1>
                        <motion.div
                            initial={{ marginLeft: 100, marginRight: 100 }}
                            whileInView={{ marginLeft: 5, marginRight: 5 }}
                            transition={{ duration: 0.8, ease: CUBIC_BEIZER }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="w-4 h-4 lg:w-7 lg:h-7 bg-white rounded-full"></motion.div>
                        <h1 className="text-6xl md:text-8xl lg:text-[200px] lg:leading-[200px] text-white">ME</h1>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.6, duration: 0.6, ease: CUBIC_BEIZER }}
                        className="w-full flex items-center justify-between px-5">
                        <h4 className="text-muted font-jersey text-2xl">Omar Emad</h4>
                        <div
                            className="text-white text-2xl flex flex-col items-center justify-center"
                        >
                            <BiChevronsDown className="animate-pulse " />
                        </div>
                        <h4 className="text-muted font-jersey text-2xl">The Real One</h4>
                    </motion.div>
                </div>
                <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-3 gap-5 mt-10">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.6, ease: CUBIC_BEIZER }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="w-full h-full bg-secondary-background rounded-2xl flex items-center justify-center px-10 py-3 col-span-3 md:col-span-2 text-xl">
                        Self-taught software engineer with strong experience in building full-stack digital products, passionate about clean code, performance, and creating tools that are both functional and impactful.
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.6, ease: CUBIC_BEIZER }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="w-full h-full bg-secondary-background rounded-2xl flex items-center justify-center px-10 py-3 text-3xl font-bold whitespace-pre-wrap col-span-3 md:col-span-1">
                        Always Learning, {"\n"}
                        Always Optimizing
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.6, ease: CUBIC_BEIZER }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="w-full h-full bg-secondary-background rounded-2xl flex items-start justify-center px-10 py-8 text-3xl font-bold whitespace-pre-wrap col-span-3 flex-col gap-5">
                        <h1>Stack</h1>
                        <div className="flex items-center justify-start gap-5 flex-wrap">
                            {
                                skills.map((skill) => (
                                    <div style={{ color: skill.color }} className="text-base">
                                        {skill.name}
                                    </div>
                                ))
                            }
                        </div>
                    </motion.div>
                </div>
            </section>

        </main >
    )
}

export default Home