import { motion } from "framer-motion"
import { CUBIC_BEIZER } from "../config"
import { BiChevronsDown } from "react-icons/bi"
import type { ProjectType } from "../types"


export default function Projects({ projects, changePath }: { projects: ProjectType[], changePath: ({ name, id, color }: { name: string, id: string, color: string }) => void }) {



    return (
        <div className="my-20">
            <div className="w-fit mx-auto mb-10">
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
            <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-6 gap-5 mt-10 mb-20">
                {
                    projects.map((project: ProjectType, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 160 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover="hover"
                            variants={{
                                hover: { scale: 1.05 , backgroundColor: project.backgroundColor}
                            }}
                            transition={{ duration: 0.3, ease: CUBIC_BEIZER }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="grid-inner-block aspect-square cursor-pointer group relative"
                            onClick={() => { changePath({ name: project.name, id: String(index), color: project.backgroundColor }) }}
                        >
                            <motion.img
                                initial={{ filter: "grayscale(1)" }}
                                variants={{
                                    hover: { scale: 1.1 , filter: "grayscale(0)" , y: -5 }
                                }}
                                transition={{ duration: 0.5, ease: CUBIC_BEIZER }}

                                src={project.logo} alt="" className="grayscale-0 object-cover object-center w-1/2" />
                            <motion.h1
                                // initial={{ opacity: 0, y: 20 }}
                                variants={{
                                    hover: { opacity: 1, y: -15 }
                                }}
                                transition={{ duration: 0.5, ease: CUBIC_BEIZER }}
                                className="text-2xl sm:text-3xl text-center text-nowrap font-semibold opacity-0 text-white absolute top-0 left-1/2 -translate-x-1/2 z-50">
                                {project.name}
                            </motion.h1>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}
