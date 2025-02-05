import React from "react";

const SectionHeading = ({ text, dynamicClass }) => {
  return (
    <h1
      className={`${dynamicClass} font-roboto-flex text-4xl font-black uppercase text-black`}
    >
      {text}
    </h1>
  );
};

export default SectionHeading;
