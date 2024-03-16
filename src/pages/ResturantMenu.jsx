import React from "react";
import ResturantMenuHead from "../components/ResturantMenuHead";
import ResturantMenuBody from "../components/ResturantMenuBody";
import { useParams } from "react-router-dom";
import ShimmerMenu from "../components/ShimmerMenu";
import useReataurantMenuHead from "../utils/useRestaurantMenuHead";
import useReataurantMenu from "../utils/useReataurantMenu";

export default function ResturantMenu() {
  const { restaurantId } = useParams();

  const resData = useReataurantMenuHead(restaurantId);
  const menuData = useReataurantMenu(restaurantId);
  if (!resData || menuData.length === 0) {
    return (
      <div className="flex flex-col gap-10 mt-36 lg:px-80 px-4">
        <ShimmerMenu />
        <ShimmerMenu />
        <ShimmerMenu />
        <ShimmerMenu />
        <ShimmerMenu />
        <ShimmerMenu />
        <ShimmerMenu />
        <ShimmerMenu />
        <ShimmerMenu />
        <ShimmerMenu />
        <ShimmerMenu />
        <ShimmerMenu />
        <ShimmerMenu />
        <ShimmerMenu />
        <ShimmerMenu />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 lg:px-80 px-4 text-[#111111] z-[99999] mt-36">
      <ResturantMenuHead resData={resData} key={resData.id} />
      {menuData.map((data) => (
        <ResturantMenuBody data={data} key={data?.card?.info?.id} />
      ))}
    </div>
  );
}
