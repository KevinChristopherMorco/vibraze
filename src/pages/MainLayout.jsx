import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";

const MainLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/sign-up" && pathname !== "/sign-in" && <Navbar />}
      <main className="mx-[20px] grid min-h-screen grid-cols-4 gap-[16px] py-[32px] text-[--body-text-color] md:mx-[32px] md:auto-rows-auto md:grid-cols-8 xl:mx-[160px] xl:grid-cols-12 xl:gap-[36px] 2xl:mx-[320px]">
        <Outlet />
      </main>
      {pathname !== "/sign-up" && pathname !== "/sign-in" && <Footer />}
    </>
  );
};

export default MainLayout;
