import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CreditCard, Download, Calendar, AlertCircle, CheckCircle, Clock, Euro } from "lucide-react";
export default function StudentPayments() {
    const currentBalance = {
        total: 2450,
        dueDate: "2024-03-15",
        breakdown: [
            { item: "Tuition Fee - Spring 2024", amount: 2000, status: "pending" },
            { item: "Student Services Fee", amount: 150, status: "pending" },
            { item: "Library Fee", amount: 50, status: "pending" },
            { item: "Lab Fee - Anatomy", amount: 100, status: "pending" },
            { item: "Health Insurance", amount: 150, status: "pending" },
        ],
    };
    const paymentHistory = [
        {
            date: "2023-09-15",
            description: "Tuition Fee - Fall 2023",
            amount: 2000,
            status: "paid",
            method: "Bank Transfer",
            reference: "TXN-2023-001",
        },
        {
            date: "2023-09-15",
            description: "Student Services Fee",
            amount: 150,
            status: "paid",
            method: "Credit Card",
            reference: "TXN-2023-002",
        },
        {
            date: "2023-09-20",
            description: "Dormitory Fee - Fall 2023",
            amount: 800,
            status: "paid",
            method: "Bank Transfer",
            reference: "TXN-2023-003",
        },
        {
            date: "2024-01-10",
            description: "Late Payment Fee",
            amount: 25,
            status: "paid",
            method: "Credit Card",
            reference: "TXN-2024-001",
        },
    ];
    const paymentPlan = {
        totalAmount: 8000,
        paidAmount: 2975,
        remainingAmount: 5025,
        installments: [
            { dueDate: "2023-09-15", amount: 2975, status: "paid", description: "Fall 2023 Payment" },
            { dueDate: "2024-03-15", amount: 2450, status: "pending", description: "Spring 2024 Payment" },
            { dueDate: "2024-09-15", amount: 2575, status: "upcoming", description: "Fall 2024 Payment" },
        ],
    };
    const getStatusColor = (status) => {
        switch (status) {
            case "paid":
                return "default";
            case "pending":
                return "destructive";
            case "upcoming":
                return "secondary";
            default:
                return "outline";
        }
    };
    const getStatusIcon = (status) => {
        switch (status) {
            case "paid":
                return _jsx(CheckCircle, { className: "h-4 w-4" });
            case "pending":
                return _jsx(AlertCircle, { className: "h-4 w-4" });
            case "upcoming":
                return _jsx(Clock, { className: "h-4 w-4" });
            default:
                return _jsx(Clock, { className: "h-4 w-4" });
        }
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-3xl font-bold", children: "Payments & Billing" }), _jsxs("div", { className: "flex space-x-2", children: [_jsxs(Button, { variant: "outline", children: [_jsx(Download, { className: "mr-2 h-4 w-4" }), "Download Receipt"] }), _jsxs(Button, { children: [_jsx(CreditCard, { className: "mr-2 h-4 w-4" }), "Make Payment"] })] })] }), _jsxs(Card, { className: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center text-red-800 dark:text-red-200", children: [_jsx(AlertCircle, { className: "mr-2 h-5 w-5" }), "Outstanding Balance"] }), _jsxs(CardDescription, { className: "text-red-600 dark:text-red-300", children: ["Payment due by ", new Date(currentBalance.dueDate).toLocaleDateString()] })] }), _jsx(CardContent, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsxs("div", { className: "text-3xl font-bold text-red-800 dark:text-red-200", children: ["\u20AC", currentBalance.total.toLocaleString()] }), _jsxs("p", { className: "text-red-600 dark:text-red-300", children: ["Due in", " ", Math.ceil((new Date(currentBalance.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)), " ", "days"] })] }), _jsx(Button, { size: "lg", className: "bg-red-600 hover:bg-red-700", children: "Pay Now" })] }) })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: "Total Program Cost" }), _jsx(Euro, { className: "h-4 w-4 text-muted-foreground" })] }), _jsxs(CardContent, { children: [_jsxs("div", { className: "text-2xl font-bold", children: ["\u20AC", paymentPlan.totalAmount.toLocaleString()] }), _jsx("p", { className: "text-xs text-muted-foreground", children: "6-year MD program" })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: "Amount Paid" }), _jsx(CheckCircle, { className: "h-4 w-4 text-green-600" })] }), _jsxs(CardContent, { children: [_jsxs("div", { className: "text-2xl font-bold text-green-600", children: ["\u20AC", paymentPlan.paidAmount.toLocaleString()] }), _jsxs("p", { className: "text-xs text-muted-foreground", children: [((paymentPlan.paidAmount / paymentPlan.totalAmount) * 100).toFixed(1), "% complete"] })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: "Remaining Balance" }), _jsx(AlertCircle, { className: "h-4 w-4 text-orange-600" })] }), _jsxs(CardContent, { children: [_jsxs("div", { className: "text-2xl font-bold text-orange-600", children: ["\u20AC", paymentPlan.remainingAmount.toLocaleString()] }), _jsx("p", { className: "text-xs text-muted-foreground", children: "2 installments remaining" })] })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Payment Progress" }), _jsx(CardDescription, { children: "Your progress through the payment plan" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: _jsxs("div", { children: [_jsxs("div", { className: "flex justify-between text-sm mb-2", children: [_jsx("span", { children: "Program Completion" }), _jsxs("span", { children: [((paymentPlan.paidAmount / paymentPlan.totalAmount) * 100).toFixed(1), "%"] })] }), _jsx(Progress, { value: (paymentPlan.paidAmount / paymentPlan.totalAmount) * 100, className: "h-3" })] }) }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center", children: [_jsx(Calendar, { className: "mr-2 h-5 w-5" }), "Spring 2024 - Fee Breakdown"] }), _jsx(CardDescription, { children: "Detailed breakdown of current semester charges" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [currentBalance.breakdown.map((item, index) => (_jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [getStatusIcon(item.status), _jsx("span", { className: "font-medium", children: item.item })] }), _jsxs("div", { className: "flex items-center space-x-3", children: [_jsxs("span", { className: "font-mono", children: ["\u20AC", item.amount] }), _jsx(Badge, { variant: getStatusColor(item.status), children: item.status })] })] }, index))), _jsx("div", { className: "border-t pt-4", children: _jsxs("div", { className: "flex items-center justify-between font-bold text-lg", children: [_jsx("span", { children: "Total Due" }), _jsxs("span", { children: ["\u20AC", currentBalance.total] })] }) })] }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Payment Plan" }), _jsx(CardDescription, { children: "Your scheduled payment installments" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: paymentPlan.installments.map((installment, index) => (_jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [getStatusIcon(installment.status), _jsxs("div", { children: [_jsx("div", { className: "font-medium", children: installment.description }), _jsxs("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: ["Due: ", new Date(installment.dueDate).toLocaleDateString()] })] })] }), _jsxs("div", { className: "flex items-center space-x-3", children: [_jsxs("span", { className: "font-mono text-lg", children: ["\u20AC", installment.amount] }), _jsx(Badge, { variant: getStatusColor(installment.status), children: installment.status })] })] }, index))) }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Payment History" }), _jsx(CardDescription, { children: "Your previous payments and transactions" })] }), _jsx(CardContent, { children: _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full", children: [_jsx("thead", { children: _jsxs("tr", { className: "border-b", children: [_jsx("th", { className: "text-left py-2", children: "Date" }), _jsx("th", { className: "text-left py-2", children: "Description" }), _jsx("th", { className: "text-center py-2", children: "Amount" }), _jsx("th", { className: "text-center py-2", children: "Method" }), _jsx("th", { className: "text-center py-2", children: "Status" }), _jsx("th", { className: "text-left py-2", children: "Reference" })] }) }), _jsx("tbody", { children: paymentHistory.map((payment, index) => (_jsxs("tr", { className: "border-b", children: [_jsx("td", { className: "py-3", children: new Date(payment.date).toLocaleDateString() }), _jsx("td", { className: "py-3 font-medium", children: payment.description }), _jsxs("td", { className: "py-3 text-center font-mono", children: ["\u20AC", payment.amount] }), _jsx("td", { className: "py-3 text-center", children: payment.method }), _jsx("td", { className: "py-3 text-center", children: _jsx(Badge, { variant: getStatusColor(payment.status), children: payment.status }) }), _jsx("td", { className: "py-3 text-gray-600 dark:text-gray-400 font-mono text-sm", children: payment.reference })] }, index))) })] }) }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Payment Methods" }), _jsx(CardDescription, { children: "Available payment options" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "p-4 border rounded-lg", children: [_jsx("h4", { className: "font-semibold mb-2", children: "Bank Transfer" }), _jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-2", children: "Direct transfer to college account" }), _jsxs("div", { className: "text-xs space-y-1", children: [_jsxs("div", { children: [_jsx("strong", { children: "Bank:" }), " Deutsche Bank"] }), _jsxs("div", { children: [_jsx("strong", { children: "IBAN:" }), " DE89 3704 0044 0532 0130 00"] }), _jsxs("div", { children: [_jsx("strong", { children: "BIC:" }), " COBADEFFXXX"] })] })] }), _jsxs("div", { className: "p-4 border rounded-lg", children: [_jsx("h4", { className: "font-semibold mb-2", children: "Online Payment" }), _jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-2", children: "Credit/Debit card or PayPal" }), _jsxs("div", { className: "flex space-x-2", children: [_jsx(Badge, { variant: "outline", children: "Visa" }), _jsx(Badge, { variant: "outline", children: "Mastercard" }), _jsx(Badge, { variant: "outline", children: "PayPal" })] })] })] }) })] })] }));
}
