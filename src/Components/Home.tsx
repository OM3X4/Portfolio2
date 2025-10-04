import Hero from "./Hero";
import Bio from "./Bio";
import Skills from "./Skills";
import type { JSX } from "react";
import Projects from "./Projects";
import type { ProjectType } from "../types";


export default function Home({ links, skills, projects, changePath }:
    {
        links: { leetcode: string, monkeytype: string },
        skills: { name: string; icon: JSX.Element; color: string }[],
        projects: ProjectType[],
        changePath: ({ name , id , color }: { name: string, id: string, color: string }) => void
    }) {


    return (
        <main className="w-screen h-screen overflow-x-hidden bg-background overflow-y-scroll" >

            <Hero />

            <Bio links={links} />

            {/* <div className="relative" ref={projectsRef} style={{ display: isProject ? "none" : "block" }}>
                {
                    projects.map((project, index) => (
                        <section className="h-screen w-screen snap-start flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: project.backgroundColor }}>
                            <motion.button
                                initial={{ y: 60, opacity: 0, rotate: 2 }}
                                whileInView={{ y: 0, opacity: 1, rotate: 4 }}
                                whileTap={{ scale: 0.5 }}
                                transition={{ duration: 0.6, ease: CUBIC_BEIZER }}
                                viewport={{ once: false, amount: 0.5 }}
                                onClick={() => { handleProjectChoosing(index) }}
                                className="absolute cursor-pointer  rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] lg:w-[60%] lg:h-auto"
                            >
                                <motion.h1
                                    style={{ transformOrigin: "50% 50%" }}
                                    animate={{ rotate: [-5, 5, -5, 5, -5, 0] }}
                                    transition={{
                                        duration: 0.8,   // speed of shake
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatDelay: 2.8 // wait ~3s before the next quick shake
                                    }}
                                    className="text-white text-4xl absolute top-0 -translate-x-1/4 z-150 left-0 -rotate-24 font-jersey">Click For details</motion.h1>
                                <img
                                    src={project.images[0]}
                                    alt=""
                                    className="w-full shadow-2xl brightness-40 shadow-black rounded-2xl cursor-pointer"
                                />
                            </motion.button>
                            <h6 className="font-jersey font-bold absolute right-10 bottom-10 text-white text-3xl">{index + 1} / {projects.length}</h6>
                            <motion.h1
                                initial={{ opacity: 0, y: scrollDirection === "down" ? -60 : 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6, ease: CUBIC_BEIZER }}
                                viewport={{ once: false, amount: 1 }}
                                className="text-6xl lg:text-7xl xl:text-9xl px-5 text-center font-bold text-white z-10 overflow-hidden pointer-events-none">
                                {project.name}
                            </motion.h1>
                        </section>
                    ))
                }
            </div> */}

            {/* <section className="h-screen w-screen text-9xl text-amber-50 snap-start py-10 md:py-0" ref={aboutRef} style={{ display: isProject ? "none" : "block" }}>
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
                                </section> */}
            <Projects projects={projects} changePath={changePath} />
            <Skills skills={skills} />
        </main>
    )
}
