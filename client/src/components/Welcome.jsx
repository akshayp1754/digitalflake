import React from "react";

function Welcome() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-40 mr-16">
        <img
          className="w-32 h-24 mr-2"
          src="https://digitalflake.com/wp-content/uploads/2023/04/DF_logo-transparent2.png"
          alt="logo"
        />{" "}
        <p className="text-lg text-gray-800">Welcome to Digitalflake Admin</p>
      </div>
    </div>
  );
}

export default Welcome;
