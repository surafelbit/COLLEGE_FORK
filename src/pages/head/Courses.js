import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";
const MOCK_COURSES = [
    { code: "BIO101", name: "Intro to Biology", teacher: "Dr. Alemu", semester: "I", avg: 78 },
    { code: "CHE201", name: "Organic Chemistry", teacher: "Dr. Sara", semester: "II", avg: 72 },
    { code: "PHY110", name: "Mechanics", teacher: "Mr. Bekele", semester: "I", avg: 81 },
];
export default function HeadCourses() {
    const [query, setQuery] = useState("");
    const filtered = useMemo(() => {
        return MOCK_COURSES.filter((c) => [c.code, c.name, c.teacher, c.semester].some((v) => v.toLowerCase().includes(query.toLowerCase())));
    }, [query]);
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("h1", { className: "text-3xl font-bold", children: "Department Courses" }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Course Management" }), _jsx(CardDescription, { children: "Assign teachers and track performance" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [_jsx(Input, { placeholder: "Search courses", value: query, onChange: (e) => setQuery(e.target.value) }), _jsxs("div", { className: "md:col-span-2 flex gap-2", children: [_jsx(Button, { className: "w-full", children: "Add Course" }), _jsx(Button, { variant: "outline", className: "w-full", children: "Assign Teacher" })] })] }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full text-sm", children: [_jsx("thead", { children: _jsxs("tr", { className: "text-left border-b", children: [_jsx("th", { className: "py-2 pr-4", children: "Code" }), _jsx("th", { className: "py-2 pr-4", children: "Name" }), _jsx("th", { className: "py-2 pr-4", children: "Assigned Teacher" }), _jsx("th", { className: "py-2 pr-4", children: "Semester" }), _jsx("th", { className: "py-2 pr-4", children: "Avg Score" }), _jsx("th", { className: "py-2 pr-4", children: "Actions" })] }) }), _jsx("tbody", { children: filtered.map((c) => (_jsxs("tr", { className: "border-b", children: [_jsx("td", { className: "py-2 pr-4", children: c.code }), _jsx("td", { className: "py-2 pr-4", children: c.name }), _jsx("td", { className: "py-2 pr-4", children: c.teacher }), _jsx("td", { className: "py-2 pr-4", children: c.semester }), _jsxs("td", { className: "py-2 pr-4", children: [c.avg, "%"] }), _jsx("td", { className: "py-2 pr-4", children: _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { size: "sm", children: "Edit" }), _jsx(Button, { size: "sm", variant: "outline", children: "Performance" })] }) })] }, c.code))) })] }) })] })] })] }));
}
