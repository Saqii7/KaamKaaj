import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SButton from "./SButton";
import PButton from "./PButton";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="z-10 fixed w-full p-3 bg-gradient-to-r from-white to-slate-200 text-black">
      <nav>
        <div className="flex justify-around px-7 items-center">
          <div>
            <h1 className="text-xl md:text-3xl font-bold text-slate-950">
              Kaam <span className="text-cyan-500 font-extrabold"> Kaaj </span>{" "}
            </h1>
          </div>
          <div className="hidden md:flex gap-2 items-center justify-between">
            <ul className="flex font-semibold gap-4 text-base">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <div className="flex flex-wrap gap-2 ml-8">
              <PButton text="Log in" />
              <SButton text="Sign-up" />
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
          className={`md:hidden fixed top-0 right-0 h-full bg-gradient-to-r w-[70%] from-slate-950 to-stone-400 transition-transform duration-700 z-10 transform ${
            showMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end px-5 py-3">
            <AiOutlineClose
              size={30}
              className="text-white"
              onClick={toggleMenu}
            />
          </div>
          <ul className="flex flex-col items-center font-semibold gap-8 text-base py-8">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact </li>
          </ul>
          <div className="flex gap-2 flex-wrap justify-center">
            <PButton text="Log-in" />
            <SButton text="Sign-up" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
