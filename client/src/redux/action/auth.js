// import toast from "react-hot-toast";
import toast from "react-hot-toast";
import * as api from "../api/index";
import axios from "axios";

export const signupUser = (authData) => async (dispatch) => {
  try {
    const response = await api.signup(authData);
    console.log(response);
    localStorage.setItem("token", response.data.token);
    toast.success(response.message);
  } catch (error) {
    console.log(error);
    toast.error(error.response.message);
  }
};

export const loginUser = (authData) => {
  return async (dispatch) => {
    try {
      const response = await api.login(authData);
      dispatch({ type: "AUTH", payload: response });
      axios.defaults.headers.common['Authorization'] = `${response.data.token}`
      localStorage.setItem("token", response.data.token);
      toast.success(response.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.message);
    }
  };
};

// export const ValidateUser = () => async (dispatch) => {
//   try {
//     const token = localStorage.getItem("token");
//     if (!token) return;
//     const responseData = await api.validate(token);
//     console.log(responseData);
//     if (responseData === null) return;
//     dispatch({
//       type: "AUTH",
//       payload: {
//         token,
//         user: responseData.data.data.user,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
