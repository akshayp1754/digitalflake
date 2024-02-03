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
import { Link } from "react-router-dom";
import Category from "./category/Category";
import ProductTable from "./products/ProductTable";
import Welcome from "./Welcome"; // Import your Welcome component

function SidebarComponent() {
  const [activeComponent, setActiveComponent] = useState("Home"); // Set default active component to "Home"

  const handleItemClick = (componentName) => {
    setActiveComponent(componentName);
  };

  // Define the components corresponding to each sidebar item
  const componentMap = {
    Home: <Welcome />,
    Category: <Category />,
    Products: <ProductTable />,
  };

  return (
    <>
      <Sidebar aria-label="Default sidebar example w-16">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie} onClick={() => handleItemClick("Home")}>
              Home
            </Sidebar.Item>

            <Sidebar.Item
              onClick={() => handleItemClick("Category")}
              isactive={activeComponent === "Category" ? "true" : "false"}
              icon={HiViewBoards}
              labelColor="dark"
            >
              Category
            </Sidebar.Item>

            <Sidebar.Item
              onClick={() => handleItemClick("Products")}
              isactive={activeComponent === "Products" ? "true" : "false"}
              icon={HiInbox}
            >
              Products
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      {/* Render the active component */}
      {componentMap[activeComponent]}
    </>
  );
}

export default SidebarComponent;
