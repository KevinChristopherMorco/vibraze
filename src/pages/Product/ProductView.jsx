import {
  RiAddFill,
  RiArrowLeftWideLine,
  RiShoppingBagLine,
  RiStarFill,
  RiSubtractFill,
} from "@remixicon/react";
import React from "react";
import { SwiperSlide } from "swiper/react";
import OutlineButton from "../../components/buttons/OutlineButton";
import FeaturedCard from "../../components/cards/FeaturedCard";
import SubgridContainer from "../../components/containers/SubgridContainer";
import SwiperContainer from "../../components/containers/SwiperContainer";
import SectionHeading from "../../components/headings/SectionHeading";
import useNavigateTab from "./hooks/useNavigateTab";

const BreadCrumbList = ({ listName, isLastIndex }) => {
  return (
    <li className="flex items-center text-gray-500">
      {listName}
      {!isLastIndex && <RiArrowLeftWideLine className="h-4 w-4" />}
    </li>
  );
};

const SizeCard = ({ size }) => {
  return (
    <div
      role="button"
      className="rounded-sm bg-gray-200 px-4 py-2 transition-colors hover:bg-[--primary-color] hover:text-white"
    >
      <p>{size}</p>
    </div>
  );
};

const ColorCard = ({ color }) => {
  return (
    <div
      role="button"
      className={`${color} h-5 w-5 rounded-full transition-all hover:border hover:border-black`}
    ></div>
  );
};

const ImageCard = () => {
  return (
    <div className="flex cursor-pointer items-center rounded-xl bg-gray-300 p-4 transition-colors hover:border-2 hover:border-[--primary-color] md:h-[300px] lg:h-[200px] lg:w-full">
      <img
        src="/assets/images/products/chic-shirt.png"
        alt=""
        className="h-full w-full object-contain"
      />
    </div>
  );
};

const DetailList = ({ title, detail }) => {
  return (
    <li>
      <p className="font-light">
        <span className="font-medium">{title}</span> {detail}
      </p>
    </li>
  );
};

const ProductView = () => {
  const breadCrumbList = ["Home", "Shop", "Men", "T-Shirts"];
  const { activeTab, setActiveTab } = useNavigateTab();
  return (
    <div className="col-span-4 grid grid-cols-subgrid gap-y-10 md:col-span-8 md:auto-rows-min xl:col-span-12">
      <ul className="col-span-4 flex gap-1 xl:col-span-12">
        {breadCrumbList.map((list, index) => {
          return (
            <BreadCrumbList
              key={index}
              listName={list}
              isLastIndex={breadCrumbList.length - 1 === index}
            />
          );
        })}
      </ul>
      <div className="col-span-4 grid auto-rows-min grid-cols-subgrid gap-y-[20px] md:col-span-8 xl:col-span-12">
        <div className="col-span-4 grid grid-cols-subgrid gap-[20px] md:col-span-8 lg:col-span-4 lg:col-start-1 xl:col-span-6">
          <div className="col-span-4 flex items-center rounded-xl bg-gray-300 p-6 md:col-span-8 md:h-[400px] md:justify-center lg:col-span-2 lg:col-start-3 lg:h-full xl:col-span-3 xl:col-start-4">
            <img
              src="/assets/images/products/chic-shirt.png"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
          <div className="col-span-4 flex items-start gap-[12px] md:col-span-8 md:justify-between lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:flex-col xl:col-span-3">
            <ImageCard />
            <ImageCard />
            <ImageCard />
          </div>
        </div>
        <div className="col-span-4 flex flex-col gap-[14px] md:col-span-8 lg:col-span-4 lg:col-start-5 lg:justify-between xl:col-span-6 xl:col-start-7">
          <div className="flex flex-col gap-1">
            <h4 className="font-roboto-flex text-2xl font-black uppercase md:text-3xl xl:text-4xl">
              CHIC Designed T Shirt
            </h4>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1">
                  <RiStarFill className="h-5 w-5 text-yellow-400" />
                  <RiStarFill className="h-5 w-5 text-yellow-400" />
                  <RiStarFill className="h-5 w-5 text-yellow-400" />
                  <RiStarFill className="h-5 w-5 text-yellow-400" />
                  <RiStarFill className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="text-gray-400">
                  <span className="font-medium text-black">5/</span>5
                </p>
              </div>
              <p className="text-gray-400">
                <span className="font-medium text-black">456</span> Ratings
              </p>
              <p className="text-gray-400">
                <span className="font-medium text-black">1.1k</span> Sold
              </p>
            </div>
          </div>
          <p className="text-2xl font-medium md:text-3xl">$330</p>
          <p className="font-light text-gray-800">
            Elevate your style with our Chic Designed T-Shirt, featuring a
            modern, minimalist design that’s perfect for any casual occasion.
            Crafted with premium fabric for comfort and durability, this tee
            effortlessly combines fashion and function.
          </p>
          <hr />
          <div className="flex flex-col gap-2">
            <p>Select a color</p>
            <div className="flex items-center gap-4">
              <ColorCard color={"bg-red-400"} />
              <ColorCard color={"bg-yellow-400"} />
              <ColorCard color={"bg-blue-400"} />
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <p>Select a size</p>
            <div className="flex flex-wrap items-center gap-4">
              <SizeCard size={"Small"} />
              <SizeCard size={"Medium"} />
              <SizeCard size={"Large"} />
              <SizeCard size={"X-large"} />
            </div>
          </div>
          <hr />
          <div className="flex items-center gap-2">
            <div className="flex gap-4 rounded-sm bg-gray-200 px-4 py-2">
              <RiSubtractFill className="cursor-pointer" />
              <p>1</p>
              <RiAddFill className="cursor-pointer" />
            </div>
            <p className="text-gray-500">pieces available</p>
          </div>
          <hr />
          <div className="flex items-center gap-4">
            <button className="flex basis-[50%] items-center justify-center gap-2 rounded-sm border border-[--primary-color] px-4 py-3 text-[--primary-color] transition-colors hover:bg-red-100 md:basis-[40%]">
              <RiShoppingBagLine className="h-5 w-5" />
              Add to Bag
            </button>
            <button className="basis-[50%] rounded-sm bg-[--primary-color] px-4 py-3 font-bold text-white transition-colors hover:bg-[--primary-color-hover] md:basis-[60%]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-4 grid gap-y-[24px] md:col-span-8 xl:col-span-12">
        <ul className="flex items-center border-b border-gray-200">
          <li
            role="button"
            onClick={() => setActiveTab("details")}
            className={`${activeTab === "details" ? "border-b border-[--primary-color] font-semibold text-[--primary-color]" : "transition-all hover:border-b hover:border-[--primary-color] hover:text-[--primary-color]"} w-full cursor-pointer text-center`}
          >
            <p className="">Details</p>
          </li>
          <li
            role="button"
            onClick={() => setActiveTab("reviews")}
            className={`${activeTab === "reviews" ? "border-b border-[--primary-color] font-semibold text-[--primary-color]" : "transition-all hover:border-b hover:border-[--primary-color] hover:text-[--primary-color]"} w-full cursor-pointer text-center`}
          >
            <p>Reviews</p>
          </li>
          <li
            role="button"
            onClick={() => setActiveTab("faq")}
            className={`${activeTab === "faq" ? "border-b border-[--primary-color] font-semibold text-[--primary-color]" : "transition-all hover:border-b hover:border-[--primary-color] hover:text-[--primary-color]"} w-full cursor-pointer text-center`}
          >
            <p>FAQ's</p>
          </li>
        </ul>
        <div className="flex flex-col gap-2 md:flex-row md:gap-10 xl:gap-32">
          <ul className="flex flex-col gap-2">
            <DetailList
              title={"Product Name:"}
              detail={"Chic Designed T-shirt"}
            />
            <DetailList title={"Material:"} detail={"100% Organic Cotton"} />
            <DetailList title={"Fit:"} detail={"Loose Type"} />
            <DetailList
              title={"Sleeves:"}
              detail={"Short sleeves with a ruffle detail"}
            />
            <DetailList title={"Available Stocks:"} detail={"987 pieces"} />
            <DetailList title={"Available Discounts:"} detail={"None"} />
            <DetailList
              title={"Care Instructions:"}
              detail={"Machine wash cold, tumble dry low, iron if needed"}
            />
          </ul>
          <ul className="flex flex-col gap-2">
            <DetailList
              title={"Soft & Breathable Cotton:"}
              detail={"Ideal for warm weather"}
            />
            <DetailList
              title={"Floral Print Design:"}
              detail={"Elegant and timeless"}
            />
            <DetailList
              title={"Versatile:"}
              detail={
                "Perfect for casual days, garden parties, or evening events"
              }
            />
            <DetailList
              title={"Eco-Friendly:"}
              detail={"Made from sustainably sourced materials"}
            />
          </ul>
        </div>
      </div>

      <SubgridContainer type={"section"} dynamicClass={"gap-y-[36px]"}>
        <SectionHeading
          text={"Complete the look"}
          dynamicClass={"text-center col-span-full"}
        />
        <SwiperContainer>
          <SwiperSlide>
            <FeaturedCard
              productName={"Cotton Crew Neck"}
              productPrice={"$170"}
              productImage={"/assets/images/products/crew-neck.png"}
              dynamicClass={"col-span-2"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedCard
              productName={"Vote Designed Shirt"}
              productPrice={"$150"}
              productImage={"/assets/images/products/vote-shirt.png"}
              dynamicClass={"col-span-2"}
              hasDiscount={true}
              productDiscountPrice={"$220"}
              productDiscountPercent={"32%"}
            />
          </SwiperSlide>
        </SwiperContainer>
        <OutlineButton
          text={"View All"}
          dynamicClass={
            "md:w-[50%] md:justify-self-center xl:w-[40%] col-span-full"
          }
        />
      </SubgridContainer>
    </div>
  );
};

export default ProductView;
