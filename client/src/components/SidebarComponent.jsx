import React, { useState } from "react";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import Category from "./category/Category";
import ProductTable from "./products/ProductTable";
import Welcome from "./Welcome";

function SidebarComponent() {
  const [activeComponent, setActiveComponent] = useState("Home");

  const handleItemClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const componentMap = {
    Home: <Welcome />,
    Category: <Category />,
    Products: <ProductTable />,
  };

  return (
    <>
     <div className="flex flex-col lg:flex-row">
      <Sidebar aria-label="Default sidebar example w-16">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              className={`cursor-pointer  ${
                activeComponent === "Home" ? "bg-yellow-100" : ""
              }`}
              icon={HiChartPie}
              onClick={() => handleItemClick("Home")}
            >
              Home
            </Sidebar.Item>

            <Sidebar.Item
              onClick={() => handleItemClick("Category")}
              isactive={activeComponent === "Category" ? "true" : "false"}
              icon={HiViewBoards}
              labelColor="dark"
              className={`cursor-pointer ${
                activeComponent === "Category" ? "bg-yellow-100" : ""
              }`}
            >
              Category
            </Sidebar.Item>

            <Sidebar.Item
              className={`cursor-pointer ${
                activeComponent === "Products" ? "bg-yellow-100" : ""
              }`}
              onClick={() => handleItemClick("Products")}
              isactive={activeComponent === "Products" ? "true" : "false"}
              icon={HiInbox}
            >
              Products
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      <div className="flex-grow p-4">
        {activeComponent === "Category" && componentMap.Category}
        {activeComponent === "Products" && componentMap.Products}
        {activeComponent !== "Category" && activeComponent !== "Products" && componentMap[activeComponent]}
      </div>
      </div>
    </>
  );
}

export default SidebarComponent;
