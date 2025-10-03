import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export default function HeadDashboard() {
    const totalStudents = 420;
    const totalTeachers = 28;
    const totalCourses = 56;
    const averageGpa = 3.2;
    const lowPerformingAlerts = 7;
    const announcements = [
        { title: "Midterm exams next week", date: "2025-10-12" },
        { title: "Syllabus update deadline", date: "2025-10-20" },
    ];
    const teacherWorkload = [
        { name: "Alemu", courses: 3 },
        { name: "Kebede", courses: 4 },
        { name: "Sara", courses: 2 },
        { name: "Mulu", courses: 5 },
    ];
    const coursePerformance = [
        { course: "BIO101", avg: 78 },
        { course: "CHE201", avg: 72 },
        { course: "PHY110", avg: 81 },
        { course: "MAT130", avg: 69 },
    ];
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("h1", { className: "text-3xl font-bold", children: "Department Head Dashboard" }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Total Students" }), _jsx(CardDescription, { children: "Enrolled in department" })] }), _jsx(CardContent, { children: _jsx("div", { className: "text-3xl font-bold", children: totalStudents }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Total Teachers" }), _jsx(CardDescription, { children: "Active faculty" })] }), _jsx(CardContent, { children: _jsx("div", { className: "text-3xl font-bold", children: totalTeachers }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Total Courses" }), _jsx(CardDescription, { children: "Current semester" })] }), _jsx(CardContent, { children: _jsx("div", { className: "text-3xl font-bold", children: totalCourses }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Avg GPA" }), _jsx(CardDescription, { children: "Across all courses" })] }), _jsx(CardContent, { children: _jsx("div", { className: "text-3xl font-bold", children: averageGpa.toFixed(2) }) })] })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", children: [_jsxs(Card, { className: "lg:col-span-2", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Alerts" }), _jsx(CardDescription, { children: "Low-performing students / pending reports" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs(Badge, { variant: "destructive", children: [lowPerformingAlerts, " Alerts"] }), _jsx("span", { className: "text-sm text-muted-foreground", children: "Review required" })] }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Announcements" }), _jsx(CardDescription, { children: "Upcoming deadlines" })] }), _jsx(CardContent, { children: _jsx("ul", { className: "space-y-2", children: announcements.map((a) => (_jsxs("li", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-sm", children: a.title }), _jsx("span", { className: "text-xs text-muted-foreground", children: a.date })] }, a.title))) }) })] })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Teacher Workload Distribution" }), _jsx(CardDescription, { children: "Courses per teacher" })] }), _jsx(CardContent, { className: "space-y-3", children: teacherWorkload.map((t) => (_jsxs("div", { className: "space-y-1", children: [_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { children: t.name }), _jsx("span", { children: t.courses })] }), _jsx("div", { className: "h-2 rounded bg-gray-200 dark:bg-gray-700", children: _jsx("div", { className: "h-2 rounded bg-blue-600", style: { width: `${(t.courses / 6) * 100}%` } }) })] }, t.name))) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Course Performance" }), _jsx(CardDescription, { children: "Average scores" })] }), _jsx(CardContent, { className: "space-y-3", children: coursePerformance.map((c) => (_jsxs("div", { className: "space-y-1", children: [_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { children: c.course }), _jsxs("span", { children: [c.avg, "%"] })] }), _jsx("div", { className: "h-2 rounded bg-gray-200 dark:bg-gray-700", children: _jsx("div", { className: "h-2 rounded bg-green-600", style: { width: `${c.avg}%` } }) })] }, c.course))) })] })] })] }));
}
