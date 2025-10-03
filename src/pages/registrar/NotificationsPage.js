import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Bell, Check, CheckCheck, User, GraduationCap, DollarSign, BookOpen, Shield } from "lucide-react";
import notificationService, {} from "../../components/api/notificationService";
export default function NotificationsPage() {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // Fetch all notifications
    const fetchNotifications = async () => {
        try {
            setLoading(true);
            setError(null);
            const allNotifications = await notificationService.getAllNotifications();
            const sortedNotifications = notificationService.sortNotificationsByPriority(allNotifications);
            setNotifications(sortedNotifications);
        }
        catch (error) {
            console.error('Error fetching notifications:', error);
            setError('Failed to load notifications');
            // Fallback to mock data for development
            const mockNotifications = [
                {
                    id: 1,
                    senderRole: "REGISTRAR",
                    message: "New student registered",
                    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
                    isRead: false
                },
                {
                    id: 2,
                    senderRole: "FINANCE",
                    message: "Fee payment confirmed",
                    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
                    isRead: true
                },
                {
                    id: 3,
                    senderRole: "TEACHER",
                    message: "Grade report submitted",
                    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
                    isRead: false
                },
                {
                    id: 4,
                    senderRole: "ADMIN",
                    message: "New message from Admin",
                    createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
                    isRead: false
                },
                {
                    id: 5,
                    senderRole: "SYSTEM",
                    message: "System maintenance tonight",
                    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
                    isRead: true
                },
                {
                    id: 6,
                    senderRole: "REGISTRAR",
                    message: "Reminder: Submit documents",
                    createdAt: new Date().toISOString(),
                    isRead: false
                }
            ];
            const sortedMockNotifications = notificationService.sortNotificationsByPriority(mockNotifications);
            setNotifications(sortedMockNotifications);
        }
        finally {
            setLoading(false);
        }
    };
    // Load notifications on component mount
    useEffect(() => {
        fetchNotifications();
    }, []);
    const markAllAsRead = async () => {
        try {
            await notificationService.markAllNotificationsAsRead();
            setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
        }
        catch (error) {
            console.error('Error marking all notifications as read:', error);
            // Fallback to local state update
            setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
        }
    };
    const markAsRead = async (id) => {
        try {
            await notificationService.markNotificationAsRead(id);
            setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)));
        }
        catch (error) {
            console.error('Error marking notification as read:', error);
            // Fallback to local state update
            setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)));
        }
    };
    const unreadCount = notifications.filter(n => !n.isRead).length;
    // Get icon for sender role
    const getSenderIcon = (senderRole) => {
        switch (senderRole.toUpperCase()) {
            case 'REGISTRAR':
                return _jsx(User, { className: "w-3 h-3" });
            case 'DEAN':
            case 'VICE_DEAN':
                return _jsx(GraduationCap, { className: "w-3 h-3" });
            case 'FINANCE':
                return _jsx(DollarSign, { className: "w-3 h-3" });
            case 'TEACHER':
                return _jsx(BookOpen, { className: "w-3 h-3" });
            case 'ADMIN':
            case 'SYSTEM':
                return _jsx(Shield, { className: "w-3 h-3" });
            default:
                return _jsx(User, { className: "w-3 h-3" });
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 dark:from-blue-900 dark:to-gray-800 transition-colors duration-300", children: [_jsxs("header", { className: "sticky top-0 z-30 flex h-16 items-center gap-x-4 border-b border-blue-200 bg-white/90 backdrop-blur-lg px-4 shadow-sm dark:border-blue-700 dark:bg-gray-800/90 sm:px-6 lg:px-8", children: [_jsxs("h1", { className: "text-xl font-bold text-blue-900 dark:text-blue-100 flex items-center gap-x-3", children: [_jsx(Bell, { className: "w-6 h-6 text-blue-500" }), "Notifications", unreadCount > 0 && (_jsx("span", { className: "inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full", children: unreadCount }))] }), unreadCount > 0 && (_jsxs("button", { onClick: markAllAsRead, className: "ml-auto text-sm px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center gap-2", children: [_jsx(CheckCheck, { className: "w-4 h-4" }), "Mark All as Read"] }))] }), _jsx("main", { className: "max-w-3xl mx-auto p-4 sm:p-6 lg:p-8", children: loading ? (_jsx("div", { className: "bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden", children: _jsxs("div", { className: "text-center py-12", children: [_jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4" }), _jsx("p", { className: "text-gray-500 dark:text-gray-400 text-lg", children: "Loading notifications..." })] }) })) : error ? (_jsx("div", { className: "bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden", children: _jsxs("div", { className: "text-center py-12", children: [_jsx(Bell, { className: "w-12 h-12 text-gray-400 mx-auto mb-4" }), _jsx("p", { className: "text-red-500 dark:text-red-400 text-lg mb-2", children: error }), _jsx("button", { onClick: fetchNotifications, className: "text-sm text-blue-600 dark:text-blue-400 hover:underline", children: "Try again" })] }) })) : (_jsx("div", { className: "bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden", children: notifications.length === 0 ? (_jsxs("div", { className: "text-center py-12", children: [_jsx(Bell, { className: "w-12 h-12 text-gray-400 mx-auto mb-4" }), _jsx("p", { className: "text-gray-500 dark:text-gray-400 text-lg", children: "No notifications to show" })] })) : (notifications.map((notification, index) => (_jsxs("div", { className: `flex items-center justify-between px-6 py-4 border-b border-blue-200 dark:border-blue-700 last:border-none transition-all duration-300 transform hover:scale-[1.01] ${notification.isRead
                            ? "bg-gray-50 dark:bg-gray-900"
                            : "bg-blue-100/50 dark:bg-blue-900/30"} ${index === 0 ? "rounded-t-xl" : ""} ${index === notifications.length - 1 ? "rounded-b-xl" : ""}`, children: [_jsxs("div", { className: "flex-1", children: [_jsx("p", { className: `text-base font-medium ${notification.isRead
                                            ? "text-gray-600 dark:text-gray-300"
                                            : "text-blue-900 dark:text-blue-100"}`, children: notification.message }), _jsxs("div", { className: "flex items-center justify-between mt-1 pr-[1.5rem]", children: [_jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: notificationService.formatTimeAgo(notification.createdAt) }), _jsxs("span", { className: "text-xs text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1", children: [getSenderIcon(notification.senderRole), notification.senderRole] })] })] }), _jsxs("div", { className: "flex items-center gap-x-3", children: [!notification.isRead && (_jsx("button", { onClick: () => markAsRead(notification.id), className: "p-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-all duration-150", title: "Mark as read", children: _jsx(Check, { className: "w-4 h-4" }) })), !notification.isRead && (_jsx("span", { className: "inline-block w-3 h-3 rounded-full bg-blue-600 animate-pulse" }))] })] }, notification.id)))) })) })] }));
}
