import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, getCategory } from "../../redux/action/category";
import { useNavigate } from "react-router-dom";

function CategoryTable() {
  const category = useSelector((state) => state.category);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const navigate = useNavigate();

  const handleEditClick = (categoryId) => {
    navigate(`/categoryform/${categoryId}`);
  };

  const handleDelete = (categoryId) => {
    dispatch(deleteCategory(categoryId));
  };

  return (
    <div>
      <div className="mb-25 ml-16 mr-10 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>

              <th scope="col" className="px-6 py-3">
                Description
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
            {category.map((eachCategory) => (
              <tr
                key={eachCategory._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {eachCategory.categoryName}
                </th>
                <td className="px-6 py-4">{eachCategory.Description}</td>
                <td
                  className={`px-6 py-4 ${
                    eachCategory.value === "Active"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {eachCategory.value}
                </td>
                <td className="px-6 py-4 text-right">
                  

                  <button onClick={() => handleEditClick(eachCategory._id)}>
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

                  <button onClick={() => handleDelete(eachCategory._id)}>
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
    </div>
  );
}

export default CategoryTable;
