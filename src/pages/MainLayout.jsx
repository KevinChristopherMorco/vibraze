import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="mx-[20px] grid grid-cols-4 gap-[16px] py-[32px] text-[--body-text-color] md:mx-[32px] md:grid-cols-8 xl:mx-[160px] xl:grid-cols-12 xl:gap-[36px] 2xl:mx-[320px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
