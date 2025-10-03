import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";
const MOCK_STUDENTS = [
    { id: "S-0001", name: "Abebe Bekele", year: "Year 1", gpa: 3.6, attendance: 93 },
    { id: "S-0002", name: "Hanna G.", year: "Year 2", gpa: 2.7, attendance: 84 },
    { id: "S-0003", name: "Kebede T.", year: "Year 3", gpa: 3.1, attendance: 91 },
    { id: "S-0004", name: "Sara M.", year: "Year 4", gpa: 3.9, attendance: 96 },
];
export default function HeadStudents() {
    const [query, setQuery] = useState("");
    const [year, setYear] = useState("All");
    const filtered = useMemo(() => {
        return MOCK_STUDENTS.filter((s) => {
            const matchesQuery = s.name.toLowerCase().includes(query.toLowerCase()) || s.id.toLowerCase().includes(query.toLowerCase());
            const matchesYear = year === "All" ? true : s.year === year;
            return matchesQuery && matchesYear;
        });
    }, [query, year]);
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("h1", { className: "text-3xl font-bold", children: "Department Students" }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Student Management" }), _jsx(CardDescription, { children: "Search, filter, and view student profiles" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [_jsx(Input, { placeholder: "Search by name or ID", value: query, onChange: (e) => setQuery(e.target.value) }), _jsxs("select", { className: "border rounded px-3 py-2 bg-background", value: year, onChange: (e) => setYear(e.target.value), children: [_jsx("option", { children: "All" }), _jsx("option", { children: "Year 1" }), _jsx("option", { children: "Year 2" }), _jsx("option", { children: "Year 3" }), _jsx("option", { children: "Year 4" })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { className: "w-full", children: "Export" }), _jsx(Button, { variant: "outline", className: "w-full", children: "Attendance" })] })] }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full text-sm", children: [_jsx("thead", { children: _jsxs("tr", { className: "text-left border-b", children: [_jsx("th", { className: "py-2 pr-4", children: "ID" }), _jsx("th", { className: "py-2 pr-4", children: "Name" }), _jsx("th", { className: "py-2 pr-4", children: "Year" }), _jsx("th", { className: "py-2 pr-4", children: "GPA" }), _jsx("th", { className: "py-2 pr-4", children: "Attendance" }), _jsx("th", { className: "py-2 pr-4", children: "Actions" })] }) }), _jsx("tbody", { children: filtered.map((s) => (_jsxs("tr", { className: "border-b", children: [_jsx("td", { className: "py-2 pr-4", children: s.id }), _jsx("td", { className: "py-2 pr-4", children: s.name }), _jsx("td", { className: "py-2 pr-4", children: s.year }), _jsx("td", { className: "py-2 pr-4", children: s.gpa.toFixed(2) }), _jsxs("td", { className: "py-2 pr-4", children: [s.attendance, "%"] }), _jsx("td", { className: "py-2 pr-4", children: _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { size: "sm", variant: "outline", children: "Profile" }), _jsx(Button, { size: "sm", children: "Approve" })] }) })] }, s.id))) })] }) })] })] })] }));
}
