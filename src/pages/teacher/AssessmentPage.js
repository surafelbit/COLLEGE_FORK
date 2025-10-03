import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// Dummy students
const students = [
    { id: 1, name: "Abebe Kebede" },
    { id: 2, name: "Mulu Habte" },
    { id: 3, name: "Tesfaye Bekele" },
    { id: 4, name: "Sara Tadesse" },
    { id: 5, name: "Yonas Alemayehu" },
];
// Predefined assessments for the single course (weights sum to 100%)
const initialAssessments = [
    { id: 1, title: "Quiz 1", maxMarks: 10, weight: 10 },
    { id: 2, title: "Quiz 2", maxMarks: 10, weight: 10 },
    { id: 3, title: "Assignment 1", maxMarks: 20, weight: 20 },
    { id: 4, title: "Midterm Exam", maxMarks: 30, weight: 30 },
    { id: 5, title: "Final Exam", maxMarks: 30, weight: 30 },
];
// Pre-filled marks (editable)
const initialMarks = {
    1: { 1: 8, 2: "", 3: "", 4: "", 5: "" }, // Abebe: Quiz 1 = 8
    2: { 1: 7, 2: "", 3: "", 4: "", 5: "" }, // Mulu: Quiz 1 = 7
    3: { 1: 9, 2: "", 3: "", 4: "", 5: "" }, // Tesfaye: Quiz 1 = 9
    4: { 1: "", 2: "", 3: 18, 4: "", 5: "" }, // Sara: Assignment 1 = 18
    5: { 1: "", 2: "", 3: 16, 4: "", 5: "" }, // Yonas: Assignment 1 = 16
};
const AssessmentPage = () => {
    const [theme, setTheme] = useState("light");
    const [marks, setMarks] = useState(initialMarks);
    const navigate = useNavigate();
    // Sync with system theme preference on mount
    useEffect(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDark ? "dark" : "light");
        document.documentElement.classList.toggle("dark", prefersDark);
    }, []);
    // Toggle theme
    // const toggleTheme = () => {
    //   const newTheme = theme === "light" ? "dark" : "light";
    //   setTheme(newTheme);
    //   document.documentElement.classList.toggle("dark", newTheme === "dark");
    // };
    // Handle mark input
    const handleMarkChange = (studentId, assessId, value) => {
        const assessment = initialAssessments.find((a) => a.id === assessId);
        const mark = Math.min(Math.max(0, parseFloat(value) || 0), assessment.maxMarks);
        setMarks((prev) => ({
            ...prev,
            [studentId]: {
                ...prev[studentId],
                [assessId]: mark,
            },
        }));
    };
    // Calculate total weighted score out of 100
    const calculateTotal = (studentId) => {
        let total = 0;
        initialAssessments.forEach((assessment) => {
            const mark = marks[studentId][assessment.id];
            if (mark !== "" && !isNaN(mark)) {
                const weightedScore = (mark / assessment.maxMarks) * assessment.weight;
                total += weightedScore;
            }
        });
        return total.toFixed(1);
    };
    return (_jsx("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-colors duration-200", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6", children: [_jsx("div", { className: "flex justify-between items-center", children: _jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs(Link, { onClick: () => navigate(-1), className: "inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700 rounded-md hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors", children: [_jsx("svg", { className: "w-4 h-4 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 19l-7-7 7-7" }) }), "Back to Course List"] }), _jsx("h1", { className: "text-2xl font-bold text-gray-800 dark:text-gray-100", children: "Computer Science 101 (CS101) - Fall 2025" })] }) }), _jsx("p", { className: "mt-2 text-sm text-gray-600 dark:text-gray-400", children: "Assessment weights sum to 100%. Enter or edit raw marks (e.g., 8/10 for Quiz 1, 25/30 for Midterm Exam). Total is calculated out of 100 based on weights." })] }), _jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-x-auto", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700", children: [_jsx("thead", { className: "bg-gray-50 dark:bg-gray-700", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: "Student ID" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: "Name" }), initialAssessments.map((assessment) => (_jsxs("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: [assessment.title, " (", assessment.weight, "%, /", assessment.maxMarks, ")"] }, assessment.id))), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: "Total (/100)" })] }) }), _jsx("tbody", { className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700", children: students.map((student) => (_jsxs("tr", { className: "hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors", children: [_jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200", children: student.id }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200", children: student.name }), initialAssessments.map((assessment) => (_jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300", children: _jsx("input", { type: "number", min: "0", max: assessment.maxMarks, step: "0.1", value: marks[student.id][assessment.id] || "", onChange: (e) => handleMarkChange(student.id, assessment.id, e.target.value), className: "w-20 p-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors", placeholder: "Enter mark" }) }, assessment.id))), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200", children: calculateTotal(student.id) })] }, student.id))) })] }) })] }) }));
};
export default AssessmentPage;
