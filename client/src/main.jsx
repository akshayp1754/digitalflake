import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";

import store from "./redux/stores";
// import Layout from "./components/Layout.jsx";
// import Login from "./components/auth/Login.jsx";
// import Signup from "./components/auth/Signup.jsx";
// import Category from "./components/Category.jsx";
// import CategoryForm from "./components/CategoryForm.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="/" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       {/* <Route path="/home" element={<Home/>}/> */}
//       <Route path="/category" element={<Category />} />
//       <Route path="/categoryform" element={<CategoryForm />} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <RouterProvider router={router} /> */}
      <App />
    </Provider>
   </BrowserRouter>
);
