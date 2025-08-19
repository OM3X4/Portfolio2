import { useEffect } from "react";

type ScrollDirection = "up" | "down";

export default function useScrollAttempt(callback: (direction: ScrollDirection, e: WheelEvent | TouchEvent) => void) {
    useEffect(() => {
        let touchStartY = 0;

        // Handle mouse wheel (desktop)
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            if (e.deltaY > 0) {
                callback("down", e);
            } else if (e.deltaY < 0) {
                callback("up", e);
            }
        };

        // Handle touch (mobile)
        const handleTouchStart = (e: TouchEvent) => {
            e.preventDefault();
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchMove = (e: TouchEvent) => {
            e.preventDefault();
            const deltaY = e.touches[0].clientY - touchStartY;
            if (deltaY < 0) {
                callback("down", e);
            } else if (deltaY > 0) {
                callback("up", e);
            }
        };

        window.addEventListener("wheel", handleWheel , { passive: false });
        window.addEventListener("touchstart", handleTouchStart , { passive: false });
        window.addEventListener("touchmove", handleTouchMove , { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, [callback]);
}
