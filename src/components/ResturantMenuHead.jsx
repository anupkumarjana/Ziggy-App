import React from "react";
import { MdDirectionsBike } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

export default function ResturantMenuHead({ resData }) {
  return (
    <div
      className="flex justify-between items-center pb-4 border-b ">
      <div>
        <div className="flex flex-col gap-4 ">
          <h2 className="text-xl font-semibold text-zinc-700">
            {resData.name}
          </h2>
          <div className="text-sm text-slate-500 font-light">
            <h3>{resData.cuisines?.join(", ")}</h3>
            <h3>
              {resData.city},{resData.sla?.lastMileTravelString}
            </h3>
            <div className="mt-4 flex gap-1 items-center">
              <span>
                <MdDirectionsBike />
              </span>

              <span className="">{resData.sla?.lastMileTravelString}s</span>
              <span>
                <LuDot />
              </span>
              <span>{resData.sla?.deliveryTime} mins</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 border rounded-lg justify-center items-center p-2">
        <div className="flex gap-2 items-center text-green-600 text-sm border-b pb-2 font-medium">
          <span>
            <FaStar />
          </span>
          <span>{resData.avgRating}</span>
        </div>
        <span className="text-slate-700 font-extralight text-xs">
          {resData.totalRatingsString}
        </span>
      </div>
    </div>
  );
}
