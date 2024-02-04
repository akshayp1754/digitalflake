import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCategory, updateCategory } from "../../redux/action/category";
import { useNavigate, useParams } from "react-router-dom";

function CategoryForm() {
  const { id } = useParams();

  const categorys = useSelector((state) => state.category);

  const [categoryName, setCategoryName] = useState("");
  const [Description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [mode, setMode] = useState("add");

  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    const category = categorys.find((category) => category._id === id);
    console.log(category);

    if (category) {
      setCategoryName(category.categoryName);
      setDescription(category.Description);
      setValue(category.value);
      setMode("edit");
    } else {
      clearFields();
      setMode("add");
    }
  }, [id, categorys]);
  const clearFields = () => {
    setCategoryName("");
    setDescription("");
    setValue("");
  };

  const handleAddOrUpdate = (e) => {
    try {
      e.preventDefault();
      if (categoryName === "" || Description === "" || value === "") {
        alert("All fields are required");
      } else {
        if (mode === "add") {
          dispatch(postCategory({ categoryName, Description, value }));
        } else if (mode === "edit") {
          dispatch(updateCategory(id, { categoryName, Description, value }));
        }

        clearFields();
        navigate("/home");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleAddOrUpdate}>
        <div className="flex gap-6 mb-6 md:grid-cols-2">
          <div>
            <input
              type="text"
              id="first_name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Category Name"
              required=""
            />
          </div>
          <div>
            <input
              type="text"
              id="last_name"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Description"
              required=""
            />
          </div>

          <div>
            <select value={value} onChange={(e) => setValue(e.target.value)}>
              <option value="" disabled hidden>
                Select an option
              </option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {mode === "add" ? "Submit" : "Update"}
        </button>
      </form>
    </>
  );
}

export default CategoryForm;
