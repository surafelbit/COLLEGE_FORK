import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon, X, User } from "lucide-react";
import LightRays from "@/designs/LightRays";
import { useTranslation } from "react-i18next";
import Select, { components } from "react-select";
import { Combobox } from "@headlessui/react";
import useApi from "../hooks/useApi";
import endPoints from "@/components/api/endPoints";
import DarkVeil from "../designs/DarkVeil";
import apiService from "@/components/api/apiService";
import { toast } from "@/hooks/use-toast";
const DropdownIndicator = (props) => (_jsx(components.DropdownIndicator, { ...props, children: _jsx("svg", { className: "w-4 h-4 text-gray-500 dark:text-gray-300", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }) }));
const PersonalInformationStep = ({ formData, setFormData, dropdowns, fetchZonesByRegion, fetchWoredasByZone, }) => {
    const countries = [
        { value: "US", label: "United States" },
        { value: "CA", label: "Canada" },
        { value: "GB", label: "United Kingdom" },
        { value: "DE", label: "Germany" },
        { value: "FR", label: "France" },
        { value: "JP", label: "Japan" },
        { value: "CN", label: "China" },
        { value: "IN", label: "India" },
        { value: "BR", label: "Brazil" },
        { value: "ZA", label: "South Africa" },
        { value: "ET", label: "Ethiopia" },
        { value: "KE", label: "Kenya" },
        { value: "NG", label: "Nigeria" },
        { value: "AU", label: "Australia" },
        { value: "RU", label: "Russia" },
    ];
    const [previews, setPreviews] = useState("https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg");
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    // Cascading dropdown handlers
    const handleRegionChange = async (e) => {
        const { value } = e.target;
        setFormData((prev) => ({
            ...prev,
            placeOfBirthRegionCode: value,
            placeOfBirthZoneCode: "",
            placeOfBirthWoredaCode: "",
        }));
        if (value) {
            await fetchZonesByRegion(value, "birth");
        }
    };
    const handleZoneChange = async (e) => {
        const { value } = e.target;
        setFormData((prev) => ({
            ...prev,
            placeOfBirthZoneCode: value,
            placeOfBirthWoredaCode: "",
        }));
        if (value) {
            await fetchWoredasByZone(value, "birth");
        }
    };
    const handleCurrentRegionChange = async (e) => {
        const { value } = e.target;
        setFormData((prev) => ({
            ...prev,
            currentAddressRegionCode: value,
            currentAddressZoneCode: "",
            currentAddressWoredaCode: "",
        }));
        if (value) {
            await fetchZonesByRegion(value, "current");
        }
    };
    const handleCurrentZoneChange = async (e) => {
        const { value } = e.target;
        setFormData((prev) => ({
            ...prev,
            currentAddressZoneCode: value,
            currentAddressWoredaCode: "",
        }));
        if (value) {
            await fetchWoredasByZone(value, "current");
        }
    };
    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setPreviews(imageURL);
            const img = new Image();
            img.src = imageURL;
            img.onload = () => URL.revokeObjectURL(imageURL);
        }
    }
    const [selected, setSelected] = useState(null);
    const [query, setQuery] = useState("");
    const filtered = query === ""
        ? countries
        : countries.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));
    return (_jsxs("div", { className: "space-y-6 ", children: [_jsxs("div", { className: "text-center mb-6", children: [_jsx("h2", { className: "text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 ", children: "Personal Information" }), _jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Please provide your basic personal details and contact information." })] }), _jsxs("section", { className: "border-2 border-gray-200 rounded-lg p-6", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-800 dark:text-white mb-4", children: "1. PERSONAL DATA" }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-white mb-2", children: "Full Name (English): *" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-white mb-1", children: "First Name *" }), _jsx("input", { type: "text", name: "firstName", value: formData.firstName, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-white mb-1", children: "Middle Name *" }), _jsx("input", { type: "text", name: "middleName", value: formData.middleName, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-white mb-1", children: "Last Name *" }), _jsx("input", { type: "text", name: "lastName", value: formData.lastName, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] })] }), _jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-white mb-2", children: "Full Name (Amharic): *" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-white mb-1", children: "First Name *" }), _jsx("input", { type: "text", name: "firstNameAMH", value: formData.firstNameAMH, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-200 mb-1", children: "Middle Name *" }), _jsx("input", { type: "text", name: "middleNameAMH", value: formData.middleNameAMH, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-200 mb-1", children: "Last Name *" }), _jsx("input", { type: "text", name: "lastNameAMH", value: formData.lastNameAMH, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-white mb-2", children: "Sex: *" }), _jsx("div", { className: "flex gap-4", children: ["Male", "Female"].map((gender) => (_jsxs("label", { className: "flex items-center", children: [_jsx("input", { type: "radio", name: "sex", value: gender, checked: formData.sex === gender, onChange: handleInputChange, className: "mr-2" }), gender] }, gender))) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-white mb-2", children: "Age: *" }), _jsx("input", { type: "number", name: "age", min: "16", value: formData.age, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-white mb-2", children: "Information about Impairment (if any): (Optional)" }), _jsxs("select", { name: "impairmentCode", value: formData.impairmentCode, onChange: handleInputChange, className: "w-full bg-white dark:bg-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", children: [_jsx("option", { value: "", children: "Select Impairment" }), dropdowns.impairments.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value)))] })] }), _jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-white mb-2", children: "Student Photo (Optional)" }), _jsx("section", { className: "border-2 border-blue-200 rounded-lg p-6 bg-white dark:bg-gray-800 dark:border-gray-700", children: _jsxs("div", { className: "border-t-2 border-blue-400 dark:border-gray-600 pt-4 flex flex-col items-center", children: [_jsx("img", { src: previews || "/default-avatar.png", alt: "Student Photo", className: "w-24 h-24 rounded-full mb-4 border-2 border-blue-300 dark:border-gray-500 object-cover" }), _jsx("h3", { className: "text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2 text-center", children: "Please upload your student photo" }), _jsx("p", { className: "text-sm font-medium text-gray-600 dark:text-gray-300 mb-4 text-center", children: "Upload a clear portrait image (JPG or PNG)" }), _jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-3 w-full justify-center", children: [_jsx("input", { id: "upload-studentphoto", type: "file", accept: "image/*", onChange: (e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        studentPhoto: file,
                                                        prevPhoto: URL.createObjectURL(file),
                                                    }));
                                                }
                                            }, className: "hidden" }), _jsxs("label", { htmlFor: "upload-studentphoto", className: "flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow cursor-pointer hover:from-blue-700 hover:to-blue-800 transition", children: [_jsx(ImageIcon, { className: "w-5 h-5" }), _jsx("span", { children: "Upload Student Photo" })] }), _jsx("span", { className: "text-gray-600 dark:text-gray-300 text-sm mt-2 sm:mt-0", children: formData.studentPhoto
                                                ? formData.studentPhoto.name
                                                : "No file chosen" })] }), formData.studentPhoto &&
                                    formData.studentPhoto instanceof File &&
                                    formData.studentPhoto.type.startsWith("image/") && (_jsxs("div", { className: "mt-4 relative inline-block", children: [_jsx("img", { src: URL.createObjectURL(formData.studentPhoto), alt: "Certificate Preview", className: "w-32 h-32 object-cover rounded-md border border-gray-300 dark:border-gray-600" }), _jsx("button", { type: "button", onClick: () => {
                                                setPreviews("https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg");
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    studentPhoto: null,
                                                }));
                                            }, className: "absolute top-1 right-1 bg-black/60 text-white rounded-full p-1 hover:bg-black/80 dark:hover:bg-black/90", children: _jsx(X, { className: "w-4 h-4" }) })] }))] }) }), _jsx("div", { className: "mb-6", children: _jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-white mb-2", children: "Place of Birth:" }) }), _jsxs("div", { className: "flex justify-between", children: [_jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-semibold text-gray-800 dark:text-white mb-2", children: "Select Your Region" }), _jsxs("div", { className: "relative", children: [_jsxs("select", { name: "placeOfBirthRegionCode", value: formData.placeOfBirthRegionCode, onChange: handleRegionChange, className: "appearance-none w-full bg-white dark:bg-black border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-800 dark:text-white font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition", children: [_jsx("option", { value: "", children: "Choose Region" }), dropdowns.regions.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value)))] }), _jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-200", children: _jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }) })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-semibold text-gray-800 dark:text-white mb-2", children: "Select Your Zone" }), _jsxs("div", { className: "relative", children: [_jsxs("select", { name: "placeOfBirthZoneCode", value: formData.placeOfBirthZoneCode, onChange: handleZoneChange, disabled: !formData.placeOfBirthRegionCode, className: "appearance-none w-full bg-white dark:bg-black border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-800 dark:text-white font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition disabled:opacity-50", children: [_jsx("option", { value: "", children: "Choose Zone" }), dropdowns.birthZones.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value)))] }), _jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-200", children: _jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }) })] })] }), _jsxs("div", { className: "mb-6", children: [_jsxs("label", { className: "block text-sm font-semibold text-gray-800 dark:text-white mb-2", children: ["Select Your Woreda", " (Town)"] }), _jsxs("div", { className: "relative", children: [_jsxs("select", { name: "placeOfBirthWoredaCode", value: formData.placeOfBirthWoredaCode, onChange: handleInputChange, disabled: !formData.placeOfBirthZoneCode, className: "appearance-none w-full bg-white dark:bg-black border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-800 dark:text-white font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition disabled:opacity-50", children: [_jsx("option", { value: "", children: "Choose Woreda" }), dropdowns.birthWoredas.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value)))] }), _jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-200", children: _jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }) })] })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-white mb-2", children: "Date of Birth:" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "Ethiopian Calendar (E.C)" }), _jsxs("div", { className: "grid grid-cols-3 gap-4", children: [_jsx("input", { type: "text", name: "birthDateEC", placeholder: "Date", value: formData.birthDateEC, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" }), _jsx("input", { type: "text", name: "birthMonthEC", placeholder: "Month", value: formData.birthMonthEC, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" }), _jsx("input", { type: "text", name: "birthYearEC", placeholder: "Year", value: formData.birthYearEC, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "Gregorian Calendar (G.C) *" }), _jsx("input", { type: "date", name: "birthDateGC", value: formData.birthDateGC, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-white mb-2", children: "Current Residential Address:" }), _jsxs("div", { className: "flex justify-between", children: [_jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-semibold text-gray-800 dark:text-white mb-2", children: "Select Your Region" }), _jsxs("div", { className: "relative", children: [_jsxs("select", { name: "currentAddressRegionCode", value: formData.currentAddressRegionCode, onChange: handleCurrentRegionChange, className: "appearance-none w-full bg-white dark:bg-black border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-800 dark:text-white font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition", children: [_jsx("option", { value: "", children: "Choose Region" }), dropdowns.regions.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value)))] }), _jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-200", children: _jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }) })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-semibold text-gray-800 dark:text-white mb-2", children: "Select Your Zone" }), _jsxs("div", { className: "relative", children: [_jsxs("select", { name: "currentAddressZoneCode", value: formData.currentAddressZoneCode, onChange: handleCurrentZoneChange, disabled: !formData.currentAddressRegionCode, className: "appearance-none w-full bg-white dark:bg-black border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-800 dark:text-white font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition disabled:opacity-50", children: [_jsx("option", { value: "", children: "Choose Zone" }), dropdowns.currentZones.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value)))] }), _jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-200", children: _jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }) })] })] }), _jsxs("div", { className: "mb-6", children: [_jsxs("label", { className: "block text-sm font-semibold text-gray-800 dark:text-white mb-2", children: ["Select Your Woreda", " (Town)"] }), _jsxs("div", { className: "relative", children: [_jsxs("select", { name: "currentAddressWoredaCode", value: formData.currentAddressWoredaCode, onChange: handleInputChange, disabled: !formData.currentAddressZoneCode, className: "appearance-none w-full bg-white dark:bg-black border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-800 dark:text-white font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition disabled:opacity-50", children: [_jsx("option", { value: "", children: "Choose Woreda" }), dropdowns.currentWoredas.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value)))] }), _jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-200", children: _jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }) })] })] })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-white mb-2", children: "Marital Status:" }), _jsx("div", { className: "flex flex-wrap gap-4", children: ["Single", "Married", "Divorced", "Separated"].map((status) => (_jsxs("label", { className: "flex items-center", children: [_jsx("input", { type: "radio", name: "maritalStatus", value: status, checked: formData.maritalStatus === status, onChange: handleInputChange, className: "mr-2" }), status] }, status))) })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-white mb-2", children: "Contact Person in case of Emergency: (Optional)" }), _jsx("div", { className: "space-y-4", children: _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-white mb-2", children: "Full Name (English):" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "First Name" }), _jsx("input", { type: "text", name: "emergencyfirstName", value: formData.emergencyfirstName, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "Last Name" }), _jsx("input", { type: "text", name: "emergencylastName", value: formData.emergencylastName, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] })] }), _jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-white mb-2", children: "Full Name (Amharic):" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "First Name" }), _jsx("input", { type: "text", name: "emergencyfirstNameAMH", value: formData.emergencyfirstNameAMH, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "Last Name" }), _jsx("input", { type: "text", name: "emergencylastNameAMH", value: formData.emergencylastNameAMH, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] })] }), _jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-white mb-2", children: "Contact Person Information" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "Contact Person Relation" }), _jsx("input", { type: "text", name: "contactPersonRelation", value: formData.contactPersonRelation, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "Contact Person Phone Number" }), _jsx("input", { type: "text", name: "contactPersonPhoneNumber", value: formData.contactPersonPhoneNumber, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] })] })] }) })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-white mb-2", children: "User Contact Information:" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "Email address" }), _jsx("input", { type: "email", name: "email", value: formData.email, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "Phone No." }), _jsx("input", { type: "tel", name: "phoneNo", value: formData.phoneNo, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] })] })] })] })] }));
};
const FamilyBackgroundStep = ({ formData, setFormData }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "text-center mb-6", children: [_jsx("h2", { className: "text-xl font-semibold text-gray-800 dark:text-white mb-2", children: "Family Background" }), _jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Please provide information about your parents." })] }), _jsxs("section", { className: "border-2 border-gray-200 rounded-lg p-6", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-800 dark:text-white mb-4", children: "3. FAMILY BACKGROUND" }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-white mb-2", children: "Mothers Full Name (English): *" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "First Name *" }), _jsx("input", { type: "text", name: "motherFirstName", value: formData.motherFirstName, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "Last Name *" }), _jsx("input", { type: "text", name: "motherLastName", value: formData.motherLastName, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] })] }), _jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-white mb-2", children: "Mothers Full Name (AMH): *" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "First Name *" }), _jsx("input", { type: "text", name: "motherFirstNameAMH", value: formData.motherFirstNameAMH, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "Last Name *" }), _jsx("input", { type: "text", name: "motherLastNameAMH", value: formData.motherLastNameAMH, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] })] })] })] })] }));
};
const EducationalInformationStep = ({ formData, setFormData, dropdowns }) => {
    const [showInstructions, setShowInstructions] = useState(false);
    const [previews, setPreviews] = useState("https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg");
    // Instruction mapping based on school background
    const getInstructions = (schoolBackgroundId) => {
        const instructions = {
            "1": {
                // High School Graduate
                title: "High School Graduate Certificate Requirements",
                content: [
                    "• 8th Grade Certificate",
                    "• Grade 9-12 Transcript",
                    "• 12th Grade National Exam Certificate",
                    "• If you have multiple certificates, please combine them into a single PDF file before uploading",
                ],
            },
            "2": {
                // College Diploma
                title: "College Diploma Certificate Requirements",
                content: [
                    "• Grade 12 Certificate",
                    "• College Diploma Certificate",
                    "• If you have multiple certificates, please combine them into a single PDF file before uploading",
                ],
            },
            "3": {
                // Level IV
                title: "Level IV Certificate Requirements",
                content: [
                    "• Grade 12 Certificate",
                    "• Level IV Certificate",
                    "• If you have multiple certificates, please combine them into a single PDF file before uploading",
                ],
            },
            "4": {
                // College Degree
                title: "College Degree Certificate Requirements",
                content: [
                    "• Grade 12 Certificate",
                    "• College Degree Certificate",
                    "• If you have multiple certificates, please combine them into a single PDF file before uploading",
                ],
            },
            "5": {
                // Masters Degree
                title: "Masters Degree Certificate Requirements",
                content: [
                    "• Grade 12 Certificate",
                    "• Bachelor's Degree Certificate",
                    "• Masters Degree Certificate",
                    "• If you have multiple certificates, please combine them into a single PDF file before uploading",
                ],
            },
        };
        return instructions[schoolBackgroundId] || null;
    };
    const currentInstructions = getInstructions(formData.schoolBackgroundId);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleNestedChange = (section, index, field, value) => {
        setFormData((prev) => ({
            ...prev,
            [section]: prev[section].map((item, i) => i === index ? { ...item, [field]: value } : item),
        }));
    };
    const handleGradeChange = (schoolIndex, grade, checked) => {
        const [previews, setPreviews] = useState("https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg");
        setFormData((prev) => ({
            ...prev,
            schools: prev.schools.map((school, i) => i === schoolIndex
                ? { ...school, grades: { ...school.grades, [grade]: checked } }
                : school),
        }));
    };
    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setPreviews(imageURL);
            const img = new Image();
            img.src = imageURL;
            img.onload = () => URL.revokeObjectURL(imageURL);
        }
    }
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "text-center mb-6", children: [_jsx("h2", { className: "text-xl font-semibold text-gray-800 dark:text-white mb-2", children: "Educational Information" }), _jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Please provide details about your educational background." })] }), _jsxs("section", { className: "border-2 border-gray-200 rounded-lg p-6", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-800 dark:text-white mb-4", children: "4. EDUCATIONAL INFORMATION" }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-semibold text-gray-800 dark:text-white mb-2", children: "Select School Background *" }), _jsxs("div", { className: "relative", children: [_jsxs("select", { name: "schoolBackgroundId", value: formData.schoolBackgroundId, onChange: handleInputChange, className: "appearance-none w-full bg-white dark:bg-black border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-800 dark:text-white font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition", children: [_jsx("option", { value: "", children: "Choose Background" }), dropdowns.schoolBackgrounds.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value)))] }), _jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-100", children: _jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }) })] })] }), _jsx("section", { className: "border-2 border-blue-200 rounded-lg p-6 bg-white dark:bg-gray-800 dark:border-gray-700", children: _jsxs("div", { className: "border-t-2 border-blue-400 pt-4 flex flex-col items-center", children: [_jsx("img", { src: "/assets/certificate.png" // replace with your image path
                                    , alt: "Certificate Icon", className: "w-24 h-24 mb-4" }), _jsx("h3", { className: "text-lg font-semibold text-blue-800 mb-2", children: "Please Upload Your Documenet" }), _jsx("div", { className: "text-sm font-medium text-gray-600 mb-4 text-center", children: currentInstructions ? (_jsxs("div", { className: "flex items-center justify-center gap-2", children: [_jsx("span", { children: "Upload your Documenet below:" }), _jsx("button", { type: "button", onClick: () => setShowInstructions(!showInstructions), className: "text-blue-600 hover:text-blue-800 underline cursor-pointer transition-colors duration-200", children: "Read Instructions" })] })) : (_jsx("span", { children: "Please select your school background first to see upload instructions" })) }), currentInstructions && showInstructions && (_jsxs("div", { className: "mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg", children: [_jsxs("div", { className: "flex justify-between items-start mb-2", children: [_jsx("h4", { className: "font-semibold text-blue-800 dark:text-blue-200", children: currentInstructions.title }), _jsx("button", { type: "button", onClick: () => setShowInstructions(false), className: "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors duration-200", children: _jsx(X, { className: "w-5 h-5" }) })] }), _jsx("ul", { className: "text-sm text-blue-700 dark:text-blue-300 space-y-1", children: currentInstructions.content.map((item, index) => (_jsx("li", { children: item }, index))) })] })), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("input", { id: "upload-certificate", type: "file", accept: ".pdf,image/*", onChange: (e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        document: file,
                                                    }));
                                                }
                                            }, className: "hidden" }), _jsxs("label", { htmlFor: "upload-certificate", className: "flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow cursor-pointer hover:from-blue-700 hover:to-blue-800 transition", children: [_jsx(ImageIcon, { className: "w-5 h-5" }), _jsx("span", { children: "Upload Document" })] }), _jsx("span", { className: "text-gray-600 dark:text-gray-300 text-sm", children: formData.document ? formData.document.name : "No file chosen" })] }), formData.document && formData.document instanceof File && (_jsxs("div", { className: "mt-3 relative inline-block", children: [formData.document.type.startsWith("image/") ? (_jsx("img", { src: URL.createObjectURL(formData.document), alt: "Certificate Preview", className: "w-32 h-32 object-cover rounded-md border" })) : formData.document.type === "application/pdf" ? (_jsxs("div", { className: "w-32 h-32 bg-red-100 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-md flex flex-col items-center justify-center", children: [_jsx("svg", { className: "w-8 h-8 text-red-600 dark:text-red-400 mb-1", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z", clipRule: "evenodd" }) }), _jsx("span", { className: "text-xs text-red-600 dark:text-red-400 font-medium", children: "PDF" })] })) : null, _jsx("button", { type: "button", onClick: () => setFormData((prev) => ({
                                                ...prev,
                                                document: null,
                                            })), className: "absolute top-1 right-1 bg-black/60 text-white rounded-full p-1 hover:bg-black/80", children: _jsx(X, { className: "w-4 h-4" }) })] }))] }) }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-semibold text-gray-800 dark:text-white mb-2", children: "Select Your Department *" }), _jsxs("div", { className: "relative", children: [_jsxs("select", { name: "departmentEnrolledId", value: formData.departmentEnrolledId, onChange: handleInputChange, className: "appearance-none w-full bg-white dark:bg-black border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-800 dark:text-white font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition", children: [_jsx("option", { value: "", children: "Choose Department" }), dropdowns.departments.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value)))] }), _jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-100", children: _jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }) })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-semibold text-gray-800 dark:text-white mb-2", children: "Select Program Modality *" }), _jsxs("div", { className: "relative", children: [_jsxs("select", { name: "programModalityCode", value: formData.programModalityCode, onChange: handleInputChange, className: "appearance-none w-full bg-white dark:bg-black border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-800 dark:text-white font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition", children: [_jsx("option", { value: "", children: "Choose Modality" }), dropdowns.programModalities.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value)))] }), _jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-100", children: _jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }) })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-semibold text-gray-800 dark:text-white mb-2", children: "Select Class Year *" }), _jsxs("div", { className: "relative", children: [_jsxs("select", { name: "classYearId", value: formData.classYearId, onChange: handleInputChange, className: "appearance-none w-full bg-white dark:bg-black border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-800 dark:text-white font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition", children: [_jsx("option", { value: "", children: "Choose Class Year" }), dropdowns.classYears.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value)))] }), _jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-100", children: _jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }) })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-semibold text-gray-800 dark:text-white mb-2", children: "Select Semester *" }), _jsxs("div", { className: "relative", children: [_jsxs("select", { name: "semesterCode", value: formData.semesterCode, onChange: handleInputChange, className: "appearance-none w-full bg-white dark:bg-black border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-800 dark:text-white font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition", children: [_jsx("option", { value: "", children: "Choose Semester" }), dropdowns.semesters.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value)))] }), _jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-100", children: _jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }) })] })] })] })] }));
};
const EmploymentInformationStep = ({ formData, setFormData }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleNestedChange = (section, index, field, value) => {
        setFormData((prev) => ({
            ...prev,
            [section]: prev[section].map((item, i) => i === index ? { ...item, [field]: value } : item),
        }));
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "text-center mb-6", children: [_jsx("h2", { className: "text-xl font-semibold text-gray-800 dark:text-white mb-2", children: "Employment Information" }), _jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Please provide details about your current and past employment." })] }), _jsxs("section", { className: "border-2 border-gray-200 rounded-lg p-6", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-800 dark:text-white mb-4", children: "4. EMPLOYMENT" }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-white mb-2", children: "Are You Currently Employed?" }), _jsx("div", { className: "flex gap-4 mb-4", children: ["Yes", "No"].map((option) => (_jsxs("label", { className: "flex items-center", children: [_jsx("input", { type: "radio", name: "currentlyEmployed", value: option, checked: formData.currentlyEmployed === option, onChange: handleInputChange, className: "mr-2" }), option] }, option))) }), formData.currentlyEmployed === "Yes" && (_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "Employer" }), _jsx("input", { type: "text", name: "currentEmployer", value: formData.currentEmployer, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "Type of Job" }), _jsx("input", { type: "text", name: "currentJobType", value: formData.currentJobType, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "Address" }), _jsx("input", { type: "text", name: "currentEmployerAddress", value: formData.currentEmployerAddress, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "Telephone" }), _jsx("input", { type: "tel", name: "currentEmployerPhone", value: formData.currentEmployerPhone, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] })] }))] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-white mb-2", children: "List at least three employments:" }), _jsx("div", { className: "space-y-4", children: formData.employmentHistory.map((employment, index) => (_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-6 gap-4 p-4 border border-gray-200 rounded-md", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "Type of work" }), _jsx("input", { type: "text", value: employment.type, onChange: (e) => handleNestedChange("employmentHistory", index, "type", e.target.value), className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "Employer" }), _jsx("input", { type: "text", value: employment.employer, onChange: (e) => handleNestedChange("employmentHistory", index, "employer", e.target.value), className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "P.O Box" }), _jsx("input", { type: "text", value: employment.poBox, onChange: (e) => handleNestedChange("employmentHistory", index, "poBox", e.target.value), className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { children: [" ", _jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "Telephone" }), _jsx("input", { type: "tel", value: employment.telephone, onChange: (e) => handleNestedChange("employmentHistory", index, "telephone", e.target.value), className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs text-gray-500 dark:text-gray-100 mb-1", children: "Service Year" }), _jsxs("div", { className: "grid grid-cols-2 gap-2", children: [_jsx("input", { type: "text", placeholder: "From", value: employment.yearFrom, onChange: (e) => handleNestedChange("employmentHistory", index, "yearFrom", e.target.value), className: "w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" }), _jsx("input", { type: "text", placeholder: "To", value: employment.yearTo, onChange: (e) => handleNestedChange("employmentHistory", index, "yearTo", e.target.value), className: "w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] })] })] }, index))) })] })] })] }));
};
const ReviewSubmitStep = ({ formData, setFormData, onSubmit, isSubmitting, }) => {
    const [applicantName, setApplicantName] = useState("");
    const [applicantSignature, setApplicantSignature] = useState("");
    const [submissionDate, setSubmissionDate] = useState(new Date().toISOString().split("T")[0]);
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const finalData = {
                ...formData,
            };
            console.log(finalData);
            await onSubmit(finalData);
        }
        catch (error) {
            // Error handling is done in the parent component
        }
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "text-center mb-6", children: [_jsx("h2", { className: "text-xl font-semibold text-gray-800 dark:text-white mb-2", children: "Review & Submit" }), _jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Please review your information and complete the declaration." })] }), _jsxs("section", { className: "border-2 border-gray-200 rounded-lg p-6", children: [_jsx("h3", { className: "text-lg text-center font-semibold text-gray-800 dark:text-white mb-4", children: "Application Summary" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm", children: [_jsxs("div", { className: "flex flex-col justify-around", children: [_jsxs("span", { className: "font-medium", children: ["Name: ", formData.firstName, formData.middleName, " ", formData.lastName] }), _jsxs("div", { children: [_jsx("span", { className: "font-medium", children: "Study Choice:" }), " ", formData.studyChoice] })] }), _jsx("div", { children: _jsxs("div", { className: "flex items-center gap-6", children: [_jsx("span", { className: "font-medium", children: "Photo:" }), _jsx("img", { className: "w-24 h-24 rounded-full mb-4", src: formData.prevPhoto })] }) }), _jsxs("div", { children: [_jsx("span", { className: "font-medium", children: "Email:" }), " ", formData.email] }), _jsxs("div", { children: [_jsx("span", { className: "font-medium", children: "Phone:" }), " ", formData.phoneNo] })] })] }), _jsxs("section", { className: "border-2 border-gray-200  rounded-lg p-6", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-800 dark:text-white mb-4", children: "6. STATEMENT BY THE APPLICANT" }), _jsx("div", { className: " p-4 rounded-md mb-6", children: _jsx("p", { className: "text-sm text-gray-800 dark:text-white leading-relaxed", children: "Are you sure you want to submit this form? Please confirm that all information provided is correct." }) }), _jsx("form", { onSubmit: handleSubmit, children: _jsx("div", { className: "flex justify-center", children: _jsx("button", { type: "submit", disabled: isSubmitting, className: `font-semibold py-3 px-8 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${isSubmitting
                                    ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                                    : "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500"}`, children: isSubmitting ? (_jsxs("div", { className: "flex items-center", children: [_jsxs("svg", { className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }), "Submitting..."] })) : ("Submit Registration Form") }) }) })] })] }));
};
// Progress Indicator Component
const ProgressIndicator = ({ currentStep, totalSteps }) => {
    const steps = [
        "Personal Information",
        "Family Background",
        "Educational Information",
        // "Employment Information",
        "Review & Submit",
    ];
    return (_jsxs("div", { className: "mb-8", children: [_jsx("div", { className: "flex items-center justify-between mb-4", children: steps.map((step, index) => (_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${index + 1 <= currentStep
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 text-gray-600 dark:text-gray-300"}`, children: index + 1 }), _jsx("span", { className: `ml-2 text-sm ${index + 1 <= currentStep
                                ? "text-blue-600 font-medium"
                                : "text-gray-500 dark:text-gray-100"} hidden md:inline`, children: step }), index < steps.length - 1 && (_jsx("div", { className: `w-8 md:w-16 h-0.5 mx-2 ${index + 1 < currentStep ? "bg-blue-600" : "bg-gray-200"}` }))] }, index))) }), _jsxs("div", { className: "text-center text-sm text-gray-600 dark:text-gray-300", children: ["Step ", currentStep, " of ", totalSteps] })] }));
};
// Main Multi-Step Form Component
const MultiStepRegistrationForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 4;
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    // <CHANGE> Added initial form data structure with localStorage persistence
    const [formData, setFormData] = useState(() => {
        const saved = localStorage.getItem("registrationFormData");
        return saved
            ? JSON.parse(saved)
            : {
                // Application type
                // admissionType: "",
                // Personal Data
                firstName: "",
                firstNameAMH: "",
                middleName: "",
                middleNameAMH: "",
                lastName: "",
                lastNameAMH: "",
                sex: "",
                age: "",
                visionImpairment: "",
                hearingImpairment: "",
                otherImpairment: "",
                // Birth Information
                birthTown: "",
                birthWoreda: "",
                birthZone: "",
                birthRegion: "",
                birthDateEC: "",
                birthMonthEC: "",
                birthYearEC: "",
                birthDateGC: "",
                birthMonthGC: "",
                birthYearGC: "",
                // Current Address
                currentRegion: "",
                currentZone: "",
                currentWoreda: "",
                currentSubCity: "",
                currentKebele: "",
                currentHouseNo: "",
                // poBox: "",
                email: "",
                phoneNo: "",
                // Dropdown submit values (codes/ids)
                impairmentCode: "",
                departmentEnrolledId: "",
                programModalityCode: "",
                schoolBackgroundId: "",
                classYearId: "",
                semesterCode: "",
                // Geographic codes
                placeOfBirthRegionCode: "",
                placeOfBirthZoneCode: "",
                placeOfBirthWoredaCode: "",
                currentAddressRegionCode: "",
                currentAddressZoneCode: "",
                currentAddressWoredaCode: "",
                // Marital Status
                maritalStatus: "",
                // Family Background
                motherFirstName: "",
                motherFirstNameAMH: "",
                motherLastName: "",
                motherLastNameAMH: "",
                // Emergency Contact
                emergencyfirstName: "",
                emergencylastName: "",
                emergencyfirstNameAMH: "",
                emergencylastNameAMH: "",
            };
    });
    // <CHANGE> Save form data to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("registrationFormData", JSON.stringify(formData));
    }, [formData]);
    // <CHANGE> Save current step to localStorage
    useEffect(() => {
        localStorage.setItem("registrationCurrentStep", currentStep.toString());
    }, [currentStep]);
    // <CHANGE> Load current step from localStorage on mount
    useEffect(() => {
        const savedStep = localStorage.getItem("registrationCurrentStep");
        if (savedStep) {
            setCurrentStep(parseInt(savedStep));
        }
    }, []);
    const nextStep = () => {
        // Allow advancing unless we're already at the final step
        if (currentStep < totalSteps) {
            setCurrentStep((s) => s + 1);
        }
    };
    // Dropdown options
    const [dropdowns, setDropdowns] = useState({
        departments: [],
        impairments: [],
        semesters: [],
        schoolBackgrounds: [],
        programModalities: [],
        classYears: [],
        regions: [],
        birthZones: [],
        birthWoredas: [],
        currentZones: [],
        currentWoredas: [],
    });
    useEffect(() => {
        const loadDropdowns = async () => {
            try {
                const [departments, impairments, semesters, schoolBackgrounds, programModalities, regions, classYears,] = await Promise.all([
                    apiService.get(endPoints.departments
                    //   {
                    //   headers: { requiresAuth: false },
                    // }
                    ),
                    apiService.get(endPoints.impairments
                    //   {
                    //   headers: { requiresAuth: false },
                    // }
                    ),
                    apiService.get(endPoints.semesters
                    //    {
                    //   headers: { requiresAuth: false },
                    // }
                    ),
                    apiService.get(endPoints.schoolBackgrounds
                    //   {
                    //   headers: { requiresAuth: false },
                    // }
                    ),
                    apiService.get(endPoints.programModality
                    //   {
                    //   headers: { requiresAuth: false },
                    // }
                    ),
                    apiService.get(endPoints.regions
                    //    {
                    //   headers: { requiresAuth: false },
                    // }
                    ),
                    apiService.get(endPoints.classYears),
                ]);
                setDropdowns((prev) => ({
                    ...prev,
                    departments: (departments || []).map((d) => ({
                        value: d.dptID,
                        label: d.deptName,
                    })),
                    impairments: (impairments || [])
                        .map((i) => ({
                        value: i?.impairmentCode ?? i?.disabilityCode,
                        label: i?.impairment ?? i?.disability,
                    }))
                        .filter((opt) => opt.value && opt.label),
                    semesters: (semesters || []).map((s) => ({
                        value: s.academicPeriodCode,
                        label: s.academicPeriod,
                    })),
                    schoolBackgrounds: (schoolBackgrounds || []).map((b) => ({
                        value: b.id,
                        label: b.background,
                    })),
                    programModalities: (programModalities || []).map((m) => ({
                        value: m.modalityCode,
                        label: m.modality,
                    })),
                    classYears: (classYears || []).map((y) => ({
                        value: y.id,
                        label: y.classYear,
                    })),
                    regions: (regions || []).map((r) => ({
                        value: r.regionCode,
                        label: r.region,
                    })),
                }));
                console.log(regions, "this are the regionssssss");
            }
            catch (err) {
                setDropdowns((prev) => ({
                    ...prev,
                    departments: [],
                    impairments: [],
                    semesters: [],
                    schoolBackgrounds: [],
                    programModalities: [],
                    classYears: [],
                    regions: [],
                }));
                console.log(err);
                console.log("it reached here");
            }
        };
        loadDropdowns();
    }, []);
    // Cascading dropdown functions
    const fetchZonesByRegion = async (regionCode, target) => {
        try {
            const zones = await apiService.get(`${endPoints.zonesByRegion}/${regionCode}`);
            setDropdowns((prev) => ({
                ...prev,
                ...(target === "birth"
                    ? {
                        birthZones: (zones || []).map((z) => ({
                            value: z.zoneCode,
                            label: z.zone,
                        })),
                        birthWoredas: [],
                    }
                    : {
                        currentZones: (zones || []).map((z) => ({
                            value: z.zoneCode,
                            label: z.zone,
                        })),
                        currentWoredas: [],
                    }),
            }));
        }
        catch (err) {
            setDropdowns((prev) => ({
                ...prev,
                ...(target === "birth"
                    ? { birthZones: [], birthWoredas: [] }
                    : { currentZones: [], currentWoredas: [] }),
            }));
        }
    };
    const fetchWoredasByZone = async (zoneCode, target) => {
        try {
            const woredas = await apiService.get(`${endPoints.woredasByZone}/${zoneCode}`);
            setDropdowns((prev) => ({
                ...prev,
                ...(target === "birth"
                    ? {
                        birthWoredas: (woredas || []).map((w) => ({
                            value: w.woredaCode,
                            label: w.woreda,
                        })),
                    }
                    : {
                        currentWoredas: (woredas || []).map((w) => ({
                            value: w.woredaCode,
                            label: w.woreda,
                        })),
                    }),
            }));
        }
        catch (err) {
            setDropdowns((prev) => ({
                ...prev,
                ...(target === "birth" ? { birthWoredas: [] } : { currentWoredas: [] }),
            }));
        }
    };
    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };
    const handleSubmit = async () => {
        setIsSubmitting(true);
        setErrorMessage("");
        const formDataObj = new FormData();
        const nullIfEmpty = (v) => v === undefined || v === null || String(v).trim() === "" ? null : v;
        const intOrNull = (v) => {
            const n = parseInt(v, 10);
            return Number.isFinite(n) ? n : null;
        };
        const safeUpper = (v) => (v ? String(v).toUpperCase() : null);
        const dateOrNull = (y, m, d) => (y && m && d ? `${y}-${m}-${d}` : null);
        const rawBody = {
            firstNameAMH: nullIfEmpty(formData.firstNameAMH),
            firstNameENG: nullIfEmpty(formData.firstName),
            // Father name extracted from student's middle name
            fatherNameAMH: nullIfEmpty(formData.middleNameAMH),
            fatherNameENG: nullIfEmpty(formData.middleName),
            // Grandfather name - using last name as grandfather name
            grandfatherNameAMH: nullIfEmpty(formData.lastNameAMH),
            grandfatherNameENG: nullIfEmpty(formData.lastName),
            motherNameAMH: nullIfEmpty(formData.motherFirstNameAMH),
            motherNameENG: nullIfEmpty(formData.motherFirstName),
            // Mother's father name - using mother's last name as her father's name
            motherFatherNameAMH: nullIfEmpty(formData.motherLastNameAMH),
            motherFatherNameENG: nullIfEmpty(formData.motherLastName),
            gender: formData.sex
                ? formData.sex === "Male"
                    ? "MALE"
                    : "FEMALE"
                : null,
            age: intOrNull(formData.age),
            phoneNumber: nullIfEmpty(formData.phoneNo),
            dateOfBirthEC: dateOrNull(formData.birthYearEC, formData.birthMonthEC, formData.birthDateEC),
            dateOfBirthGC: formData.birthDateGC || null,
            placeOfBirthWoredaCode: nullIfEmpty(formData.placeOfBirthWoredaCode),
            placeOfBirthZoneCode: nullIfEmpty(formData.placeOfBirthZoneCode),
            placeOfBirthRegionCode: nullIfEmpty(formData.placeOfBirthRegionCode),
            currentAddressWoredaCode: nullIfEmpty(formData.currentAddressWoredaCode),
            currentAddressZoneCode: nullIfEmpty(formData.currentAddressZoneCode),
            currentAddressRegionCode: nullIfEmpty(formData.currentAddressRegionCode),
            email: nullIfEmpty(formData.email),
            maritalStatus: safeUpper(formData.maritalStatus),
            impairmentCode: nullIfEmpty(formData.impairmentCode),
            schoolBackgroundId: intOrNull(formData.schoolBackgroundId),
            contactPersonFirstNameAMH: nullIfEmpty(formData.emergencyfirstNameAMH),
            contactPersonFirstNameENG: nullIfEmpty(formData.emergencyfirstName),
            contactPersonLastNameAMH: nullIfEmpty(formData.emergencylastNameAMH),
            contactPersonLastNameENG: nullIfEmpty(formData.emergencylastName),
            contactPersonPhoneNumber: nullIfEmpty(formData.contactPersonPhoneNumber),
            contactPersonRelation: nullIfEmpty(formData.contactPersonRelation),
            departmentEnrolledId: intOrNull(formData.departmentEnrolledId),
            programModalityCode: nullIfEmpty(formData.programModalityCode),
            classYearId: intOrNull(formData.classYearId),
            semesterCode: nullIfEmpty(formData.semesterCode),
        };
        // Remove null fields to avoid backend complaints for missing/optional values
        const body = Object.fromEntries(Object.entries(rawBody).filter(([_, v]) => v !== null));
        try {
            // Append the JSON string as the 'data' part
            formDataObj.append("data", new Blob([JSON.stringify(body)], { type: "application/json" }));
            // Append file uploads if they exist
            if (formData.studentPhoto && formData.studentPhoto instanceof File) {
                formDataObj.append("studentPhoto", formData.studentPhoto);
            }
            if (formData.document && formData.document instanceof File) {
                formDataObj.append("document", formData.document);
            }
            const response = await apiService.post(endPoints.applicantsRegister, formDataObj, {
            // headers: { requiresAuth: false }
            });
            console.log("%cRegistration success", "color: green; font-weight: bold", response.data);
            toast({ title: "Registration submitted", description: "Your application was submitted successfully." });
            // Clear localStorage on successful submission
            localStorage.removeItem("registrationFormData");
            localStorage.removeItem("registrationCurrentStep");
            setErrorMessage("");
            // alert removed in favor of toast
            return response.data;
        }
        catch (error) {
            console.error("%cSubmission error:", "color: red; font-weight: bold", error);
            // Extract error message from different possible error structures
            let errorMsg = "An unexpected error occurred. Please try again.";
            if (error.response) {
                // Server responded with error status
                const { status, data } = error.response;
                if (status === 400) {
                    errorMsg =
                        data?.message ||
                            data?.error ||
                            "Invalid data provided. Please check your information and try again.";
                }
                else if (status === 401) {
                    errorMsg =
                        "Authentication failed. Please refresh the page and try again.";
                }
                else if (status === 403) {
                    errorMsg =
                        "Access denied. You don't have permission to perform this action.";
                }
                else if (status === 404) {
                    errorMsg = "Service not found. Please contact support.";
                }
                else if (status === 409) {
                    errorMsg =
                        "A record with this information already exists. Please check your details.";
                }
                else if (status === 422) {
                    errorMsg =
                        data?.message ||
                            "Validation error. Please check all required fields are filled correctly.";
                }
                else if (status === 500) {
                    errorMsg = "Server error. Please try again later or contact support.";
                }
                else {
                    errorMsg =
                        data?.message || `Server error (${status}). Please try again.`;
                }
            }
            else if (error.request) {
                // Network error
                errorMsg =
                    "Network error. Please check your internet connection and try again.";
            }
            else {
                // Other error
                errorMsg =
                    error.message || "An unexpected error occurred. Please try again.";
            }
            setErrorMessage(errorMsg);
            toast({ title: "Submission failed", description: errorMsg, variant: "destructive" });
            throw error;
        }
        finally {
            setIsSubmitting(false);
        }
    };
    const isStepValid = (step, formData) => {
        switch (step) {
            case 1:
                // Be lenient on Step 1 so users can proceed after core personal info
                return (!!formData.firstName &&
                    !!formData.middleName &&
                    !!formData.lastName &&
                    !!formData.sex &&
                    !!formData.phoneNo);
            case 2:
                return true;
            case 3:
                return true;
            // return formData.schools && formData.studyChoice;
            case 4:
                return true;
            // return formData.currentlyEmployed;
            default:
                return true;
        }
    };
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (_jsx(PersonalInformationStep, { formData: formData, setFormData: setFormData, dropdowns: dropdowns, fetchZonesByRegion: fetchZonesByRegion, fetchWoredasByZone: fetchWoredasByZone }));
            case 2:
                return (_jsx(FamilyBackgroundStep, { formData: formData, setFormData: setFormData }));
            case 3:
                return (_jsx(EducationalInformationStep, { formData: formData, setFormData: setFormData, dropdowns: dropdowns }));
            case 4:
                return (_jsx(ReviewSubmitStep, { formData: formData, setFormData: setFormData, onSubmit: handleSubmit, isSubmitting: isSubmitting }));
            default:
                return (_jsx(PersonalInformationStep, { formData: formData, setFormData: setFormData, dropdowns: dropdowns, fetchZonesByRegion: fetchZonesByRegion, fetchWoredasByZone: fetchWoredasByZone }));
        }
    };
    return (
    // <div className="w-full mx-auto p-6 bg-white dark:bg-black">
    _jsxs("div", { children: [_jsxs("header", { className: "container mx-auto px-4 py-2 flex justify-between items-center", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx("div", { className: "w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center", children: _jsx("img", { src: "/assets/companylogo.jpg", className: "h-[50px] w-full" }) }), _jsxs("div", { children: [_jsx("h1", { className: "text-xl font-bold text-gray-900 dark:text-white", children: "DEUTSCHE HOCHSCHULE" }), _jsx("p", { className: "text-sm text-gray-600  dark:text-gray-300", children: "medicin college" })] })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(LanguageSwitcher, {}), _jsx(ThemeToggle, {})] })] }), _jsxs("div", { className: "relative min-h-screen  bg-gray-50 dark:bg-gray-900 px-6 md:px-16 lg:px-28 overflow-auto overflow-x-hidden", children: [_jsxs("div", { className: "relative z-10", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2", children: "Registrar Office" }), _jsx("h2", { className: "text-xl font-semibold text-gray-700 dark:text-white dark:text-gray-200 mb-4", children: "LIFE HISTORY FORM, UNDERGRADUATE PROGRAM" }), _jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300 leading-relaxed", children: "This form, completed and accompanied by all necessary education documents, must be returned to the Registrar's Office on or before the end of the registration date declared by the Registrar of the College." })] }), _jsx(ProgressIndicator, { currentStep: currentStep, totalSteps: totalSteps }), renderStep(), currentStep <= totalSteps && (_jsxs("div", { className: "flex justify-between mt-8", children: [_jsx("button", { onClick: prevStep, disabled: currentStep === 1, className: `px-6 py-2 rounded-lg font-medium transition duration-200 ${currentStep === 1
                                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                            : "bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"}`, children: "Previous" }), _jsxs("div", { className: "flex gap-4", children: [_jsx("button", { onClick: () => {
                                                    localStorage.setItem("registrationFormData", JSON.stringify(formData));
                                                    alert("Progress saved!");
                                                }, className: "px-6 py-2 bg-yellow-600 text-white rounded-lg font-medium hover:bg-yellow-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500", children: "Save Progress" }), currentStep < totalSteps && (_jsx("button", { onClick: nextStep, className: `px-6 py-2 rounded-lg font-medium transition duration-200 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`, children: "Next" }))] })] }))] }), _jsxs("div", { id: "contact", className: "relative w-full mt-5 flex items-center justify-center overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 z-0 pointer-events-none", children: _jsx(LightRays, { raysOrigin: "top-center", raysColor: "#ffffff", raysSpeed: 1, lightSpread: 1, rayLength: 2, pulsating: true, fadeDistance: 1, saturation: 1, followMouse: true, mouseInfluence: 0.1, noiseAmount: 0, distortion: 0, className: "w-full h-full" }) }), _jsx("footer", { className: "text-white py-1", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "grid md:grid-cols-4 gap-8", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center space-x-3 mb-4", children: [_jsx("div", { className: "w-12 rounded-full   rounded-lg flex items-center justify-center", children: _jsx("img", { src: "/assets/companylogo.jpg", className: "h-[50px] w-full rounded-full " }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-bold", children: "some" }), _jsx("p", { className: "text-sm text-", children: "thing" })] })] }), _jsx("p", { className: "text-gray-400", children: "Excellence in medical education since 1985." })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-4", children: "Quick Links" }), _jsxs("ul", { className: "space-y-2 text-black", children: [_jsx("li", { children: _jsx(Link, { to: "/register", className: "text-black hover:text-gray-400 dark:text-white dark:hover:text-gray-400", children: "Apply Now" }) }), _jsx("li", { children: _jsx(Link, { to: "/login", className: "text-black hover:text-gray-400 dark:text-white dark:hover:text-gray-400", children: "Student Portal" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: "text-black hover:text-gray-400 dark:text-white dark:hover:text-gray-400", children: "Programs" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: "text-black hover:text-gray-400 dark:text-white dark:hover:text-gray-400", children: "Research" }) })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-4", children: "something" }), _jsxs("ul", { className: "space-y-2 ", children: [_jsx("li", { className: "text-black hover:text-gray-400 dark:text-white dark:hover:text-gray-400", children: "123 Medical Campus Drive" }), _jsx("li", { className: "text-black hover:text-gray-400 dark:text-white dark:hover:text-gray-400", children: "Berlin, Germany 10115" }), _jsx("li", { className: "text-black hover:text-gray-400 dark:text-white dark:hover:text-gray-400", children: "+49 30 1234 5678" }), _jsx("li", { className: "text-black hover:text-gray-400 dark:text-white dark:hover:text-gray-400", children: "info@dhfm-college.de" })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-4", children: "Follow Us" }), _jsxs("div", { className: "flex space-x-4", children: [_jsxs(Button, { variant: "ghost", size: "icon", className: "text-gray-400 hover:text-white", children: [_jsx("span", { className: "sr-only", children: "Facebook" }), "\uD83D\uDCD8"] }), _jsxs(Button, { variant: "ghost", size: "icon", className: "text-gray-400 hover:text-white", children: [_jsx("span", { className: "sr-only", children: "Twitter" }), "\uD83D\uDC26"] }), _jsxs(Button, { variant: "ghost", size: "icon", className: "text-gray-400 hover:text-white", children: [_jsx("span", { className: "sr-only", children: "LinkedIn" }), "\uD83D\uDCBC"] })] })] })] }), _jsx("div", { className: "border-t border-gray-800 mt-8 pt-8 text-center text-gray-400", children: _jsx("p", { children: "\u00A9 2024 Deutsche Hochschule f\u00FCr Medizin College. All rights reserved." }) })] }) })] })] })] }));
};
export default MultiStepRegistrationForm;
