import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import apiService from "@/components/api/apiService";
import endPoints from "@/components/api/endPoints";
const fakeBatches = [
    { id: 1, batchName: "Batch 1" },
    { id: 2, batchName: "Batch 2" },
    { id: 3, batchName: "Batch 3" },
    { id: 4, batchName: "Batch 4" },
    { id: 5, batchName: "Batch 5" },
];
export default function RegistrarBatches() {
    const [batches, setBatches] = useState([]);
    const [view, setView] = useState("grid");
    useEffect(() => {
        const getter = async () => {
            try {
                const response = await apiService.get(endPoints.batches);
                setBatches(response);
                console.log(response);
                // setBatches(fakeBatches);
            }
            catch (error) {
                console.error(error);
            }
        };
        getter();
    }, []);
    return (_jsxs("div", { className: "space-y-6 p-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl md:text-3xl font-bold text-gray-900 dark:text-white", children: "Student Batches" }), _jsxs("div", { className: "flex gap-2", children: [_jsx("button", { onClick: () => setView("grid"), className: `px-3 py-1 rounded-lg font-medium ${view === "grid"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`, children: "Grid" }), _jsx("button", { onClick: () => setView("list"), className: `px-3 py-1 rounded-lg font-medium ${view === "list"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`, children: "List" })] })] }), _jsx("div", { className: view === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                    : "flex flex-col gap-4", children: batches.map((batch) => (_jsxs(Card, { className: "hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer border border-gray-100 dark:border-gray-700 bg-gradient-to-tr from-blue-50 to-white dark:from-gray-800 dark:to-gray-900", children: [_jsxs(CardHeader, { className: "flex justify-between items-center", children: [_jsx("div", { className: "w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg", style: {
                                        background: "linear-gradient(135deg, #4f46e5, #3b82f6)", // gradient blue
                                    }, children: batch.batchName.charAt(0) }), _jsx(CardTitle, { className: "text-blue-600 dark:text-blue-400", children: batch.batchName }), _jsxs(CardDescription, { className: "text-gray-500 dark:text-gray-400", children: ["ID: ", batch.id] })] }), _jsxs(CardContent, { className: "flex justify-between items-center", children: [_jsx("p", { className: "text-gray-700 dark:text-gray-300 text-sm", children: "Manage and view all students in this batch." }), _jsx("button", { className: "px-4 py-1 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition text-sm", children: "View Students" })] })] }, batch.id))) })] }));
}
