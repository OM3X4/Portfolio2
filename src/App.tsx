import { type JSX, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import { toast } from "sonner";
import { CgMail } from "react-icons/cg";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { DiPostgresql, DiReact } from "react-icons/di";
import { FaNodeJs, FaAws, FaLinkedinIn, FaDev } from "react-icons/fa";
import { PiVectorThreeBold } from "react-icons/pi";
import {
	SiNamecheap,
	SiFfmpeg,
	SiJavascript,
	SiSupabase,
	SiVitest,
	SiDjango,
	SiJsonwebtokens,
	SiLeetcode,
	SiNetlify,
	SiOpenai,
	SiReactquery,
	SiReactrouter,
	SiRailway,
	SiShadcnui,
	SiTailwindcss,
	SiTypescript,
	SiPostgresql,
	SiPrisma,
	SiExpress,
	SiVercel,
	SiCloudflare,
	SiRedis,
	SiRust
} from "react-icons/si";
import {
	TbBrandFramerMotion,
	TbBrandCpp,
	TbSql,
	TbBrandVercel
} from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import { CUBIC_BEIZER } from "./config";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Project from "./Components/Project";
import { Routes, Route, useNavigate } from "react-router-dom";
import type { ProjectType } from "./types";


const skills: { name: string; icon: JSX.Element; color: string }[] = [
	{ name: 'React.js', icon: <DiReact />, color: '#61DAFB' },
	{ name: 'Next.js', icon: <RiNextjsFill />, color: '#FFFFFF' },
	{ name: 'TypeScript', icon: <SiTypescript />, color: '#2F74C0' },
	{ name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
	{ name: 'ShadCN', icon: <SiShadcnui />, color: '#FFFFFF' },
	{ name: 'Vite', icon: <SiVitest />, color: '#646CFF' },
	{ name: 'Framer Motion', icon: <TbBrandFramerMotion />, color: '#646CFF' },
	{ name: 'React Router', icon: <SiReactrouter />, color: '#61DAFB' },
	{ name: 'Django', icon: <SiDjango />, color: '#092E20' },
	{ name: 'Node.js', icon: <FaNodeJs />, color: '#43853d' },
	{ name: 'Express.js', icon: <SiExpress />, color: '#FFFFFF' },
	{ name: 'Prisma', icon: <SiPrisma />, color: '#FFFFFF' },
	// { name: 'Java', icon: <DiJava />, color: '#007396' },
	{ name: 'vercel', icon: <TbBrandVercel />, color: '#FFFFFF' },
	{ name: 'Vector Embedding', icon: <PiVectorThreeBold />, color: '#FFFFFF' },
	{ name: 'AWS(Basics)', icon: <FaAws />, color: '#FF9900' },
	{ name: 'Neon.tech', icon: <SiPostgresql />, color: '#336791' },
	// { name: 'PostgreSQL', icon: <DiPostgresql />, color: '#336791' },
	{ name: 'Supabase', icon: <SiSupabase />, color: '#246e4d' },
	{ name: 'React Query', icon: <SiReactquery />, color: '#61DAFB' },
	{ name: 'JWT', icon: <SiJsonwebtokens />, color: '#a82143' },
	{ name: 'DSA', icon: <SiLeetcode />, color: '#f69e1a' },
	{ name: 'OpenAI API', icon: <SiOpenai />, color: '#FFFFFF' },
	{ name: 'Git', icon: <BsGit />, color: '#F05032' },
	{ name: 'GitHub', icon: <AiFillGithub />, color: '#FFFFFF' },
	{ name: 'Railway', icon: <SiRailway />, color: '#FFFFFF' },
	{ name: 'Netlify', icon: <SiNetlify />, color: '#00C7B7' },
	{ name: 'C++', icon: <TbBrandCpp />, color: '#f34b7d' },
	{ name: 'SQL', icon: <TbSql />, color: '#FFFFFF' },
	{ name: 'FFmpeg', icon: <SiFfmpeg />, color: '#349237' },
	{ name: 'Cloudflare', icon: <SiCloudflare />, color: '#f78100' },
	{ name: 'Redis', icon: <SiRedis />, color: '#c83632' },
	{ name: "Domain Management", icon: <SiNamecheap />, color: '#fc5d0b' },
];


const projects: ProjectType[] = [
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
		codeLink: "https://github.com/OM3X4/QueenFish",
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
		codeLink: "https://github.com/OM3X4/oAI",
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
		codeLink: "https://github.com/OM3X4/Brainsmath-2.0",
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
		codeLink: "https://github.com/OM3X4/Engine.js",
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
		mainHeadline: "Egyptian Nation Projects: Visualizing Egypt’s Achievements Under President El-Sisi",
		secondParagraph: "This website showcases Egypt’s national projects in a clean, organized, and visual format.",
		mainParagraph: "Built with React, this site highlights government achievements under President El-Sisi. It organizes major projects into categories, presenting the data in a way that’s accessible and visually engaging for everyone.",
		thirdParagraph: " The hardest part was collecting accurate data — especially when the official site’s UI felt underwhelming.",
		quote: '"I built this to help people — especially Egyptians — actually see the scale of development happening. It’s not political; it’s about clear, visual access to national progress, which I felt the official platforms lacked. I wanted to do it right, even if it was just a school project." — Omar Emad',
		websiteLink: "https://egyptomar.netlify.app/",
		codeLink: "https://github.com/OM3X4/EgyptProjectsHost",
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
		mainHeadline: "Chezzy: A Simple Chess Platform Powered by QueenFish Engine",
		secondParagraph: "Chezzy is a web-based chess platform that lets users play against QueenFish or pass-and-play.",
		mainParagraph: "Built with React, Chezzy is a chess platform designed for learning and casual play. It lets users play against the QueenFish engine or engage in pass-and-play games with friends.",
		thirdParagraph: "Chezzy was a learning project for me, focused on mastering game theory and game state representation.",
		quote: '"Building Chezzy gave me deep insights into game theory and web development. It wasn’t just about making a chess game; it was about understanding how game states interact and ensuring the logic was clean and precise. It was a great challenge and an amazing learning experience for me." — Omar Emad',
		websiteLink: "https://om3x4.github.io/Chezzy/",
		codeLink: "https://github.com/OM3X4/Chezzy",
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
		mainHeadline: "OmarType: A Monkeytype Clone for Typing Practice and Learning",
		secondParagraph: "OmarType is a typing practice tool built to closely mimic the functionality of Monkeytype.",
		mainParagraph: "OmarType is a personal project aimed at learning how to build a typing practice app. It closely resembles Monkeytype in functionality, offering a simple, smooth typing experience for users to improve their speed and accuracy.",
		thirdParagraph: "OmarType is essentially a clone of Monkeytype, designed to provide a familiar typing practice experience.",
		quote: '"OmarType was mainly a learning project for me — an opportunity to replicate Monkeytype and improve my React skills. The animation and smooth user experience were my key focus. While it’s a clone, the journey taught me a lot about building interactive web applications and smooth UX design." — Omar Emad',
		websiteLink: "https://om3x4.github.io/Omartype/",
		codeLink: "https://github.com/OM3X4/Omartype",
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
		codeLink: "https://github.com/OM3X4/BrainsMath_Next",
		engineer: "Omar Emad(Me)",
		stack: [
			{
				name: "Next.js",
				icon: <RiNextjsFill />
			},
		]
	},
]

const links = {
	github: "https://github.com/OM3X4",
	instagram: "https://www.instagram.com/om3x4e/",
	linkedin: "https://www.linkedin.com/in/om3x4e/",
	x: "https://twitter.com/om3x4e",
	leetcode: "https://leetcode.com/u/OM3X4/",
	email: "om3x4e@gmail.com",
	dev: "https://dev.to/om3x4",
	monkeytype: "https://monkeytype.com/profile/om3x4",
}



type OverlayTransitionProps = {
	show: boolean;
	direction: "up" | "down"; // which way it enters/exits
	fill: string;
	text: string;
};

function OverlayTransition({ show, direction, fill, text }: OverlayTransitionProps) {
	const isUp = direction === "up";
	return (
		<AnimatePresence mode="wait">
			{show && (
				<motion.div
					key="overlay-container"
					className="fixed w-full"
					style={{
						zIndex: 9999,
						top: 0,
						left: 0,
						height: 'calc(100vh + 20vh)', // Extra height for bulges
						marginTop: '-10vh', // Offset to center the main part
					}}
					initial={{ y: isUp ? "100%" : "-100%" }}
					animate={{ y: 0 }}
					exit={{ y: isUp ? "-100%" : "100%" }}
					transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
				>
					{/* Top rounded bulge (curves outward) */}
					<div
						className="absolute w-full overflow-hidden"
						style={{
							height: '10vh',
							top: 0,
						}}
					>
						<div
							style={{
								position: 'absolute',
								width: '150%',
								height: '750%',
								left: '50%',
								bottom: 0,
								borderRadius: '50%',
								transform: 'translate(-50%, 86.666%)',
								backgroundColor: fill
							}}
						/>
					</div>

					{/* Main overlay background */}
					<div
						className="absolute w-full"
						style={{
							backgroundColor: fill,
							top: '10vh',
							height: '100vh'
						}}
					/>

					{/* Bottom rounded bulge (curves outward) */}
					<div
						className="absolute w-full overflow-hidden"
						style={{
							height: '10vh',
							bottom: 0,
						}}
					>
						<div
							style={{
								position: 'absolute',
								width: '150%',
								height: '750%',
								left: '50%',
								top: 0,
								borderRadius: '50%',
								transform: 'translate(-50%, -86.666%)',
								backgroundColor: fill
							}}
						/>
					</div>

					{/* Text - positioned relative to the actual viewport center */}
					<motion.h1
						initial={{ opacity: 0, y: isUp ? 40 : -40 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: isUp ? -40 : 40 }}
						transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
						className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-nowrap font-bold fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
						style={{
							zIndex: 10000
						}}
					>
						{text}
					</motion.h1>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

function App() {

	const navigate = useNavigate();

	const [overlayColor, setOverlayColor] = useState("#1e1e1e")
	const [overlayText, setOverlayText] = useState("Home")

	const [showOverlay, setShowOverlay] = useState(false)
	const [showReturnOverlay, setShowReturnOverlay] = useState(false)

	const TIME_TO_CHANGE = 400
	const TIME_TO_REVEAL = 500

	// const CUBIC_BEIZER = cubicBezier(0.6, 0.05, 0, 0.9)


	const handleGoToProject = ({ id, name, color }: { id: string; name: string; color: string }) => {
		setShowOverlay(true);
		setOverlayColor(color);
		setOverlayText(name);

		setTimeout(() => {
			navigate(`/project/${id}`);
		}, TIME_TO_CHANGE);

		setTimeout(() => {
			setShowOverlay(false);
		}, TIME_TO_CHANGE + TIME_TO_REVEAL);
	};

	const handleReturnHome = () => {
		setShowReturnOverlay(true);

		setTimeout(() => {
			navigate("/");
		}, TIME_TO_CHANGE);

		setTimeout(() => {
			setShowReturnOverlay(false);
		}, TIME_TO_CHANGE + TIME_TO_REVEAL);
	};

	return (
		<div className="w-screen overflow-hidden min-h-screen bg-background">

			<OverlayTransition show={showOverlay} direction="up" fill={overlayColor} text={overlayText} />
			<OverlayTransition show={showReturnOverlay} direction="down" fill={"#1e1e1e"} text={"Home"} />

			<Navbar returnHome={handleReturnHome} />
			<AnimatePresence>
				<Routes>
					<Route path="/" element={<Home links={links} skills={skills} projects={projects} changePath={handleGoToProject} />} />
					<Route path="/project/:id" element={<div><Project projects={projects} /></div>} />
				</Routes>
			</AnimatePresence>

			{/* Main */}
			<motion.footer
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.8, duration: 0.6, ease: CUBIC_BEIZER }}
				className="flex items-center justify-center fixed bottom-10 left-10 gap-2 px-3 py-2 rounded-full bg-secondary-background  grid-shadow">
				<a href={links.github} target="_blank" className="social-button"><AiFillGithub /></a>
				<a href={links.linkedin} target="_blank" className="social-button"><FaLinkedinIn /></a>
				<button
					onClick={e => {
						e.preventDefault()
						navigator.clipboard.writeText(links.email)
						toast.success("Copied to clipboard", { duration: 2000 })
					}}
					className="social-button">
					<CgMail />
				</button>
				<a href={links.x} className="social-button"><FaXTwitter /></a>
				<a href={links.instagram} target="_blank" className="social-button"><FaInstagram /></a>
				<a href={links.leetcode} target="_blank" className="social-button"><SiLeetcode /></a>
				<a href={links.dev} target="_blank" className="social-button"><FaDev /></a>
			</motion.footer>
		</div>
	)
}

export default App