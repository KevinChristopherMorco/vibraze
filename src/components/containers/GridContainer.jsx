import React from "react";

const GridContainer = ({ children, dynamicClass }) => {
  return (
    <div
      className={`${dynamicClass} grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12`}
    >
      {children}
    </div>
  );
};

export default GridContainer;
