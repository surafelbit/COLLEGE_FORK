// API Configuration - Use import.meta.env for Vite
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";
// Generic API request wrapper
async function apiRequest(endpoint, options = {}) {
    try {
        // For now, we'll mock the responses
        // In production, this would make actual HTTP requests
        const mockResponse = await mockApiCall(endpoint, options);
        return mockResponse;
    }
    catch (error) {
        console.error("API Error:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Unknown error occurred",
        };
    }
}
// Mock API call function (replace with real fetch/axios later)
async function mockApiCall(endpoint, options) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    // Import mock data based on endpoint
    const { mockStudent } = await import("../mocks/mockStudent");
    const { mockCourses } = await import("../mocks/mockCourses");
    const { mockGrades } = await import("../mocks/mockGrades");
    const { mockPayments } = await import("../mocks/mockPayments");
    // Route mock responses based on endpoint
    switch (endpoint) {
        case "/student/profile":
            return { success: true, data: mockStudent };
        case "/student/courses":
            return { success: true, data: mockCourses };
        case "/student/grades":
            return { success: true, data: mockGrades };
        case "/student/payments":
            return { success: true, data: mockPayments };
        case "/teacher/courses":
            return { success: true, data: mockCourses };
        default:
            return { success: false, error: "Endpoint not found" };
    }
}
// API Methods
export const api = {
    // GET request
    get: (endpoint) => {
        return apiRequest(endpoint, { method: "GET" });
    },
    // POST request
    post: (endpoint, data) => {
        return apiRequest(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data ? JSON.stringify(data) : undefined,
        });
    },
    // PUT request
    put: (endpoint, data) => {
        return apiRequest(endpoint, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: data ? JSON.stringify(data) : undefined,
        });
    },
    // DELETE request
    delete: (endpoint) => {
        return apiRequest(endpoint, { method: "DELETE" });
    },
};
// Specific API functions for different entities
export const studentApi = {
    getProfile: () => api.get("/student/profile"),
    getCourses: () => api.get("/student/courses"),
    getGrades: () => api.get("/student/grades"),
    getPayments: () => api.get("/student/payments"),
    updateProfile: (data) => api.put("/student/profile", data),
};
export const teacherApi = {
    getCourses: () => api.get("/teacher/courses"),
    getStudents: (courseId) => api.get(`/teacher/courses/${courseId}/students`),
    getAssessments: (courseId) => api.get(`/teacher/courses/${courseId}/assessments`),
    createAssessment: (data) => api.post("/teacher/assessments", data),
};
export const authApi = {
    login: (credentials) => api.post("/auth/login", credentials),
    register: (userData) => api.post("/auth/register", userData),
    logout: () => api.post("/auth/logout"),
    forgotPassword: (email) => api.post("/auth/forgot-password", { email }),
};
