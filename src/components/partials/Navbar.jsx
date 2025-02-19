import { RiMenuFill, RiSearchLine, RiShoppingBagLine } from "@remixicon/react";
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
      {(sm || md) && (
        <>
          <Link path="/" className="cursor-pointer">
            <h1 className="font-poppins text-4xl font-black uppercase">
              VIBRAZE
            </h1>
          </Link>
          <RiMenuFill onClick={openMenu} className="h-6 w-6" />
        </>
      )}

      {isLargeScreen && (
        <>
          <Link to={"/"} className="cursor-pointer">
            <h1 className="font-poppins text-4xl font-black uppercase 2xl:text-5xl">
              VIBRAZE
            </h1>
          </Link>
          <ul className="flex items-center md:gap-6 xl:gap-5">
            <NavbarList text={"Shop"} />
            <NavbarList text={"Collections"} />
            <NavbarList text={"New Arrivals"} />
            <NavbarList text={"Brand"} />
          </ul>
          <form action="" className="lgbasis-[30%] xl:basis-[35%]">
            <div className="relative">
              <RiSearchLine className="absolute left-2 top-[50%] h-4 w-4 -translate-y-[50%]" />
              <input
                type="search"
                name=""
                id=""
                className="w-full rounded-2xl bg-gray-200 px-8 py-2"
                placeholder="Search an item"
              />
            </div>
          </form>
          <div className="flex items-center md:gap-4 xl:gap-5">
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
