import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
export default function FinanceHistory() {
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("h1", { className: "text-3xl font-bold", children: "Payment History" }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Transaction History" }), _jsx(CardDescription, { children: "View all financial transactions" })] }), _jsx(CardContent, { children: _jsx("p", { children: "Payment history interface will be displayed here." }) })] })] }));
}
