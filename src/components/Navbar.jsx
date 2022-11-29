import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAdd, IoMdSearch } from "react-icons/io";
// import ReactImageAppear from "react-image-appear";

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();

  if (user) {
    return (
      <div className="flex gap-2 md:gap-5 w-full mt-3 bg-gradient-to-tr from-gray-50 to-gray-200 rounded-md ">
        <div className="flex justify-start items-center w-full px-2 rounded-lg bg-white shadow-md border-none outline-none focus-within:shadow-lg  duration-200">
          <IoMdSearch fontSize={21} className="ml-1" />
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            value={searchTerm}
            onFocus={() => navigate("/search")}
            className="p-2 w-full rounded-md bg-transparent outline-none"
          />
        </div>
        <div className="flex gap-3 bg-transparent">
          <Link to={`user-profile/${user?._id}`} className="hidden md:block ">
            <img
              src={user.image}
              alt="user-pic"
              className="w-14 h-12 rounded-lg shadow-lg hover:shadow-xl duration-200 cursor-pointer "
            />
          </Link>
          <Link
            to="/create-pin"
            className="bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex  justify-center hover:shadow-lg shadow-teal-800 duration-200 items-center"
          >
            <IoMdAdd />
          </Link>
        </div>
      </div>
    );
  }

  return null;
};

export default Navbar;
