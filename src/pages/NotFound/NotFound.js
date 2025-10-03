import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
const NotFound = () => {
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-200", children: _jsxs("div", { className: "text-center p-6", children: [_jsx("h1", { className: "text-8xl font-bold text-blue-600 dark:text-blue-400 mb-4", children: "404" }), _jsx("h2", { className: "text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4", children: "Page Not Found" }), _jsx("p", { className: "text-lg text-gray-600 dark:text-gray-400 mb-6", children: "Sorry, we couldn't find the page you're looking for." }), _jsx("a", { href: "/", className: "inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-200", children: "Return to Home" })] }) }));
};
export default NotFound;
