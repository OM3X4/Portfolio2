import Hero from "./Hero";
import Skills from "./Skills";
import type { JSX } from "react";
import Projects from "./Projects";
import type { ProjectType } from "../types";


export default function Home({ skills, projects, changePath }:
    {
        skills: { name: string; icon: JSX.Element; color: string }[],
        projects: ProjectType[],
        changePath: ({ name , id , color }: { name: string, id: string, color: string }) => void
    }) {


    return (
        <main className="w-screen overflow-x-hidden bg-background overflow-y-hidden" >
            <Hero />
            {/* <Bio links={links} /> */}
            <Projects projects={projects} changePath={changePath} />
            <Skills skills={skills} />
        </main>
    )
}
