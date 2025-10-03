"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UserPlus } from "lucide-react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { useLocation } from "react-router-dom";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement, } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement);
const totals = {
    students: 1260,
    courses: 142,
    departments: 8,
    faculty: 215,
};
const avgGpaByDept = {
    labels: ["Medicine", "Pharmacy", "Radiology", "Nursing", "Dentistry"],
    datasets: [
        {
            label: "Average GPA",
            data: [3.21, 3.05, 3.46, 3.12, 2.98],
            backgroundColor: "#3B82F6",
        },
    ],
};
const attendanceTrend = {
    labels: ["Wk1", "Wk2", "Wk3", "Wk4", "Wk5", "Wk6", "Wk7", "Wk8"],
    datasets: [
        {
            label: "Attendance %",
            data: [88, 86, 90, 92, 89, 91, 87, 93],
            borderColor: "#10B981",
            backgroundColor: "rgba(16,185,129,0.2)",
            fill: true,
            tension: 0.4,
        },
    ],
};
const gradeDistribution = {
    labels: ["A", "B", "C", "D", "F"],
    datasets: [
        {
            label: "Share",
            data: [35, 40, 15, 7, 3],
            backgroundColor: ["#16A34A", "#3B82F6", "#F59E0B", "#EF4444", "#6B7280"],
        },
    ],
};
const upcomingEvents = [
    { id: 1, title: "Midterm Exams", date: "Oct 12", note: "All departments" },
    {
        id: 2,
        title: "Grade Submission Deadline",
        date: "Oct 25",
        note: "Semester 1",
    },
    {
        id: 3,
        title: "Results Announcement",
        date: "Nov 02",
        note: "Portal + Notice",
    },
];
const alerts = [
    { id: 1, type: "warning", text: "12 students at academic risk (GPA < 2.0)" },
    { id: 2, type: "danger", text: "3 disciplinary cases pending review" },
    { id: 3, type: "info", text: "7 course change requests awaiting approval" },
];
const topBottom = {
    top: [
        { id: 1, name: "Alice Johnson", gpa: 3.98, dept: "Radiology" },
        { id: 2, name: "Michael Lee", gpa: 3.92, dept: "Medicine" },
        { id: 3, name: "Sophia Brown", gpa: 3.9, dept: "Pharmacy" },
    ],
    bottom: [
        { id: 11, name: "Chris Green", gpa: 1.92, dept: "Dentistry" },
        { id: 12, name: "Dana Brooks", gpa: 1.88, dept: "Nursing" },
        { id: 13, name: "Eric Young", gpa: 1.84, dept: "Medicine" },
    ],
};
export default function DeanDashboard() {
    const location = useLocation();
    return (_jsx("div", { className: "min-h-screen bg-white dark:bg-gray-900", children: _jsxs("div", { className: "p-6 space-y-6 max-w-7xl mx-auto", children: [_jsxs("div", { className: "flex items-center justify-between", children: [!location.pathname.includes("general-manager") ? (_jsx("h1", { className: "text-3xl font-bold text-blue-600 dark:text-blue-400", children: "Dean Dashboard" })) : (_jsx("h1", { className: "text-3xl font-bold text-blue-600 dark:text-blue-400", children: "Manager Dashboard" })), !location.pathname.includes("general-manager") && (_jsx(Link, { to: "/dean/create-department-head", children: _jsxs(Button, { className: "flex items-center gap-2 bg-blue-600 hover:bg-blue-700", children: [_jsx(UserPlus, { className: "h-4 w-4" }), "Create Department Head"] }) }))] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
                        { label: "Students", value: totals.students },
                        { label: "Courses", value: totals.courses },
                        { label: "Departments", value: totals.departments },
                        { label: "Faculty", value: totals.faculty },
                    ].map((m) => (_jsx(Card, { className: "bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("h3", { className: "text-sm font-medium text-gray-600 dark:text-gray-400", children: m.label }), _jsx("p", { className: "text-4xl font-bold text-blue-600 dark:text-blue-400", children: m.value })] }) }, m.label))) }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsx(Card, { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-lg lg:col-span-2", children: _jsxs(CardContent, { className: "p-6 space-y-3", children: [_jsx("h2", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400", children: "Quick Alerts" }), _jsx("ul", { className: "space-y-2", children: alerts.map((a) => (_jsxs("li", { className: "flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-700 px-4 py-3", children: [_jsx("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: a.text }), _jsx(Button, { size: "sm", variant: "outline", className: "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400", children: "View" })] }, a.id))) })] }) }), _jsx(Card, { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-lg", children: _jsxs(CardContent, { className: "p-6 space-y-4", children: [_jsx("h2", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400", children: "Upcoming" }), _jsx("ul", { className: "space-y-3", children: upcomingEvents.map((e) => (_jsxs("li", { className: "rounded-xl border border-gray-200 dark:border-gray-700 p-3", children: [_jsx("p", { className: "font-medium text-blue-600 dark:text-blue-400", children: e.title }), _jsxs("p", { className: "text-xs text-gray-600 dark:text-gray-400", children: [e.date, " \u2022 ", e.note] })] }, e.id))) }), _jsx(Button, { className: "w-full bg-blue-600 text-white hover:bg-blue-700", children: "Add Event" })] }) })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h2", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400", children: "Analytics" }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsx(Card, { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow", children: _jsxs(CardContent, { className: "p-4", children: [_jsx("h3", { className: "text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2", children: "Average GPA by Department" }), _jsx(Bar, { data: avgGpaByDept, options: {
                                                    responsive: true,
                                                    plugins: { legend: { display: false } },
                                                } })] }) }), _jsx(Card, { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow", children: _jsxs(CardContent, { className: "p-4", children: [_jsx("h3", { className: "text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2", children: "Attendance Trend" }), _jsx(Line, { data: attendanceTrend, options: {
                                                    responsive: true,
                                                    plugins: { legend: { display: true } },
                                                } })] }) }), _jsx(Card, { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow", children: _jsxs(CardContent, { className: "p-4", children: [_jsx("h3", { className: "text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2", children: "Grade Distribution" }), _jsx(Pie, { data: gradeDistribution })] }) })] })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsx(Card, { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-lg", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("h3", { className: "text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3", children: "Top Performing Students" }), _jsx("div", { className: "space-y-2", children: topBottom.top.map((s) => (_jsxs("div", { className: "flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-700 px-4 py-2", children: [_jsxs("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: [s.name, " \u2022 ", s.dept] }), _jsxs("span", { className: "text-blue-600 dark:text-blue-400 font-semibold", children: ["GPA ", s.gpa.toFixed(2)] })] }, s.id))) })] }) }), _jsx(Card, { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-lg", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("h3", { className: "text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3", children: "Underperforming Students" }), _jsx("div", { className: "space-y-2", children: topBottom.bottom.map((s) => (_jsxs("div", { className: "flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-700 px-4 py-2", children: [_jsxs("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: [s.name, " \u2022 ", s.dept] }), _jsxs("span", { className: "text-red-600 dark:text-red-400 font-semibold", children: ["GPA ", s.gpa.toFixed(2)] })] }, s.id))) })] }) })] })] }) }));
}
