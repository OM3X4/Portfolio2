import { motion } from "framer-motion"
import { BiChevronsDown } from "react-icons/bi"
import { CUBIC_BEIZER } from "../config"
import type { JSX } from "react"


export default function Skills({ skills }: { skills: { name: string, color: string , icon: JSX.Element}[] }) {


    return (
        <section className="h-screen w-screen text-9xl text-amber-50 snap-start py-10 md:py-0">
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
                    className="w-full h-full bg-secondary-background rounded-2xl flex items-center justify-center px-10 py-3 col-span-3 md:col-span-2 text-xl grid-shadow">
                    Self-taught software engineer with strong experience in building full-stack digital products, passionate about clean code, performance, and creating tools that are both functional and impactful.
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6, ease: CUBIC_BEIZER }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="w-full h-full bg-secondary-background rounded-2xl flex items-center justify-center px-10 py-3 text-3xl font-bold whitespace-pre-wrap col-span-3 md:col-span-1 grid-shadow">
                    Always Learning, {"\n"}
                    Always Optimizing
                </motion.div>
                <div className="grid grid-cols-10 col-span-3 gap-5">
                    {
                        skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + index * 0.05, duration: 0.6, ease: CUBIC_BEIZER }}
                                viewport={{ once: true, amount: 0.1 }}
                                style={{ color: skill.color }}
                                whileHover="hover"
                                className="grid-inner-block group cursor-pointer relative text-5xl text-white flex items-center justify-center text-center">
                                {skill.icon}
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 , transition: { duration: 0.3, ease: CUBIC_BEIZER } }}
                                    variants={{
                                        hover: { opacity: 1, y: -30 , transition: { duration: 0.3, ease: CUBIC_BEIZER } }
                                    }}
                                    className="absolute top-0 text-base text-nowrap bg-secondary-background px-2 py-1 rounded-md text-white font-medium">{skill.name}</motion.h5>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
