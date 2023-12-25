import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="z-10 fixed w-full p-3 bg-gradient-to-r from-white to-slate-200 text-black">
      <nav className="container">
        <div className="flex justify-around px-7 items-center">
          <div>
            <h1 className="text-xl md:text-3xl font-bold text-slate-950">
              {" "}
              <Link to="/">
                Kaam{" "}
                <span className="text-cyan-500 font-extrabold"> Kaaj </span>
              </Link>
            </h1>
          </div>
          <div className="hidden md:flex gap-2 items-center justify-between">
            <ul className="flex font-semibold gap-4 text-base">
              <li>
                {" "}
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 ml-8">
              <Link
                to="/auth"
                className="border-white bg-gradient-to-r from-emerald-800 to-teal-300 font-semibold text-white hover:bg-gradient-to-r hover:from-teal-300 hover:to-emerald-700 px-6 py-2 rounded-lg sm:text-sm w-full md:w-auto duration-300"
              >
                Sign up
              </Link>
            </div>
          </div>
          <div className="flex md:hidden">
            <AiOutlineMenu
              size={26}
              className="text-black"
              onClick={toggleMenu}
            />
          </div>
        </div>
        <div
          className={`md:hidden fixed top-0 right-0 h-full bg-gradient-to-r w-[70%] from-white to-slate-200 transition-transform duration-700 z-10 transform ${
            showMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end px-5 py-3">
            <AiOutlineClose
              size={30}
              className="text-gray-900"
              onClick={toggleMenu}
            />
          </div>
          <ul className="flex flex-col items-center font-semibold gap-8 text-base py-8">
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <Link
              to="/auth"
              className="border-white bg-gradient-to-r from-emerald-800 to-teal-300 font-semibold text-white hover:bg-gradient-to-r hover:from-teal-300 hover:to-emerald-700 px-6 py-2 rounded-lg sm:text-sm md:w-auto duration-300"
            >
              Sign up
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
