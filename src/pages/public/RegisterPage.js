import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const StudentRegistrationForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Personal Information
        firstNameAMH: "",
        firstNameENG: "",
        fatherNameAMH: "",
        fatherNameENG: "",
        grandfatherNameAMH: "",
        grandfatherNameENG: "",
        motherNameAMH: "",
        motherNameENG: "",
        motherFatherNameAMH: "",
        motherFatherNameENG: "",
        // Demographic Details
        gender: "",
        age: "",
        phoneNumber: "",
        dateOfBirthEC: "",
        dateOfBirthGC: "",
        email: "",
        maritalStatus: "",
        impairmentCode: "",
        // Place of Birth
        placeOfBirthWoredaCode: "",
        placeOfBirthZoneCode: "",
        placeOfBirthRegionCode: "",
        // Current Address
        currentAddressWoredaCode: "",
        currentAddressZoneCode: "",
        currentAddressRegionCode: "",
        // Contact Person
        contactPersonFirstNameAMH: "",
        contactPersonFirstNameENG: "",
        contactPersonLastNameAMH: "",
        contactPersonLastNameENG: "",
        contactPersonPhoneNumber: "",
        contactPersonRelation: "",
        // Academic Information
        schoolBackgroundId: "",
        departmentEnrolledId: "",
        programModalityCode: "",
        classYearId: "",
        semesterCode: "",
        document: null,
    });
    const [dropdownData, setDropdownData] = useState({
        genders: [],
        maritalStatuses: [],
        impairments: [],
        woredas: [],
        zones: [],
        regions: [],
        schoolBackgrounds: [],
        departments: [],
        programModalities: [],
        classYears: [],
        semesters: [],
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });
    const [dragActive, setDragActive] = useState(false);
    // Fetch dropdown data
    useEffect(() => {
        const fetchDropdownData = async () => {
            try {
                const endpoints = [
                    { key: 'genders', url: '/api/enums/genders' },
                    { key: 'maritalStatuses', url: '/api/enums/marital-statuses' },
                    { key: 'impairments', url: '/api/impairments' },
                    { key: 'woredas', url: '/api/woreda' },
                    { key: 'zones', url: '/api/zone' },
                    { key: 'regions', url: '/api/region' },
                    { key: 'schoolBackgrounds', url: '/api/school-backgrounds' },
                    { key: 'departments', url: '/api/departments' },
                    { key: 'programModalities', url: '/api/program-modality' },
                    { key: 'classYears', url: '/api/class-years' },
                    { key: 'semesters', url: '/api/semesters' },
                ];
                const promises = endpoints.map(async ({ key, url }) => {
                    try {
                        const response = await fetch(`http://localhost:8081${url}`);
                        if (response.ok) {
                            const data = await response.json();
                            return { key, data };
                        }
                        return { key, data: [] };
                    }
                    catch (error) {
                        console.error(`Error fetching ${key}:`, error);
                        return { key, data: [] };
                    }
                });
                const results = await Promise.all(promises);
                const newDropdownData = {};
                results.forEach(({ key, data }) => {
                    newDropdownData[key] = data;
                });
                setDropdownData(newDropdownData);
            }
            catch (error) {
                console.error('Error fetching dropdown data:', error);
            }
        };
        fetchDropdownData();
    }, []);
    // Form validation functions
    const validateStep = (step) => {
        switch (step) {
            case 1: // Personal Information
                return formData.firstNameAMH && formData.firstNameENG &&
                    formData.fatherNameAMH && formData.fatherNameENG &&
                    formData.grandfatherNameAMH && formData.grandfatherNameENG &&
                    formData.motherNameAMH && formData.motherNameENG &&
                    formData.motherFatherNameAMH && formData.motherFatherNameENG;
            case 2: // Demographic Details
                return formData.gender && formData.age && formData.phoneNumber &&
                    formData.dateOfBirthEC && formData.dateOfBirthGC && formData.maritalStatus;
            case 3: // Place of Birth
                return formData.placeOfBirthRegionCode && formData.placeOfBirthZoneCode &&
                    formData.placeOfBirthWoredaCode;
            case 4: // Current Address
                return formData.currentAddressRegionCode && formData.currentAddressZoneCode &&
                    formData.currentAddressWoredaCode;
            case 5: // Contact Person
                return formData.contactPersonFirstNameAMH && formData.contactPersonFirstNameENG &&
                    formData.contactPersonLastNameAMH && formData.contactPersonLastNameENG &&
                    formData.contactPersonPhoneNumber;
            case 6: // Academic Information
                return formData.schoolBackgroundId && formData.departmentEnrolledId &&
                    formData.programModalityCode && formData.classYearId && formData.semesterCode;
            default:
                return true;
        }
    };
    const nextStep = () => {
        if (validateStep(currentStep) && currentStep < 6) {
            setCurrentStep(currentStep + 1);
        }
    };
    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };
    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value,
        }));
    };
    // Enhanced file upload handlers
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        }
        else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            if (file.type === "application/pdf") {
                setFormData((prev) => ({
                    ...prev,
                    document: file,
                }));
            }
            else {
                setMessage({
                    type: 'error',
                    text: 'Please upload only PDF files.'
                });
            }
        }
    };
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.type === "application/pdf") {
                setFormData((prev) => ({
                    ...prev,
                    document: file,
                }));
                setMessage({ type: "", text: "" });
            }
            else {
                setMessage({
                    type: 'error',
                    text: 'Please upload only PDF files.'
                });
            }
        }
    };
    const removeFile = () => {
        setFormData((prev) => ({
            ...prev,
            document: null,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: "", text: "" });
        try {
            const formDataToSend = new FormData();
            // Prepare the data object for JSON part
            const dataObject = {
                firstNameAMH: formData.firstNameAMH,
                firstNameENG: formData.firstNameENG,
                fatherNameAMH: formData.fatherNameAMH,
                fatherNameENG: formData.fatherNameENG,
                grandfatherNameAMH: formData.grandfatherNameAMH,
                grandfatherNameENG: formData.grandfatherNameENG,
                motherNameAMH: formData.motherNameAMH,
                motherNameENG: formData.motherNameENG,
                motherFatherNameAMH: formData.motherFatherNameAMH,
                motherFatherNameENG: formData.motherFatherNameENG,
                gender: formData.gender,
                age: parseInt(formData.age) || null,
                phoneNumber: formData.phoneNumber,
                dateOfBirthEC: formData.dateOfBirthEC,
                dateOfBirthGC: formData.dateOfBirthGC,
                email: formData.email || null,
                maritalStatus: formData.maritalStatus,
                impairmentCode: formData.impairmentCode || null,
                placeOfBirthWoredaCode: formData.placeOfBirthWoredaCode,
                placeOfBirthZoneCode: formData.placeOfBirthZoneCode,
                placeOfBirthRegionCode: formData.placeOfBirthRegionCode,
                currentAddressWoredaCode: formData.currentAddressWoredaCode,
                currentAddressZoneCode: formData.currentAddressZoneCode,
                currentAddressRegionCode: formData.currentAddressRegionCode,
                contactPersonFirstNameAMH: formData.contactPersonFirstNameAMH,
                contactPersonFirstNameENG: formData.contactPersonFirstNameENG,
                contactPersonLastNameAMH: formData.contactPersonLastNameAMH,
                contactPersonLastNameENG: formData.contactPersonLastNameENG,
                contactPersonPhoneNumber: formData.contactPersonPhoneNumber,
                contactPersonRelation: formData.contactPersonRelation || null,
                schoolBackgroundId: parseInt(formData.schoolBackgroundId) || null,
                departmentEnrolledId: parseInt(formData.departmentEnrolledId) || null,
                programModalityCode: formData.programModalityCode,
                classYearId: parseInt(formData.classYearId) || null,
                semesterCode: formData.semesterCode,
            };
            formDataToSend.append('data', JSON.stringify(dataObject));
            if (formData.document) {
                formDataToSend.append('document', formData.document);
            }
            const response = await fetch('http://localhost:8081/api/applicants/register', {
                method: 'POST',
                body: formDataToSend,
            });
            const result = await response.json();
            if (response.ok) {
                setMessage({
                    type: 'success',
                    text: result.message || 'Student application submitted successfully!'
                });
                // Reset form
                setFormData({
                    firstNameAMH: "",
                    firstNameENG: "",
                    fatherNameAMH: "",
                    fatherNameENG: "",
                    grandfatherNameAMH: "",
                    grandfatherNameENG: "",
                    motherNameAMH: "",
                    motherNameENG: "",
                    motherFatherNameAMH: "",
                    motherFatherNameENG: "",
                    gender: "",
                    age: "",
                    phoneNumber: "",
                    dateOfBirthEC: "",
                    dateOfBirthGC: "",
                    email: "",
                    maritalStatus: "",
                    impairmentCode: "",
                    placeOfBirthWoredaCode: "",
                    placeOfBirthZoneCode: "",
                    placeOfBirthRegionCode: "",
                    currentAddressWoredaCode: "",
                    currentAddressZoneCode: "",
                    currentAddressRegionCode: "",
                    contactPersonFirstNameAMH: "",
                    contactPersonFirstNameENG: "",
                    contactPersonLastNameAMH: "",
                    contactPersonLastNameENG: "",
                    contactPersonPhoneNumber: "",
                    contactPersonRelation: "",
                    schoolBackgroundId: "",
                    departmentEnrolledId: "",
                    programModalityCode: "",
                    classYearId: "",
                    semesterCode: "",
                    document: null,
                });
            }
            else {
                setMessage({
                    type: 'error',
                    text: result.error || 'An error occurred while submitting the application.'
                });
            }
        }
        catch (error) {
            setMessage({
                type: 'error',
                text: 'Network error. Please check your connection and try again.'
            });
        }
        finally {
            setLoading(false);
        }
    };
    const FormSection = ({ title, children, icon }) => (_jsxs("div", { className: "bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden", children: [_jsx("div", { className: "bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4", children: _jsxs("div", { className: "flex items-center", children: [icon && _jsx("span", { className: "text-white text-xl mr-3", children: icon }), _jsx("h3", { className: "text-lg font-semibold text-white", children: title })] }) }), _jsx("div", { className: "p-6", children: children })] }));
    const FormGroup = ({ label, children, required = false, className = "" }) => (_jsxs("div", { className: `form-group ${className}`, children: [_jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [label, required && _jsx("span", { className: "text-red-500 ml-1", children: "*" })] }), children] }));
    const Input = ({ type = "text", name, value, onChange, placeholder, required = false, className = "" }) => (_jsx("input", { type: type, name: name, value: value, onChange: onChange, placeholder: placeholder, required: required, className: `w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:bg-gray-50 focus:bg-white shadow-sm hover:shadow-md focus:shadow-lg ${className}` }));
    const Select = ({ name, value, onChange, options, placeholder, required = false, displayKey, valueKey }) => (_jsxs("select", { name: name, value: value, onChange: onChange, required: required, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:bg-gray-50 focus:bg-white shadow-sm hover:shadow-md focus:shadow-lg", children: [_jsx("option", { value: "", children: placeholder }), options.map((option, index) => (_jsx("option", { value: option[valueKey], children: option[displayKey] }, index)))] }));
    const FileUpload = () => (_jsx("div", { className: "space-y-4", children: _jsxs("div", { className: `relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${dragActive
                ? 'border-blue-500 bg-blue-50'
                : formData.document
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-300 hover:border-gray-400'}`, onDragEnter: handleDrag, onDragLeave: handleDrag, onDragOver: handleDrag, onDrop: handleDrop, children: [_jsx("input", { type: "file", name: "document", onChange: handleFileChange, accept: "application/pdf", className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer" }), formData.document ? (_jsxs("div", { className: "space-y-3", children: [_jsx("div", { className: "flex items-center justify-center", children: _jsx("div", { className: "bg-green-100 p-3 rounded-full", children: _jsx("svg", { className: "w-8 h-8 text-green-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }) }), _jsxs("div", { children: [_jsx("p", { className: "text-lg font-medium text-green-800", children: "File Uploaded Successfully!" }), _jsx("p", { className: "text-sm text-green-600 mt-1", children: formData.document.name }), _jsxs("p", { className: "text-xs text-gray-500 mt-2", children: ["Size: ", (formData.document.size / 1024 / 1024).toFixed(2), " MB"] })] }), _jsxs("button", { type: "button", onClick: removeFile, className: "inline-flex items-center px-4 py-2 border border-red-300 rounded-lg text-sm font-medium text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200", children: [_jsx("svg", { className: "w-4 h-4 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) }), "Remove File"] })] })) : (_jsxs("div", { className: "space-y-3", children: [_jsx("div", { className: "flex items-center justify-center", children: _jsx("div", { className: "bg-gray-100 p-3 rounded-full", children: _jsx("svg", { className: "w-8 h-8 text-gray-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" }) }) }) }), _jsxs("div", { children: [_jsx("p", { className: "text-lg font-medium text-gray-700", children: "Upload Document" }), _jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Drag and drop your PDF file here, or click to browse" }), _jsx("p", { className: "text-xs text-gray-400 mt-2", children: "Only PDF files are accepted (Max size: 10MB)" })] })] }))] }) }));
    const StepIndicator = () => {
        const steps = [
            { number: 1, title: "Personal Info", icon: "👤" },
            { number: 2, title: "Demographics", icon: "📊" },
            { number: 3, title: "Place of Birth", icon: "🌍" },
            { number: 4, title: "Current Address", icon: "🏠" },
            { number: 5, title: "Contact Person", icon: "📞" },
            { number: 6, title: "Academic Info", icon: "🎓" },
        ];
        return (_jsx("div", { className: "mb-8", children: _jsx("div", { className: "flex items-center justify-between", children: steps.map((step, index) => (_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: `flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-200 ${currentStep === step.number
                                ? 'bg-blue-600 border-blue-600 text-white'
                                : currentStep > step.number
                                    ? 'bg-green-500 border-green-500 text-white'
                                    : 'bg-white border-gray-300 text-gray-400'}`, children: currentStep > step.number ? (_jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) })) : (_jsx("span", { className: "text-sm font-semibold", children: step.number })) }), _jsx("div", { className: "ml-3 hidden sm:block", children: _jsx("p", { className: `text-sm font-medium ${currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'}`, children: step.title }) }), index < steps.length - 1 && (_jsx("div", { className: `hidden sm:block w-16 h-0.5 mx-4 ${currentStep > step.number ? 'bg-green-500' : 'bg-gray-300'}` }))] }, step.number))) }) }));
    };
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("div", { className: "text-center mb-8", children: _jsxs("div", { className: "bg-white rounded-2xl shadow-xl p-8 border border-gray-200", children: [_jsx("div", { className: "flex items-center justify-center mb-4", children: _jsx("div", { className: "bg-blue-100 p-3 rounded-full", children: _jsx("svg", { className: "w-8 h-8 text-blue-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" }) }) }) }), _jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-2", children: "Student Registration" }), _jsx("h2", { className: "text-xl font-semibold text-blue-600 mb-4", children: "Deutsche Medizin College" }), _jsx("p", { className: "text-gray-600 leading-relaxed max-w-2xl mx-auto", children: "Complete the form below to register for undergraduate programs. All required fields must be filled accurately." })] }) }), _jsx(StepIndicator, {}), message.text && (_jsx("div", { className: `mb-6 p-4 rounded-lg ${message.type === 'success'
                        ? 'bg-green-50 border border-green-200 text-green-800'
                        : 'bg-red-50 border border-red-200 text-red-800'}`, children: _jsxs("div", { className: "flex items-center", children: [_jsx("span", { className: "text-lg mr-2", children: message.type === 'success' ? '✅' : '❌' }), message.text] }) })), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-8", children: [currentStep === 1 && (_jsx(FormSection, { title: "Personal Information", icon: "\uD83D\uDC64", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsx(FormGroup, { label: "First Name (Amharic)", required: true, children: _jsx(Input, { name: "firstNameAMH", value: formData.firstNameAMH, onChange: handleInputChange, placeholder: "Enter first name in Amharic", required: true }) }), _jsx(FormGroup, { label: "First Name (English)", required: true, children: _jsx(Input, { name: "firstNameENG", value: formData.firstNameENG, onChange: handleInputChange, placeholder: "Enter first name in English", required: true }) }), _jsx(FormGroup, { label: "Father Name (Amharic)", required: true, children: _jsx(Input, { name: "fatherNameAMH", value: formData.fatherNameAMH, onChange: handleInputChange, placeholder: "Enter father's name in Amharic", required: true }) }), _jsx(FormGroup, { label: "Father Name (English)", required: true, children: _jsx(Input, { name: "fatherNameENG", value: formData.fatherNameENG, onChange: handleInputChange, placeholder: "Enter father's name in English", required: true }) }), _jsx(FormGroup, { label: "Grandfather Name (Amharic)", required: true, children: _jsx(Input, { name: "grandfatherNameAMH", value: formData.grandfatherNameAMH, onChange: handleInputChange, placeholder: "Enter grandfather's name in Amharic", required: true }) }), _jsx(FormGroup, { label: "Grandfather Name (English)", required: true, children: _jsx(Input, { name: "grandfatherNameENG", value: formData.grandfatherNameENG, onChange: handleInputChange, placeholder: "Enter grandfather's name in English", required: true }) }), _jsx(FormGroup, { label: "Mother Name (Amharic)", required: true, children: _jsx(Input, { name: "motherNameAMH", value: formData.motherNameAMH, onChange: handleInputChange, placeholder: "Enter mother's name in Amharic", required: true }) }), _jsx(FormGroup, { label: "Mother Name (English)", required: true, children: _jsx(Input, { name: "motherNameENG", value: formData.motherNameENG, onChange: handleInputChange, placeholder: "Enter mother's name in English", required: true }) }), _jsx(FormGroup, { label: "Mother Father Name (Amharic)", required: true, children: _jsx(Input, { name: "motherFatherNameAMH", value: formData.motherFatherNameAMH, onChange: handleInputChange, placeholder: "Enter mother's father name in Amharic", required: true }) }), _jsx(FormGroup, { label: "Mother Father Name (English)", required: true, children: _jsx(Input, { name: "motherFatherNameENG", value: formData.motherFatherNameENG, onChange: handleInputChange, placeholder: "Enter mother's father name in English", required: true }) })] }) })), currentStep === 2 && (_jsx(FormSection, { title: "Demographic Details", icon: "\uD83D\uDCCA", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [_jsx(FormGroup, { label: "Gender", required: true, children: _jsx(Select, { name: "gender", value: formData.gender, onChange: handleInputChange, options: dropdownData.genders, placeholder: "Select gender", required: true, displayKey: "gender", valueKey: "gender" }) }), _jsx(FormGroup, { label: "Age", required: true, children: _jsx(Input, { type: "number", name: "age", value: formData.age, onChange: handleInputChange, placeholder: "Enter age", required: true }) }), _jsx(FormGroup, { label: "Phone Number", required: true, children: _jsx(Input, { type: "tel", name: "phoneNumber", value: formData.phoneNumber, onChange: handleInputChange, placeholder: "+251912345678", required: true }) }), _jsx(FormGroup, { label: "Date of Birth (Ethiopian Calendar)", required: true, children: _jsx(Input, { name: "dateOfBirthEC", value: formData.dateOfBirthEC, onChange: handleInputChange, placeholder: "2015-01-01", required: true }) }), _jsx(FormGroup, { label: "Date of Birth (Gregorian Calendar)", required: true, children: _jsx(Input, { type: "date", name: "dateOfBirthGC", value: formData.dateOfBirthGC, onChange: handleInputChange, placeholder: "", required: true }) }), _jsx(FormGroup, { label: "Email Address", children: _jsx(Input, { type: "email", name: "email", value: formData.email, onChange: handleInputChange, placeholder: "abebe@example.com" }) }), _jsx(FormGroup, { label: "Marital Status", required: true, children: _jsx(Select, { name: "maritalStatus", value: formData.maritalStatus, onChange: handleInputChange, options: dropdownData.maritalStatuses, placeholder: "Select marital status", required: true, displayKey: "maritalStatus", valueKey: "maritalStatus" }) }), _jsx(FormGroup, { label: "Impairment", children: _jsx(Select, { name: "impairmentCode", value: formData.impairmentCode, onChange: handleInputChange, options: dropdownData.impairments, placeholder: "Select impairment (if any)", displayKey: "impairment", valueKey: "impairmentCode" }) })] }) })), currentStep === 3 && (_jsx(FormSection, { title: "Place of Birth", icon: "\uD83C\uDF0D", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsx(FormGroup, { label: "Region", required: true, children: _jsx(Select, { name: "placeOfBirthRegionCode", value: formData.placeOfBirthRegionCode, onChange: handleInputChange, options: dropdownData.regions, placeholder: "Select region", required: true, displayKey: "region", valueKey: "regionCode" }) }), _jsx(FormGroup, { label: "Zone", required: true, children: _jsx(Select, { name: "placeOfBirthZoneCode", value: formData.placeOfBirthZoneCode, onChange: handleInputChange, options: dropdownData.zones, placeholder: "Select zone", required: true, displayKey: "zone", valueKey: "zoneCode" }) }), _jsx(FormGroup, { label: "Woreda", required: true, children: _jsx(Select, { name: "placeOfBirthWoredaCode", value: formData.placeOfBirthWoredaCode, onChange: handleInputChange, options: dropdownData.woredas, placeholder: "Select woreda", required: true, displayKey: "woreda", valueKey: "woredaCode" }) })] }) })), currentStep === 4 && (_jsx(FormSection, { title: "Current Address", icon: "\uD83C\uDFE0", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsx(FormGroup, { label: "Region", required: true, children: _jsx(Select, { name: "currentAddressRegionCode", value: formData.currentAddressRegionCode, onChange: handleInputChange, options: dropdownData.regions, placeholder: "Select region", required: true, displayKey: "region", valueKey: "regionCode" }) }), _jsx(FormGroup, { label: "Zone", required: true, children: _jsx(Select, { name: "currentAddressZoneCode", value: formData.currentAddressZoneCode, onChange: handleInputChange, options: dropdownData.zones, placeholder: "Select zone", required: true, displayKey: "zone", valueKey: "zoneCode" }) }), _jsx(FormGroup, { label: "Woreda", required: true, children: _jsx(Select, { name: "currentAddressWoredaCode", value: formData.currentAddressWoredaCode, onChange: handleInputChange, options: dropdownData.woredas, placeholder: "Select woreda", required: true, displayKey: "woreda", valueKey: "woredaCode" }) })] }) })), currentStep === 5 && (_jsx(FormSection, { title: "Emergency Contact Person", icon: "\uD83D\uDCDE", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsx(FormGroup, { label: "First Name (Amharic)", required: true, children: _jsx(Input, { name: "contactPersonFirstNameAMH", value: formData.contactPersonFirstNameAMH, onChange: handleInputChange, placeholder: "Enter contact person's first name in Amharic", required: true }) }), _jsx(FormGroup, { label: "First Name (English)", required: true, children: _jsx(Input, { name: "contactPersonFirstNameENG", value: formData.contactPersonFirstNameENG, onChange: handleInputChange, placeholder: "Enter contact person's first name in English", required: true }) }), _jsx(FormGroup, { label: "Last Name (Amharic)", required: true, children: _jsx(Input, { name: "contactPersonLastNameAMH", value: formData.contactPersonLastNameAMH, onChange: handleInputChange, placeholder: "Enter contact person's last name in Amharic", required: true }) }), _jsx(FormGroup, { label: "Last Name (English)", required: true, children: _jsx(Input, { name: "contactPersonLastNameENG", value: formData.contactPersonLastNameENG, onChange: handleInputChange, placeholder: "Enter contact person's last name in English", required: true }) }), _jsx(FormGroup, { label: "Phone Number", required: true, children: _jsx(Input, { type: "tel", name: "contactPersonPhoneNumber", value: formData.contactPersonPhoneNumber, onChange: handleInputChange, placeholder: "+251987654321", required: true }) }), _jsx(FormGroup, { label: "Relation", children: _jsx(Input, { name: "contactPersonRelation", value: formData.contactPersonRelation, onChange: handleInputChange, placeholder: "e.g., Brother, Sister, Parent" }) })] }) })), currentStep === 6 && (_jsx(FormSection, { title: "Academic Information", icon: "\uD83C\uDF93", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsx(FormGroup, { label: "School Background", required: true, children: _jsx(Select, { name: "schoolBackgroundId", value: formData.schoolBackgroundId, onChange: handleInputChange, options: dropdownData.schoolBackgrounds, placeholder: "Select school background", required: true, displayKey: "background", valueKey: "id" }) }), _jsx(FormGroup, { label: "Department Enrolled", required: true, children: _jsx(Select, { name: "departmentEnrolledId", value: formData.departmentEnrolledId, onChange: handleInputChange, options: dropdownData.departments, placeholder: "Select department", required: true, displayKey: "deptName", valueKey: "dptID" }) }), _jsx(FormGroup, { label: "Program Modality", required: true, children: _jsx(Select, { name: "programModalityCode", value: formData.programModalityCode, onChange: handleInputChange, options: dropdownData.programModalities, placeholder: "Select program modality", required: true, displayKey: "modality", valueKey: "modalityCode" }) }), _jsx(FormGroup, { label: "Class Year", required: true, children: _jsx(Select, { name: "classYearId", value: formData.classYearId, onChange: handleInputChange, options: dropdownData.classYears, placeholder: "Select class year", required: true, displayKey: "classYear", valueKey: "id" }) }), _jsx(FormGroup, { label: "Semester", required: true, children: _jsx(Select, { name: "semesterCode", value: formData.semesterCode, onChange: handleInputChange, options: dropdownData.semesters, placeholder: "Select semester", required: true, displayKey: "academicPeriod", valueKey: "academicPeriodCode" }) }), _jsx(FormGroup, { label: "Document (PDF)", children: _jsx(FileUpload, {}) })] }) })), _jsxs("div", { className: "flex justify-between items-center pt-6", children: [_jsx("button", { type: "button", onClick: prevStep, disabled: currentStep === 1, className: `px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${currentStep === 1
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-500'}`, children: _jsxs("div", { className: "flex items-center", children: [_jsx("svg", { className: "w-5 h-5 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }), "Previous"] }) }), _jsx("div", { className: "flex items-center space-x-4", children: currentStep < 6 ? (_jsx("button", { type: "button", onClick: nextStep, disabled: !validateStep(currentStep), className: `px-8 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${validateStep(currentStep)
                                            ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white focus:ring-blue-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`, children: _jsxs("div", { className: "flex items-center", children: ["Next", _jsx("svg", { className: "w-5 h-5 ml-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })] }) })) : (_jsx("button", { type: "submit", disabled: loading || !validateStep(currentStep), className: `px-8 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${loading || !validateStep(currentStep)
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white focus:ring-green-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'}`, children: loading ? (_jsxs("div", { className: "flex items-center", children: [_jsxs("svg", { className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }), "Submitting..."] })) : (_jsxs("div", { className: "flex items-center", children: [_jsx("svg", { className: "w-5 h-5 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }), "Submit Registration"] })) })) })] })] })] }) }));
};
export default StudentRegistrationForm;
