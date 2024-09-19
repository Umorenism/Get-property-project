import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPropertiesDropdownOpen, setIsPropertiesDropdownOpen] =
    useState(false);
  const navigate = useNavigate();
  const [sigupopen, setSignupOpen] = useState(false);
  const handlesignupopen = () => {
    setSignupOpen(!sigupopen);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const togglePropertiesDropdown = () => {
    setIsPropertiesDropdownOpen(!isPropertiesDropdownOpen);
  };

  const togglePageDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleRoute = (path: any) => {
    navigate(path);
    setSignupOpen(false); // Close the dropdown after navigation
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10 h-[80px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <button className="text-2xl font-bold text-gray-800">
              Get Property
            </button>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center text-lg">
          <Link to="/" className="text-gray-700 hover:text-orange-500">
            Home
          </Link>
          <div className="relative">
            <button
              onClick={togglePropertiesDropdown}
              className="text-gray-700 hover:text-orange-500 flex items-center"
            >
              Properties
              <MdOutlineArrowDropDown className="ml-1" />
            </button>
            {isPropertiesDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg py-2 mt-1 rounded-md w-[200px]">
                <Link
                  to="/service1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Service 1
                </Link>
                <Link
                  to="/service2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Service 2
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={togglePageDropdown}
              className="text-gray-700 hover:text-orange-500 flex items-center"
            >
              Page
              <MdOutlineArrowDropDown className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg py-2 mt-1 rounded-md w-[200px]">
                <Link
                  to="/page1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Page 1
                </Link>
                <Link
                  to="/page2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Page 2
                </Link>
              </div>
            )}
          </div>
          <Link to="/contact" className="text-gray-700 hover:text-orange-500">
            Contact
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-orange-500">
            About us
          </Link>
        </nav>

        {/* Login/Signup */}
        <div className="hidden md:flex items-center space-x-2">
          <FaUserCircle size={30} className="text-gray-700" />
          <Link to="/login" className="text-blue-700 hover:text-orange-500">
            Login
          </Link>
          <span>/</span>
          <Link
            to=""
            className="text-blue-700 hover:text-orange-500"
            onClick={handlesignupopen}
          >
            Sign Up
          </Link>
        </div>
        {sigupopen && (
          <div className="absolute top-full right-[120px] bg-white shadow-lg py-2 mt-1 rounded-md w-[300px]">
            <div
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleRoute("/signup")}
            >
              User
            </div>
            <hr />
            <div
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleRoute("/signup/agent")}
            >
              Agent
            </div>
            <hr />
            <div
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleRoute("/signup/admin")}
            >
              Admin
            </div>
            <hr />
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-white shadow-lg">
            <nav className="flex flex-col space-y-2 p-4">
              <Link to="/" className="text-gray-700 hover:text-orange-500">
                Home
              </Link>
              <div className="relative">
                <button
                  onClick={togglePropertiesDropdown}
                  className="text-gray-700 hover:text-orange-500 flex items-center w-full"
                >
                  Properties
                  <MdOutlineArrowDropDown className="ml-1" />
                </button>
                {isPropertiesDropdownOpen && (
                  <div className="mt-1 space-y-1">
                    <Link
                      to="/service1"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Service 1
                    </Link>
                    <Link
                      to="/service2"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Service 2
                    </Link>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={togglePageDropdown}
                  className="text-gray-700 hover:text-orange-500 flex items-center w-full"
                >
                  Page
                  <MdOutlineArrowDropDown className="ml-1" />
                </button>
                {isDropdownOpen && (
                  <div className="mt-1 space-y-1">
                    <Link
                      to="/page1"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Page 1
                    </Link>
                    <Link
                      to="/page2"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Page 2
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-orange-500"
              >
                Contact
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-orange-500">
                About us
              </Link>
              <div className="flex flex-col  mt-4">
                <Link
                  to="/login"
                  className="text-blue-700 hover:text-orange-500 mb-4"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="text-blue-700 hover:text-orange-500"
                >
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
