import React from "react";

const OutlineButton = ({ text, dynamicClass }) => {
  return (
    <button
      className={`${dynamicClass} cursor-pointer rounded-xl border border-gray-400 p-[12px] transition-colors hover:border-white hover:bg-[--primary-color] hover:text-white`}
    >
      {text}
    </button>
  );
};

export default OutlineButton;
