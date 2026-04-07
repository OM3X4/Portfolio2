// import { BiChevronDown } from "react-icons/bi";
import { GiEgyptianSphinx } from "react-icons/gi";
import { motion } from "framer-motion";
import { CUBIC_BEIZER } from "../config";
import { FaLinkedinIn, FaInstagram, FaDev } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaMedium, FaXTwitter } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { toast } from "sonner";
import { links } from "../data";

export default function Hero() {
  return (
    <section className=" overflow-hidden relative h-[70vh]">
      {/* Based In Egypt */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ delay: 1.8, duration: 0.5, ease: CUBIC_BEIZER }}
        viewport={{ once: false, amount: 1 }}
        className="absolute hidden lg:flex z-5 top-1/4 left-0 w-45 h-20 bg-secondary-background rounded-r-full items-center justify-end px-3"
      >
        <h3 className="text-muted text-wrap text-lg font-medium w-fit ">
          Based In Egypt
        </h3>
        <div className="h-[80%] aspect-square bg-white rounded-full flex items-center justify-center p-3">
          <GiEgyptianSphinx className="w-full h-full text-golden" />
        </div>
      </motion.div>

      <div className="responsive-container mx-auto flex flex-col gap-1 items-center justify-center h-full">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: CUBIC_BEIZER }}
          className="text-5xl md:text-7xl text-white font-black text-center font-instrument-serif"
        >
          OMAR EMAD
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: CUBIC_BEIZER }}
          className="text-muted text-xl text-center w-[80%] italic font-medium"
        >
          Systems-focused engineer. Built a Rust chess engine (~1800 Elo),
          full-stack apps and a rust async runtime.
        </motion.p>
        <motion.div
          className="flex gap-2 items-center justify-center mt-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: CUBIC_BEIZER }}
        >
          {[
            { href: links.github, icon: <AiFillGithub />, target: "_blank" },
            { href: links.linkedin, icon: <FaLinkedinIn />, target: "_blank" },
            {
              onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                navigator.clipboard.writeText(links.email);
                toast.success("Copied to clipboard", { duration: 2000 });
              },
              icon: <CgMail />,
            },
            { href: links.x, icon: <FaXTwitter /> },
            { href: links.instagram, icon: <FaInstagram />, target: "_blank" },
            { href: links.leetcode, icon: <SiLeetcode />, target: "_blank" },
            { href: links.dev, icon: <FaDev />, target: "_blank" },
            { href: links.medium, icon: <FaMedium />, target: "_blank" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.target}
              onClick={item.onClick}
              className="social-button"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.08, duration: 0.6, ease: CUBIC_BEIZER }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
        {/*<div className="mt-5">
          <motion.a
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: CUBIC_BEIZER }}
            href="#projects"
            className="text-text text-center text-2xl font-medium bg-secondary-background px-4 py-2 rounded-sm hover:bg-golden transition-colors hover:text-secondary-background cursor-pointer"
          >
            Projects
          </motion.a>
        </div>*/}
        {/*<motion.h5
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6, ease: CUBIC_BEIZER }}
                    className="text-text text-center text-2xl font-medium">Rust | Typescript | Databases</motion.h5>
                <div className="flex flex-col items-center justify-center mt-10">
                    <span className="text-muted leading-none">Scroll down</span>
                    <BiChevronDown className="text-muted text-2xl animate-pulse" />
                </div>*/}
      </div>
    </section>
  );
}
