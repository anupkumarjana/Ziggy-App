import React, { useState } from "react";
import ResturantMenuHead from "../components/ResturantMenuHead";
import ResturantMenuBody from "../components/ResturantMenuBody";
import { useParams } from "react-router-dom";
import ShimmerMenu from "../components/ShimmerMenu";
import useReataurantMenuHead from "../utils/useRestaurantMenuHead";
import useReataurantMenuCategory from "../utils/useRestauranrMenuCategory";
import { FaAngleDown } from "react-icons/fa6";

export default function ResturantMenu() {
  const [expanded, setExpanded] = useState(false);
  const { restaurantId } = useParams();

  const resData = useReataurantMenuHead(restaurantId);
  const restauranrMenuCategory = useReataurantMenuCategory(restaurantId);

  function handleClick() {
    setExpanded(!expanded);
  }

  if (!resData || restauranrMenuCategory.length === 0) {
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
      <div className="flex flex-col gap-2">
        {restauranrMenuCategory.map((menuCategory) => (
          <div key={menuCategory.card.card.title} className={`cursor-pointer`}>
            {console.log(menuCategory.card.card.title)}
            <div
              className="flex justify-between py-2 shadow-sm"
              onClick={handleClick}
            >
              <span id="menuCetgory">
                {menuCategory.card.card.title} (
                {menuCategory.card.card.itemCards.length})
              </span>
              <span>
                <FaAngleDown />
              </span>
            </div>
            <div className={`cursor-pointer`}>
              {menuCategory.card.card.itemCards.map((menuCard) => (
                <div className="mt-4">
                  {expanded && (
                    <ResturantMenuBody
                      data={menuCard}
                      key={menuCard?.card?.info?.id}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
