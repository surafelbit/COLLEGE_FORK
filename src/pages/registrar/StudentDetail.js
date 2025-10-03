import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Calendar, GraduationCap, Edit, Camera, } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function StudentProfile() {
    const location = useLocation();
    let userRole;
    if (location.pathname.includes("registrar")) {
        userRole = "registrar";
    }
    else {
        userRole = "general-manager";
    }
    const navigate = useNavigate();
    const [passwordForm, setPasswordForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        studentId: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    // const [userRole, setUserRole] = useState("registrar"); // Default to registrar
    const [editableData, setEditableData] = useState({
        firstNameAMH: "አበበ",
        firstNameENG: "Abebe",
        fatherNameAMH: "ከበደ",
        fatherNameENG: "Kebede",
        grandfatherNameAMH: "ወልደ",
        grandfatherNameENG: "Welde",
        motherNameAMH: "ልደት",
        motherNameENG: "Lidet",
        motherFatherNameAMH: "ታደሰ",
        motherFatherNameENG: "Tadesse",
        gender: "Male",
        age: 20,
        phoneNumber: "+251912345678",
        dateOfBirthEC: "15/06/2005",
        dateOfBirthGC: "1997-02-22",
        placeOfBirthWoreda: "Yeka",
        placeOfBirthZone: "Addis Ababa",
        placeOfBirthRegion: "Addis Ababa",
        currentAddressWoreda: "Bole",
        currentAddressZone: "Addis Ababa",
        currentAddressRegion: "Addis Ababa",
        email: "abebe.kebede@example.com",
        maritalStatus: "Single",
        impairment: "None",
        schoolBackground: "Public",
        contactPersonFirstNameAMH: "ሰለሞን",
        contactPersonFirstNameENG: "Solomon",
        contactPersonLastNameAMH: "ገብረ",
        contactPersonLastNameENG: "Gebre",
        contactPersonPhoneNumber: "+251987654321",
        contactPersonRelation: "Brother",
        departmentEnrolled: "Computer Science",
        programModality: "Regular",
    });
    const originalData = {
        firstNameAMH: "አበበ",
        firstNameENG: "Abebe",
        fatherNameAMH: "ከበደ",
        fatherNameENG: "Kebede",
        grandfatherNameAMH: "ወልደ",
        grandfatherNameENG: "Welde",
        motherNameAMH: "ልደት",
        motherNameENG: "Lidet",
        motherFatherNameAMH: "ታደሰ",
        motherFatherNameENG: "Tadesse",
        gender: "Male",
        age: 20,
        phoneNumber: "+251912345678",
        dateOfBirthEC: "15/06/2005",
        dateOfBirthGC: "1997-02-22",
        placeOfBirthWoreda: "Yeka",
        placeOfBirthZone: "Addis Ababa",
        placeOfBirthRegion: "Addis Ababa",
        currentAddressWoreda: "Bole",
        currentAddressZone: "Addis Ababa",
        currentAddressRegion: "Addis Ababa",
        email: "abebe.kebede@example.com",
        maritalStatus: "Single",
        impairment: "None",
        schoolBackground: "Public",
        contactPersonFirstNameAMH: "ሰለሞን",
        contactPersonFirstNameENG: "Solomon",
        contactPersonLastNameAMH: "ገብረ",
        contactPersonLastNameENG: "Gebre",
        contactPersonPhoneNumber: "+251987654321",
        contactPersonRelation: "Brother",
        departmentEnrolled: "Computer Science",
        programModality: "Regular",
    };
    const studentData = {
        ...editableData,
        studentPhoto: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIOJj4kLCIuNDIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy",
        grade12ExamResult: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIOJj4kLCIuNDIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy",
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (error)
            setError("");
    };
    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditableData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.newPassword !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        if (formData.newPassword.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }
        console.log("Password change request:", {
            ...formData,
            studentId: studentData.firstNameENG,
        });
        alert(`Password change request submitted for Student: ${studentData.firstNameENG}`);
        setFormData({ studentId: "", newPassword: "", confirmPassword: "" });
        setPasswordForm(false);
    };
    const handleSave = () => {
        console.log("Updated student data:", editableData);
        alert(`Profile updated for ${editableData.firstNameENG}`);
        setEditMode(false);
    };
    const handleCancel = () => {
        setEditableData(originalData);
        setEditMode(false);
    };
    const [openYear, setOpenYear] = useState({ index: null });
    const [openYears, setOpenYears] = useState({});
    const [openSemesters, setOpenSemesters] = useState({});
    const [selectedGradingSystem, setSelectedGradingSystem] = useState("system1");
    const initialResult = [
        {
            year: 1,
            semseters: [
                {
                    id: "1",
                    courses: [
                        {
                            name: "Mathematics",
                            result: 95,
                            grade: "A",
                            credit: 4,
                            courseId: "MATH101",
                        },
                        {
                            name: "Physics",
                            result: 88,
                            grade: "B",
                            credit: 3,
                            courseId: "PHYS101",
                        },
                        {
                            name: "Chemistry",
                            result: 78,
                            grade: "C",
                            credit: 3,
                            courseId: "CHEM101",
                        },
                        {
                            name: "English",
                            result: 62,
                            grade: "D",
                            credit: 2,
                            courseId: "ENG101",
                        },
                    ],
                },
                {
                    id: "2",
                    courses: [
                        {
                            name: "Advanced Mathematics",
                            result: 92,
                            grade: "A",
                            credit: 4,
                            courseId: "MATH102",
                        },
                        {
                            name: "Mechanics",
                            result: 85,
                            grade: "B",
                            credit: 4,
                            courseId: "PHYS102",
                        },
                        {
                            name: "Organic Chemistry",
                            result: 70,
                            grade: "C",
                            credit: 3,
                            courseId: "CHEM102",
                        },
                    ],
                },
                {
                    id: "3",
                    courses: [
                        {
                            name: "Statistics",
                            result: 99,
                            grade: "A",
                            credit: 3,
                            courseId: "STAT101",
                        },
                        {
                            name: "Electronics",
                            result: 82,
                            grade: "B",
                            credit: 4,
                            courseId: "PHYS103",
                        },
                        {
                            name: "Literature",
                            result: 55,
                            grade: "F",
                            credit: 2,
                            courseId: "ENG102",
                        },
                    ],
                },
            ],
        },
        {
            year: 2,
            semseters: [
                {
                    id: "1",
                    courses: [
                        {
                            name: "Calculus",
                            result: 90,
                            grade: "A",
                            credit: 4,
                            courseId: "MATH201",
                        },
                        {
                            name: "Quantum Physics",
                            result: 84,
                            grade: "B",
                            credit: 4,
                            courseId: "PHYS201",
                        },
                        {
                            name: "Inorganic Chemistry",
                            result: 75,
                            grade: "C",
                            credit: 3,
                            courseId: "CHEM201",
                        },
                    ],
                },
                {
                    id: "2",
                    courses: [
                        {
                            name: "Linear Algebra",
                            result: 87,
                            grade: "B",
                            credit: 4,
                            courseId: "MATH202",
                        },
                        {
                            name: "Thermodynamics",
                            result: 80,
                            grade: "B",
                            credit: 3,
                            courseId: "PHYS202",
                        },
                        {
                            name: "Writing Composition",
                            result: 68,
                            grade: "D",
                            credit: 2,
                            courseId: "ENG201",
                        },
                    ],
                },
            ],
        },
        {
            year: 3,
            semseters: [
                {
                    id: "1",
                    courses: [
                        {
                            name: "Differential Equations",
                            result: 100,
                            grade: "A",
                            credit: 5,
                            courseId: "MATH301",
                        },
                        {
                            name: "Electromagnetism",
                            result: 83,
                            grade: "B",
                            credit: 4,
                            courseId: "PHYS301",
                        },
                        {
                            name: "Biochemistry",
                            result: 72,
                            grade: "C",
                            credit: 3,
                            courseId: "CHEM301",
                        },
                        {
                            name: "Technical Writing",
                            result: 60,
                            grade: "D",
                            credit: 2,
                            courseId: "ENG301",
                        },
                    ],
                },
                {
                    id: "2",
                    courses: [
                        {
                            name: "Probability",
                            result: 97,
                            grade: "A",
                            credit: 4,
                            courseId: "MATH302",
                        },
                        {
                            name: "Optics",
                            result: 79,
                            grade: "C",
                            credit: 3,
                            courseId: "PHYS302",
                        },
                        {
                            name: "Analytical Chemistry",
                            result: 65,
                            grade: "D",
                            credit: 3,
                            courseId: "CHEM302",
                        },
                    ],
                },
            ],
        },
    ];
    const [displayedResult, setDisplayedResult] = useState(initialResult);
    const gradingSystems = {
        system1: (score) => {
            if (score >= 90)
                return "A";
            if (score >= 80)
                return "B";
            if (score >= 70)
                return "C";
            if (score >= 60)
                return "D";
            return "F";
        },
        system2: (score) => {
            if (score >= 90)
                return "A";
            if (score >= 85)
                return "A-";
            if (score >= 80)
                return "B+";
            if (score >= 75)
                return "B";
            if (score >= 70)
                return "B-";
            if (score >= 65)
                return "C";
            return "F";
        },
        system3: (score) => {
            if (score >= 85)
                return "A";
            if (score >= 75)
                return "B";
            if (score >= 65)
                return "C";
            if (score >= 60)
                return "D";
            return "F";
        },
    };
    useEffect(() => {
        const updatedResult = initialResult.map((year) => ({
            ...year,
            semseters: year.semseters.map((semester) => ({
                ...semester,
                courses: semester.courses.map((course) => ({
                    ...course,
                    grade: gradingSystems[selectedGradingSystem](course.result),
                })),
            })),
        }));
        setDisplayedResult(updatedResult);
    }, [selectedGradingSystem]);
    // Determine if the profile is editable based on userRole
    const isEditable = userRole === "registrar";
    return (_jsxs("div", { className: "space-y-6 p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-900", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-3xl font-bold text-blue-600 dark:text-gray-100", children: "Student Profile" }), _jsxs("div", { className: "flex space-x-2", children: [_jsxs(Link, { onClick: () => navigate(-1), className: "inline-flex items-center text-blue-600 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors", children: [_jsx("span", { className: "mr-2", children: "\u2190" }), _jsx("span", { children: "Back to Student List" })] }), isEditable && (_jsx(_Fragment, { children: editMode ? (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: handleSave, className: "bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white", children: "Save" }), _jsx(Button, { onClick: handleCancel, className: "bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white", children: "Cancel" })] })) : (_jsxs(Button, { onClick: () => setEditMode(true), className: "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white", children: [_jsx(Edit, { className: "mr-2 h-4 w-4" }), "Edit Profile"] })) }))] })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsxs(Card, { className: "lg:col-span-1 bg-white dark:bg-gray-800 border-blue-200 dark:border-gray-700", children: [_jsxs(CardHeader, { className: "text-center", children: [_jsxs("div", { className: "relative mx-auto", children: [_jsxs(Avatar, { className: "w-32 h-32", children: [_jsx(AvatarImage, { src: studentData.studentPhoto }), _jsxs(AvatarFallback, { className: "text-2xl bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-gray-300", children: [studentData.firstNameENG[0], studentData.fatherNameENG[0]] })] }), isEditable && (_jsx(Button, { size: "icon", variant: "secondary", className: "absolute bottom-0 right-0 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white", children: _jsx(Camera, { className: "h-4 w-4" }) }))] }), _jsxs(CardTitle, { className: "mt-4 text-blue-600 dark:text-gray-100", children: [studentData.firstNameENG, " ", studentData.fatherNameENG] }), _jsxs(CardDescription, { className: "text-gray-600 dark:text-gray-400", children: [studentData.departmentEnrolled, " Student"] }), _jsx(Badge, { variant: "secondary", className: "mt-2 bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-gray-300", children: studentData.programModality })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400", children: [_jsx(Mail, { className: "h-4 w-4 text-blue-600 dark:text-gray-300" }), _jsx("span", { children: studentData.email })] }), _jsxs("div", { className: "flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400", children: [_jsx(Phone, { className: "h-4 w-4 text-blue-600 dark:text-gray-300" }), _jsx("span", { children: studentData.phoneNumber })] }), _jsxs("div", { className: "flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400", children: [_jsx(MapPin, { className: "h-4 w-4 text-blue-600 dark:text-gray-300" }), _jsxs("span", { children: [studentData.currentAddressWoreda, ",", " ", studentData.currentAddressRegion] })] }), _jsxs("div", { className: "flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400", children: [_jsx(Calendar, { className: "h-4 w-4 text-blue-600 dark:text-gray-300" }), _jsx("span", { children: "Enrolled: September 2023" })] })] })] }), _jsxs(Card, { className: "lg:col-span-2 bg-white dark:bg-gray-800 border-blue-200 dark:border-gray-700", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-blue-600 dark:text-gray-100", children: "Personal Information" }), _jsx(CardDescription, { className: "text-gray-600 dark:text-gray-400", children: "Your personal details and contact information" })] }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "firstNameAMH", className: "text-gray-700 dark:text-gray-300", children: "First Name (Amharic)" }), _jsx(Input, { id: "firstNameAMH", name: "firstNameAMH", value: editableData.firstNameAMH, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "firstNameENG", className: "text-gray-700 dark:text-gray-300", children: "First Name (English)" }), _jsx(Input, { id: "firstNameENG", name: "firstNameENG", value: editableData.firstNameENG, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "fatherNameAMH", className: "text-gray-700 dark:text-gray-300", children: "Father's Name (Amharic)" }), _jsx(Input, { id: "fatherNameAMH", name: "fatherNameAMH", value: editableData.fatherNameAMH, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "fatherNameENG", className: "text-gray-700 dark:text-gray-300", children: "Father's Name (English)" }), _jsx(Input, { id: "fatherNameENG", name: "fatherNameENG", value: editableData.fatherNameENG, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "grandfatherNameAMH", className: "text-gray-700 dark:text-gray-300", children: "Grandfather's Name (Amharic)" }), _jsx(Input, { id: "grandfatherNameAMH", name: "grandfatherNameAMH", value: editableData.grandfatherNameAMH, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "grandfatherNameENG", className: "text-gray-700 dark:text-gray-300", children: "Grandfather's Name (English)" }), _jsx(Input, { id: "grandfatherNameENG", name: "grandfatherNameENG", value: editableData.grandfatherNameENG, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "motherNameAMH", className: "text-gray-700 dark:text-gray-300", children: "Mother's Name (Amharic)" }), _jsx(Input, { id: "motherNameAMH", name: "motherNameAMH", value: editableData.motherNameAMH, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "motherNameENG", className: "text-gray-700 dark:text-gray-300", children: "Mother's Name (English)" }), _jsx(Input, { id: "motherNameENG", name: "motherNameENG", value: editableData.motherNameENG, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "motherFatherNameAMH", className: "text-gray-700 dark:text-gray-300", children: "Mother's Father Name (Amharic)" }), _jsx(Input, { id: "motherFatherNameAMH", name: "motherFatherNameAMH", value: editableData.motherFatherNameAMH, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "motherFatherNameENG", className: "text-gray-700 dark:text-gray-300", children: "Mother's Father Name (English)" }), _jsx(Input, { id: "motherFatherNameENG", name: "motherFatherNameENG", value: editableData.motherFatherNameENG, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "dateOfBirthGC", className: "text-gray-700 dark:text-gray-300", children: "Date of Birth (GC)" }), _jsx(Input, { id: "dateOfBirthGC", name: "dateOfBirthGC", value: editableData.dateOfBirthGC, onChange: handleEditChange, type: "date", readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "gender", className: "text-gray-700 dark:text-gray-300", children: "Gender" }), _jsx(Input, { id: "gender", name: "gender", value: editableData.gender, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] })] }), _jsx(Separator, { className: "bg-blue-200 dark:bg-gray-700" }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "currentAddressWoreda", className: "text-gray-700 dark:text-gray-300", children: "Current Address (Woreda)" }), _jsx(Input, { id: "currentAddressWoreda", name: "currentAddressWoreda", value: editableData.currentAddressWoreda, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "currentAddressZone", className: "text-gray-700 dark:text-gray-300", children: "Current Address (Zone)" }), _jsx(Input, { id: "currentAddressZone", name: "currentAddressZone", value: editableData.currentAddressZone, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "currentAddressRegion", className: "text-gray-700 dark:text-gray-300", children: "Current Address (Region)" }), _jsx(Input, { id: "currentAddressRegion", name: "currentAddressRegion", value: editableData.currentAddressRegion, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "placeOfBirthWoreda", className: "text-gray-700 dark:text-gray-300", children: "Place of Birth (Woreda)" }), _jsx(Input, { id: "placeOfBirthWoreda", name: "placeOfBirthWoreda", value: editableData.placeOfBirthWoreda, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "placeOfBirthZone", className: "text-gray-700 dark:text-gray-300", children: "Place of Birth (Zone)" }), _jsx(Input, { id: "placeOfBirthZone", name: "placeOfBirthZone", value: editableData.placeOfBirthZone, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "placeOfBirthRegion", className: "text-gray-700 dark:text-gray-300", children: "Place of Birth (Region)" }), _jsx(Input, { id: "placeOfBirthRegion", name: "placeOfBirthRegion", value: editableData.placeOfBirthRegion, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] })] })] })] }), _jsxs(Card, { className: "bg-white dark:bg-gray-800 border-blue-200 dark:border-gray-700", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center text-blue-600 dark:text-gray-100", children: [_jsx(GraduationCap, { className: "mr-2 h-5 w-5" }), "Academic Information"] }), _jsx(CardDescription, { className: "text-gray-600 dark:text-gray-400", children: "Your academic details and program information" })] }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "departmentEnrolled", className: "text-gray-700 dark:text-gray-300", children: "Department Enrolled" }), _jsx(Input, { id: "departmentEnrolled", name: "departmentEnrolled", value: editableData.departmentEnrolled, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "programModality", className: "text-gray-700 dark:text-gray-300", children: "Program Modality" }), _jsx(Input, { id: "programModality", name: "programModality", value: editableData.programModality, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "schoolBackground", className: "text-gray-700 dark:text-gray-300", children: "School Background" }), _jsx(Input, { id: "schoolBackground", name: "schoolBackground", value: editableData.schoolBackground, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] })] }), _jsx(Separator, { className: "bg-blue-200 dark:bg-gray-700" }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "grade12ExamResult", className: "text-gray-700 dark:text-gray-300", children: "Document" }), _jsx("img", { src: studentData.document, alt: "Document", className: "w-64 h-36 object-cover rounded-lg border-2 border-blue-200 dark:border-gray-700" })] })] })] }), _jsxs(Card, { className: "bg-white dark:bg-gray-800 border-blue-200 dark:border-gray-700", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-blue-600 dark:text-gray-100", children: "Emergency Contact" }), _jsx(CardDescription, { className: "text-gray-600 dark:text-gray-400", children: "Emergency contact information" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "contactPersonFirstNameAMH", className: "text-gray-700 dark:text-gray-300", children: "Contact First Name (Amharic)" }), _jsx(Input, { id: "contactPersonFirstNameAMH", name: "contactPersonFirstNameAMH", value: editableData.contactPersonFirstNameAMH, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "contactPersonFirstNameENG", className: "text-gray-700 dark:text-gray-300", children: "Contact First Name (English)" }), _jsx(Input, { id: "contactPersonFirstNameENG", name: "contactPersonFirstNameENG", value: editableData.contactPersonFirstNameENG, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "contactPersonLastNameAMH", className: "text-gray-700 dark:text-gray-300", children: "Contact Last Name (Amharic)" }), _jsx(Input, { id: "contactPersonLastNameAMH", name: "contactPersonLastNameAMH", value: editableData.contactPersonLastNameAMH, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "contactPersonLastNameENG", className: "text-gray-700 dark:text-gray-300", children: "Contact Last Name (English)" }), _jsx(Input, { id: "contactPersonLastNameENG", name: "contactPersonLastNameENG", value: editableData.contactPersonLastNameENG, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "contactPersonPhoneNumber", className: "text-gray-700 dark:text-gray-300", children: "Phone Number" }), _jsx(Input, { id: "contactPersonPhoneNumber", name: "contactPersonPhoneNumber", value: editableData.contactPersonPhoneNumber, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "contactPersonRelation", className: "text-gray-700 dark:text-gray-300", children: "Relationship" }), _jsx(Input, { id: "contactPersonRelation", name: "contactPersonRelation", value: editableData.contactPersonRelation, onChange: handleEditChange, readOnly: !editMode || !isEditable, className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] })] })] })] }), isEditable && (_jsx(Button, { onClick: () => setPasswordForm(!passwordForm), className: "w-full bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white", children: passwordForm ? "Cancel" : "Change Password" })), isEditable && (_jsx(motion.div, { initial: { height: 0, opacity: 0 }, animate: {
                    height: passwordForm ? "auto" : 0,
                    opacity: passwordForm ? 1 : 0,
                }, transition: { duration: 0.3 }, className: "overflow-hidden", children: _jsxs(Card, { className: "bg-white dark:bg-gray-800 border-blue-200 dark:border-gray-700", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-blue-600 dark:text-gray-100", children: "Change Password" }), _jsx(CardDescription, { className: "text-gray-600 dark:text-gray-400", children: "Update the student's password" })] }), _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "newPassword", className: "text-gray-700 dark:text-gray-300", children: "New Password" }), _jsx(Input, { type: "password", id: "newPassword", name: "newPassword", value: formData.newPassword, onChange: handleChange, required: true, minLength: 8, placeholder: "Enter new password", className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "confirmPassword", className: "text-gray-700 dark:text-gray-300", children: "Confirm Password" }), _jsx(Input, { type: "password", id: "confirmPassword", name: "confirmPassword", value: formData.confirmPassword, onChange: handleChange, required: true, minLength: 8, placeholder: "Confirm new password", className: "border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100" })] })] }), error && (_jsx("p", { className: "text-red-500 dark:text-red-400 text-sm", children: error })), _jsx(Button, { type: "submit", className: "w-full bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white", children: "Change Password" })] }) })] }) })), _jsxs("div", { className: "max-w-7xl mx-auto p-4 sm:p-6 bg-white dark:bg-gray-800 border border-blue-200 dark:border-gray-700 rounded-lg shadow-md", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-blue-600 dark:text-gray-100", children: "Student's Academic Results" }), _jsx(CardDescription, { className: "text-gray-600 dark:text-gray-400", children: "Academic performance by year and semester" })] }), _jsxs("div", { className: "flex lg:justify-start flex-col sm:flex-row justify-center mb-6 gap-2 sm:gap-4 items-center", children: [_jsx("label", { htmlFor: "gradingSystem", className: "flex items-center text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium", children: "Grading System:" }), _jsxs("select", { id: "gradingSystem", value: selectedGradingSystem, onChange: (e) => {
                                    setSelectedGradingSystem(e.target.value);
                                }, className: "w-full max-w-[180px] sm:max-w-[200px] px-3 py-1.5 border border-blue-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-500 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 transition-colors duration-200 text-xs sm:text-sm", children: [_jsx("option", { value: "system1", children: "Grading System 1" }), _jsx("option", { value: "system2", children: "Grading System 2" }), _jsx("option", { value: "system3", children: "Grading System 3" })] })] }), displayedResult.map((ele, index) => (_jsxs("div", { className: "mb-4", children: [_jsx("button", { onClick: () => setOpenYears((prev) => ({ ...prev, [index]: !prev[index] })), className: `w-full px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-colors duration-200 flex items-center justify-between border border-blue-300 dark:border-gray-600 ${openYears[index]
                                    ? "bg-blue-500 text-white dark:bg-blue-600 dark:text-gray-100"
                                    : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-600"}`, children: _jsxs("span", { className: "flex items-center", children: [openYears[index] ? (_jsx("svg", { className: "w-4 h-4 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) })) : (_jsx("svg", { className: "w-4 h-4 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 5l7 7-7 7" }) })), "Year ", ele.year] }) }), openYears[index] && (_jsx("div", { className: "mt-3 space-y-3 pl-0 sm:pl-4", children: ele.semseters.map((e, idx) => (_jsxs("div", { className: "mb-3", children: [_jsx("button", { onClick: () => setOpenSemesters((prev) => ({
                                                ...prev,
                                                [`${index}-${idx}`]: !prev[`${index}-${idx}`],
                                            })), className: `w-full px-3 py-1.5 rounded-lg font-medium text-xs sm:text-sm transition-colors duration-200 flex items-center border border-blue-300 dark:border-gray-600 ${openSemesters[`${index}-${idx}`]
                                                ? "bg-blue-500 text-white dark:bg-blue-600 dark:text-gray-100"
                                                : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-600"}`, children: _jsxs("span", { className: "flex items-center", children: [openSemesters[`${index}-${idx}`] ? (_jsx("svg", { className: "w-3 h-3 mr-1.5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) })) : (_jsx("svg", { className: "w-3 h-3 mr-1.5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 5l7 7-7 7" }) })), "Semester ", e.id] }) }), openSemesters[`${index}-${idx}`] && (_jsx("div", { className: "overflow-x-auto mt-2", children: _jsxs("table", { className: "min-w-full bg-white dark:bg-gray-800 border border-blue-200 dark:border-gray-700 rounded-lg", children: [_jsx("thead", { className: "bg-blue-50 dark:bg-gray-700", children: _jsxs("tr", { children: [_jsx("th", { className: "px-4 sm:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider border-b border-blue-200 dark:border-gray-600 whitespace-normal break-words", children: "Subject Name" }), _jsx("th", { className: "px-4 sm:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider border-b border-blue-200 dark:border-gray-600 whitespace-normal break-words", children: "Grade" }), _jsx("th", { className: "px-4 sm:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider border-b border-blue-200 dark:border-gray-600 whitespace-normal break-words", children: "Course ID" }), _jsx("th", { className: "px-4 sm:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider border-b border-blue-200 dark:border-gray-600 whitespace-normal break-words", children: "Credit" }), _jsx("th", { className: "px-4 sm:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider border-b border-blue-200 dark:border-gray-600 whitespace-normal break-words", children: "Result" })] }) }), _jsx("tbody", { className: "divide-y divide-blue-200 dark:divide-gray-700", children: e.courses.map((course, courseIdx) => (_jsxs("tr", { className: "hover:bg-blue-50 dark:hover:bg-gray-700", children: [_jsx("td", { className: "px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 dark:text-gray-100 whitespace-normal break-words", children: course.name }), _jsx("td", { className: "px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 dark:text-gray-100 whitespace-normal break-words", children: course.grade }), _jsx("td", { className: "px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 dark:text-gray-100 whitespace-normal break-words", children: course.courseId }), _jsx("td", { className: "px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 dark:text-gray-100 whitespace-normal break-words", children: course.credit }), _jsx("td", { className: "px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 dark:text-gray-100 whitespace-normal break-words", children: course.result })] }, courseIdx))) })] }) }))] }, `${index}-${idx}`))) }))] }, ele.year)))] })] }));
}
