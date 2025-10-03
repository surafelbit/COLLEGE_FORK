"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { UserPlus, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
export default function CreateDepartmentHead() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        department: "",
        password: "",
        confirmPassword: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
    const departments = [
        "Medicine",
        "Pharmacy",
        "Radiology",
        "Nursing",
        "Dentistry",
        "Laboratory Science",
        "Public Health",
        "Health Informatics",
    ];
    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };
    const validateForm = () => {
        if (!formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.phone ||
            !formData.department ||
            !formData.password) {
            toast({
                title: "Validation Error",
                description: "All fields are required",
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
        return true;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm())
            return;
        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));
            toast({
                title: "Success",
                description: "Department Head created successfully",
            });
            // Reset form
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                department: "",
                password: "",
                confirmPassword: "",
            });
        }
        catch (error) {
            toast({
                title: "Error",
                description: "Failed to create department head",
                variant: "destructive",
            });
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Link, { to: "/dean/dashboard", children: _jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }), "Back to Dashboard"] }) }), _jsx("h1", { className: "text-3xl font-bold", children: "Create Department Head" })] }), _jsxs(Card, { className: "max-w-2xl", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(UserPlus, { className: "h-5 w-5" }), "Department Head Information"] }), _jsx(CardDescription, { children: "Create a new department head account with login credentials" })] }), _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "firstName", children: "First Name" }), _jsx(Input, { id: "firstName", value: formData.firstName, onChange: (e) => handleInputChange("firstName", e.target.value), placeholder: "Enter first name", required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "lastName", children: "Last Name" }), _jsx(Input, { id: "lastName", value: formData.lastName, onChange: (e) => handleInputChange("lastName", e.target.value), placeholder: "Enter last name", required: true })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "email", children: "Email Address" }), _jsx(Input, { id: "email", type: "email", value: formData.email, onChange: (e) => handleInputChange("email", e.target.value), placeholder: "Enter email address", required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "phone", children: "Phone Number" }), _jsx(Input, { id: "phone", type: "tel", value: formData.phone, onChange: (e) => handleInputChange("phone", e.target.value), placeholder: "Enter phone number", required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "department", children: "Department" }), _jsxs(Select, { value: formData.department, onValueChange: (value) => handleInputChange("department", value), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select department" }) }), _jsx(SelectContent, { children: departments.map((dept) => (_jsx(SelectItem, { value: dept, children: dept }, dept))) })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "password", children: "Password" }), _jsx(Input, { id: "password", type: "password", value: formData.password, onChange: (e) => handleInputChange("password", e.target.value), placeholder: "Enter password", required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "confirmPassword", children: "Confirm Password" }), _jsx(Input, { id: "confirmPassword", type: "password", value: formData.confirmPassword, onChange: (e) => handleInputChange("confirmPassword", e.target.value), placeholder: "Confirm password", required: true })] })] }), _jsxs("div", { className: "flex gap-4 pt-4", children: [_jsx(Button, { type: "submit", disabled: isLoading, className: "flex-1", children: isLoading ? "Creating..." : "Create Department Head" }), _jsx(Button, { type: "button", variant: "outline", onClick: () => setFormData({
                                                firstName: "",
                                                lastName: "",
                                                email: "",
                                                phone: "",
                                                department: "",
                                                password: "",
                                                confirmPassword: "",
                                            }), children: "Clear Form" })] })] }) })] })] }));
}
