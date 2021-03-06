// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import "./HeaderNav.css";
import Bacola from '../../../assets/images/bacola-logo.png';

const HeaderNav = () => {
  const menu = [
    <>
      <li className="pr-2">
     <Link to='/home'>HOME</Link>
    </li>
      <li className="pr-2">
     <Link to='/shop'>SHOP</Link>
    </li>
      <li className="pr-2">
     <Link to='/blogs'>BLOGS</Link>
    </li>
     <li>
       <Link to='/contact'>CONTACT</Link>
    </li>
    </>
  ]
  return (
    <div className="mb-4 drop-shadow">
      <div className="navbar bg-base-100 lg:px-28 md:px-28">
        <div className="navbar-start">

          <div className="dropdown">

            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>

          </div>

          <a className="btn btn-ghost normal-case text-xl">
            {/* <img src={Bacola} alt="logo" /> */}
            Bacola
          </a>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menu}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
