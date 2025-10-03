"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);
const departments = ["Medicine", "Pharmacy", "Radiology", "Nursing", "Dentistry"];
const semesters = ["Sem 1", "Sem 2", "Sem 3", "Sem 4"];
const gradeDataMock = Array.from({ length: departments.length }, (_, d) => Array.from({ length: semesters.length }, (_, s) => ({
    dept: departments[d],
    semester: semesters[s],
    averages: { A: 32, B: 40, C: 18, D: 7, F: 3 },
    avgGpa: 3 + Math.random() * 0.5,
}))).flat();
export default function DeanGrades() {
    const [selectedDept, setSelectedDept] = useState("All");
    const [selectedSem, setSelectedSem] = useState("All");
    const filtered = useMemo(() => {
        return gradeDataMock.filter((r) => (selectedDept === "All" || r.dept === selectedDept) &&
            (selectedSem === "All" || r.semester === selectedSem));
    }, [selectedDept, selectedSem]);
    const totals = useMemo(() => {
        const sum = { A: 0, B: 0, C: 0, D: 0, F: 0 };
        filtered.forEach((r) => {
            Object.entries(r.averages).forEach(([k, v]) => (sum[k] += v));
        });
        return sum;
    }, [filtered]);
    const riskStudents = [
        { id: 1, name: "Chris Green", gpa: 1.92, dept: "Dentistry", semester: "Sem 2" },
        { id: 2, name: "Dana Brooks", gpa: 1.88, dept: "Nursing", semester: "Sem 1" },
        { id: 3, name: "Eric Young", gpa: 1.84, dept: "Medicine", semester: "Sem 3" },
    ];
    return (_jsx("div", { className: "min-h-screen bg-white dark:bg-gray-900", children: _jsxs("div", { className: "p-6 space-y-6 max-w-7xl mx-auto", children: [_jsx("h1", { className: "text-3xl font-bold text-blue-600 dark:text-blue-400", children: "Academic Performance" }), _jsx(Card, { className: "bg-white dark:bg-gray-800 shadow-lg", children: _jsxs(CardContent, { className: "p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [_jsxs("div", { className: "flex gap-2 items-center", children: [_jsx("span", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Department" }), _jsxs("select", { className: "rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm", value: selectedDept, onChange: (e) => setSelectedDept(e.target.value), children: [_jsx("option", { children: "All" }), departments.map((d) => (_jsx("option", { children: d }, d)))] })] }), _jsxs("div", { className: "flex gap-2 items-center", children: [_jsx("span", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Semester" }), _jsxs("select", { className: "rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm", value: selectedSem, onChange: (e) => setSelectedSem(e.target.value), children: [_jsx("option", { children: "All" }), semesters.map((s) => (_jsx("option", { children: s }, s)))] })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { variant: "outline", className: "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400", children: "Reset" }), _jsx(Button, { className: "bg-blue-600 text-white hover:bg-blue-700", children: "Apply" })] })] }) }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsx(Card, { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow lg:col-span-2", children: _jsxs(CardContent, { className: "p-4", children: [_jsx("h3", { className: "text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2", children: "Average GPA by Course/Dept/Semester" }), _jsx(Bar, { data: {
                                            labels: filtered.map((r) => `${r.dept} • ${r.semester}`),
                                            datasets: [
                                                {
                                                    label: "Average GPA",
                                                    data: filtered.map((r) => Number(r.avgGpa.toFixed(2))),
                                                    backgroundColor: "#3B82F6",
                                                },
                                            ],
                                        }, options: { responsive: true, plugins: { legend: { display: false } } } })] }) }), _jsx(Card, { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow", children: _jsxs(CardContent, { className: "p-4", children: [_jsx("h3", { className: "text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2", children: "Grade Distribution" }), _jsx(Pie, { data: {
                                            labels: Object.keys(totals),
                                            datasets: [
                                                {
                                                    data: Object.values(totals),
                                                    backgroundColor: ["#16A34A", "#3B82F6", "#F59E0B", "#EF4444", "#6B7280"],
                                                },
                                            ],
                                        } })] }) })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsx(Card, { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-lg", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("h3", { className: "text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3", children: "Final Grades Approvals" }), _jsx("div", { className: "space-y-3", children: [{ course: "Anatomy I", dept: "Medicine", semester: "Sem 1" }, { course: "Pharmacology Basics", dept: "Pharmacy", semester: "Sem 2" }, { course: "Radiographic Imaging", dept: "Radiology", semester: "Sem 3" }].map((c, idx) => (_jsxs("div", { className: "flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-700 px-4 py-3", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium text-gray-800 dark:text-gray-200", children: c.course }), _jsxs("p", { className: "text-xs text-gray-600 dark:text-gray-400", children: [c.dept, " \u2022 ", c.semester] })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { variant: "outline", className: "border-red-500 text-red-600 dark:border-red-400 dark:text-red-400", children: "Reject" }), _jsx(Button, { className: "bg-blue-600 text-white hover:bg-blue-700", children: "Approve" })] })] }, idx))) })] }) }), _jsx(Card, { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-lg", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("h3", { className: "text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3", children: "Students At Academic Risk" }), _jsx("div", { className: "space-y-2", children: riskStudents.map((s) => (_jsxs("div", { className: "flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-700 px-4 py-2", children: [_jsxs("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: [s.name, " \u2022 ", s.dept, " \u2022 ", s.semester] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("span", { className: "text-red-600 dark:text-red-400 font-semibold", children: ["GPA ", s.gpa.toFixed(2)] }), _jsx(Button, { size: "sm", variant: "outline", className: "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400", children: "Flag" })] })] }, s.id))) })] }) })] })] }) }));
}
