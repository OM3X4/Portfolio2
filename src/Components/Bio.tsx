import { CUBIC_BEIZER } from '../config'
import { GiEgyptianWalk } from 'react-icons/gi'
import { SiLeetcode, SiMonkeytype } from 'react-icons/si'
import { BiChevronsDown } from 'react-icons/bi'
import { motion } from 'framer-motion'



export default function Bio({ links }: { links: { leetcode: string, monkeytype: string } }) {
    return (
        <section className="space-y-5 overflow-hidden relative py-20 px-8 snap-start">
            <div className="grid lg:grid-cols-2 w-full h-fit overflow-hidden gap-15">
                <div className="text-muted text-3xl sm:text-3xl md:text-4xl lg:text-5xl self-end">
                    <motion.h1
                        initial={{ opacity: 0, y: 40, rotate: 12 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ duration: 0.6, ease: CUBIC_BEIZER }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="text-muted origin-left overflow-hidden"
                    >
                        I’m <span className="text-white">Omar Emad</span>, <span className="text-white">17 (2008)</span>.
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, y: 40, rotate: 12 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ delay: 0.1, duration: 0.6, ease: CUBIC_BEIZER }}
                        viewport={{ once: true, amount: 0.1 }}
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
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid-inner-block">
                        <GiEgyptianWalk className="text-5xl text-golden" />
                    </motion.div>

                    {/* Leetcode */}
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6, ease: CUBIC_BEIZER }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid-inner-block gap-3">
                        <span className="text-white text-2xl md:text-4xl font-semibold">238+</span>
                        <a href={links.leetcode} target="_blank"><SiLeetcode className="text-2xl text-golden" /></a>
                    </motion.div>

                    {/* Monkeytype */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 0.6, ease: CUBIC_BEIZER }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid-inner-block gap-3">
                        <span className="text-white text-2xl text-center md:text-4xl font-semibold">225+ <span className="text-muted text-base font-normal">WPM</span></span>
                        <a href={links.monkeytype} target="_blank" rel="noopener noreferrer"><SiMonkeytype className="text-2xl text-golden" /></a>
                    </motion.div>

                    {/* Starting Date */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6, ease: CUBIC_BEIZER }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid-inner-block">
                        <span className="text-muted text-base text-center md:text-3xl font-medium">Dev Since</span>
                        <h1 className="text-white text-center text-2xl md:text-3xl font-semibold">2024</h1>
                    </motion.div>

                    {/* Availabilty */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9, duration: 0.6, ease: CUBIC_BEIZER }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid-inner-block lg:col-span-2">
                        <h1 className="text-white text-center text-xl md:text-3xl font-semibold">Open To Work</h1>
                    </motion.div>

                    {/* Scroll to see the work */}
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        whileHover="hover"
                        variants={{
                            initial: { opacity: 0, y: 40 , transition: { duration: 0.6, ease: CUBIC_BEIZER } },
                            whileInView: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.6, ease: CUBIC_BEIZER } },
                            hover: { scale: 1.05 ,backgroundColor: "var(--color-golden)" , transition: { delay: 0, duration: 0.3, ease: CUBIC_BEIZER } }
                        }}
                        transition={{ ease: CUBIC_BEIZER }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid-inner-block cursor-pointer">
                        <h1 className="text-white text-xl text-center">Scroll To See My Projects</h1>
                        <div
                            className="text-white text-2xl flex flex-col items-center justify-center"
                        >
                            <BiChevronsDown className="animate-pulse" />
                        </div>
                    </motion.div>

                    {/* Full Stack */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: CUBIC_BEIZER }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid-inner-block col-span-2">
                        <h1 className="text-white text-center text-2xl md:text-3xl font-semibold">Full Stack Developer <span className="text-muted text-base">Temporarily</span></h1>
                    </motion.div>


                </div>
            </div>

        </section>
    )
}
