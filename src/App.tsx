import { GiHamburgerMenu } from "react-icons/gi";
import { GiEgyptianWalk } from "react-icons/gi";
import { BiChevronsDown, BiGlobe } from "react-icons/bi";
import type { JSX } from "react";
import { motion } from "framer-motion"
import { toast } from "sonner";
import { GiEgyptianSphinx } from "react-icons/gi";
import { CgMail } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
// import { BsGit, BsFillPhoneFill } from "react-icons/bs";
import { DiPostgresql, DiReact, DiJava } from "react-icons/di";
import { FaNodeJs, FaAws, FaLinkedinIn, FaDev } from "react-icons/fa";
import { PiVectorThreeBold } from "react-icons/pi";
import {
	SiVitest,
	SiDjango,
	SiJsonwebtokens,
	SiLeetcode,
	SiJavascript,
	// SiNetlify,
	SiOpenai,
	SiReactquery,
	SiReactrouter,
	SiRailway,
	SiShadcnui,
	SiSupabase,
	SiTailwindcss,
	SiTypescript,
	// SiPostgresql,
	SiPrisma,
	SiExpress,
	SiMonkeytype
} from "react-icons/si";
import {
	TbBrandFramerMotion,
	TbBrandCpp,
	TbSql,
	TbBrandVercel
} from "react-icons/tb";

import { AnimatePresence } from "framer-motion";

import { cubicBezier } from "framer-motion";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import useScrollDirection from "./useScrollDirection";
import InvertedCursor from "./Pointer";

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
	{ name: 'Java', icon: <DiJava />, color: '#007396' },
	{ name: 'vercel', icon: <TbBrandVercel />, color: '#FFFFFF' },
	{ name: 'Vector Embedding', icon: <PiVectorThreeBold />, color: '#FFFFFF' },
	{ name: 'AWS(Basics)', icon: <FaAws />, color: '#FF9900' },
	// { name: 'Neon.tech', icon: <SiPostgresql />, color: '#336791' },
	{ name: 'PostgreSQL', icon: <DiPostgresql />, color: '#336791' },
	// { name: 'Supabase', icon: <SiSupabase />, color: '#246e4d' },
	{ name: 'React Query', icon: <SiReactquery />, color: '#61DAFB' },
	{ name: 'JWT', icon: <SiJsonwebtokens />, color: '#a82143' },
	{ name: 'DSA', icon: <SiLeetcode />, color: '#f69e1a' },
	{ name: 'OpenAI API', icon: <SiOpenai />, color: '#FFFFFF' },
	// { name: 'Git', icon: <BsGit />, color: '#F05032' },
	{ name: 'GitHub', icon: <AiFillGithub />, color: '#FFFFFF' },
	{ name: 'Railway', icon: <SiRailway />, color: '#FFFFFF' },
	// { name: 'Netlify', icon: <SiNetlify />, color: '#00C7B7' },
	{ name: 'C++', icon: <TbBrandCpp />, color: '#f34b7d' },
	{ name: 'SQL', icon: <TbSql />, color: '#FFFFFF' },
];

type Project = {
	name: string;
	images: string[];
	backgroundColor: string;
	date: string;
	mainHeadline: string;
	secondParagraph: string;
	mainParagraph: string;
	thirdParagraph: string;
	quote: string;
	websiteLink: string | null;
	codeLink: string | null;
	engineer: string | null;
	stack: {
		name: string;
		icon: JSX.Element;
	}[];
};

const projects: Project[] = [
	{
		name: "TEMDB",
		images: [
			"/temdb1.png",
			"/temdb2.png",
		],
		backgroundColor: "#7c101a",
		date: "23-6-2025",
		mainHeadline: "TEMDB is the Definitive Egyptian Movies & TV Database",
		secondParagraph: "Built as a modern cultural archive, TEMDB brings the richness of Egyptian cinema and television into a sleek, fast, and community-driven platform — finally giving Egyptian media the modern experience it deserves.",
		mainParagraph: "TEMDB is a public resource designed for film lovers, researchers, and fans of Egyptian culture. With complete catalogs of movies and series, cast and crew details, reviews, trailers, streaming providers, and smart search with vector embeddings, TEMDB is the most comprehensive and modern platform dedicated solely to Egyptian content. Powered by Next.js, Prisma, PostgreSQL, and AWS, it delivers the speed and polish of a global-scale product while staying deeply rooted in Egypt’s cultural identity.",
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
		]
	},
	{
		name: "oAI",
		images: [
			"/oAI1.png",
			"/oAI2.png",
		],
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
	linkedin: "https://www.linkedin.com/in/omar-emad-04a893310/",
	x: "https://twitter.com/omarinpublic",
	leetcode: "https://leetcode.com/u/OM3X4/",
	email: "om3x4e@gmail.com",
	dev: "https://dev.to/om3x4",
	monkeytype: "https://monkeytype.com/profile/om3x4e",
}

function parseDate(input: string): Date {
	// input format: dd-mm-yyyy
	const [day, month, year] = input.split("-").map(Number);
	// Months are 0-indexed in JS Date (0 = Jan, 11 = Dec)
	return new Date(year, month - 1, day);
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
		<AnimatePresence>
			{show && (
				<>
					<motion.svg
						key="overlay"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 800"
						className="absolute inset-0 z-150 w-full h-full"
						initial={{ y: isUp ? "100%" : "-100%" }}
						animate={{ y: 0 }}
						exit={{ y: isUp ? "-100%" : "100%" }}
						transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
						preserveAspectRatio="none"
					>
						<motion.path
							fill={fill}
							variants={{
								initial: {
									d: isUp
										? "M0,0 L0,800 Q720,800 1440,100 L1440,0 Z"
										: "M0,0 L0,0 Q720,800 1440,100 L1440,0 Z",
								},
								animate: {
									d: "M0,0 L0,800 Q720,800 1440,800 L1440,0 Z",
								},
								exit: {
									d: "M0,0 L0,800 Q720,800 1440,800 L1440,0 Z",
								},
							}}
							initial="initial"
							animate="animate"
							exit="exit"
							transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
						/>
					</motion.svg>

					<motion.h1
						initial={{ opacity: 0, y: isUp ? 40 : -40 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: isUp ? -40 : 40 }}
						transition={{ duration: 0.1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
						className="text-white text-7xl md:text-9xl font-bold absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-151"
					>
						{text}
					</motion.h1>
				</>
			)}
		</AnimatePresence>
	);
}

function App() {

	const homeRef = useRef(null)
	const aboutRef = useRef(null)
	const projectsRef = useRef(null)

	const [showOverlay, setShowOverlay] = useState(false)
	const [showReturnOverlay, setShowReturnOverlay] = useState(false)

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const isMountedRef = useRef(false)
	const isMounted = isMountedRef.current

	const [projectIndex, setProjectIndex] = useState(0)
	const [isProject, setIsProject] = useState(false)

	const project = projects[projectIndex]

	const TIME_TO_CHANGE = 400
	const TIME_TO_REVEAL = 350

	const CUBIC_BEIZER_MINE = cubicBezier(0.6, 0.05, 0, 0.9)

	const CUBIC_BEIZER = CUBIC_BEIZER_MINE

	const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
		if (isProject) {
			// Show overlay first
			setShowReturnOverlay(true);

			// Hide project view
			setTimeout(() => {
				setIsProject(false);

				// Wait for DOM to render the new section
				requestAnimationFrame(() => {
					if (ref.current) {
						ref.current.scrollIntoView({
							behavior: "smooth",
							block: "start",
						});
					}

					// Hide overlay after scroll transition
					setTimeout(() => {
						setShowReturnOverlay(false);
					}, TIME_TO_CHANGE);
				});
			}, TIME_TO_REVEAL);
		} else {
			// Normal scroll if not in project view
			ref.current?.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};


	useEffect(() => {
		isMountedRef.current = true
	}, [])

	const scrollDirection = useScrollDirection();

	const handleProjectChoosing = (index: number) => {
		setShowOverlay(true);
		setProjectIndex(index);
		setTimeout(() => {
			setIsProject(true);
			window.scrollTo(0, 0);
			setTimeout(() => {
				setShowOverlay(false);
			}, TIME_TO_CHANGE)
		}, TIME_TO_REVEAL); // must be >= exit animation duration
	};

	console.log(isMounted)

	// return <div className="flex items-center justify-center w-screen h-screen bg-background"><MenuIcon /></div>

	return (
		<div className="w-screen min-h-screen">

			<InvertedCursor />

			{/* <div className="absolute top-10 right-10 z-1000 w-10 h-10 bg-red-500 sm:bg-orange-400 md:bg-yellow-400 lg:bg-green-500 xl:bg-white"></div> */}

			{/* Intro */}
			{/* Responsive ✅ */}
			<motion.div className="fixed top-0 w-screen bg-black origin-top overflow-hidden z-150"
				initial={{ height: "50vh" }}
				animate={{ height: "0vh" }}
				transition={{ delay: 2, duration: 0.8, ease: CUBIC_BEIZER }}
			>
				<motion.h1
					className="text-[50px] sm:text-[70px] md:text-[110px] lg:text-[150px] xl:text-[200px] font-bold text-white text-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-nowrap"
					initial={{ x: "-100vw" }} // starts outside the right edge
					animate={{ x: "0" }}  // moves to center (adjust if needed)
					transition={{ delay: 0.8, duration: 0.4, ease: CUBIC_BEIZER }}
				// transition={{ delay: 0.3, duration: 0.8, ease: CUBIC_BEIZER }}
				>
					OMAR EMAD
				</motion.h1>
			</motion.div>
			<motion.div
				className="fixed bottom-0 w-screen bg-black origin-top overflow-hidden z-150"
				initial={{ height: "50vh" }}
				animate={{ height: "0vh" }}
				transition={{ delay: 2, duration: 0.8, ease: CUBIC_BEIZER }}
			>
				<motion.h1
					className="text-[70px] sm:text-[90px] md:text-[180px] lg:text-[230px] xl:text-[300px] font-bold text-white text-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
					initial={{ x: "100vw" }} // starts outside the right edge
					animate={{ x: "0" }}  // moves to center (adjust if needed)
					transition={{ delay: 0.8, duration: 0.4, ease: CUBIC_BEIZER }}
				>
					OM3X4
				</motion.h1>
			</motion.div>

			<OverlayTransition show={showOverlay} direction="up" fill={project.backgroundColor} text={project.name} />
			<OverlayTransition show={showReturnOverlay} direction="down" fill={"#1e1e1e"} text={"Home"} />

			<nav className="fixed z-50 top-0 w-full pl-5 pr-15 flex items-center justify-between">
				<motion.a
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: isMounted ? 0.4 : 2.8, duration: 0.5, ease: CUBIC_BEIZER }}
					href="/"
					className="text-white text-4xl font-bold">
					<img src="/Logos/2/SVG.svg" alt="" className="w-20 h-20 hover:scale-120 transition-all" />
				</motion.a>

				<div className="cursor-pointer flex items-center justify-center gap-5" onMouseEnter={() => setIsMenuOpen(true)}
					onMouseLeave={() => setIsMenuOpen(false)}>
					<AnimatePresence>
						{
							isMenuOpen &&
							<motion.div
								initial={{ scaleX: 0 }}
								animate={{ scaleX: 1 }}
								exit={{ scaleX: 0 }}
								transition={{ duration: 0.3, ease: CUBIC_BEIZER }}
								className="text-white origin-right bg-secondary-background py-3 px-5 rounded-2xl flex-col md:flex-row flex items-center justify-center gap-3">
								<AnimatePresence>
									{
										isMenuOpen &&
										<motion.button
											initial={{ opacity: 0, translateY: 20 }}
											animate={{ opacity: 1, translateY: 0 }}
											exit={{ opacity: 0, translateY: -20 }}
											transition={{ duration: 0.3, ease: "easeInOut" }}
											viewport={{ once: false, amount: 1 }}
											onClick={() => scrollToSection(homeRef)}
											className="flex items-center justify-center flex-col relative cursor-pointer group">
											<h3 className="text-xl">Home</h3>
											<div className="w-2 h-2 rounded-full bg-white absolute -bottom-4 scale-0 group-hover:scale-100 transition-all duration-500 ease-out"></div>
										</motion.button>
									}
								</AnimatePresence>
								<AnimatePresence>
									{/* Splitter */}
									{
										isMenuOpen &&
										<motion.div
											initial={{ opacity: 0, translateY: 20 }}
											animate={{ opacity: 1, translateY: 0 }}
											exit={{ opacity: 0, translateY: -20 }}
											transition={{ delay: 0.2, duration: 0.3, ease: "easeInOut" }}
											viewport={{ once: false, amount: 1 }}
											className="w-1.5 h-1.5 rounded-full bg-white"></motion.div>
									}
								</AnimatePresence>
								<AnimatePresence>
									{
										isMenuOpen &&
										<motion.button
											initial={{ opacity: 0, translateY: 20 }}
											animate={{ opacity: 1, translateY: 0 }}
											exit={{ opacity: 0, translateY: -20 }}
											transition={{ delay: 0.3, duration: 0.3, ease: "easeInOut" }}
											viewport={{ once: false, amount: 1 }}

											onClick={() => scrollToSection(projectsRef)}
											className="flex items-center justify-center flex-col relative cursor-pointer group">
											<h3 className="text-xl">Work</h3>
											<div className="w-2 h-2 rounded-full bg-white absolute -bottom-4 scale-0 group-hover:scale-100 transition-all duration-500 ease-out"></div>
										</motion.button>
									}
								</AnimatePresence>
								<AnimatePresence>
									{/* Splitter */}
									{
										isMenuOpen &&
										<motion.div
											initial={{ opacity: 0, translateY: 20 }}
											animate={{ opacity: 1, translateY: 0 }}
											exit={{ opacity: 0, translateY: -20 }}
											transition={{ delay: 0.4, duration: 0.3, ease: "easeInOut" }}
											viewport={{ once: false, amount: 1 }}
											className="w-1.5 h-1.5 rounded-full bg-white"></motion.div>
									}
								</AnimatePresence>
								<AnimatePresence>
									{
										isMenuOpen &&
										<motion.button
											initial={{ opacity: 0, translateY: 20 }}
											animate={{ opacity: 1, translateY: 0 }}
											exit={{ opacity: 0, translateY: -20 }}
											transition={{ delay: 0.5, duration: 0.3, ease: "easeInOut" }}
											viewport={{ once: false, amount: 1 }}

											onClick={() => scrollToSection(aboutRef)}
											className="flex items-center justify-center flex-col relative cursor-pointer group">
											<h3 className="text-xl">About</h3>
											<div className="w-2 h-2 rounded-full bg-white absolute -bottom-4 scale-0 group-hover:scale-100 transition-all duration-500 ease-out"></div>
										</motion.button>
									}
								</AnimatePresence>
							</motion.div>
						}
					</AnimatePresence>

					<GiHamburgerMenu className="text-4xl bg-white p-2 rounded-xl " />
				</div>

				<div className="text-white flex-col md:flex-row group-hover:flex items-center justify-center gap-3 hidden">
					<motion.button
						initial={{ opacity: 0, translateY: 20 }}
						animate={{ opacity: 1, translateY: 0 }}
						transition={{ delay: isMounted ? 0.4 : 2.8, duration: 0.5, ease: "easeInOut" }}

						onClick={() => scrollToSection(homeRef)}
						className="flex items-center justify-center flex-col relative cursor-pointer group">
						<h3 className="text-xl">Home</h3>
						<div className="w-2 h-2 rounded-full bg-white absolute -bottom-4 scale-0 group-hover:scale-100 transition-all duration-500 ease-out"></div>
					</motion.button>
					{/* Splitter */}
					<motion.div
						initial={{ opacity: 0, translateY: 20 }}
						animate={{ opacity: 1, translateY: 0 }}
						transition={{ delay: isMounted ? 0.5 : 2.9, duration: 0.5, ease: "easeInOut" }}


						className="w-1.5 h-1.5 rounded-full bg-white"></motion.div>
					<motion.button
						initial={{ opacity: 0, translateY: 20 }}
						animate={{ opacity: 1, translateY: 0 }}
						transition={{ delay: isMounted ? 0.6 : 3, duration: 0.5, ease: "easeInOut" }}

						onClick={() => scrollToSection(projectsRef)}
						className="flex items-center justify-center flex-col relative cursor-pointer group">
						<h3 className="text-xl">Work</h3>
						<div className="w-2 h-2 rounded-full bg-white absolute -bottom-4 scale-0 group-hover:scale-100 transition-all duration-500 ease-out"></div>
					</motion.button>
					{/* Splitter */}
					<motion.div
						initial={{ opacity: 0, translateY: 20 }}
						animate={{ opacity: 1, translateY: 0 }}
						transition={{ delay: isMounted ? 0.7 : 3.1, duration: 0.5, ease: "easeInOut" }}
						className="w-1.5 h-1.5 rounded-full bg-white"></motion.div>
					<motion.button
						initial={{ opacity: 0, translateY: 20 }}
						animate={{ opacity: 1, translateY: 0 }}
						transition={{ delay: isMounted ? 0.8 : 3.2, duration: 0.5, ease: "easeInOut" }}

						onClick={() => scrollToSection(aboutRef)}
						className="flex items-center justify-center flex-col relative cursor-pointer group">
						<h3 className="text-xl">About</h3>
						<div className="w-2 h-2 rounded-full bg-white absolute -bottom-4 scale-0 group-hover:scale-100 transition-all duration-500 ease-out"></div>
					</motion.button>
				</div>
			</nav>

			{/* Project */}
			{/* <div className="w-screen h-screen bg-background overflow-y-scroll" style={{ display: isProject ? "block" : "none" }}>
				<section className="px-5 lg:px-10 xl:px-20 py-20 h-screen box-border snap-start">

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

				<section className="px-5 lg:px-10 xl:px-20 py-20 h-screen box-border">
					<h1 className="text-5xl text-white">Details</h1>
					<div className="grid grid-cols-4 w-[95%] md:w-[90%] mx-auto gap-5 mt-5">
						<div className="bg-secondary-background p-5 w-full h-full rounded-2xl flex flex-col items-start justify-center col-span-2">
							<h3 className="text-muted text-xl">Overview</h3>
							<h2 className="text-white text-2xl font-medium">{project.mainHeadline}</h2>
						</div>
						<div className="bg-secondary-background w-full p-5 rounded-2xl flex flex-col items-start justify-center col-span-2 text-muted text-lg font-medium">
							{project.secondParagraph}
						</div>
						<div className="bg-secondary-background w-full p-5 rounded-2xl flex flex-col gap-3 items-start justify-center col-span-2">
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
									className="bg-secondary-background self-stretch w-full p-5 rounded-2xl flex items-center justify-center">
									<AiFillGithub className="text-white text-5xl hover:text-golden cursor-pointer" />
								</a>
								:
								<div
									className="bg-secondary-background self-stretch w-full p-5 rounded-2xl flex items-center justify-center">
									<AiFillGithub className="text-muted text-5xl" />
								</div>
						}
						{
							project.websiteLink ?
								<a
									href={project.websiteLink}
									target="_blank"
									className="bg-secondary-background w-full self-stretch p-5 rounded-2xl flex items-center justify-center">
									<BiGlobe className="text-white text-5xl hover:text-golden cursor-pointer" />
								</a>
								:
								<div
									className="bg-secondary-background w-full self-stretch p-5 rounded-2xl flex items-center justify-center">
									<BiGlobe className="text-muted text-5xl " />
								</div>

						}
						<div className="bg-secondary-background w-full p-5 rounded-2xl flex flex-col col-span-2">
							<h1 className="text-xl font-medium text-muted">Full description</h1>
							<h3 className="text-white font-medium text-2xl">
								{project.mainParagraph}
							</h3>
						</div>
						<div className="bg-secondary-background w-full h-full p-5 rounded-2xl flex flex-col col-span-2">
							<h1 className="text-xl font-medium text-muted">Quote</h1>
							<h3 className="text-white font-medium text-2xl italic">
								{project.quote}
							</h3>
						</div>
					</div>
				</section>
			</div> */}

			{/* Main */}
			{
				isProject ?
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
								<div className="bg-secondary-background p-5 w-full h-full rounded-2xl flex flex-col items-start justify-center col-span-2">
									<h3 className="text-muted text-xl">Overview</h3>
									<h2 className="text-white text-2xl font-medium">{project.mainHeadline}</h2>
								</div>
								<div className="bg-secondary-background w-full p-5 rounded-2xl flex flex-col items-start justify-center col-span-2 text-muted text-lg font-medium">
									{project.secondParagraph}
								</div>
								<div className="bg-secondary-background w-full p-5 rounded-2xl flex flex-col gap-3 items-start justify-center col-span-2">
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
											className="bg-secondary-background self-stretch w-full p-5 rounded-2xl flex items-center justify-center">
											<AiFillGithub className="text-white text-5xl hover:text-golden cursor-pointer" />
										</a>
										:
										<div
											className="bg-secondary-background self-stretch w-full p-5 rounded-2xl flex items-center justify-center">
											<AiFillGithub className="text-muted text-5xl" />
										</div>
								}
								{
									project.websiteLink ?
										<a
											href={project.websiteLink}
											target="_blank"
											className="bg-secondary-background w-full self-stretch p-5 rounded-2xl flex items-center justify-center">
											<BiGlobe className="text-white text-5xl hover:text-golden cursor-pointer" />
										</a>
										:
										<div
											className="bg-secondary-background w-full self-stretch p-5 rounded-2xl flex items-center justify-center">
											<BiGlobe className="text-muted text-5xl " />
										</div>

								}
								<div className="bg-secondary-background w-full p-5 rounded-2xl flex flex-col col-span-2">
									<h1 className="text-xl font-medium text-muted">Full description</h1>
									<h3 className="text-white font-medium text-2xl">
										{project.mainParagraph}
									</h3>
								</div>
								<div className="bg-secondary-background w-full h-full p-5 rounded-2xl flex flex-col col-span-2">
									<h1 className="text-xl font-medium text-muted">Quote</h1>
									<h3 className="text-white font-medium text-2xl italic">
										{project.quote}
									</h3>
								</div>
							</div>
						</section>
					</main>
				:
					<main className={clsx("w-screen h-screen overflow-x-hidden bg-background overflow-y-scroll", {
						"md:snap-y md:snap-mandatory": !isProject
					})} >

						{/* Hero Desktop */}
						<section className="h-screen overflow-hidden relative snap-start hidden md:block bg-center bg-no-repeat" ref={homeRef} style={{ display: isProject ? "none" : "" }}>

							{/* Based In Egypt */}
							<motion.div
								initial={{ x: "-100%" }}
								animate={{ x: "0%" }}
								transition={{ delay: isMounted ? 2 : 4.4, duration: 0.5, ease: CUBIC_BEIZER }}
								viewport={{ once: false, amount: 1 }}
								className="absolute hidden md:flex z-5 top-1/4 left-0 w-50 h-20 bg-secondary-background rounded-r-full items-center justify-end px-3">
								<h3 className="text-muted text-wrap text-lg font-medium w-fit ">Based In Egypt</h3>
								<div
									className="h-[80%] aspect-square bg-white rounded-full flex items-center justify-center p-3">
									<GiEgyptianSphinx className="w-full h-full text-golden" />
								</div>
							</motion.div>

							<div className="h-full flex items-center justify-start md:justify-center z-5">
								<motion.div
									initial={{ scale: 0.9 }}
									animate={{ scale: 1 }}
									transition={{ delay: isMounted ? 1.8 : 3.2, duration: 1, ease: "easeInOut" }}
									className="w-fit flex flex-col items-start md:items-center justify-center gap-5">
									<h1 className="text-white text-5xl sm:text-8xl md:text-[130px] md:leading-[100px] lg:text-[180px] lg:leading-[130px] xl:text-[200px] xl:leading-[150px] font-medium tracking-widest overflow-hidden space-x-8">
										<motion.span
											initial={{ y: "100%" }}
											animate={{ y: "0%" }}
											transition={{ delay: isMounted ? 2 : 3.4, duration: 0.6, ease: CUBIC_BEIZER }}
											className="inline-block"
										>
											HI</motion.span>
										<motion.span
											initial={{ y: "100%" }}
											animate={{ y: "0%" }}
											transition={{ delay: isMounted ? 2.2 : 3.6, duration: 0.6, ease: CUBIC_BEIZER }}
											className="md:inline-block hidden"
										>
											THERE</motion.span>
									</h1>
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: isMounted ? 2.2 : 3.6, duration: 0.6, ease: CUBIC_BEIZER }}
										className="w-full flex items-center justify-between px-5">
										<h4 className="text-muted font-jersey text-sm sm:text-2xl">Omar Emad</h4>
										<h4 className="text-muted font-jersey text-sm sm:text-2xl">Software Engineer</h4>
									</motion.div>
									<h1 className="text-white text-5xl sm:text-8xl md:text-[130px] md:leading-[100px] lg:text-[180px] lg:leading-[130px] xl:text-[200px] xl:leading-[150px] font-medium tracking-tighter overflow-hidden space-x-8">
										<motion.span
											initial={{ y: "100%" }}
											animate={{ y: "0%" }}
											transition={{ delay: isMounted ? 2.4 : 3.8, duration: 0.6, ease: CUBIC_BEIZER }}
											className="inline-block"
										>
											I</motion.span>
										<motion.span
											initial={{ y: "100%" }}
											animate={{ y: "0%" }}
											transition={{ delay: isMounted ? 2.6 : 4, duration: 0.6, ease: CUBIC_BEIZER }}
											className="inline-block"
										>
											AM</motion.span>
										<motion.span
											initial={{ y: "100%" }}
											animate={{ y: "0%" }}
											transition={{ delay: isMounted ? 2.8 : 4.2, duration: 0.6, ease: CUBIC_BEIZER }}
											className="inline-block"
										>
											OM3X4
										</motion.span>
									</h1>
								</motion.div>
								<div

									className="text-white text-2xl absolute bottom-10 flex flex-col items-center justify-center"
								>
									<h1 className="text-xs font-thin">Scroll</h1>
									<BiChevronsDown className="animate-pulse " />
								</div>
							</div>

						</section>

						{/* Hero Mobile */}
						<section className="h-screen overflow-hidden relative md:hidden flex items-center justify-start px-5" style={{ display: isProject ? "none" : "" }}>
							<div className="py-20">
								<h1 className="text-7xl text-white">HI</h1>
								<h1 className="text-7xl text-white">IAM</h1>
								<h1 className="text-2xl text-muted">or Omar Emad</h1>
								<h1 className="text-7xl text-white">OM3X4</h1>
							</div>
						</section>

						<section className="h-screen space-y-5 overflow-hidden relative py-20 px-8 snap-start" style={{ display: isProject ? "none" : "block" }}>
							<div className="grid lg:grid-cols-2 w-full h-fit overflow-hidden gap-15">
								<div className="text-muted text-3xl sm:text-3xl md:text-4xl lg:text-5xl self-end">
									<motion.h1
										initial={{ opacity: 0, y: 40, rotate: 12 }}
										whileInView={{ opacity: 1, y: 0, rotate: 0 }}
										transition={{ duration: 0.6, ease: CUBIC_BEIZER }}
										viewport={{ once: false, amount: 0.1 }}
										className="text-muted origin-left overflow-hidden"
									>
										I’m <span className="text-white">Omar Emad</span>, <span className="text-white">17 (2008)</span>.
									</motion.h1>
									<motion.h1
										initial={{ opacity: 0, y: 40, rotate: 12 }}
										whileInView={{ opacity: 1, y: 0, rotate: 0 }}
										transition={{ delay: 0.1, duration: 0.6, ease: CUBIC_BEIZER }}
										viewport={{ once: false, amount: 0.1 }}
										className="text-muted origin-left overflow-hidden"
									>
										A high schooler into <span className="text-white">chess</span>, Rubik’s cubes,
										and building things.
										<span className="text-white">Self-taught</span>, performance-driven,
										and <span className="text-white">fast</span> on the keyboard.
									</motion.h1>
								</div>
								<div className="grid grid-cols-3 grid-rows-2 lg:grid-rows-3 gap-5 h-fit">
									{/* Egypt */}
									<motion.div
										initial={{ opacity: 0, x: -40 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.6, ease: CUBIC_BEIZER }}
										viewport={{ once: false, amount: 0.5 }}
										className="w-full h-full bg-secondary-background rounded-2xl hidden lg:flex items-center justify-center p-3">
										<GiEgyptianWalk className="text-5xl text-golden" />
									</motion.div>

									{/* Leetcode */}
									<motion.div
										initial={{ opacity: 0, y: -40 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.5, duration: 0.6, ease: CUBIC_BEIZER }}
										viewport={{ once: false, amount: 0.5 }}
										className="w-full h-full bg-secondary-background rounded-2xl flex flex-col items-center justify-center gap-3 p-3">
										<span className="text-white text-2xl md:text-4xl font-semibold">238+</span>
										<a href={links.leetcode} target="_blank"><SiLeetcode className="text-2xl text-golden" /></a>
									</motion.div>

									{/* Monkeytype */}
									<motion.div
										initial={{ opacity: 0, x: 40 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.7, duration: 0.6, ease: CUBIC_BEIZER }}
										viewport={{ once: false, amount: 0.5 }}
										className="w-full h-full bg-secondary-background rounded-2xl flex flex-col items-center justify-center gap-3 p-3">
										<span className="text-white text-2xl text-center md:text-4xl font-semibold">216+ <span className="text-muted text-base font-normal">WPM</span></span>
										<a href={links.monkeytype} target="_blank" rel="noopener noreferrer"><SiMonkeytype className="text-2xl text-golden" /></a>
									</motion.div>

									{/* Starting Date */}
									<motion.div
										initial={{ opacity: 0, x: -40 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.3, duration: 0.6, ease: CUBIC_BEIZER }}
										viewport={{ once: false, amount: 0.5 }}
										className="w-full h-full bg-secondary-background rounded-2xl flex flex-col items-center justify-center p-3">
										<span className="text-muted text-base text-center md:text-3xl font-medium">Dev Since</span>
										<h1 className="text-white text-center text-2xl md:text-3xl font-semibold">2024</h1>
									</motion.div>

									{/* Availabilty */}
									<motion.div
										initial={{ opacity: 0, x: 40 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.9, duration: 0.6, ease: CUBIC_BEIZER }}
										viewport={{ once: false, amount: 0.5 }}
										className="w-full h-full bg-secondary-background rounded-2xl flex flex-col items-center justify-center p-3 lg:col-span-2">
										<h1 className="text-white text-center text-xl md:text-3xl font-semibold">Open To Work</h1>
									</motion.div>

									{/* Scroll to see the work */}
									<motion.div
										initial={{ opacity: 0, y: 40 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.8, duration: 0.6, ease: CUBIC_BEIZER }}
										viewport={{ once: false, amount: 0.5 }}
										className="w-full h-full bg-secondary-background rounded-2xl hidden lg:flex flex-col items-center justify-center p-3">
										<h1 className="text-white text-xl text-center">Scroll To See My Projects</h1>
										<div
											className="text-white text-2xl flex flex-col items-center justify-center"
										>
											<BiChevronsDown className="animate-pulse " />
										</div>
									</motion.div>

									{/* Full Stack */}
									<motion.div
										initial={{ opacity: 0, y: 40 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, ease: CUBIC_BEIZER }}
										viewport={{ once: false, amount: 0.5 }}
										className="w-full h-full bg-secondary-background rounded-2xl flex flex-col items-center justify-center p-3 col-span-2">
										<h1 className="text-white text-center text-2xl md:text-3xl font-semibold">Full Stack Developer <span className="text-muted text-base">Temporarily</span></h1>
									</motion.div>


								</div>
							</div>
							<div className="w-fit mx-auto">
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
						</section>

						<div className="relative" ref={projectsRef} style={{ display: isProject ? "none" : "block" }}>
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
											className="absolute cursor-pointer brightness-40 rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] lg:w-[60%] lg:h-auto"
										>
											<img
												src={project.images[0]}
												alt=""
												className="w-full shadow-2xl shadow-black rounded-2xl cursor-pointer"
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
						</div>

						<section className="h-screen w-screen text-9xl text-amber-50 snap-start py-10 md:py-0" ref={aboutRef} style={{ display: isProject ? "none" : "block" }}>
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
												<div style={{ color: skill.color }}>
													{skill.icon}
												</div>
											))
										}
									</div>
								</motion.div>
							</div>
						</section>

						<motion.footer
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 3, duration: 0.6, ease: CUBIC_BEIZER }}
							className="flex items-center justify-center fixed bottom-10 left-10 gap-2 px-3 py-2 rounded-full bg-secondary-background border border-muted">
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
							<a href={links.leetcode} target="_blank" className="social-button"><SiLeetcode /></a>
							<a href={links.dev} target="_blank" className="social-button"><FaDev /></a>
						</motion.footer>
					</main>
			}
		</div>
	)

	// return (
	// 	<div className="w-screen min-h-screen">

	// 		<InvertedCursor />

	// 		{/* <div className="absolute top-10 right-10 z-1000 w-10 h-10 bg-red-500 sm:bg-orange-400 md:bg-yellow-400 lg:bg-green-500 xl:bg-white"></div> */}

	// 		{/* Intro */}
	// 		{/* Responsive ✅ */}
	// 		<motion.div className="fixed top-0 w-screen bg-black origin-top overflow-hidden z-50"
	// 			initial={{ height: "50vh" }}
	// 			animate={{ height: "0vh" }}
	// 			transition={{ delay: 2, duration: 0.8, ease: CUBIC_BEIZER }}
	// 		>
	// 			<motion.h1
	// 				className="text-[50px] sm:text-[70px] md:text-[110px] lg:text-[150px] xl:text-[200px] font-bold text-white text-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-nowrap"
	// 				initial={{ x: "-100vw" }} // starts outside the right edge
	// 				animate={{ x: "0" }}  // moves to center (adjust if needed)
	// 				transition={{ delay: 0.8, duration: 0.4, ease: CUBIC_BEIZER }}
	// 			// transition={{ delay: 0.3, duration: 0.8, ease: CUBIC_BEIZER }}
	// 			>
	// 				OMAR EMAD
	// 			</motion.h1>
	// 		</motion.div>
	// 		<motion.div
	// 			className="fixed bottom-0 w-screen bg-black origin-top overflow-hidden z-50"
	// 			initial={{ height: "50vh" }}
	// 			animate={{ height: "0vh" }}
	// 			transition={{ delay: 2, duration: 0.8, ease: CUBIC_BEIZER }}
	// 		>
	// 			<motion.h1
	// 				className="text-[70px] sm:text-[90px] md:text-[180px] lg:text-[230px] xl:text-[300px] font-bold text-white text-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
	// 				initial={{ x: "100vw" }} // starts outside the right edge
	// 				animate={{ x: "0" }}  // moves to center (adjust if needed)
	// 				transition={{ delay: 0.8, duration: 0.4, ease: CUBIC_BEIZER }}
	// 			>
	// 				OM3X4
	// 			</motion.h1>
	// 		</motion.div>

	// 		<OverlayTransition show={showOverlay} direction="up" fill={project.backgroundColor} text={project.name} />
	// 		<OverlayTransition show={showReturnOverlay} direction="down" fill={"#1e1e1e"} text={"Home"} />

	// 		<nav className="fixed z-50 top-0 w-full pl-5 pr-15 py-4 flex md:items-end justify-between">
	// 			<motion.a
	// 				initial={{ opacity: 0, y: -20 }}
	// 				animate={{ opacity: 1, y: 0 }}
	// 				transition={{ delay: isMounted ? 0.4 : 2.8, duration: 0.5, ease: CUBIC_BEIZER }}
	// 				href="/"
	// 				className="text-white text-4xl font-bold">
	// 				<img src="/Logos/2/SVG.svg" alt="" className="w-20 h-20 hover:scale-120 transition-all" />
	// 			</motion.a>


	// 			<div className="text-white flex-col md:flex-row flex items-center justify-center gap-3">
	// 				<motion.button
	// 					initial={{ opacity: 0, translateY: 20 }}
	// 					animate={{ opacity: 1, translateY: 0 }}
	// 					transition={{ delay: isMounted ? 0.4 : 2.8, duration: 0.5, ease: "easeInOut" }}

	// 					onClick={() => scrollToSection(homeRef)}
	// 					className="flex items-center justify-center flex-col relative cursor-pointer group">
	// 					<h3 className="text-xl">Home</h3>
	// 					<div className="w-2 h-2 rounded-full bg-white absolute -bottom-4 scale-0 group-hover:scale-100 transition-all duration-500 ease-out"></div>
	// 				</motion.button>
	// 				{/* Splitter */}
	// 				<motion.div
	// 					initial={{ opacity: 0, translateY: 20 }}
	// 					animate={{ opacity: 1, translateY: 0 }}
	// 					transition={{ delay: isMounted ? 0.5 : 2.9, duration: 0.5, ease: "easeInOut" }}


	// 					className="w-1.5 h-1.5 rounded-full bg-white"></motion.div>
	// 				<motion.button
	// 					initial={{ opacity: 0, translateY: 20 }}
	// 					animate={{ opacity: 1, translateY: 0 }}
	// 					transition={{ delay: isMounted ? 0.6 : 3, duration: 0.5, ease: "easeInOut" }}

	// 					onClick={() => scrollToSection(projectsRef)}
	// 					className="flex items-center justify-center flex-col relative cursor-pointer group">
	// 					<h3 className="text-xl">Work</h3>
	// 					<div className="w-2 h-2 rounded-full bg-white absolute -bottom-4 scale-0 group-hover:scale-100 transition-all duration-500 ease-out"></div>
	// 				</motion.button>
	// 				{/* Splitter */}
	// 				<motion.div
	// 					initial={{ opacity: 0, translateY: 20 }}
	// 					animate={{ opacity: 1, translateY: 0 }}
	// 					transition={{ delay: isMounted ? 0.7 : 3.1, duration: 0.5, ease: "easeInOut" }}
	// 					className="w-1.5 h-1.5 rounded-full bg-white"></motion.div>
	// 				<motion.button
	// 					initial={{ opacity: 0, translateY: 20 }}
	// 					animate={{ opacity: 1, translateY: 0 }}
	// 					transition={{ delay: isMounted ? 0.8 : 3.2, duration: 0.5, ease: "easeInOut" }}

	// 					onClick={() => scrollToSection(aboutRef)}
	// 					className="flex items-center justify-center flex-col relative cursor-pointer group">
	// 					<h3 className="text-xl">About</h3>
	// 					<div className="w-2 h-2 rounded-full bg-white absolute -bottom-4 scale-0 group-hover:scale-100 transition-all duration-500 ease-out"></div>
	// 				</motion.button>
	// 			</div>
	// 		</nav>

	// 		{/* Project */}
	// 		<div className="w-screen h-screen bg-background overflow-y-scroll" style={{ display: isProject ? "block" : "none" }}>
	// 			<section className="px-5 lg:px-10 xl:px-20 py-20 h-screen box-border snap-start">

	// 				<motion.div
	// 					initial={{ opacity: 0, y: 160 }}
	// 					animate={{ opacity: 1, y: 0 }}
	// 					transition={{ delay: 0.45, duration: 0.5, ease: CUBIC_BEIZER }}
	// 					className="flex items-end gap-5">
	// 					<h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white"
	// 						style={{ textShadow: `6px 6px 0 ${project.backgroundColor}` }}>{project.name}</h1>
	// 					<h3 className="text-muted text-xl lg:text-2xl xl:text-3xl">{parseDate(project.date).toDateString()}</h3>
	// 				</motion.div>

	// 				<motion.img
	// 					initial={{ opacity: 0, y: 160 }}
	// 					animate={{ opacity: 1, y: 0 }}
	// 					transition={{ delay: 0.45, duration: 0.8, ease: CUBIC_BEIZER }}
	// 					src={project.images[0]}
	// 					alt=""
	// 					className="object-cover object-center w-full h-[calc(100vh-160px)] mx-auto rounded-2xl mt-5"
	// 				/>
	// 			</section>

	// 			<section className="px-5 lg:px-10 xl:px-20 py-20 h-screen box-border">
	// 				<h1 className="text-5xl text-white">Details</h1>
	// 				<div className="grid grid-cols-4 w-[95%] md:w-[90%] mx-auto gap-5 mt-5">
	// 					<div className="bg-secondary-background p-5 w-full h-full rounded-2xl flex flex-col items-start justify-center col-span-2">
	// 						<h3 className="text-muted text-xl">Overview</h3>
	// 						<h2 className="text-white text-2xl font-medium">{project.mainHeadline}</h2>
	// 					</div>
	// 					<div className="bg-secondary-background w-full p-5 rounded-2xl flex flex-col items-start justify-center col-span-2 text-muted text-lg font-medium">
	// 						{project.secondParagraph}
	// 					</div>
	// 					<div className="bg-secondary-background w-full p-5 rounded-2xl flex flex-col gap-3 items-start justify-center col-span-2">
	// 						<h1 className="text-xl font-medium text-muted">Stack</h1>
	// 						<div className="flex items-center justify-center gap-5 flex-wrap">

	// 							{
	// 								project.stack.map((technology) => (
	// 									<span className="text-3xl text-white">
	// 										{technology.icon}
	// 									</span>
	// 								))
	// 							}
	// 						</div>
	// 					</div>
	// 					{
	// 						project.codeLink ?
	// 							<a
	// 								href={project.codeLink}
	// 								target="_blank"
	// 								className="bg-secondary-background self-stretch w-full p-5 rounded-2xl flex items-center justify-center">
	// 								<AiFillGithub className="text-white text-5xl hover:text-golden cursor-pointer" />
	// 							</a>
	// 							:
	// 							<div
	// 								className="bg-secondary-background self-stretch w-full p-5 rounded-2xl flex items-center justify-center">
	// 								<AiFillGithub className="text-muted text-5xl" />
	// 							</div>
	// 					}
	// 					{
	// 						project.websiteLink ?
	// 							<a
	// 								href={project.websiteLink}
	// 								target="_blank"
	// 								className="bg-secondary-background w-full self-stretch p-5 rounded-2xl flex items-center justify-center">
	// 								<BiGlobe className="text-white text-5xl hover:text-golden cursor-pointer" />
	// 							</a>
	// 							:
	// 							<div
	// 								className="bg-secondary-background w-full self-stretch p-5 rounded-2xl flex items-center justify-center">
	// 								<BiGlobe className="text-muted text-5xl " />
	// 							</div>

	// 					}
	// 					<div className="bg-secondary-background w-full p-5 rounded-2xl flex flex-col col-span-2">
	// 						<h1 className="text-xl font-medium text-muted">Full description</h1>
	// 						<h3 className="text-white font-medium text-2xl">
	// 							{project.mainParagraph}
	// 						</h3>
	// 					</div>
	// 					<div className="bg-secondary-background w-full h-full p-5 rounded-2xl flex flex-col col-span-2">
	// 						<h1 className="text-xl font-medium text-muted">Quote</h1>
	// 						<h3 className="text-white font-medium text-2xl italic">
	// 							{project.quote}
	// 						</h3>
	// 					</div>
	// 				</div>
	// 			</section>
	// 		</div>

	// 		{/* Main */}
	// 		<main className="w-screen h-screen overflow-x-hidden bg-background overflow-y-scroll md:snap-y md:snap-mandatory" style={{ display: isProject ? "none" : "block" }}>

	// 			{/* Hero Desktop */}
	// 			<section className="h-screen overflow-hidden relative snap-start hidden md:block bg-center bg-no-repeat" ref={homeRef}>

	// 				{/* Based In Egypt */}
	// 				<motion.div
	// 					initial={{ x: "-100%" }}
	// 					animate={{ x: "0%" }}
	// 					transition={{ delay: isMounted ? 2 : 4.4, duration: 0.5, ease: CUBIC_BEIZER }}
	// 					viewport={{ once: false, amount: 1 }}
	// 					className="absolute hidden md:flex z-5 top-1/4 left-0 w-50 h-20 bg-secondary-background rounded-r-full items-center justify-end px-3">
	// 					<h3 className="text-muted text-wrap text-lg font-medium w-fit ">Based In Egypt</h3>
	// 					<div
	// 						className="h-[80%] aspect-square bg-white rounded-full flex items-center justify-center p-3">
	// 						<GiEgyptianSphinx className="w-full h-full text-golden" />
	// 					</div>
	// 				</motion.div>

	// 				<div className="h-full flex items-center justify-start md:justify-center z-5">
	// 					<motion.div
	// 						initial={{ scale: 0.9 }}
	// 						animate={{ scale: 1 }}
	// 						transition={{ delay: isMounted ? 1.8 : 3.2, duration: 1, ease: "easeInOut" }}
	// 						className="w-fit flex flex-col items-start md:items-center justify-center gap-5">
	// 						<h1 className="text-white text-5xl sm:text-8xl md:text-[130px] md:leading-[100px] lg:text-[180px] lg:leading-[130px] xl:text-[200px] xl:leading-[150px] font-medium tracking-widest overflow-hidden space-x-8">
	// 							<motion.span
	// 								initial={{ y: "100%" }}
	// 								animate={{ y: "0%" }}
	// 								transition={{ delay: isMounted ? 2 : 3.4, duration: 0.6, ease: CUBIC_BEIZER }}
	// 								className="inline-block"
	// 							>
	// 								HI</motion.span>
	// 							<motion.span
	// 								initial={{ y: "100%" }}
	// 								animate={{ y: "0%" }}
	// 								transition={{ delay: isMounted ? 2.2 : 3.6, duration: 0.6, ease: CUBIC_BEIZER }}
	// 								className="md:inline-block hidden"
	// 							>
	// 								THERE</motion.span>
	// 						</h1>
	// 						<motion.div
	// 							initial={{ opacity: 0 }}
	// 							animate={{ opacity: 1 }}
	// 							transition={{ delay: isMounted ? 2.2 : 3.6, duration: 0.6, ease: CUBIC_BEIZER }}
	// 							className="w-full flex items-center justify-between px-5">
	// 							<h4 className="text-muted font-jersey text-sm sm:text-2xl">Omar Emad</h4>
	// 							<h4 className="text-muted font-jersey text-sm sm:text-2xl">Software Engineer</h4>
	// 						</motion.div>
	// 						<h1 className="text-white text-5xl sm:text-8xl md:text-[130px] md:leading-[100px] lg:text-[180px] lg:leading-[130px] xl:text-[200px] xl:leading-[150px] font-medium tracking-tighter overflow-hidden space-x-8">
	// 							<motion.span
	// 								initial={{ y: "100%" }}
	// 								animate={{ y: "0%" }}
	// 								transition={{ delay: isMounted ? 2.4 : 3.8, duration: 0.6, ease: CUBIC_BEIZER }}
	// 								className="inline-block"
	// 							>
	// 								I</motion.span>
	// 							<motion.span
	// 								initial={{ y: "100%" }}
	// 								animate={{ y: "0%" }}
	// 								transition={{ delay: isMounted ? 2.6 : 4, duration: 0.6, ease: CUBIC_BEIZER }}
	// 								className="inline-block"
	// 							>
	// 								AM</motion.span>
	// 							<motion.span
	// 								initial={{ y: "100%" }}
	// 								animate={{ y: "0%" }}
	// 								transition={{ delay: isMounted ? 2.8 : 4.2, duration: 0.6, ease: CUBIC_BEIZER }}
	// 								className="inline-block"
	// 							>
	// 								OM3X4
	// 							</motion.span>
	// 						</h1>
	// 					</motion.div>
	// 					<div

	// 						className="text-white text-2xl absolute bottom-10 flex flex-col items-center justify-center"
	// 					>
	// 						<h1 className="text-xs font-thin">Scroll</h1>
	// 						<BiChevronsDown className="animate-pulse " />
	// 					</div>
	// 				</div>

	// 			</section>

	// 			{/* Hero Mobile */}
	// 			<section className="h-screen overflow-hidden relative md:hidden flex items-center justify-start px-5">
	// 				<div className="py-20">
	// 					<h1 className="text-7xl text-white">HI</h1>
	// 					<h1 className="text-7xl text-white">IAM</h1>
	// 					<h1 className="text-2xl text-muted">or Omar Emad</h1>
	// 					<h1 className="text-7xl text-white">OM3X4</h1>
	// 				</div>
	// 			</section>



	// 			<section className="h-screen space-y-5 overflow-hidden relative py-15 px-8 snap-start">
	// 				<div className="grid lg:grid-cols-2 w-full h-fit overflow-hidden gap-15">
	// 					<div className="text-muted text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
	// 						<motion.h1
	// 							initial={{ opacity: 0, y: 40, rotate: 12 }}
	// 							whileInView={{ opacity: 1, y: 0, rotate: 0 }}
	// 							transition={{ duration: 0.6, ease: CUBIC_BEIZER }}
	// 							viewport={{ once: false, amount: 0.5 }}
	// 							className="text-muted origin-left overflow-hidden"
	// 						>
	// 							I’m <span className="text-white">Omar Emad</span>, <span className="text-white">17 (2008)</span>.
	// 						</motion.h1>
	// 						<motion.h1
	// 							initial={{ opacity: 0, y: 40, rotate: 12 }}
	// 							whileInView={{ opacity: 1, y: 0, rotate: 0 }}
	// 							transition={{ delay: 0.1, duration: 0.6, ease: CUBIC_BEIZER }}
	// 							viewport={{ once: false, amount: 0.5 }}
	// 							className="text-muted origin-left overflow-hidden"
	// 						>
	// 							A high schooler into <span className="text-white">chess</span>, Rubik’s cubes,
	// 							and building things.
	// 							<span className="text-white">Self-taught</span>, performance-driven,
	// 							and <span className="text-white">fast</span> on the keyboard.
	// 						</motion.h1>
	// 					</div>
	// 					<div className="grid grid-cols-3 grid-rows-2 lg:grid-rows-3 gap-5 h-fit">
	// 						{/* Egypt */}
	// 						<motion.div
	// 							initial={{ opacity: 0, x: -40 }}
	// 							whileInView={{ opacity: 1, x: 0 }}
	// 							transition={{ duration: 0.6, ease: CUBIC_BEIZER }}
	// 							viewport={{ once: false, amount: 0.5 }}
	// 							className="w-full h-full bg-secondary-background rounded-2xl hidden lg:flex items-center justify-center p-3">
	// 							<GiEgyptianWalk className="text-5xl text-golden" />
	// 						</motion.div>

	// 						{/* Leetcode */}
	// 						<motion.div
	// 							initial={{ opacity: 0, y: -40 }}
	// 							whileInView={{ opacity: 1, y: 0 }}
	// 							transition={{ delay: 0.5, duration: 0.6, ease: CUBIC_BEIZER }}
	// 							viewport={{ once: false, amount: 0.5 }}
	// 							className="w-full h-full bg-secondary-background rounded-2xl flex flex-col items-center justify-center gap-3 p-3">
	// 							<span className="text-white text-4xl font-semibold">238+</span>
	// 							<a href={links.leetcode} target="_blank"><SiLeetcode className="text-2xl text-golden" /></a>
	// 						</motion.div>

	// 						{/* Monkeytype */}
	// 						<motion.div
	// 							initial={{ opacity: 0, x: 40 }}
	// 							whileInView={{ opacity: 1, x: 0 }}
	// 							transition={{ delay: 0.7, duration: 0.6, ease: CUBIC_BEIZER }}
	// 							viewport={{ once: false, amount: 0.5 }}
	// 							className="w-full h-full bg-secondary-background rounded-2xl flex flex-col items-center justify-center gap-3 p-3">
	// 							<span className="text-white text-4xl font-semibold">216+ <span className="text-muted text-base font-normal">WPM</span></span>
	// 							<a href={links.monkeytype} target="_blank" rel="noopener noreferrer"><SiMonkeytype className="text-2xl text-golden" /></a>
	// 						</motion.div>

	// 						{/* Starting Date */}
	// 						<motion.div
	// 							initial={{ opacity: 0, x: -40 }}
	// 							whileInView={{ opacity: 1, x: 0 }}
	// 							transition={{ delay: 0.3, duration: 0.6, ease: CUBIC_BEIZER }}
	// 							viewport={{ once: false, amount: 0.5 }}
	// 							className="w-full h-full bg-secondary-background rounded-2xl flex flex-col items-center justify-center p-3">
	// 							<span className="text-muted text-3xl font-medium">Dev Since</span>
	// 							<h1 className="text-white text-3xl font-semibold">2024</h1>
	// 						</motion.div>

	// 						{/* Availabilty */}
	// 						<motion.div
	// 							initial={{ opacity: 0, x: 40 }}
	// 							whileInView={{ opacity: 1, x: 0 }}
	// 							transition={{ delay: 0.9, duration: 0.6, ease: CUBIC_BEIZER }}
	// 							viewport={{ once: false, amount: 0.5 }}
	// 							className="w-full h-full bg-secondary-background rounded-2xl flex flex-col items-center justify-center p-3 lg:col-span-2">
	// 							<h1 className="text-white text-3xl font-semibold">Open To Work</h1>
	// 						</motion.div>

	// 						{/* Scroll to see the work */}
	// 						<motion.div
	// 							initial={{ opacity: 0, y: 40 }}
	// 							whileInView={{ opacity: 1, y: 0 }}
	// 							transition={{ delay: 0.8, duration: 0.6, ease: CUBIC_BEIZER }}
	// 							viewport={{ once: false, amount: 0.5 }}
	// 							className="w-full h-full bg-secondary-background rounded-2xl hidden lg:flex flex-col items-center justify-center p-3">
	// 							<h1 className="text-white text-xl text-center">Scroll To See My Projects</h1>
	// 							<div
	// 								className="text-white text-2xl flex flex-col items-center justify-center"
	// 							>
	// 								<BiChevronsDown className="animate-pulse " />
	// 							</div>
	// 						</motion.div>

	// 						{/* Full Stack */}
	// 						<motion.div
	// 							initial={{ opacity: 0, y: 40 }}
	// 							whileInView={{ opacity: 1, y: 0 }}
	// 							transition={{ duration: 0.6, ease: CUBIC_BEIZER }}
	// 							viewport={{ once: false, amount: 0.5 }}
	// 							className="w-full h-full bg-secondary-background rounded-2xl flex flex-col items-center justify-center p-3 col-span-2">
	// 							<h1 className="text-white text-3xl font-semibold">Full Stack Developer <span className="text-muted text-base">Temporarily</span></h1>
	// 						</motion.div>


	// 					</div>
	// 				</div>
	// 				<div className="w-fit mx-auto">
	// 					<div
	// 						className="w-fit flex items-center justify-center"
	// 					>
	// 						<h1 className="text-7xl sm:text-8xl xl:text-[200px] xl:leading-[200px] text-white">MY</h1>
	// 						<motion.div
	// 							initial={{ marginLeft: 100, marginRight: 100 }}
	// 							whileInView={{ marginLeft: 5, marginRight: 5 }}
	// 							transition={{ duration: 0.8, ease: CUBIC_BEIZER }}
	// 							viewport={{ once: false, amount: 0.5 }}
	// 							className="w-4 h-4 sm:w-7 sm:h-7 bg-white rounded-full"></motion.div>
	// 						<h1 className="text-7xl sm:text-8xl xl:text-[200px] xl:leading-[200px] text-white">WORK</h1>
	// 					</div>
	// 					<motion.div
	// 						initial={{ opacity: 0 }}
	// 						animate={{ opacity: 1 }}
	// 						transition={{ delay: 3.6, duration: 0.6, ease: CUBIC_BEIZER }}
	// 						className="w-full flex items-center justify-between px-5">
	// 						<h4 className="text-muted font-jersey sm:text-2xl">REAL WORLD PROVE</h4>
	// 						<div
	// 							className="text-white text-2xl flex flex-col items-center justify-center"
	// 						>
	// 							<BiChevronsDown className="animate-pulse " />
	// 						</div>
	// 						<h4 className="text-muted font-jersey sm:text-2xl">DEVELOPED BY ME</h4>
	// 					</motion.div>
	// 				</div>
	// 			</section>

	// 			<div className="relative" ref={projectsRef}>
	// 				{
	// 					projects.map((project, index) => (
	// 						<section className="h-screen w-screen snap-start flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: project.backgroundColor }}>
	// 							<motion.button
	// 								initial={{ y: 60, opacity: 0, rotate: 2 }}
	// 								whileInView={{ y: 0, opacity: 1, rotate: 4 }}
	// 								whileTap={{ scale: 0.5 }}
	// 								transition={{ duration: 0.6, ease: CUBIC_BEIZER }}
	// 								viewport={{ once: false, amount: 0.5 }}
	// 								onClick={() => { handleProjectChoosing(index) }}
	// 								className="absolute cursor-pointer brightness-40 rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] lg:w-[60%] lg:h-auto"
	// 							>
	// 								<img
	// 									src={project.images[0]}
	// 									alt=""
	// 									className="w-full shadow-2xl shadow-black rounded-2xl cursor-pointer"
	// 								/>
	// 							</motion.button>
	// 							<h6 className="font-jersey font-bold absolute right-10 bottom-10 text-white text-3xl">{index + 1} / {projects.length}</h6>
	// 							<motion.h1
	// 								initial={{ opacity: 0, y: scrollDirection === "down" ? -60 : 60 }}
	// 								whileInView={{ opacity: 1, y: 0 }}
	// 								transition={{ delay: 0.4, duration: 0.6, ease: CUBIC_BEIZER }}
	// 								viewport={{ once: false, amount: 1 }}
	// 								className="text-6xl lg:text-7xl xl:text-9xl font-bold text-white z-10 overflow-hidden pointer-events-none">
	// 								{project.name}
	// 							</motion.h1>
	// 						</section>
	// 					))
	// 				}
	// 			</div>

	// 			<section className="h-screen w-screen text-9xl text-amber-50 snap-start py-10 md:py-0" ref={aboutRef}>
	// 				<div className="w-fit mx-auto">
	// 					<div
	// 						className="w-fit flex items-center justify-center"
	// 					>
	// 						<h1 className="text-6xl md:text-8xl lg:text-[200px] lg:leading-[200px] text-white">ABOUT</h1>
	// 						<motion.div
	// 							initial={{ marginLeft: 100, marginRight: 100 }}
	// 							whileInView={{ marginLeft: 5, marginRight: 5 }}
	// 							transition={{ duration: 0.8, ease: CUBIC_BEIZER }}
	// 							viewport={{ once: false, amount: 0.5 }}
	// 							className="w-4 h-4 lg:w-7 lg:h-7 bg-white rounded-full"></motion.div>
	// 						<h1 className="text-6xl md:text-8xl lg:text-[200px] lg:leading-[200px] text-white">ME</h1>
	// 					</div>
	// 					<motion.div
	// 						initial={{ opacity: 0 }}
	// 						animate={{ opacity: 1 }}
	// 						transition={{ delay: 3.6, duration: 0.6, ease: CUBIC_BEIZER }}
	// 						className="w-full flex items-center justify-between px-5">
	// 						<h4 className="text-muted font-jersey text-2xl">Omar Emad</h4>
	// 						<div
	// 							className="text-white text-2xl flex flex-col items-center justify-center"
	// 						>
	// 							<BiChevronsDown className="animate-pulse " />
	// 						</div>
	// 						<h4 className="text-muted font-jersey text-2xl">The Real One</h4>
	// 					</motion.div>
	// 				</div>
	// 				<div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-3 gap-5 mt-10">
	// 					<motion.div
	// 						initial={{ opacity: 0, x: -40 }}
	// 						whileInView={{ opacity: 1, x: 0 }}
	// 						transition={{ delay: 0.6, duration: 0.6, ease: CUBIC_BEIZER }}
	// 						viewport={{ once: false, amount: 0.5 }}
	// 						className="w-full h-full bg-secondary-background rounded-2xl flex items-center justify-center px-10 py-3 col-span-3 md:col-span-2 text-xl">
	// 						Self-taught software engineer with strong experience in building full-stack digital products, passionate about clean code, performance, and creating tools that are both functional and impactful.
	// 					</motion.div>
	// 					<motion.div
	// 						initial={{ opacity: 0, x: 40 }}
	// 						whileInView={{ opacity: 1, x: 0 }}
	// 						transition={{ delay: 0.8, duration: 0.6, ease: CUBIC_BEIZER }}
	// 						viewport={{ once: false, amount: 0.5 }}
	// 						className="w-full h-full bg-secondary-background rounded-2xl flex items-center justify-center px-10 py-3 text-3xl font-bold whitespace-pre-wrap col-span-3 md:col-span-1">
	// 						Always Learning, {"\n"}
	// 						Always Optimizing
	// 					</motion.div>
	// 					<motion.div
	// 						initial={{ opacity: 0, y: 80 }}
	// 						whileInView={{ opacity: 1, y: 0 }}
	// 						transition={{ delay: 1, duration: 0.6, ease: CUBIC_BEIZER }}
	// 						viewport={{ once: false, amount: 0.5 }}
	// 						className="w-full h-full bg-secondary-background rounded-2xl flex items-start justify-center px-10 py-8 text-3xl font-bold whitespace-pre-wrap col-span-3 flex-col gap-5">
	// 						<h1>Stack</h1>
	// 						<div className="flex items-center justify-start gap-5 flex-wrap">
	// 							{
	// 								skills.map((skill) => (
	// 									<div style={{ color: skill.color }}>
	// 										{skill.icon}
	// 									</div>
	// 								))
	// 							}
	// 						</div>
	// 					</motion.div>
	// 				</div>
	// 			</section>

	// 			<motion.footer
	// 				initial={{ opacity: 0, y: 20 }}
	// 				animate={{ opacity: 1, y: 0 }}
	// 				transition={{ delay: 3, duration: 0.6, ease: CUBIC_BEIZER }}
	// 				className="flex items-center justify-center fixed bottom-10 left-10 gap-2 px-3 py-2 rounded-full bg-secondary-background border border-muted">
	// 				<a href={links.github} target="_blank" className="social-button"><AiFillGithub /></a>
	// 				<a href={links.linkedin} target="_blank" className="social-button"><FaLinkedinIn /></a>
	// 				<button
	// 					onClick={e => {
	// 						e.preventDefault()
	// 						navigator.clipboard.writeText(links.email)
	// 						toast.success("Copied to clipboard", { duration: 2000 })
	// 					}}
	// 					className="social-button">
	// 					<CgMail />
	// 				</button>
	// 				<a href={links.x} className="social-button"><FaXTwitter /></a>
	// 				<a href={links.leetcode} target="_blank" className="social-button"><SiLeetcode /></a>
	// 				<a href={links.dev} target="_blank" className="social-button"><FaDev /></a>
	// 			</motion.footer>
	// 		</main>
	// 	</div>
	// )
}

export default App