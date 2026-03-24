import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/pic/logo.png";
import github from "../assets/pic/Vector.png";
import "./link.css";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8 lg:px-16 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="hover:text-[#632EE3] font-semibold">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-[#632EE3] font-semibold">
              <NavLink to="/apps">App</NavLink>
            </li>
            <li className="hover:text-[#632EE3] font-semibold">
              <NavLink to="/install">Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-[30px] w-[30px]" />
          <Link
            to="/"
            className="font-bold text-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
          >
            HERO.IO
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:text-[#632EE3] font-semibold">
            <NavLink to="/">
              {({ isActive }) => (
                <a className={isActive ? "active" : ""}>Home</a>
              )}
            </NavLink>
          </li>
          <li className="hover:text-[#632EE3] font-semibold">
            <NavLink to="/apps">App</NavLink>
          </li>
          <li className="hover:text-[#632EE3] font-semibold">
            <NavLink to="/install">Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <a
          href="https://github.com/muhammadsayed123"
          className="flex items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-2 py-1 rounded-2xl gap-2"
        >
          <img src={github} alt="" className="bg-black rounded-xl" />
          <span className="text-white">Contribute</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
