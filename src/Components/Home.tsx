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
            <Projects projects={projects} changePath={changePath} />
            <Skills skills={skills} />
        </main>
    )
}
