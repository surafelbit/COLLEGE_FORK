import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
export default function FinanceDashboard() {
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("h1", { className: "text-3xl font-bold", children: "Finance Dashboard" }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Financial Overview" }), _jsx(CardDescription, { children: "Monitor college financial operations" })] }), _jsx(CardContent, { children: _jsx("p", { children: "Finance dashboard content will be displayed here." }) })] })] }));
}
