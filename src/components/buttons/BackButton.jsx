import { RiArrowLeftLine } from "@remixicon/react";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const BackButton = ({ dynamicClass }) => {
  const navigate = useNavigate();
  return (
    <Link
      onClick={() => navigate(-1)}
      className={`${dynamicClass} col-span-4 flex h-fit items-center gap-2 text-sm`}
    >
      <RiArrowLeftLine className="h-5 w-5" />
      <p className="leading-4">Back</p>
    </Link>
  );
};

export default BackButton;
