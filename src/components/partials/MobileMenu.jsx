import { RiCloseLine } from "@remixicon/react";
import React from "react";
import OutlineButton from "../buttons/OutlineButton";
import PrimaryButton from "../buttons/PrimaryButton";

const NavbarList = ({ text }) => {
  return <li className="cursor-pointer text-2xl font-medium">{text}</li>;
};

const MobileMenu = ({ isMenuVisible, setToggle, setMenuVisible }) => {
  const closeMenu = () => {
    setMenuVisible(false);
    setTimeout(() => {
      setToggle(false);
    }, 700);
  };
  return (
    <div className="animate-slide-left fixed right-0 top-0 z-[999] h-screen w-full">
      <div
        className={`${isMenuVisible ? "" : "animate-slide-right"} flex h-full flex-col justify-between bg-white p-8`}
      >
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-between">
            <h1 className="font-poppins text-4xl font-black uppercase 2xl:text-5xl">
              VIBRAZE
            </h1>
            <RiCloseLine onClick={closeMenu} className="h-8 w-8" />
          </div>
          <ul className="flex flex-col gap-5">
            <NavbarList text={"Shop"} />
            <NavbarList text={"Collections"} />
            <NavbarList text={"New Arrivals"} />
            <NavbarList text={"Brand"} />
          </ul>
        </div>
        <div className="flex w-full flex-col gap-4">
          <PrimaryButton
            text={"Sign Up"}
            dynamicClass={"w-full"}
            isLink={true}
            linkPath={"/sign-up"}
          />
          <OutlineButton text={"Sign In"} isLink={true} linkPath={"/sign-in"} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
