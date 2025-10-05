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
            icon: <TbChessQueen />,
            text: 'Built a full chess engine from scratch with minimax, alpha-beta pruning, and memoization at 16',
        },
        {
            icon: <BiCameraMovie />,
            text: 'Built TEMDB, a semantic Egyptian movie database (Next.js, Prisma, pgvector, Cloudflare R2)',
        },
        {
            icon: <SiLeetcode />,
            text: 'Solved 240+ LeetCode problems to sharpen problem-solving',
        },
        {
            icon: <MdWorkHistory />,
            text: 'Works 8–10 hours a day purely out of passion, not obligation',
        },
        {
            icon: <SiMonkeytype />,
            text: '232 WPM typing speed',
        },
        {
            icon: <WiSunrise />,
            text: 'Early riser — prefers dawn aesthetics and silent focus',
        },
        {
            icon: <AiOutlineStock />,
            text: 'Building for long-term impact, not quick wins',
        },
        {
            icon: <FiTarget />,
            text: 'Can spend hours perfecting one animation',
        },
        {
            icon: <FaLeaf />,
            text: 'Uses typing as meditation',
        },
    ]


    return (
        <>
            {/* Hero Desktop */}
            <section className="h-screen pt-20 overflow-hidden relative">

                {/* <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, ease: CUBIC_BEIZER }}
                    src="/Banner/OpacityGraind.png" className="absolute inset-0 z-1 pointer-events-none" /> */}

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

                {/* <div className="h-full flex items-center justify-start md:justify-center z-5 bg-transparent">
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
                </div> */}

                <div className='responsive-container'>
                    <h1 className='text-7xl text-white font-bold'>Omar Emad <span className='text-xl font-medium'>OM3X4</span></h1>
                    <p className='text-lg text-muted font-medium'>17 y/o self-taught developer building clean, fast, and meaningful products.</p>
                </div>

                <div className='responsive-container my-10'>
                    <ul className='space-y-3 pl-5'>
                        {points.map(({ icon, text }) => (
                            <li key={text} className='text-white text-medium flex items-center gap-1'>
                                {icon}
                                {text}
                            </li>
                        ))}
                    </ul>
                </div>

            </section>

            {/* Hero Mobile */}
            {/* <section className="h-screen overflow-hidden relative md:hidden flex items-center justify-start px-5">
                <div className="py-20">
                    <h1 className="text-7xl text-white">HI</h1>
                    <h1 className="text-7xl text-white">IAM</h1>
                    <h1 className="text-2xl text-muted">or Omar Emad</h1>
                    <h1 className="text-7xl text-white">OM3X4</h1>
                </div>
            </section> */}
        </>
    )
}
