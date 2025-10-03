import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus } from "lucide-react";
const MOCK_TEACHERS = [
    { id: "T-100", name: "Dr. Alemu", qualification: "PhD Biology", courses: 3 },
    { id: "T-101", name: "Dr. Sara", qualification: "PhD Chemistry", courses: 4 },
    { id: "T-102", name: "Mr. Bekele", qualification: "MSc Physics", courses: 2 },
];
export default function HeadTeachers() {
    const [query, setQuery] = useState("");
    const filtered = useMemo(() => {
        return MOCK_TEACHERS.filter((t) => t.name.toLowerCase().includes(query.toLowerCase()) || t.id.toLowerCase().includes(query.toLowerCase()));
    }, [query]);
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h1", { className: "text-3xl font-bold", children: "Department Teachers" }), _jsx(Link, { to: "/head/create-teacher", children: _jsxs(Button, { className: "flex items-center gap-2", children: [_jsx(UserPlus, { className: "h-4 w-4" }), "Create Teacher"] }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Teacher Management" }), _jsx(CardDescription, { children: "Assign courses and track workload" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [_jsx(Input, { placeholder: "Search by name or ID", value: query, onChange: (e) => setQuery(e.target.value) }), _jsxs("div", { className: "md:col-span-2 flex gap-2", children: [_jsx(Button, { className: "w-full", children: "Assign Course" }), _jsx(Button, { variant: "outline", className: "w-full", children: "Export" })] })] }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full text-sm", children: [_jsx("thead", { children: _jsxs("tr", { className: "text-left border-b", children: [_jsx("th", { className: "py-2 pr-4", children: "ID" }), _jsx("th", { className: "py-2 pr-4", children: "Name" }), _jsx("th", { className: "py-2 pr-4", children: "Qualification" }), _jsx("th", { className: "py-2 pr-4", children: "Courses" }), _jsx("th", { className: "py-2 pr-4", children: "Actions" })] }) }), _jsx("tbody", { children: filtered.map((t) => (_jsxs("tr", { className: "border-b", children: [_jsx("td", { className: "py-2 pr-4", children: t.id }), _jsx("td", { className: "py-2 pr-4", children: t.name }), _jsx("td", { className: "py-2 pr-4", children: t.qualification }), _jsx("td", { className: "py-2 pr-4", children: t.courses }), _jsx("td", { className: "py-2 pr-4", children: _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { size: "sm", children: "Assign" }), _jsx(Button, { size: "sm", variant: "outline", children: "Profile" })] }) })] }, t.id))) })] }) })] })] })] }));
}
