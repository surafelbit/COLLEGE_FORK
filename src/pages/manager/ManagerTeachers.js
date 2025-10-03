import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
export default function ManagerTeachers() {
    const [searchQuery, setSearchQuery] = useState("");
    // Fake data: 3 departments, each with courses, each course with teachers
    const departments = [
        {
            name: "Computer Science",
            courses: [
                {
                    name: "Introduction to Programming",
                    teachers: [
                        {
                            id: 1,
                            firstName: "John",
                            lastName: "Doe",
                            email: "john.doe@example.com",
                            phone: "+251912345678",
                            address: "Addis Ababa, Ethiopia",
                            photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/...",
                            qualification: "PhD in Computer Science",
                            coursesTaught: ["Introduction to Programming", "Data Structures"],
                        },
                        {
                            id: 2,
                            firstName: "Jane",
                            lastName: "Smith",
                            email: "jane.smith@example.com",
                            phone: "+251987654321",
                            address: "Addis Ababa, Ethiopia",
                            photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/...",
                            qualification: "MSc in Software Engineering",
                            coursesTaught: ["Introduction to Programming"],
                        },
                    ],
                },
                {
                    name: "Data Structures",
                    teachers: [
                        {
                            id: 1,
                            firstName: "John",
                            lastName: "Doe",
                            email: "john.doe@example.com",
                            phone: "+251912345678",
                            address: "Addis Ababa, Ethiopia",
                            photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/...",
                            qualification: "PhD in Computer Science",
                            coursesTaught: ["Introduction to Programming", "Data Structures"],
                        },
                        {
                            id: 3,
                            firstName: "Alice",
                            lastName: "Johnson",
                            email: "alice.johnson@example.com",
                            phone: "+251923456789",
                            address: "Addis Ababa, Ethiopia",
                            photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/...",
                            qualification: "PhD in Algorithms",
                            coursesTaught: ["Data Structures", "Algorithms"],
                        },
                    ],
                },
                {
                    name: "Algorithms",
                    teachers: [
                        {
                            id: 3,
                            firstName: "Alice",
                            lastName: "Johnson",
                            email: "alice.johnson@example.com",
                            phone: "+251923456789",
                            address: "Addis Ababa, Ethiopia",
                            photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/...",
                            qualification: "PhD in Algorithms",
                            coursesTaught: ["Data Structures", "Algorithms"],
                        },
                    ],
                },
            ],
        },
        {
            name: "Mathematics",
            courses: [
                {
                    name: "Calculus I",
                    teachers: [
                        {
                            id: 4,
                            firstName: "Bob",
                            lastName: "Brown",
                            email: "bob.brown@example.com",
                            phone: "+251934567890",
                            address: "Addis Ababa, Ethiopia",
                            photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/...",
                            qualification: "PhD in Mathematics",
                            coursesTaught: ["Calculus I", "Linear Algebra"],
                        },
                    ],
                },
                {
                    name: "Linear Algebra",
                    teachers: [
                        {
                            id: 4,
                            firstName: "Bob",
                            lastName: "Brown",
                            email: "bob.brown@example.com",
                            phone: "+251934567890",
                            address: "Addis Ababa, Ethiopia",
                            photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/...",
                            qualification: "PhD in Mathematics",
                            coursesTaught: ["Calculus I", "Linear Algebra"],
                        },
                        {
                            id: 5,
                            firstName: "Carol",
                            lastName: "Davis",
                            email: "carol.davis@example.com",
                            phone: "+251945678901",
                            address: "Addis Ababa, Ethiopia",
                            photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/...",
                            qualification: "MSc in Applied Mathematics",
                            coursesTaught: ["Linear Algebra"],
                        },
                    ],
                },
            ],
        },
        {
            name: "Physics",
            courses: [
                {
                    name: "Mechanics",
                    teachers: [
                        {
                            id: 6,
                            firstName: "David",
                            lastName: "Evans",
                            email: "david.evans@example.com",
                            phone: "+251956789012",
                            address: "Addis Ababa, Ethiopia",
                            photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/...",
                            qualification: "PhD in Physics",
                            coursesTaught: ["Mechanics", "Electromagnetism"],
                        },
                    ],
                },
                {
                    name: "Electromagnetism",
                    teachers: [
                        {
                            id: 6,
                            firstName: "David",
                            lastName: "Evans",
                            email: "david.evans@example.com",
                            phone: "+251956789012",
                            address: "Addis Ababa, Ethiopia",
                            photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/...",
                            qualification: "PhD in Physics",
                            coursesTaught: ["Mechanics", "Electromagnetism"],
                        },
                        {
                            id: 7,
                            firstName: "Eve",
                            lastName: "Franklin",
                            email: "eve.franklin@example.com",
                            phone: "+251967890123",
                            address: "Addis Ababa, Ethiopia",
                            photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/...",
                            qualification: "MSc in Theoretical Physics",
                            coursesTaught: ["Electromagnetism"],
                        },
                    ],
                },
            ],
        },
    ];
    // Filter departments based on search query (search by teacher name or course)
    const filteredDepartments = departments
        .map((dept) => ({
        ...dept,
        courses: dept.courses
            .map((course) => ({
            ...course,
            teachers: course.teachers.filter((teacher) => `${teacher.firstName} ${teacher.lastName}`
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
                course.name.toLowerCase().includes(searchQuery.toLowerCase())),
        }))
            .filter((course) => course.teachers.length > 0),
    }))
        .filter((dept) => dept.courses.length > 0);
    return (_jsxs("div", { className: "space-y-6 p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-900", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-3xl font-bold text-blue-600 dark:text-gray-100", children: "Teachers List" }), _jsx("div", { className: "flex space-x-2", children: _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "search", className: "text-gray-700 dark:text-gray-300", children: "Search Teachers or Courses" }), _jsx(Input, { id: "search", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), placeholder: "Search by name or course...", className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] }) })] }), filteredDepartments.map((department, deptIndex) => (_jsxs(Card, { className: "bg-white dark:bg-gray-800 border-blue-200 dark:border-gray-700", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "text-blue-600 dark:text-gray-100", children: [department.name, " Department"] }), _jsx(CardDescription, { className: "text-gray-600 dark:text-gray-400", children: "Teachers categorized by courses" })] }), _jsx(CardContent, { className: "space-y-6", children: department.courses.map((course, courseIndex) => (_jsxs("div", { children: [_jsxs("h3", { className: "text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4", children: ["Course: ", course.name] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: course.teachers.map((teacher) => (_jsxs(Card, { className: "bg-white dark:bg-gray-800 border-blue-200 dark:border-gray-700", children: [_jsxs(CardHeader, { className: "text-center", children: [_jsx("div", { className: "relative mx-auto", children: _jsxs(Avatar, { className: "w-24 h-24", children: [_jsx(AvatarImage, { src: teacher.photo }), _jsxs(AvatarFallback, { className: "text-xl bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-gray-300", children: [teacher.firstName[0], teacher.lastName[0]] })] }) }), _jsxs(CardTitle, { className: "mt-4 text-blue-600 dark:text-gray-100", children: [teacher.firstName, " ", teacher.lastName] }), _jsx(CardDescription, { className: "text-gray-600 dark:text-gray-400", children: teacher.qualification }), _jsxs(Badge, { variant: "secondary", className: "mt-2 bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-gray-300", children: ["Teaches: ", teacher.coursesTaught.join(", ")] })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400", children: [_jsx(Mail, { className: "h-4 w-4 text-blue-600 dark:text-gray-300" }), _jsx("span", { children: teacher.email })] }), _jsxs("div", { className: "flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400", children: [_jsx(Phone, { className: "h-4 w-4 text-blue-600 dark:text-gray-300" }), _jsx("span", { children: teacher.phone })] }), _jsxs("div", { className: "flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400", children: [_jsx(MapPin, { className: "h-4 w-4 text-blue-600 dark:text-gray-300" }), _jsx("span", { children: teacher.address })] }), _jsxs("div", { className: "flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400", children: [_jsx(GraduationCap, { className: "h-4 w-4 text-blue-600 dark:text-gray-300" }), _jsxs("span", { children: ["Qualification: ", teacher.qualification] })] })] })] }, teacher.id))) }), courseIndex < department.courses.length - 1 && (_jsx(Separator, { className: "my-6 bg-blue-200 dark:bg-gray-700" }))] }, courseIndex))) })] }, deptIndex))), filteredDepartments.length === 0 && (_jsx("p", { className: "text-center text-gray-600 dark:text-gray-400", children: "No teachers found matching your search." }))] }));
}
