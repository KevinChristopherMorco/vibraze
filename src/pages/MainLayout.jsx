import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/partials/Footer";
import MobileMenu from "../components/partials/MobileMenu";
import Navbar from "../components/partials/Navbar";
import useToggleMenu from "../hooks/navbar/useToggleMenu";

const MainLayout = () => {
  const { pathname } = useLocation();
  const { isToggle, setToggle, isMenuVisible, setMenuVisible } =
    useToggleMenu();
  return (
    <>
      {pathname !== "/sign-up" && pathname !== "/sign-in" && (
        <Navbar setToggle={setToggle} setMenuVisible={setMenuVisible} />
      )}
      <main className="mx-[20px] grid min-h-screen grid-cols-4 gap-[16px] gap-y-[54px] py-[32px] text-[--body-text-color] md:mx-[32px] md:auto-rows-auto md:grid-cols-8 xl:mx-[160px] xl:grid-cols-12 xl:gap-[36px] xl:gap-y-[85px] 2xl:mx-[320px]">
        <Outlet />
      </main>
      {pathname !== "/sign-up" && pathname !== "/sign-in" && <Footer />}
      {isToggle && (
        <MobileMenu
          isToggle={isToggle}
          isMenuVisible={isMenuVisible}
          setToggle={setToggle}
          setMenuVisible={setMenuVisible}
        />
      )}
    </>
  );
};

export default MainLayout;
