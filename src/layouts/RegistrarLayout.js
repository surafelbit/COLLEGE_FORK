"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import NotificationDropdown from "@/components/ui/NotificationDropdown";
import { GraduationCap, LayoutDashboard, FileText, Users, BookOpen, ClipboardList, Calendar, LogOut, Layers, Menu, Settings, } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function RegistrarLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const [listOpen, setListOpen] = useState(() => {
        return window.innerWidth >= 1024;
    });
    const [sidebarOpen, setSidebarOpen] = useState(() => {
        // Initial check: if large screen (≥ 1024px), open sidebar
        return window.innerWidth >= 1024;
    });
    useEffect(() => {
        // Update when resizing
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
    }, []);
    const navigation = [
        { name: "Dashboard", href: "/registrar/dashboard", icon: LayoutDashboard },
        // { name: "Applications", href: "/registrar/applications", icon: FileText },
        { name: "Students", href: "/registrar/students", icon: Users },
        { name: "Departments", href: "/registrar/departments", icon: Layers },
        // { name: "Courses", href: "/registrar/courses", icon: BookOpen },
        {
            name: "Scores",
            href: "/registrar/scores",
            icon: ClipboardList,
        },
        { name: "Batches", href: "/registrar/batches", icon: Calendar },
        { name: "Customize Tables", href: "/registrar/tables", icon: Calendar },
        // { name: "Setting", href: "/registrar/settings", icon: Settings },
    ];
    function logout() {
        localStorage.removeItem("xy9a7b");
        navigate("/");
    }
    const [extra, setExtra] = useState(false);
    const [setupOpen, setSetupOpen] = useState(false);
    return (_jsxs("div", { className: " flex min-h-screen bg-gray-50 dark:bg-gray-900 ", children: [sidebarOpen && (_jsx("div", { className: "fixed inset-0 z-40 lg:hidden", onClick: () => setSidebarOpen(false) })), _jsxs("div", { className: `fixed flex flex-col inset-y-0 left-0 z-50 w-64
              bg-white dark:bg-gray-800 shadow-xl
              transform transition-transform duration-300 ease-in-out
              border-r border-gray-200 dark:border-gray-700
              ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`, children: [_jsxs("div", { className: "flex items-center justify-between h-16 px-4 bg-blue-600 shadow-md", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx("img", { src: "/assets/companylogo.jpg", alt: "Logo", className: "h-12 w-12 rounded-full object-cover" }), _jsxs("div", { className: "text-white", children: [_jsx("div", { className: "text-sm font-bold", children: "DHFM COLLEGE" }), _jsx("div", { className: "text-xs opacity-75", children: "Registrar Portal" })] })] }), _jsx("button", { onClick: () => setSidebarOpen(false), className: "p-1 rounded hover:bg-blue-500 transition", children: _jsx("svg", { width: "24", height: "24", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg", fill: "white", children: _jsxs("g", { children: [_jsx("path", { d: "M32.6,22.6a1.9,1.9,0,0,0,0,2.8l5.9,6a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L38.8,26H44a2,2,0,0,0,0-4H38.8l2.6-2.6a1.9,1.9,0,0,0-.2-3,2.1,2.1,0,0,0-2.7.2Z" }), _jsx("path", { d: "M15.4,25.4a1.9,1.9,0,0,0,0-2.8l-5.9-6a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L9.2,22H4a2,2,0,0,0,0,4H9.2L6.6,28.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2Z" }), _jsx("path", { d: "M26,6V42a2,2,0,0,0,4,0V6a2,2,0,0,0-4,0Z" }), _jsx("path", { d: "M22,42V6a2,2,0,0,0-4,0V42a2,2,0,0,0,4,0Z" })] }) }) })] }), _jsx("nav", { className: "mt-6 mb-12 flex-1 overflow-y-auto sidebar-scroll", children: _jsxs("div", { className: "px-4 space-y-2 ", children: [navigation.map((item) => {
                                    const isActive = location.pathname.includes(item.href);
                                    return (_jsxs(Link, { to: item.href, className: `flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive
                                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                                            : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"}`, onClick: () => window.innerWidth <= 1024 && setSidebarOpen(false), children: [_jsx(item.icon, { className: "mr-3 h-5 w-5" }), item.name] }, item.name));
                                }), _jsxs("div", { className: "mt-2 space-y-1", children: [_jsxs("button", { className: `flex items-center w-full px-4 py-2 text-sm font-medium rounded-lg transition-colors ${extra ||
                                                location.pathname.includes("/registrar/applications") ||
                                                location.pathname.includes("/registrar/rejected-applications")
                                                ? "bg-gray-100 dark:text-gray-300 dark:bg-gray-700"
                                                : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"}`, onClick: () => {
                                                setExtra(!extra);
                                            }, children: [_jsx(FileText, { className: "mr-3 h-5 w-5" }), _jsxs("div", { className: "flex justify-between w-full", children: [_jsx("span", { children: " Applications" }), _jsx("svg", { className: `mr-3 h-5 w-5 transition-transform duration-200 ${extra ? "rotate-90" : ""}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 5l7 7-7 7" }) })] })] }), extra && (_jsxs("div", { className: "pl-6 space-y-1", children: [_jsx(Link, { to: "/registrar/applications", className: `flex items-center px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${location.pathname.includes("/registrar/applications")
                                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                                                        : "text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-900"}`, onClick: () => window.innerWidth <= 1024 && setSidebarOpen(false), children: "New Applicants" }), _jsx(Link, { to: "/registrar/rejected-applications", className: `flex items-center px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${location.pathname.includes("/registrar/rejected-applications")
                                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                                                        : "text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-900"}`, onClick: () => window.innerWidth <= 1024 && setSidebarOpen(false), children: "Rejected Applicants" })] }))] }), _jsxs("div", { className: "mt-2 space-y-1", children: [_jsxs("button", { className: `flex items-center w-full px-4 py-2 text-sm font-medium rounded-lg transition-colors ${setupOpen || location.pathname.includes("/registrar/settings")
                                                ? "bg-gray-100 dark:text-gray-300 dark:bg-gray-700"
                                                : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"}`, onClick: () => {
                                                setSetupOpen(!setupOpen);
                                                window.innerWidth <= 1024 && setSidebarOpen(false);
                                            }, children: [_jsx(Settings, { className: "mr-3 h-5 w-5" }), _jsxs("div", { className: "flex justify-between w-full", children: [_jsx("span", { children: "Set Up" }), _jsx("svg", { className: `mr-3 ml-2 h-5 w-5 transition-transform duration-200 ${setupOpen ? "rotate-90" : ""}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 5l7 7-7 7" }) })] })] }), setupOpen && (_jsxs("div", { className: "pl-6 space-y-1", children: [_jsx(Link, { to: "/registrar/settings/location", className: `flex items-center px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${location.pathname.includes("/registrar/settings/location")
                                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                                                        : "text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-900"}`, onClick: () => window.innerWidth <= 1024 && setSidebarOpen(false), children: "Locations" }), _jsx(Link, { to: "/registrar/settings/academic-years", className: `flex items-center px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${location.pathname.includes("/registrar/settings/academic-years")
                                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                                                        : "text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-900"}`, onClick: () => window.innerWidth <= 1024 && setSidebarOpen(false), children: "Academic Years" }), _jsx(Link, { to: "/registrar/settings/impairments", className: `flex items-center px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${location.pathname.includes("/registrar/settings/impairments")
                                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                                                        : "text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-900"}`, onClick: () => window.innerWidth <= 1024 && setSidebarOpen(false), children: "Impairments" }), _jsx(Link, { to: "/registrar/settings/program-modality", className: `flex items-center px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${location.pathname.includes("/registrar/settings/program-modality")
                                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                                                        : "text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-900"}`, onClick: () => window.innerWidth <= 1024 && setSidebarOpen(false), children: "Program Modalities" }), _jsx(Link, { to: "/registrar/settings/course-category", className: `flex items-center px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${location.pathname.includes("/registrar/settings/course-category")
                                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                                                        : "text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-900"}`, onClick: () => window.innerWidth <= 1024 && setSidebarOpen(false), children: "Course Category" }), _jsx(Link, { to: "/registrar/settings/batches", className: `flex items-center px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${location.pathname.includes("/registrar/settings/batches")
                                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                                                        : "text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-900"}`, onClick: () => window.innerWidth <= 1024 && setSidebarOpen(false), children: "Batches" }), _jsx(Link, { to: "/registrar/settings/class-years", className: `flex items-center px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${location.pathname.includes("/registrar/settings/class-years")
                                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                                                        : "text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-900"}`, onClick: () => window.innerWidth <= 1024 && setSidebarOpen(false), children: "class years" }), _jsx(Link, { to: "/registrar/settings/semesters", className: `flex items-center px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${location.pathname.includes("/registrar/settings/semesters")
                                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                                                        : "text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-900"}`, onClick: () => window.innerWidth <= 1024 && setSidebarOpen(false), children: "semseters" }), _jsx(Link, { to: "/registrar/settings/attritions", className: `flex items-center px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${location.pathname.includes("/registrar/settings/attritions")
                                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                                                        : "text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-900"}`, onClick: () => window.innerWidth <= 1024 && setSidebarOpen(false), children: "Attrition Cause" }), _jsxs(Link, { to: "/registrar/rejected-applications", className: `flex items-center px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${location.pathname.includes("/registrar/rejected-applications")
                                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                                                        : "text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-900"}`, onClick: () => window.innerWidth <= 1024 && setSidebarOpen(false), children: ["Course MetaData", " "] })] }))] })] }) }), _jsx("div", { className: "bg-white dark:bg-gray-800 absolute bottom-0 w-full p-4 border-t border-gray-200 dark:border-gray-700", children: _jsxs(Button, { onClick: logout, variant: "ghost", className: "w-full justify-start text-gray-600 dark:text-gray-300", children: [_jsx(LogOut, { className: "mr-3 h-5 w-5" }), "Sign Out"] }) })] }), _jsxs("div", { className: `inset-0 w-full transition-all duration-300 ${sidebarOpen && window.innerWidth >= 1024 ? "ml-64" : "ml-0"}`, children: [_jsxs("div", { className: "sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:gap-x-6 sm:px-6 lg:px-8", children: [_jsx(Button, { variant: "ghost", size: "icon", onClick: () => setSidebarOpen(true), children: !sidebarOpen && _jsx(Menu, { className: "h-6 w-6" }) }), _jsxs("div", { className: "flex flex-1 gap-x-4 self-stretch lg:gap-x-6", children: [_jsx("div", { className: "flex flex-1 items-center", children: _jsx("h1", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Registrar Portal" }) }), _jsxs("div", { className: "flex items-center gap-x-4 lg:gap-x-6", children: [_jsx(ThemeToggle, {}), _jsx(NotificationDropdown, {}), _jsx("div", { className: "flex items-center space-x-2", children: _jsx("div", { className: "w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center", children: _jsx("span", { className: "text-white text-sm font-medium", children: "RG" }) }) }), window.innerWidth > 720 && (_jsxs("div", { className: "lg:flex items-center gap-x-4 ml-2 ", children: [_jsx("div", { className: "text-sm font-medium text-gray-900 dark:text-white", children: "Registrar" }), _jsx("div", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Academic Records" }), _jsx(Button, { onClick: logout, children: "Logout" })] })), listOpen && (_jsxs("div", { className: "absolute top-12 right-0 lg:hidden w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3 z-50", children: [_jsxs("div", { className: "mb-2", children: [_jsx("div", { className: "text-sm font-medium text-gray-900 dark:text-white", children: "Student" }), _jsx("div", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Academic Records" })] }), _jsx(Button, { className: "w-full", onClick: () => {
                                                            console.log("Logout");
                                                            logout();
                                                        }, children: "Logout" })] }))] })] })] }), _jsx("main", { className: "py-8", children: _jsx("div", { className: "mx-8", children: _jsx(Outlet, {}) }) })] })] }));
}
