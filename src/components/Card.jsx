import React from "react";


export default function Card({
  id,
  cloudinaryImageId,
  name,
  cuisines,
  costForTwo,
}) {
  return (
    <div
      key={id}
      className="w-[200px] h-[300px] border rounded p-2 hover:shadow-2xl"
    >
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt=""
      />
      <div className="mt-4 flex flex-col gap-2">
        <h3>{name}</h3>
        <h4>{cuisines[0]}</h4>
        <h4>{costForTwo / 100} for two</h4>
      </div>
    </div>
  );
}
