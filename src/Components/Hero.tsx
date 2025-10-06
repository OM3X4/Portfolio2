import { FaLeaf } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { AiOutlineStock } from "react-icons/ai";
import { WiSunrise } from "react-icons/wi";
import { MdWorkHistory } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { BiCameraMovie } from "react-icons/bi";
import { SiMonkeytype } from "react-icons/si";
import { TbChessQueen } from "react-icons/tb";
import { AiOutlineBuild } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { GiGears } from "react-icons/gi";
import { GiEgyptianSphinx } from 'react-icons/gi'
import { motion } from 'framer-motion'
import { CUBIC_BEIZER } from '../config'

export default function Hero() {


    const points = [
        {
            icon: <GiGears />,
            text: 'Obsessed with systems, logic, and speed',
        },
        {
            icon: <BiTimeFive />,
            text: 'Started coding at 15 — never stopped since',
        },
        {
            icon: <AiOutlineBuild />,
            text: 'Prefers building over talking',
        },
        {
            icon: <TbChessQueen className="text-[#80b54b]" />,
            text: 'Built a full chess engine from scratch with minimax, alpha-beta pruning, and memoization at 16',
        },
        {
            icon: <BiCameraMovie />,
            text: 'Built TEMDB, a semantic Egyptian movie database (Next.js, Prisma, pgvector, Cloudflare R2)',
        },
        {
            icon: <SiLeetcode className="text-[#f79e1a]" />,
            text: 'Solved 240+ LeetCode problems to sharpen problem-solving',
        },
        {
            icon: <MdWorkHistory />,
            text: 'Works 8–10 hours a day purely out of passion, not obligation',
        },
        {
            icon: <SiMonkeytype className="text-[#deb514]" />,
            text: '232 WPM typing speed',
        },
        {
            icon: <WiSunrise />,
            text: 'Early riser — prefers dawn aesthetics and silent focus',
        },
        {
            icon: <AiOutlineStock className="text-green-500" />,
            text: 'Building for long-term impact, not quick wins',
        },
        {
            icon: <FiTarget />,
            text: 'Can spend hours perfecting one animation',
        },
        {
            icon: <FaLeaf className="text-green-500" />,
            text: 'Uses typing as meditation',
        },
    ]


    return (
        <section className=" pt-20 overflow-hidden relative">

            {/* <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, ease: CUBIC_BEIZER }}
                    src="/Banner/OpacityGraind.png" className="absolute inset-0 z-1 pointer-events-none" /> */}

            {/* Based In Egypt */}
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 1.6, duration: 0.5, ease: CUBIC_BEIZER }}
                viewport={{ once: false, amount: 1 }}
                className="absolute hidden md:flex z-5 top-1/4 left-0 w-50 h-20 bg-secondary-background rounded-r-full items-center justify-end px-3">
                <h3 className="text-muted text-wrap text-lg font-medium w-fit ">Based In Egypt</h3>
                <div
                    className="h-[80%] aspect-square bg-white rounded-full flex items-center justify-center p-3">
                    <GiEgyptianSphinx className="w-full h-full text-golden" />
                </div>
            </motion.div>

            <div className='responsive-container'>
                <motion.h1
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.6, ease: CUBIC_BEIZER }}
                    viewport={{ once: true, amount: 0.1 }}
                    className='text-7xl text-white font-bold overflow-hidden'>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6, ease: CUBIC_BEIZER }}
                        >
                            Omar Emad <span className='text-xl font-medium'>OM3X4</span>
                        </motion.div>
                </motion.h1>
                {
                    "17 y/o self-taught developer building clean, fast, and meaningful products."
                        .split(" ").map((word, i) => {
                            return (
                                <motion.span
                                    viewport={{ once: true }}
                                    key={i}
                                    initial="initial"
                                    whileInView="view"
                                    className="inline-block w-fit h-fit overflow-hidden text-lg text-muted font-medium">
                                    <motion.div
                                        viewport={{ once: true }}
                                        variants={{
                                            initial: { y: 30 },
                                            view: { y: 0 }
                                        }}
                                        transition={{ delay: 1.3 + 0.02 * i, duration: 0.8, ease: CUBIC_BEIZER }}
                                        className="">
                                        {word}
                                        {`\u00A0`}
                                    </motion.div>
                                </motion.span>
                            )
                        })
                }
            </div>

            <div className='responsive-container my-10'>
                <ul className='space-y-3 pl-5'>
                    {points.map(({ icon, text } , index) => (
                        <motion.li
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2 + index * 0.05, duration: 0.6, ease: CUBIC_BEIZER }}
                            viewport={{ once: true, amount: 0.1 }}
                            key={text}
                            className='text-white text-medium flex items-center gap-3'>
                                <span className="text-2xl">{icon}</span>
                                {text}
                        </motion.li>
                    ))}
                </ul>
            </div>

        </section>
    )
}
