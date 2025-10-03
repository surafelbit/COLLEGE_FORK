"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import NotificationDropdown from "@/components/ui/NotificationDropdown";
import { LayoutDashboard, Users, BookOpen, BarChart3, LogOut, Menu } from "lucide-react";
import { useEffect, useState } from "react";
export default function HeadLayout() {
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const navigation = [
        { name: "Dashboard", href: "/head/dashboard", icon: LayoutDashboard },
        { name: "Students", href: "/head/students", icon: Users },
        { name: "Teachers", href: "/head/teachers", icon: Users },
        { name: "Grades", href: "/head/grades", icon: BookOpen },
        { name: "Reports", href: "/head/reports", icon: BarChart3 },
    ];
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setSidebarOpen(true);
            }
            else {
                setSidebarOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [sidebarOpen]);
    return (_jsxs("div", { className: "flex min-h-screen bg-gray-50 dark:bg-gray-900", children: [sidebarOpen && (_jsx("div", { className: "fixed inset-0 z-40 bg-gray-600 bg-transparent lg:hidden", onClick: () => setSidebarOpen(false) })), _jsxs("div", { className: `fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out `, children: [_jsxs("div", { className: "flex items-center justify-between h-16 px-4 bg-blue-600 shadow-md", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx("img", { src: "/assets/companylogo.jpg", alt: "Logo", className: "h-12 w-12 rounded-full object-cover" }), _jsxs("div", { className: "text-white", children: [_jsx("div", { className: "text-sm font-bold", children: "DHFM COLLEGE" }), _jsx("div", { className: "text-xs opacity-75", children: "Department Head Portal" })] })] }), _jsx("button", { onClick: () => setSidebarOpen(false), className: "p-1 rounded hover:bg-blue-500 transition", children: _jsx("svg", { width: "24", height: "24", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg", fill: "white", children: _jsxs("g", { children: [_jsx("path", { d: "M32.6,22.6a1.9,1.9,0,0,0,0,2.8l5.9,6a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L38.8,26H44a2,2,0,0,0,0-4H38.8l2.6-2.6a1.9,1.9,0,0,0-.2-3,2.1,2.1,0,0,0-2.7.2Z" }), _jsx("path", { d: "M15.4,25.4a1.9,1.9,0,0,0,0-2.8l-5.9-6a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L9.2,22H4a2,2,0,0,0,0,4H9.2L6.6,28.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2Z" }), _jsx("path", { d: "M26,6V42a2,2,0,0,0,4,0V6a2,2,0,0,0-4,0Z" }), _jsx("path", { d: "M22,42V6a2,2,0,0,0-4,0V42a2,2,0,0,0,4,0Z" })] }) }) })] }), _jsx("nav", { className: "mt-8", children: _jsx("div", { className: "px-4 space-y-2", children: navigation.map((item) => {
                                const isActive = location.pathname === item.href;
                                return (_jsxs(Link, { to: item.href, className: `flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive
                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                                        : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"}`, onClick: () => window.innerWidth <= 1024 && setSidebarOpen(false), children: [_jsx(item.icon, { className: "mr-3 h-5 w-5" }), item.name] }, item.name));
                            }) }) }), _jsx("div", { className: "absolute bottom-0 w-full p-4", children: _jsxs(Button, { variant: "ghost", className: "w-full justify-start text-gray-600 dark:text-gray-300", children: [_jsx(LogOut, { className: "mr-3 h-5 w-5" }), "Sign Out"] }) })] }), _jsxs("div", { className: `inset-0 w-full transition-all duration-300 ${sidebarOpen && window.innerWidth >= 1024 ? "ml-64" : "ml-0"}`, children: [_jsxs("div", { className: "sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:gap-x-6 sm:px-6 lg:px-8", children: [_jsx(Button, { variant: "ghost", size: "icon", className: "", onClick: () => setSidebarOpen(true), children: !sidebarOpen && _jsx(Menu, { className: "h-6 w-6" }) }), _jsxs("div", { className: "flex flex-1 gap-x-4 self-stretch lg:gap-x-6", children: [_jsx("div", { className: "flex flex-1 items-center", children: _jsx("h1", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Department Head Portal" }) }), _jsxs("div", { className: "flex items-center gap-x-4 lg:gap-x-6", children: [_jsx(ThemeToggle, {}), _jsx(NotificationDropdown, {}), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: "w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center", children: _jsx("span", { className: "text-white text-sm font-medium", children: "DH" }) }), _jsxs("div", { className: "hidden sm:block", children: [_jsx("div", { className: "text-sm font-medium text-gray-900 dark:text-white", children: "Dr. Head" }), _jsx("div", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Department Head" })] })] })] })] })] }), _jsx("main", { className: "py-8", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: _jsx(Outlet, {}) }) })] })] }));
}
