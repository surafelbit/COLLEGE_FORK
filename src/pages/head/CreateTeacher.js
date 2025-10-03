"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { UserPlus, ArrowLeft, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
export default function CreateTeacher() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        qualification: "",
        specialization: "",
        experience: "",
        courses: [],
        password: "",
        confirmPassword: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
    const qualifications = [
        "Bachelor's Degree",
        "Master's Degree",
        "PhD",
        "MD",
        "Postgraduate Diploma",
        "Professional Certificate"
    ];
    const specializations = [
        "Internal Medicine",
        "Surgery",
        "Pediatrics",
        "Obstetrics & Gynecology",
        "Pharmacology",
        "Anatomy",
        "Physiology",
        "Pathology",
        "Microbiology",
        "Biochemistry",
        "Public Health",
        "Nursing",
        "Radiology",
        "Laboratory Science"
    ];
    const availableCourses = [
        "BIO101 - General Biology",
        "CHE201 - Organic Chemistry",
        "PHY110 - Physics I",
        "MAT130 - Calculus",
        "ANA101 - Human Anatomy",
        "PHY201 - Human Physiology",
        "PHM301 - Pharmacology",
        "MIC201 - Microbiology",
        "BCH201 - Biochemistry",
        "PAT301 - Pathology",
        "NUR101 - Fundamentals of Nursing",
        "RAD201 - Radiographic Techniques"
    ];
    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };
    const handleCourseToggle = (course) => {
        setFormData(prev => ({
            ...prev,
            courses: prev.courses.includes(course)
                ? prev.courses.filter(c => c !== course)
                : [...prev.courses, course]
        }));
    };
    const validateForm = () => {
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone ||
            !formData.qualification || !formData.specialization || !formData.experience ||
            !formData.password) {
            toast({
                title: "Validation Error",
                description: "All required fields must be filled",
                variant: "destructive",
            });
            return false;
        }
        if (formData.password !== formData.confirmPassword) {
            toast({
                title: "Password Mismatch",
                description: "Passwords do not match",
                variant: "destructive",
            });
            return false;
        }
        if (formData.password.length < 6) {
            toast({
                title: "Password Too Short",
                description: "Password must be at least 6 characters long",
                variant: "destructive",
            });
            return false;
        }
        if (formData.courses.length === 0) {
            toast({
                title: "Course Selection Required",
                description: "Please select at least one course",
                variant: "destructive",
            });
            return false;
        }
        return true;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm())
            return;
        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            toast({
                title: "Success",
                description: "Teacher created successfully",
            });
            // Reset form
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                qualification: "",
                specialization: "",
                experience: "",
                courses: [],
                password: "",
                confirmPassword: "",
            });
        }
        catch (error) {
            toast({
                title: "Error",
                description: "Failed to create teacher",
                variant: "destructive",
            });
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Link, { to: "/head/dashboard", children: _jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }), "Back to Dashboard"] }) }), _jsx("h1", { className: "text-3xl font-bold", children: "Create Teacher" })] }), _jsxs(Card, { className: "max-w-4xl", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(GraduationCap, { className: "h-5 w-5" }), "Teacher Information"] }), _jsx(CardDescription, { children: "Create a new teacher account with login credentials and course assignments" })] }), _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-lg font-semibold", children: "Personal Information" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "firstName", children: "First Name" }), _jsx(Input, { id: "firstName", value: formData.firstName, onChange: (e) => handleInputChange("firstName", e.target.value), placeholder: "Enter first name", required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "lastName", children: "Last Name" }), _jsx(Input, { id: "lastName", value: formData.lastName, onChange: (e) => handleInputChange("lastName", e.target.value), placeholder: "Enter last name", required: true })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "email", children: "Email Address" }), _jsx(Input, { id: "email", type: "email", value: formData.email, onChange: (e) => handleInputChange("email", e.target.value), placeholder: "Enter email address", required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "phone", children: "Phone Number" }), _jsx(Input, { id: "phone", type: "tel", value: formData.phone, onChange: (e) => handleInputChange("phone", e.target.value), placeholder: "Enter phone number", required: true })] })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-lg font-semibold", children: "Professional Information" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "qualification", children: "Highest Qualification" }), _jsxs(Select, { value: formData.qualification, onValueChange: (value) => handleInputChange("qualification", value), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select qualification" }) }), _jsx(SelectContent, { children: qualifications.map((qual) => (_jsx(SelectItem, { value: qual, children: qual }, qual))) })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "specialization", children: "Specialization" }), _jsxs(Select, { value: formData.specialization, onValueChange: (value) => handleInputChange("specialization", value), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select specialization" }) }), _jsx(SelectContent, { children: specializations.map((spec) => (_jsx(SelectItem, { value: spec, children: spec }, spec))) })] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "experience", children: "Years of Experience" }), _jsx(Input, { id: "experience", type: "number", min: "0", value: formData.experience, onChange: (e) => handleInputChange("experience", e.target.value), placeholder: "Enter years of experience", required: true })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-lg font-semibold", children: "Course Assignment" }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Select Courses to Teach" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2 max-h-48 overflow-y-auto border rounded-md p-4", children: availableCourses.map((course) => (_jsxs("label", { className: "flex items-center space-x-2 cursor-pointer", children: [_jsx("input", { type: "checkbox", checked: formData.courses.includes(course), onChange: () => handleCourseToggle(course), className: "rounded" }), _jsx("span", { className: "text-sm", children: course })] }, course))) }), formData.courses.length > 0 && (_jsxs("div", { className: "text-sm text-muted-foreground", children: ["Selected: ", formData.courses.length, " course(s)"] }))] })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-lg font-semibold", children: "Login Credentials" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "password", children: "Password" }), _jsx(Input, { id: "password", type: "password", value: formData.password, onChange: (e) => handleInputChange("password", e.target.value), placeholder: "Enter password", required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "confirmPassword", children: "Confirm Password" }), _jsx(Input, { id: "confirmPassword", type: "password", value: formData.confirmPassword, onChange: (e) => handleInputChange("confirmPassword", e.target.value), placeholder: "Confirm password", required: true })] })] })] }), _jsxs("div", { className: "flex gap-4 pt-4", children: [_jsx(Button, { type: "submit", disabled: isLoading, className: "flex-1", children: isLoading ? "Creating..." : "Create Teacher" }), _jsx(Button, { type: "button", variant: "outline", onClick: () => setFormData({
                                                firstName: "",
                                                lastName: "",
                                                email: "",
                                                phone: "",
                                                qualification: "",
                                                specialization: "",
                                                experience: "",
                                                courses: [],
                                                password: "",
                                                confirmPassword: "",
                                            }), children: "Clear Form" })] })] }) })] })] }));
}
