import axios from 'axios';

// Create an axios instance with a base URL for the backend
const apiClient = axios.create({
  baseURL: 'http://localhost:8080', // Your backend URL
});

// Use an interceptor to add the JWT token to every request
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Authentication API calls
export const loginUser = (credentials) => apiClient.post('/login', credentials);
export const registerUser = (userData) => apiClient.post('/register', userData);

// Product API calls
export const getProducts = (page = 1, limit = 10) => apiClient.get(`/products?page=${page}&limit=${limit}`);
export const addProduct = (productData) => apiClient.post('/products', productData);
export const updateProductQuantity = (id, quantity) => apiClient.put(`/products/${id}/quantity`, { quantity });

export default apiClient;