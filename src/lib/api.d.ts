export declare const API_BASE_URL: any;
export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
}
export declare const api: {
    get: <T = any>(endpoint: string) => Promise<ApiResponse<T>>;
    post: <T = any>(endpoint: string, data?: any) => Promise<ApiResponse<T>>;
    put: <T = any>(endpoint: string, data?: any) => Promise<ApiResponse<T>>;
    delete: <T = any>(endpoint: string) => Promise<ApiResponse<T>>;
};
export declare const studentApi: {
    getProfile: () => Promise<ApiResponse<any>>;
    getCourses: () => Promise<ApiResponse<any>>;
    getGrades: () => Promise<ApiResponse<any>>;
    getPayments: () => Promise<ApiResponse<any>>;
    updateProfile: (data: any) => Promise<ApiResponse<any>>;
};
export declare const teacherApi: {
    getCourses: () => Promise<ApiResponse<any>>;
    getStudents: (courseId: string) => Promise<ApiResponse<any>>;
    getAssessments: (courseId: string) => Promise<ApiResponse<any>>;
    createAssessment: (data: any) => Promise<ApiResponse<any>>;
};
export declare const authApi: {
    login: (credentials: any) => Promise<ApiResponse<any>>;
    register: (userData: any) => Promise<ApiResponse<any>>;
    logout: () => Promise<ApiResponse<any>>;
    forgotPassword: (email: string) => Promise<ApiResponse<any>>;
};
