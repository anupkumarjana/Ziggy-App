import React, { useState } from "react";
import logo from "../assets/navbar/swiggy-logo.svg";
import { FaLocationDot } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  function handleMenuClose() {
    setMenuOpen(!menuOpen);
  }
  return (
    <header className="fixed top-0 z-[999999] flex justify-between items-center px-10 lg:px-32 py-8 lg:py-6 font-satoshi border-b w-full shadow-lg bg-white">
      <div className="flex gap-4 items-center">
        <img src={logo} alt="logo" className="lg:w-8 w-12" />
        <div className="lg:flex gap-2 items-center hidden">
          <span className="text-sm">
            <FaLocationDot />
          </span>
          <span className="text-sm text-slate-500">
            Haldia, West Bengal, India
          </span>
        </div>
      </div>

      <nav className="lg:block hidden">
        <ul className="flex justify-between gap-10">
          <li>
            <Link to="/search" className="flex gap-2 items-center hover:text-red-500 font-medium text-[1rem] text-slate-700 cursor-pointer">
              <span className="text-xl">
                <IoSearch />
              </span>
              <span>Search</span>
            </Link>
          </li>
          <li>
            <Link to="/offers" className="flex gap-2 items-center hover:text-red-500 font-medium text-[1rem] text-slate-700 cursor-pointer">
              <span className="text-xl">
                <BiSolidOffer />
              </span>
              <span>Offers</span>
            </Link>
          </li>
          <li>
            <Link to="/help" className="flex gap-2 items-center hover:text-red-500 font-medium text-[1rem] text-slate-700 cursor-pointer">
              <span className="text-xl">
                <IoHelpBuoyOutline />
              </span>
              <span>Help</span>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex gap-2 items-center hover:text-red-500 font-medium text-[1rem] text-slate-700 cursor-pointer">
              <span className="text-xl">
                <RiAccountCircleLine />
              </span>
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/cart" className="flex gap-2 items-center hover:text-red-500 font-medium text-[1rem] text-slate-700 cursor-pointer">
              <span className="text-xl">
                <FaShoppingCart />
              </span>
              <span>Cart</span>
            </Link>
          </li>
        </ul>
      </nav>
      {/* ----------------------------------Smaller screen navbar------------------------------------- */}
      <div className="lg:hidden flex gap-8 items-center">
        <span className="text-3xl font-bold">
          <IoSearch />
        </span>
        <span className="text-3xl">
          <FaShoppingCart />
        </span>
        <span className="text-3xl">
          <RiAccountCircleLine />
        </span>
        <span onClick={handleMenuClick} className="text-3xl">
          <CiMenuBurger />
        </span>
      </div>
      {/* ------------------------Menu icon nav--------------------------------------------------------- */}
      {menuOpen && (
        <ul className="text-4xl flex flex-col pt-[10%] left-0 top-0 justify-start items-center gap-10 absolute bg-white w-full h-[100vh] z-999999">
          <li onClick={handleMenuClose}>
            <span className="text-3xl">
              <MdOutlineClose />
            </span>
          </li>
          <li className="flex gap-2 items-center hover:text-red-500 font-medium text-[1rem] text-slate-700 cursor-pointer">
            <span>
              <BiSolidOffer />
            </span>
            <a href="/offers">Offers</a>
          </li>
          <li className="flex gap-2 items-center hover:text-red-500 font-medium text-[1rem] text-slate-700 cursor-pointer">
            <span>
              <IoHelpBuoyOutline />
            </span>
            <a href="/help">Help</a>
          </li>
        </ul>
      )}
    </header>
  );
}
