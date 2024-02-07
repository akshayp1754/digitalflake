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
      <Sidebar aria-label="Default sidebar example w-16">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item className="cursor-pointer" icon={HiChartPie} onClick={() => handleItemClick("Home")}>
              Home
            </Sidebar.Item>

            <Sidebar.Item
              onClick={() => handleItemClick("Category")}
              isactive={activeComponent === "Category" ? "true" : "false"}
              icon={HiViewBoards}
              labelColor="dark"
              className="cursor-pointer"
            >
              Category
            </Sidebar.Item>

            <Sidebar.Item
            className="cursor-pointer"
              onClick={() => handleItemClick("Products")}
              isactive={activeComponent === "Products" ? "true" : "false"}
              icon={HiInbox}
            >
              Products
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      {componentMap[activeComponent]}
    </>
  );
}

export default SidebarComponent;
