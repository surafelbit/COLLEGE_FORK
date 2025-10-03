import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const ImageModal = ({ imageSrc, title }) => {
    return (_jsxs("div", { className: "relative w-full", children: [_jsx("img", { src: imageSrc, alt: title, className: "w-full h-100 object-cover rounded-lg shadow-lg" }), _jsx("div", { className: "absolute bottom-0 left-0 w-full bg-transparent  text-white text-center py-2 rounded-b-lg", children: title })] }));
};
