import { RiMenuFill, RiShoppingBagLine } from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";
import useScreenResponsive from "../../hooks/useScreenResponsive";

const NavbarList = ({ text }) => {
  return <li className="cursor-pointer">{text}</li>;
};

const Navbar = ({ setToggle, setMenuVisible }) => {
  const { sm, md, isLargeScreen } = useScreenResponsive();
  const openMenu = () => {
    setToggle(true);
    setMenuVisible(true);
  };
  return (
    <nav className="flex items-center justify-between px-[20px] py-[1rem] md:px-[32px] xl:px-[160px] 2xl:px-[320px]">
      {sm && (
        <>
          <Link path="/" className="cursor-pointer">
            <h1 className="font-poppins text-4xl font-black uppercase">
              VIBRAZE
            </h1>
          </Link>
          <RiMenuFill onClick={openMenu} className="h-6 w-6" />
        </>
      )}

      {(md || isLargeScreen) && (
        <>
          <Link to={"/"} className="cursor-pointer">
            <h1 className="font-poppins text-4xl font-black uppercase 2xl:text-5xl">
              VIBRAZE
            </h1>
          </Link>
          <ul className="flex items-center md:gap-6 xl:gap-16">
            <NavbarList text={"Shop"} />
            <NavbarList text={"Collections"} />
            <NavbarList text={"New Arrivals"} />
            <NavbarList text={"Brand"} />
          </ul>
          <div className="flex items-center md:gap-4 xl:gap-10">
            <RiShoppingBagLine className="cursor-pointer xl:h-6 xl:w-6" />
            <Link
              to={"/sign-up"}
              className="rounded-lg bg-[--primary-color] px-5 py-2 text-white transition-colors hover:bg-[--primary-color-hover]"
            >
              Sign In
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
