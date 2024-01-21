import React from "react";
import { BsDot } from "react-icons/bs";
import star from "../assets/homepage/star.svg";

export default function RecomendedResturant({ resturant }) {
  return (
   <>
    <div className="flex flex-col justify-start items-center flex-wrap w-56 hover:scale-95 transition duration-500 cursor-pointer">
      <div className="relative w-full">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resturant.info.cloudinaryImageId}`}
          alt="category-img"
          className="w-full h-40 object-cover relative rounded-lg"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 ">
          <div className="h-full bg-gradient-to-t from-black to-transparent rounded-b-lg"></div>
        </div>
        <span className="absolute left-2 bottom-2 text-xl font-extrabold text-white shadow-lg b">
          {resturant.info.aggregatedDiscountInfoV3
            ? resturant.info.aggregatedDiscountInfoV3.header +
              " " +
              resturant.info.aggregatedDiscountInfoV3.subHeader
            : " "}
        </span>
      </div>{" "}
      <div className="flex flex-col justify-start w-full pt-4 px-2 text-zinc-800">
        <h3 className="overflow-hidden inline-block whitespace-nowrap max-w-72 text-ellipsis text-lg font-semibold">
          {resturant.info.name}
        </h3>
        <div className="flex gap-1 items-center font-medium">
          <div className="flex items-center gap-1">
            <img src={star} alt="" />
            <span>{resturant.info.avgRating}</span>
          </div>

          <span>
            <BsDot />
          </span>
          <span>{resturant.info.sla.deliveryTime} mins</span>
        </div>
        <span className="overflow-hidden inline-block whitespace-nowrap max-w-72 text-ellipsis text-zinc-600">
          {resturant.info.cuisines.join(", ")}
        </span>
        <span className=" text-zinc-600">{resturant.info.locality}</span>
      </div>
    </div>
    </>
  );

}
