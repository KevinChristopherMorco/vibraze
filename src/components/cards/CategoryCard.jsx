import React from "react";

const CategoryCard = ({ cardText, cardImage, dynamicClass }) => {
  return (
    <div
      className={`${dynamicClass} group col-span-4 grid h-[250px] w-full cursor-pointer grid-cols-2 rounded-lg bg-[#E4E3E3] bg-no-repeat transition-all hover:bg-[--primary-color] xl:h-auto bg-[url('${cardImage}')] bg-cover px-[18px] py-[18px]`}
    >
      <p className="text-[2rem] font-bold uppercase text-black group-hover:text-white">
        {cardText}
      </p>
    </div>
  );
};

export default CategoryCard;
