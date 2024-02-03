// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <nav
      style={{
        background: "#0E131F",
      }}
      className="bg-white-800 shadow-md w-full"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="inset-y-0 text-xl text-white left-0 flex items-center">
           <h2>
           <span className="bold">Digital</span>flake

           </h2> 
          </div>
          <div className="flex w-2/3 items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                style={{
                  borderBottom: "1px solid #ffbf00",
                }}
                type="text"
                id="simple-search"
                className="
                    rounded-md
                    focus:outline-none
                    bg-white-50  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                placeholder="Search post by name..."
                required=""
              />
              {/*
                  loader
                  <div
                    style={{
                      borderBottom: "1px solid dodgerblue",
                      height: "2px",
                    }}
                    className="absolute left-0 flex items-center pl-3 pointer-events-none"
                  ></div> */}
            </div>
          </div>

          <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* { */}
              {/* auth.user && ( */}
                <div className="ml-3 relative">
              <div className="flex justify-center items-center">
                <div>
                </div>
                <svg
                  onClick={handleLogout}
                  className="ml-4 hover:cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 12L13 12"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="flex justify-center items-center">
                {/* <Link
                        to="/login"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      > */}
                {/* Login */}
                {/* </Link> */}
                {/* <Link
                        to="/signup"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      > */}
                {/* Register */}
                {/* </Link> */}
              </div>
            </div>
              {/* ) */}
            {/* } */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
