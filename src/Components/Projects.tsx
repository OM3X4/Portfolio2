import { BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion"
import type { ProjectType } from "../types"
import { cn } from "../lib/utils";


export default function Projects({ projects, changePath }: { projects: ProjectType[], changePath: ({ name, id, color }: { name: string, id: string, color: string }) => void }) {


    return (
        <div className="">
            <div className="responsive-container my-3">
                <h5 className="text-muted text-xl font-medium font-jersey">BUILT BY ME</h5>
                <h2 className="text-5xl text-white font-black">PROJECTS</h2>
            </div>
            <div className="responsive-container grid grid-cols-3 mb-20 gap-2">
                {
                    projects.map((project: ProjectType, index) => (
                        // <motion.div
                        //     key={index}
                        //     initial={{ opacity: 0, y: 160 }}
                        //     whileInView={{ opacity: 1, y: 0 }}
                        //     whileHover="hover"
                        //     variants={{
                        //         hover: { scale: 1.05, backgroundColor: project.backgroundColor }
                        //     }}
                        //     transition={{ duration: 0.3, ease: CUBIC_BEIZER }}
                        //     viewport={{ once: true, amount: 0.1 }}
                        //     className="grid-inner-block aspect-square cursor-pointer group relative"
                        //     onClick={() => { changePath({ name: project.name, id: String(index), color: project.backgroundColor }) }}
                        // >
                        //     <motion.img
                        //         initial={{ filter: "grayscale(1)" }}
                        //         variants={{
                        //             hover: { scale: 1.1, filter: "grayscale(0)", y: -5 }
                        //         }}
                        //         transition={{ duration: 0.5, ease: CUBIC_BEIZER }}

                        //         src={project.logo} alt="" className="grayscale-0 object-cover object-center w-1/2" />
                        //     <motion.h1
                        //         variants={{
                        //             hover: { opacity: 1, y: -15 }
                        //         }}
                        //         transition={{ duration: 0.5, ease: CUBIC_BEIZER }}
                        //         className="text-2xl sm:text-3xl text-center text-nowrap font-semibold opacity-0 text-white absolute top-0 left-1/2 -translate-x-1/2 z-150">
                        //         {project.name}
                        //     </motion.h1>
                        // </motion.div>
                        <Project key={index} index={index} project={project} changePath={changePath} />
                    ))
                }
            </div>
        </div>
    )
}

function Project({ index, project, changePath }: { index: number, project: ProjectType, changePath: ({ name, id, color }: { name: string, id: string, color: string }) => void }) {
    return (
        <motion.div
            onClick={() => { changePath({ name: project.name, id: String(index), color: project.backgroundColor }) }}
            className="grid-inner-block transition-all duration-100 cursor-pointer hover:brightness-125 gap-3 group"
        >
            <img src={project.logo} alt="" className="w-1/5 rounded-lg" />
            <div className="flex-3">
                <h4 className="text-text text font-medium">{project.name}</h4>
                <p className="text-muted text-sm">{project.mainHeadline}</p>
            </div>
            <ArrowIcon className="w-fit justify-self-start text-2xl text-white" />
        </motion.div>
    )
}

const ArrowIcon = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "group flex size-full cursor-pointer items-center justify-center",
                className ?? "",
            )}
        >
            <div className="relative grid cursor-pointer items-center justify-center">
                <BiChevronRight className="transition-all duration-500 ease-out group-hover:translate-x-0.5" />
                <div className="absolute right-[9px] h-[2px] w-3 origin-right scale-x-0 rounded-[1px] bg-current transition-all duration-300 ease-out group-hover:right-[7px] group-hover:scale-x-100"></div>
            </div>
        </div>
    );
};
