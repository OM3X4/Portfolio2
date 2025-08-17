import { useState, useEffect, useRef } from 'react';

export default function useScrollDirection() {
    const [scrollDir, setScrollDir] = useState<'up' | 'down'>('down');
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            if (currentY > prevScrollY.current) {
                setScrollDir('down');
            } else if (currentY < prevScrollY.current) {
                setScrollDir('up');
            }
            prevScrollY.current = currentY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollDir;
}
