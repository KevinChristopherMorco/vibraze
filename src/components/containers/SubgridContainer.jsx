import React from "react";

const SubgridContainer = ({ children, type, dynamicClass }) => {
  return (
    <>
      {type === "div" && (
        <div
          className={`${dynamicClass ? dynamicClass : ""} col-span-full grid grid-cols-subgrid`}
        >
          {children}
        </div>
      )}
      {type === "section" && (
        <section
          className={`${dynamicClass ? dynamicClass : ""} col-span-full grid grid-cols-subgrid`}
        >
          {children}
        </section>
      )}
    </>
  );
};

export default SubgridContainer;
