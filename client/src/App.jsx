import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Category from "./components/category/Category";
import CategoryForm from "./components/category/CategoryForm";
import Layout from "./components/Layout";
import CategoryTable from "./components/category/CategoryTable";
import Products from "./components/products/Products";
import ProductForm from "./components/products/ProductForm";
import ProductTable from "./components/products/ProductTable";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" index element={<Layout/>}/>
        <Route path="/categorytable" element={<Category />} />
        <Route path="/categoryform" element={<CategoryForm />} />
        <Route path="/categoryform/:id" element={<CategoryForm />} />
        <Route path="/table" element={<CategoryTable />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productform" element={<ProductForm />} />
        <Route path="/productform/:id" element={<ProductForm />} />
        <Route path="/productstable" element={<ProductTable />} />
       
     
      </Routes>
    </>
  );
}

export default App;
