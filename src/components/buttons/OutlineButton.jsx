import React from "react";
import { Link } from "react-router-dom";

const OutlineButton = ({ text, dynamicClass, isLink, linkPath }) => {
  return (
    <>
      {isLink ? (
        <Link
          to={linkPath}
          className={`${dynamicClass} flex cursor-pointer justify-center rounded-xl border border-gray-400 p-[12px] transition-colors hover:border-white hover:bg-[--primary-color] hover:text-white`}
        >
          {text}
        </Link>
      ) : (
        <button
          className={`${dynamicClass} cursor-pointer rounded-xl border border-gray-400 p-[12px] transition-colors hover:border-white hover:bg-[--primary-color] hover:text-white`}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default OutlineButton;
