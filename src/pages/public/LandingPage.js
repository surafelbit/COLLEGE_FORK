import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import Lottie from "lottie-react";
import DarkVeil from "@/designs/DarkVeil";
import LiquidChrome from "@/designs/LiquidChrome";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import home from "../../../public/animations/home.json";
import phone from "../../../public/animations/phone.json";
import register from "../../../public/animations/register.json";
import calling from "../../../public/animations/calling.json";
import { LanguageSwitcher } from "@/components/language-switcher";
import { GraduationCap, Heart, Eye, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
//design pages
import TrueFocus from "@/designs/TrueFocus";
import GlareHover from "@/designs/GlareHover";
import CircularGallery from "../../designs/CircularGallery";
import LightRays from "@/designs/LightRays";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import CountUp from "react-countup";
export default function LandingPage() {
    const [show, setShow] = useState(false);
    const videoRefs = useRef(null);
    const [isPlayingss, setIsPlayings] = useState(false);
    const handlePlay = () => {
        videoRefs.current.play();
        setIsPlaying(true);
    };
    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 300); // Show after scrolling 300px
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const videoRef = useRef(null); // points to the video element
    const [isPlaying, setIsPlaying] = useState(false); // tracks if video is playing
    const { t } = useTranslation(["common", "auth"]);
    const carouselRef = useRef(null);
    const scrollAmount = 300;
    const scrollPrev = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
    };
    const scrollNext = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };
    const datas = [
        {
            image: "https://skyresortbahirdar.com/wp-content/uploads/2021/09/Bahir-Dar-City-View-1-2560x1440.jpg",
            heading: " WHAT WE CAN KNOW",
            detail: " Video: Ian McEwan in conversation with Richard Ovenden, book now",
        },
        {
            image: "https://skyresortbahirdar.com/wp-content/uploads/2021/09/Bahir-Dar-City-View-1-2560x1440.jpg",
            heading: "FEATURED PODCAST    ",
            detail: "Accelerating AI Ethics",
        },
        {
            image: "https://skyresortbahirdar.com/wp-content/uploads/2021/09/Bahir-Dar-City-View-1-2560x1440.jpg",
            heading: "THE OUP BLOG",
            detail: "Your Indo-European beard",
        },
        {
            image: "https://skyresortbahirdar.com/wp-content/uploads/2021/09/Bahir-Dar-City-View-1-2560x1440.jpg",
            heading: "FEATURED PODCAST",
            detail: "we have very good products",
        },
    ];
    const homeRef = useRef();
    const heroRef = useRef(null);
    const heroInView = useInView(heroRef, { margin: "-150px" });
    const textRef = useRef(null);
    // Mission Section Ref
    const missionRef = useRef(null);
    const missionInView = useInView(missionRef, { margin: "-150px" });
    const programs = [
        {
            title: "Medicine",
            icon: "https://th.bing.com/th/id/R.e896697aea4207f544f0d3615ec82e61?rik=7Zdqn2%2bf0irguw&pid=ImgRaw&r=0",
            description: "Understand the human body structure through detailed study and cadaver labs.",
        },
        {
            title: "Nursing",
            icon: "https://seattlemedium.com/wp-content/uploads/2023/06/Black-Nurses-iStock-748-x-486px.jpg",
            description: "Learn the normal functions of the human body in health and disease.",
        },
        {
            title: "Medical Radiology(MRT)",
            icon: "https://tse4.mm.bing.net/th/id/OIP.cJn1IK_5m5sOK1fZam3XMwHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3",
            description: "Explore the chemical processes underlying life and metabolism.",
        },
    ];
    const ref = useRef(null);
    const inView = useInView(ref, { margin: "-150px" });
    const infoRef = useRef(null);
    const infoView = useInView(infoRef, { margin: "-150px" });
    const [isOpen, setIsOpen] = useState(false);
    return (_jsx("div", { className: "relative min-h-screen dark:bg-gray-950", children: _jsxs("div", { className: "relative z-10", children: [show && (_jsx("button", { onClick: scrollToTop, className: "fixed bottom-8 right-8 bg-sky-500 text-white p-3 rounded-full shadow-lg hover:bg-sky-600 transition", children: _jsx(ChevronUpIcon, { className: "h-6 w-6" }) })), _jsxs("header", { className: "fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg z-50", children: [_jsxs("div", { className: "container mx-auto px-4 py-3 flex justify-between items-center", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("img", { src: "/assets/companylogo.jpg", alt: "Company Logo", className: "h-10 w-10 rounded-full object-cover shadow-sm" }), _jsx("span", { className: "text-lg font-bold text-gray-800 dark:text-gray-100", children: "DEUTSCHE HOCHSCHULE" })] }), _jsxs("nav", { className: " items-center space-x-6", children: [_jsx("a", { href: "#home", className: "text-gray-700 dark:text-gray-200 font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300", children: "Home" }), _jsx("a", { href: "#mission", className: "text-gray-700 dark:text-gray-200 font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300", children: "Mission" }), _jsx("a", { href: "#hero", className: "text-gray-700 dark:text-gray-200 font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300", children: "Services" }), _jsx("a", { href: "#contact", className: "text-gray-700 dark:text-gray-200 font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300", children: "Contact" })] }), _jsxs("div", { className: " md:flex items-center space-x-4", children: [_jsx(LanguageSwitcher, {}), _jsx(ThemeToggle, {}), _jsx(Link, { to: "/login", children: _jsx("button", { className: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-sm", children: "Login" }) })] }), _jsx("button", { className: "md:hidden text-gray-700 dark:text-gray-200 focus:outline-none", onClick: () => setIsOpen(!isOpen), "aria-label": "Toggle menu", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: isOpen ? (_jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" })) : (_jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" })) }) })] }), _jsx("div", { className: `md:hidden bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`, children: _jsxs("nav", { className: "flex flex-col space-y-3 px-4 py-4", children: [_jsx("a", { href: "#home", className: "text-gray-700 dark:text-gray-200 font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 py-2", onClick: () => setIsOpen(false), children: "Home" }), _jsx("a", { href: "#mission", className: "text-gray-700 dark:text-gray-200 font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 py-2", onClick: () => setIsOpen(false), children: "Mission" }), _jsx("a", { href: "#hero", className: "text-gray-700 dark:text-gray-200 font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 py-2", onClick: () => setIsOpen(false), children: "Services" }), _jsx("a", { href: "#contact", className: "text-gray-700 dark:text-gray-200 font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 py-2", onClick: () => setIsOpen(false), children: "Contact" }), _jsxs("div", { className: "flex flex-col space-y-3 pt-2", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx(LanguageSwitcher, {}), _jsx(ThemeToggle, {})] }), _jsx(Link, { to: "/login", onClick: () => setIsOpen(false), children: _jsx("button", { className: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-sm w-full", children: "Login" }) })] })] }) })] }), _jsxs("section", { className: "relative my-8 bg-gradient-to-r from-blue-900 to-blue-200 text-white h-96 flex items-center ", children: [_jsx("img", { src: "https://skyresortbahirdar.com/wp-content/uploads/2021/09/Bahir-Dar-City-View-1-2560x1440.jpg", alt: "Student Studying", className: "absolute inset-0 w-full h-full object-cover opacity-50" }), _jsxs("div", { className: "relative z-10 text-left", children: [_jsx("p", { className: "text-lg mx-8 mb-2 font-serif font-bold", children: "In the city of Bahirdar" }), _jsxs("h2", { className: "text-4xl mb-4 bg-gradient-to-r from-blue-900 to-blue-200 px-4 py-2 rounded font-serif", children: [_jsx("span", { className: "font-bold", children: "DEUTSCHE HOCHSCHULE" }), " MEDICIN COLLEGE"] })] }), _jsxs("div", { className: "absolute left-0 right-0 bottom-0 mx-auto mb-[-40px] max-w-3xl bg-white bg-white/40 backdrop-blur-md rounded-lg p-6 shadow-lg", children: [_jsx("p", { className: "text-sm font-semibold text-blue-900 mb-1", children: "About us" }), _jsxs("h2", { className: "text-xl font-bold uppercase text-blue-600 leading-tight", children: ["DEUTSCHE HOCHSCHULE ", _jsx("br", {}), "MEDICIN COLLEGE BAHIRDAR"] })] })] }), _jsx("section", { id: "home", className: "my-8  container mx-auto px-4 py-10 pt-30", children: _jsxs("div", { className: "max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-16 overflow-hidden", ref: heroRef, children: [_jsx(motion.div, { className: "w-full px-10 py-10 sm:w-2/5", initial: { opacity: 0, x: -75, scale: 0.8 }, animate: heroInView
                                    ? { opacity: 1, x: 0, scale: 1 }
                                    : { opacity: 0, x: -75, scale: 0.8 }, transition: { duration: 0.6, ease: "easeOut" }, children: _jsx("img", { src: "/assets/companylogo.jpg", alt: "College Logo", className: "bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center flex-shrink-0" }) }), _jsxs("div", { className: "w-full sm:w-3/5 text-center sm:text-left max-w-4xl overflow-hidden", initial: { opacity: 0, x: 75 }, animate: heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 75 }, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" }, children: [_jsxs(motion.h1, { className: "text-5xl font-bold text-gray-900 dark:text-white mb-6", initial: { opacity: 0, y: -50 }, animate: heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }, transition: { duration: 1, delay: 0.6, ease: "easeOut" }, children: [_jsx("div", { className: "text-blue-600", children: "Excellence In" }), _jsx("div", { className: "text-blue-600", children: _jsx(TrueFocus, { sentence: "Medical Education", manualMode: false, blurAmount: 5, borderColor: "red", animationDuration: 2, pauseBetweenAnimations: 1 }) })] }), _jsx(motion.p, { className: "text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl", initial: { opacity: 0, y: 50 }, animate: heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }, transition: { duration: 1, delay: 0.9, ease: "easeOut" }, children: "Join our vibrant University College community! Begin your academic journey by completing the Life History Form for undergraduate admission..." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center sm:justify-start", children: [_jsx(Link, { to: "/register", children: _jsxs(Button, { size: "lg", className: "text-lg px-8 py-3", children: ["Register ", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: "text-lg px-8 py-3 bg-transparent", children: "Learn More" })] })] })] }) }), _jsx("section", { className: "mx-4 sm:mx-20 my-10", children: _jsxs("div", { ref: infoRef, className: "grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-10", children: [_jsx(motion.div, { initial: { opacity: 0, x: 50 }, animate: infoView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }, transition: { duration: 0.7, ease: "easeOut" }, children: _jsxs("div", { children: [_jsx("h2", { className: "text-4xl text-blue-500 dark:text-blue-300 font-serif", children: "Doche College at glance" }), _jsx("p", { className: "text-lg dark:text-white text-black font-poppins mb-4", children: "For nearly five years, people have come to Douche in the pursuit of truth, knowledge, and the betterment of society." }), _jsx("img", { src: "/assets/collegephoto.jpg", alt: "College", className: "w-full h-auto rounded-lg object-cover" })] }) }), _jsxs(motion.div, { initial: { opacity: 0, x: -50 }, animate: infoView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }, transition: { duration: 0.7, ease: "easeOut" }, className: "flex flex-col justify-between", children: [_jsxs(motion.div, { initial: { opacity: 0, y: -50 }, animate: infoView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }, transition: { duration: 0.7, ease: "easeOut" }, className: "gap-y-8", children: [_jsxs("h2", { className: "text-2xl text-blue-500 dark:text-blue-300 font-serif", children: ["2017", " "] }), _jsx("p", { className: "text-lg dark:text-white text-black font-mono", children: "The year Douche was founded" })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 100 }, animate: infoView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }, transition: { duration: 0.7, ease: "easeOut" }, children: [_jsxs("h2", { className: "text-2xl text-blue-500 dark:text-blue-300 font-serif", children: ["Hundreds", " "] }), _jsx("p", { className: "text-lg dark:text-white text-black font-mono", children: "of students currently engaged now" })] })] })] }) }), _jsxs("section", { id: "programs", className: "container mx-auto px-4 py-24 overflow-hidden", ref: ref, children: [_jsx(motion.h2, { className: "text-4xl font-extrabold text-center mb-16 \r\n    bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent \r\n    drop-shadow-lg tracking-tight", initial: { opacity: 0, x: 200 }, animate: inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }, transition: { duration: 1.2, ease: "easeOut" }, children: "Medical Programs & Courses We Provide" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center", children: programs.map((program, index) => (_jsxs(motion.div, { className: "flex flex-col overflow-hidden rounded-3xl \r\n        bg-white/80 dark:bg-slate-900/80 \r\n        backdrop-blur-xl border border-slate-200 dark:border-slate-700\r\n        shadow-xl hover:shadow-2xl \r\n        text-center cursor-pointer w-80 h-[32rem] transition-all duration-300", initial: { opacity: 0, y: 50, scale: 0.9 }, animate: inView
                                    ? { opacity: 1, y: 0, scale: 1 }
                                    : { opacity: 0, y: 50, scale: 0.9 }, transition: {
                                    duration: 0.7,
                                    delay: index * 0.2,
                                    ease: "easeOut",
                                }, whileHover: {
                                    scale: 1.05,
                                    y: -12,
                                }, children: [_jsx("div", { className: "w-full h-72", children: _jsx("img", { src: program.icon, alt: program.title, className: "w-full h-full object-cover" }) }), _jsxs("div", { className: "flex flex-col items-center p-6", children: [_jsx("h3", { className: "text-lg font-bold text-gray-800 dark:text-white", children: program.title }), _jsx("p", { className: "text-sm mt-2 text-gray-600 dark:text-gray-300", children: program.description })] })] }, index))) })] }), _jsxs("section", { id: "hero", className: "relative  my-8 h-100 overflow-hidden text-white font-sans", children: [_jsx("video", { className: "absolute inset-0 w-full h-full object-cover brightness-70", src: "/assets/video.mp4", autoPlay: true, loop: true, muted: true, playsInline: true }), _jsx("div", { className: "absolute inset-0 overflow-hidden", children: [...Array(6)].map((_, i) => (_jsx(motion.div, { className: "absolute rounded-full bg-blue-400 opacity-15", style: {
                                    width: `${60 + i * 25}px`,
                                    height: `${60 + i * 25}px`,
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                }, animate: { y: ["0%", "12%", "0%"], x: ["0%", "12%", "0%"] }, transition: {
                                    duration: 9 + i,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                } }, i))) }), _jsxs("div", { className: "relative z-10 flex flex-col justify-center items-center h-full px-6 text-center", children: [_jsxs(motion.p, { className: "text-2xl md:text-3xl font-medium text-gray-100 mb-6 drop-shadow-lg", initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1.8, delay: 1.2, ease: "easeOut" }, children: ["Pursue your dreams in", " ", _jsx("span", { className: "text-cyan-400 font-bold tracking-wide", children: "Medicine" }), " ", "and", " ", _jsx("span", { className: "text-indigo-400 font-bold tracking-wide", children: "Healthcare" })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1.5, delay: 2.1, ease: "easeOut" }, children: _jsx(Link, { to: "/register", children: _jsx(Button, { size: "lg", className: "px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-lg shadow-2xl hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] animate-pulse", children: t("auth:register") }) }) })] })] }), _jsxs("section", { id: "mission", className: "container my-8 mx-auto px-4 py-20", ref: missionRef, children: [_jsxs("h2", { className: "text-4xl font-extrabold text-center mb-16 \r\n    bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent \r\n    drop-shadow-lg tracking-tight", children: ["Values And Mission", " "] }), _jsxs("div", { className: "grid md:grid-cols-3  gap-8 max-w-6xl mx-auto overflow-hidden", children: [_jsx(motion.div, { initial: { opacity: 0, y: -50 }, animate: missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }, transition: { duration: 0.8, ease: "easeOut" }, children: _jsxs(Card, { className: "text-center my-6 bg-white dark:bg-gray-900 shadow-[0_0_15px_rgba(255,255,255,0.3)] transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]", children: [_jsxs(CardHeader, { children: [_jsx("img", { src: "/assets/student.jpg", className: "h-[200px] w-full object-cover" }), _jsx(CardTitle, { className: "text-2xl text-blue-600 dark:text-white", children: "Core Values" })] }), _jsx(CardContent, { children: _jsx(CardDescription, { className: "text-base", children: "DHFMC places education at the core of its vision and mission, guiding all our actions and decisions..." }) })] }) }), _jsx(motion.div, { initial: { opacity: 0, y: 50 }, animate: missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }, children: _jsxs(Card, { className: "text-center bg-white my-6 dark:bg-gray-900 shadow-[0_0_15px_rgba(255,255,255,0.3)] transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]", children: [_jsxs(CardHeader, { children: [_jsx("img", { src: "/assets/laboratory.jpg", className: "h-[200px] w-full object-cover" }), _jsx(CardTitle, { className: "text-2xl text-blue-600 dark:text-white", children: "Vision" })] }), _jsx(CardContent, { children: _jsx(CardDescription, { className: "text-base", children: "DHM College envisions becoming the premier center of academic excellence in Ethiopia by the year 2025..." }) })] }) }), _jsx(motion.div, { initial: { opacity: 0, y: -50 }, animate: missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }, transition: { duration: 0.8, delay: 0.6, ease: "easeOut" }, children: _jsxs(Card, { className: "text-center bg-white my-6 dark:bg-gray-900 shadow-[0_0_15px_rgba(255,255,255,0.3)] transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]", children: [_jsxs(CardHeader, { children: [_jsx("img", { src: "/assets/intro.jpg", className: "h-[200px] w-full object-cover" }), _jsx(CardTitle, { className: "text-2xl text-blue-600 dark:text-white", children: "Mission" })] }), _jsx(CardContent, { children: _jsx(CardDescription, { className: "text-base", children: "DHM College aims to produce competent professionals at different levels relevant to the development needs of the country..." }) })] }) })] })] }), _jsxs("section", { style: { textAlign: "left", marginBottom: "60px" }, children: [_jsx("h2", { className: "text-4xl font-extrabold text-center mb-16 \r\n    bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent \r\n    drop-shadow-lg tracking-tight", children: "Discover More" }), _jsxs("div", { style: {
                                position: "relative",
                                width: "90%",
                                paddingBottom: "90px",
                                margin: "0 auto 40px auto", // adds 40px bottom space only
                                paddingTop: `${(1 / 4) * 100}%`, // 4:1 aspect ratio
                                overflow: "hidden",
                            }, children: [_jsx("video", { ref: videoRefs, src: "https://res.cloudinary.com/djz4nl0ic/video/upload/v1759434928/lv_0_20251002223127_jwkzc8.mp4", style: {
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "90%",
                                        objectFit: "cover",
                                    }, controls: isPlaying }), !isPlaying && (_jsx("button", { onClick: handlePlay, style: {
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        background: "#FF0000", // YouTube red
                                        border: "none",
                                        borderRadius: "50%",
                                        width: "80px",
                                        height: "80px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                                    }, children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "white", width: "40px", height: "40px", style: { marginLeft: "4px" }, children: _jsx("path", { d: "M8 5v14l11-7z" }) }) }))] })] }), window.innerWidth > 820 && (_jsxs("div", { className: "relative h-[600px] px-10 ", children: [_jsx("h2", { className: "text-4xl font-extrabold text-center mb-16 \r\n    bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent \r\n    drop-shadow-lg tracking-tight", children: "Our Facilities" }), _jsx(CircularGallery, { bend: 3, textColor: "#3B82F6", borderRadius: 0.05, scrollEase: 0.02 })] })), _jsx("section", { className: "py-26", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-blue-500 dark:text-white mb-4", children: "Ready to Start Your Medical Journey?" }), _jsx("p", { className: "text-xl text-blue-300 mb-8 max-w-2xl mx-auto", children: "Join thousands of successful graduates who have made their mark in the medical field. Your future in healthcare starts here." }), _jsx(Link, { to: "/register", children: _jsxs(Button, { size: "lg", variant: "secondary", className: "text-lg px-8 py-3", children: [t("auth:register"), " ", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] }) })] }) }), _jsxs("div", { id: "contact", className: "relative w-full   flex items-center justify-center overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 z-0 pointer-events-none", children: _jsx(LightRays, { raysOrigin: "top-center", raysColor: "#ffffff", raysSpeed: 1, lightSpread: 1, rayLength: 2, pulsating: true, fadeDistance: 1, saturation: 1, followMouse: true, mouseInfluence: 0.1, noiseAmount: 0, distortion: 0, className: "w-full h-full" }) }), _jsx("footer", { className: "text-white py-1", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "grid md:grid-cols-4 gap-8", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center space-x-3 mb-4", children: [_jsx("div", { className: "w-12 rounded-full   rounded-lg flex items-center justify-center", children: _jsx("img", { src: "/assets/companylogo.jpg", className: "h-[50px] w-full rounded-full " }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-gray-500 hover:text-gray-400 dark:text-white font-bold", children: t("college.name") }), _jsx("p", { className: "text-gray-500 hover:text-gray-400 dark:text-white text-sm text-", children: t("college.subtitle") })] })] }), _jsx("p", { className: "text-blue-600 hover:text-gray-400", children: "Excellence in medical education since 2017." })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-4", children: "Quick Links" }), _jsxs("ul", { className: "space-y-2 text-black", children: [_jsx("li", { children: _jsx(Link, { to: "/register", className: "text-blue-600 hover:text-gray-400 dark:text-white dark:hover:text-gray-400", children: "Apply Now" }) }), _jsx("li", { children: _jsx(Link, { to: "/login", className: "text-blue-600 hover:text-gray-400 dark:text-white dark:hover:text-gray-400", children: "Student Portal" }) }), _jsx("li", { children: _jsx("a", { href: "#programs", className: "text-blue-600 hover:text-gray-400 dark:text-white dark:hover:text-gray-400", children: "Programs" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: "text-blue-600 hover:text-gray-400 dark:text-white dark:hover:text-gray-400", children: "Research" }) })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-4", children: t("contact") }), _jsxs("ul", { className: "space-y-2 ", children: [_jsx("li", { className: "text-blue-600 hover:text-gray-400 dark:text-white dark:hover:text-gray-400", children: "Bahirdar Noc" }), _jsx("li", { className: "text-blue-600 hover:text-gray-400 dark:text-white dark:hover:text-gray-400", children: "Bahirdar, Ethiopia 10115" }), _jsx("li", { className: "text-blue-600 hover:text-gray-400 dark:text-white dark:hover:text-gray-400", children: "058 22 08 158" }), _jsx("li", { className: "text-blue-600 hover:text-gray-400 dark:text-white dark:hover:text-gray-400", children: "dochebahirdar@gmail.com" })] })] })] }), _jsx("div", { className: "border-t border-gray-800 mt-8 pt-8 text-center text-gray-400", children: _jsx("p", { children: "Deutsche Hochschule f\u00FCr Medizin College Bahirdar Website." }) })] }) })] })] }) }));
}
