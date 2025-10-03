"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
export function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("language", lng);
    };
    const languages = [
        { code: "en", name: "English", flag: "🇺🇸" },
        { code: "am", name: "አማርኛ", flag: "🇪🇹" },
    ];
    const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];
    return (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "ghost", size: "icon", className: "h-9 w-9", children: [_jsx(Languages, { className: "h-4 w-4" }), _jsx("span", { className: "sr-only", children: "Switch language" })] }) }), _jsx(DropdownMenuContent, { align: "end", children: languages.map((language) => (_jsxs(DropdownMenuItem, { onClick: () => changeLanguage(language.code), className: `flex items-center space-x-2 ${i18n.language === language.code ? "bg-accent" : ""}`, children: [_jsx("span", { className: "text-lg", children: language.flag }), _jsx("span", { children: language.name })] }, language.code))) })] }));
}
