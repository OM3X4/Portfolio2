import { motion } from 'framer-motion'
import type { Project } from './types'
import { cubicBezier } from 'framer-motion'


export default function Projects({ projects , changePath } : { projects: Project[] , changePath: (path: "/" | "/projects" | `/project/${string}`) => void }) {

    const CUBIC_BEIZER = cubicBezier(0.6, 0.05, 0, 0.9)

    return (
        <div className="relative" >
            <div className='fixed top-1/2 -translate-y-1/2 left-10 z-50 w-10 h-[70vh] rounded-full bg-black'>

            </div>
            {
                projects.map((project, index) => (
                    <section className="h-screen w-screen snap-start flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: project.backgroundColor }}>
                        <motion.button
                            initial={{ y: 60, opacity: 0, rotate: 2 }}
                            whileInView={{ y: 0, opacity: 1, rotate: 4 }}
                            whileTap={{ scale: 0.5 }}
                            transition={{ duration: 0.6, ease: CUBIC_BEIZER }}
                            viewport={{ once: false, amount: 0.5 }}
                            onClick={() => {changePath(`/project/${index}`) }}
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
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6, ease: CUBIC_BEIZER }}
                            viewport={{ once: false, amount: 1 }}
                            className="text-6xl lg:text-7xl xl:text-9xl px-5 text-center font-bold text-white z-10 overflow-hidden pointer-events-none">
                            {project.name}
                        </motion.h1>
                    </section>
                ))
            }
        </div>
    )
}
