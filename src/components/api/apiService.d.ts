declare const apiService: {
    get: (url: any, params?: {}, config?: {}) => Promise<any>;
    post: (url: any, data: any, config?: {}) => Promise<any>;
    put: (url: any, data: any, config?: {}) => Promise<any>;
    delete: (url: any, config?: {}) => Promise<any>;
};
export default apiService;
