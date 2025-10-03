import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { createContext, useContext, useState, ReactNode } from "react";
const ModalContext = createContext();
export function useModal() {
    const context = useContext(ModalContext);
    if (!context)
        return "context must be wrapped by modal";
    return context;
}
export const ModalProvider = ({ children, }) => {
    const [modalContent, setModalContent] = useState(null);
    function openModal(content) {
        setModalContent(content);
    }
    function closeModal() {
        setModalContent(null);
    }
    return (_jsxs(ModalContext.Provider, { value: { openModal, closeModal }, children: [children, modalContent && (_jsx("div", { onClick: closeModal, className: "fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm bg-opacity-40", children: _jsxs("div", { onClick: (e) => e.stopPropagation(), className: "relative bg-white dark:bg-gray-800 object-cover rounded-lg", children: [_jsx("button", { className: "absolute top-3 right-3 text-gray-700 dark:text-gray-200 font-bold text-xl", onClick: closeModal, children: "\u00D7" }), modalContent] }) }))] }));
};
