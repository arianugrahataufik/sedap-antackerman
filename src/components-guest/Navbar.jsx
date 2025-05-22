import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";
import Logo from "./Logo";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${
          isActive
            ? "text-hijau bg-white-200 font-extrabold"
            : "text-white hover:text-hijau hover:bg-white-200 hover:font-bold"
        }`;
  return (
    <div
      id="header-container"
      className="flex justify-between items-center p-6 bg-black lg:px-24"
    >
      <Logo />
      <div
        id="icons-container"
        className="flex items-center space-x-4 font-poppins "
      >
        <NavLink to="/home" className={menuClass}>
          Home
        </NavLink>
        <NavLink to="/product" className={menuClass}>
          Product
        </NavLink>
        <NavLink to="/testimonial" className={menuClass}>
          Testimonial
        </NavLink>
        <NavLink to="/about" className={menuClass}>
          About
        </NavLink>
        <NavLink to="/" className={menuClass}>
          Dashboard
        </NavLink>
      </div>
      {/* Search Bar */}
      <div id="search-bar" className="relative  max-w-lg">
        <input
          id="search-input"
          type="text"
          placeholder="Search Here..."
          className="border border-gray-100 p-2 pr-10 bg-white w-full max-w-lg rounded-md outline-none"
        />
        <FaSearch
          id="search-icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300"
        />
      </div>

      {/* Icon & Profile Section */}
      <div id="icons-container" className="flex items-center space-x-4">
        {/* Icons */}

        {/* Profile Section */}
        <div id="action-button" className=" font-poppins">
          <Link
            id="add-button"
            to="/login"
            className="bg-hijau text-white px-4 py-2 rounded-lg"
          >
            Login
          </Link>
          <Link
            id="add-button"
            to="/register"
            className="bg-hijau text-white ml-8 px-4 py-2 rounded-lg"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
