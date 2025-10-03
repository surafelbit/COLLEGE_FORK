import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Calendar, GraduationCap, Edit, Camera, Download, } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useModal } from "@/hooks/Modal";
import apiService from "@/components/api/apiService";
import endPoints from "@/components/api/endPoints";
import LoadingSpinner from "@/designs/LoadingSpinner";
import UserNotFound from "@/designs/UserNotFound";
export default function ApplicantDetail() {
    const navigate = useNavigate();
    const [status, setStatus] = useState(null); // Tracks acceptance/rejection status
    const [remarks, setRemarks] = useState(""); // Stores remarks for acceptance/rejection
    const [password, setPassword] = useState(""); // Stores new password
    const [confirmPassword, setConfirmPassword] = useState(""); // Stores confirm password
    const [passwordError, setPasswordError] = useState(""); // Stores password error message
    const [applicantData, setApplicant] = useState();
    const [loading, setIsLoading] = useState(true);
    const [photoUrl, setPhotoUrl] = useState(null);
    const [documentUrl, setDocumentUrl] = useState(null);
    const { id } = useParams();
    console.log(id);
    // Modal for acceptance extra form
    const { openModal, closeModal } = useModal();
    const [actionBusy, setActionBusy] = useState(false);
    // const applicantData = {
    //   firstNameAMH: "አበበ",
    //   firstNameENG: "Abebe",
    //   fatherNameAMH: "ከበደ",
    //   fatherNameENG: "Kebede",
    //   grandfatherNameAMH: "ወልደ",
    //   grandfatherNameENG: "Welde",
    //   motherNameAMH: "ልደት",
    //   motherNameENG: "Lidet",
    //   motherFatherNameAMH: "ታደሰ",
    //   motherFatherNameENG: "Tadesse",
    //   gender: "Male",
    //   age: 20,
    //   phoneNumber: "+251912345678",
    //   dateOfBirthEC: "15/06/2005",
    //   dateOfBirthGC: "1997-02-22",
    //   placeOfBirthWoreda: "Yeka",
    //   placeOfBirthZone: "Addis Ababa",
    //   placeOfBirthRegion: "Addis Ababa",
    //   currentAddressWoreda: "Bole",
    //   currentAddressZone: "Addis Ababa",
    //   currentAddressRegion: "Addis Ababa",
    //   email: "abebe.kebede@example.com",
    //   maritalStatus: "Single",
    //   impairment: "None",
    //   schoolBackground: "Public",
    //   studentPhoto:
    //     "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIOJj4kLCIuNDIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy",
    //   contactPersonFirstNameAMH: "ሰለሞን",
    //   contactPersonFirstNameENG: "Solomon",
    //   contactPersonLastNameAMH: "ገብረ",
    //   contactPersonLastNameENG: "Gebre",
    //   contactPersonPhoneNumber: "+251987654321",
    //   contactPersonRelation: "Brother",
    //   departmentEnrolled: "Computer Science",
    //   programModality: "Regular",
    //   grade12ExamResult:
    //     "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIOJj4kLCIuNDIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy",
    // };
    // setApplicant(applicantData);
    useEffect(() => {
        async function getter() {
            try {
                setIsLoading(true); // Set loading to true
                const url = endPoints.applicantDetail.replace(":id", id);
                const response = await apiService.get(url);
                setApplicant(response);
            }
            catch (error) {
                console.error("Error fetching applicant data:", error);
            }
            finally {
                setIsLoading(false); // Set loading to false
            }
        }
        getter();
    }, [id]);
    // Load applicant photo and document as blobs
    useEffect(() => {
        let revokedPhotoUrl = null;
        let revokedDocumentUrl = null;
        async function loadBlobs() {
            if (!id)
                return;
            try {
                // Photo
                const photoBlob = await apiService.get(endPoints.applicantPhoto.replace(":id", id), {}, { responseType: "blob", headers: { requiresAuth: true } });
                if (photoBlob && photoBlob.size > 0 && photoBlob.type.startsWith("image")) {
                    const url = URL.createObjectURL(photoBlob);
                    setPhotoUrl(url);
                    revokedPhotoUrl = url;
                }
                else {
                    setPhotoUrl(null);
                }
                // Document (PDF)
                const docBlob = await apiService.get(endPoints.applicantDocument.replace(":id", id), {}, { responseType: "blob", headers: { requiresAuth: true } });
                if (docBlob && docBlob.size > 0) {
                    const url = URL.createObjectURL(docBlob);
                    setDocumentUrl(url);
                    revokedDocumentUrl = url;
                }
                else {
                    setDocumentUrl(null);
                }
            }
            catch (_) {
                setPhotoUrl(null);
                setDocumentUrl(null);
            }
        }
        loadBlobs();
        return () => {
            if (revokedPhotoUrl)
                URL.revokeObjectURL(revokedPhotoUrl);
            if (revokedDocumentUrl)
                URL.revokeObjectURL(revokedDocumentUrl);
        };
    }, [id]);
    // Removed unused effect
    async function callUpdateStatus(payload) {
        if (!id)
            return;
        setActionBusy(true);
        try {
            const url = endPoints.applicantUpdateStatus.replace(":id", id);
            const response = await apiService.put(url, payload, { headers: { requiresAuth: true } });
            // Update local UI state when backend confirms
            setStatus(payload.status === "ACCEPTED" ? "accepted" : payload.status === "REJECTED" ? "rejected" : payload.status);
            if (response) {
                setApplicant((prev) => ({ ...(prev || {}), applicationStatus: payload.status }));
            }
            return true;
        }
        catch (e) {
            console.error("Failed to update status", e);
            return false;
        }
        finally {
            setActionBusy(false);
        }
    }
    function openAcceptModal() {
        const AcceptForm = () => {
            const [username, setUsername] = useState("");
            const [passwordLocal, setPasswordLocal] = useState("");
            const [documentStatus, setDocumentStatus] = useState("");
            const [remark, setRemark] = useState("");
            const [isTransfer, setIsTransfer] = useState(false);
            const [grade12Result, setGrade12Result] = useState("");
            return (_jsxs("div", { className: "w-[92vw] sm:w-[560px] max-w-[95vw] p-6", children: [_jsx("h2", { className: "text-xl font-semibold mb-4", children: "Accept Applicant" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-1", children: "Username" }), _jsx("input", { className: "w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-900", value: username, onChange: (e) => setUsername(e.target.value), placeholder: "Enter username" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-1", children: "Password" }), _jsx("input", { type: "password", className: "w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-900", value: passwordLocal, onChange: (e) => setPasswordLocal(e.target.value), placeholder: "Enter password" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-1", children: "Document Status" }), _jsxs("select", { className: "w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-900", value: documentStatus, onChange: (e) => setDocumentStatus(e.target.value), children: [_jsx("option", { value: "", children: "Select status" }), _jsx("option", { value: "COMPLETE", children: "COMPLETE" }), _jsx("option", { value: "INCOMPLETE", children: "INCOMPLETE" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-1", children: "Remark (optional)" }), _jsx("textarea", { className: "w-full px-3 py-2 border rounded-md h-24 bg-white dark:bg-gray-900", value: remark, onChange: (e) => setRemark(e.target.value), placeholder: "Write any notes..." })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("input", { id: "acceptIsTransfer", type: "checkbox", className: "h-4 w-4", checked: isTransfer, onChange: (e) => setIsTransfer(e.target.checked) }), _jsx("label", { htmlFor: "acceptIsTransfer", className: "text-sm", children: "Is Transfer" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-1", children: "Grade 12 Result (optional)" }), _jsx("input", { type: "number", min: 0, max: 700, className: "w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-900", value: grade12Result, onChange: (e) => setGrade12Result(e.target.value), placeholder: "0 - 700" })] })] }), _jsxs("div", { className: "mt-6 flex justify-end space-x-3", children: [_jsx("button", { className: "px-4 py-2 rounded-md border", onClick: closeModal, disabled: actionBusy, children: "Cancel" }), _jsx("button", { className: "px-4 py-2 rounded-md bg-blue-600 text-white disabled:opacity-60", onClick: async () => {
                                    if (!username.trim()) {
                                        alert("Username is required");
                                        return;
                                    }
                                    if (!passwordLocal.trim()) {
                                        alert("Password is required");
                                        return;
                                    }
                                    if (!documentStatus) {
                                        alert("Please select document status");
                                        return;
                                    }
                                    const g12 = grade12Result ? Number(grade12Result) : undefined;
                                    if (g12 !== undefined && (isNaN(g12) || g12 < 0 || g12 > 700)) {
                                        alert("Grade 12 result must be a number between 0 and 700");
                                        return;
                                    }
                                    const ok = await callUpdateStatus({
                                        status: "ACCEPTED",
                                        username,
                                        password: passwordLocal,
                                        documentStatus,
                                        remark: remark || undefined,
                                        isTransfer,
                                        grade12Result: g12,
                                    });
                                    if (ok)
                                        closeModal();
                                }, disabled: actionBusy, children: "Confirm" })] })] }));
        };
        openModal(_jsx(AcceptForm, {}));
    }
    async function handleRejectClick() {
        // Optional: prompt for remark if empty
        const payload = { status: "REJECTED" };
        if (remarks && remarks.trim())
            payload.remark = remarks.trim();
        const ok = await callUpdateStatus(payload);
        if (ok) {
            // nothing else to do; UI already reflects
        }
    }
    const handlePasswordSubmit = () => {
        if (password !== confirmPassword) {
            setPasswordError("Passwords do not match.");
            return;
        }
        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters long.");
            return;
        }
        setPasswordError("");
        alert("Password successfully set!");
        // Here you would typically send the password to a backend API
    };
    if (loading) {
        return _jsx(LoadingSpinner, {});
    }
    if (!applicantData) {
        return _jsx(UserNotFound, { username: "Applicant" });
    }
    return (_jsxs("div", { className: "space-y-6 p-4 sm:p-6 lg:p-8", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-3xl font-bold", children: "Applicant Details" }), _jsxs("div", { className: "flex space-x-2", children: [_jsxs(Link, { to: "/registrar/applications", onClick: (e) => { e.preventDefault(); navigate(-1); }, className: "inline-flex items-center text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors", children: [_jsx("span", { className: "mr-2", children: "\u2190" }), _jsx("span", { children: "Back to Applicant List" })] }), _jsxs(Button, { children: [_jsx(Edit, { className: "mr-2 h-4 w-4" }), "Edit Applicant"] })] })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsxs(Card, { className: "lg:col-span-1", children: [_jsxs(CardHeader, { className: "text-center", children: [_jsxs("div", { className: "relative mx-auto", children: [_jsxs(Avatar, { className: "w-32 h-32", children: [_jsx(AvatarImage, { src: photoUrl || applicantData?.studentPhoto }), _jsxs(AvatarFallback, { className: "text-2xl", children: [applicantData.firstNameENG[0], applicantData.fatherNameENG[0]] })] }), _jsx(Button, { size: "icon", variant: "secondary", className: "absolute bottom-0 right-0 rounded-full", children: _jsx(Camera, { className: "h-4 w-4" }) })] }), _jsxs(CardTitle, { className: "mt-4", children: [applicantData.firstNameENG, " ", applicantData.fatherNameENG] }), _jsxs(CardDescription, { children: [applicantData.departmentEnrolled, " Applicant"] }), _jsx(Badge, { variant: "secondary", className: "mt-2", children: applicantData.programModality })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center space-x-2 text-sm", children: [_jsx(Mail, { className: "h-4 w-4 text-gray-500" }), _jsx("span", { children: applicantData.email })] }), _jsxs("div", { className: "flex items-center space-x-2 text-sm", children: [_jsx(Phone, { className: "h-4 w-4 text-gray-500" }), _jsx("span", { children: applicantData.phoneNumber })] }), _jsxs("div", { className: "flex items-center space-x-2 text-sm", children: [_jsx(MapPin, { className: "h-4 w-4 text-gray-500" }), _jsxs("span", { children: [applicantData.currentAddressWoreda, ",", " ", applicantData.currentAddressRegion] })] }), _jsxs("div", { className: "flex items-center space-x-2 text-sm", children: [_jsx(Calendar, { className: "h-4 w-4 text-gray-500" }), _jsx("span", { children: "Application: September 2023" })] })] })] }), _jsxs(Card, { className: "lg:col-span-2", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Personal Information" }), _jsx(CardDescription, { children: "Applicant personal details and contact information" })] }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "firstNameAMH", children: "First Name (Amharic)" }), _jsx(Input, { id: "firstNameAMH", value: applicantData.firstNameAMH, readOnly: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "firstNameENG", children: "First Name (English)" }), _jsx(Input, { id: "firstNameENG", value: applicantData.firstNameENG, readOnly: true })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "fatherNameAMH", children: "Father's Name (Amharic)" }), _jsx(Input, { id: "fatherNameAMH", value: applicantData.fatherNameAMH, readOnly: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "fatherNameENG", children: "Father's Name (English)" }), _jsx(Input, { id: "fatherNameENG", value: applicantData.fatherNameENG, readOnly: true })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "grandfatherNameAMH", children: "Grandfather's Name (Amharic)" }), _jsx(Input, { id: "grandfatherNameAMH", value: applicantData.grandfatherNameAMH, readOnly: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "grandfatherNameENG", children: "Grandfather's Name (English)" }), _jsx(Input, { id: "grandfatherNameENG", value: applicantData.grandfatherNameENG, readOnly: true })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "motherNameAMH", children: "Mother's Name (Amharic)" }), _jsx(Input, { id: "motherNameAMH", value: applicantData.motherNameAMH, readOnly: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "motherNameENG", children: "Mother's Name (English)" }), _jsx(Input, { id: "motherNameENG", value: applicantData.motherNameENG, readOnly: true })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "motherFatherNameAMH", children: "Mother's Father Name (Amharic)" }), _jsx(Input, { id: "motherFatherNameAMH", value: applicantData.motherFatherNameAMH, readOnly: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "motherFatherNameENG", children: "Mother's Father Name (English)" }), _jsx(Input, { id: "motherFatherNameENG", value: applicantData.motherFatherNameENG, readOnly: true })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "dateOfBirthGC", children: "Date of Birth (GC)" }), _jsx(Input, { id: "dateOfBirthGC", value: applicantData.dateOfBirthGC, type: "date", readOnly: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "gender", children: "Gender" }), _jsx(Input, { id: "gender", value: applicantData.gender, readOnly: true })] })] }), _jsx(Separator, {}), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "currentAddress", children: "Current Address" }), _jsx(Input, { id: "currentAddress", value: `${applicantData.currentAddressWoreda}, ${applicantData.currentAddressZone}, ${applicantData.currentAddressRegion}`, readOnly: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "placeOfBirth", children: "Place of Birth" }), _jsx(Input, { id: "placeOfBirth", value: `${applicantData.placeOfBirthWoreda}, ${applicantData.placeOfBirthZone}, ${applicantData.placeOfBirthRegion}`, readOnly: true })] })] })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center", children: [_jsx(GraduationCap, { className: "mr-2 h-5 w-5" }), "Academic Information"] }), _jsx(CardDescription, { children: "Applicant academic details and program information" })] }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "departmentEnrolled", children: "Department Applied" }), _jsx(Input, { id: "departmentEnrolled", value: applicantData.departmentEnrolled, readOnly: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "programModality", children: "Program Modality" }), _jsx(Input, { id: "programModality", value: applicantData.programModality, readOnly: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "schoolBackground", children: "School Background" }), _jsx(Input, { id: "schoolBackground", value: applicantData.schoolBackground, readOnly: true })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "classYear", children: "Academic Year" }), _jsx(Input, { id: "classYear", value: applicantData.classYearName || "N/A", readOnly: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "semester", children: "Semester" }), _jsx(Input, { id: "semester", value: applicantData.semesterName || "N/A", readOnly: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "departmentName", children: "Department" }), _jsx(Input, { id: "departmentName", value: applicantData.departmentEnrolledName || "N/A", readOnly: true })] })] }), _jsx(Separator, {}), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "grade12ExamResult", children: "Grade 12 Exam Result" }), _jsx("img", { src: applicantData.grade12ExamResult, alt: "Grade 12 Exam Result", className: "w-64 h-36 object-cover rounded-lg border-2 border-gray-200 dark:border-gray-700" })] })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center", children: [_jsx(Download, { className: "mr-2 h-5 w-5" }), " Applicant Document"] }), _jsx(CardDescription, { children: "Uploaded application document (PDF)" })] }), _jsx(CardContent, { className: "space-y-4", children: documentUrl ? (_jsxs("div", { className: "space-y-3", children: [_jsx("div", { className: "w-full h-96 border rounded-lg overflow-hidden", children: _jsx("iframe", { title: "Applicant Document", src: documentUrl, className: "w-full h-full" }) }), _jsx("div", { children: _jsxs("a", { href: documentUrl, download: `applicant-${id}-document.pdf`, className: "inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700", children: [_jsx(Download, { className: "mr-2 h-4 w-4" }), " Download PDF"] }) })] })) : (_jsx("div", { className: "text-sm text-gray-500", children: "No document available." })) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Emergency Contact" }), _jsx(CardDescription, { children: "Emergency contact information" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "contactPersonFirstNameAMH", children: "Contact First Name (Amharic)" }), _jsx(Input, { id: "contactPersonFirstNameAMH", value: applicantData.contactPersonFirstNameAMH, readOnly: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "contactPersonFirstNameENG", children: "Contact First Name (English)" }), _jsx(Input, { id: "contactPersonFirstNameENG", value: applicantData.contactPersonFirstNameENG, readOnly: true })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "contactPersonLastNameAMH", children: "Contact Last Name (Amharic)" }), _jsx(Input, { id: "contactPersonLastNameAMH", value: applicantData.contactPersonLastNameAMH, readOnly: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "contactPersonLastNameENG", children: "Contact Last Name (English)" }), _jsx(Input, { id: "contactPersonLastNameENG", value: applicantData.contactPersonLastNameENG, readOnly: true })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "contactPersonPhoneNumber", children: "Phone Number" }), _jsx(Input, { id: "contactPersonPhoneNumber", value: applicantData.contactPersonPhoneNumber, readOnly: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "contactPersonRelation", children: "Relationship" }), _jsx(Input, { id: "contactPersonRelation", value: applicantData.contactPersonRelation, readOnly: true })] })] })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Acceptance/Rejection" }), _jsx(CardDescription, { children: "Review and decide on applicant status" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex space-x-4", children: [_jsx(Button, { variant: "default", onClick: openAcceptModal, disabled: actionBusy || status === "accepted", className: "bg-green-600 hover:bg-green-700", children: "Accept Applicant" }), _jsx(Button, { variant: "destructive", onClick: handleRejectClick, disabled: actionBusy || status === "rejected", children: "Reject Applicant" })] }), status && (_jsxs(Alert, { children: [_jsx(AlertTitle, { children: status === "accepted"
                                            ? "Applicant Accepted"
                                            : "Applicant Rejected" }), _jsxs(AlertDescription, { children: ["Status has been set to ", status, ". Remarks: ", remarks] })] }))] })] }), status === "accepted" && (_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Create Applicant Password" }), _jsx(CardDescription, { children: "Set a new password for the accepted applicant" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "password", children: "New Password" }), _jsx(Input, { id: "password", type: "password", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Enter new password" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "confirmPassword", children: "Confirm Password" }), _jsx(Input, { id: "confirmPassword", type: "password", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), placeholder: "Confirm new password" })] }), passwordError && (_jsxs(Alert, { variant: "destructive", children: [_jsx(AlertTitle, { children: "Error" }), _jsx(AlertDescription, { children: passwordError })] })), _jsx(Button, { onClick: handlePasswordSubmit, children: "Set Password" })] })] }))] }));
}
