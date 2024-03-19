import React from "react";
import veg from "../assets/veg.png";
import nonveg from "../assets/nonveg.png";

export default function ResturantMenuBody({ data }) {
  return (
    <>
      <div className="flex justify-between items-start cursor-pointer pb-6 border-b-2">
        <div>
          <div className="flex flex-col">
            {data?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
              <img className="w-4" src={veg} alt="veg" />
            ) : (
              <img className="w-4" src={nonveg} alt="non-veg" />
            )}
            <h3 className="text-normal text-zinc-700 font-medium py-1">
              {data?.card.info.name}
            </h3>
            <h3 className="text-xs text-zinc-700 pb-4">
              ₹ {parseInt(data?.card?.info?.price) / 100}
            </h3>{" "}
            <h3 className="text-wrap max-w-[30rem] text-xs text-zinc-500 font-light">
              {data?.card?.info?.description}
            </h3>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-28 h-28 rounded-lg"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${data?.card?.info?.imageId}`}
            alt=""
          />
          <button className=" absolute left-6 bottom-[-10px] py-1 px-4 border rounded text-green-700 bg-white text-xs font-semibold shadow-lg">
            ADD
          </button>
        </div>
      </div>
    </>
  );
}
