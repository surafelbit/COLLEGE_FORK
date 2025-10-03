import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, FileText, Calendar, Plus, MoreHorizontal, } from "lucide-react";
import { Link } from "react-router-dom";
export default function TeacherCourses() {
    const courses = [
        {
            id: "MED101",
            name: "Human Anatomy",
            code: "MED101",
            semester: "Spring 2024",
            students: 45,
            credits: 4,
            schedule: "Mon, Wed, Fri 9:00-10:30 AM",
            room: "Room 101",
            status: "active",
            progress: 65,
            nextClass: "2024-01-17 09:00",
            assignments: 8,
            pendingGrades: 12,
        },
        {
            id: "MED102",
            name: "Physiology",
            code: "MED102",
            semester: "Spring 2024",
            students: 38,
            credits: 3,
            schedule: "Tue, Thu 11:00-12:30 PM",
            room: "Room 205",
            status: "active",
            progress: 58,
            nextClass: "2024-01-18 11:00",
            assignments: 6,
            pendingGrades: 8,
        },
        {
            id: "MED104",
            name: "Medical Ethics",
            code: "MED104",
            semester: "Spring 2024",
            students: 52,
            credits: 2,
            schedule: "Wed 2:00-4:00 PM",
            room: "Room 301",
            status: "active",
            progress: 72,
            nextClass: "2024-01-17 14:00",
            assignments: 4,
            pendingGrades: 5,
        },
        {
            id: "MED201",
            name: "Advanced Anatomy",
            code: "MED201",
            semester: "Spring 2024",
            students: 28,
            credits: 4,
            schedule: "Mon, Wed 3:00-4:30 PM",
            room: "Lab 2",
            status: "active",
            progress: 45,
            nextClass: "2024-01-17 15:00",
            assignments: 5,
            pendingGrades: 15,
        },
        {
            id: "MED301",
            name: "Clinical Anatomy",
            code: "MED301",
            semester: "Spring 2024",
            students: 35,
            credits: 3,
            schedule: "Fri 10:00-1:00 PM",
            room: "Clinical Lab",
            status: "active",
            progress: 80,
            nextClass: "2024-01-19 10:00",
            assignments: 3,
            pendingGrades: 7,
        },
        {
            id: "MED103",
            name: "Biochemistry",
            code: "MED103",
            semester: "Fall 2023",
            students: 42,
            credits: 3,
            schedule: "Completed",
            room: "Lab 3",
            status: "completed",
            progress: 100,
            nextClass: null,
            assignments: 10,
            pendingGrades: 0,
        },
    ];
    const getStatusColor = (status) => {
        switch (status) {
            case "active":
                return "default";
            case "completed":
                return "secondary";
            case "upcoming":
                return "outline";
            default:
                return "outline";
        }
    };
    const activeCourses = courses.filter((course) => course.status === "active");
    const completedCourses = courses.filter((course) => course.status === "completed");
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("div", { className: "flex justify-between items-center", children: _jsx("h1", { className: "text-3xl font-bold", children: "My Courses" }) }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: "Active Courses" }), _jsx(BookOpen, { className: "h-4 w-4 text-muted-foreground" })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "text-2xl font-bold", children: activeCourses.length }), _jsx("p", { className: "text-xs text-muted-foreground", children: "Spring 2024" })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: "Total Students" }), _jsx(Users, { className: "h-4 w-4 text-muted-foreground" })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "text-2xl font-bold", children: activeCourses.reduce((sum, course) => sum + course.students, 0) }), _jsx("p", { className: "text-xs text-muted-foreground", children: "Enrolled students" })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: "Pending Grades" }), _jsx(FileText, { className: "h-4 w-4 text-muted-foreground" })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "text-2xl font-bold", children: activeCourses.reduce((sum, course) => sum + course.pendingGrades, 0) }), _jsx("p", { className: "text-xs text-muted-foreground", children: "Assignments to grade" })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: "Total Credits" }), _jsx(Calendar, { className: "h-4 w-4 text-muted-foreground" })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "text-2xl font-bold", children: activeCourses.reduce((sum, course) => sum + course.credits, 0) }), _jsx("p", { className: "text-xs text-muted-foreground", children: "Teaching load" })] })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h2", { className: "text-xl font-semibold", children: "Your Courses" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: activeCourses.map((course) => (_jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-lg", children: course.name }), _jsxs(CardDescription, { children: [course.code, " \u2022 ", course.semester] })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Users, { className: "mr-2 h-4 w-4 text-gray-500" }), course.students, " students"] }), _jsxs("div", { className: "flex items-center", children: [_jsx(BookOpen, { className: "mr-2 h-4 w-4 text-gray-500" }), course.credits, " credits"] })] }), _jsxs("div", { className: "flex space-x-2", children: [_jsx(Link, { to: `/teacher/students/${course.id}`, className: "flex-1", children: _jsxs(Button, { variant: "outline", size: "sm", className: "w-full bg-transparent", children: [_jsx(Users, { className: "mr-2 h-4 w-4" }), "Students"] }) }), _jsx(Link, { to: `/teacher/assessments/${course.id}`, className: "flex-1", children: _jsxs(Button, { variant: "outline", size: "sm", className: "w-full bg-transparent", children: [_jsx(FileText, { className: "mr-2 h-4 w-4" }), "Assessments"] }) })] })] })] }, course.id))) })] })] }));
}
