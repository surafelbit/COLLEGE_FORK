"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Mail, Phone, Download, Filter, Users } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
export default function TeacherStudents() {
    const { courseId } = useParams();
    const [searchTerm, setSearchTerm] = useState("");
    const students = [
        {
            id: "2024001",
            name: "John Smith",
            email: "john.smith@dhfm-college.de",
            phone: "+49 123 456 7890",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        {
            id: "2024002",
            name: "Emma Mueller",
            email: "emma.mueller@dhfm-college.de",
            phone: "+49 123 456 7891",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        {
            id: "2024003",
            name: "Michael Weber",
            email: "michael.weber@dhfm-college.de",
            phone: "+49 123 456 7892",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        {
            id: "2024004",
            name: "Sarah Fischer",
            email: "sarah.fischer@dhfm-college.de",
            phone: "+49 123 456 7893",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        {
            id: "2024005",
            name: "David Hoffmann",
            email: "david.hoffmann@dhfm-college.de",
            phone: "+49 123 456 7894",
            avatar: "/placeholder.svg?height=40&width=40",
        },
    ];
    const courseInfo = {
        name: courseId === "all" ? "All Courses" : "Human Anatomy",
        code: courseId === "all" ? "" : "MED101",
        totalStudents: courseId === "all" ? 247 : 45,
    };
    // Filter students based on search term
    const filteredStudents = students.filter((student) => student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase()));
    return (_jsx("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-6", children: _jsxs("div", { className: "max-w-7xl mx-auto space-y-8", children: [_jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-center gap-4 animate-fade-in", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight", children: "Students" }), _jsxs("p", { className: "text-gray-600 dark:text-gray-400 mt-2", children: [courseInfo.name, " ", courseInfo.code && `(${courseInfo.code})`, " \u2022", " ", courseInfo.totalStudents, " students"] })] }), _jsxs("div", { className: "flex space-x-3", children: [_jsxs(Button, { className: "bg-gray-600 dark:bg-gray-400 text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-300 transform transition-transform hover:scale-105", children: [_jsx(Download, { className: "mr-2 h-5 w-5" }), "Export List"] }), _jsxs(Button, { variant: "outline", className: "border-gray-600 dark:border-gray-400 text-gray-600 dark:text-gray-400 hover:bg-gray-600 hover:text-white dark:hover:bg-gray-400 dark:hover:text-gray-900 transition-colors", children: [_jsx(Filter, { className: "mr-2 h-5 w-5" }), "Filter"] })] })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: _jsxs(Card, { className: "bg-gray-100 dark:bg-gray-900 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 border-2 border-gray-300 dark:border-gray-700", children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium text-gray-700 dark:text-gray-200", children: "Total Students" }), _jsx(Users, { className: "h-5 w-5 text-gray-600 dark:text-gray-400" })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "text-3xl font-bold text-gray-900 dark:text-gray-100", children: students.length }), _jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Enrolled in course" })] })] }) }), _jsxs(Card, { className: "bg-gray-100 dark:bg-gray-900 shadow-xl rounded-xl overflow-hidden group border-2 border-gray-300 dark:border-gray-700", children: [_jsxs(CardHeader, { className: "relative z-10", children: [_jsx(CardTitle, { className: "text-xl font-bold text-gray-900 dark:text-gray-100", children: "Student List" }), _jsxs(CardDescription, { className: "text-gray-600 dark:text-gray-400", children: ["Manage and view student information for ", courseInfo.name] })] }), _jsxs(CardContent, { className: "relative z-10 p-6", children: [_jsx("div", { className: "flex items-center space-x-3 mb-6", children: _jsxs("div", { className: "relative flex-1", children: [_jsx(Search, { className: "absolute left-3 top-2.5 h-5 w-5 text-gray-500 dark:text-gray-400" }), _jsx(Input, { placeholder: "Search students by name, ID, or email...", className: "pl-10 bg-gray-100 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-300 rounded-lg", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) })] }) }), _jsxs("table", { className: "w-full border-t-2 border-b-2 border-gray-300 dark:border-gray-700 rounded-lg", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-b border-gray-300 dark:border-gray-700", children: [_jsx("th", { className: "text-left py-4 px-6 font-semibold", children: "Student" }), _jsx("th", { className: "text-left py-4 px-6 font-semibold", children: "Contact" }), _jsx("th", { className: "text-center py-4 px-6 font-semibold", children: "Actions" })] }) }), _jsx("tbody", { children: filteredStudents.map((student) => (_jsxs("tr", { className: "border-b border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.01]", children: [_jsx("td", { className: "py-4 px-6", children: _jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs(Avatar, { className: "h-10 w-10", children: [_jsx(AvatarImage, { src: student.avatar || "/placeholder.svg" }), _jsx(AvatarFallback, { className: "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: student.name
                                                                                .split(" ")
                                                                                .map((n) => n[0])
                                                                                .join("") })] }), _jsxs("div", { children: [_jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: student.name }), _jsxs("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: ["ID: ", student.id] })] })] }) }), _jsx("td", { className: "py-4 px-6", children: _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center text-sm", children: [_jsx(Mail, { className: "mr-2 h-4 w-4 text-gray-600 dark:text-gray-400" }), _jsx("a", { href: `mailto:${student.email}`, className: "text-gray-700 dark:text-gray-300 hover:underline", children: student.email })] }), _jsxs("div", { className: "flex items-center text-sm text-gray-600 dark:text-gray-400", children: [_jsx(Phone, { className: "mr-2 h-4 w-4 text-gray-600 dark:text-gray-400" }), student.phone] })] }) }), _jsx("td", { className: "py-4 px-6 text-center", children: _jsx(Link, { to: `/teacher/students/${courseId}/${student.id}`, children: _jsx(Button, { variant: "outline", size: "sm", className: "bg-transparent text-gray-600 dark:text-gray-400 border-gray-600 dark:border-gray-400 hover:bg-gray-600 hover:text-white dark:hover:bg-gray-400 dark:hover:text-gray-900 transition-colors", children: "View Profile" }) }) })] }, student.id))) })] }), filteredStudents.length === 0 && (_jsx("div", { className: "text-center py-6 text-gray-600 dark:text-gray-400", children: "No students found matching your search." }))] }), _jsx("div", { className: "absolute bottom-0 left-0 w-full h-1 bg-gray-300 dark:bg-gray-700 opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" })] })] }) }));
}
