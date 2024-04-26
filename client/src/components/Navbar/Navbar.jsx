import React from "react";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <div className="h-20">
      <div className="flex py-3 px-8 items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="logo">
            <img class="w-20 h-auto" src="/img/logo.png" alt="logo" />
          </div>
          <div className="flex items-center text-lg">
            <Link className="link" to="/products/1">
              Men
            </Link>
          </div>
          <div className="flex items-center text-lg	">
            <Link className="link" to="/products/2">
              Women
            </Link>
          </div>
          <div className="flex items-center text-lg	">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="text-3xl tracking-wide">
          <Link className="" to="/">
            Retail Therapy
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center text-lg	">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="flex items-center text-lg	">
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="flex items-center text-lg	">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
          <div className="flex text-gray-700 cursor-pointer	gap-4">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="relative">
              <ShoppingCartOutlinedIcon />
              <div className="absolute text-xs h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center top-0 right-0 -mt-2 -mr-2">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
