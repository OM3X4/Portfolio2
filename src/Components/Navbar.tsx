import { motion } from "framer-motion"
import { CUBIC_BEIZER } from "../config"
import {  useLocation, useNavigate } from "react-router-dom"


export default function Navbar({ returnHome }: { returnHome: () => void }) {

    const navigate = useNavigate();
    const location = useLocation()

    if (location.pathname === "/") {
        return null;
    }

    return (
        <nav className="fixed z-50 top-0 w-full pl-5 pr-15 flex items-center justify-between">
            <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: CUBIC_BEIZER }}
                href="/"

                onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                }}

                className="text-white text-4xl font-bold">
                <img src="/Logos/2.svg" alt="" className="w-15 h-15 my-3 hover:scale-120 transition-all" />
            </motion.a>

            <div className="text-white flex-row items-center justify-center gap-3 flex">
                <motion.div
                    initial={{ opacity: 0, translateY: 20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}

                    onClick={returnHome}

                    className="flex items-center justify-center flex-col relative cursor-pointer group">
                    <h3 className="text-xl">Home</h3>
                    <div className="w-2 h-2 rounded-full bg-white absolute -bottom-4 scale-0 group-hover:scale-100 transition-all duration-500 ease-out"></div>
                </motion.div>
            </div>
        </nav>
    )
}
