import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, useState } from "react";
import EditableTableApplicant, {} from "@/components/Extra/EditableTableApplicant";
import apiService from "@/components/api/apiService";
import endPoints from "@/components/api/endPoints";
export default function RegistrarStudents() {
    const [filters, setFilters] = useState({
        department: "",
        batch: "",
        status: "",
    });
    const [searchText, setSearchText] = useState("");
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const objectUrlRefs = useRef([]);
    useEffect(() => {
        let cancelled = false;
        async function load() {
            try {
                setLoading(true);
                const list = await apiService.get(endPoints.students);
                const mapped = (list || []).map((s) => {
                    const englishName = [s.firstNameENG, s.fatherNameENG, s.grandfatherNameENG]
                        .filter(Boolean)
                        .join(" ");
                    const amharicName = [s.firstNameAMH, s.fatherNameAMH, s.grandfatherNameAMH]
                        .filter(Boolean)
                        .join(" ");
                    return {
                        key: String(s.id),
                        id: String(s.id),
                        name: englishName || "-",
                        amharicName: amharicName || "-",
                        year: Number(s.batchClassYearSemesterId) || 0,
                        batch: String(s.batchClassYearSemesterId || "-"),
                        status: "Student",
                        department: String(s.departmentEnrolledId || "-"),
                        photo: "",
                    };
                });
                // fetch optional photos if backend supports it later
                const withPhotos = await Promise.all(mapped.map(async (row) => row));
                if (!cancelled)
                    setStudents(withPhotos);
            }
            catch (_) {
                if (!cancelled)
                    setStudents([]);
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
        const list = students;
        const search = searchText.toLowerCase();
        return list.filter((item) => {
            const matchedStatus = filters.status ? filters.status === item.status : true;
            const matchedBatch = filters.batch ? filters.batch === item.batch : true;
            const matchedDepartment = filters.department
                ? filters.department === item.department
                : true;
            const searchable = [item.name, item.amharicName, item.id, item.department]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();
            return (searchable.includes(search) && matchedStatus && matchedBatch && matchedDepartment);
        });
    }, [students, searchText, filters]);
    return (_jsx("div", { className: "min-h-screen", children: _jsxs("div", { className: "p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8", children: [_jsxs("div", { className: "w-full bg-blue-500 px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 flex flex-col justify-center rounded-lg", children: [_jsx("h1", { className: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-white", children: "Student Records" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4 sm:mt-6 mb-8 sm:mb-12", children: [
                                {
                                    title: "Registration",
                                    value: "350,897",
                                    change: "↑ 3.48% Since last month",
                                    color: "text-green-500",
                                },
                                {
                                    title: "NEW Students",
                                    value: "2,356",
                                    change: "↓ 3.48% Since last week",
                                    color: "text-red-500",
                                },
                                {
                                    title: "Graduation",
                                    value: "924",
                                    change: "↓ 1.10% Since yesterday",
                                    color: "text-orange-500",
                                },
                                {
                                    title: "Education",
                                    value: "49,65%",
                                    change: "↑ 12% Since last month",
                                    color: "text-green-500",
                                },
                            ].map((stat, index) => (_jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5", children: [_jsx("p", { className: "text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400", children: stat.title }), _jsx("h2", { className: "text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100", children: stat.value }), _jsx("p", { className: `text-xs sm:text-sm ${stat.color} mt-1`, children: stat.change })] }, index))) })] }), _jsx("div", { className: "flex-1 px-4  sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 -mt-12 sm:-mt-16 md:-mt-20", children: _jsxs("div", { className: "rounded-3xl bg-gray-50 dark:bg-gray-900 p-4 sm:p-6", children: [_jsxs("div", { className: "flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-start sm:items-center mb-4 sm:mb-6", children: [["department", "status", "batch"].map((filter) => (_jsxs("select", { onChange: (e) => setFilters((prev) => ({
                                            ...prev,
                                            [filter]: e.target.value,
                                        })), className: "w-full sm:w-auto px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 \r\n                    bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm sm:text-base\r\n                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200", children: [filter === "department" && (_jsxs(_Fragment, { children: [_jsx("option", { value: "", children: "All Departments" }), _jsx("option", { value: "Pharmacy", children: "Pharmacy" }), _jsx("option", { value: "Medicine", children: "Medicine" }), _jsx("option", { value: "Nurse", children: "Nurse" })] })), filter === "status" && (_jsxs(_Fragment, { children: [_jsx("option", { value: "", children: "All Status" }), _jsx("option", { value: "Active", children: "Active" }), _jsx("option", { value: "Graduated", children: "Graduated" }), _jsx("option", { value: "Student", children: "Student" })] })), filter === "batch" && (_jsxs(_Fragment, { children: [_jsx("option", { value: "", children: "All Years" }), _jsx("option", { value: "1", children: "Year 1" }), _jsx("option", { value: "2", children: "Year 2" }), _jsx("option", { value: "3", children: "Year 3" }), _jsx("option", { value: "4", children: "Year 4" })] }))] }, filter))), _jsx("input", { onChange: (e) => setSearchText(e.target.value), type: "text", placeholder: "\uD83D\uDD0D Search students...", className: "w-full sm:w-64 md:w-80 lg:w-96 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base\r\n                  rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800\r\n                  text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500\r\n                  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm" })] }), _jsx("div", { className: "overflow-x-auto rounded-2xl min-h-[200px] flex items-center justify-center", children: loading ? (_jsx("div", { className: "flex items-center justify-center py-10", children: _jsx("div", { className: "animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent" }) })) : filteredData.length === 0 ? (_jsx("div", { className: "text-sm text-gray-500", children: "No data" })) : (_jsx(EditableTableApplicant, { initialData: filteredData })) })] }) }), _jsx("style", { children: `
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
          .EditableTableApplicant tr:hover {
            background-color: rgba(59, 130, 246, 0.1);
            transition: background-color 0.3s ease;
          }
        ` })] }) }));
}
