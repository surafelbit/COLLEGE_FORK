import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
export default function HeadReports() {
    const [semester, setSemester] = useState("I");
    const [course, setCourse] = useState("");
    const [range, setRange] = useState({ from: "2025-09-01", to: "2025-12-31" });
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("h1", { className: "text-3xl font-bold", children: "Department Reports" }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Analytics & Reports" }), _jsx(CardDescription, { children: "Generate and export performance/attendance reports" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-3", children: [_jsxs("select", { className: "border rounded px-3 py-2 bg-background", value: semester, onChange: (e) => setSemester(e.target.value), children: [_jsx("option", { value: "I", children: "Semester I" }), _jsx("option", { value: "II", children: "Semester II" })] }), _jsx(Input, { placeholder: "Filter by course code/name", value: course, onChange: (e) => setCourse(e.target.value) }), _jsx(Input, { type: "date", value: range.from, onChange: (e) => setRange((r) => ({ ...r, from: e.target.value })) }), _jsx(Input, { type: "date", value: range.to, onChange: (e) => setRange((r) => ({ ...r, to: e.target.value })) })] }), _jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Button, { children: "Generate Performance Report" }), _jsx(Button, { variant: "outline", children: "Generate Attendance Report" }), _jsx(Button, { variant: "outline", children: "Export PDF" }), _jsx(Button, { variant: "outline", children: "Export Excel" })] }), _jsx("div", { className: "border rounded p-4 text-sm text-muted-foreground", children: "Reports preview will appear here based on filters. Compare semesters by switching the semester selector above." })] })] })] }));
}
