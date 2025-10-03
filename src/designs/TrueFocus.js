import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
const TrueFocus = ({ sentence = "True Focus", manualMode = false, blurAmount = 5, borderColor = "green", glowColor = "rgba(0, 255, 0, 0.6)", animationDuration = 0.5, pauseBetweenAnimations = 1, }) => {
    const words = sentence.split(" ");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lastActiveIndex, setLastActiveIndex] = useState(null);
    const containerRef = useRef(null);
    const wordRefs = useRef([]);
    const [focusRect, setFocusRect] = useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    });
    useEffect(() => {
        if (!manualMode) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % words.length);
            }, (animationDuration + pauseBetweenAnimations) * 1000);
            return () => clearInterval(interval);
        }
    }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);
    useEffect(() => {
        if (currentIndex === null || currentIndex === -1)
            return;
        if (!wordRefs.current[currentIndex] || !containerRef.current)
            return;
        const parentRect = containerRef.current.getBoundingClientRect();
        const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();
        setFocusRect({
            x: activeRect.left - parentRect.left,
            y: activeRect.top - parentRect.top,
            width: activeRect.width,
            height: activeRect.height,
        });
    }, [currentIndex, words.length]);
    const handleMouseEnter = (index) => {
        if (manualMode) {
            setLastActiveIndex(index);
            setCurrentIndex(index);
        }
    };
    const handleMouseLeave = () => {
        if (manualMode) {
            setCurrentIndex(lastActiveIndex);
        }
    };
    return (_jsxs("div", { className: "relative flex gap-4 justify-center items-center flex-wrap", ref: containerRef, children: [words.map((word, index) => {
                const isActive = index === currentIndex;
                return (_jsx("span", { ref: (el) => {
                        wordRefs.current[index] = el;
                    }, className: "relative text-[3rem] font-black cursor-pointer", style: {
                        filter: manualMode
                            ? isActive
                                ? `blur(0px)`
                                : `blur(${blurAmount}px)`
                            : isActive
                                ? `blur(0px)`
                                : `blur(${blurAmount}px)`,
                        transition: `filter ${animationDuration}s ease`,
                    }, onMouseEnter: () => handleMouseEnter(index), onMouseLeave: handleMouseLeave, children: word }, index));
            }), _jsxs(motion.div, { className: "absolute top-0 left-0 pointer-events-none box-border border-0", animate: {
                    x: focusRect.x,
                    y: focusRect.y,
                    width: focusRect.width,
                    height: focusRect.height,
                    opacity: currentIndex >= 0 ? 1 : 0,
                }, transition: {
                    duration: animationDuration,
                }, style: {
                    "--border-color": borderColor,
                    "--glow-color": glowColor,
                }, children: [_jsx("span", { className: "absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0", style: {
                            borderColor: "var(--border-color)",
                            filter: "drop-shadow(0 0 4px var(--border-color))",
                        } }), _jsx("span", { className: "absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0", style: {
                            borderColor: "var(--border-color)",
                            filter: "drop-shadow(0 0 4px var(--border-color))",
                        } }), _jsx("span", { className: "absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0", style: {
                            borderColor: "var(--border-color)",
                            filter: "drop-shadow(0 0 4px var(--border-color))",
                        } }), _jsx("span", { className: "absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0", style: {
                            borderColor: "var(--border-color)",
                            filter: "drop-shadow(0 0 4px var(--border-color))",
                        } })] })] }));
};
export default TrueFocus;
