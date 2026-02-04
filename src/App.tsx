import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import { toast } from "sonner";
import { CgMail } from "react-icons/cg";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { CUBIC_BEIZER } from "./config";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Project from "./Components/Project";
import { Routes, Route, useNavigate } from "react-router-dom";
import { links } from "./data";
import { FaLinkedinIn, FaDev } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

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

	const TIME_TO_CHANGE = 500
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
			window.scrollTo(0, 0);
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
					<Route path="/" element={<Home changePath={handleGoToProject} />} />
					<Route path="/project/:id" element={<div><Project /></div>} />
				</Routes>
			</AnimatePresence>

			{/* Main */}
			<motion.footer
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.8, duration: 0.6, ease: CUBIC_BEIZER }}
				className="flex items-center justify-center fixed left-1/2 -translate-x-1/2 bottom-5  gap-2 px-3 py-2 rounded-full bg-secondary-background  grid-shadow">
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