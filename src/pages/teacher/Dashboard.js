import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Users, FileText, Calendar, Clock, TrendingUp, AlertCircle, CheckCircle, } from "lucide-react";
export default function TeacherDashboard() {
    const todayClasses = [
        {
            course: "Human Anatomy",
            time: "09:00 AM",
            room: "Room 101",
            students: 45,
        },
        { course: "Physiology", time: "11:00 AM", room: "Room 205", students: 38 },
        {
            course: "Medical Ethics",
            time: "02:00 PM",
            room: "Room 301",
            students: 52,
        },
    ];
    const recentAssignments = [
        {
            course: "Human Anatomy",
            title: "Skeletal System Quiz",
            dueDate: "2024-01-20",
            submitted: 42,
            total: 45,
        },
        {
            course: "Physiology",
            title: "Cardiovascular Lab Report",
            dueDate: "2024-01-18",
            submitted: 35,
            total: 38,
        },
        {
            course: "Medical Ethics",
            title: "Case Study Analysis",
            dueDate: "2024-01-22",
            submitted: 48,
            total: 52,
        },
    ];
    const pendingTasks = [
        { task: "Grade Anatomy Midterm Exams", priority: "high", count: 45 },
        { task: "Review Lab Reports", priority: "medium", count: 23 },
        { task: "Prepare Next Week's Lectures", priority: "low", count: 3 },
    ];
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-6 text-white", children: [_jsx("h1", { className: "text-2xl font-bold mb-2", children: "Welcome back, Dr. Mueller!" }), _jsx("p", { className: "text-blue-100", children: "Ready to inspire the next generation of medical professionals?" })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: "Active Courses" }), _jsx(BookOpen, { className: "h-4 w-4 text-muted-foreground" })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "text-2xl font-bold", children: "6" }), _jsx("p", { className: "text-xs text-muted-foreground", children: "Spring 2024 semester" })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: "Total Students" }), _jsx(Users, { className: "h-4 w-4 text-muted-foreground" })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "text-2xl font-bold", children: "247" }), _jsx("p", { className: "text-xs text-muted-foreground", children: "Across all courses" })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: "Pending Grades" }), _jsx(FileText, { className: "h-4 w-4 text-muted-foreground" })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "text-2xl font-bold", children: "68" }), _jsx("p", { className: "text-xs text-muted-foreground", children: "Assignments to grade" })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: "Average Rating" }), _jsx(TrendingUp, { className: "h-4 w-4 text-muted-foreground" })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "text-2xl font-bold", children: "4.8" }), _jsx("p", { className: "text-xs text-muted-foreground", children: "Student evaluations" })] })] })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center", children: [_jsx(Calendar, { className: "mr-2 h-5 w-5" }), "Today's Classes"] }), _jsx(CardDescription, { children: "Your teaching schedule for today" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: todayClasses.map((class_, index) => (_jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg", children: [_jsxs("div", { children: [_jsx("div", { className: "font-medium", children: class_.course }), _jsxs("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: [class_.room, " \u2022 ", class_.students, " students"] })] }), _jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [_jsx(Clock, { className: "mr-1 h-4 w-4" }), class_.time] })] }, index))) }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center", children: [_jsx(FileText, { className: "mr-2 h-5 w-5" }), "Recent Assignments"] }), _jsx(CardDescription, { children: "Assignment submission status" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: recentAssignments.map((assignment, index) => (_jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("div", { className: "font-medium", children: assignment.title }), _jsxs("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: [assignment.course, " \u2022 Due: ", assignment.dueDate] })] }), _jsxs(Badge, { variant: assignment.submitted === assignment.total
                                                            ? "default"
                                                            : "secondary", children: [assignment.submitted, "/", assignment.total] })] }), _jsx(Progress, { value: (assignment.submitted / assignment.total) * 100, className: "h-2" })] }, index))) }) })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Pending Tasks" }), _jsx(CardDescription, { children: "Items requiring your attention" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: pendingTasks.map((task, index) => (_jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [task.priority === "high" && (_jsx(AlertCircle, { className: "h-5 w-5 text-red-500" })), task.priority === "medium" && (_jsx(Clock, { className: "h-5 w-5 text-yellow-500" })), task.priority === "low" && (_jsx(CheckCircle, { className: "h-5 w-5 text-green-500" })), _jsxs("div", { children: [_jsx("div", { className: "font-medium", children: task.task }), _jsxs("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: [task.count, " items"] })] })] }), _jsx(Badge, { variant: task.priority === "high"
                                            ? "destructive"
                                            : task.priority === "medium"
                                                ? "secondary"
                                                : "outline", children: task.priority })] }, index))) }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Quick Actions" }), _jsx(CardDescription, { children: "Frequently used features" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [_jsxs(Button, { variant: "outline", className: "h-20 flex-col bg-transparent", children: [_jsx(FileText, { className: "h-6 w-6 mb-2" }), "Create Assignment"] }), _jsxs(Button, { variant: "outline", className: "h-20 flex-col bg-transparent", children: [_jsx(Users, { className: "h-6 w-6 mb-2" }), "View Students"] }), _jsxs(Button, { variant: "outline", className: "h-20 flex-col bg-transparent", children: [_jsx(BookOpen, { className: "h-6 w-6 mb-2" }), "Course Materials"] }), _jsxs(Button, { variant: "outline", className: "h-20 flex-col bg-transparent", children: [_jsx(Calendar, { className: "h-6 w-6 mb-2" }), "Schedule Class"] })] }) })] })] }));
}
