import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
export default function Carousel({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        console.log("clikced ");
    };
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    return (_jsx("div", { className: "w-full flex justify-center", children: _jsxs("div", { className: "relative w-[700px] h-[300px] overflow-hidden  rounded-xl shadow-lg", children: [slides.map((slide, index) => (_jsxs("div", { className: `absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden shadow-xl transition-all duration-700 ease-in-out ${index === current
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-90 z-0"}`, children: [_jsx("img", { src: slide.image, alt: slide.text, className: "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" }), _jsx("div", { className: "absolute inset-0 bg-black/40" }), _jsxs("div", { className: "absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end space-y-2 bg-gradient-to-t from-black/70 to-transparent rounded-t-xl", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white drop-shadow-lg", children: slide.name }), slide.grade && (_jsxs("p", { className: "text-yellow-300 text-lg md:text-xl font-semibold tracking-wide", children: ["Grade: ", slide.grade] })), _jsxs("p", { className: "text-white/90 text-base md:text-lg font-medium tracking-wide", children: ["Class: ", slide.class] }), _jsx("span", { className: "inline-block bg-yellow-400 text-black font-extrabold px-4 py-1 rounded-full text-sm shadow-md tracking-wide", children: "Top Student" })] }), _jsxs("h1", { className: "absolute top-4 left-4 text-xl md:text-2xl font-semibold text-white/90 drop-shadow-lg", children: ["#", index + 1] })] }, index))), _jsx("button", { onClick: prevSlide, className: "absolute top-1/2 left-3 -translate-y-1/2 \r\n             flex items-center justify-center\r\n             w-10 h-10 rounded-full bg-black/40 \r\n             hover:bg-black/70 transition z-20", children: _jsx("span", { className: "block w-3 h-3 border-t-2 border-l-2 border-white rotate-[-45deg]" }) }), _jsx("button", { onClick: nextSlide, className: "absolute top-1/2 right-3 -translate-y-1/2 \r\n             flex items-center justify-center\r\n             w-10 h-10 rounded-full bg-black/40 \r\n             hover:bg-black/70 transition z-20", children: _jsx("span", { className: "block w-3 h-3 border-t-2 border-r-2 border-white rotate-[45deg]" }) }), _jsx("div", { className: "absolute bottom-4 w-full flex justify-center space-x-2", children: slides.map((_, index) => (_jsx("button", { onClick: () => setCurrent(index), className: `w-4 h-4 rounded-full transition ${index === current ? "bg-white" : "bg-gray-400 opacity-50"}` }, index))) })] }) }));
}
