import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// page container uses plain markup; remove unused card imports
import { useEffect, useMemo, useRef, useState } from "react";
import EditableTableRejected, {} from "@/components/Extra/EditableTableRejected";
import apiService from "@/components/api/apiService";
import endPoints from "@/components/api/endPoints";
export default function RejectedApplications() {
    const [searchText, setSearchText] = useState("");
    const [filteredDepartment, setFilteredDepartment] = useState("");
    const [rows, setRows] = useState([]);
    const objectUrlRefs = useRef([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let cancelled = false;
        async function load() {
            try {
                setLoading(true);
                const applicants = await apiService.get(endPoints.applicantsList);
                const mapped = (applicants || [])
                    .filter((a) => (a.applicationStatus || "").toUpperCase() === "REJECTED")
                    .map((a) => {
                    const englishName = [a.firstNameENG, a.fatherNameENG, a.grandfatherNameENG]
                        .filter(Boolean)
                        .join(" ");
                    const amharicName = [a.firstNameAMH, a.fatherNameAMH, a.grandfatherNameAMH]
                        .filter(Boolean)
                        .join(" ");
                    return {
                        key: String(a.id),
                        name: englishName || "-",
                        amharicName: amharicName || "-",
                        registeredYear: Number(a.classYearId) || 0,
                        department: String(a.departmentEnrolledId || "-"),
                        gender: a.gender || "",
                        age: Number(a.age) || 0,
                        status: a.applicationStatus || "REJECTED",
                        photo: undefined,
                    };
                });
                const withPhotos = await Promise.all(mapped.map(async (s) => {
                    try {
                        const blob = await apiService.get(endPoints.applicantPhoto.replace(":id", s.key), {}, { responseType: "blob", headers: { requiresAuth: true } });
                        if (blob && blob.size > 0) {
                            const url = URL.createObjectURL(blob);
                            objectUrlRefs.current.push(url);
                            return { ...s, photo: url };
                        }
                        return s;
                    }
                    catch (_) {
                        return s;
                    }
                }));
                if (!cancelled)
                    setRows(withPhotos);
            }
            catch (_) {
                if (!cancelled)
                    setRows([]);
            }
            finally {
                if (!cancelled)
                    setLoading(false);
            }
        }
        load();
        return () => {
            cancelled = true;
            objectUrlRefs.current.forEach((u) => URL.revokeObjectURL(u));
            objectUrlRefs.current = [];
        };
    }, []);
    const filteredData = useMemo(() => {
        const search = searchText.toLowerCase();
        return rows.filter((item) => {
            const matchedDeparment = filteredDepartment
                ? String(item.department) === filteredDepartment
                : true;
            const searchable = [item.name, item.amharicName, item.department]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();
            return searchable.includes(search) && matchedDeparment;
        });
    }, [rows, searchText, filteredDepartment]);
    return (_jsxs("div", { className: "min-h-screen space-y-4 sm:space-y-6", children: [_jsxs("div", { className: "bg-white dark:bg-gray-900", children: [_jsx("div", { className: "w-full  bg-blue-500 px-4 h-40 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 w-full rounded-lg", children: _jsx("h1", { className: "text-2xl  sm:text-3xl md:text-4xl font-extrabold text-white", children: "Rejected Applicants" }) }), _jsx("div", { className: "flex-1 px-4  sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 -mt-12 sm:-mt-16 md:-mt-20", children: _jsxs("div", { className: "rounded-3xl bg-gray-50 dark:bg-gray-900 p-4 sm:p-6", children: [_jsxs("div", { className: "flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 p-4", children: [_jsx("input", { type: "text", placeholder: "\uD83D\uDD0D Search students...", value: searchText, onChange: (e) => setSearchText(e.target.value), className: "w-full sm:w-64 md:w-72 lg:w-80 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base\r\n                  rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800\r\n                  text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500\r\n                  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm" }), _jsxs("select", { onChange: (e) => setFilteredDepartment(e.target.value), className: "w-full sm:w-auto px-4 py-2 sm:py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 \r\n                  bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm sm:text-base\r\n                  focus:ring-2 focus:ring-blue-500 focus:border(border-blue-500 transition-all duration-200", children: [_jsx("option", { value: "", children: "All Departments" }), _jsx("option", { value: "Medicine", children: "Medicine" }), _jsx("option", { value: "Nurse", children: "Nurse" }), _jsx("option", { value: "Pharmacy", children: "Pharmacy" })] })] }), _jsx("div", { className: "overflow-x-auto rounded-lg min-h-[200px] flex items-center justify-center", children: loading ? (_jsx("div", { className: "flex items-center justify-center py-10", children: _jsx("div", { className: "animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent" }) })) : filteredData.length === 0 ? (_jsx("div", { className: "text-sm text-gray-500", children: "No data" })) : (_jsx(EditableTableRejected, { initialData: filteredData })) })] }) })] }), _jsx("style", { children: `
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-in-out forwards;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      ` })] }));
}
