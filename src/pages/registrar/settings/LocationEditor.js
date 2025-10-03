import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaList, FaTh } from "react-icons/fa";
import { Loader2 } from "lucide-react";
import apiService from "@/components/api/apiService";
import endPoints from "@/components/api/endPoints";
const RegistrarAdminPage = () => {
    const [backendRegions, setBackendRegions] = useState([]);
    const [backendWoredas, setBackendWoredas] = useState([]);
    const [backendZones, setBackendZones] = useState([]);
    const [regions, setRegions] = useState([]);
    const [woredas, setWoredas] = useState([]);
    const [zones, setZones] = useState([]);
    const [loading, setLoading] = useState(true); // <-- spinner state
    useEffect(() => {
        const getter = async () => {
            try {
                const zoneData = await apiService.get(endPoints.allZones);
                const regionsData = await apiService.get(endPoints.allRegion);
                const woredaData = await apiService.get(endPoints.allWoreda);
                setBackendWoredas(woredaData);
                setBackendRegions(regionsData);
                setBackendZones(zoneData);
                const transformedRegions = regionsData.map((region) => ({
                    code: region.regionCode,
                    name: region.region,
                    countryCode: region.regionType, // or region.countryCode if backend provides it differently
                }));
                const transformedWoredas = woredaData.map((woreda) => ({
                    code: woreda.woredaCode,
                    name: woreda.woreda,
                    zoneCode: woreda.zoneCode,
                }));
                const transformedZones = zoneData.map((zone) => ({
                    code: zone.zoneCode,
                    name: zone.zone,
                    regionCode: zone.regionCode,
                }));
                setZones(transformedZones);
                setWoredas(transformedWoredas);
                setRegions(transformedRegions); // Update regions state
                console.log("Fetched regions:", regionsData);
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false); // stop spinner
            }
        };
        getter();
    }, []);
    // Fake initial data
    const initialCountries = [
        { code: "ET", name: "Ethiopia" },
        { code: "KE", name: "Kenya" },
    ];
    const initialRegions = backendRegions.map((region) => ({
        code: region.regionCode,
        name: region.region,
        countryCode: region.regionType, // or region.countryCode if backend provides it differently
    }));
    const initialRegionss = [
        { code: "AM", name: "Amhara", countryCode: "ET" },
        { code: "OR", name: "Oromia", countryCode: "ET" },
        { code: "NA", name: "Nairobi Region", countryCode: "KE" },
    ];
    const initialZones = [
        { code: "NG", name: "North Gondar", regionCode: "AM" },
        { code: "SG", name: "South Gondar", regionCode: "AM" },
        { code: "BO", name: "Bole", regionCode: "OR" },
    ];
    const initialWoredas = Array.from({ length: 150 }, (_, i) => ({
        code: `WD${i + 1}`,
        name: `Woreda ${i + 1}`,
        zoneCode: ["NG", "SG", "BO"][i % 3],
    }));
    const [countries, setCountries] = useState(initialCountries);
    // const [regions, setRegions] = useState(initialRegions);
    // const [zones, setZones] = useState(initialZones);
    // const [woredas, setWoredas] = useState(initialWoredas);
    const [selectedSection, setSelectedSection] = useState("countries");
    const sections = [
        {
            id: "countries",
            title: "Countries",
            data: countries,
            setData: setCountries,
        },
        {
            id: "regions",
            title: "Regions",
            data: regions,
            setData: setRegions,
            parentList: countries,
            parentIdKey: "code",
            parentLabelKey: "name",
            parentForeignKey: "countryCode",
            getParentName: (code) => countries.find((c) => c.code === code)?.name || "Unknown",
        },
        {
            id: "zones",
            title: "Zones",
            data: zones,
            setData: setZones,
            parentList: regions,
            parentIdKey: "code",
            parentLabelKey: "name",
            parentForeignKey: "regionCode",
            getParentName: (code) => regions.find((r) => r.code === code)?.name || "Unknown",
        },
        {
            id: "woredas",
            title: "Woredas",
            data: woredas,
            setData: setWoredas,
            parentList: zones,
            parentIdKey: "code",
            parentLabelKey: "name",
            parentForeignKey: "zoneCode",
            getParentName: (code) => zones.find((z) => z.code === code)?.name || "Unknown",
        },
    ];
    return (_jsxs("div", { className: "min-h-screen p-6 transition-colors duration-300 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100", children: [_jsxs("header", { className: "mb-10", children: [_jsx("div", { className: "flex flex-col sm:flex-row justify-between items-center mb-6", children: _jsx("h1", { className: "text-4xl font-extrabold dark:bg-white bg-blue-500 bg-clip-text text-transparent animate-gradient", children: "DHFM Location Editor" }) }), _jsx("nav", { className: "flex justify-center gap-4 flex-wrap", children: sections.map((section) => (_jsx("button", { onClick: () => setSelectedSection(section.id), className: `px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${selectedSection === section.id
                                ? "bg-blue-500 dark:bg-blue-700 text-white shadow-lg"
                                : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100"}`, children: section.title }, section.id))) })] }), _jsx("main", { children: sections.map((section) => selectedSection === section.id && (_jsx(CrudSection, { anotherInfo: loading, title: section.title, ...section }, section.id))) })] }));
};
const CrudSection = ({ title, anotherInfo, data, setData, parentList, parentIdKey, parentLabelKey, parentForeignKey, getParentName, }) => {
    const [showModal, setShowModal] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [formData, setFormData] = useState({
        code: "",
        name: "",
        [parentForeignKey]: "",
    });
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [showAll, setShowAll] = useState(false);
    const [viewMode, setViewMode] = useState("table");
    const itemsPerPage = showAll ? data.length : 10;
    const filteredData = data.filter((item) => item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    useEffect(() => {
        if (currentPage > totalPages && totalPages > 0) {
            setCurrentPage(totalPages);
        }
        else if (totalPages === 0) {
            setCurrentPage(1);
        }
    }, [filteredData.length, currentPage, totalPages, showAll]);
    const handleOpenModal = (item = null) => {
        if (item &&
            !window.confirm(`Are you sure you want to edit this ${title
                .slice(0, -1)
                .toLowerCase()}?`))
            return;
        setEditingItem(item);
        setFormData(item
            ? { ...item }
            : {
                code: "",
                name: "",
                [parentForeignKey]: parentList?.[0]?.[parentIdKey] || "",
            });
        setError("");
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
        setError("");
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const validateForm = () => {
        if (!formData.code.trim() || !formData.name.trim()) {
            setError("Code and Name are required.");
            return false;
        }
        const existing = data.find((d) => d.code === formData.code);
        if (existing && (!editingItem || editingItem.code !== formData.code)) {
            setError("Code must be unique.");
            return false;
        }
        if (parentForeignKey && !formData[parentForeignKey]) {
            setError("Parent selection is required.");
            return false;
        }
        return true;
    };
    const handleSubmit = () => {
        if (!validateForm())
            return;
        if (!editingItem &&
            !window.confirm(`Are you sure you want to add this ${title.slice(0, -1).toLowerCase()}?`))
            return;
        if (editingItem) {
            setData(data.map((d) => (d.code === editingItem.code ? { ...formData } : d)));
        }
        else {
            setData([...data, { ...formData }]);
        }
        handleCloseModal();
    };
    const handleDelete = (code) => {
        if (!window.confirm(`Are you sure you want to delete this ${title
            .slice(0, -1)
            .toLowerCase()}? This action cannot be undone.`))
            return;
        setData(data.filter((d) => d.code !== code));
    };
    return (_jsxs("div", { className: "p-6 rounded-2xl shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 animate-fade-in", children: [_jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4", children: [_jsx("h2", { className: "text-2xl font-bold bg-blue-500 dark:bg-white bg-clip-text text-transparent", children: title }), _jsxs("div", { className: "flex gap-3 flex-wrap", children: [_jsxs("button", { onClick: () => handleOpenModal(), className: "flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition-transform duration-200 transform hover:scale-105 bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800 text-white shadow-md", children: [_jsx(FaPlus, {}), " Add ", title.slice(0, -1)] }), _jsx("button", { onClick: () => setShowAll(!showAll), className: "flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition-transform duration-200 transform hover:scale-105 bg-green-500 dark:bg-green-700 hover:bg-green-600 dark:hover:bg-green-800 text-white shadow-md", children: showAll ? "Paginate" : "Show All" }), _jsxs("button", { onClick: () => setViewMode(viewMode === "table" ? "grid" : "table"), className: "flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition-transform duration-200 transform hover:scale-105 bg-purple-500 dark:bg-purple-700 hover:bg-purple-600 dark:hover:bg-purple-800 text-white shadow-md", children: [viewMode === "table" ? _jsx(FaTh, {}) : _jsx(FaList, {}), " ", viewMode === "table" ? "Grid View" : "Table View"] })] })] }), _jsx("input", { type: "text", placeholder: `Search ${title} by code or name`, value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full border p-3 mb-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 shadow-sm bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100" }), viewMode === "table" ? (_jsx("div", { className: "overflow-x-auto rounded-lg", children: _jsxs("table", { className: "w-full border-collapse", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { className: "p-4 text-left font-semibold bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: "Code" }), _jsx("th", { className: "p-4 text-left font-semibold bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: "Name" }), getParentName && (_jsx("th", { className: "p-4 text-left font-semibold bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: "Parent" })), _jsx("th", { className: "p-4 text-right font-semibold bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: "Actions" })] }) }), !anotherInfo && (_jsx("tbody", { children: paginatedData.map((item) => (_jsxs("tr", { className: "group transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 animate-slide-up", children: [_jsx("td", { className: "p-4", children: item.code }), _jsx("td", { className: "p-4", children: item.name }), getParentName && (_jsx("td", { className: "p-4", children: getParentName(item[parentForeignKey]) })), _jsx("td", { className: "p-4 text-right", children: _jsxs("div", { className: "flex justify-end gap-3 ", children: [_jsx("button", { onClick: () => handleOpenModal(item), className: "p-2 rounded-full transform hover:scale-110 transition-all duration-200 text-yellow-500 dark:text-yellow-400 hover:bg-yellow-600/50 dark:hover:bg-yellow-800/50", children: _jsx(FaEdit, { className: "text-lg" }) }), _jsx("button", { onClick: () => handleDelete(item.code), className: "p-2 rounded-full transform hover:scale-110 transition-all duration-200 text-red-500 dark:text-red-400 hover:bg-red-600/50 dark:hover:bg-red-800/50", children: _jsx(FaTrash, { className: "text-lg" }) })] }) })] }, item.code))) })), anotherInfo && (_jsx("tbody", { children: _jsx("tr", { children: _jsx("td", { colSpan: "4", className: "p-4", children: _jsx("div", { className: "flex items-center justify-center h-20 ", children: _jsx(Loader2, { className: "h-10 w-10 animate-spin text-blue-600 dark:text-blue-400" }) }) }) }) }))] }) })) : (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", children: paginatedData.map((item) => (_jsxs("div", { className: "p-5 rounded-lg shadow-md group transition-all duration-200 transform hover:scale-105 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 animate-slide-up", children: [_jsxs("h3", { className: "font-bold text-lg", children: [item.code, " - ", item.name] }), getParentName && (_jsxs("p", { className: "text-sm opacity-80", children: ["Parent: ", getParentName(item[parentForeignKey])] })), _jsxs("div", { className: "flex justify-end gap-3 mt-3 ", children: [_jsx("button", { onClick: () => handleOpenModal(item), className: "p-2 rounded-full transform hover:scale-110 transition-all duration-200 text-yellow-500 dark:text-yellow-400 hover:bg-yellow-600/50 dark:hover:bg-yellow-800/50", children: _jsx(FaEdit, { className: "text-lg" }) }), _jsx("button", { onClick: () => handleDelete(item.code), className: "p-2 rounded-full transform hover:scale-110 transition-all duration-200 text-red-500 dark:text-red-400 hover:bg-red-600/50 dark:hover:bg-red-800/50", children: _jsx(FaTrash, { className: "text-lg" }) })] })] }, item.code))) })), !showAll && totalPages > 1 && (_jsxs("div", { className: "flex justify-between items-center mt-6", children: [_jsx("button", { onClick: () => setCurrentPage((prev) => Math.max(prev - 1, 1)), disabled: currentPage === 1, className: "px-5 py-2 rounded-lg font-semibold transition-transform duration-200 transform hover:scale-105 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed", children: "Previous" }), _jsxs("span", { className: "text-sm font-medium bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent", children: ["Page ", currentPage, " of ", totalPages] }), _jsx("button", { onClick: () => setCurrentPage((prev) => Math.min(prev + 1, totalPages)), disabled: currentPage === totalPages, className: "px-5 py-2 rounded-lg font-semibold transition-transform duration-200 transform hover:scale-105 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed", children: "Next" })] })), showModal && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50", children: _jsxs("div", { className: "p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-500 scale-95 animate-modal-in bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100", children: [_jsxs("h3", { className: "text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent", children: [editingItem ? "Edit" : "Add", " ", title.slice(0, -1)] }), error && (_jsx("p", { className: "text-red-500 mb-4 bg-red-100 dark:bg-red-900/50 p-3 rounded-lg animate-pulse", children: error })), _jsx("input", { type: "text", name: "code", value: formData.code, onChange: handleChange, placeholder: "Code", className: "w-full border p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 shadow-sm bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100", disabled: !!editingItem }), _jsx("input", { type: "text", name: "name", value: formData.name, onChange: handleChange, placeholder: "Name", className: "w-full border p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 shadow-sm bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100" }), parentList && (_jsx("select", { name: parentForeignKey, value: formData[parentForeignKey], onChange: handleChange, className: "w-full border p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 shadow-sm bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100", children: parentList.map((parent) => (_jsx("option", { value: parent[parentIdKey], children: parent[parentLabelKey] }, parent[parentIdKey]))) })), _jsxs("div", { className: "flex justify-end gap-3", children: [_jsx("button", { onClick: handleCloseModal, className: "px-6 py-2 rounded-lg font-semibold transition-transform duration-200 transform hover:scale-105 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700 text-gray-900 dark:text-white shadow-md", children: "Cancel" }), _jsx("button", { onClick: handleSubmit, className: "px-6 py-2 rounded-lg font-semibold transition-transform duration-200 transform hover:scale-105 bg-green-500 dark:bg-green-700 hover:bg-green-600 dark:hover:bg-green-800 text-white shadow-md", children: editingItem ? "Update" : "Add" })] })] }) }))] }));
};
export default RegistrarAdminPage;
