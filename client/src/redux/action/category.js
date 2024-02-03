import toast from "react-hot-toast";
import * as api from "../api/index";

export const getCategory = () => async (dispatch) => {
  try {
    const response = await api.getAllCategory();
    dispatch({ type: "Category", payload: response.data });
    toast.success(response.message);
  } catch (error) {
    console.log(error);
    toast.error(error.response.message);
  }
};

export const postCategory = (formData) => async (dispatch) => {
  try {
    const response = await api.createCategory(formData);
    console.log(response);
    dispatch(getCategory());
    toast.success(response.data.message);
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};

export const updateCategory = (id, formData) => async (dispatch) => {
  try {
    const response = await api.updateCategorys(id, formData);
    dispatch(getCategory());
    toast.success(response.data.message);
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};

export const deleteCategory = (category_id) => async (dispatch) => {
  try {
    const response = await api.deleteCategory(category_id);
    dispatch(getCategory());
    toast.success(response.data.message)
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};




