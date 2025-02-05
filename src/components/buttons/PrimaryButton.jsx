import React from "react";

const PrimaryButton = ({ text, dynamicClass }) => {
  return (
    <button
      className={`${dynamicClass} cursor-pointer rounded-lg bg-[--primary-color] py-[10px] font-bold text-white transition-colors hover:bg-[--primary-color-hover]`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
