import { useState, useEffect } from "react";

export default function InvertedCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement | null;
            if (!target) return;

            const hasOnClick = typeof (target).onclick === "function" || target.getAttribute("onClick") !== null;
            const isPointer = window.getComputedStyle(target).cursor === "pointer";

            if (hasOnClick || isPointer) {
                setHovering(true);
            } else {
                setHovering(false);
            }
        };

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    return (
        <div
            className="hidden lg:block pointer-events-none fixed top-0 left-0 z-[100] rounded-full bg-white mix-blend-difference transition-all duration-200 ease-out"
            style={{
                width: hovering ? "60px" : "40px",
                height: hovering ? "60px" : "40px",
                transform: `translate(${pos.x - (hovering ? 30 : 20)}px, ${pos.y - (hovering ? 30 : 20)}px)`,
            }}
        />
    );
}
