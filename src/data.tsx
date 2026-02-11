import { FaAws, FaCode, FaServer } from "react-icons/fa";
import { MdApi } from "react-icons/md";
import type { IconType } from "react-icons";
import {
    SiNextdotjs,
    SiAmazon,
    SiTypescript,
    SiTailwindcss,
    SiPostgresql,
    SiRedis,
    SiRust,
    SiVercel,
    SiExpress,
    SiRailway,
    SiCloudflare,
    SiPrisma,
    SiOpenai,
    SiShadcnui,
    SiSupabase,
    SiReactquery,
    SiDjango,
    SiJavascript,
    SiReact
} from "react-icons/si";
import type { ProjectType } from "./types";


import { RiNextjsFill } from "react-icons/ri";
import { DiPostgresql, DiReact } from "react-icons/di";
type SkillItem = {
    label: string;
    icon: IconType;
};


export const skills: {
    title: string;
    items: SkillItem[];
}[] = [
        {
            title: "CORE",
            items: [
                { label: "TYPESCRIPT", icon: SiTypescript },
                { label: "RUST", icon: SiRust },
                { label: "SQL", icon: SiPostgresql },
            ],
        },
        {
            title: "FRONT-END",
            items: [
                { label: "REACT", icon: SiReact },
                { label: "NEXT.JS", icon: SiNextdotjs },
                { label: "TAILWIND", icon: SiTailwindcss },
            ],
        },
        {
            title: "BACK-END & SYSTEMS",
            items: [
                { label: "EXPRESS", icon: SiExpress },
                { label: "HTTP APIs", icon: MdApi },
                { label: "REDIS", icon: SiRedis },
            ],
        },
        {
            title: "INFRA",
            items: [
                { label: "VERCEL", icon: SiVercel },
                { label: "RAILWAY", icon: SiRailway },
                { label: "CLOUDFLARE", icon: SiCloudflare },
                { label: "AWS", icon: SiAmazon },
            ],
        },
        {
            title: "CS",
            items: [
                { label: "Algorithms & Data Structures", icon: FaCode },
                { label: "238+ PROBLEMS SOLVED", icon: FaServer },
            ],
        },
    ];

export const projects: ProjectType[] = [
    {
        name: "QueenFish 2.0",
        images: [
            "/queenfish2.png"
        ],
        logo: "/ProjectsLogos/queenfish.png",
        video: null,
        backgroundColor: "#41cad9",
        date: "12-12-2025",

        mainHeadline: "QueenFish 2.0 — A Solo, Low-Level Rebuild in Rust",

        mainParagraph:
            "QueenFish 2.0 is a complete ground-up rewrite of the original QueenFish chess engine, built entirely from scratch in Rust. Unlike the first version—which relied on high-level libraries for core mechanics—this iteration replaces every dependency with custom low-level implementations, serving as a learning milestone and a serious showcase of engine design fundamentals.",

        secondParagraph: "Engineered for Discipline and Performance",

        thirdParagraph:
            "The engine is developed solo with a strong emphasis on bitboard-based move generation, search efficiency, and aggressive performance optimizations. Rust was chosen as both a performance tool and a mastery challenge, enabling precise control over memory, determinism, and execution speed. The result is a cleaner architecture, stronger pruning, and a significantly deeper and more stable search, culminating in a playing strength of approximately 1700–1800 Elo.",

        quote:
            "QueenFish is an exercise in discipline — writing the engine I wish I had when I first started, and rebuilding it properly once I understood what actually matters.",

        websiteLink: "https://lichess.org/@/Queenfish2",
        codeLink: "https://github.com/omaremadcc/QueenFish",
        engineer: "Omar Emad (Solo)",

        stack: [
            {
                name: "Rust",
                icon: <SiRust />
            }
        ]
    },
    {
        name: "TEMDB",
        images: [
            "/temdb1.png",
            "/temdb2.png",
        ],
        logo: "ProjectsLogos/temdb.png",
        video: "https://ruwxyzljuh4kflth.public.blob.vercel-storage.com/temdb.webm",
        backgroundColor: "#7c101a",
        date: "23-6-2025",
        mainHeadline: "TEMDB is the Definitive Egyptian Movies & TV Database",
        secondParagraph: "Built as a modern cultural archive, TEMDB brings the richness of Egyptian cinema and television into a sleek, fast, and community-driven platform — finally giving Egyptian media the modern experience it deserves.",
        mainParagraph: "TEMDB is a public resource designed for film lovers, researchers, and fans of Egyptian culture. With complete catalogs (5k titles , 10k people) of movies and series, cast and crew details, reviews, trailers, streaming providers, and smart search with vector embeddings, TEMDB is the most comprehensive and modern platform dedicated solely to Egyptian content. Powered by Next.js, Prisma, PostgreSQL, Cloudflare R2, Vercel and AWS, it delivers the speed and polish of a global-scale product while staying deeply rooted in Egypt’s cultural identity.",
        thirdParagraph: "Unlike fragmented legacy sites, TEMDB isn’t just a database — it’s a cultural project and a startup in the making, designed to preserve, celebrate, and connect generations through Egyptian film and television.",
        quote: '"I built TEMDB because Egyptian cinema deserves better than outdated archives. My vision is to give it a modern home — one that rivals IMDb in quality, but stays true to our culture. This is more than code; it’s a step toward preserving and celebrating Egypt’s storytelling legacy." — Omar Emad',
        websiteLink: "https://temdb.com/",
        codeLink: null,
        engineer: "Omar Emad (Me)",
        stack: [
            {
                name: "Next JS",
                icon: <RiNextjsFill />
            },
            {
                name: "Prisma",
                icon: <SiPrisma />
            },
            {
                name: "OpenAI API",
                icon: <SiOpenai />
            },
            {
                name: "Tailwind CSS",
                icon: <SiTailwindcss />
            },
            {
                name: "Postgres",
                icon: <DiPostgresql />
            },
            {
                name: "TypeScript",
                icon: <SiTypescript />
            },
            {
                name: "AWS",
                icon: <FaAws />
            },
            {
                name: "ShadCN UI",
                icon: <SiShadcnui />
            },
            {
                name: "Vercel",
                icon: <SiVercel />
            },
            {
                name: "Redis",
                icon: <SiRedis />
            },
            {
                name: "Cloudflare",
                icon: <SiCloudflare />
            }
        ]
    },
    {
        name: "oAI",
        images: [
            "/oAI1.png",
            "/oAI2.png",
        ],
        video: "https://ruwxyzljuh4kflth.public.blob.vercel-storage.com/oai.webm",
        logo: "ProjectsLogos/oai.png",
        backgroundColor: "#10a37f",
        date: "15-7-2025",
        mainHeadline: "oAI is an Open Source t3.chat Clone Built for the OpenRouter Crowd",
        secondParagraph: "Built for Theo’s t3.chat Cloneathon, oAI is a sleek, open wrapper around the OpenRouter API — with BYOK, chat branching, and memory.",
        mainParagraph: "oAI is a fully open-source clone of t3.chat that replicates the full UX and feature set: chat history, authentication, memory, and chat branching. It’s powered by Supabase, Prisma, and OpenRouter, with a bring-your-own-key model that puts users in control.",
        thirdParagraph: "If you know what an API key is, you’ll feel right at home. oAI isn’t just a clone — it’s a clean base for hacking, learning, and customizing your own AI chat playground.",
        quote: '"I built oAI as my entry for the t3.chat cloneathon — not just to copy, but to really learn what makes apps like this tick. It’s open, simple, and designed for devs who want full control." — Omar Emad',
        websiteLink: "https://oaichat.netlify.app",
        codeLink: "https://github.com/omaremadcc/oAI",
        engineer: "Omar Emad (Me)",
        stack: [
            {
                name: "React",
                icon: <DiReact />
            },
            {
                name: "Express",
                icon: <SiExpress />
            },
            {
                name: "Prisma",
                icon: <SiPrisma />
            },
            {
                name: "OpenAI API",
                icon: <SiOpenai />
            },
            {
                name: "Tailwind CSS",
                icon: <SiTailwindcss />
            },
            {
                name: "Postgres",
                icon: <DiPostgresql />
            },
            {
                name: "TypeScript",
                icon: <SiTypescript />
            },
            {
                name: "React Query",
                icon: <SiReactquery />
            },
            {
                name: "Supabase",
                icon: <SiSupabase />
            },
            {
                name: "ShadCN UI",
                icon: <SiShadcnui />
            },
        ]
    },
    {
        name: "BRAINSMATH 2.0",
        images: [
            "/brainsmath2.01.png",
            "/brainsmath2.02.png",
        ],
        video: "https://ruwxyzljuh4kflth.public.blob.vercel-storage.com/brainsmath2.webm",
        logo: "ProjectsLogos/brainsmath2.png",
        backgroundColor: "#4e65ea",
        date: "16-4-2025",
        mainHeadline: "Brainsmath is a Fidget-Like Mental Math with Competitive Edge",
        secondParagraph: "BrainsMath 2.0 brings speed, competition, and game-like UX to mental math practice.",
        mainParagraph: "BrainsMath 2.0 is a complete rebuild with a sharper, more competitive feel. Inspired by Monkeytype, it offers a database-backed leaderboard, smoother UX, and game-like testing to make math addictive.",
        thirdParagraph: "BrainsMath 2.0 replaces traditional drills with a dynamic, fidget-like interface built for typists.",
        quote: '"With BrainsMath 2.0, I wanted to rebuild everything — not just the code, but the vibe. It’s fast, competitive, and fun. More than practice, it’s a fidget for your brain — built to attract the same crowd that loves typing tests and leaderboard challenges." — Omar Emad',
        websiteLink: "https://brainsmath.org/",
        codeLink: "https://github.com/omaremadcc/Brainsmath-2.0",
        engineer: "Omar Emad(Me)",
        stack: [
            {
                name: "Next JS",
                icon: <RiNextjsFill />
            },
            {
                name: "Django",
                icon: <SiDjango />
            },
            {
                name: "Postgres",
                icon: <DiPostgresql />
            },
            {
                name: "TypeScript",
                icon: <SiTypescript />
            },
            {
                name: "React Query",
                icon: <SiReactquery />
            },
            {
                name: "Supabase",
                icon: <SiSupabase />
            },
            {
                name: "ShadCN UI",
                icon: <SiShadcnui />
            },

        ]
    },
    {
        name: "QUEENFISH",
        images: [
            "/chezzy1.png",
            "/chezzy2.png",
        ],
        video: "https://ruwxyzljuh4kflth.public.blob.vercel-storage.com/chezzy.webm",
        logo: "ProjectsLogos/queenfish.png",
        backgroundColor: "#41cad9",
        date: "19-10-2024",
        mainHeadline: "QueenFish is A Pure JavaScript Chess Engine Built from Scratch",
        secondParagraph: "QueenFish is a handcrafted chess engine in JavaScript, built without tutorials or shortcuts.",
        mainParagraph: "QueenFish is a JavaScript-based chess engine that I built entirely from scratch. It uses minimax for decision-making and can run standalone or be integrated into my chess platform, Chezzy.",
        thirdParagraph: "QueenFish stands out because I built it without relying on tutorials or pre-existing engines. Its toughest challenge was endgame optimization, which pushed my problem-solving and algorithmic thinking to the limit.",
        quote: "I built QueenFish from scratch in JavaScript, not because it was easy, but because I wanted to prove what I could do without relying on external engines. Every line of code reflects my determination to understand the game deeply, both in logic and strategy.",
        websiteLink: "https://om3x4.github.io/Chezzy/",
        codeLink: "https://github.com/omaremadcc/Engine.js",
        engineer: "Omar Emad(Me)",
        stack: [
            {
                name: "Javascript",
                icon: <SiJavascript />
            }
        ]
    },
    {
        name: "EGYPT PROJECTS",
        images: [
            "/egyptprojects1.png",
            "/egyptprojects2.png",
        ],
        video: null,
        logo: "ProjectsLogos/egyptprojects.webp",
        backgroundColor: "#c59d18",
        date: "23-4-2025",
        mainHeadline: "Visualizing Egypt’s Achievements Under President El-Sisi",
        secondParagraph: "This website showcases Egypt’s national projects in a clean, organized, and visual format.",
        mainParagraph: "Built with React, this site highlights government achievements under President El-Sisi. It organizes major projects into categories, presenting the data in a way that’s accessible and visually engaging for everyone.",
        thirdParagraph: " The hardest part was collecting accurate data — especially when the official site’s UI felt underwhelming.",
        quote: '"I built this to help people — especially Egyptians — actually see the scale of development happening. It’s not political; it’s about clear, visual access to national progress, which I felt the official platforms lacked. I wanted to do it right, even if it was just a school project." — Omar Emad',
        websiteLink: "https://egyptomar.netlify.app/",
        codeLink: "https://github.com/omaremadcc/EgyptProjectsHost",
        engineer: "Omar Emad(Me)",
        stack: [
            {
                name: "React",
                icon: <DiReact />
            },
        ]
    },
    {
        name: "CHEZZY",
        images: [
            "/chezzy1.png",
            "/chezzy2.png",
        ],
        video: "https://ruwxyzljuh4kflth.public.blob.vercel-storage.com/chezzy.webm",
        logo: "ProjectsLogos/queenfish.png",
        date: "1-11-2024",
        backgroundColor: "#0e0e0e",
        mainHeadline: "A Simple Chess Platform Powered by QueenFish Engine",
        secondParagraph: "Chezzy is a web-based chess platform that lets users play against QueenFish or pass-and-play.",
        mainParagraph: "Built with React, Chezzy is a chess platform designed for learning and casual play. It lets users play against the QueenFish engine or engage in pass-and-play games with friends.",
        thirdParagraph: "Chezzy was a learning project for me, focused on mastering game theory and game state representation.",
        quote: '"Building Chezzy gave me deep insights into game theory and web development. It wasn’t just about making a chess game; it was about understanding how game states interact and ensuring the logic was clean and precise. It was a great challenge and an amazing learning experience for me." — Omar Emad',
        websiteLink: "https://om3x4.github.io/Chezzy/",
        codeLink: "https://github.com/omaremadcc/Chezzy",
        engineer: "Omar Emad(Me)",
        stack: [
            {
                name: "React",
                icon: <DiReact />
            },
        ]
    },
    {
        name: "OMARTYPE",
        images: [
            "/omartype1.png",
            "/omartype2.png",
        ],
        video: "https://ruwxyzljuh4kflth.public.blob.vercel-storage.com/omartype.webm",
        logo: "ProjectsLogos/omartype.png",
        backgroundColor: "#ff9900",
        date: "13-12-2024",
        mainHeadline: "A Monkeytype Clone for Typing Practice and Learning",
        secondParagraph: "OmarType is a typing practice tool built to closely mimic the functionality of Monkeytype.",
        mainParagraph: "OmarType is a personal project aimed at learning how to build a typing practice app. It closely resembles Monkeytype in functionality, offering a simple, smooth typing experience for users to improve their speed and accuracy.",
        thirdParagraph: "OmarType is essentially a clone of Monkeytype, designed to provide a familiar typing practice experience.",
        quote: '"OmarType was mainly a learning project for me — an opportunity to replicate Monkeytype and improve my React skills. The animation and smooth user experience were my key focus. While it’s a clone, the journey taught me a lot about building interactive web applications and smooth UX design." — Omar Emad',
        websiteLink: "https://om3x4.github.io/Omartype/",
        codeLink: "https://github.com/omaremadcc/Omartype",
        engineer: "Omar Emad(Me)",
        stack: [
            {
                name: "React",
                icon: <DiReact />
            },
        ]
    },
    {
        name: "BRAINSMATH 1.0",
        images: [
            "/brainsmath1.01.png",
            "/brainsmath1.02.png",
        ],
        video: null,
        logo: "ProjectsLogos/brainsmath1.png",
        date: "1-2-2025",
        backgroundColor: "#122454",
        mainHeadline: "Brainsmath is a Mental Math Practice Engine Inspired by TypingClub and Monkeytype",
        secondParagraph: "BrainsMath helps users master mental math tricks through structured lessons and focused practice sessions.",
        mainParagraph: "BrainsMath 1.0 is a platform I built to teach and drill mental math. It uses structured repetition, like TypingClub, and aims to make learning tricks fun, fast, and trackable.",
        thirdParagraph: "BrainsMath teaches tricks that make mental math faster, smarter, and more intuitive to learn.",
        quote: '"BrainsMath 1.0 is my take on making math training as addictive as typing practice. I wanted to build something that teaches, tracks, and motivates — all in one experience. It’s not about speed alone, but how smartly and confidently you can calculate in your head." — Omar Emad',
        websiteLink: null,
        codeLink: "https://github.com/omaremadcc/BrainsMath_Next",
        engineer: "Omar Emad(Me)",
        stack: [
            {
                name: "Next.js",
                icon: <RiNextjsFill />
            },
        ]
    },
]

export const links = {
    github: "https://github.com/omaremadcc",
    instagram: "https://www.instagram.com/omaremadcc/",
    linkedin: "https://www.linkedin.com/in/omaremadcc/",
    x: "https://twitter.com/omaremadcc",
    leetcode: "https://leetcode.com/u/OM3X4/",
    email: "om3x4e@gmail.com",
    dev: "https://dev.to/omaremadcc",
    monkeytype: "https://monkeytype.com/profile/om3x4",
}
