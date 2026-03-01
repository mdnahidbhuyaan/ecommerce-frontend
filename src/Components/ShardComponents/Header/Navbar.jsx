import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-white border-y py-2 border-gray-200">
      <div className="flex items-center justify-between container mx-auto px-24">
        <div className="flex items-center gap-2 bgp text-white py-2 px-6 rounded-md">
          <TbCategory className=" " />
          <p className="">All Category</p>
        </div>
        <div className="text-black flex gap-10 font-semibold">
          <NavLink className={({isActive}) => isActive? `cp` : ``} to="/">Home</NavLink>
          <NavLink className={({isActive}) => isActive? `cp` : ``} to="/shop">Shop Now</NavLink>
          <NavLink className={({isActive}) => isActive? `cp` : ``} to="/about">About</NavLink>
          <NavLink className={({isActive}) => isActive? `cp` : ``} to="/blog">Blog</NavLink>
          <NavLink className={({isActive}) => isActive? `cp` : ``} to="/contact">Contact</NavLink>
        </div>
             <div className="flex items-center gap-2 bgp text-white py-2 px-6 rounded-md">
        <FaShoppingCart />
          <p className="">Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
