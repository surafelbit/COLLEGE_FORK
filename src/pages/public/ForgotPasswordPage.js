import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";
export default function ForgotPasswordPage() {
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4", children: _jsxs("div", { className: "w-full max-w-md", children: [_jsxs("div", { className: "flex justify-between items-center mb-8", children: [_jsxs(Link, { to: "/login", className: "flex items-center text-blue-600 hover:text-blue-700", children: [_jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }), "Back to Login"] }), _jsx(ThemeToggle, {})] }), _jsxs(Card, { children: [_jsxs(CardHeader, { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center", children: _jsx(Mail, { className: "h-8 w-8 text-white" }) }), _jsx(CardTitle, { className: "text-2xl", children: "Reset Password" }), _jsx(CardDescription, { children: "Enter your email address and we'll send you a link to reset your password" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "email", children: "Email Address" }), _jsx(Input, { id: "email", type: "email", placeholder: "your.email@dhfm-college.de" })] }), _jsx(Button, { className: "w-full", children: "Send Reset Link" }), _jsx("div", { className: "text-center space-y-2", children: _jsxs("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: ["Remember your password?", " ", _jsx(Link, { to: "/login", className: "text-blue-600 hover:text-blue-700 dark:text-blue-400", children: "Sign in here" })] }) })] })] })] }) }));
}
