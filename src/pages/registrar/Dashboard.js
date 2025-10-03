"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bar, Pie, Line } from "react-chartjs-2";
import Carousel from "@/components/Extra/Carousel";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement, } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement);
// Graph Data: New Applicants Per Program (Pie Chart)
const programData = {
    labels: ["Computer Science", "Business Management", "Engineering", "Law"],
    datasets: [
        {
            label: "Applicants per Program",
            data: [10, 5, 7, 3],
            backgroundColor: ["#3B82F6", "#F59E0B", "#10B981", "#EF4444"],
        },
    ],
};
// Graph Data: Applicants Over Last 7 Days (Bar Chart)
const weeklyData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
        {
            label: "New Applicants",
            data: [2, 1, 3, 2, 4, 1, 3],
            backgroundColor: "#3B82F6",
        },
    ],
};
// Graph Data: Enrollment Trends Over Months (Line Chart)
const enrollmentData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
        {
            label: "Enrolled Students",
            data: [120, 130, 125, 140, 150, 145, 160, 170],
            borderColor: "#3B82F6",
            backgroundColor: "rgba(59, 130, 246, 0.2)",
            fill: true,
            tension: 0.4,
        },
    ],
};
// Example student data
const allStudents = [
    {
        id: 1,
        name: "John Doe",
        batch: "Batch A",
        avatar: "https://i.pravatar.cc/150?img=1",
        gradePoints: 4.0,
    },
    {
        id: 2,
        name: "Jane Smith",
        batch: "Batch B",
        avatar: "https://i.pravatar.cc/150?img=2",
        gradePoints: 3.5,
    },
    {
        id: 3,
        name: "Mike Johnson",
        batch: "Batch C",
        avatar: "https://i.pravatar.cc/150?img=3",
        gradePoints: 3.0,
    },
    {
        id: 4,
        name: "Emily Davis",
        batch: "Batch A",
        avatar: "https://i.pravatar.cc/150?img=4",
        gradePoints: 2.5,
    },
    {
        id: 5,
        name: "Chris Brown",
        batch: "Batch B",
        avatar: "https://i.pravatar.cc/150?img=5",
        gradePoints: 2.0,
    },
    {
        id: 6,
        name: "Sarah Lee",
        batch: "Batch D",
        avatar: "https://i.pravatar.cc/150?img=6",
        gradePoints: 1.5,
    },
];
const sampleApplicants = [
    {
        id: 1,
        name: "Alice Johnson",
        program: "Computer Science",
        date: "Aug 15, 2025",
    },
    {
        id: 2,
        name: "Michael Lee",
        program: "Business Management",
        date: "Aug 14, 2025",
    },
    { id: 3, name: "Sophia Brown", program: "Engineering", date: "Aug 13, 2025" },
];
// Recent Activity Data
const recentActivities = [
    {
        id: 1,
        action: "Application Submitted",
        name: "Alice Johnson",
        date: "Aug 15, 2025, 10:30 AM",
    },
    {
        id: 2,
        action: "Application Reviewed",
        name: "Michael Lee",
        date: "Aug 14, 2025, 2:15 PM",
    },
    {
        id: 3,
        action: "Student Enrolled",
        name: "Sophia Brown",
        date: "Aug 13, 2025, 9:00 AM",
    },
];
const slideInfo = [
    {
        text: "This Is A",
        name: "jack",
        class: "Radiology",
        image: "https://tse4.mm.bing.net/th/id/OIP.vgUIJG3A2sRAxggrM8QAhwHaFl?rs=1&pid=ImgDetMain&o=7&rm=3",
        grade: 4.0,
    },
    {
        text: "This Is B",
        name: "john",
        class: "Pharmacist",
        image: "https://www.shutterstock.com/image-photo/dedicated-smiling-black-male-student-600w-2473972979.jpg",
        grade: 3.99,
    },
    {
        text: "This Is C",
        name: "steve",
        class: "Medicin",
        image: "https://tse2.mm.bing.net/th/id/OIP.yWEcKrKsF_TCDDzpA-8-PgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
        grade: 3.98,
    },
    {
        text: "This Is D",
        name: "david",
        class: "Medicin",
        image: "https://th.bing.com/th/id/OIP.qco33ZchxiNBJY4JEZz9nwHaE7?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        grade: 4.0,
    },
];
export default function RegistrarDashboard() {
    const [randomStudents, setRandomStudents] = useState([]);
    useEffect(() => {
        const shuffled = [...allStudents].sort(() => 0.5 - Math.random());
        setRandomStudents(shuffled.slice(0, 5));
    }, []);
    // Calculate key metrics
    const totalStudents = allStudents.length;
    const totalApplicants = sampleApplicants.length;
    const averageGPA = allStudents.reduce((sum, student) => sum + student.gradePoints, 0) /
        totalStudents;
    return (_jsxs("div", { className: "min-h-screen bg-white dark:bg-gray-900", children: [_jsx("header", { className: "bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center", children: _jsx("h1", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400", children: "Registrar Dashboard" }) }), _jsxs("div", { className: "p-6 space-y-6 max-w-7xl mx-auto", children: [_jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 w-full", children: [_jsx(Card, { className: "bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("h3", { className: "text-lg font-semibold text-blue-600 dark:text-blue-400", children: "Total Students" }), _jsx("p", { className: "text-4xl font-bold text-blue-600 dark:text-blue-400", children: totalStudents })] }) }), _jsx(Card, { className: "bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("h3", { className: "text-lg font-semibold text-blue-600 dark:text-blue-400", children: "New Applicants" }), _jsx("p", { className: "text-4xl font-bold text-blue-600 dark:text-blue-400", children: totalApplicants })] }) }), _jsx(Card, { className: "bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("h3", { className: "text-lg font-semibold text-blue-600 dark:text-blue-400", children: "Average GPA" }), _jsx("p", { className: "text-4xl font-bold text-blue-600 dark:text-blue-400", children: averageGPA.toFixed(2) })] }) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "bg-blue-50 dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex items-center gap-6 w-full", children: [_jsx(motion.div, { whileHover: { scale: 1.15, rotate: 5 }, className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400", children: _jsxs("svg", { viewBox: "0 0 24 24", className: "h-8 w-8", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M3 7l9-4 9 4-9 4-9-4z" }), _jsx("path", { d: "M21 10l-9 4-9-4" }), _jsx("path", { d: "M12 14v6" })] }) }), _jsxs("div", { className: "space-y-2", children: [_jsx("h2", { className: "text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-400", children: "\uD83D\uDC4B Welcome, Registrar" }), _jsx("p", { className: "text-base text-gray-600 dark:text-gray-400 max-w-xl", children: "Manage and view students' data, applications, and analytics with ease." })] })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "w-full", children: _jsx(Carousel, { slides: slideInfo }) }), _jsx("div", { className: "w-full lg:w-1/2", children: _jsx(Card, { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-lg", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("h2", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4", children: "Quick Actions" }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsx(Button, { className: "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600", children: "Add Student" }), _jsx(Button, { className: "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600", children: "Review Applications" }), _jsx(Button, { className: "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600", children: "Generate Report" }), _jsx(Button, { className: "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600", children: "Update Records" })] })] }) }) }), _jsxs("div", { className: "space-y-4 w-full", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h2", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400", children: "New Applicants" }), _jsx(Link, { to: "/registrar/applications", className: "text-lg font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-4 transition-colors", children: "Click to see more \u2192" })] }), _jsxs("div", { className: "flex space-x-4 overflow-x-auto pb-2", children: [sampleApplicants.map((applicant) => (_jsx(Card, { className: "min-w-[33%] flex-shrink-0 rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800", children: _jsxs(CardContent, { className: "p-4", children: [_jsx("h3", { className: "font-semibold text-center text-blue-600 dark:text-blue-400", children: applicant.name }), _jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 text-center", children: applicant.program }), _jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400 text-center", children: ["Applied: ", applicant.date] }), _jsx(Button, { variant: "outline", size: "sm", className: "mt-2 w-full border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-700", children: "View" })] }) }, applicant.id))), _jsx("div", { className: "min-w-[33%] flex-shrink-0 flex items-center justify-center", children: _jsx(Link, { to: "/registrar/applications", children: _jsx(Button, { variant: "ghost", className: "w-full h-32 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700", children: "See More" }) }) })] })] }), _jsxs("div", { className: "space-y-4 w-full", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h2", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400", children: "View Students Data" }), _jsx(Link, { to: "/registrar/students", className: "text-lg font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-4 transition-colors", children: "Click to see more \u2192" })] }), _jsxs("div", { className: "flex space-x-4 overflow-x-auto pb-2", children: [randomStudents.map((student) => (_jsx(Card, { className: "min-w-[33%] flex-shrink-0 rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800", children: _jsxs(CardContent, { className: "flex flex-col items-center p-4", children: [_jsx("img", { src: student.avatar, alt: student.name, className: "w-24 h-24 rounded-full mb-2 object-cover" }), _jsx("h3", { className: "font-semibold text-center text-blue-600 dark:text-blue-400", children: student.name }), _jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 text-center", children: student.batch }), _jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: ["ID: ", _jsx("span", { className: "font-medium", children: student.id })] }), _jsxs("p", { className: "text-lg font-bold text-blue-600 dark:text-blue-400 mt-2", children: ["Grade Points: ", student.gradePoints] }), _jsx(Button, { variant: "outline", size: "sm", className: "mt-2 w-full border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-700", children: "View" })] }) }, student.id))), _jsx("div", { className: "min-w-[33%] flex-shrink-0 flex items-center justify-center", children: _jsx(Link, { to: "/registrar/students", children: _jsx(Button, { variant: "ghost", className: "w-full h-32 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700", children: "See More" }) }) })] })] }), _jsx("div", { className: "w-full lg:w-1/2", children: _jsx(Card, { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-lg", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("h2", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4", children: "Recent Activity" }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full text-left", children: [_jsx("thead", { children: _jsxs("tr", { className: "text-gray-600 dark:text-gray-400", children: [_jsx("th", { className: "p-2", children: "Action" }), _jsx("th", { className: "p-2", children: "Name" }), _jsx("th", { className: "p-2", children: "Date" })] }) }), _jsx("tbody", { children: recentActivities.map((activity) => (_jsxs("tr", { className: "border-t border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700", children: [_jsx("td", { className: "p-2 text-blue-600 dark:text-blue-400", children: activity.action }), _jsx("td", { className: "p-2 text-blue-600 dark:text-blue-400", children: activity.name }), _jsx("td", { className: "p-2 text-gray-600 dark:text-gray-400", children: activity.date })] }, activity.id))) })] }) })] }) }) }), _jsxs("div", { className: "space-y-4 w-full", children: [_jsx("h2", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400", children: "Analytics" }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsx(Card, { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow", children: _jsxs(CardContent, { className: "p-4", children: [_jsx("h3", { className: "text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2", children: "Applicants by Program" }), _jsx(Pie, { data: programData })] }) }), _jsx(Card, { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow", children: _jsxs(CardContent, { className: "p-4", children: [_jsx("h3", { className: "text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2", children: "New Applicants This Week" }), _jsx(Bar, { data: weeklyData, options: {
                                                        responsive: true,
                                                        plugins: { legend: { display: false } },
                                                    } })] }) }), _jsx(Card, { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow", children: _jsxs(CardContent, { className: "p-4", children: [_jsx("h3", { className: "text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2", children: "Enrollment Trends" }), _jsx(Line, { data: enrollmentData, options: {
                                                        responsive: true,
                                                        plugins: { legend: { display: true } },
                                                    } })] }) })] })] })] })] }));
}
