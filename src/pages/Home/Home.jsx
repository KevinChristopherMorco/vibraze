import React from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SectionHeading from "../../components/headings/SectionHeading";
import { RiStarFill } from "@remixicon/react";
import FeaturedCard from "../../components/cards/FeaturedCard";
import OutlineButton from "../../components/buttons/OutlineButton";

const HomeStat = ({ number, text }) => {
  return (
    <div className="flex flex-col items-center">
      <h4 className="text-[3rem] font-black leading-none text-[--primary-color]">
        {number}
      </h4>
      <p>{text}</p>
    </div>
  );
};

const Home = () => {
  return (
    <div className="col-span-4 grid gap-y-[54px]">
      <section className="grid gap-y-[32px] md:grid-cols-[2.5fr_1.5fr] md:gap-6">
        <div className="flex flex-col gap-y-[28px]">
          <div>
            <h1 className="font-poppins text-5xl font-black text-black">
              Wear Confidence.
            </h1>
            <h1 className="font-poppins text-5xl font-black text-[--primary-color]">
              Feel
            </h1>
            <h1 className="font-poppins text-5xl font-black text-[--primary-color]">
              Amazing.
            </h1>
          </div>
          <p>
            Discover the latest trends and timeless pieces that empower you to
            express yourself. From everyday essentials to standout styles, our
            collection is designed to make you feel confident, comfortable, and
            ready to take on the world.
          </p>
          <PrimaryButton text={"shop now"} dynamicClass={"uppercase"} />
          <div className="flex flex-wrap justify-center gap-x-[24px] gap-y-[36px] md:justify-start md:gap-x-[14px]">
            <HomeStat number={"220"} text={"Branches Worldwide"} />
            <HomeStat number={"25"} text={"International Partners"} />
            <HomeStat number={"1M+"} text={"Satisfied Customers"} />
          </div>
        </div>
        {/* <img
          src="/assets/images/home/hero-img.png"
          alt=""
          className="-mx-[20px]"
        /> */}
        <div className="-mx-[20px] w-screen">
          <img
            src="/assets/images/home/hero-img.png"
            alt=""
            className="w-full object-cover"
          />
          <div className="flex w-full items-center gap-[34px] overflow-hidden bg-black px-[16px] py-[18px]">
            <img
              src="/assets/images/home/HM-Logo.png"
              alt="logo"
              className="w-[70px]"
            />
            <img
              src="/assets/images/home/Levis-Logo.png"
              alt="logo"
              className="w-[70px]"
            />
            <img
              src="/assets/images/home/Obey-Logo.png"
              alt="logo"
              className="w-[70px]"
            />
            <img
              src="/assets/images/home/Puma-Logo.png"
              alt="logo"
              className="w-[70px]"
            />
            <img
              src="/assets/images/home/Adidas-Logo.png"
              alt="logo"
              className="w-[70px]"
            />
            <img
              src="/assets/images/home/Uniqlo-Logo.png"
              alt="logo"
              className="w-[70px]"
            />
          </div>
        </div>
      </section>
      <section className="grid gap-y-[28px]">
        <SectionHeading
          text={"Stylist's Choice"}
          dynamicClass={"text-center"}
        />
        <div className="grid grid-cols-4 gap-x-4">
          <FeaturedCard
            productName={"Cotton Shirt"}
            productPrice={"$120"}
            productImage={"/assets/images/products/cotton-shirt.png"}
            dynamicClass={"col-span-2"}
          />
          <FeaturedCard
            productName={"Polo Shirt"}
            productPrice={"$220"}
            productImage={"/assets/images/products/polo-shirt.png"}
            dynamicClass={"col-span-2"}
          />
        </div>
        <OutlineButton text={"View All"} />
      </section>

      <section className="grid gap-y-[28px]">
        <SectionHeading text={"New Arrivals"} dynamicClass={"text-center"} />
        <div className="grid grid-cols-4 gap-x-4">
          <FeaturedCard
            productName={"CHIC Designed Shirt"}
            productPrice={"$330"}
            productImage={"/assets/images/products/chic-shirt.png"}
            dynamicClass={"col-span-2"}
          />
          <FeaturedCard
            productName={"Baggy Jeans"}
            productPrice={"$120"}
            productImage={"/assets/images/products/baggy-jeans.png"}
            dynamicClass={"col-span-2"}
            hasDiscount={true}
            productDiscountPrice={"$180"}
            productDiscountPercent={"33%"}
          />
        </div>
        <OutlineButton text={"View All"} />
      </section>
      <section className="grid gap-y-[28px]">
        <SectionHeading text={"Hot Items"} dynamicClass={"text-center"} />
        <div className="grid grid-cols-4 gap-x-4">
          <FeaturedCard
            productName={"Cotton Crew Neck"}
            productPrice={"$170"}
            productImage={"/assets/images/products/crew-neck.png"}
            dynamicClass={"col-span-2"}
          />
          <FeaturedCard
            productName={"Vote Designed Shirt"}
            productPrice={"$150"}
            productImage={"/assets/images/products/vote-shirt.png"}
            dynamicClass={"col-span-2"}
            hasDiscount={true}
            productDiscountPrice={"$220"}
            productDiscountPercent={"32%"}
          />
        </div>
        <OutlineButton text={"View All"} />
      </section>
    </div>
  );
};

export default Home;
