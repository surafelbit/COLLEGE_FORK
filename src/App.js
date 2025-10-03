import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "sonner";
// Public Pages
import LandingPage from "./pages/public/LandingPage";
import LoginPage from "./pages/public/LoginPage";
import RegisterPage from "./pages/public/RegisterPage";
import ForgotPasswordPage from "./pages/public/ForgotPasswordPage";
import MultiStepRegistrationForm from "./../src/registeration/MultiStepRegistrationForm";
import NotFound from "../src/pages/NotFound/NotFound";
import SigningUp from "./../src/registeration/SigningUp";
// Student Pages
import StudentLayout from "./layouts/StudentLayout";
import StudentDashboard from "./pages/student/Dashboard";
import StudentProfile from "./pages/student/Profile";
import StudentGrades from "./pages/student/Grades";
import StudentPayments from "./pages/student/Payments";
import StudentSetting from "./pages/student/Setting";
// Teacher Pages
import TeacherLayout from "./layouts/TeacherLayout";
import TeacherDashboard from "./pages/teacher/Dashboard";
import TeacherCourses from "./pages/teacher/Courses";
import TeacherStudents from "./pages/teacher/Students";
import TeacherAssessments from "./pages/teacher/Assessments";
import AssessmentPage from "./pages/teacher/AssessmentPage";
// Department Head Pages
import HeadLayout from "./layouts/HeadLayout";
import HeadDashboard from "./pages/head/Dashboard";
import HeadStudents from "./pages/head/Students";
import HeadTeachers from "./pages/head/Teachers";
import HeadCourses from "./pages/head/Courses";
import HeadReports from "./pages/head/Reports";
import HeadGrades from "./pages/head/Grades";
import CreateTeacher from "./pages/head/CreateTeacher";
// Registrar Pages
import RegistrarLayout from "./layouts/RegistrarLayout";
import RegistrarDashboard from "./pages/registrar/Dashboard";
import RegistrarApplications from "./pages/registrar/Applications";
import RegistrarDepartments from "./pages/registrar/Departments";
import RegistrarStudents from "./pages/registrar/Students";
import RegistrarCourses from "./pages/registrar/Courses";
import RegistrarAssessments from "./pages/registrar/Assessments";
import RegistrarBatches from "./pages/registrar/Batches";
import DepartmentDetail from "./pages/registrar/DepartmentDetail";
import StudentDetail from "./pages/registrar/StudentDetail";
import ApplicantDetail from "./pages/registrar/ApplicantDetail";
import CustomStudentTable from "./pages/registrar/CustomStudentTable";
import RejectedApplications from "./pages/registrar/RejectedApplications";
import LocationEditor from "./pages/registrar/settings/LocationEditor";
import AcademicYearEditor from "./pages/registrar/settings/AcademicYearEditor";
import ImpairmentEditor from "./pages/registrar/settings/ImpairmentEditor";
import CourseCategoriesEditor from "./pages/registrar/settings/CourseCategoriesEditor";
import NotificationsPage from "./pages/registrar/NotificationsPage";
// Finance Pages
import FinanceLayout from "./layouts/FinanceLayout";
import FinanceDashboard from "./pages/finance/Dashboard";
import FinancePayments from "./pages/finance/Payments";
import FinanceHistory from "./pages/finance/History";
import FinanceReports from "./pages/finance/Reports";
// Dean Pages
import DeanLayout from "./layouts/DeanLayout";
import DeanDashboard from "./pages/dean/Dashboard";
import DeanStudents from "./pages/dean/Students";
import DeanGrades from "./pages/dean/Grades";
import DeanReports from "./pages/dean/Reports";
import CreateDepartmentHead from "./pages/dean/CreateDepartmentHead";
import DeanDepartments from "./pages/dean/DeanDeparment";
import DeanDepartmentDetail from "./pages/dean/DeanDepartmentsDetails";
// Vice-Dean Pages
import ViceDeanLayout from "./layouts/ViceDeanLayout";
import ViceDeanDashboard from "./pages/vice-dean/Dashboard";
import ViceDeanStudents from "./pages/vice-dean/Students";
import ViceDeanGrades from "./pages/vice-dean/Grades";
import ViceDeanReports from "./pages/vice-dean/Reports";
import ViceCreateDepartmentHead from "./pages/vice-dean/CreateDepartmentHead";
import ViceDeanDepartments from "./pages/vice-dean/ViceDepartments";
import ViceDepartmentDetail from "./pages/vice-dean/ViceDepartmentDetail";
// Manager Pages
import ManagerLayout from "./layouts/ManagerLayout";
import ManagerDashboard from "./pages/manager/Dashboard";
import ManagerReports from "./pages/manager/Reports";
import ManagerSettings from "./pages/manager/Settings";
import BatchUpdateTable from "./pages/registrar/BatchUpdateTable";
import TenColumnEditableTablePage from "./TenColumnEditableTablePage";
import BatchesEditor from "./pages/registrar/settings/BatchesEditor";
import ProgramModalitiesEditor from "./pages/registrar/settings/ProgramModalitiesEditor";
import AttritionCausesEditor from "./pages/registrar/settings/AttritionCausesEditor";
import SemestersEditor from "./pages/registrar/settings/SemestersEditor";
import ClassYearsEditor from "./pages/registrar/settings/ClassYearsEditor";
import ManagerStudents from "./pages/manager/ManagerStudents";
import ManagerTeachers from "./pages/manager/ManagerTeachers";
import DeanProfile from "./pages/manager/DeanProfile";
import ViceDeanProfile from "./pages/manager/ViceDeanProfile";
import RegistrarProfile from "./pages/manager/RegistrarProfile";
function App() {
    return (_jsx(ThemeProvider, { defaultTheme: "light", storageKey: "college-ui-theme", children: _jsxs("div", { className: "min-h-screen bg-background", children: [_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(LandingPage, {}) }), _jsx(Route, { path: "/login", element: _jsx(SigningUp, {}) }), _jsx(Route, { path: "/some", element: _jsx(LocationEditor, {}) }), _jsx(Route, { path: "/register", element: _jsx(MultiStepRegistrationForm, {}) }), _jsx(Route, { path: "/forgot-password", element: _jsx(ForgotPasswordPage, {}) }), _jsxs(Route, { path: "/student", element: _jsx(StudentLayout, {}), children: [_jsx(Route, { index: true, element: _jsx(Navigate, { to: "dashboard", replace: true }) }), _jsx(Route, { path: "dashboard", element: _jsx(StudentDashboard, {}) }), _jsx(Route, { path: "profile", element: _jsx(StudentProfile, {}) }), _jsx(Route, { path: "grades", element: _jsx(StudentGrades, {}) }), _jsx(Route, { path: "payments", element: _jsx(StudentPayments, {}) }), _jsx(Route, { path: "settings", element: _jsx(StudentSetting, {}) })] }), _jsxs(Route, { path: "/teacher", element: _jsx(TeacherLayout, {}), children: [_jsx(Route, { index: true, element: _jsx(Navigate, { to: "dashboard", replace: true }) }), _jsx(Route, { path: "dashboard", element: _jsx(TeacherDashboard, {}) }), _jsx(Route, { path: "courses", element: _jsx(TeacherCourses, {}) }), _jsx(Route, { path: "students/:courseId", element: _jsx(TeacherStudents, {}) }), _jsx(Route, { path: "assessments", element: _jsx(TeacherAssessments, {}) }), _jsx(Route, { path: "assessments/:courseId", element: _jsx(AssessmentPage, {}) })] }), _jsxs(Route, { path: "/head", element: _jsx(HeadLayout, {}), children: [_jsx(Route, { index: true, element: _jsx(Navigate, { to: "dashboard", replace: true }) }), _jsx(Route, { path: "dashboard", element: _jsx(HeadDashboard, {}) }), _jsx(Route, { path: "students", element: _jsx(HeadStudents, {}) }), _jsx(Route, { path: "teachers", element: _jsx(HeadTeachers, {}) }), _jsx(Route, { path: "create-teacher", element: _jsx(CreateTeacher, {}) }), _jsx(Route, { path: "grades", element: _jsx(HeadGrades, {}) }), _jsx(Route, { path: "courses", element: _jsx(HeadCourses, {}) }), _jsx(Route, { path: "reports", element: _jsx(HeadReports, {}) })] }), _jsxs(Route, { path: "/registrar", element: _jsx(RegistrarLayout, {}), children: [_jsx(Route, { index: true, element: _jsx(Navigate, { to: "dashboard", replace: true }) }), _jsx(Route, { path: "departments", element: _jsx(RegistrarDepartments, {}) }), _jsx(Route, { path: "departments/:id", element: _jsx(DepartmentDetail, {}) }), _jsx(Route, { path: "applications/:id", element: _jsx(ApplicantDetail, {}) }), _jsx(Route, { path: "students/:id", element: _jsx(StudentDetail, {}) }), _jsx(Route, { path: "dashboard", element: _jsx(RegistrarDashboard, {}) }), _jsx(Route, { path: "applications", element: _jsx(RegistrarApplications, {}) }), _jsx(Route, { path: "settings/location", element: _jsx(LocationEditor, {}) }), _jsx(Route, { path: "settings/academic-years", element: _jsx(AcademicYearEditor, {}) }), _jsx(Route, { path: "settings/batches", element: _jsx(BatchesEditor, {}) }), _jsx(Route, { path: "settings/semesters", element: _jsx(SemestersEditor, {}) }), _jsx(Route, { path: "settings/class-years", element: _jsx(ClassYearsEditor, {}) }), _jsx(Route, { path: "settings/impairments", element: _jsx(ImpairmentEditor, {}) }), _jsx(Route, { path: "settings/program-modality", element: _jsx(ProgramModalitiesEditor, {}) }), _jsx(Route, { path: "settings/course-category", element: _jsx(CourseCategoriesEditor, {}) }), _jsx(Route, { path: "settings/attritions", element: _jsx(AttritionCausesEditor, {}) }), _jsx(Route, { path: "rejected-applications", element: _jsx(RejectedApplications, {}) }), _jsx(Route, { path: "rejected-applications/:id", element: _jsx(ApplicantDetail, {}) }), _jsx(Route, { path: "students", element: _jsx(RegistrarStudents, {}) }), _jsx(Route, { path: "assessments", element: _jsx(RegistrarAssessments, {}) }), _jsx(Route, { path: "scores", element: _jsx(BatchUpdateTable, {}) }), _jsx(Route, { path: "batches", element: _jsx(RegistrarBatches, {}) }), _jsx(Route, { path: "tables", element: _jsx(CustomStudentTable, {}) }), _jsx(Route, { path: "notifications", element: _jsx(NotificationsPage, {}) })] }), _jsxs(Route, { path: "/finance", element: _jsx(FinanceLayout, {}), children: [_jsx(Route, { path: "dashboard", element: _jsx(FinanceDashboard, {}) }), _jsx(Route, { path: "payments", element: _jsx(FinancePayments, {}) }), _jsx(Route, { path: "history", element: _jsx(FinanceHistory, {}) }), _jsx(Route, { path: "reports", element: _jsx(FinanceReports, {}) })] }), _jsxs(Route, { path: "/dean", element: _jsx(DeanLayout, {}), children: [_jsx(Route, { index: true, element: _jsx(Navigate, { to: "dashboard", replace: true }) }), _jsx(Route, { path: "dashboard", element: _jsx(DeanDashboard, {}) }), _jsx(Route, { path: "create-department-head", element: _jsx(CreateDepartmentHead, {}) }), _jsx(Route, { path: "students", element: _jsx(DeanStudents, {}) }), _jsx(Route, { path: "grades", element: _jsx(DeanGrades, {}) }), _jsx(Route, { path: "department", element: _jsx(DeanDepartments, {}) }), _jsx(Route, { path: "reports", element: _jsx(DeanReports, {}) }), _jsx(Route, { path: "departments/:id", element: _jsx(DeanDepartmentDetail, {}) })] }), _jsxs(Route, { path: "/vice-dean", element: _jsx(ViceDeanLayout, {}), children: [_jsx(Route, { index: true, element: _jsx(Navigate, { to: "dashboard", replace: true }) }), _jsx(Route, { path: "dashboard", element: _jsx(ViceDeanDashboard, {}) }), _jsx(Route, { path: "create-department-head", element: _jsx(ViceCreateDepartmentHead, {}) }), _jsx(Route, { path: "students", element: _jsx(ViceDeanStudents, {}) }), _jsx(Route, { path: "grades", element: _jsx(ViceDeanGrades, {}) }), _jsx(Route, { path: "reports", element: _jsx(ViceDeanReports, {}) }), _jsx(Route, { path: "department", element: _jsx(ViceDeanDepartments, {}) }), _jsx(Route, { path: "departments/:id", element: _jsx(ViceDepartmentDetail, {}) })] }), _jsxs(Route, { path: "/general-manager", element: _jsx(ManagerLayout, {}), children: [_jsx(Route, { index: true, element: _jsx(Navigate, { to: "dashboard", replace: true }) }), _jsx(Route, { path: "dashboard", element: _jsx(DeanDashboard, {}) }), _jsx(Route, { path: "students", element: _jsx(ManagerStudents, {}) }), _jsx(Route, { path: "students/:id", element: _jsx(StudentDetail, {}) }), _jsx(Route, { path: "reports", element: _jsx(DeanReports, {}) }), _jsx(Route, { path: "department", element: _jsx(DeanDepartments, {}) }), _jsx(Route, { path: "departments/:id", element: _jsx(DeanDepartmentDetail, {}) }), _jsx(Route, { path: "settings", element: _jsx(ManagerSettings, {}) }), _jsx(Route, { path: "teachers", element: _jsx(ManagerTeachers, {}) }), _jsx(Route, { path: "dean", element: _jsx(DeanProfile, {}) }), _jsx(Route, { path: "vice-dean", element: _jsx(ViceDeanProfile, {}) }), _jsx(Route, { path: "registrar", element: _jsx(RegistrarProfile, {}) })] }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }), _jsx(Toaster, {})] }) }));
}
export default App;
