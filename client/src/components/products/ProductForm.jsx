import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, postProduct, updateProduct } from "../../redux/action/products";
import { useNavigate, useParams } from "react-router-dom";
import { getCategory, updateCategory } from "../../redux/action/category";

function ProductForm() {
  const productss = useSelector((state) => state.product)
  const categoryData = useSelector((state) => state.category);
  const [category, setCategory] = useState("");
  const [selectedCategory, setselectedCategory] = useState("");
  const [productname, setProductname] = useState("");
  const [packsize, setPacksize] = useState("");
  const [MRP, setMRP] = useState("");
  const [productimage, setProductimage] = useState(null);
  const [status, setStatus] = useState("");
  const [mode, setMode] = useState("add"); 

  const { id } = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCategory())
    dispatch(getProduct())

    setselectedCategory(categoryData)

    const product = productss.find((product) => product._id === id);
    if (product) {
      setProductname(product.productname)
      setPacksize(product.packsize)
      setMRP(product.MRP)
      setStatus(product.status)
      setCategory(product.selectedCategory)
      setMode("edit");
    } else{
      setMode("add");
    }
  },[dispatch])

 

  const imageupload = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const filereader = new FileReader();
    filereader.onload = () => {
      setProductimage(file);
    };
    filereader.readAsDataURL(file);
  };

  const handleAddOrUpdate = (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("productimage", productimage);
      formData.append("productname", productname);
      formData.append("packsize", packsize);
      formData.append("MRP", parseInt(MRP, 10));
      formData.append("status", status);
      formData.append("selectedCategory", selectedCategory)

      
      if (mode === "add") {
        dispatch(postProduct(formData));
        navigate("/home")
        
      } else if (mode === "edit"){
        const numericMRP = parseInt(MRP, 10);
        dispatch(updateProduct(id ,{ productname, packsize, MRP:numericMRP, status, category}))
        navigate("/home")
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleAddOrUpdate}>
        <div className="grid mt-5 gap-6 mb-6 md:grid-cols-2">
          <div className="flex">
            <select
              value={selectedCategory}
              onChange={(e) => setselectedCategory(e.target.value)}
              className="w-1/2  dark:border-gray-600 rounded-lg"
            >
              <option value="" disabled hidden>
                Category
              </option>
              {categoryData.map((categoryObject) => (
                <option
                  key={categoryObject._id}
                  value={categoryObject.categoryName}
                >
                  {categoryObject.categoryName}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={productname}
              onChange={(e) => setProductname(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-5"
              placeholder="Product Name"
              required=""
            />
          </div>

          <div></div>
          <div className="flex ">
            <input
              type="text"
              id="pack size"
              value={packsize}
              onChange={(e) => setPacksize(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Pack Size"
              required=""
            />
            <input
              type="text"
              id="last_name"
              value={MRP}
              onChange={(e) => setMRP(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-5"
              placeholder="MRP"
              required=""
            />
          </div>
          <div></div>
        </div>

        <div className="flex">
          {/* <input
            className=" w-1/4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
            accept="image/*"
            onChange={imageupload}
          /> */}
          <input
            className="block w-1/4 mt-2 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="small_size"
            type="file"
            accept="image/*"
            onChange={imageupload}
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-2  ml-5 w-1/4 dark:border-gray-600 rounded-lg "
          >
            <option value="" disabled hidden>
              Select an option
            </option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <button
          type="submit"
          className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
         {mode === "add" ? "Submit" : "Update"}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
