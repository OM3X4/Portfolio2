import { MdCake } from "react-icons/md";
import { CUBIC_BEIZER } from '../config'
import { GiEgyptianWalk } from 'react-icons/gi'
import { SiLeetcode, SiMonkeytype } from 'react-icons/si'
import { BiChevronsDown } from 'react-icons/bi'
import { PiHandshakeBold } from "react-icons/pi";
import { motion } from 'framer-motion'



export default function Bio({ links }: { links: { leetcode: string, monkeytype: string } }) {
    return (
        <section className="space-y-5 overflow-hidden relative py-10 snap-start">
            <motion.div
                initial="initial"
                whileInView="view"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-3 grid-rows-2 lg:grid-rows-3 gap-5 h-fit responsive-container">
                {/* Egypt */}
                <motion.div
                    variants={{
                        initial: { opacity: 0, x: -40 },
                        view: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6, ease: CUBIC_BEIZER }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid-inner-block">
                    <GiEgyptianWalk className="text-5xl text-golden" />
                </motion.div>

                {/* Leetcode */}
                <motion.div
                    variants={{
                        initial: { opacity: 0, y: -40 },
                        view: { opacity: 1, y: 0 },
                    }}
                    transition={{ delay: 0.5, duration: 0.6, ease: CUBIC_BEIZER }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid-inner-block gap-3">
                    <span className="text-white text-2xl md:text-4xl font-semibold">238+</span>
                    <a href={links.leetcode} target="_blank"><SiLeetcode className="text-2xl text-golden" /></a>
                </motion.div>

                {/* Monkeytype */}
                <motion.div
                    variants={{
                        initial: { opacity: 0, x: 40 },
                        view: { opacity: 1, x: 0 },
                    }}
                    transition={{ delay: 0.7, duration: 0.6, ease: CUBIC_BEIZER }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid-inner-block gap-3">
                    <span className="text-white text-2xl text-center md:text-4xl font-semibold">232+ <span className="text-muted text-base font-normal">WPM</span></span>
                    <a href={links.monkeytype} target="_blank" rel="noopener noreferrer"><SiMonkeytype className="text-2xl text-golden" /></a>
                </motion.div>

                {/* Starting Date */}
                <motion.div
                    variants={{
                        initial: { opacity: 0, x: -40 },
                        view: { opacity: 1, x: 0 },
                    }}
                    transition={{ delay: 0.3, duration: 0.6, ease: CUBIC_BEIZER }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid-inner-block">
                    <span className="text-muted text-base text-center md:text-3xl font-medium">Dev Since</span>
                    <h1 className="text-white text-center text-2xl md:text-3xl font-semibold">2024</h1>
                </motion.div>

                {/* Full Stack */}
                <motion.div
                    variants={{
                        initial: { opacity: 0, y: 40 },
                        view: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6, ease: CUBIC_BEIZER }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid-inner-block col-span-2">
                    <h1 className="text-white text-center text-2xl md:text-3xl font-semibold">Full Stack Developer <span className="text-muted text-base">Temporarily</span></h1>
                </motion.div>

                {/* Availabilty */}
                <motion.div
                    variants={{
                        initial: { opacity: 0, x: -40 },
                        view: { opacity: 1, x: 0 },
                    }}
                    transition={{ delay: 0.9, duration: 0.6, ease: CUBIC_BEIZER }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid-inner-block">
                    <PiHandshakeBold className="text-white text-2xl" />
                    <h1 className="text-white text-center text-xl md:text-3xl font-semibold">Open To Work</h1>
                </motion.div>

                {/* Age */}
                <motion.div
                    variants={{
                        initial: { opacity: 0, y: 40 },
                        view: { opacity: 1, y: 0 },
                    }}
                    transition={{ delay: 0.9, duration: 0.6, ease: CUBIC_BEIZER }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid-inner-block">
                    <MdCake className="text-white text-2xl" />
                    <h1 className="text-white text-center text-xl md:text-3xl font-semibold">2008</h1>
                </motion.div>

                {/* Scroll to see the work */}
                <motion.div
                    whileHover="hover"
                    variants={{
                        initial: { opacity: 0, y: 40, transition: { duration: 0.6, ease: CUBIC_BEIZER } },
                        view: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.6, ease: CUBIC_BEIZER } },
                        hover: { scale: 1.05, backgroundColor: "var(--color-golden)", transition: { delay: 0, duration: 0.3, ease: CUBIC_BEIZER } }
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

            </motion.div>
        </section>
    )
}
