import React from "react";

const Nav = () => {
  return (
    <>
      <div className="h-16 bg-red-400	flex justify-between items-center px-10">
        <div className="flex justify-around items-center w-fit gap-5 text-white	">
          <h1 className="text-2xl font-bold	cursor-pointer">
            Kalvium
          </h1>
          
          <p className="text-gray-300 cursor-pointer">About Us</p>
          <p className="text-gray-300 cursor-pointer">Contacts</p>
          <p className="text-gray-300 cursor-pointer">Courses</p>
        </div>
        <div className=" w-fit border-2 border-white-800 rounded px-2 py-1 text-neutral-50 cursor-pointer  ">
          Login
        </div>
      </div>
    </>
  );
};

export default Nav;
