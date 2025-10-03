import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
// Example data with added teacher field and department head
const departmentData = {
    math: {
        id: "math",
        name: "Mathematics",
        description: "All Mathematics courses for undergraduates.",
        departmentHead: "Dr. Emily Carter",
        years: [
            {
                id: "year1",
                name: "1st Year",
                semesters: [
                    {
                        id: "sem1",
                        name: "Semester 1",
                        courses: [
                            {
                                id: "c1",
                                name: "Calculus I",
                                code: "MATH101",
                                creditHours: 3,
                                prerequisites: [],
                                teacher: "Dr. John Smith",
                            },
                            {
                                id: "c2",
                                name: "Linear Algebra I",
                                code: "MATH102",
                                creditHours: 3,
                                prerequisites: [],
                                teacher: "Prof. Jane Doe",
                            },
                            {
                                id: "c3",
                                name: "Intro to Programming",
                                code: "CS101",
                                creditHours: 2,
                                prerequisites: [],
                                teacher: "Dr. Alan Turing",
                            },
                        ],
                    },
                    {
                        id: "sem2",
                        name: "Semester 2",
                        courses: [
                            {
                                id: "c4",
                                name: "Calculus II",
                                code: "MATH201",
                                creditHours: 3,
                                prerequisites: ["MATH101"],
                                teacher: "Dr. John Smith",
                            },
                            {
                                id: "c5",
                                name: "Linear Algebra II",
                                code: "MATH202",
                                creditHours: 3,
                                prerequisites: ["MATH102"],
                                teacher: "Prof. Jane Doe",
                            },
                            {
                                id: "c6",
                                name: "Probability",
                                code: "STAT101",
                                creditHours: 2,
                                prerequisites: [],
                                teacher: "Dr. Emma Brown",
                            },
                        ],
                    },
                ],
            },
            {
                id: "year2",
                name: "2nd Year",
                semesters: [
                    {
                        id: "sem3",
                        name: "Semester 3",
                        courses: [
                            {
                                id: "c7",
                                name: "Real Analysis I",
                                code: "MATH301",
                                creditHours: 3,
                                prerequisites: ["MATH201"],
                                teacher: "Prof. Michael Lee",
                            },
                            {
                                id: "c8",
                                name: "Abstract Algebra I",
                                code: "MATH302",
                                creditHours: 3,
                                prerequisites: [],
                                teacher: "Dr. Sarah Johnson",
                            },
                        ],
                    },
                ],
            },
        ],
    },
};
export default function DeanDepartmentDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dept = id ? departmentData[id] : null;
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTeacher, setSelectedTeacher] = useState("");
    const [showWithPrereqsOnly, setShowWithPrereqsOnly] = useState(false);
    if (!dept) {
        return (_jsx("div", { className: "p-10 text-center", children: _jsx("h1", { className: "text-3xl font-bold text-red-600", children: "Department Not Found" }) }));
    }
    // Collect unique teachers
    const allTeachers = [
        ...new Set(dept.years.flatMap((year) => year.semesters.flatMap((sem) => sem.courses.map((c) => c.teacher)))),
    ].sort();
    return (_jsxs("div", { className: "p-10 space-y-10", children: [_jsx("div", { children: _jsxs(Button, { className: "bg-blue-600 text-white ", onClick: () => navigate(-1), variant: "outline", size: "sm", children: [_jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }), "Back to Dashboard"] }) }), _jsxs("div", { className: "bg-blue-500 p-8 rounded-2xl shadow-lg text-white", children: [_jsx("h1", { className: "text-4xl font-bold", children: dept.name }), _jsx("p", { className: "mt-2 text-lg", children: dept.description }), _jsxs("p", { className: "mt-2 text-lg font-semibold", children: ["Department Head: ", dept.departmentHead] })] }), _jsxs("div", { className: "space-y-4 max-w-md", children: [_jsx("input", { type: "text", placeholder: "Search by course name or code...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-700" }), _jsxs("select", { value: selectedTeacher, onChange: (e) => setSelectedTeacher(e.target.value), className: "w-full border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-700", children: [_jsx("option", { value: "", children: "All Teachers" }), allTeachers.map((teacher) => (_jsx("option", { value: teacher, children: teacher }, teacher)))] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("input", { type: "checkbox", id: "prereqs-checkbox", checked: showWithPrereqsOnly, onChange: (e) => setShowWithPrereqsOnly(e.target.checked), className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" }), _jsx("label", { htmlFor: "prereqs-checkbox", className: "text-gray-800 dark:text-gray-100", children: "Show only courses with prerequisites" })] })] }), dept.years.map((year) => (_jsxs("div", { className: "space-y-6", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-800 dark:text-gray-100", children: year.name }), year.semesters.map((sem) => {
                        let filteredCourses = sem.courses.filter((c) => (c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            c.code.toLowerCase().includes(searchTerm.toLowerCase())) &&
                            (selectedTeacher === "" || c.teacher === selectedTeacher) &&
                            (!showWithPrereqsOnly || c.prerequisites.length > 0));
                        if (filteredCourses.length === 0)
                            return null;
                        return (_jsxs("div", { className: "bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 space-y-4", children: [_jsx("h3", { className: "text-2xl font-semibold text-blue-700 dark:text-blue-400", children: sem.name }), _jsxs("table", { className: "w-full border-collapse text-gray-800 dark:text-gray-200", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-gray-100 dark:bg-gray-800 text-left", children: [_jsx("th", { className: "p-3 border", children: "Course Code" }), _jsx("th", { className: "p-3 border", children: "Course Name" }), _jsx("th", { className: "p-3 border", children: "Credit Hours" }), _jsx("th", { className: "p-3 border", children: "Prerequisites" }), _jsx("th", { className: "p-3 border", children: "Teacher" })] }) }), _jsx("tbody", { children: filteredCourses.map((course) => (_jsxs("tr", { className: "hover:scale-102 hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300 ease-in-out", children: [_jsx("td", { className: "p-3 border font-mono", children: course.code }), _jsx("td", { className: "p-3 border", children: course.name }), _jsx("td", { className: "p-3 border text-center", children: course.creditHours }), _jsx("td", { className: "p-3 border", children: course.prerequisites.length > 0
                                                            ? course.prerequisites.join(", ")
                                                            : "None" }), _jsx("td", { className: "p-3 border", children: course.teacher })] }, course.id))) })] })] }, sem.id));
                    })] }, year.id)))] }));
}
