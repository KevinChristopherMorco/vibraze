import { RiStarFill, RiVerifiedBadgeFill } from "@remixicon/react";
import React from "react";

const ReviewCard = ({ cardName, cardReview, cardDate }) => {
  return (
    <div className="flex flex-col gap-6 rounded-lg border border-gray-300 p-[20px]">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <p className="text-2xl font-medium">{cardName}</p>
          <RiVerifiedBadgeFill className="h-5 w-5 text-green-400" />
        </div>
        <div className="flex items-center gap-1">
          <RiStarFill className="h-5 w-5 text-yellow-400" />
          <RiStarFill className="h-5 w-5 text-yellow-400" />
          <RiStarFill className="h-5 w-5 text-yellow-400" />
          <RiStarFill className="h-5 w-5 text-yellow-400" />
          <RiStarFill className="h-5 w-5 text-yellow-400" />
        </div>
      </div>
      <p className="font-extralight">"{cardReview}"</p>
      <p className="font-medium">Posted on {cardDate}</p>
    </div>
  );
};

export default ReviewCard;
