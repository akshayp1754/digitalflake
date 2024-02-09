import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProduct } from "../../redux/action/products";
import Products from "./Products";
import { useNavigate } from "react-router-dom";
import privateRoute from "../hoc/privateRoute";

function ProductTable() {
  const productss = useSelector((state) => state.product);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleEditClick = (productId) => {
    navigate(`/productform/${productId}`);
  };

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const dispatch = useDispatch();
  const fetchData = () => {
    try {
      dispatch(getProduct());
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [dispatch]);

  return (
    <>
      <Products />
      <div className="mx-auto  overflow-x-auto shadow-md sm:rounded-lg">
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
                MRP(RS)
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
          {loading ? (
              <tr>
                <td colSpan="4" className="text-center">
                  <div className="flex items-center justify-center h-full">
                    <div role="status" className="text-center">
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                </td>
              </tr>
            ) :
              productss.length > 0 ? (
              productss.map((product) => (
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
                        className="h-8 w-8 text-black"
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
                        className="h-8 w-8 text-red-500"
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
                 green     </svg>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className=" font-bold p-4 text-center">
                  <div >No products found. Please add some products </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default privateRoute(ProductTable);
