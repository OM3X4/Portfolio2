import { BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import type { ProjectType } from "../types";
import { projects } from "../data";
import Reveal from "./Reveal";

export default function Projects({
  changePath,
}: {
  changePath: ({
    name,
    id,
    color,
  }: {
    name: string;
    id: string;
    color: string;
  }) => void;
}) {
  return (
    <div className="pt-10" id="projects" data-nosnippet>
      <Reveal delay={1.3}>
        <div className="responsive-container mb-8 text-center" data-nosnippet>
          <h5 className="text-muted text-xl font-medium font-jersey">
            BUILT BY ME
          </h5>
          <h2 className="text-5xl text-white font-black font-instrument-serif">
            PROJECTS
          </h2>
        </div>
      </Reveal>
      <div className="responsive-container grid grid-cols-1 sm:grid-cols-2 mb-20 gap-2">
        {projects.slice(0, 6).map((project: ProjectType, index) => (
          <Reveal delay={1.6 + index * 0.1}>
            <Project
              key={index}
              index={index}
              project={project}
              changePath={changePath}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function Project({
  index,
  project,
  changePath,
}: {
  index: number;
  project: ProjectType;
  changePath: ({
    name,
    id,
    color,
  }: {
    name: string;
    id: string;
    color: string;
  }) => void;
}) {
  return (
    <motion.div
      onClick={() => {
        changePath({
          name: project.name,
          id: String(index),
          color: project.backgroundColor,
        });
      }}
      className="grid-inner-block transition-all duration-100 cursor-pointer hover:brightness-125 gap-3 group px-6 py-3 h-full grid-shadow"
    >
      <img src={project.logo} alt="" className="w-1/5 rounded-lg" />
      <div className="flex-3">
        <h4 className="text-text text font-medium text-xl">{project.name}</h4>
        <p className="text-muted text-base leading-tight">
          {project.mainHeadline}
        </p>
        <div className="flex gap-2 mt-2">
          {project.tags &&
            project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-secondary-background px-1 py-0.5 rounded-sm text-xs bg-muted flex items-center gap-1"
              >
                <tag.icon />
                {tag.name}
              </span>
            ))}
        </div>
      </div>
      <ArrowIcon className="w-fit justify-self-start text-2xl text-white" />
    </motion.div>
  );
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
