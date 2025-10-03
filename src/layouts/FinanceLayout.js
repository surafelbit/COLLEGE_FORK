"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { GraduationCap, LayoutDashboard, CreditCard, History, BarChart3, LogOut, Menu } from "lucide-react";
import { useState } from "react";
export default function FinanceLayout() {
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigation = [
        { name: "Dashboard", href: "/finance/dashboard", icon: LayoutDashboard },
        { name: "Payments", href: "/finance/payments", icon: CreditCard },
        { name: "History", href: "/finance/history", icon: History },
        { name: "Reports", href: "/finance/reports", icon: BarChart3 },
    ];
    return (_jsxs("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900", children: [sidebarOpen && (_jsx("div", { className: "fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden", onClick: () => setSidebarOpen(false) })), _jsxs("div", { className: `fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`, children: [_jsx("div", { className: "flex items-center justify-center h-16 px-4 bg-blue-600", children: _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(GraduationCap, { className: "h-8 w-8 text-white" }), _jsxs("div", { className: "text-white", children: [_jsx("div", { className: "text-sm font-bold", children: "DHFM COLLEGE" }), _jsx("div", { className: "text-xs opacity-75", children: "Finance Portal" })] })] }) }), _jsx("nav", { className: "mt-8", children: _jsx("div", { className: "px-4 space-y-2", children: navigation.map((item) => {
                                const isActive = location.pathname === item.href;
                                return (_jsxs(Link, { to: item.href, className: `flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive
                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                                        : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"}`, onClick: () => setSidebarOpen(false), children: [_jsx(item.icon, { className: "mr-3 h-5 w-5" }), item.name] }, item.name));
                            }) }) }), _jsx("div", { className: "absolute bottom-0 w-full p-4", children: _jsxs(Button, { variant: "ghost", className: "w-full justify-start text-gray-600 dark:text-gray-300", children: [_jsx(LogOut, { className: "mr-3 h-5 w-5" }), "Sign Out"] }) })] }), _jsxs("div", { className: "lg:pl-64", children: [_jsxs("div", { className: "sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:gap-x-6 sm:px-6 lg:px-8", children: [_jsx(Button, { variant: "ghost", size: "icon", className: "lg:hidden", onClick: () => setSidebarOpen(true), children: _jsx(Menu, { className: "h-6 w-6" }) }), _jsxs("div", { className: "flex flex-1 gap-x-4 self-stretch lg:gap-x-6", children: [_jsx("div", { className: "flex flex-1 items-center", children: _jsx("h1", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Finance Portal" }) }), _jsxs("div", { className: "flex items-center gap-x-4 lg:gap-x-6", children: [_jsx(ThemeToggle, {}), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: "w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center", children: _jsx("span", { className: "text-white text-sm font-medium", children: "FO" }) }), _jsxs("div", { className: "hidden sm:block", children: [_jsx("div", { className: "text-sm font-medium text-gray-900 dark:text-white", children: "Finance Officer" }), _jsx("div", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Financial Management" })] })] })] })] })] }), _jsx("main", { className: "py-8", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: _jsx(Outlet, {}) }) })] })] }));
}
