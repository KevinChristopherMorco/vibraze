import { RiStarFill } from "@remixicon/react";
import React from "react";

const FeaturedCard = ({
  productName,
  productPrice,
  productImage,
  dynamicClass,
  hasDiscount,
  productDiscountPrice,
  productDiscountPercent,
}) => {
  return (
    <div className={`${dynamicClass} group flex flex-col`}>
      <div className="flex h-[180px] w-full cursor-pointer items-center justify-center rounded-lg bg-[#E4E3E3] p-4 xl:h-[270px]">
        <img
          src={productImage}
          alt={productName}
          className="h-full w-full transition-all group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="w-fit cursor-pointer text-lg font-semibold text-black">
          {productName}
        </p>
        <div className="flex gap-1">
          <RiStarFill className="h-[16px] w-[16px] text-yellow-400" />
          <RiStarFill className="h-[16px] w-[16px] text-yellow-400" />
          <RiStarFill className="h-[16px] w-[16px] text-yellow-400" />
          <RiStarFill className="h-[16px] w-[16px] text-yellow-400" />
          <RiStarFill className="h-[16px] w-[16px] text-yellow-400" />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xl font-semibold text-black">{productPrice}</p>
          {hasDiscount && (
            <>
              <p className="text-xl font-light text-[#AAAAAA] line-through">
                {productDiscountPrice}
              </p>
              <p className="rounded-lg bg-[#FFE2E2] px-2 py-[2px] font-bold text-red-500">
                -{productDiscountPercent}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
