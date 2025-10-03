export interface Notification {
    id: number;
    senderRole: string;
    message: string;
    createdAt: string;
    isRead: boolean;
}
export interface NotificationResponse {
    notifications: Notification[];
    unreadCount: number;
}
declare class NotificationService {
    private normalizeNotification;
    getAllNotifications(): Promise<Notification[]>;
    getLatestNotifications(): Promise<Notification[]>;
    markNotificationAsRead(notificationId: number): Promise<void>;
    markAllNotificationsAsRead(): Promise<void>;
    getUnreadCount(notifications: Notification[]): number;
    sortNotificationsByPriority(notifications: Notification[]): Notification[];
    formatTimeAgo(dateString: string): string;
}
declare const _default: NotificationService;
export default _default;
