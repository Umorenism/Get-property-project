import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TiThMenu } from "react-icons/ti";
import logo from "../assets/get-pro.png";
// import { FaUserCircle } from "react-icons/fa";
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropDown, setDropDown] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <header className="fixed bg-slate-200 top-0 left-0 right-0 z-50 shadow-md">
      <div className="flex justify-between items-center p-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-500">
          <Link to="/">
            <img src={logo} alt="" className="h-16 mb-4 " />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center gap-5">
          <Link
            to="/"
            className="py-2 text-black font-serif text-xl"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="py-2 text-black font-serif text-xl"
            onClick={toggleMenu}
          >
            Property
          </Link>
          <Link
            to="/services"
            className="py-2 text-black font-serif text-xl"
            onClick={toggleMenu}
          >
            Subscription
          </Link>
          <Link
            to="/contact"
            className="py-2 text-black font-serif text-xl"
            onClick={toggleMenu}
          >
            News
          </Link>
          <Link
            to="/contact"
            className="py-2 text-black font-serif text-xl"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
        {/* Dropdown Button for Desktop */}
        <button className="relative hidden md:block" onClick={toggleDropDown}>
          <TiThMenu size={30} />
          {dropDown && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full right-32 mt-2 bg-slate-300 shadow-lg rounded-md w-52 left-0 z-50"
            >
              <div className="flex flex-col">
                <Link
                  to="/"
                  className="py-2 px-4 text-black hover:bg-gray-100 text-lg"
                  onClick={() => setDropDown(false)}
                >
                  Buy
                </Link>
                <hr />
                <Link
                  to="/about"
                  className="py-2 px-4 text-black hover:bg-gray-100 text-lg"
                  onClick={() => setDropDown(false)}
                >
                  Sell
                </Link>
                <hr />
                <Link
                  to="/services"
                  className="py-2 px-4 text-black hover:bg-gray-100 text-lg"
                  onClick={() => setDropDown(false)}
                >
                  Explore
                </Link>
                <hr />
                <Link
                  to="/contact"
                  className="py-2 px-4 text-black hover:bg-gray-100 text-lg"
                  onClick={() => setDropDown(false)}
                >
                  Request a Property
                </Link>
                <hr />
                <Link
                  to="/contact"
                  className="py-2 px-4 text-black hover:bg-gray-100 text-lg"
                  onClick={() => setDropDown(false)}
                >
                  Post a Property
                </Link>
                <hr />
                <Link
                  to="/contact"
                  className="py-2 px-4 text-black hover:bg-gray-100 text-lg"
                  onClick={() => setDropDown(false)}
                >
                  News
                </Link>
                <hr />
                <Link
                  to="/contact"
                  className="py-2 px-4 text-black hover:bg-gray-100 text-lg"
                  onClick={() => setDropDown(false)}
                >
                  Sign up
                </Link>
                <hr />
                <Link
                  to="/contact"
                  className="py-2 px-4 mb-3 text-black hover:bg-gray-100 text-lg"
                  onClick={() => setDropDown(false)}
                >
                  Login
                </Link>
              </div>
            </motion.div>
          )}
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black" onClick={toggleMenu}>
          <TiThMenu size={28} />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 bg-white shadow-lg md:hidden z-50"
        >
          <div className="flex justify-end p-4">
            <button className="text-black" onClick={toggleMenu}>
              <TiThMenu size={28} />
            </button>
          </div>
          <div className="flex flex-col items-center p-4">
            <Link
              to="/"
              className="py-2 text-black text-lg"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-2 text-black text-lg"
              onClick={toggleMenu}
            >
              Property
            </Link>
            <Link
              to="/services"
              className="py-2 text-black text-lg"
              onClick={toggleMenu}
            >
              Subscription
            </Link>
            <Link
              to="/contact"
              className="py-2 text-black text-lg"
              onClick={toggleMenu}
            >
              News
            </Link>
            <Link
              to="/contact"
              className="py-2 text-black text-lg"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
