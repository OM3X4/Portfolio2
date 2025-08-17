import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function HorizontalScrollSection() {
    const targetRef = useRef<HTMLDivElement | null>(null)

    // Track scroll progress within the target section
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    })

    // Map vertical scroll → horizontal translation
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"])
    // here "-200%" because we have 3 slides (100% * (3 - 1))

    return (
        <section className="relative h-[300vh]" ref={targetRef}>
            {/* sticky viewport */}
            <div className="sticky top-0 h-screen overflow-hidden bg-gray-100">
                <motion.div
                    style={{ x }}
                    className="flex h-full w-[300vw]" // 3 slides → 300vw
                >
                    <div className="flex h-screen w-screen items-center justify-center bg-red-400 text-5xl font-bold">
                        Slide 1
                    </div>
                    <div className="flex h-screen w-screen items-center justify-center bg-green-400 text-5xl font-bold">
                        Slide 2
                    </div>
                    <div className="flex h-screen w-screen items-center justify-center bg-blue-400 text-5xl font-bold">
                        Slide 3
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
