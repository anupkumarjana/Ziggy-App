import React from "react";
import cat from "../assets/smile-cat.gif";

export default function () {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-10 w-full h-[50vh] bg-slate-900">
      <img src={cat} alt="dancing-cat" className="w-20"/>
      <span className="text-xl text-slate-50 text-bold">
        Looking great food for you!!
      </span>
    </div>
  );
}
