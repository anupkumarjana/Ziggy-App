import React from "react";
import Search from "../components/Search";

export default function SearchPage() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-10 lg:px-32 px-4 text-[#111111] z-[99999]">
      <Search/>
    </div>
  );
}
