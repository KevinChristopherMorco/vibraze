import React from "react";
import {
  RiAddFill,
  RiArrowLeftWideLine,
  RiShoppingBagLine,
  RiStarFill,
  RiSubtractFill,
} from "@remixicon/react";

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
    <div role="button" className="rounded-sm bg-gray-200 px-4 py-2">
      <p>{size}</p>
    </div>
  );
};

const ProductView = () => {
  const breadCrumbList = ["Home", "Shop", "Men", "T-Shirts"];
  return (
    <div className="col-span-4 grid grid-cols-subgrid md:col-span-8 md:auto-rows-min xl:col-span-12">
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
            <div className="flex items-center rounded-xl bg-gray-300 p-4 md:h-[300px] lg:h-[200px] lg:w-full">
              <img
                src="/assets/images/products/chic-shirt.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex items-center rounded-xl bg-gray-300 p-4 md:h-[300px] lg:h-[200px] lg:w-full">
              <img
                src="/assets/images/products/chic-shirt.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex items-center rounded-xl bg-gray-300 p-4 md:h-[300px] lg:h-[200px] lg:w-full">
              <img
                src="/assets/images/products/chic-shirt.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="col-span-4 flex flex-col gap-[14px] md:col-span-8 lg:col-span-4 lg:col-start-5 lg:justify-between xl:col-span-6 xl:col-start-7">
          <div className="flex flex-col">
            <h4 className="font-roboto-flex text-2xl font-black uppercase md:text-3xl">
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
          <p className="text-2xl font-medium">$330</p>
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
              <div className="h-5 w-5 rounded-full bg-red-400"></div>
              <div className="h-5 w-5 rounded-full bg-yellow-400"></div>
              <div className="h-5 w-5 rounded-full bg-blue-400"></div>
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
              <RiSubtractFill />
              <p>1</p>
              <RiAddFill />
            </div>
            <p className="text-gray-500">pieces available</p>
          </div>
          <hr />
          <div className="flex items-center gap-4">
            <button className="flex basis-[50%] items-center justify-center gap-2 rounded-sm border border-[--primary-color] px-4 py-3 text-[--primary-color] md:basis-[40%]">
              <RiShoppingBagLine className="h-5 w-5" />
              Add to Bag
            </button>
            <button className="basis-[50%] rounded-sm bg-[--primary-color] px-4 py-3 font-bold text-white md:basis-[60%]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
