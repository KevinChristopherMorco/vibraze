import React from "react";
import GridContainer from "../../components/containers/GridContainer";
import { RiArrowLeftWideLine } from "@remixicon/react";

const BreadCrumbList = ({ listName, isLastIndex }) => {
  return (
    <li className="flex items-center text-gray-500">
      {listName}
      {!isLastIndex && <RiArrowLeftWideLine className="h-4 w-4" />}
    </li>
  );
};

const ProductView = () => {
  const breadCrumbList = ["Home", "Shop", "Men", "T-Shirts"];
  return (
    <div className="col-span-4 grid grid-cols-subgrid">
      <ul className="col-span-4 flex items-center gap-1">
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
    </div>
  );
};

export default ProductView;
