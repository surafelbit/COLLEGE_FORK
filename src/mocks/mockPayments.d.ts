export interface Payment {
    id: string;
    date: string;
    description: string;
    amount: number;
    status: "paid" | "pending" | "overdue";
    method?: string;
    reference?: string;
}
export interface PaymentPlan {
    totalAmount: number;
    paidAmount: number;
    remainingAmount: number;
    installments: Array<{
        dueDate: string;
        amount: number;
        status: "paid" | "pending" | "upcoming";
        description: string;
    }>;
}
export interface PaymentsSummary {
    currentBalance: {
        total: number;
        dueDate: string;
        breakdown: Array<{
            item: string;
            amount: number;
            status: "paid" | "pending";
        }>;
    };
    paymentHistory: Payment[];
    paymentPlan: PaymentPlan;
}
export declare const mockPayments: PaymentsSummary;
