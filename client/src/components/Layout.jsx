import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SidebarComponent from "./SidebarComponent";
import privateRoute from "./hoc/privateRoute";

function Layout() {
  return (
    <>
      <Navbar/>
      <SidebarComponent/>
      <Outlet />
    </>
  );
}

export default privateRoute(Layout);
