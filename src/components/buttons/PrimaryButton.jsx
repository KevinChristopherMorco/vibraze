import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ text, dynamicClass, isLink, linkPath }) => {
  return (
    <>
      {isLink ? (
        <Link
          to={linkPath}
          className={`${dynamicClass} flex cursor-pointer justify-center rounded-lg bg-[--primary-color] py-[10px] font-bold text-white transition-colors hover:bg-[--primary-color-hover]`}
        >
          {text}
        </Link>
      ) : (
        <button
          className={`${dynamicClass} cursor-pointer rounded-lg bg-[--primary-color] py-[10px] font-bold text-white transition-colors hover:bg-[--primary-color-hover]`}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default PrimaryButton;
