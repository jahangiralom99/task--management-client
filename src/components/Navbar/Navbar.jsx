import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {  NavLink } from "react-router-dom";
import Profile from "./Profile";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
 

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active border-l-4 border-[#ef6f18] font-bold "
              : ""
          }
        >
          Task Listing
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Task-creation"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active border-l-4 border-[#ef6f18] font-bold "
              : ""
          }
        >
          Task Creation
        </NavLink>
      </li>
    </>
  );

  return (
    <nav
      className={`sticky top-0 bg-opacity-90 mx-auto bg-slate-50 shadow-lg border-b-2 z-[99] `}
    >
      <div className="max-w-screen-xl mx-auto px-4 sticky">
        <div className="flex mx-auto justify-between items-center ">
          {/* Primary menu and logo */}
          <div className="flex items-center gap-24 my-5">
            {/* logo */}
            <div>
              <a href="/" className="flex gap-1 font-bold items-center ">
                {/* <PaperAirplaneIcon className="h-6 w-6 text-primary" /> */}
                Task Management
              </a>
            </div>
            {/* primary Link*/}
            <div className="hidden md:flex  gap-8 list-none">{navLinks}</div>
          </div>
          {/* secondary */}
          <div className="flex gap-6">
            {/* Mobile navigation toggle */}
            <div
              onClick={() => setToggleMenu(!toggleMenu)}
              className="md:hidden flex items-center"
            >
              {!toggleMenu ? (
                <button>
                  <XMarkIcon className="h-10 hover:duration-700 hover:rotate-180" />
                </button>
              ) : (
                <button>
                  <Bars3Icon className="h-10 "></Bars3Icon>
                </button>
              )}
            </div>
            <div>
              <div className="hidden md:block font-bold px-3 py-2 rounded-md">
                <Profile />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed z-10 w-full text-white bg-gray-600 overflow-hidden flex flex-col md:hidden  origin-top duration-700 ${
          toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col  gap-8 font-bold tracking-wider list-none">
            {navLinks}
          </div>
          <div className="mt-6">
            <Profile />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
