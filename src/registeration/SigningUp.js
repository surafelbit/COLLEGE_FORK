import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import apiService from "@/components/api/apiService";
import endPoints from "@/components/api/endPoints";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Loader2 } from "lucide-react";
export default function SignInPage() {
    const { t } = useTranslation(["auth", "common"]);
    const navigate = useNavigate();
    // State to capture user input
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    // Submit handler
    const handleSubmit = async () => {
        setIsLoading(true);
        const formData = {
            username: email,
            password,
        };
        try {
            const responses = await apiService.post(endPoints.login, formData, {
                headers: { requiresAuth: false },
            });
            setResponse(responses.message);
            setIsLoading(false);
            console.log(responses);
            localStorage.setItem("xy9a7b", responses.jwt);
            console.log(responses.role);
            // Navigate based on role from backend
            switch (responses.role) {
                case "REGISTRAR":
                    navigate("/registrar");
                    break;
                case "STUDENT":
                    navigate("/student");
                    break;
                case "GENERAL_MANAGER":
                    navigate("/general-manager");
                    break;
                case "DEAN":
                    navigate("/dean");
                    break;
                default:
                    console.log("Role not handled:", responses.role);
            }
        }
        catch (err) {
            setIsLoading(false);
            setError(err?.responses?.data?.error || "failed to login");
            console.log(err?.responses?.data?.error);
            console.error("Error:", err);
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex flex-col", children: [_jsxs("div", { className: "flex justify-between items-center p-4", children: [_jsxs(Link, { to: "/", className: "flex items-center text-blue-600 hover:text-blue-700", children: [_jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }), t("common:back"), " to ", t("navigation:home")] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(LanguageSwitcher, {}), _jsx(ThemeToggle, {})] })] }), _jsx("div", { className: "flex-1 flex items-center justify-center p-4", children: _jsx("div", { className: "w-full max-w-md mx-auto", children: _jsxs(Card, { className: "shadow-2xl border-0", children: [_jsxs(CardHeader, { className: "text-center", children: [_jsx("div", { className: "w-30 h-30 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center", children: _jsx("img", { src: "/assets/companylogo.jpg", className: "h-30 w-30  rounded-full object-cover" }) }), _jsx(CardTitle, { className: "text-2xl", children: t("welcomeBack") }), _jsx(CardDescription, { children: t("signInToAccount") })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "email", children: "Username" }), _jsx(Input, { id: "email", type: "text", placeholder: "Enter Your Username", value: email, onChange: (e) => setEmail(e.target.value) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "password", children: t("password") }), _jsx(Input, { id: "password", type: "password", placeholder: t("enterPassword"), value: password, onChange: (e) => setPassword(e.target.value) })] }), _jsx(Button, { onClick: () => {
                                            handleSubmit();
                                            setError(false);
                                            setResponse(false);
                                        }, disabled: isLoading, className: "w-full flex items-center justify-center gap-2", children: isLoading ? (_jsxs(_Fragment, { children: [_jsx(Loader2, { className: "w-4 h-4 animate-spin" }), _jsx("span", { children: "Signing in..." })] })) : (t("signIn")) }), response && (_jsx("div", { className: "mt-4 p-2 rounded-lg border border-green-400 bg-green-100", children: _jsx("p", { className: "text-sm text-green-700 font-medium", children: response }) })), error && (
                                    // <div className="border-red-700 p-2 bg-red-200">
                                    //   <p className="text-red-600">{JSON.stringify(error)}</p>
                                    // </div>
                                    _jsx("div", { className: "mt-4 p-2 rounded-lg border border-red-400 bg-red-100", children: _jsx("p", { className: "text-sm text-red-700 font-medium", children: error }) })), _jsx("div", { className: "text-center", children: _jsxs("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: [t("newStudent"), " ", _jsx(Link, { to: "/register", className: "text-blue-600 hover:text-blue-700 dark:text-blue-400", children: t("registerHere") })] }) })] })] }) }) })] }));
}
