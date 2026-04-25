import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Project from "./Components/Project";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CUBIC_BEIZER } from "./config";

type OverlayTransitionProps = {
  show: boolean;
  direction: "up" | "down"; // which way it enters/exits
  fill: string;
  text: string;
};
function OverlayTransition({
  show,
  direction,
  fill,
  text,
}: OverlayTransitionProps) {
  const isUp = direction === "up";
  const bars = 5;

  const ease = CUBIC_BEIZER;

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key="overlay"
          className="fixed inset-0 w-full h-screen"
          style={{ zIndex: 9999 }}
        >
          {/* vertical bars */}
          <div className="absolute inset-0 flex">
            {Array.from({ length: bars }).map((_, i) => (
              <motion.div
                key={i}
                className="h-full flex-1"
                style={{ backgroundColor: fill }}
                initial={{
                  y: isUp ? "100%" : "-100%",
                }}
                animate={{
                  y: "0%",
                }}
                exit={{
                  y: isUp ? "-100%" : "100%",
                }}
                transition={{
                  duration: 0.8,
                  ease,
                  delay: i * 0.06,
                }}
              />
            ))}
          </div>

          {/* text */}
          <motion.h1
            initial={{ opacity: 0, y: isUp ? 40 : -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: isUp ? -40 : 40 }}
            transition={{
              duration: 0.3,
              ease,
              delay: 0.3,
            }}
            className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
            style={{ zIndex: 10000 }}
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

  const [overlayColor, setOverlayColor] = useState("#1e1e1e");
  const [overlayText, setOverlayText] = useState("Home");

  const [showOverlay, setShowOverlay] = useState(false);
  const [showReturnOverlay, setShowReturnOverlay] = useState(false);

  const width = window.innerWidth;

  const TIME_TO_CHANGE = 500;
  const TIME_TO_REVEAL = 500;

  const handleGoToProject = ({
    id,
    name,
    color,
  }: {
    id: string;
    name: string;
    color: string;
  }) => {
    if (width < 768) {
      navigate(`/project/${id}`);
      window.scrollTo(0, 0);
      return;
    }

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
    if (width < 768) {
      navigate(`/`);
      window.scrollTo(0, 0);
      return;
    }

    setShowReturnOverlay(true);

    setTimeout(() => {
      navigate("/");
    }, TIME_TO_CHANGE);

    setTimeout(() => {
      setShowReturnOverlay(false);
    }, TIME_TO_CHANGE + TIME_TO_REVEAL);
  };

  return (
    <div className="w-screen overflow-hidden min-h-screen relative">
      <OverlayTransition
        show={showOverlay}
        direction="up"
        fill={overlayColor}
        text={overlayText}
      />
      <OverlayTransition
        show={showReturnOverlay}
        direction="down"
        fill={"#1e1e1e"}
        text={"Home"}
      />

      <Navbar returnHome={handleReturnHome} />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home changePath={handleGoToProject} />} />
          <Route
            path="/project/:id"
            element={
              <div>
                <Project />
              </div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
