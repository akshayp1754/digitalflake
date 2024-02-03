import axios from "axios";
import store from "../../redux/stores";

export const API = axios.create({
  baseURL: import.meta.env.VITE_URL,
  headers: {},
});

API.interceptors.request.use(
  (req) => {
    const auth = localStorage.getItem("token");
    if (auth) {
      req.headers.authorization = `Bearer ${auth}`;
    }
    return req;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
    if (error.response.status === 400) {
      store.dispatch({
        type: "LOGOUT",
      });
    }
    return Promise.reject(error);
  }
);

export const signup = (authData) => API.post("/auth/signup", authData);
export const login = (authData) => API.post("/auth/login", authData);
export const validate = (token) => API.get(`/auth/validate/${token}`);

export const createCategory = (formData) => API.post("/category", formData);
export const getAllCategory = () => API.get("/category");
export const updateCategorys = (id, formData) =>
  API.patch(`/category/${id}`, formData);
export const deleteCategory = (category_id) =>
  API.delete(`/category/${category_id}`);

export const createProduct = (formData) => API.post("/product", formData);
export const getAllProducts = () => API.get("/product");
export const updateProducts = (id, formData) =>
  API.patch(`/product/${id}`, formData);
export const deleteProduct = (product_id) =>
  API.delete(`/product/${product_id}`);
