import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { Bell, Check, User, GraduationCap, DollarSign, BookOpen, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import notificationService, {} from '../api/notificationService';
export default function NotificationDropdown({ className = '' }) {
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);
    const [loading, setLoading] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
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
    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    // Fetch latest notifications
    const fetchLatestNotifications = async () => {
        try {
            setLoading(true);
            // Fetch all notifications to get accurate unread count
            const allNotifications = await notificationService.getAllNotifications();
            const latestNotifications = await notificationService.getLatestNotifications();
            const sortedNotifications = notificationService.sortNotificationsByPriority(latestNotifications);
            setNotifications(sortedNotifications.slice(0, 3)); // Show only 3 latest
            // Use all notifications for accurate unread count
            setUnreadCount(notificationService.getUnreadCount(allNotifications));
        }
        catch (error) {
            console.error('Error fetching notifications:', error);
            // Do not show mock data; show empty state
            setNotifications([]);
            setUnreadCount(0);
        }
        finally {
            setLoading(false);
        }
    };
    // Initial load
    useEffect(() => {
        fetchLatestNotifications();
    }, []);
    // Handle notification click
    const handleNotificationClick = async (notificationId) => {
        try {
            await notificationService.markNotificationAsRead(notificationId);
            // Update local state
            setNotifications(prev => prev.map(notif => notif.id === notificationId ? { ...notif, isRead: true } : notif));
            setUnreadCount(prev => Math.max(0, prev - 1));
        }
        catch (error) {
            console.error('Error marking notification as read:', error);
            // Fallback: still update local state
            setNotifications(prev => prev.map(notif => notif.id === notificationId ? { ...notif, isRead: true } : notif));
            setUnreadCount(prev => Math.max(0, prev - 1));
        }
    };
    // Handle view more click
    const handleViewMore = () => {
        setShowDropdown(false);
        navigate('/registrar/notifications');
    };
    // Toggle dropdown
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
        if (!showDropdown) {
            fetchLatestNotifications();
        }
    };
    return (_jsxs("div", { className: `relative ${className}`, ref: dropdownRef, children: [_jsxs("button", { onClick: toggleDropdown, className: "relative p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full", "aria-label": "Notifications", children: [_jsx(Bell, { className: "w-6 h-6" }), unreadCount > 0 && (_jsx("span", { className: "absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full min-w-[20px] h-5", children: unreadCount > 99 ? '99+' : unreadCount }))] }), showDropdown && (_jsxs("div", { className: "absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 max-h-96 overflow-hidden", children: [_jsx("div", { className: "px-4 py-3 border-b border-gray-200 dark:border-gray-700", children: _jsx("h3", { className: "text-sm font-semibold text-gray-900 dark:text-white", children: "Notifications" }) }), _jsx("div", { className: "max-h-64 overflow-y-auto", children: loading ? (_jsxs("div", { className: "px-4 py-6 text-center", children: [_jsx("div", { className: "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto" }), _jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400 mt-2", children: "Loading..." })] })) : notifications.length === 0 ? (_jsxs("div", { className: "px-4 py-6 text-center", children: [_jsx(Bell, { className: "w-8 h-8 text-gray-400 mx-auto mb-2" }), _jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "No notifications" })] })) : (_jsx("div", { className: "py-1", children: notifications.map((notification, index) => (_jsx("div", { className: `px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-150 ${!notification.isRead ? 'bg-blue-50 dark:bg-blue-900/20' : ''} ${index !== notifications.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''}`, children: _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("p", { className: `text-sm ${!notification.isRead
                                                        ? 'font-medium text-gray-900 dark:text-white'
                                                        : 'text-gray-600 dark:text-gray-300'}`, children: notification.message }), _jsxs("div", { className: "flex items-center justify-between mt-1", children: [_jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: notificationService.formatTimeAgo(notification.createdAt) }), _jsxs("span", { className: "text-xs text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1", children: [getSenderIcon(notification.senderRole), notification.senderRole] })] })] }), !notification.isRead && (_jsx("button", { onClick: (e) => {
                                                e.stopPropagation();
                                                handleNotificationClick(notification.id);
                                            }, className: "ml-2 p-1 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150", title: "Mark as read", children: _jsx(Check, { className: "w-4 h-4" }) }))] }) }, notification.id))) })) }), notifications.length > 0 && (_jsx("div", { className: "px-4 py-3 border-t border-gray-200 dark:border-gray-700", children: _jsx("button", { onClick: handleViewMore, className: "w-full text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-150", children: "View all notifications \u2192" }) }))] }))] }));
}
