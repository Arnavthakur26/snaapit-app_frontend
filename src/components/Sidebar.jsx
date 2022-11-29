import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../assets/logowhite.png";
import logoBlack from "../assets/logo-black.png";
import { categories } from "../utils/data";
// import ReactImageAppear from "react-image-appear";

const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-gray-50 hover:text-white transition-all hover:ml-4 duration-200 ease-in-out capitalize";
const isActiveStyle =
  "flex items-center px-5 gap-3 font-extrabold border-r-2 shadow-lg transition-all duration-200 ease-in-out capitalize bg-white rounded-lg p-2 m-2 ml-4";

const Sidebar = ({ closeToggle, user }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className="flex flex-col justify-between sticky bg-gradient-to-tr  from-teal-900 to-teal-700 h-full overflow-y-scroll min-w-210 hide-scrollbar rounded-tr-3xl rounded-br-3xl shadow-gray-600 shadow-2xl top-2 ">
      <div className="flex flex-col z-50">
        <Link
          to="/"
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className="w-full ml-4" />
        </Link>
        <div className="flex flex-col gap-5 mt-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <FaHome />
            Home
          </NavLink>
          {user && (
            <Link
              to={`user-profile/${user._id}`}
              className="flex  mb-3 gap-2 p-2 items-center bg-gray-100 rounded-lg shadow-xl mx-3 hover:shadow-teal-500 duration-200 hover:shadow-2xl"
              onClick={handleCloseSidebar}
            >
              <img
                src={user.image}
                className="w-10 h-10 rounded-full"
                alt="user-profile"
              />
              <p>{user.userName}</p>
              <IoIosArrowForward />
            </Link>
          )}
          <h3 className="mt-2 px-5 text-base 2xl:text-xl text-white">
            Discover cateogries
          </h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              onClick={handleCloseSidebar}
              key={category.name}
            >
              <img
                src={category.image}
                className="w-8 h-8 rounded-full shadow-sm"
                alt="category"
              />
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
