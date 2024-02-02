import React from "react";

export default function ShimmerMenu() {
  return (
    <div className="flex justify-between items-start  pb-6 border-b-2">
      <div>
        <div className="flex flex-col gap-6">
          <div className="w-4 bg-zinc-300"></div>
          <div className="text-normal text-zinc-700 font-medium py-1 w-56 h-4 bg-zinc-300"></div>
          <div className=" pb-4 w-10 h-4 bg-zinc-300"></div>
          <div className=" w-80 h-4 bg-zinc-300"></div>
        </div>
      </div>
      <div>
        <div className="w-28 h-28 rounded-lg bg-slate-300"></div>
      </div>
    </div>
  );
}
