"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useMemo, useState } from "react";
import { BookOpen, TrendingUp, TrendingDown, Users } from "lucide-react";
const MOCK_GRADES = [
    { id: "G-001", studentName: "Abebe Kebede", studentId: "S-2024-001", course: "General Biology", courseCode: "BIO101", grade: "A", score: 92, semester: "I", teacher: "Dr. Alemu" },
    { id: "G-002", studentName: "Kebede Abebe", studentId: "S-2024-002", course: "General Biology", courseCode: "BIO101", grade: "B+", score: 87, semester: "I", teacher: "Dr. Alemu" },
    { id: "G-003", studentName: "Sara Tesfaye", studentId: "S-2024-003", course: "Organic Chemistry", courseCode: "CHE201", grade: "A-", score: 89, semester: "I", teacher: "Dr. Sara" },
    { id: "G-004", studentName: "Tesfaye Sara", studentId: "S-2024-004", course: "Physics I", courseCode: "PHY110", grade: "B", score: 82, semester: "I", teacher: "Mr. Bekele" },
    { id: "G-005", studentName: "Mulu Worku", studentId: "S-2024-005", course: "Calculus", courseCode: "MAT130", grade: "A", score: 95, semester: "I", teacher: "Dr. Mulu" },
    { id: "G-006", studentName: "Worku Mulu", studentId: "S-2024-006", course: "General Biology", courseCode: "BIO101", grade: "C+", score: 76, semester: "I", teacher: "Dr. Alemu" },
    { id: "G-007", studentName: "Dawit Assefa", studentId: "S-2024-007", course: "Organic Chemistry", courseCode: "CHE201", grade: "B-", score: 80, semester: "I", teacher: "Dr. Sara" },
    { id: "G-008", studentName: "Assefa Dawit", studentId: "S-2024-008", course: "Physics I", courseCode: "PHY110", grade: "A-", score: 88, semester: "I", teacher: "Mr. Bekele" },
];
const getGradeColor = (grade) => {
    switch (grade) {
        case "A": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
        case "A-": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
        case "B+": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
        case "B": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
        case "B-": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
        case "C+": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
        case "C": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
        case "D": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
        case "F": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
        default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
};
export default function HeadGrades() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("all");
    const [selectedSemester, setSelectedSemester] = useState("all");
    const courses = Array.from(new Set(MOCK_GRADES.map(g => g.courseCode)));
    const semesters = Array.from(new Set(MOCK_GRADES.map(g => g.semester)));
    const filteredGrades = useMemo(() => {
        return MOCK_GRADES.filter(grade => {
            const matchesSearch = grade.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                grade.studentId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                grade.course.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCourse = selectedCourse === "all" || grade.courseCode === selectedCourse;
            const matchesSemester = selectedSemester === "all" || grade.semester === selectedSemester;
            return matchesSearch && matchesCourse && matchesSemester;
        });
    }, [searchQuery, selectedCourse, selectedSemester]);
    const gradeStats = useMemo(() => {
        const total = filteredGrades.length;
        const average = total > 0 ? filteredGrades.reduce((sum, g) => sum + g.score, 0) / total : 0;
        const highPerformers = filteredGrades.filter(g => g.score >= 90).length;
        const lowPerformers = filteredGrades.filter(g => g.score < 70).length;
        return { total, average, highPerformers, lowPerformers };
    }, [filteredGrades]);
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("h1", { className: "text-3xl font-bold", children: "Department Grades" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [_jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center", children: [_jsx(BookOpen, { className: "h-8 w-8 text-blue-600" }), _jsxs("div", { className: "ml-4", children: [_jsx("p", { className: "text-sm font-medium text-gray-600 dark:text-gray-400", children: "Total Grades" }), _jsx("p", { className: "text-2xl font-bold", children: gradeStats.total })] })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center", children: [_jsx(TrendingUp, { className: "h-8 w-8 text-green-600" }), _jsxs("div", { className: "ml-4", children: [_jsx("p", { className: "text-sm font-medium text-gray-600 dark:text-gray-400", children: "Average Score" }), _jsxs("p", { className: "text-2xl font-bold", children: [gradeStats.average.toFixed(1), "%"] })] })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center", children: [_jsx(Users, { className: "h-8 w-8 text-green-600" }), _jsxs("div", { className: "ml-4", children: [_jsx("p", { className: "text-sm font-medium text-gray-600 dark:text-gray-400", children: "High Performers" }), _jsx("p", { className: "text-2xl font-bold", children: gradeStats.highPerformers })] })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center", children: [_jsx(TrendingDown, { className: "h-8 w-8 text-red-600" }), _jsxs("div", { className: "ml-4", children: [_jsx("p", { className: "text-sm font-medium text-gray-600 dark:text-gray-400", children: "Low Performers" }), _jsx("p", { className: "text-2xl font-bold", children: gradeStats.lowPerformers })] })] }) }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Grade Management" }), _jsx(CardDescription, { children: "View and analyze student grades across courses" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [_jsx(Input, { placeholder: "Search by student name, ID, or course", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value) }), _jsxs(Select, { value: selectedCourse, onValueChange: setSelectedCourse, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Filter by course" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Courses" }), courses.map(course => (_jsx(SelectItem, { value: course, children: course }, course)))] })] }), _jsxs(Select, { value: selectedSemester, onValueChange: setSelectedSemester, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Filter by semester" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Semesters" }), semesters.map(semester => (_jsxs(SelectItem, { value: semester, children: ["Semester ", semester] }, semester)))] })] }), _jsx(Button, { variant: "outline", className: "w-full", children: "Export Grades" })] }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full text-sm", children: [_jsx("thead", { children: _jsxs("tr", { className: "text-left border-b", children: [_jsx("th", { className: "py-3 pr-4", children: "Student ID" }), _jsx("th", { className: "py-3 pr-4", children: "Student Name" }), _jsx("th", { className: "py-3 pr-4", children: "Course" }), _jsx("th", { className: "py-3 pr-4", children: "Teacher" }), _jsx("th", { className: "py-3 pr-4", children: "Score" }), _jsx("th", { className: "py-3 pr-4", children: "Grade" }), _jsx("th", { className: "py-3 pr-4", children: "Semester" }), _jsx("th", { className: "py-3 pr-4", children: "Actions" })] }) }), _jsx("tbody", { children: filteredGrades.map((grade) => (_jsxs("tr", { className: "border-b hover:bg-gray-50 dark:hover:bg-gray-800", children: [_jsx("td", { className: "py-3 pr-4 font-mono text-xs", children: grade.studentId }), _jsx("td", { className: "py-3 pr-4", children: grade.studentName }), _jsx("td", { className: "py-3 pr-4", children: _jsxs("div", { children: [_jsx("div", { className: "font-medium", children: grade.courseCode }), _jsx("div", { className: "text-xs text-gray-500", children: grade.course })] }) }), _jsx("td", { className: "py-3 pr-4", children: grade.teacher }), _jsxs("td", { className: "py-3 pr-4 font-medium", children: [grade.score, "%"] }), _jsx("td", { className: "py-3 pr-4", children: _jsx(Badge, { className: getGradeColor(grade.grade), children: grade.grade }) }), _jsxs("td", { className: "py-3 pr-4", children: ["Semester ", grade.semester] }), _jsx("td", { className: "py-3 pr-4", children: _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { size: "sm", variant: "outline", children: "View Details" }), _jsx(Button, { size: "sm", variant: "outline", children: "Edit" })] }) })] }, grade.id))) })] }) }), filteredGrades.length === 0 && (_jsx("div", { className: "text-center py-8 text-gray-500", children: "No grades found matching your criteria." }))] })] })] }));
}
