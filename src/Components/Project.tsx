import { motion } from "framer-motion";
import { CUBIC_BEIZER } from "../config";
import { parseDate } from "../utils";
import type { ProjectType } from "../types";
import { AiFillGithub } from "react-icons/ai";
import { BiGlobe } from "react-icons/bi";
import { useParams } from "react-router-dom";

export default function Project({ projects }: { projects: ProjectType[] }) {


    const { id } = useParams<{ id: string }>();
    const project = projects[!isNaN(Number(id)) ? Number(id) : 0];

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <main className="w-screen min-h-screen overflow-hidden bg-background ">

            <section className="px-5 lg:px-10 xl:px-20 py-20 min-h-screen">

                <motion.div
                    initial={{ opacity: 0, y: 160 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.5, ease: CUBIC_BEIZER }}
                    className="flex items-end gap-5">
                    <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white"
                        style={{ textShadow: `6px 6px 0 ${project.backgroundColor}` }}>{project.name}</h1>
                    <h3 className="text-muted text-xl lg:text-2xl xl:text-3xl">{parseDate(project.date).toDateString()}</h3>
                </motion.div>

                <motion.img
                    initial={{ opacity: 0, y: 160 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.8, ease: CUBIC_BEIZER }}
                    src={project.images[0]}
                    alt=""
                    className="object-cover object-center w-full h-[calc(100vh-160px)] mx-auto rounded-2xl mt-5"
                />
            </section>

            <section className="px-5 lg:px-10 xl:px-20 py-20 min-h-screen">
                <h1 className="text-5xl text-white">Details</h1>
                <div className="grid grid-cols-4 w-[95%] md:w-[90%] mx-auto gap-5 mt-5">
                    <div className="bg-secondary-background p-5 w-full h-full rounded-2xl flex flex-col items-start justify-center col-span-2 grid-shadow">
                        <h3 className="text-muted text-xl">Overview</h3>
                        <h2 className="text-white text-2xl font-medium">{project.mainHeadline}</h2>
                    </div>
                    <div className="bg-secondary-background w-full p-5 rounded-2xl flex flex-col items-start justify-center col-span-2 text-muted text-lg font-medium grid-shadow">
                        {project.secondParagraph}
                    </div>
                    <div className="bg-secondary-background w-full p-5 rounded-2xl flex flex-col gap-3 items-start justify-center col-span-2 grid-shadow">
                        <h1 className="text-xl font-medium text-muted">Stack</h1>
                        <div className="flex items-center justify-center gap-5 flex-wrap">

                            {
                                project.stack.map((technology) => (
                                    <span className="text-3xl text-white">
                                        {technology.icon}
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                    {
                        project.codeLink ?
                            <a
                                href={project.codeLink}
                                target="_blank"
                                className="grid-shadow bg-secondary-background self-stretch w-full p-5 rounded-2xl flex items-center justify-center">
                                <AiFillGithub className="text-white text-5xl hover:text-golden cursor-pointer" />
                            </a>
                            :
                            <div
                                className="grid-shadow bg-secondary-background self-stretch w-full p-5 rounded-2xl flex items-center justify-center">
                                <AiFillGithub className="text-muted text-5xl" />
                            </div>
                    }
                    {
                        project.websiteLink ?
                            <a
                                href={project.websiteLink}
                                target="_blank"
                                className="grid-shadow bg-secondary-background w-full self-stretch p-5 rounded-2xl flex items-center justify-center">
                                <BiGlobe className="text-white text-5xl hover:text-golden cursor-pointer" />
                            </a>
                            :
                            <div
                                className="grid-shadow bg-secondary-background w-full self-stretch p-5 rounded-2xl flex items-center justify-center">
                                <BiGlobe className="text-muted text-5xl " />
                            </div>

                    }
                    <div className="grid-shadow bg-secondary-background w-full p-5 rounded-2xl flex flex-col col-span-2">
                        <h1 className="text-xl font-medium text-muted">Full description</h1>
                        <h3 className="text-white font-medium text-2xl">
                            {project.mainParagraph}
                        </h3>
                    </div>
                    <div className="grid-shadow bg-secondary-background w-full h-full p-5 rounded-2xl flex flex-col col-span-2">
                        <h1 className="text-xl font-medium text-muted">Quote</h1>
                        <h3 className="text-white font-medium text-2xl italic">
                            {project.quote}
                        </h3>
                    </div>
                </div>
            </section>
        </main>
    )
}
