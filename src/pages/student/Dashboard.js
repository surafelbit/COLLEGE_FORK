"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Calendar, Clock, DollarSign, GraduationCap, TrendingUp, AlertCircle, CheckCircle, } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { studentApi } from "@/lib/api";
export default function StudentDashboard() {
    const { t } = useTranslation(["student", "common"]);
    const [student, setStudent] = useState(null);
    const [courses, setCourses] = useState([]);
    const [payments, setPayments] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadData = async () => {
            try {
                const [studentResponse, coursesResponse, paymentsResponse] = await Promise.all([
                    studentApi.getProfile(),
                    studentApi.getCourses(),
                    studentApi.getPayments(),
                ]);
                if (studentResponse.success)
                    setStudent(studentResponse.data);
                if (coursesResponse.success)
                    setCourses(coursesResponse.data);
                if (paymentsResponse.success)
                    setPayments(paymentsResponse.data);
            }
            catch (error) {
                console.error("Error loading dashboard data:", error);
            }
            finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);
    const upcomingClasses = [
        { subject: "Human Anatomy", time: "09:00 AM", room: "Room 101", professor: "Dr. Mueller" },
        { subject: "Physiology", time: "11:00 AM", room: "Room 205", professor: "Dr. Schmidt" },
        { subject: "Biochemistry", time: "02:00 PM", room: "Lab 3", professor: "Dr. Weber" },
    ];
    const recentGrades = [
        { subject: "Anatomy", grade: "A-", points: "1.3", date: "2024-01-15" },
        { subject: "Physiology", grade: "B+", points: "1.7", date: "2024-01-12" },
        { subject: "Chemistry", grade: "A", points: "1.0", date: "2024-01-10" },
    ];
    const announcements = [
        { title: "Midterm Exam Schedule Released", date: "2024-01-16", type: "exam" },
        { title: "Library Hours Extended", date: "2024-01-15", type: "info" },
        { title: "Payment Reminder: Spring Semester", date: "2024-01-14", type: "payment" },
    ];
    if (loading) {
        return (_jsx("div", { className: "flex items-center justify-center h-64", children: _jsx("div", { className: "text-lg", children: t("common:loading") }) }));
    }
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-6 text-white", children: [_jsx("h1", { className: "text-2xl font-bold mb-2", children: t("dashboard.welcome", { name: student?.firstName || "Student" }) }), _jsx("p", { className: "text-blue-100", children: t("dashboard.subtitle") })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: t("dashboard.currentGPA") }), _jsx(TrendingUp, { className: "h-4 w-4 text-muted-foreground" })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "text-2xl font-bold", children: student?.gpa || "0.0" }), _jsx("p", { className: "text-xs text-muted-foreground", children: "+0.1 from last semester" })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: t("dashboard.creditsEarned") }), _jsx(GraduationCap, { className: "h-4 w-4 text-muted-foreground" })] }), _jsxs(CardContent, { children: [_jsxs("div", { className: "text-2xl font-bold", children: [student?.totalCredits || 0, "/180"] }), _jsxs("p", { className: "text-xs text-muted-foreground", children: [student?.completionRate || 0, "% complete"] })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: t("dashboard.currentCourses") }), _jsx(BookOpen, { className: "h-4 w-4 text-muted-foreground" })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "text-2xl font-bold", children: courses.filter((c) => c.status === "active").length }), _jsx("p", { className: "text-xs text-muted-foreground", children: "Spring 2024 semester" })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: t("dashboard.outstandingBalance") }), _jsx(DollarSign, { className: "h-4 w-4 text-muted-foreground" })] }), _jsxs(CardContent, { children: [_jsxs("div", { className: "text-2xl font-bold", children: ["\u20AC", payments?.currentBalance.total.toLocaleString() || "0"] }), _jsx("p", { className: "text-xs text-muted-foreground", children: "Due: March 15, 2024" })] })] })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center", children: [_jsx(Calendar, { className: "mr-2 h-5 w-5" }), t("dashboard.todaysSchedule")] }), _jsx(CardDescription, { children: "Your classes for today" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: upcomingClasses.map((class_, index) => (_jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg", children: [_jsxs("div", { children: [_jsx("div", { className: "font-medium", children: class_.subject }), _jsxs("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: [class_.professor, " \u2022 ", class_.room] })] }), _jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [_jsx(Clock, { className: "mr-1 h-4 w-4" }), class_.time] })] }, index))) }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center", children: [_jsx(BookOpen, { className: "mr-2 h-5 w-5" }), t("dashboard.recentGrades")] }), _jsx(CardDescription, { children: "Your latest academic performance" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: recentGrades.map((grade, index) => (_jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg", children: [_jsxs("div", { children: [_jsx("div", { className: "font-medium", children: grade.subject }), _jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: grade.date })] }), _jsxs("div", { className: "text-right", children: [_jsx(Badge, { variant: grade.grade.startsWith("A") ? "default" : "secondary", children: grade.grade }), _jsx("div", { className: "text-sm text-gray-500 mt-1", children: grade.points })] })] }, index))) }) })] })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: t("dashboard.academicProgress") }), _jsx(CardDescription, { children: "Your journey through medical school" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex justify-between text-sm mb-2", children: [_jsx("span", { children: t("dashboard.overallCompletion") }), _jsxs("span", { children: [student?.completionRate || 0, "%"] })] }), _jsx(Progress, { value: student?.completionRate || 0, className: "h-2" })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex justify-between text-sm mb-2", children: [_jsx("span", { children: t("dashboard.currentSemester") }), _jsx("span", { children: "60%" })] }), _jsx(Progress, { value: 60, className: "h-2" })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex justify-between text-sm mb-2", children: [_jsx("span", { children: t("dashboard.clinicalRotations") }), _jsx("span", { children: "0%" })] }), _jsx(Progress, { value: 0, className: "h-2" })] })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: t("dashboard.recentAnnouncements") }), _jsx(CardDescription, { children: "Important updates and notices" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: announcements.map((announcement, index) => (_jsxs("div", { className: "flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg", children: [_jsxs("div", { className: "flex-shrink-0", children: [announcement.type === "exam" && _jsx(AlertCircle, { className: "h-5 w-5 text-orange-500" }), announcement.type === "info" && _jsx(CheckCircle, { className: "h-5 w-5 text-blue-500" }), announcement.type === "payment" && _jsx(DollarSign, { className: "h-5 w-5 text-red-500" })] }), _jsxs("div", { className: "flex-1", children: [_jsx("div", { className: "font-medium", children: announcement.title }), _jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: announcement.date })] })] }, index))) }) })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: t("dashboard.quickActions") }), _jsx(CardDescription, { children: "Frequently used features" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [_jsxs(Button, { variant: "outline", className: "h-20 flex-col bg-transparent", children: [_jsx(BookOpen, { className: "h-6 w-6 mb-2" }), t("dashboard.viewGrades")] }), _jsxs(Button, { variant: "outline", className: "h-20 flex-col bg-transparent", children: [_jsx(Calendar, { className: "h-6 w-6 mb-2" }), t("dashboard.classSchedule")] }), _jsxs(Button, { variant: "outline", className: "h-20 flex-col bg-transparent", children: [_jsx(DollarSign, { className: "h-6 w-6 mb-2" }), t("dashboard.makePayment")] }), _jsxs(Button, { variant: "outline", className: "h-20 flex-col bg-transparent", children: [_jsx(GraduationCap, { className: "h-6 w-6 mb-2" }), t("dashboard.courseCatalog")] })] }) })] })] }));
}
