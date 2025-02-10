import React from "react";

const Input = ({ placeholder, hasIcon, icon }) => {
  return (
    <div className={hasIcon ? "relative flex items-center" : ""}>
      <input
        className="w-full rounded-md border border-gray-400 p-3 text-sm"
        placeholder={placeholder}
      />
      {hasIcon && icon}
    </div>
  );
};

export default Input;
