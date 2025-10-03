import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
const SalesTable = () => {
    const data = [
        {
            id: 1,
            product: "Laptop Pro",
            category: "Electronics",
            sales: 120,
            revenue: "$24,000",
            date: "2025-08-01",
        },
        {
            id: 2,
            product: "Wireless Mouse",
            category: "Accessories",
            sales: 350,
            revenue: "$7,000",
            date: "2025-08-02",
        },
        {
            id: 3,
            product: "Smartphone X",
            category: "Electronics",
            sales: 80,
            revenue: "$16,000",
            date: "2025-08-03",
        },
        {
            id: 4,
            product: "Headphones",
            category: "Accessories",
            sales: 200,
            revenue: "$10,000",
            date: "2025-08-04",
        },
    ];
    return (_jsx("div", { className: "min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6", children: _jsx("div", { className: "w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden", children: _jsxs("div", { className: "p-6", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-4", children: "Sales Report" }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full table-auto", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-indigo-600 text-white", children: [_jsx("th", { className: "px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider", children: "ID" }), _jsx("th", { className: "px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider", children: "Product" }), _jsx("th", { className: "px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider", children: "Category" }), _jsx("th", { className: "px-4 py-3 text-right text-sm font-semibold uppercase tracking-wider", children: "Sales" }), _jsx("th", { className: "px-4 py-3 text-right text-sm font-semibold uppercase tracking-wider", children: "Revenue" }), _jsx("th", { className: "px-4 py-3 text-right text-sm font-semibold uppercase tracking-wider", children: "Date" })] }) }), _jsx("tbody", { children: data.map((item, index) => (_jsxs("tr", { className: `${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-indigo-50 transition-colors duration-200`, children: [_jsx("td", { className: "px-4 py-3 text-sm text-gray-700", children: item.id }), _jsx("td", { className: "px-4 py-3 text-sm text-gray-700 font-medium", children: item.product }), _jsx("td", { className: "px-4 py-3 text-sm text-gray-700", children: item.category }), _jsx("td", { className: "px-4 py-3 text-sm text-gray-700 text-right", children: item.sales }), _jsx("td", { className: "px-4 py-3 text-sm text-gray-700 text-right", children: item.revenue }), _jsx("td", { className: "px-4 py-3 text-sm text-gray-700 text-right", children: item.date })] }, item.id))) })] }) })] }) }) }));
};
export default SalesTable;
