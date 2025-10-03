import apiClient from './apiClient';
import endPoints from './endPoints';
class NotificationService {
    // Normalize varying backend shapes to our Notification interface
    normalizeNotification(item) {
        return {
            id: item.id,
            senderRole: item.senderRole,
            message: item.message,
            createdAt: item.createdAt,
            isRead: typeof item.isRead === 'boolean' ? item.isRead : Boolean(item.read),
        };
    }
    // Get all notifications for the current user
    async getAllNotifications() {
        try {
            const response = await apiClient.get(endPoints.notifications);
            const data = Array.isArray(response.data) ? response.data : response.data?.notifications || [];
            return data.map((n) => this.normalizeNotification(n));
        }
        catch (error) {
            console.error('Error fetching notifications:', error);
            throw error;
        }
    }
    // Get latest notifications (prioritizing unread)
    async getLatestNotifications() {
        try {
            const response = await apiClient.get(endPoints.notificationsLatest);
            const data = Array.isArray(response.data) ? response.data : response.data?.notifications || [];
            return data.map((n) => this.normalizeNotification(n));
        }
        catch (error) {
            console.error('Error fetching latest notifications:', error);
            throw error;
        }
    }
    // Mark a specific notification as read
    async markNotificationAsRead(notificationId) {
        try {
            const endpoint = endPoints.markNotificationRead.replace(':id', notificationId.toString());
            await apiClient.patch(endpoint);
        }
        catch (error) {
            console.error('Error marking notification as read:', error);
            throw error;
        }
    }
    // Mark all notifications as read
    async markAllNotificationsAsRead() {
        try {
            await apiClient.patch(endPoints.markAllNotificationsRead);
        }
        catch (error) {
            console.error('Error marking all notifications as read:', error);
            throw error;
        }
    }
    // Get unread count
    getUnreadCount(notifications) {
        return notifications.filter(notification => !notification.isRead).length;
    }
    // Sort notifications by priority (unread first, then by date)
    sortNotificationsByPriority(notifications) {
        return [...notifications].sort((a, b) => {
            // First sort by read status (unread first)
            if (a.isRead !== b.isRead) {
                return a.isRead ? 1 : -1;
            }
            // Then sort by date (newest first)
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
    }
    // Format time ago
    formatTimeAgo(dateString) {
        const now = new Date();
        const date = new Date(dateString);
        const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
        if (diffInSeconds < 60) {
            return 'Just now';
        }
        else if (diffInSeconds < 3600) {
            const minutes = Math.floor(diffInSeconds / 60);
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        }
        else if (diffInSeconds < 86400) {
            const hours = Math.floor(diffInSeconds / 3600);
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        }
        else if (diffInSeconds < 604800) {
            const days = Math.floor(diffInSeconds / 86400);
            return `${days} day${days > 1 ? 's' : ''} ago`;
        }
        else {
            return date.toLocaleDateString();
        }
    }
}
export default new NotificationService();
