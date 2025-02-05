import { RiMenuFill } from "@remixicon/react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[20px] py-[1rem]">
      <h1 className="font-poppins text-4xl font-black uppercase">VIBRAZE</h1>
      <RiMenuFill className="h-6 w-6" />
    </nav>
  );
};

export default Navbar;
