import toast from "react-hot-toast";
import * as api from "../api/index";

export const getProduct = () => async (dispatch) => {
  try {
    const response = await api.getAllProducts();
    dispatch({ type: "Product", payload: response.data });
    toast.success(response.data.message);
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};

export const postProduct = (formData) => async (dispatch) => {
  try {
    const response = await api.createProduct(formData);
    console.log(response);
    dispatch(getProduct());
    toast.success(response.data.message);
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};

export const updateProduct = (id, formData) => async (dispatch) => {
  try {
    const response = await api.updateProducts(id, formData);
    dispatch(getProduct());
    console.log(response.data);
    toast.success(response.data.message);
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};

export const deleteProduct = (product_id) => async (dispatch) => {
  try {
    const response = await api.deleteProduct(product_id);
    dispatch(getProduct());
    toast.success(response.data.message);
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};
