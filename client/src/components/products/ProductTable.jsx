import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProduct } from "../../redux/action/products";
import axios from "axios";
import Products from "./Products";
import { useNavigate } from "react-router-dom";

export default function ProductTable() {
    const productss = useSelector((state) => state.product);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()

 

  const handleEditClick = (productId) => {
    navigate(`/productform/${productId}`);
  };

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <>
      <Products />
      <div className="mb-25 ml-64 mr-10  overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>

              <th scope="col" className="px-6 py-3">
                Pack Size
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                MRP
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                status
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {productss.map((product) => (
              <tr
                key={product._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.productname}
                </th>
                <td className="px-6 py-4">{product.packsize}</td>
                <td className="px-6 py-4">{product.selectedCategory}</td>
                <td className="px-6 py-4">{product.MRP}</td>
                <td className="px-6 py-4">
                  <img
                    className="w-10 h-10 rounded"
                    src={product.image}
                    alt="Product Image"
                  />
                </td>
                <td
                  className={`px-6 py-4 ${
                    product.status === "Active"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {product.status}
                </td>
                <td className="px-6 py-4 text-right">
                  <button onClick={() => handleEditClick(product._id)}>
                    <svg
                      className="h-8 w-8 text-red-600"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{" "}
                      <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />{" "}
                      <line x1="16" y1="5" x2="19" y2="8" />
                    </svg>
                  </button>

                  <button onClick={() => handleDelete(product._id)}>
                    <svg
                      className="h-8 w-8 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
