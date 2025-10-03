import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// EditableTableApplicant.tsx
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { useModal } from "@/hooks/Modal";
import { ImageModal } from "@/hooks/ImageModal";
import apiService from "@/components/api/apiService";
import endPoints from "@/components/api/endPoints";
const EditableTableApplicant = ({ initialData, }) => {
    const { openModal, closeModal } = useModal();
    const [showAmharic, setShowAmharic] = useState(false);
    const [data, setData] = useState(() => (initialData || []).map((d) => ({ ...d, isDisabled: d.isDisabled ?? false })));
    // keep in sync if parent provides new data
    useEffect(() => {
        setData((initialData || []).map((d) => ({ ...d, isDisabled: d.isDisabled ?? false })));
    }, [initialData]);
    const navigate = useNavigate();
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: ["5", "10", "20", "50"],
    });
    // handle deactivate / activate
    const handleStatusChange = async (record, action) => {
        try {
            const url = action === "disable"
                ? endPoints.studentsDeactivation.replace(":id", record.id)
                : endPoints.studentsActivation.replace(":id", record.id);
            // Server expects POST for these actions (Allow: POST)
            await apiService.post(url, {});
            console.log(`User ${record.id} ${action}d successfully`);
            // reflect change locally without page refresh and keep the row visible
            setData((prev) => prev.map((item) => item.id === record.id
                ? { ...item, isDisabled: action === "disable" }
                : item));
            closeModal();
        }
        catch (err) {
            console.error("Error updating status:", err);
        }
    };
    const columns = [
        {
            title: "Photo",
            dataIndex: "photo",
            width: "16%",
            render: (text) => text ? (_jsx("img", { src: text, onClick: (e) => {
                    openModal(_jsx(ImageModal, { imageSrc: text }));
                    e.stopPropagation();
                }, alt: "student", className: "w-25 h-20 hover:cursor-pointer object-cover" })) : (_jsx("div", { className: "w-16 h-16 bg-gray-300 dark:bg-gray-700 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-300 text-sm", children: "No Photo" })),
        },
        { title: "ID", dataIndex: "id", width: "12%" },
        {
            title: (_jsxs("div", { className: "flex items-center gap-2", children: ["Name", _jsx("svg", { onClick: () => setShowAmharic((prev) => !prev), width: "22px", height: "22px", className: "hover:cursor-pointer", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M12 20h9M3 4h18M4 20l7-16", stroke: "#000", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })] })),
            dataIndex: "name",
            width: "10%",
            render: (_, record) => showAmharic ? record.amharicName : record.name,
        },
        {
            title: "Status",
            dataIndex: "status",
            width: "1%",
            render: (text) => (_jsx("span", { className: `
            px-3 py-1 rounded-full text-sm font-medium
            ${text === "Active"
                    ? "bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100"
                    : ""}
            ${text === "Graduated"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100"
                    : ""}
            ${text === "Suspended"
                    ? "bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100"
                    : ""}
            ${text === "Inactive"
                    ? "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
                    : ""}
          `, children: text })),
        },
        { title: "Batch", dataIndex: "batch", width: "12%" },
        { title: "Year", dataIndex: "year", width: "10%" },
        { title: "Department", dataIndex: "department", width: "11%" },
        {
            title: "Account Status",
            dataIndex: "accountStatus",
            width: "10%",
            render: (_, record) => (_jsx("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${record.isDisabled
                    ? "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/30 dark:text-rose-200 dark:border-rose-800"
                    : "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-200 dark:border-green-800"}`, children: record.isDisabled ? "Suspended" : "Active" })),
        },
        {
            title: "Regulate Activity",
            dataIndex: "action",
            width: "7%",
            render: (_, record) => (_jsx("span", { onClick: (e) => {
                    e.stopPropagation();
                    openModal(_jsxs("div", { className: "p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 w-96", children: [_jsx("h2", { className: "text-xl font-bold mb-4", children: "Regulate Student Activity" }), _jsx("p", { className: "mb-4", children: "Choose an action. This is independent of the student's academic status." }), _jsxs("div", { className: "flex justify-end gap-3", children: [_jsx("button", { onClick: closeModal, className: "px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition", children: "Cancel" }), _jsx("button", { onClick: async () => {
                                            await handleStatusChange(record, "disable");
                                        }, className: "px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition", children: "Deactivate" }), _jsx("button", { onClick: async () => {
                                            await handleStatusChange(record, "enable");
                                        }, className: "px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white transition", children: "Activate" })] })] }));
                }, children: _jsxs("span", { className: "inline-flex items-center gap-2", children: [record.isDisabled ? (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "text-rose-600", children: [_jsx("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }), _jsx("circle", { cx: "12", cy: "7", r: "4" }), _jsx("line", { x1: "15", y1: "9", x2: "21", y2: "3" }), _jsx("line", { x1: "21", y1: "9", x2: "15", y2: "3" })] })) : (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "text-green-600", children: [_jsx("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }), _jsx("circle", { cx: "12", cy: "7", r: "4" }), _jsx("path", { d: "M16 11l2 2 4-4" })] })), _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "22", height: "22", viewBox: "0 0 24 24", fill: "currentColor", className: "text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer", children: [_jsx("circle", { cx: "12", cy: "5", r: "2" }), _jsx("circle", { cx: "12", cy: "12", r: "2" }), _jsx("circle", { cx: "12", cy: "19", r: "2" })] })] }) })),
        },
    ];
    return (_jsx("div", { children: _jsx(Table, { dataSource: data, columns: columns, rowKey: (record, index) => `${record.key}-${index}`, pagination: {
                ...pagination,
                onChange: (page, pageSize) => {
                    setPagination({ ...pagination, current: page, pageSize });
                },
                onShowSizeChange: (current, size) => {
                    setPagination({ ...pagination, current, pageSize: size });
                },
            }, bordered: false, className: "min-w-full bg-gray-100 dark:bg-gray-800", rowClassName: (record) => `bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 ${record.isDisabled ? "bg-red-50 dark:bg-red-900/40" : ""}`, onRow: (record) => {
                return {
                    onClick: () => navigate(`/registrar/students/${record.key}`),
                    style: record.isDisabled
                        ? { backgroundColor: "#fde2e2" }
                        : undefined,
                };
            }, components: {
                header: {
                    cell: (props) => (_jsx("th", { ...props, className: "\r\n                  bg-white dark:bg-gray-900 \r\n                  text-gray-900 dark:text-gray-100\r\n                  px-4 py-2 text-left\r\n                " })),
                },
                body: {
                    row: (props) => (_jsx("tr", { ...props, className: `
                  ${props.className || ""}
                  bg-white dark:bg-gray-900 
                  text-gray-900 dark:text-gray-100
                  hover:bg-blue-200 dark:hover:bg-gray-600 
                  transition-colors
                  cursor-pointer
                `, style: props.style })),
                },
            } }) }));
};
export default EditableTableApplicant;
